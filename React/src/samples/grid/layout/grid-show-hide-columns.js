import React, { Component } from 'react';
import { html } from 'integralui-web/external/lit-element.js';

import IntegralUICommonService from 'integralui-web/services/integralui.common.service.js';
import IntegralUIGridComponent from 'integralui-web/wrappers/react.integralui.grid.js';
import { IntegralUITheme } from 'integralui-web/components/integralui.enums.js';
import { iuiGridShowHideColumnsStyle } from './grid-show-hide-columns.style.js';

import 'integralui-web/components/integralui.contextmenu.js';
import 'integralui-web/components/integralui.dropdownbutton.js';
import 'integralui-web/components/integralui.list.js';

import gridData from './grid-show-hide-columns-data.json';

class GridCellsDifferentColors extends Component {

    //
    // Initialization / Destruction --------------------------------------------------------------
    //

    constructor(props){
        super(props);

        this._commonService = new IntegralUICommonService();

        this.state = {
            columns: [
                { id: 1, headerText: "Order ID", width: 90 },
                { id: 2, headerText: "Customer", width: 225 },
                { id: 3, headerText: "Ship Mode", width: 180, visible: false },
                { id: 4, headerText: "Ship Date", contentAlignment: "center", width: 120 },
                { id: 5, headerText: "Quantity", contentAlignment: "right", width: 80 },
                { id: 6, headerText: "Price", contentAlignment: "right" }
            ],
            ctrlSize: { height: 400 },
            currentResourcePath: '../../../integralui-web/icons',
            currentTheme: IntegralUITheme.Office,
            gridScrolling: { horizontal: false },
            isAnimationAllowed: true,
            rows: []
        }
    
        this.columnList = [];
        this.currentMaxDropDownItems = 6;
        this.dropDownSize = { width: 150, height: 200 };

        this.gridRef = React.createRef();
    }

    componentDidMount(){
        // Create a dropdown list from all columns
        this.state.columns.forEach(column => {
            let item = { 
                id: column.id, 
                text: column.headerText, 
                checked: column.visible !== false
            }

            item.icon = this.getItemIcon(item);

            this.columnList.push(item);
        });

        // Load rows from JSON file
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

                // Delete all fields that will be included in cells, except for the field 'Title'
                delete row[field];

                // Each row should have a cell for check box column, otherwise only add cells for existing fields
                if (obj[field] !== undefined){
                    let cell = {
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

            // If there are child rows, convert the JSON data for them
            row.rows = this.convertJSONData(obj.rows || []);

            result.push(row);
        });

        return result;
    }
  
    // General -----------------------------------------------------------------------------------

    getItemIcon(item){
        return item && item.checked ? 'icons checked-icon' : 'icons';
    }

    //
    // ContextMenu
    //

    contextMenuClick(e){
        if (e.detail.item){
            e.detail.item.checked = !e.detail.item.checked;
            e.detail.item.icon = this.getItemIcon(e.detail.item);

            let column = this.getColumnFromItem(e.detail.item);
            if (column)
                column.visible = e.detail.item.checked;

            this.gridRef.current.updateLayout();
        }
    }
 
    contextMenuOpening(column){
        column.isDropDownExpanded = false;
        this.gridRef.current.selectedColumn = column;
        this.gridRef.current.refresh();
    }

    getColumnFromItem(item){
        if (item){
            let filtered = this.state.columns.filter(column => column.id === item.id);

            return filtered.length > 0 ? filtered[0] : null;
        }

        return null;
    }

    //
    // DropDownMenu
    //

    dropDownExpandedChanged(e, column){
        column.isDropDownExpanded = e.detail.expanded;
        this.gridRef.current.updateLayout();
    }

    getItemFromColumn(column){
        if (column){
            let filtered = this.columnList.filter(obj => obj.id === column.id);

            return filtered.length > 0 ? filtered[0] : null;
        }

        return null;
    }

