import React, { Component } from 'react';
import { html } from 'integralui-web/external/lit-element.js';
import { classMap } from 'integralui-web/external/class-map';
import { styleMap } from 'integralui-web/external/style-map';

import IntegralUICommonService from 'integralui-web/services/integralui.common.service.js';
import IntegralUIGridComponent from 'integralui-web/wrappers/react.integralui.grid.js';
import { IntegralUITheme } from 'integralui-web/components/integralui.enums.js';
import 'integralui-web/components/integralui.dropdownbutton.js';
import 'integralui-web/components/integralui.listbox.js';

import gridData from './grid-dynamic-update-data.json';
import './grid-dynamic-update.css';
import { iuiGridDynamicUpdateStyle } from './grid-dynamic-update.style.js';

class GridDynamicUpdate extends Component {

    //
    // Initialization / Destruction --------------------------------------------------------------
    //

    constructor(props){
        super(props);

        this._commonService = new IntegralUICommonService();

        this.state = {
            columns: [],
            ctrlSize: { height: 500 },
            currentResourcePath: '../integralui-web/icons',
            currentSelectedColumn: null,
            currentTheme: IntegralUITheme.Office,
            dropDownList: [],
            dropDownSize: { width: 200, height: 150 },
            isGridLoading: false,
            groups: [{ cid: 11 }],
            groupSettings: {
                enabled: true,
                showColumns: true
            },
            isAnimationAllowed: true,
            rows: []
        }

        this.changeInterval = null;
        this.countInterval = 0;
        this.initTimeout = null;

        this.partialDataLoaded = 0;
    
        this.gridRef = React.createRef();
    }

    componentDidMount(){
        let self = this;
        self.convertJSONData(gridData);

        self.initTimeout = setTimeout(function(){
            self.createDropDownList();

            self.changeInterval = setInterval(function(){
                if (!self.state.isGridLoading){
                    self.updateData();
                    self.countInterval++;
                }
            }, 150);
        }, 1000);
    }

    componentWillUnmount(){
        if (this.changeInterval)
            clearInterval(this.changeInterval);

        if (this.initTimeout)
            clearTimeout(this.initTimeout);

        this.changeInterval = null;
        this.initTimeout = null;
    }

    createDropDownList(){
        let list = [];
        this.state.columns
            .filter(column => column.id > 3)
            .forEach(column => list.push({ id: column.id, text: column.title ? column.title : column.groupText }));

        this.setState({ dropDownList: list });

        if (this.gridRef && this.gridRef.current)
            this.gridRef.current.updateLayout();
    }

    //
    // Methods -----------------------------------------------------------------------------------
    //

    // Data --------------------------------------------------------------------------------------

    loadRows(data){
        let rowList = this.state.rows;

        // Create rows
        data.rows.forEach(obj => {
            // Copy all fields from JSON data and add a new field 'cells'
            let row = Object.assign({ cells: [] }, obj);

            // Loop through all columns and create cells accordingly
            this.state.columns.forEach(column => {
                let field = column.id === 1 ? 'isChecked' : column.title;

                // Delete all fields that will be included in cells
                delete row[field];

                // Each row should have a cell for check box column, otherwise only add cells for existing fields
                let cell = {
                    cid: column.id,
                    colName: field
                }

                if (obj[field] !== undefined){
                    if (!column.editorType && this._commonService.isString(obj[field]))
                        cell.text = obj[field];
                    else
                        cell.value = obj[field];
                }

                // Change text color based on cell value
                this.updateCellColor(cell, column.id);

                row.cells.push(cell);
            });

            rowList.push(row);
        });

        this.setState({ rows: rowList });
    }

    convertJSONData(data){
        let columnList = [];
        let rowList = [];

        // Create columns
        data.columns.forEach(obj => {
            let column = Object.assign({ groupText: obj.title, headerAlignment: 'center' }, obj);
            if (column.id !== 1 && column.id !== 11 && column.id !== 15)
                column.allowDrag = false;

            columnList.push(column);
        });

        // Create rows
        data.rows.forEach(obj => {
            // Copy all fields from JSON data and add a new field 'cells'
            let row = Object.assign({ cells: [] }, obj);

            // Loop through all columns and create cells accordingly
            data.columns.forEach(column => {
                let field = column.id === 1 ? 'isChecked' : column.title;

                // Delete all fields that will be included in cells
                delete row[field];

                // Each row should have a cell for check box column, otherwise only add cells for existing fields
                let cell = {
                    cid: column.id,
                    colName: field
                }

                if (obj[field] !== undefined){
                    if (!column.editorType && this._commonService.isString(obj[field]))
                        cell.text = obj[field];
                    else
                        cell.value = obj[field];
                }

                // Change text color based on cell value
                this.updateCellColor(cell);

                row.cells.push(cell);
            });

            rowList.push(row);
        });

        this.setState({ columns: columnList, rows: rowList });
    }

