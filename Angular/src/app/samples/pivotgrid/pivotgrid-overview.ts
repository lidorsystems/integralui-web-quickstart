import { Component, ElementRef, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { html } from 'integralui-web/external/lit-element.js';
import { classMap } from 'integralui-web/external/class-map.js';
import { styleMap } from 'integralui-web/external/style-map.js';

import 'integralui-web/components/integralui.pivotgrid.js';
import IntegralUICommonService from 'integralui-web/services/integralui.common.service.js';
import { IntegralUITheme } from 'integralui-web/components/integralui.enums.js';
import { iuiPivotGridOverviewStyle } from './pivotgrid-overview.style.js';

@Component({
    selector: '',
    templateUrl: './pivotgrid-overview.html',
    styleUrls: ['./pivotgrid-overview.css']
})
export class PivotGridOverview {
    @ViewChild('grid', { static: false }) grid: ElementRef;

    private _commonService: IntegralUICommonService  = null;

    public columns: Array<any> = [];
    public ctrlSize: any = { height: 500 };
    public currentResourcePath: string = 'assets/integralui-web/icons';
    public currentTheme: IntegralUITheme = IntegralUITheme.Office;
    public customStyle: any = iuiPivotGridOverviewStyle;
    public gridData: Array<any> = [];
    public rows: Array<any> = [];
    public values: Array<any> = [];

    constructor(private http: HttpClient){
        this._commonService = new IntegralUICommonService();

        this.columns = [
            { name: "Year", headerAlignment: 'center', sorting: "Ascending" }
        ];

        this.rows = [
            { name: 'Country', expanded: true, width: 150 },
            { name: 'Category' }
        ];

        this.values = [
            { 
                name: "Quantity", 
                contentAlignment: 'right',
                footerAlignment: 'right', 
                format: {
                    options: { 
                        style: 'decimal'
                    }
                },
                formula: "SUM", 
                headerAlignment: 'center'
            }, 
            { 
                name: "Cost", 
                contentAlignment: 'right', 
                footerAlignment: 'right', 
                format: {
                    options: { 
                        style: 'currency',
                        currency: 'USD',
                        minimumFractionDigits: 2,
                        maximumFractionDigits: 2
                    }
                },
                formula: "SUM", 
                headerAlignment: 'center', 
                width: 120
            }
        ];
    }

    ngAfterViewInit(){
        this.grid.nativeElement.rowTemplate = this.currentRowCellTemplate;

        // Load data into the Grid from a JSON file
        this.loadFromJSON();
    }

    // Data --------------------------------------------------------------------------------------

    private loadFromJSON(){
        let self = this;

        // Use HTTP service to get data from the specified JSON file
        self.http.get("./assets/pivotgrid-data.json").subscribe((data: Array<any>) => {
            // Suspend the tree layout from updates, to increase performance
            self.grid.nativeElement.suspendLayout();

            // Load data into the tree view
            this.gridData = data;

            // Resume and update the tree layout
            self.grid.nativeElement.resumeLayout();
        });
    }
    
    // Templates --------------------------------------------------------------------------------------

    //
    // Currently when using templates, the LitElement binding syntax is required
    // for properties, methods and events
    //
    currentRowCellTemplate = (row: any, cell: any) => { 
        if (cell.value === 0){
            return html``;
        }
        else if ((cell.value < 200) || (cell.value > 1000 && cell.value < 9999)){
            let textColor = cell.value < 200 
                ? '#db4c39'
                : (cell.value > 1000 && cell.value < 9999 ? '#326de3' : 'black');

            return html`<div>
                    <span class=${classMap(this.getIndicatorClass(cell))}></span>
                    <span class="iui-editor-label" style=${styleMap({ color: textColor })}>${this.getCellDisplayValue(cell)}</span>
                </div>`;
        }

        return null;
    }

    getCellDisplayValue(cell: any){
        let currentFormat = null;
        let filtered = this.values.filter(obj => obj.name === cell.colName);
        
        if (filtered.length > 0)
            currentFormat = filtered[0].format;

        return this._commonService.convertValue(cell.value, currentFormat);
    }

    getIndicatorClass(cell: any){
        let classList = { 'indicator-icons': true }

        if (cell.value < 100)
            classList['indicator-down'] = true;
        else if (cell.value > 1000 && cell.value < 9999)
            classList['indicator-up'] = true;

        return classList;
    }
}
