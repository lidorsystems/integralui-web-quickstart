import React, { Component } from 'react';
import { html } from 'integralui-web/external/lit-element.js';

import IntegralUICommonService from 'integralui-web/services/integralui.common.service.js';
import IntegralUIGridComponent from 'integralui-web/wrappers/react.integralui.grid.js';
import { IntegralUITheme } from 'integralui-web/components/integralui.enums.js';
import { iuiGridColumnsFixedMinMaxWidthStyle, iuiGridColumnsFixedMinMaxWidthButtonStyle } from './grid-column-fixed-min-max-width.style.js';

import gridData from './grid-column-fixed-min-max-width-data.json';

class GridCellsDifferentColors extends Component {

    //
    // Initialization / Destruction --------------------------------------------------------------
    //

    constructor(props){
        super(props);

        this._commonService = new IntegralUICommonService();

        this.state = {
            columns: [
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
            ],
            ctrlSize: { height: 400 },
            currentResourcePath: '../../../integralui-web/icons',
            currentTheme: IntegralUITheme.Office,
            gridScrolling: { horizontal: false },
            isAnimationAllowed: true,
            rows: []
        }
    
        this.menuList = [
            { id: 1, text: "Fixed width" },
            { id: 2, text: "Min width" },
            { id: 3, text: "Max width" },
            { id: 8, category: 'separator', enabled: false },
            { id: 9, category: 'buttons' }
        ];
        this.currentMaxDropDownItems = 4;
        this.dropDownSize = { width: 210, height: 192 };

        this.currentSelectedColumn = {};
        this.isColumnWidthFixed = false;
        this.minValue = 0;
        this.maxValue = 1000;

        this.gridRef = React.createRef();
    }

    componentDidMount(){
        this.gridRef.current.loadData(this.convertJSONData(gridData), null, null, false);
    }

    //
    // Methods -----------------------------------------------------------------------------------
    //

    // Data --------------------------------------------------------------------------------------

    convertJSONData(data){
        let result = [];

        data.forEach(obj => {
            // Copy all fields from JSON data and add a new field 'cells'
            let row = Object.assign({ cells: [] }, obj);

            // Loop through all columns and create cells accordingly
            this.state.columns.forEach(column => {
                let field = column.headerText;

                // Delete all fields that will be included in cells
                delete row[field];

                let cell = {
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

    // General -----------------------------------------------------------------------------------

    changeMaxWidth(flag){
        let newValue = this.maxValue;

        if (flag)
            newValue += 10;
        else
            newValue -= 10;

        this.maxValue = Math.max(0, newValue);
    }

    changeMinWidth(flag){
        let newValue = this.minValue;

        if (flag)
            newValue += 10;
        else
            newValue -= 10;

        this.minValue = Math.max(0, newValue);
    }

    columnFIxedWidthChanged(e){
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
            this.gridRef.current.updateLayout();
        }
    }

    dropDownExpandedChanged(e, column){
        column.isDropDownExpanded = e.detail.expanded;

        if (e.detail.expanded){
            this.currentSelectedColumn = column;

            this.isColumnWidthFixed = this.currentSelectedColumn.fixedWidth !== undefined ? this.currentSelectedColumn.fixedWidth : false;
            this.minValue = this.currentSelectedColumn.minWidth !== undefined ? this.currentSelectedColumn.minWidth : 0;
            this.maxValue = this.currentSelectedColumn.maxWidth !== undefined ? this.currentSelectedColumn.maxWidth : 1000;
        }

        this.gridRef.current.updateLayout();
    }

    itemSelected(e, column){
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

    maxValueChanged(e){
        this.maxValue = Math.max(0, e.target.value);
    }

    minValueChanged(e){
        this.minValue = Math.max(0, e.target.value);
    }

    // Templates ---------------------------------------------------------------------------------

    //
    // Currently when using templates, the LitElement binding syntax is required
    // for properties, methods and events
    //

    currentDropDownTemplate = (column) => { 
        return html`
            <iui-listbox
                .allowFocus=${false}
                .customStyle=${iuiGridColumnsFixedMinMaxWidthStyle}
                .items="${this.menuList}" 
                .itemTemplate="${this.currentItemTemplate}"
                selection-mode="None"
                .size="${{ width: this.dropDownSize.width - 4, height: this.dropDownSize.height - 4 }}" 
                .showScroll="${{ horizontal: false, vertical: false }}"
                .theme="${this.state.currentTheme}" 
            ></iui-listbox>
        `;
    };

    currentItemTemplate = (item) => { 
        switch (item.id){
            case 1: // Fixed Width
                return html`
                    <div class="item-block">
                        <iui-checkbox .allowFocus="${false}" .customStyle="${iuiGridColumnsFixedMinMaxWidthStyle}" .checked="${this.isColumnWidthFixed}" .resourcePath="${this.state.currentResourcePath}" @checkedChanged="${(e) => this.columnFIxedWidthChanged(e)}">Is Column Width Fixed</iui-checkbox>
                    </div>
                `;

            case 2: // Min Width
                return html`
                    <div class="item-block">
                        <span>Min Width: </span>
                        <iui-button .customStyle=${iuiGridColumnsFixedMinMaxWidthButtonStyle} @click="${() => this.changeMinWidth()}">-</iui-button>
                        <input type="number" .value="${this.minValue}" @change="${(e) => this.minValueChanged(e)}" />
                        <iui-button .customStyle=${iuiGridColumnsFixedMinMaxWidthButtonStyle} @click="${() => this.changeMinWidth(true)}">+</iui-button>
                    </div>
                `;

            case 3: // Max Width
                return html`
                    <div class="item-block">
                        <span>Max Width: </span>
                        <iui-button .customStyle=${iuiGridColumnsFixedMinMaxWidthButtonStyle} @click="${() => this.changeMaxWidth()}">-</iui-button>
                        <input type="number" .value="${this.maxValue}" @change="${(e) => this.maxValueChanged(e)}" />
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

    currentHeaderTemplate = (column) => { 
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
                    @expandedChanged="${(e) => this.dropDownExpandedChanged(e, column)}"
                >
                    <img src="../../../integralui-web/icons/menu-button.ico" />
                </iui-dropdownbutton>
                <span class="header-label">${column.headerText}</span>
            </div>
        `;
    };

    // Update ------------------------------------------------------------------------------------

    render() {
        return (
            <div>
                <h2>Grid / Columns Fixed, Min and Max Width</h2>
                <div className="sample-block" id="grid-column-fixed-min-max-width">
                    <IntegralUIGridComponent ref={this.gridRef}
                        allowAnimation={this.state.isAnimationAllowed} 
                        allowFocus={false}
                        autoSizeColumns={true}
                        columns={this.state.columns} 
                        customStyle={iuiGridColumnsFixedMinMaxWidthStyle}
                        headerTemplate={this.currentHeaderTemplate}
                        resourcePath={this.state.currentResourcePath}
                        rowHeight={32}
                        rows={this.state.rows} 
                        showFooter={false}
                        showScroll={this.state.gridScrolling}
                        size={this.state.ctrlSize}
                        theme={this.state.currentTheme}
                    ></IntegralUIGridComponent>
                    <div className="feature-help">
                        <p><span className="initial-space"></span>In this example, using the dropdown window from column header you can set up the Minimum and Maximum width for columns and also lock the column width to its current value. The grid also has auto-size for columns enabled, which means any change to column width affects other neighbouring columns so that the whole grid space is occupied.</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default GridCellsDifferentColors;