    updateCellColor(cell){
        if (cell.cid === 4 || cell.cid === 5 || cell.cid === 12)
            cell.style = { color: cell.value === 0 ? '#999999' : (cell.value > 0 ? '#45a145' : '#db4f4f') }
        else if (cell.cid === 6)
            cell.style = { color: cell.value === 3 ? '#999999' : (cell.value > 3 ? '#4088db' : '#db4f4f') }
    }
 
    // Events ------------------------------------------------------------------------------------

    dropDownExpandedChanged(e, column){
        column.isDropDownExpanded = e.detail.expanded;
    }

    gridScrollPosChanged(e){
        if (e.detail.value.y === e.detail.max.y && this.partialDataLoaded < 3){
            let fileName = './grid-dynamic-update-partial-data-' + (this.partialDataLoaded + 1).toString() + '.json';
            fetch(fileName, {
                    headers : { 
                        'Content-Type': 'application/json',
                        'Accept': 'application/json'
                    }
                })
                .then(response => response.json())
                .then(data => {
                        let self = this;
                        self.setState({ isGridLoading: true });
                        setTimeout(function(){
                            self.loadRows(data);
                            self.partialDataLoaded++;

                            self.gridRef.current.updateLayout();
                            self.setState({ isGridLoading: false });
                        }, 1000);
                    },
                    error => {
                        console.log("Partial data is not loaded", error);
                    }
                )
        }
    }

    isColumnVisible(id){
        let column = this.gridRef.current.getColumnById(id);

        return column ? (column.visible !== false ? true : false) : false;
    }

    itemChecked(e, item){
        let column = this.gridRef.current.getColumnById(item.id);

        if (column){
            column.visible = e.detail.checked;
            this.gridRef.current.updateLayout();
        }
    }

    // Random Values -----------------------------------------------------------------------------

    updateData(){
        let numRows = this.state.rows.length;
        // Change random set of records
        let numRecords = Math.floor(Math.random() * numRows) + 1;
        let currentRecords = [];
        while(currentRecords.length < numRecords){
            let change =  Math.floor(Math.random() * numRows);
            if(currentRecords.indexOf(change) === -1) currentRecords.push(change);
        }
        
        // Change to Stock Values
        let currentStockChange =  Math.floor(Math.random() * 5);
        let currentValues = [];
        while(currentValues.length < numRecords){
            let plusOrMinus = Math.random() < 0.5 ? -1 : 1;
            let change = Math.random() * 1 * currentStockChange * plusOrMinus;
            currentValues.push(change);
        }

        // Change to Ratings
        let currentRatings = [];
        while(currentRatings.length < numRecords){
            let change = Math.floor(Math.random() * 5) + 1;
            currentRatings.push(change);
        }

        // Change to Volume
        let currentVolumeChange =  Math.floor(Math.random() * 10000);
        let currentVolumes = [];
        while(currentVolumes.length < numRecords){
            let plusOrMinus = Math.random() < 0.5 ? -1 : 1;
            let change = Math.floor(Math.random() * numRecords) * currentVolumeChange * plusOrMinus;
            currentVolumes.push(change);
        }

        // Change to P/E
        let currentPEChange =  Math.floor(Math.random() * 5) * 0.1;
        let currentPEValues = [];
        while(currentPEValues.length < numRecords){
            let plusOrMinus = Math.random() < 0.5 ? -1 : 1;
            let change = Math.floor(Math.random() * numRecords) * currentPEChange * plusOrMinus;
            currentPEValues.push(change);
        }

        // Change to Div Yield
        let currentDivYieldChange =  Math.random() * 0.0001;
        let currentDivYieldValues = [];
        while(currentDivYieldValues.length < numRecords){
            let plusOrMinus = Math.random() < 0.5 ? -1 : 1;
            let change = Math.floor(Math.random() * numRecords) * currentDivYieldChange * plusOrMinus;
            currentDivYieldValues.push(change);
        }

        let currentData = this.state.rows;
        for (let i = 0; i < currentRecords.length; i++){
            let index = currentRecords[i];
            let currentRow = currentData[index];
            let stockCell = this.getCellId(currentRow, 3);

            // Change
            this.updateCellValue(currentRow, 5, currentValues[i]);
            // Change %
            this.updateCellValue(currentRow, 4, currentValues[i]);
            // Last
            this.updateCellValue(currentRow, 3, currentValues[i]);
            // Rating
            if (this.countInterval % numRecords === 0)
                this.updateCellValue(currentRow, 6, currentRatings[i]);
            // Volume
            this.updateCellValue(currentRow, 7, currentVolumes[i]);
            // P/E
            if (this.countInterval % numRecords * 2 === 0)
                this.updateCellValue(currentRow, 9, currentPEValues[i]);
            // Div Yield
            if (this.countInterval % 15 === 0)
                this.updateCellValue(currentRow, 12, currentDivYieldValues[i]);
            // All Time Low
            this.updateCellValue(currentRow, 13, stockCell.value);
            // All Time High
            this.updateCellValue(currentRow, 14, stockCell.value);
        }

        this.gridRef.current.updateView();
    }

