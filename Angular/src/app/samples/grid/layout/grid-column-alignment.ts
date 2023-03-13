import { Component, ElementRef, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { html } from 'integralui-web/external/lit-element';

import 'integralui-web/components/integralui.grid';
import IntegralUICommonService from 'integralui-web/services/integralui.common.service';
import { IntegralUITheme } from 'integralui-web/components/integralui.enums';

@Component({
    selector: '',
    templateUrl: './grid-column-alignment.html',
    styleUrls: ['./grid-column-alignment.css']
})
export class GridColumnAlignment {
    @ViewChild('grid', { static: false }) grid!: ElementRef;

    private _commonService!: IntegralUICommonService;

    public columns: Array<any> = [];
    public ctrlSize: any = { height: 400 };
    public currentResourcePath: string = 'assets/icons';
    public currentTheme: IntegralUITheme = IntegralUITheme.Office;
    public rows: Array<any> = [];
    public selectOptions: Array<any> = [];
    
    public contentAlignmentIndex: number = -1;
    public footerAlignmentIndex: number = -1;
    public headerAlignmentIndex: number = -1;

    private alignmentValues: Array<string> = ['left', 'center', 'right'];

    constructor(private http: HttpClient){
        this._commonService = new IntegralUICommonService();

        this.columns = [
            { id: 1, headerText: "Order ID", headerAlignment: "center", contentAlignment: "center" },
            { id: 2, headerText: "Customer", width: 200 },
            { id: 4, headerText: "Ship Date", headerAlignment: "center", contentAlignment: "center", width: 120 },
            { id: 5, headerText: "Quantity", headerAlignment: "center", contentAlignment: "right", width: 80 },
            { 
                id: 6, 
                headerText: "Price", 
                headerAlignment: "center", 
                contentAlignment: "right", 
                footerText: "Total", 
                footerAlignment: "right",
                format: { 
                    options: { 
                        style: "currency", 
                        currency: "USD"
                    }
                },
                width: 90
            },
            { 
                id: 7, 
                headerText: "Total", 
                headerAlignment: "center", 
                contentAlignment: "right",
                footerValue: 0, 
                footerAlignment: "right",
                format: { 
                    options: { 
                        style: "currency", 
                        currency: "USD"
                    }
                },
                width: 120
            }
        ];

        // Create a dropdown list from all columns
        this.columns.forEach(column => {
            let item = { 
                id: column.id, 
                text: column.headerText
            }

            this.selectOptions.push(item);
        });
    }

    ngAfterViewInit(){
        // Load data into the Grid from a JSON file
        this.loadFromJSON();
    }

    // Data --------------------------------------------------------------------------------------

    convertJSONData(data: any){
        let result: Array<any> = [];

        data.forEach((obj: any) => {
            // Copy all fields from JSON data and add a new field 'cells'
            let row = Object.assign({ cells: [] }, obj);

            // Loop through all columns and create cells accordingly
            this.columns.forEach(column => {
                let field = column.headerText;

                // Delete all fields that will be included in cells, except for the field 'Title'
                delete row[field];

                let cell: any = {
                    cid: column.id,
                    colName: field
                }

                if (obj[field] !== undefined){
                    if (this._commonService.isString(obj[field]))
                        cell.text = obj[field];
                    else
                        cell.value = obj[field];
                }
                else if (column.id === 7) // Total Column
                    cell.value = obj["Quantity"] * obj["Price"];

                row.cells.push(cell);
            });

            // If there are child rows, convert the JSON data for them
            row.rows = this.convertJSONData(obj.rows || []);

            result.push(row);
        });

        return result;
    }

    private loadFromJSON(){
        let self = this;

        // Use HTTP service to get data from the specified JSON file
        self.http.get("./assets/grid-column-alignment-data.json").subscribe((data: any) => {
            // Suspend the grid layout from updates, to increase performance
            self.grid.nativeElement.suspendLayout();

            // Load data into the grid
            self.grid.nativeElement.loadData(self.convertJSONData(data));
        
            // Update Total Value based on Quantity and Prices
            self.updateTotalValue();

            // Resume and update the grid layout
            self.grid.nativeElement.resumeLayout();
        });
    }

    // Events ------------------------------------------------------------------------------------

    onHeaderAlignmentChecked(e: any){
        if (this.grid.nativeElement.selectedColumn)
            this.grid.nativeElement.selectedColumn.headerAlignment = this.getAlignmentValue(e.detail.index);
    }

    onContentAlignmentChecked(e: any){
        if (this.grid.nativeElement.selectedColumn){
            this.grid.nativeElement.selectedColumn.contentAlignment = this.getAlignmentValue(e.detail.index);
            this.grid.nativeElement.updateView();
        }
   }

    onFooterAlignmentChecked(e: any){
        if (this.grid.nativeElement.selectedColumn)
            this.grid.nativeElement.selectedColumn.footerAlignment = this.getAlignmentValue(e.detail.index);
    }

    onColumnSelectionChanged(e: any){
        if (e.detail.item){
            let column = this.grid.nativeElement.getColumnById(e.detail.item.id);
            this.grid.nativeElement.selectedColumn = column;

            this.contentAlignmentIndex = this.getIndexFromAlignment(column.contentAlignment);
            this.footerAlignmentIndex = this.getIndexFromAlignment(column.footerAlignment);
            this.headerAlignmentIndex = this.getIndexFromAlignment(column.headerAlignment);
        }
    } 

    // General -----------------------------------------------------------------------------------

    getAlignmentValue(index: number){
        return index >= 0 ? this.alignmentValues[index] : 'left';
    }

    getCellById(row: any, id: any){
        let filtered = row.cells.filter((cell: any) => cell.cid === id);

        return filtered.length > 0 ? filtered[0] : null;
    }

    getIndexFromAlignment(value: string){
        return value ? this.alignmentValues.indexOf(value) : 0;
    }

    updateTotalValue(){
        let sumTotal = 0;

        this.rows.forEach(row => {
            let quantityCell = this.getCellById(row, 5);
            let priceCell = this.getCellById(row, 6);
            let totalCell = this.getCellById(row, 7);

            let total = quantityCell.value * priceCell.value
            totalCell.value = total;

            sumTotal += total;
        });

        // Show Total value in the footer
        let column = this.grid.nativeElement.getColumnById(7);
        if (column)
            column.footerValue = sumTotal;
    }

    // Templates ---------------------------------------------------------------------------------

    currentFooterTemplate = (column: any) => { 
        switch (column.id){
            case 6: // Total description
                return html`<strong>${column.footerText}</strong>`;

            case 7: // Total value
                return html`<strong>${this.getFooterDisplayValue(column)}</strong>`;
        }

        return null;
    };

    
    getFooterDisplayValue(column: any){
        return this._commonService.convertValue(column.footerValue, column.format);
    }
}