    itemSelected(e, column){
        if (e.detail.item){
            e.detail.item.checked = !e.detail.item.checked;
            e.detail.item.icon = this.getItemIcon(e.detail.item);

            let changedColumn = this.getColumnFromItem(e.detail.item);
            if (changedColumn)
                 changedColumn.visible = e.detail.item.checked;

            // Delete the selected status from the List component, so that item will not appear as selected when clicked
            this.columnList.forEach(item => delete item.selected);

            e.detail.update = true;
        }
    }

    // Templates ---------------------------------------------------------------------------------

    currentDropDownTemplate = (column) => { 
        return html`
            <iui-list 
                .allowFocus=${false}
                .customStyle=${iuiGridShowHideColumnsStyle}
                .items="${this.columnList}" 
                .maxVisibleItems="${this.currentMaxDropDownItems}"
                .selectedItem="${this.getItemFromColumn(column)}" 
                .size="${{ width: this.dropDownSize.width - 4, height: this.dropDownSize.height - 4 }}" 
                .theme="${this.state.currentTheme}" 
                @itemClick="${(e) => this.itemSelected(e, column)}" 
                @itemTouch="${(e) => this.itemSelected(e, column)}"
            ></iui-list>
        `;
    };

    currentHeaderTemplate = (column) => { 
        return html`
            <iui-contextmenu
                .customStyle=${iuiGridShowHideColumnsStyle}
                .enabled=${true}
                .settings=${{ items: this.columnList }}
                theme="Office"
                @menuClick="${(e) => this.contextMenuClick(e)}"
                @menuOpening="${() => this.contextMenuOpening(column)}"
            >
                <div>
                    <iui-dropdownbutton data-column-dropdown
                        .contentTemplate="${this.currentDropDownTemplate}"
                        .data="${column}"
                        .dropDownAdjustment=${{ left: 0, top: 7 }}
                        .dropDownIcon="${false}"
                        .dropDownSize="${this.dropDownSize}"
                        .expanded="${column.selected && column.isDropDownExpanded === true}"
                        .items="${this.columnList}"
                        @expandedChanged="${(e) => this.dropDownExpandedChanged(e, column)}"
                    >
                        <img src="../../../integralui-web/icons/menu-button.ico" />
                    </iui-dropdownbutton>
                    <span class="header-label">${column.headerText}</span>
                </div>
            </iui-contextmenu>
        `;
    };

    // Update ------------------------------------------------------------------------------------

    render() {
        return (
            <div>
                <h2>Grid / How to Show/Hide Columns</h2>
                <div className="sample-block" id="grid-show-hide-columns">
                    <IntegralUIGridComponent ref={this.gridRef}
                        allowAnimation={this.state.isAnimationAllowed} 
                        allowFocus={false}
                        columns={this.state.columns} 
                        customStyle={iuiGridShowHideColumnsStyle}
                        headerTemplate={this.currentHeaderTemplate}
                        resourcePath={this.state.currentResourcePath}
                        rows={this.state.rows} 
                        showFooter={false}
                        showScroll={this.state.gridScrolling}
                        size={this.state.ctrlSize}
                        theme={this.state.currentTheme}
                    ></IntegralUIGridComponent>
                    <div className="feature-help">
                        <p><span className="initial-space"></span>As above demo presents, to show or hide a specific column you can use a context menu or dropdown menu. Whenever you right-click on a grid header a context menu will appear displaying the name of each column and a check mark stating whether the column is visible or hidden. In similar why, when column is selected by clicking on its header a command button with dropdown menu will appear from where you can choose which columns will become visible or hidden.</p>
                        <p><span className="initial-space"></span>By selecting the column from the menu option, you can change its visibility. The difference is with context menu you can show/hide only one column at time, while with dropdown menu you can check or uncheck any number of columns you want to change their visibility. Clicking again on the dropdown menu button will apply this change.</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default GridCellsDifferentColors;
