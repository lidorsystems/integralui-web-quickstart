import React, { Component } from 'react';
import { html } from 'integralui-web/external/lit-element.js';

import IntegralUICheckBoxComponent from 'integralui-web/wrappers/react.integralui.checkbox.js';
import IntegralUICommonService from 'integralui-web/services/integralui.common.service.js';
import IntegralUITreeGridComponent from 'integralui-web/wrappers/react.integralui.treegrid.js';
import { IntegralUIEditMode, IntegralUITheme } from 'integralui-web/components/integralui.enums.js';

import treegridData from './treegrid-inline-editing-data.json';
import { iuiTreeGridInlineEditingStyle } from './treegrid-inline-editing.style.js';

// Import editor components
import 'integralui-web/components/integralui.datepicker.js';
import 'integralui-web/components/integralui.select.js';

class TreeGridInlineEditing extends Component {

    //
    // Initialization / Destruction --------------------------------------------------------------
    //

    constructor(props){
        super(props);

        this._commonService = new IntegralUICommonService();

        this.state = {
            columns: [],
            ctrlSize: { height: 400 },
            currentEditMode: IntegralUIEditMode.Inline,
            currentResourcePath: '../../integralui-web/icons',
            currentTheme: IntegralUITheme.Office,
            isAnimationAllowed: true,
            isValidationInUse: true,
            rows: []
        }
        
        this.treegridRef = React.createRef();
    }

    componentDidMount(){
        this.convertJSONData(treegridData);
    }

    //
    // Methods -----------------------------------------------------------------------------------
    //

    // Editing -----------------------------------------------------------------------------------

    cellValueChanged(e){
        // Update the Total value when Quantity or Price changes
        if (e.detail.cell.cid === 6 || e.detail.cell.cid === 7){
            let quantityCell = this.getCellById(e.detail.row, 6);
            let priceCell = this.getCellById(e.detail.row, 7);
            let totalCell = this.getCellById(e.detail.row, 11);

            if (quantityCell && priceCell && totalCell)
                totalCell.value = quantityCell.value * priceCell.value;
        }
    }

    getCellById(row, id){
        let filtered = row.cells.filter(cell => cell.cid === id);

        return filtered.length > 0 ? filtered[0] : null;
    }

    treegridDataInvalid(e){
        alert("Some data fields are invalid!");
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
                    cell.value = obj["Quantity"] * obj["Price"];

                row.cells.push(cell);
            });
            
            rowList.push(row);
        });

        this.setState({ columns: columnList, rows: rowList });
    }

    useValidationChanged(e){
        this.setState({ isValidationInUse: e.detail.checked });
    }

    // Update ------------------------------------------------------------------------------------

    render() {
        return (
            <div>
                <h2>TreeGrid / Inline Editing</h2>
                <div className="sample-block" id="treegrid-inline-editing">
                    <div align="right">
                        <IntegralUICheckBoxComponent allowFocus={false} checked={this.state.isValidationInUse} resourcePath={this.state.currentResourcePath} theme={this.state.currentTheme} checkedChanged={(e) => this.useValidationChanged(e)}>Use Validation</IntegralUICheckBoxComponent><br/>
                    </div>
                    <IntegralUITreeGridComponent ref={this.treegridRef}
                        allowAnimation={this.state.isAnimationAllowed} 
                        columns={this.state.columns} 
                        customStyle={iuiTreeGridInlineEditingStyle}
                        editMode={this.state.currentEditMode}
                        headerTemplate={this.currentHeaderTemplate}
                        resourcePath={this.state.currentResourcePath}
                        rowHeight={30}
                        rows={this.state.rows} 
                        showFooter={false}
                        size={this.state.ctrlSize}
                        theme={this.state.currentTheme}
                        useValidation={this.state.isValidationInUse}
                        dataInvalid={(e) => this.treegridDataInvalid(e)}
                        valueChanged={(e) => this.cellValueChanged(e)}
                    ></IntegralUITreeGridComponent>
                    <div className="feature-help">
                        <p><span className="initial-space"></span>When <strong>Inline Editing</strong> mode is activated, you can:</p>
                        <ul className="feature-points">
                            <li>hover over cell in first column and click on Pencil icon to start editing mode or press ENTER when cell is focused to activate the editor, or</li>
                            <li>you can also start editing by clicking on Edit button in the last column</li>
                            <li>make changes to cell values using editors when cell is focused</li>
                            <li>delete a row using the Remove button in the last column</li>
                            <li>save or cancel any changes using buttons in the last column</li>
                        </ul>
                        <p><span className="initial-space"></span>With inline editing you can select and edit a specific row using built-in editors depending on column data type. There are different kinds of editors available that you can choose from: CheckBox, Date, DropList, Numeric, Progress, Rating, Slider and Text.</p>
                        <p><span className="initial-space"></span>A row is in editing mode when Pencil icon is fully shown, stating that you can edit cell values for that row using editors when cell is focused. You can edit dates with mouse, when cell is clicked a dropdown Calendar will appear or using a keyboard, with Left/Right arrow keys change dates by day. In addition, holding the SHIFT key will change a date by 30 days.</p>
                        <p><span className="initial-space"></span>Clicking the Pencil icon on a different row than the one edited, will cancel any changes not saved. Clicking again on the Pencil icon, will close the editor.</p>
                        <p><span className="initial-space"></span>When changes are saved, the <span className="code-name">dataChanged</span> event is fired, which you can handle in your code. In addition, any change to cell values fires the <span className="code-name">valueChanged</span> event, like in this example, handling this event updates the Total value, as a result of changes from Quantity and Price values.</p>
                        <p><span className="initial-space"></span>In addition, <strong>Data Validation</strong> is enabled. Depending on the rule and data field value a check is made whenever new value is entered. If the new value don't pass the validation rule, a message will pop up stating a requirement. In order data to be saved all fields must have a valid value.</p><br/>
                    </div>
                </div>
            </div>
        );
    }
}

export default TreeGridInlineEditing;
