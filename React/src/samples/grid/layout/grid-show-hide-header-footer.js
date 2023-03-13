import React, { Component } from 'react';
import { html } from 'integralui-web/external/lit-element.js';
import { styleMap } from 'integralui-web/external/style-map.js';

import IntegralUICommonService from 'integralui-web/services/integralui.common.service.js';
import IntegralUICheckBoxComponent from 'integralui-web/wrappers/react.integralui.checkbox.js';
import IntegralUIGridComponent from 'integralui-web/wrappers/react.integralui.grid.js';
import { IntegralUIGridLines, IntegralUITheme } from 'integralui-web/components/integralui.enums.js';
import { iuiGridShowHideHeaderFooterStyle } from './grid-show-hide-header-footer.style.js';

import gridData from './grid-show-hide-header-footer-data.json';
import './grid-show-hide-header-footer.css';

class GridShowHideheaderFooter extends Component {

    //
    // Initialization / Destruction --------------------------------------------------------------
    //

    constructor(props){
        super(props);

        this._commonService = new IntegralUICommonService();

        this.state = {
            columns: [],
            ctrlSize: { height: 500 },
            currentGridLines: IntegralUIGridLines.Both,
            currentResourcePath: '../../../integralui-web/icons',
            currentTheme: IntegralUITheme.Office,
            isAnimationAllowed: true,
            isFooterVisible: true,
            isHeaderVisible: true,
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

    //
    // Methods -----------------------------------------------------------------------------------
    //

    // Data --------------------------------------------------------------------------------------

    convertJSONData(data){
        // Create columns
        let columnList = [];

        data.columns.forEach(obj => {
            let column = Object.assign({ groupText: obj.title, headerAlignment: 'center' }, obj);
            if (column.id !== 1 && column.id !== 11 && column.id !== 15)
                column.allowDrag = false;

            // Set Footer
            // Because there are fixed columns, they must have some footer text so that they appear aligned with non-fixed columns footer
            column.footerText = '.';

            // Set description for Total Volume, it will appear under Rating column
            if (column.id === 6)
                column.footerText = 'Total';
                
            columnList.push(column);
        });

        // Create rows
        let rowList = [];

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

    // Events ------------------------------------------------------------------------------------

    onHeaderChanged(e){
        this.setState({ isHeaderVisible: e.detail.checked ? true : false });
        this.gridRef.current.scrollPos({ x: 0, y: 0 });
    }

    onFooterChanged(e){
        this.setState({ isFooterVisible: e.detail.checked ? true : false });
    }

    onGridLinesChanged(e){
        this.setState({ currentGridLines: this.state.currentGridLines === IntegralUIGridLines.Both ? IntegralUIGridLines.None : IntegralUIGridLines.Both });
    }

    // Random Values -----------------------------------------------------------------------------

    updateData(){
        if (this.gridRef && this.gridRef.current){
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

            // Volume
            let totalVolume = 0;
            currentData.forEach(row => {
                totalVolume += this.getNewVolume(row, 7);
            });

            this.updateFooterVolumeValue(totalVolume);

            // Update the grid view with current data
            this.gridRef.current.updateView();
        }
    }

    getCellId(row, id){
        let filtered = row.cells.filter(obj => obj.cid === id);
        return filtered.length > 0 ? filtered[0] : null;
    }  

    getNewVolume(row, id){
        let cell = this.getCellId(row, id);
        return cell.value;
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

    updateFooterVolumeValue(value){
        if (this.gridRef && this.gridRef.current){
            let column = this.gridRef.current.getColumnById(7);
            if (column)
                column.footerValue = value;
        }
    }
    
    // Templates -----------------------------------------------------------------------------

    currentFooterTemplate = (column) => { 
        switch (column.id){
            case 6: // Total description
                return html`<strong>${column.footerText}</strong>`;

            case 7: // Total Volume
                return html`<strong>${this.getFooterDisplayValue(column)}</strong>`;

            default: // Hide the '.' from foom footer for otheer columns
                return html`<span style="opacity:0">${column.footerText}</span>`;
        }
    };

    currentHeaderTemplate = (column) => { 
        return html`<span class="header-label">${column.title}</span>`;
    };

    currentRowTemplate = (row, cell) => { 
        switch (cell.cid){
            case 2:
                return html`<div style=${styleMap({ display: 'inline-block', marginTop: '3px' })}>
                        <div><strong>${row.Stock}</strong></div>
                        <div>${row.Company}</div>
                    </div>`;

            case 6:
                return html`<span class="iui-editor-label">${this.getCellValue(cell.value)}</span>`;    
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

    getFooterDisplayValue(column){
        return this._commonService.convertValue(column.footerValue, column.format);
    }

    updateCellColor(cell){
        if (cell.cid === 4 || cell.cid === 5 || cell.cid === 12)
            cell.style = { color: cell.value === 0 ? '#999999' : (cell.value > 0 ? '#45a145' : '#db4f4f') }
        else if (cell.cid === 6)
            cell.style = { color: cell.value === 3 ? '#999999' : (cell.value > 3 ? '#4088db' : '#db4f4f') }
    }

    // Update ------------------------------------------------------------------------------------

    render() {
        return (
            <div>
                <h2>Grid / How to Show/Hide Header and Footer</h2>
                <div className="sample-block-show-hide-header-footer">
                    <IntegralUIGridComponent ref={this.gridRef}  id="grid-show-hide-header-footer"
                        allowAnimation={this.state.isAnimationAllowed} 
                        allowFocus={false}
                        columns={this.state.columns} 
                        customStyle={iuiGridShowHideHeaderFooterStyle}
                        footerTemplate={this.currentFooterTemplate}
                        gridLines={this.state.currentGridLines}
                        headerTemplate={this.currentHeaderTemplate}
                        resourcePath={this.state.currentResourcePath}
                        rowHeight={40}
                        rows={this.state.rows} 
                        rowTemplate={this.currentRowTemplate}
                        showFooter={this.state.isFooterVisible}
                        showHeader={this.state.isHeaderVisible}
                        size={this.state.ctrlSize}
                        theme={this.state.currentTheme}
                    ></IntegralUIGridComponent>
                    <div className="control-panel">
                        <IntegralUICheckBoxComponent allowAnimation={this.state.isAnimationAllowed} checked={true} checkedChanged={(e) => this.onHeaderChanged(e)}>Header</IntegralUICheckBoxComponent>
                        <IntegralUICheckBoxComponent allowAnimation={this.state.isAnimationAllowed} checked={true} checkedChanged={(e) => this.onFooterChanged(e)}>Footer</IntegralUICheckBoxComponent>
                        <IntegralUICheckBoxComponent allowAnimation={this.state.isAnimationAllowed} checked={true} checkedChanged={(e) => this.onGridLinesChanged(e)}>Grid Lines</IntegralUICheckBoxComponent>
                    </div>
                </div>
                <div className="feature-help">
                    <p><span className="initial-space"></span>In this demo, clicking on check boxes in control panel below the grid, you can set whether grid header or footer are visible or not.</p>
                </div>
            </div>
        );
    }
}

export default GridShowHideheaderFooter;
