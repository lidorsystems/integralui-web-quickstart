import React, { Component } from 'react';
import { html } from 'integralui-web/external/lit-element.js';

import IntegralUICheckBoxComponent from 'integralui-web/wrappers/react.integralui.checkbox.js';
import IntegralUICommonService from 'integralui-web/services/integralui.common.service.js';
import IntegralUIGridComponent from 'integralui-web/wrappers/react.integralui.grid.js';
import { IntegralUIEditMode, IntegralUITheme } from 'integralui-web/components/integralui.enums.js';

import gridData from './grid-form-editing-data.json';

// Import editor components
import 'integralui-web/components/integralui.datepicker.js';
import 'integralui-web/components/integralui.select.js';

class GridFormEditing extends Component {

    //
    // Initialization / Destruction --------------------------------------------------------------
    //

    constructor(props){
        super(props);

        this._commonService = new IntegralUICommonService();

        this.state = {
            columns: [],
            ctrlSize: { height: 465 },
            currentEditMode: IntegralUIEditMode.Form,
            currentResourcePath: '../../integralui-web/icons',
            currentTheme: IntegralUITheme.Office,
            gridFields: {
                column: {
                    headerText: 'title'
                }
            },
            isValidationInUse: true,
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
            let row = e.detail.data;

            let quantityCell = this.getCellById(row, 6);
            let priceCell = this.getCellById(row, 7);
            let totalCell = this.getCellById(row, 11);

            if (quantityCell && priceCell && totalCell)
                totalCell.value = quantityCell.value * priceCell.value;
        }
    }

    gridDataInvalid(e){
        alert("Some data fields are invalid!");
    }

    getCellById(row, id){
        let filtered = row.cells.filter(cell => cell.cid === id);

        return filtered.length > 0 ? filtered[0] : null;
    }

    gridRowDblClick(e){
        this.gridRef.current.beginEdit(e.detail.row);
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

            // Set callback function for ShipMode, uses Custom data validation
            if (column.id === 12 && column.validation)
                column.validation.rules[0].callback = this.validateShipMode;

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
                // Calculate the Total value: sum of (Quantity * Price) + Shipping Cost
                else if (column.id === 11)
                    cell.value = obj["Quantity"] * obj["Price"] + obj["Shipping Cost"];
                    
                row.cells.push(cell);
            });
            
            rowList.push(row);
        });

        this.setState({ columns: columnList, rows: rowList });
    }

    useValidationChanged(e){
        this.setState({ isValidationInUse: e.detail.checked });
    }

    validateShipMode(value){
        return value >= 0;
    }

    // Update ------------------------------------------------------------------------------------

    render() {
        return (
            <div>
                <h2>Grid / Form Editing</h2>
                <div className="sample-block" id="grid-form-editing">
                    <div align="right">
                        <IntegralUICheckBoxComponent allowFocus={false} checked={this.state.isValidationInUse} resourcePath={this.state.currentResourcePath} theme={this.state.currentTheme} checkedChanged={(e) => this.useValidationChanged(e)}>Use Validation</IntegralUICheckBoxComponent><br/>
                    </div>
                    <IntegralUIGridComponent ref={this.gridRef}
                        allowAnimation={this.state.isAnimationAllowed} 
                        allowFocus={false}
                        editMode={this.state.currentEditMode}
                        columns={this.state.columns} 
                        dataFields={this.state.gridFields}
                        headerTemplate={this.currentHeaderTemplate}
                        resourcePath={this.state.currentResourcePath}
                        rows={this.state.rows} 
                        showFooter={false}
                        size={this.state.ctrlSize}
                        theme={this.state.currentTheme}
                        useValidation={this.state.isValidationInUse}
                        dataChanged={(e) => this.gridDataChanged(e)}
                        dataInvalid={(e) => this.gridDataInvalid(e)}
                        rowDblClick={(e) => this.gridRowDblClick(e)}
                    ></IntegralUIGridComponent>
                    <div className="feature-help">
                        <p><span className="initial-space"></span>When <strong>Form Editing</strong> mode is activated, you can select a row and:</p>
                        <ul className="feature-points">
                            <li>hover over cell in first column and click on Pencil icon to show a Form and start editing</li>
                            <li>make changes to cell values using editors in the Form</li>
                            <li>save or cancel any changes using buttons at the bottom of the Form</li>
                        </ul>
                        <p><span className="initial-space"></span>A row is in editing mode when Pencil icon is fully shown, stating that you can edit cell values for that row using editors from the Form. You can edit dates using keyboard, Left/Right arrow keys changes dates by day. In addition, holding the SHIFT key will change a date by 30 days.</p>
                        <p><span className="initial-space"></span>Clicking the Pencil icon on a different row than the one edited, will update the Form with cell values from the selected row. In the process, any changes not saved are cancelled. Clicking again on the Pencil icon, will close the Form.</p>
                        <p><span className="initial-space"></span>You can also activate the editing Form by double-clicking a row. In this case, the editing is activated by handling the <strong>rowDblClick</strong> event and calling the <strong>beginEdit</strong> method.</p>
                        <p><span className="initial-space"></span>When changes are saved, the <span className="code-name">dataChanged</span> event is fired, which you can handle in your code. In this example, handling this event updates the Total value, as a result of changes from Quantity and Price values.</p>
                        <p><span className="initial-space"></span>In addition, <strong>Data Validation</strong> is enabled. Depending on the rule and data field value a check is made whenever new value is entered. If the new value don't pass the validation rule, a message will pop up stating a requirement. In order data to be saved all fields must have a valid value.</p><br/>
                    </div>
                </div>
            </div>
        );
    }
}

export default GridFormEditing;
