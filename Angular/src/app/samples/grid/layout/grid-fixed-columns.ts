import { Component, ElementRef, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { html } from 'integralui-web/external/lit-element';

import 'integralui-web/components/integralui.dropdownbutton';
import 'integralui-web/components/integralui.grid';
import 'integralui-web/components/integralui.list';
import IntegralUICommonService from 'integralui-web/services/integralui.common.service';
import { IntegralUIEditMode, IntegralUIEditorType, IntegralUITheme, IntegralUIVisibility } from 'integralui-web/components/integralui.enums';
import { iuiGridFixedColumnsStyle } from './grid-fixed-columns.style';

@Component({
    selector: '',
    templateUrl: './grid-fixed-columns.html',
    styleUrls: ['./grid-fixed-columns.css']
})
export class GridFixedColumns {
    @ViewChild('grid', { static: false }) grid!: ElementRef;

    private _commonService!: IntegralUICommonService;

    public columns: Array<any> = [];
    public ctrlSize: any = { width: 800, height: 400 };
    public currentEditMode: IntegralUIEditMode = IntegralUIEditMode.Custom;
    public currentResourcePath: string = 'assets/icons';
    public currentTheme: IntegralUITheme = IntegralUITheme.Office;
    public customStyle: any = iuiGridFixedColumnsStyle;
    public rows: Array<any> = [];

    private dropDownList: Array<any> = [
        { text: "None" },
        { text: "Left" },
        { text: "Right" }
    ];
    private dropDownSize: any = { width: 100, height: 100 };

    constructor(private http: HttpClient){
        this._commonService = new IntegralUICommonService();

        this.columns = [
            { id: 1, headerText: "Order ID", width: 90, fixed: 'left' },
            { id: 2, headerText: "Customer", width: 225, fixed: 'left' },
            { 
                id: 3, 
                headerText: "Ship Mode", 
                editorType: IntegralUIEditorType.DropDownList,
                editorSettings: {
                    allowAnimation: true,
                    dropDownAdjustment: { top: 10 },
                    items: [
                        { text: "None", value: -1 },
                        { text: "Delivery Truck" },
                        { text: "Regular Air", value: 1 },
                        { text: "Express Air", value: 2 }
                    ]
                },
                width: 180
            },
            { id: 4, headerText: "Ship Date", contentAlignment: "center", width: 120 },
            { id: 5, headerText: "Quantity", contentAlignment: "right", width: 80 },
            { id: 6, headerText: "Price", contentAlignment: "right" }
        ];
    }

    ngAfterViewInit(){
        this.grid.nativeElement.headerTemplate = this.currentHeaderTemplate;

        // Load data into the Grid from a JSON file
        this.loadFromJSON();
    }

    // Data --------------------------------------------------------------------------------------

    private convertJSONData(data: any){
        let result: Array<any> = [];

        data.forEach((obj: any) => {
            // Copy all fields from JSON data and add a new field 'cells'
            let row = Object.assign({ cells: [] }, obj);

            // Loop through all columns and create cells accordingly
            this.columns.forEach(column => {
                let field = column.headerText;

                // Delete all fields that will be included in cells, except for the field 'Title'
                delete row[field];

                // Each row should have a cell for check box column, otherwise only add cells for existing fields
                if (obj[field] !== undefined){
                    let cell: any = {
                        cid: column.id,
                        colName: field
                    }

                    if (field === 'Ship Mode')
                        cell.value = obj[field];
                    else if (this._commonService.isString(obj[field]))
                        cell.text = obj[field];
                    else
                        cell.value = obj[field];

                    row.cells.push(cell);
                }
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
        self.http.get("./assets/grid-fixed-columns-data.json").subscribe((data: any) => {
            // Suspend the tree layout from updates, to increase performance
            self.grid.nativeElement.suspendLayout();

            // Load data into the tree view
            self.grid.nativeElement.loadData(this.convertJSONData(data), null, null, false);

            // Resume and update the tree layout
            self.grid.nativeElement.resumeLayout();
        });
    }

    //
    // Methods -----------------------------------------------------------------------------------
    //

    //
    // Currently when using templates, the LitElement binding syntax is required
    // for properties, methods and events
    //

    currentDropDownTemplate = (column: any) => { 
        return html`
            <iui-list 
                .items="${this.dropDownList}" 
                .selectedItem="${this.getFixedValue(column)}" 
                .showScroll="${{ vertical: false }}"
                .size="${{ width: this.dropDownSize.width - 4, height: this.dropDownSize.height - 4 }}" 
                .theme="${this.currentTheme}" 
                @itemClick="${(e: any) => this.itemSelected(e, column)}" 
                @itemTouch="${(e: any) => this.itemSelected(e, column)}"
            ></iui-list>
        `;
    };

    currentHeaderTemplate = (column: any) => { 
        return html`
            <div>
                <iui-dropdownbutton data-column-dropdown
                    .contentTemplate="${this.currentDropDownTemplate}"
                    .data="${column}"
                    .dropDownIcon="${false}"
                    .dropDownSize="${this.dropDownSize}"
                    .expanded="${column.selected && column.isDropDownExpanded === true}"
                    .items="${this.dropDownList}"
                    @expandedChanged="${(e: any) => this.dropDownExpandedChanged(e, column)}"
                >
                    <img src="assets/icons/menu-button.ico" />
                </iui-dropdownbutton>
                <span class="header-label">${column.headerText}</span>
            </div>
        `;
    };

    dropDownExpandedChanged(e: any, column: any){
        column.isDropDownExpanded = e.detail.expanded;
    }

    getFixedValue(column: any){
        if (column && column.fixed){
            let filtered = this.dropDownList.filter(obj => obj.text.toLowerCase() === column.fixed);

            return filtered.length > 0 ? filtered[0] : null;
        }

        return null;
    }

    itemSelected(e: any, column: any){
        column.fixed = e.detail.item.text.toLowerCase();
        column.isDropDownExpanded = false;

        this.dropDownList.forEach(item => delete item.selected);

        this.grid.nativeElement.updateLayout();
    }
}
