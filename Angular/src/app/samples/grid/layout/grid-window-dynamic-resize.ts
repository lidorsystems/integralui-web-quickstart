import { Component, ElementRef, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { html } from 'integralui-web/external/lit-element';

import 'integralui-web/components/integralui.grid';
import 'integralui-web/components/integralui.window';
import IntegralUICommonService from 'integralui-web/services/integralui.common.service';
import { IntegralUIEditMode, IntegralUITheme, IntegralUIWindowState } from 'integralui-web/components/integralui.enums';

import 'integralui-web/components/integralui.button';
import 'integralui-web/components/integralui.datepicker';
import 'integralui-web/components/integralui.select';

@Component({
    selector: '',
    templateUrl: './grid-window-dynamic-resize.html',
    styleUrls: ['./grid-window-dynamic-resize.css']
})
export class GridDynamicResizeWindow {
    @ViewChild('grid', { static: false }) grid!: ElementRef;
    @ViewChild('winBlock', { static: false }) winBlock!: ElementRef;
    @ViewChild('winCtrl', { static: false }) winCtrl!: ElementRef;

    private _commonService!: IntegralUICommonService;

    public columns: Array<any> = [];
    public currentEditMode: IntegralUIEditMode = IntegralUIEditMode.Form;
    public currentResourcePath: string = 'assets/icons';
    public currentTheme: IntegralUITheme = IntegralUITheme.Office;
    public gridScrolling: any = { horizontal: false }
    public rows: Array<any> = [];

    private resizeObserver!: ResizeObserver;

    // Window Settings
    public winPosition: any = { top: 25, left: 50 }
    public winSize: any = { width: 800, height: 450 }

    constructor(private http: HttpClient){
        this._commonService = new IntegralUICommonService();
    }

    ngAfterViewInit(){
        // Load data into the Grid from a JSON file
        this.loadFromJSON();

        this.resizeObserver = new ResizeObserver(entries => {
            if (entries && entries.length > 0 && entries[0].contentRect){
                if (this.winCtrl.nativeElement.state === IntegralUIWindowState.Maximized){
                    this.winSize = { 
                        width: entries[0].contentRect.width - 6, // window border width is set to 3px
                        height: entries[0].contentRect.height - 6
                    }
                }
            }
        });

        this.resizeObserver.observe(this.winBlock.nativeElement);
    }

    ngOnDestroy(){
        if (this.resizeObserver)
            this.resizeObserver.disconnect();
    }

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
        self.http.get("./assets/grid-window-dynamic-resize-data.json").subscribe((data: any) => {
            // Suspend the grid layout from updates, to increase performance
            self.grid.nativeElement.suspendLayout();

            // Load data into the grid
            self.convertJSONData(data);
    
            // Resume and update the grid layout
            self.grid.nativeElement.resumeLayout();
        });
    }

    // Dynamic Resize ------------------------------------------------------------------------

    windowClosing(e: any){
        e.detail.cancel = true;

        alert('Closing of window in this example is disabled');
    }

    windowSizeChanged(e: any){
        if (this.grid)
            this.grid.nativeElement.updateLayout();
    }

    // Editing -------------------------------------------------------------------------------

    gridDataChanged(e: any){
        // Update the Total value when Quantity or Price changes
        if (e.detail.data){
            let row = e.detail.data;

            let quantityCell = this.getCellById(row, 6);
            let priceCell = this.getCellById(row, 7);
            let totalCell = this.getCellById(row, 11);

            if (quantityCell && priceCell && totalCell)
                totalCell.value = quantityCell.value * priceCell.value;
        }
    }

    getCellById(row: any, id: any){
        let filtered = row.cells.filter((cell: any) => cell.cid === id);

        return filtered.length > 0 ? filtered[0] : null;
    }

    gridRowDblClick(e: any){
        this.grid.nativeElement.beginEdit(e.detail.row);
    }

    // Templates ---------------------------------------------------------------------------------

    currentHeaderTemplate = (column: any) => { 
        return html`<span class="header-label">${column.title}</span>`;
    };
}
