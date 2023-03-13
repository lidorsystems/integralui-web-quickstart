import React, { Component } from 'react';
import { html } from 'integralui-web/external/lit-element.js';

import IntegralUICommonService from 'integralui-web/services/integralui.common.service.js';
import IntegralUIGridComponent from 'integralui-web/wrappers/react.integralui.grid.js';
import { IntegralUICheckState, IntegralUIEditorType, IntegralUITheme } from 'integralui-web/components/integralui.enums.js';
import 'integralui-web/components/integralui.rating.js';

import gridData from './grid-editors-checkbox-data.json';
import { iuiGridEditorsCheckBoxStyle } from './grid-editors-checkbox.style.js';

class GridEditorsCheckBox extends Component {

    //
    // Initialization / Destruction --------------------------------------------------------------
    //

    constructor(props){
        super(props);

        this._commonService = new IntegralUICommonService();

        this.state = {
            columns: [
                { id: 1, editorType: IntegralUIEditorType.CheckBox, fixedWidth: true, headerAlignment: "center", width: 30 },
                { id: 2, headerText: "Title", width: 300 },
                { id: 3, headerText: "Year", headerAlignment: "center", contentAlignment: "center", width: 70 },
                { 
                    id: 4, 
                    headerText: "Rating", 
                    headerAlignment: "center", 
                    contentAlignment: "center", 
                    editorType: IntegralUIEditorType.Rating,
                    editorSettings: {
                        editOnFocus: false
                    },
                    width: 150, 
                    fixedWidth: true
                },
                { id: 5, headerText: "Released", headerAlignment: "center", contentAlignment: "center", width: 180 }
            ],
            ctrlSize: { width: 800, height: 400 },
            currentResourcePath: '../../../../integralui-web/icons',
            currentTheme: IntegralUITheme.Office,
            expandColumnIndex: 1,
            isAnimationAllowed: true,
            rows: []
        }
        
        this.gridRef = React.createRef();
    }

    componentDidMount(){
        this.setState({ rows: this.convertJSONData(gridData) });
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
                let field = column.id === 1 ? 'isChecked' : column.headerText;

                // Delete all fields that will be included in cells, except for the field 'Title'
                if (column.headerText !== 'Title')
                    delete row[field];

                // Each row should have a cell for check box column, otherwise only add cells for existing fields
                if (column.id === 1 || obj[field] !== undefined){
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

            result.push(row);
        });

        this.updateColumnCheckValue(result, 1);

        return result;
    }

    updateColumnCheckValue(listRows, id){
        let column = this.gridRef.current.getColumnById(id);
        if (column){
            let filtered = listRows.filter(row => {
                let cell = this.getCellWithCheckBox(row.cells, column.id);
                return cell ? cell.value : false;
            });

            // Column checkbox value has three states
            // Depending on how many rows are checked, the column checkbox value canbe either
            // Checked, Indeterminate or Unchecked
            if (filtered.length === listRows.length)
                column.value = IntegralUICheckState.Checked;
            else if (filtered.length > 0)
                column.value = IntegralUICheckState.Indeterminate;
            else
                column.value = IntegralUICheckState.Unchecked;

            this.gridRef.current.refresh();
        }
    }

    // Events ------------------------------------------------------------------------------------

    cellValueChanged(e){
        // Update the checkbox in column header, based on check box values in all rows
        // Only handle if the value changes for the cell with a checkbox
        if (e.detail.cell.cid === 1)
            this.updateColumnCheckValue(this.state.rows, e.detail.cell.cid);
    }

    columnCheckStateChanged(e, column){
        if (column){
            column.value = e.detail.checkState;

            // Update checkbox value for all rows, based on column checkbox value
            if (column.value !== IntegralUICheckState.Indeterminate)
                this.state.rows.forEach(row => {
                    let cell = this.getCellWithCheckBox(row.cells, column.id);
                    if (cell)
                        cell.value = column.value === IntegralUICheckState.Checked ? true : false;
                });

            this.gridRef.current.updateLayout();
        }
    }

    getCellWithCheckBox(list, id){
        return this.gridRef.current.getCellByColumnId(list, id);
    }

    // Templates ---------------------------------------------------------------------------------

    currentHeaderTemplate = (column) => { 
        if (column.id === 1)
            return html`<iui-checkbox 
                .allowFocus=${false}
                .checkState=${column.value}
                .customStyle=${iuiGridEditorsCheckBoxStyle} 
                .resourcePath=${this.state.currentResourcePath} 
                .threeState=${true} 
                 @checkStateChanged=${(e) => this.columnCheckStateChanged(e, column)}
            ></iui-checkbox>`;

        return null;
    };

    // Update ------------------------------------------------------------------------------------

    render() {
        return (
            <div>
                <h2>Grid / Cells with CheckBox</h2>
                <div className="sample-block" id="grid-editors-checkbox">
                    <IntegralUIGridComponent ref={this.gridRef}
                        allowAnimation={this.state.isAnimationAllowed} 
                        allowFocus={false}
                        columns={this.state.columns} 
                        customStyle={iuiGridEditorsCheckBoxStyle} 
                        headerTemplate={this.currentHeaderTemplate}
                        rowHeight={28}
                        resourcePath={this.state.currentResourcePath}
                        rows={this.state.rows} 
                        showFooter={false}
                        size={this.state.ctrlSize}
                        theme={this.state.currentTheme}
                        valueChanged={(e) => this.cellValueChanged(e)}
                    ></IntegralUIGridComponent>
                    <div className="feature-help">
                        <p><span className="initial-space"></span>In above demo, the Grid has one column with check boxes. If checkbox in column header is clicked, all checkboxes will become checked or unchecked.</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default GridEditorsCheckBox;
