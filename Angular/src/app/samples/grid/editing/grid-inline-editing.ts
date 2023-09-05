import { Component, ElementRef, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { html } from 'integralui-web/external/lit-element';

import 'integralui-web/components/integralui.checkbox';
import 'integralui-web/components/integralui.datepicker';
import 'integralui-web/components/integralui.grid';
import IntegralUICommonService from 'integralui-web/services/integralui.common.service';
import { IntegralUIEditMode, IntegralUITheme } from 'integralui-web/components/integralui.enums';
import { iuiGridInlineEditingStyle } from './grid-inline-editing.style';

// Import editor components
import 'integralui-web/components/integralui.datepicker';
import 'integralui-web/components/integralui.select';

@Component({
    selector: '',
    templateUrl: './grid-inline-editing.html',
    styleUrls: ['./grid-inline-editing.css']
})
export class GridInlineEditing {
    @ViewChild('grid', { static: false }) grid!: ElementRef;

    private _commonService!: IntegralUICommonService;

    public columns: Array<any> = [];
    public ctrlSize: any = { height: 500 };
    public currentEditMode: IntegralUIEditMode = IntegralUIEditMode.Inline;
    public currentResourcePath: string = 'assets/icons';
    public currentTheme: IntegralUITheme = IntegralUITheme.Office;
    public gridStyle: any = iuiGridInlineEditingStyle;
    public isValidationInUse: boolean = true;
    public rows: Array<any> = [];

    constructor(private http: HttpClient){
        this._commonService = new IntegralUICommonService();
    }

    ngAfterViewInit(){
        this.grid.nativeElement.headerTemplate = this.currentHeaderTemplate;

        // Load data into the Grid from a JSON file
        this.loadFromJSON();
    }

    //
    // Methods -----------------------------------------------------------------------------------
    //

    // Data --------------------------------------------------------------------------------------


    convertJSONData(data: any){
        /////////////////////
        // Create columns
        /////////////////////

        // Load other columns from the data source
        data.columns.forEach((obj: any) => {
            let column = Object.assign({ headerAlignment: 'center' }, obj);

            this.columns.push(column);
        });


        /////////////////////
        // Create Rows
        /////////////////////

        data.rows.forEach((obj: any) => {
            // Copy all fields from JSON data and add a new field 'cells'
            let row = Object.assign({ cells: [] }, obj);

            // Loop through all columns and create cells accordingly
            data.columns.forEach((column: any) => {
                let field = column.title;

                // Delete all fields that will be included in cells
                delete row[field];

                // Each row should have a cell for check box column, otherwise only add cells for existing fields
                let cell: any = {
                    cid: column.id,
                    colName: field
                }

                if (obj[field] !== undefined){
                    if (this._commonService.isString(obj[field])){
                        let fieldValue = Date.parse(obj[field]);
                        if (obj[field].slice(-1) === 'Z' && !isNaN(fieldValue))
                            cell.value = new Date(fieldValue);
                        else
                            cell.value = obj[field];
                    }
                    else
                        cell.value = obj[field];
                }
                // Caluclate the Total value: sum of (Quantity * Price) + Shipping Cost
                else if (column.id === 11)
                    cell.value = obj["Quantity"] * obj["Price"] + obj["Shipping Cost"];

                row.cells.push(cell);
            });
            
            this.rows.push(row);
        });
    }

    private loadFromJSON(){
        let self = this;

        // Use HTTP service to get data from the specified JSON file
        self.http.get("./assets/grid-inline-editing-data.json").subscribe((data: any) => {
            // Suspend the grid layout from updates, to increase performance
            self.grid.nativeElement.suspendLayout();

            // Load data into the grid
            self.convertJSONData(data);
    
            // Resume and update the grid layout
            self.grid.nativeElement.resumeLayout();
        });
    }

    useValidationChanged(e: any){
        this.isValidationInUse = e.detail.checked;
    }

    // Editing -----------------------------------------------------------------------------------

    cellValueChanged(e: any){
        // Update the Total value when Quantity or Price changes
        if (e.detail.cell.cid === 6 || e.detail.cell.cid === 7){
            let quantityCell = this.getCellById(e.detail.row, 6);
            let priceCell = this.getCellById(e.detail.row, 7);
            let totalCell = this.getCellById(e.detail.row, 11);

            if (quantityCell && priceCell && totalCell)
                totalCell.value = quantityCell.value * priceCell.value;
        }
    }

    getCellById(row: any, id: any){
        let filtered = row.cells.filter((cell: any) => cell.cid === id);

        return filtered.length > 0 ? filtered[0] : null;
    }

    gridDataInvalid(e: any){
        alert("Some data fields are invalid!");
    }

    // Templates ---------------------------------------------------------------------------------

    currentHeaderTemplate = (column: any) => { 
        return html`<span class="header-label">${column.title}</span>`;
    };
}
