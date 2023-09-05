import { Component, ElementRef, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { html } from 'integralui-web/external/lit-element';

import 'integralui-web/components/integralui.grid';
import IntegralUICommonService from 'integralui-web/services/integralui.common.service';
import { IntegralUITheme } from 'integralui-web/components/integralui.enums';
import { iuiGridColumnsFixedMinMaxWidthStyle, iuiGridColumnsFixedMinMaxWidthButtonStyle } from './grid-column-fixed-min-max-width.style';

@Component({
    selector: '',
    templateUrl: './grid-column-fixed-min-max-width.html',
    styleUrls: ['./grid-column-fixed-min-max-width.css']
})
export class GridFixedMinMaxWidth {
    @ViewChild('grid', { static: false }) grid!: ElementRef;

    private _commonService!: IntegralUICommonService;

    public columns: Array<any> = [];
    public ctrlSize: any = { height: 400 };
    public currentResourcePath: string = 'assets/icons';
    public currentTheme: IntegralUITheme = IntegralUITheme.Office;
    public customStyle: any = iuiGridColumnsFixedMinMaxWidthStyle;
    public gridScrolling: any = { horizontal: false }
    public rows: Array<any> = [];

    public menuList: Array<any> = [
        { id: 1, text: "Fixed width" },
        { id: 2, text: "Min width" },
        { id: 3, text: "Max width" },
        { id: 8, category: 'separator', enabled: false },
        { id: 9, category: 'buttons' }
    ];
    public currentMaxDropDownItems: number = 4;
    public dropDownSize: any = { width: 210, height: 192 };

    public currentSelectedColumn: any = {};
    public isColumnWidthFixed: boolean = false;
    public minValue: number = 0;
    public maxValue: number = 1000;

    
    constructor(private http: HttpClient){
        this._commonService = new IntegralUICommonService();

        this.columns = [
            { id: 1, headerText: "Order ID", width: 125 },
            { id: 2, headerText: "Customer", width: 250, maxWidth: 300 },
            { id: 3, headerText: "Ship Mode", width: 200, visible: false },
            { 
                id: 4, 
                headerText: "Ship Date", 
                contentAlignment: "center", 
                format: {
                    options: {
                        year: "numeric",
                        month: "short",
                        day: "2-digit"
                    }
                },
                width: 150
            },
            { 
                id: 5, 
                headerText: "Quantity", 
                contentAlignment: "right", 
                format: {
                    options: {
                        style: "decimal", 
                        minimumFractionDigits: 0,
                        maximumFractionDigits: 0
                    }
                },
                width: 120
            },
            { 
                id: 6, 
                headerText: "Price", 
                contentAlignment: "right",
                format: {
                    options: {
                        currency: "USD",
                        style: "currency"
                    }
                },
                width: 150
            },
            { 
                id: 7, 
                headerText: "Total", 
                contentAlignment: "right",
                format: { 
                    options: { 
                        currency: "USD", 
                        style: "currency",
                        minimumFractionDigits: 2,
                        maximumFractionDigits: 2
                    }
                }, 
                width: 120
            }
        ];
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

                // Delete all fields that will be included in cells
                delete row[field];

                let cell: any = {
                    cid: column.id,
                    colName: field
                }

                // Add cells for existing fields
                if (obj[field] !== undefined){

                    if (this._commonService.isString(obj[field])){
                        let fieldValue = Date.parse(obj[field]);
                        if (obj[field].slice(-1) === 'Z' && !isNaN(fieldValue))
                            cell.value = new Date(fieldValue);
                        else
                            cell.text = obj[field];
                    }
                    else
                        cell.value = obj[field];
                }
                // Calculate the Total value: sum of (Quantity * Price)
                else if (column.id === 7)
                    cell.value = obj["Quantity"] * obj["Price"];

                row.cells.push(cell);
            });

            result.push(row);
        });

        return result;
    }

    private loadFromJSON(){
        let self = this;

        // Use HTTP service to get data from the specified JSON file
        self.http.get("./assets/grid-column-fixed-min-max-width-data.json").subscribe((data: any) => {
            // Suspend the grid layout from updates, to increase performance
            self.grid.nativeElement.suspendLayout();

            // Load data into the grid
            self.grid.nativeElement.loadData(self.convertJSONData(data));
    
            // Resume and update the grid layout
            self.grid.nativeElement.resumeLayout();
        });
    }

    // General -----------------------------------------------------------------------------------

    changeMaxWidth(flag?: boolean){
        let newValue = this.maxValue;

        if (flag)
            newValue += 10;
        else
            newValue -= 10;

        this.maxValue = Math.max(0, newValue);
    }

    changeMinWidth(flag?: boolean){
        let newValue = this.minValue;

        if (flag)
            newValue += 10;
        else
            newValue -= 10;

        this.minValue = Math.max(0, newValue);
    }

    columnFIxedWidthChanged(e: any){
        this.isColumnWidthFixed = e.detail.checked;
    }

    ok(){
        if (this.currentSelectedColumn){
            this.currentSelectedColumn.fixedWidth = this.isColumnWidthFixed;
            this.currentSelectedColumn.minWidth = this.minValue;
            this.currentSelectedColumn.maxWidth = this.maxValue;
        }

        this.closeDropDown();
    }

    cancel(){
        this.closeDropDown();
    }

    closeDropDown(){
        if (this.currentSelectedColumn){
            this.currentSelectedColumn.isDropDownExpanded = false;
            this.grid.nativeElement.updateLayout();
        }
    }

    dropDownExpandedChanged(e: any, column: any){
        column.isDropDownExpanded = e.detail.expanded;

        if (e.detail.expanded){
            this.currentSelectedColumn = column;

            this.isColumnWidthFixed = this.currentSelectedColumn.fixedWidth !== undefined ? this.currentSelectedColumn.fixedWidth : false;
            this.minValue = this.currentSelectedColumn.minWidth !== undefined ? this.currentSelectedColumn.minWidth : 0;
            this.maxValue = this.currentSelectedColumn.maxWidth !== undefined ? this.currentSelectedColumn.maxWidth : 1000;
        }

        this.grid.nativeElement.updateLayout();
    }

    itemSelected(e: any, column: any){
        if (e.detail.item){
            let item = e.detail.item;

            switch (item.key){
                default:
                    e.detail.update = true;
                    break;
            }

            this.menuList.forEach(item => delete item.selected);
        }
    }

    maxValueChanged(e: any){
        this.maxValue = Math.max(0, e.target.value);
    }

    minValueChanged(e: any){
        this.minValue = Math.max(0, e.target.value);
    }

    // Templates ---------------------------------------------------------------------------------

    //
    // Currently when using templates, the LitElement binding syntax is required
    // for properties, methods and events
    //

    currentDropDownTemplate = (column: any) => { 
        return html`
            <iui-listbox
                .allowFocus=${false}
                .customStyle=${iuiGridColumnsFixedMinMaxWidthStyle}
                .items="${this.menuList}" 
                .itemTemplate="${this.currentItemTemplate}"
                selection-mode="None"
                .size="${{ width: this.dropDownSize.width - 4, height: this.dropDownSize.height - 4 }}" 
                .showScroll="${{ horizontal: false, vertical: false }}"
                .theme="${this.currentTheme}" 
            ></iui-listbox>
        `;
    };

    currentItemTemplate = (item: any) => { 
        switch (item.id){
            case 1: // Fixed Width
                return html`
                    <div class="item-block">
                        <iui-checkbox .allowFocus="${false}" .customStyle=${iuiGridColumnsFixedMinMaxWidthStyle} .checked="${this.isColumnWidthFixed}" .resourcePath="${this.currentResourcePath}" @checkedChanged="${(e: any) => this.columnFIxedWidthChanged(e)}">Is Column Width Fixed</iui-checkbox>
                    </div>
                `;

            case 2: // Min Width
                return html`
                    <div class="item-block">
                        <span>Min Width: </span>
                        <iui-button .customStyle=${iuiGridColumnsFixedMinMaxWidthButtonStyle} @click="${() => this.changeMinWidth()}">-</iui-button>
                        <input type="number" .value="${this.minValue}" @change="${(e: any) => this.minValueChanged(e)}" />
                        <iui-button .customStyle=${iuiGridColumnsFixedMinMaxWidthButtonStyle} @click="${() => this.changeMinWidth(true)}">+</iui-button>
                    </div>
                `;

            case 3: // Max Width
                return html`
                    <div class="item-block">
                        <span>Max Width: </span>
                        <iui-button .customStyle=${iuiGridColumnsFixedMinMaxWidthButtonStyle} @click="${() => this.changeMaxWidth()}">-</iui-button>
                        <input type="number" .value="${this.maxValue}" @change="${(e: any) => this.maxValueChanged(e)}" />
                        <iui-button .customStyle=${iuiGridColumnsFixedMinMaxWidthButtonStyle} @click="${() => this.changeMaxWidth(true)}">+</iui-button>
                    </div>
                `;

            case 8:
                return html`
                    <hr class="item-separator" />
                `;

            case 9:
                return html`
                    <div class="item-block" style="text-align:center">
                        <iui-button .allowFocus="${false}" .customStyle=${iuiGridColumnsFixedMinMaxWidthStyle} @click="${() => this.ok()}">Ok</iui-button>
                        <iui-button .allowFocus="${false}" .customStyle=${iuiGridColumnsFixedMinMaxWidthStyle} @click="${() => this.cancel()}">Cancel</iui-button>
                    </div>
                `;
        }

        return null;
    };

    currentHeaderTemplate = (column: any) => { 
        return html`
            <div>
                <iui-dropdownbutton data-column-dropdown
                    .allowAnimation="${true}"
                    .contentTemplate="${this.currentDropDownTemplate}"
                    .data="${column}"
                    .dropDownAdjustment=${{ left: 32 - this.dropDownSize.width, top: 7 }}
                    .dropDownIcon="${false}"
                    .dropDownSize="${this.dropDownSize}"
                    .expanded="${column.selected && column.isDropDownExpanded === true}"
                    @expandedChanged="${(e: any) => this.dropDownExpandedChanged(e, column)}"
                >
                    <img src="app/integralui/icons/menu-button.ico" />
                </iui-dropdownbutton>
                <span class="header-label">${column.headerText}</span>
            </div>
        `;
    };
}
