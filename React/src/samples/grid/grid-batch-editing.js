import React, { Component } from 'react';
import { html } from 'integralui-web/external/lit-element.js';

import IntegralUIButtonComponent from 'integralui-web/wrappers/react.integralui.button.js';
import IntegralUICommonService from 'integralui-web/services/integralui.common.service.js';
import IntegralUIGridComponent from 'integralui-web/wrappers/react.integralui.grid.js';
import { IntegralUIEditMode, IntegralUITheme, IntegralUIVisibility } from 'integralui-web/components/integralui.enums.js';

import gridData from './grid-batch-editing-data.json';
import './grid-batch-editing.css';
import { iuiGridBatchEditingStyle } from './grid-batch-editing.style.js';

// Import editor components
import 'integralui-web/components/integralui.datepicker.js';
import 'integralui-web/components/integralui.select.js';

class GridBatchEditing extends Component {

    //
    // Initialization / Destruction --------------------------------------------------------------
    //

    constructor(props){
        super(props);

        this._commonService = new IntegralUICommonService();

        this.shipModeList = [
            { id: 1, text: "None", value: -1 },
            { id: 2, text: "Delivery Truck", value: 0 },
            { id: 3, text: "Regular Air", value: 1 },
            { id: 4, text: "Express Air", value: 2 }
        ];

        this.state = {
            columns: [],
            ctrlSize: { height: 400 },
            currentEditMode: IntegralUIEditMode.Batch,
            currentResourcePath: '../integralui-web/icons',
            currentTheme: IntegralUITheme.Office,
            isAnimationAllowed: true,
            rows: []
        }
        
        this.gridRef = React.createRef();
    }

    componentDidMount(){
        this.convertJSONData(gridData);
    }

    //
    // Methods -----------------------------------------------------------------------------------
    //

    // Editing -----------------------------------------------------------------------------------

    gridDataChanged(e){
        // Update the Total value when Quantity or Price changes
        if (e.detail.data){
            e.detail.data.forEach(row => {
                let quantityCell = this.getCellById(row, 6);
                let priceCell = this.getCellById(row, 7);
                let shippingCostCell = this.getCellById(row, 9);
                let totalCell = this.getCellById(row, 11);

                if (quantityCell && priceCell && shippingCostCell && totalCell)
                    totalCell.value = quantityCell.value * priceCell.value + shippingCostCell.value;
            });
        }
    }

    getCellById(row, id){
        let filtered = row.cells.filter(cell => cell.cid === id);

        return filtered.length > 0 ? filtered[0] : null;
    }

    saveChanges(keep){
        // Calling endEdit will complete the editing process
        // If called with true, it will save any changes
        this.gridRef.current.endEdit(keep);
    }

    // Templates ---------------------------------------------------------------------------------

    currentHeaderTemplate = (column) => { 
        return html`<span class="header-label">${column.title}</span>`;
    };

    // Data --------------------------------------------------------------------------------------

    convertJSONData(data){
        let columnList = [];
        let rowList = [];

        /////////////////////
        // Create columns
        /////////////////////

        // Load other columns from the data source
        data.columns.forEach(obj => {
            let column = Object.assign({ headerAlignment: 'center' }, obj);

            column.editorSetting = { 
                visible:IntegralUIVisibility.None
            }

            columnList.push(column);
        });


        /////////////////////
        // Create Rows
        /////////////////////

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
                    if (this._commonService.isString(obj[field])){
                        let fieldValue = Date.parse(obj[field]);
                        if (obj[field].slice(-1) === 'Z' && !isNaN(fieldValue))
                            cell.value = new Date(fieldValue);
                        else
                            cell.value = obj[field];
                    }
                    else
                        cell.value = obj[field];
                }
                // Caluclate the Total value: sum of (Quantity * Price) + Shipping Cost
                else if (column.id === 11)
                    cell.value = obj["Quantity"] * obj["Price"] + obj["Shipping Cost"];

                row.cells.push(cell);
            });
            
            rowList.push(row);
        });

        this.setState({ columns: columnList, rows: rowList });
    }

    // Update ------------------------------------------------------------------------------------

    render() {
        return (
            <div>
                <h2>Grid / Batch Editing</h2>
                <div className="sample-block" id="grid-batch-editing">
                    <IntegralUIGridComponent ref={this.gridRef}
                        allowAnimation={this.state.isAnimationAllowed} 
                        editMode={this.state.currentEditMode}
                        columns={this.state.columns} 
                        customStyle={iuiGridBatchEditingStyle}
                        headerTemplate={this.currentHeaderTemplate}
                        resourcePath={this.state.currentResourcePath}
                        rowHeight={30}
                        rows={this.state.rows} 
                        showFooter={false}
                        size={this.state.ctrlSize}
                        theme={this.state.currentTheme}
                        dataChanged={(e) => this.gridDataChanged(e)}
                    ></IntegralUIGridComponent>
                    <div className="sample-block-panel">
                        <IntegralUIButtonComponent allowFocus={true} allowAnimation={this.state.isAnimationAllowed} theme={this.state.currentTheme} onClick={() => this.saveChanges(true)}>Save Changes</IntegralUIButtonComponent>
                        <IntegralUIButtonComponent allowFocus={true} allowAnimation={this.state.isAnimationAllowed} theme={this.state.currentTheme} onClick={() => this.saveChanges()}>Cancel</IntegralUIButtonComponent>
                    </div>
                    <div className="feature-help">
                        <p><span className="initial-space"></span>When <strong>Batch Editing</strong> mode is activated, you can navigate among cells and:</p>
                        <ul className="feature-points">
                            <li>make changes to cell values using different kind of editors, depending on the value type</li>
                            <li>remove a row from a button in the last column, this will highlight the row</li>
                            <li>cancel any changes made within a row from a button in the last column</li>
                        </ul>
                        <p><span className="initial-space"></span>Any changes to cell values are highlight (orange color), so you can easily see what is changed within the Grid. However, these changes are only temporary and if not saved they will be cancelled. Using the last column you can remove a row or if changes are made to cancel them within that row. Finally to complete the editing process, you can save all changes or cancel them using the buttons below the grid.</p>
                        <p><span className="initial-space"></span>You can edit dates using keyboard, Left/Right arrow keys changes dates by day. In addition, holding the SHIFT key will change a date by 30 days.</p>
                        <p><span className="initial-space"></span>When changes are saved, the <span className="code-name">dataChanged</span> event is fired, which you can handle in your code. In this example, handling this event updates the Total value, as a result of changes from Quantity, Price and Shipping Cost values.</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default GridBatchEditing;
