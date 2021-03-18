import { Component, ElementRef, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { html } from 'integralui-web/external/lit-element.js';
import { classMap } from 'integralui-web/external/class-map.js';
import { styleMap } from 'integralui-web/external/style-map.js';

import 'integralui-web/components/integralui.rating.js';
import 'integralui-web/components/integralui.grid.js';
import IntegralUICommonService from 'integralui-web/services/integralui.common.service.js';
import { IntegralUIEditorType, IntegralUITheme } from 'integralui-web/components/integralui.enums.js';
import { iuiGridDynamicGroupingStyle } from './grid-dynamic-grouping.style.js';

@Component({
    selector: '',
    templateUrl: './grid-dynamic-grouping.html',
    styleUrls: ['./grid-dynamic-grouping.css']
})
export class GridDynamicGrouping {
    @ViewChild('grid', { static: false }) grid: ElementRef;

    private _commonService: IntegralUICommonService = null;

    public columns: Array<any> = [];
    public ctrlSize: any = { width: 800, height: 460 };
    public currentResourcePath: string = 'assets/integralui-web/icons';
    public currentTheme: IntegralUITheme = IntegralUITheme.Office;
    public customStyle: any = iuiGridDynamicGroupingStyle;
    public rows: Array<any> = [];

    public groups: Array<any> = [
        { cid: 4 }
    ];
    public groupSettings: any = {
        enabled: true,
        items: [
            { id: 1, text: "True/False" },
            { id: 3, text: "Year" },
            { id: 4, text: "Genre" },
            { id: 5, text: "Ratings" }
        ],
        showColumns: false
    };

    constructor(private http: HttpClient){
        this._commonService = new IntegralUICommonService();

        this.columns = [
            { id: 2, headerText: "Title", allowDrag: false, allowDrop: false, allowGrouping: false, width: 300 },
            { id: 1, groupText: "True/False", editorType: IntegralUIEditorType.CheckBox, contentAlignment: 'center', width: 30, fixedWidth: true },
            { id: 3, headerText: "Year", headerAlignment: "center", contentAlignment: "center", width: 70 },
            { id: 4, headerText: "Genre", headerAlignment: "center", contentAlignment: "center", width: 50, visible: false },
            { 
                id: 5, 
                headerText: "Rating", 
                headerAlignment: "center", 
                editorType: IntegralUIEditorType.Rating, 
                editorSettings: {
                    editOnFocus: true
                },
                contentAlignment: "center", 
                width: 170, 
                fixedWidth: true
            },
            { id: 6, headerText: "Released", allowGrouping: false, headerAlignment: "center", contentAlignment: "center", width: 130 }
        ];
    }

    ngAfterViewInit(){
        this.grid.nativeElement.rowTemplate = this.currentRowCellTemplate;

        // Load data into the Grid from a JSON file
        this.loadFromJSON();
    }

    //
    // Methods -----------------------------------------------------------------------------------
    //

    // Data --------------------------------------------------------------------------------------

    convertJSONData(data: any){
        let result = [];

        data.forEach(obj => {
            // Copy all fields from JSON data and add a new field 'cells'
            let row = Object.assign({ cells: [] }, obj);

            // Loop through all columns and create cells accordingly
            this.columns.forEach(column => {
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

            result.push(row);
        });

        return result;
    }

    private loadFromJSON(){
        let self = this;

        // Use HTTP service to get data from the specified JSON file
        self.http.get("./assets/grid-dynamic-grouping-data.json").subscribe((data: Array<any>) => {
            // Suspend the tree layout from updates, to increase performance
            self.grid.nativeElement.suspendLayout();

            // Load data into the tree view
            self.grid.nativeElement.loadData(this.convertJSONData(data));

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
        switch (cell.cid){
            case 2:
                if (cell.isGroup){
                    switch (cell.valueID){
                        case 1: // True/False
                            return html`
                                <div style=${styleMap({ display: 'inline-block', textAlign: 'center'})}>
                                    <span class=${classMap(this.getCheckBoxClass(cell.value))}></span>
                                </div>`;

                        case 4: // GENRE
                            return html`<span>
                                    <span class="grid-grp-icons ${cell.text.toLowerCase()}"></span>
                                    <span>${cell.text}</span>
                                </span>`;

                        case 5: // Rating
                            return html`
                                <div class="iui-editor-rating" align="center" style=${styleMap({ display: 'inline-block' })}>
                                    <iui-rating 
                                        .customStyle=${iuiGridDynamicGroupingStyle}
                                        .readOnly=${true}
                                        .resourcePath="${this.currentResourcePath}"
                                        .theme="${this.currentTheme}" 
                                        .value=${cell.value} 
                                    ></iui-rating>
                                </div>`;
    
                        default:
                            return null;
                    }                
                }
                break;
            
            default:
                return null;
        }

        return null;
    };

    getCheckBoxClass(value: boolean){
        let retValue = { 'iui-editor-checkbox': true };

        if (value)
            retValue['iui-editor-checkbox-checked'] = true;
        else
            retValue['iui-editor-checkbox-unchecked'] = true;

        return retValue;  	
    }
}
