import React, { Component } from 'react';
import { html } from 'integralui-web/external/lit-element.js';

import IntegralUICommonService from 'integralui-web/services/integralui.common.service.js';
import IntegralUIGridComponent from 'integralui-web/wrappers/react.integralui.grid.js';
import { IntegralUIEditorType, IntegralUITheme, IntegralUIVisibility } from 'integralui-web/components/integralui.enums.js';
import gridData from './grid-fixed-columns-data.json';
import 'integralui-web/components/integralui.dropdownbutton.js';
import 'integralui-web/components/integralui.list.js';

import { iuiGridFixedColumnsStyle } from './grid-fixed-columns.style.js';

class GridFixedColumns extends Component {

    //
    // Initialization / Destruction --------------------------------------------------------------
    //

    constructor(props){
        super(props);

        this._commonService = new IntegralUICommonService();

        this.state = {
            columns: [
                { id: 1, headerText: "Order ID", width: 90, fixed: 'left' },
                { id: 2, headerText: "Customer", width: 225, fixed: 'left' },
                { 
                    id: 3, 
                    headerText: "Ship Mode", 
                    editorType: IntegralUIEditorType.DropDownList,
                    editorSettings: {
                        dropDownAdjustment: { top: 5 },
                        items: [
                            { text: "None", value: -1 },
                            { text: "Delivery Truck" },
                            { text: "Regular Air", value: 1 },
                            { text: "Express Air", value: 2 }
                        ],
                        visible: IntegralUIVisibility.Click | IntegralUIVisibility.Hover
                    },
                    width: 180
                },
                { id: 4, headerText: "Ship Date", contentAlignment: "center", width: 120 },
                { id: 5, headerText: "Quantity", contentAlignment: "right", width: 80 },
                { id: 6, headerText: "Price", contentAlignment: "right" }
            ],
            ctrlSize: { width: 800, height: 400 },
            currentResourcePath: '../../../integralui-web/icons',
            currentTheme: IntegralUITheme.Office,
            dropDownList: [
                { text: "None" },
                { text: "Left" },
                { text: "Right" }
            ],
            dropDownSize: { width: 100, height: 100 },
            isAnimationAllowed: true,
            rows: []
        }

        this.gridRef = React.createRef();
    }

    componentDidMount(){
        this.setState({ rows: this.convertJSONData(gridData) });

        // Manually select a column, without using props
        let gridElemRef = this.gridRef.current.ctrlRef.current;
        gridElemRef.selectedColumn = this.state.columns[1];
    }

    //
    // Methods -----------------------------------------------------------------------------------
    //

    //
    // Currently when using templates, the LitElement binding syntax is required
    // for properties, methods and events
    //

    currentDropDownTemplate = (column) => { 
        return html`
            <iui-list 
                .items="${this.state.dropDownList}" 
                .selectedItem="${this.getFixedValue(column)}" 
                .showScroll="${{ vertical: false }}"
                .size="${{ width: this.state.dropDownSize.width - 4, height: this.state.dropDownSize.height - 4 }}" 
                .theme="${this.state.currentTheme}" 
                @itemClick="${(e) => this.itemSelected(e, column)}" 
                @itemTouch="${(e) => this.itemSelected(e, column)}"
            ></iui-list>
        `;
    };

    currentHeaderTemplate = (column) => { 
        return html`
            <div>
                <iui-dropdownbutton data-column-dropdown
                    .contentTemplate="${this.currentDropDownTemplate}"
                    .data="${column}"
                    .dropDownIcon="${false}"
                    .dropDownSize="${this.state.dropDownSize}"
                    .expanded="${column.selected && column.isDropDownExpanded === true}"
                    .items="${this.state.dropDownList}"
                    @expandedChanged="${(e) => this.dropDownExpandedChanged(e, column)}"
                >
                    <img src="../../../integralui-web/icons/menu-button.ico" />
                </iui-dropdownbutton>
                <span class="header-label">${column.headerText}</span>
            </div>
        `;
    };

    dropDownExpandedChanged(e, column){
        column.isDropDownExpanded = e.detail.expanded;
    }

    getFixedValue(column){
        if (column && column.fixed){
            let filtered = this.state.dropDownList.filter(obj => obj.text.toLowerCase() === column.fixed);

            return filtered.length > 0 ? filtered[0] : null;
        }

        return null;
    }

    itemSelected(e, column){
        column.fixed = e.detail.item.text.toLowerCase();
        column.isDropDownExpanded = false;

        this.state.dropDownList.forEach(item => delete item.selected);

        this.gridRef.current.updateLayout();
    }

    // Data --------------------------------------------------------------------------------------

    convertJSONData(data){
        let result = [];

        data.forEach(obj => {
            // Copy all fields from JSON data and add a new field 'cells'
            let row = Object.assign({ cells: [] }, obj);

            // Loop through all columns and create cells accordingly
            this.state.columns.forEach(column => {
                let field = column.headerText;

                // Delete all fields that will be included in cells, except for the field 'Title'
                delete row[field];

                // Each row should have a cell for check box column, otherwise only add cells for existing fields
                if (obj[field] !== undefined){
                    let cell = {
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

    // Update ------------------------------------------------------------------------------------

    render() {
        return (
            <div>
                <h2>Grid / Fixed Columns</h2>
                <div className="sample-block" id="grid-fixed-columns">
                    <IntegralUIGridComponent ref={this.gridRef}
                        allowAnimation={this.state.isAnimationAllowed} 
                        columns={this.state.columns} 
                        customStyle={iuiGridFixedColumnsStyle}
                        headerTemplate={this.currentHeaderTemplate}
                        resourcePath={this.state.currentResourcePath}
                        rowHeight={21}
                        rows={this.state.rows} 
                        size={this.state.ctrlSize}
                        theme={this.state.currentTheme}
                    ></IntegralUIGridComponent>
                    <div className="feature-help">
                        <p><span className="initial-space"></span>In this sample, first two columns are fixed on left side of the Grid, while other columns remain non-fixed. When scrolling the grid view, the fixed columns will remain at the same position.</p>
                        <p><span className="initial-space"></span>You can fix columns either on left or right side of the Grid. The view will display columns following this priority (from top to low): left, right, none. This means that columns fixed on left side will appear in front of all other columns.</p>
                        <p><span className="initial-space"></span>When column is fixed it will appear in darker colors then non-fixed columns. This is set via CSS and you can modify it on your side.</p>
                        <p><span className="initial-space"></span>You can change the fixed state of a column either initially, or during run-time. Whenever this change happens, the grid layout requires an update. You can update the grid by calling the updateLayout method.</p>
                        <p><span className="initial-space"></span>When you have fixed and non-fixed columns, because cells can have different content, the row with cells from fixed and non-fixed columns, can appear unaligned. To make sure the cells are aligned at all times, use the <span className="code-name">rowHeight</span> property and set it to desired number.</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default GridFixedColumns;