	getCellId(row, id){
        let filtered = row.cells.filter(obj => obj.cid === id);
        return filtered.length > 0 ? filtered[0] : null;
    }  

    updateCellValue(row, id, newValue){
        let cell = this.getCellId(row, id);

        switch (id){
            case 3: // Last
                cell.value += newValue;
                break;

            case 4: // Change %
                let stockCell = this.getCellId(row, 3);

                if (stockCell && stockCell.value > 0)
                    cell.value = newValue / stockCell.value;
                break;

            case 5: // Change
                cell.value = newValue;
                break;

            case 7: // Volume
                cell.value = Math.max(0, cell.value + newValue);
                break;

            case 9: // P/E
                cell.value = Math.max(0, cell.value + newValue);
                break;

            case 12: // Div Yield
                cell.value = Math.max(0, cell.value + newValue);
                break;

            case 13: // All Time Low
                cell.value = Math.min(cell.value, newValue);
                break;

            case 14: // All Time High
                cell.value = Math.max(cell.value, newValue);
                break;

            default:
                cell.value = newValue;
                break;
        }

        this.updateCellColor(cell);
    }

    // Templates ---------------------------------------------------------------------------------

    //
    // Currently when using templates, the LitElement binding syntax is required
    // for properties, methods and events
    //

    currentDropDownTemplate = (column) => { 
        return html`
            <iui-listbox 
                .items="${this.state.dropDownList}" 
                .itemTemplate="${this.currentItemTemplate}"
                .size="${{ width: this.state.dropDownSize.width - 4, height: this.state.dropDownSize.height - 4 }}" 
                .theme="${this.state.currentTheme}" 
            ></iui-listbox>
        `;
    };

    currentHeaderTemplate = (column) => { 
        if (column.id === 2)
            return html`
                <div>
                    <iui-dropdownbutton data-column-dropdown
                        .allowAnimation=${this.state.isAnimationAllowed}
                        .contentTemplate="${this.currentDropDownTemplate}"
                        .data="${column}"
                        .dropDownAdjustment="${{ left: -167, top: 10 }}"
                        .dropDownIcon="${false}"
                        .dropDownSize="${this.state.dropDownSize}"
                        .expanded="${column.selected && column.isDropDownExpanded === true}"
                        .items="${this.state.dropDownList}"
                        .theme="${this.state.currentTheme}" 
                        @expandedChanged="${(e) => this.dropDownExpandedChanged(e, column)}"
                    >
                        <img src="../integralui-web/icons/menu-button.ico" />
                    </iui-dropdownbutton>
                    <span class="header-label-fixed">${column.title}</span>
                </div>
            `;
        else
            return html`<span class="header-label">${column.title}</span>`;
    };

    currentItemTemplate = (item) => { 
        return html`
            <iui-checkbox
                .checked="${this.isColumnVisible(item.id)}"
                .customStyle="${iuiGridDynamicUpdateStyle}"
                .resourcePath="${this.state.currentResourcePath}"
                .theme="${this.state.currentTheme}" 
                @checkedChanged="${(e) => this.itemChecked(e, item)}" 
            >
                ${item.text}
            </iui-checkbox>
        `;
    };

