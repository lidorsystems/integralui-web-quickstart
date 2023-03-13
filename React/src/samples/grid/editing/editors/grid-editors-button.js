import React, { Component } from 'react';
import { html } from 'integralui-web/external/lit-element.js';
import { styleMap } from 'integralui-web/external/style-map.js';

import IntegralUICommonService from 'integralui-web/services/integralui.common.service.js';
import IntegralUIGridComponent from 'integralui-web/wrappers/react.integralui.grid.js';
import { IntegralUITheme } from 'integralui-web/components/integralui.enums.js';

import gridData from './grid-editors-button-data.json';
import { iuiGridEditorsButtonStyle } from './grid-editors-button.style.js';

class GridEditorsButton extends Component {

    //
    // Initialization / Destruction --------------------------------------------------------------
    //

    constructor(props){
        super(props);

        this._commonService = new IntegralUICommonService();

        this.state = {
            columns: [],
            ctrlSize: { height: 500 },
            currentResourcePath: '../../../../integralui-web/icons',
            currentTheme: IntegralUITheme.Office,
            isAnimationAllowed: true,
            rows: []
        }

        this.changeInterval = null;
        this.countInterval = 0;
        this.initTimeout = null;
    
        this.gridRef = React.createRef();
    }

    componentDidMount(){
        let self = this;
        self.convertJSONData(gridData);

        self.initTimeout = setTimeout(function(){
            self.changeInterval = setInterval(function(){
                self.updateData();
                self.countInterval++;
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

    //
    // Methods -----------------------------------------------------------------------------------
    //

    // Data --------------------------------------------------------------------------------------

    convertJSONData(data){
        let columnList = [];
        let rowList = [];

        // Create columns
        data.columns.forEach(obj => {
            let column = Object.assign({ headerAlignment: 'center' }, obj);
            if (column.id !== 1 && column.id !== 11 && column.id !== 15)
                column.allowDrag = false;

            columnList.push(column);

            // Add a column that will contain buttons
            // The button is added from the cell template
            if (column.title === 'Last'){
                columnList.push({ id: 99, contentAlignment: 'center', fixed: 'left', fixedWidth: true, width: 90 });
            }
        });

        // Create rows
        data.rows.forEach(obj => {
            // Copy all fields from JSON data and add a new field 'cells'
            let row = Object.assign({ cells: [] }, obj);

            // Loop through all columns and create cells accordingly
            data.columns.forEach(column => {
                let field = column.title;

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

                // Add cell that will contain a button
                if (field === 'Last')
                    row.cells.push({ cid: 99 });
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

    deleteRow(row){
        if (row){
            this.gridRef.current.removeRow(row);
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

    currentHeaderTemplate = (column) => { 
        return html`<span class="header-label">${column.title}</span>`;
    };

    currentRowCellTemplate = (row, cell) => { 
        switch (cell.cid){
            case 2: // Company
                return html`<div style=${styleMap({ display: 'inline-block', marginTop: '3px' })}>
                        <div><strong>${row.Stock}</strong></div>
                        <div>${row.Company}</div>
                    </div>`;
                break;

            case 6: //  Rating
                return html`<span class="iui-editor-label">${this.getCellValue(cell.value)}</span>`;    

            case 99: // Button
                return html`<iui-button .allowFocus=${false} .customStyle=${iuiGridEditorsButtonStyle} .theme=${this.state.currentTheme} @mousedown="${() => this.deleteRow(row)}">Delete</iui-button>`;    
        }

        return null;
    };

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

    // Update ------------------------------------------------------------------------------------

    render() {
        return (
            <div>
                <h2>Grid / Cells with Button</h2>
                <div className="sample-block" id="grid-editors-button">
                    <IntegralUIGridComponent ref={this.gridRef}
                        allowAnimation={this.state.isAnimationAllowed}
                        allowFocus={false} 
                        columns={this.state.columns} 
                        customStyle={iuiGridEditorsButtonStyle}
                        headerTemplate={this.currentHeaderTemplate}
                        resourcePath={this.state.currentResourcePath}
                        rowHeight={40}
                        rows={this.state.rows} 
                        rowTemplate={this.currentRowCellTemplate}
                        showFooter={false}
                        size={this.state.ctrlSize}
                        theme={this.state.currentTheme}
                    ></IntegralUIGridComponent>
                </div>
                <div className="feature-help">
                    <p><span className="initial-space"></span>In this example, the Grid has a fixed column that shows a button in column cells. Whenever the button is clicked, it removes the corresponding row from the grid.</p>
                </div>
            </div>
        );
    }
}

export default GridEditorsButton;
