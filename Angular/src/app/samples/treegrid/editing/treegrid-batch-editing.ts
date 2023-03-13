import { Component, ElementRef, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { html } from 'integralui-web/external/lit-element';

import 'integralui-web/components/integralui.button';
import 'integralui-web/components/integralui.treegrid';
import IntegralUICommonService from 'integralui-web/services/integralui.common.service';
import { IntegralUIEditMode, IntegralUITheme, IntegralUIVisibility } from 'integralui-web/components/integralui.enums';
import { iuiTreeGridBatchEditingStyle } from './treegrid-batch-editing.style';

@Component({
    selector: '',
    templateUrl: './treegrid-batch-editing.html',
    styleUrls: ['./treegrid-batch-editing.css']
})
export class TreeGridBatchEditing {
    @ViewChild('treegrid', { static: false }) treegrid!: ElementRef;

    private _commonService!: IntegralUICommonService;

    public columns: Array<any> = [];
    public ctrlSize: any = { height: 400 };
    public currentEditMode: IntegralUIEditMode = IntegralUIEditMode.Batch;
    public currentResourcePath: string = 'assets/icons';
    public currentTheme: IntegralUITheme = IntegralUITheme.Office;
    public gridStyle: any = iuiTreeGridBatchEditingStyle;
    public rows: Array<any> = [];

    constructor(private http: HttpClient){
        this._commonService = new IntegralUICommonService();
    }

    ngAfterViewInit(){
        this.treegrid.nativeElement.headerTemplate = this.currentHeaderTemplate;

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

            column.editorSetting = { 
                visible:IntegralUIVisibility.None
            }

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
        self.http.get("./assets/treegrid-batch-editing-data.json").subscribe((data: any) => {
            // Suspend the grid layout from updates, to increase performance
            self.treegrid.nativeElement.suspendLayout();

            // Load data into the grid
            self.convertJSONData(data);
    
            // Resume and update the grid layout
            self.treegrid.nativeElement.resumeLayout();
        });
    }

    // Editing -----------------------------------------------------------------------------------

    gridDataChanged(e: any){
        // Update the Total value when Quantity or Price changes
        if (e.detail.data){
            e.detail.data.forEach((row: any) => {
                let quantityCell = this.getCellById(row, 6);
                let priceCell = this.getCellById(row, 7);
                let shippingCostCell = this.getCellById(row, 9);
                let totalCell = this.getCellById(row, 11);

                if (quantityCell && priceCell && shippingCostCell && totalCell)
                    totalCell.value = quantityCell.value * priceCell.value + shippingCostCell.value;
            });
        }
    }

    getCellById(row: any, id: any){
        let filtered = row.cells.filter((cell: any) => cell.cid === id);

        return filtered.length > 0 ? filtered[0] : null;
    }

    saveChanges(keep?: boolean){
        // Calling endEdit will complete the editing process
        // If called with true, it will save any changes
        this.treegrid.nativeElement.endEdit(keep);
    }

    // Templates ---------------------------------------------------------------------------------

    currentHeaderTemplate = (column: any) => { 
        return html`<span class="header-label">${column.title}</span>`;
    };
}