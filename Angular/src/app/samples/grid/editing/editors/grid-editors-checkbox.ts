import { Component, ElementRef, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { html } from 'integralui-web/external/lit-element';

import 'integralui-web/components/integralui.checkbox';
import 'integralui-web/components/integralui.grid';
import 'integralui-web/components/integralui.rating';
import IntegralUICommonService from 'integralui-web/services/integralui.common.service';
import { IntegralUICheckState, IntegralUIEditorType, IntegralUITheme } from 'integralui-web/components/integralui.enums';
import { iuiGridEditorsCheckBoxStyle } from './grid-editors-checkbox.style';

@Component({
    selector: '',
    templateUrl: './grid-editors-checkbox.html',
    styleUrls: ['./grid-editors-checkbox.css']
})
export class GridEditorsCheckBox {
    @ViewChild('grid', { static: false }) grid!: ElementRef;

    private _commonService!: IntegralUICommonService;

    // Grid
    public columns: Array<any> = [];
    public ctrlSize: any = { width: 800, height: 400 };
    public currentResourcePath: string = 'assets/icons';
    public currentTheme: IntegralUITheme = IntegralUITheme.Office;
    public customStyle: any = iuiGridEditorsCheckBoxStyle;
    public rows: Array<any> = [];

    // Toaster
    public currentPositionAdjustment: any = { left: -15 }
    public currentToastSize: any = { width: 350, height: 70 }


    constructor(private http: HttpClient){
        this._commonService = new IntegralUICommonService();

        this.columns = [
            { id: 1, editorType: IntegralUIEditorType.CheckBox, fixedWidth: true, headerAlignment: "center", width: 30 },
            { id: 2, headerText: "Title", width: 300 },
            { id: 3, headerText: "Year", headerAlignment: "center", contentAlignment: "center", width: 70 },
            { 
                id: 4, 
                headerText: "Rating", 
                headerAlignment: "center", 
                contentAlignment: "center", 
                editorType: IntegralUIEditorType.Rating,
                editorSettings: {
                    editOnFocus: false
                },
                width: 150, 
                fixedWidth: true
            },
            { id: 5, headerText: "Released", headerAlignment: "center", contentAlignment: "center", width: 180 }
        ];
    }

    ngAfterViewInit(){
        this.grid.nativeElement.headerTemplate = this.currentHeaderTemplate;

        // Load data into the Grid from a JSON file
        this.loadFromJSON();
    }

    // Data ----------------------------------------------------------------------------------

    convertJSONData(data: any){
        this.rows = [];

        data.forEach((obj: any) => {
            // Copy all fields from JSON data and add a new field 'cells'
            let row = Object.assign({ cells: [] }, obj);

            // Loop through all columns and create cells accordingly
            this.columns.forEach((column: any) => {
                let field = column.id === 1 ? 'isChecked' : column.headerText;

                // Delete all fields that will be included in cells, except for the field 'Title'
                if (column.headerText !== 'Title')
                    delete row[field];

                // Each row should have a cell for check box column, otherwise only add cells for existing fields
                if (column.id === 1 || obj[field] !== undefined){
                    let cell: any = {
                        cid: column.id,
                        colName: field
                    }

                    if (this._commonService.isString(obj[field]))
                        cell.text = obj[field];
                    else
                        cell.value = obj[field];

                    row.cells.push(cell);
                }
            });

            this.rows.push(row);
        });

        this.updateColumnCheckValue(this.rows, 1);
    }
    
    private loadFromJSON(){
        let self = this;

        // Use HTTP service to get data from the specified JSON file
        self.http.get("./assets/grid-editors-checkbox-data.json").subscribe((data: any) => {
            // Suspend the grid layout from updates, to increase performance
            self.grid.nativeElement.suspendLayout();

            // Load data into the grid
            self.convertJSONData(data);
    
            // Resume and update the grid layout
            self.grid.nativeElement.resumeLayout();
        });
    }

    updateColumnCheckValue(listRows: Array<any>, id: any){
        let column = this.grid.nativeElement.getColumnById(id);
        if (column){
            let filtered = listRows.filter(row => {
                let cell = this.getCellWithCheckBox(row.cells, column.id);
                return cell ? cell.value : false;
            });

            // Column checkbox value has three states
            // Depending on how many rows are checked, the column checkbox value can be either
            // Checked, Indeterminate or Unchecked
            if (filtered.length === listRows.length)
                column.value = IntegralUICheckState.Checked;
            else if (filtered.length > 0)
                column.value = IntegralUICheckState.Indeterminate;
            else
                column.value = IntegralUICheckState.Unchecked;

            this.grid.nativeElement.refresh();
        }
    }

    // Events ------------------------------------------------------------------------------------

    cellValueChanged(e: any){
        // Update the checkbox in column header, based on check box values in all rows
        // Only handle if the value changes for the cell with a checkbox
        if (e.detail.cell.cid === 1)
            this.updateColumnCheckValue(this.rows, e.detail.cell.cid);
    }

    // General -------------------------------------------------------------------------------

    columnCheckStateChanged(e: any, column: any){
        if (column){
            column.value = e.detail.checkState;

            // Update checkbox value for all rows, based on column checkbox value
            if (column.value !== IntegralUICheckState.Indeterminate)
                this.rows.forEach((row: any) => {
                    let cell = this.getCellWithCheckBox(row.cells, column.id);
                    if (cell)
                        cell.value = column.value === IntegralUICheckState.Checked ? true : false;
                });

                this.grid.nativeElement.updateLayout();
        }
    }

    getCellWithCheckBox(list: Array<any>, id: any){
        return this.grid.nativeElement.getCellByColumnId(list, id);
    }

    // Templates -----------------------------------------------------------------------------

    currentHeaderTemplate = (column: any) => { 
        if (column.id === 1)
            return html`<iui-checkbox 
                    .allowFocus=${false}
                    .checkState=${column.value}
                    .customStyle=${iuiGridEditorsCheckBoxStyle} 
                    .resourcePath=${this.currentResourcePath} 
                    .threeState=${true} 
                    @checkStateChanged=${(e: any) => this.columnCheckStateChanged(e, column)}
                ></iui-checkbox>
            `;

        return null;
    };
}