    currentRowCellTemplate = (row, cell) => { 
        switch (cell.cid){
            case 2:
                if (cell.isGroup){
                    switch (cell.valueID){
                        case 1: // CheckBox
                            return html`
                                <div style=${styleMap({ display: 'inline-block', textAlign: 'center'})}>
                                    <span class=${classMap(this.getCheckBoxClass(cell.value))}></span>
                                </div>`;
                    }
                }
                else 
                    return html`<div style=${styleMap({ display: 'inline-block', marginTop: '3px' })}>
                        <div><strong>${row.Stock}</strong></div>
                        <div>${row.Company}</div>
                    </div>`;
                break;

            case 6:
                return html`<span class="iui-editor-label">${this.getCellValue(cell.value)}</span>`;    
        }

        return null;
    };

    getRatingSymbol(){
        return '&#8599';
    }

    getCellValue(value){
        switch (value){
            case 1:
                return '⇊ Strong Sell'
            case 2:
                return '↘ Sell'
            case 4:
                return '↗ Buy'
            case 5:
                return '⇈ Strong Buy'
            default:
                return '⇄ Neutral'
        }
    }

    getCheckBoxClass(value){
        let retValue = { 'iui-editor-checkbox': true };

        if (value)
            retValue['iui-editor-checkbox-checked'] = true;
        else
            retValue['iui-editor-checkbox-unchecked'] = true;

        return retValue;  	
    }

    getGroupValue(cell){
        switch (cell.valueID){
            case 6:
                return this.state.columns
                    .filter(column => column.id === cell.valueID)
                    [0].editorSettings.items[cell.value-1].text;
        }

        return cell.value;
    }

    // Update ------------------------------------------------------------------------------------

    render() {
        return (
            <div>
                <h2>Grid / Dynamic Update</h2>
                <div className="sample-block-grd-stock" id="grid-stock">
                    <IntegralUIGridComponent ref={this.gridRef}
                        allowColumnReorder={true} 
                        allowAnimation={this.state.isAnimationAllowed} 
                        columns={this.state.columns} 
                        customStyle={iuiGridDynamicUpdateStyle}
                        expandColumnIndex={0}
                        grouping={this.state.groupSettings} 
                        groups={this.state.groups} 
                        headerTemplate={this.currentHeaderTemplate}
                        resourcePath={this.state.currentResourcePath}
                        rowHeight={40}
                        rows={this.state.rows} 
                        rowTemplate={this.currentRowCellTemplate}
                        selectedColumn={this.state.currentSelectedColumn} 
                        showFooter={false}
                        size={this.state.ctrlSize}
                        theme={this.state.currentTheme}
                        scrollPosChanged={(e) => this.gridScrollPosChanged(e)}
                    ></IntegralUIGridComponent>
                    { this.state.isGridLoading &&
                        <div className="grid-loading" style={{ width: this.gridRef.current.getSize().width - 16 + 'px' }}>
                            <span style={{ marginLeft: this.gridRef.current.getSize().width / 2 - 50 + 'px' }}></span>
                        </div>
                    }
                </div>
                <div className="feature-help">
                    <p><span className="initial-space"></span>An example of real time data simulation of stock exchange. The following features are presented:</p>
                    <ul className="feature-points">
                        <li><span className="code-name">Loading</span> - initial data is loaded froma JSON file and then converted to Grid data</li>
                        <li><span className="code-name">Update</span> - every 150ms a set of rows is randomly selected and its data changed. All related columns are updated accordingly.</li>
                        <li><span className="code-name">Grouping</span> - Grid re-arranges data in groups. In this demo rows can only be grouped by columns 'Sector' and 'Country'. Drag and Drop column header to grouping panel add a specified group. You can also reorder groups.</li>
                        <li><span className="code-name">Cell Templates</span> - some cells shows data in different colors and layouts</li>
                        <li><span className="code-name">Data Formatting</span> - numerical values like % and large numbers are automatically converted using standard data formats</li>
                        <li><span className="code-name">Fixed Columns</span> - first two columns: 'Company' and 'Last' are fixed on left side</li>
                        <li><span className="code-name">Column Visibility</span> - a dropdown menu is available from 'Company' column where you can choose which column is visible</li>
                        <li><span className="code-name">Infinite Scrolling</span> - when scrolling to the end, loading process starts and new data is loaded. This demo present only three additional JSON data sets.</li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default GridDynamicUpdate;
