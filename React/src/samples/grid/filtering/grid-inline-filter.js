import React, { Component } from 'react';
import { html } from 'integralui-web/external/lit-element.js';

import IntegralUICommonService from 'integralui-web/services/integralui.common.service.js';
import IntegralUIGridComponent from 'integralui-web/wrappers/react.integralui.grid.js';
import { IntegralUIFilterType, IntegralUITheme } from 'integralui-web/components/integralui.enums.js';

import gridData from './grid-inline-filter-data.json';

class GridInlineFilter extends Component {

    //
    // Initialization / Destruction --------------------------------------------------------------
    //

    constructor(props){
        super(props);

        this._commonService = new IntegralUICommonService();

        this.state = {
            columns: [],
            ctrlSize: { height: 500 },
            currentResourcePath: '../../integralui-web/icons',
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

    // Data --------------------------------------------------------------------------------------

    convertJSONData(data){
        let columnList = [];
        let rowList = [];

        // Create columns
        data.columns.forEach(obj => {
            let column = Object.assign({ headerAlignment: 'center' }, obj);

            if (column.filterType)
                column.filterType = IntegralUIFilterType[column.filterType];

            columnList.push(column);
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
                // Caluclate the Total value: sum of (Quantity * Price) + Shipping Cost
                else if (column.id === 11)
                    cell.value = (obj["Quantity"] * obj["Price"]) + obj["Shipping Cost"];

                row.cells.push(cell);
            });

            rowList.push(row);
        });

        this.setState({ columns: columnList, rows: rowList });
    }

    // Templates ---------------------------------------------------------------------------------

    currentHeaderTemplate = (column) => { 
        return html`<span class="header-label">${column.title}</span>`;
    };


    // Update ------------------------------------------------------------------------------------

    render() {
        return (
            <div>
                <h2>Grid / Inline Filter</h2>
                <div className="sample-block" id="grid-inline-filter">
                    <IntegralUIGridComponent ref={this.gridRef}
                        allowAnimation={this.state.isAnimationAllowed} 
                        allowFilter={true}
                        columns={this.state.columns} 
                        headerTemplate={this.currentHeaderTemplate}
                        inlineFilter={true}
                        resourcePath={this.state.currentResourcePath}
                        rows={this.state.rows} 
                        showFooter={false}
                        size={this.state.ctrlSize}
                        theme={this.state.currentTheme}
                    ></IntegralUIGridComponent>
                    <div className="feature-help">
                        <p><span className="initial-space"></span>Inline filtering allows you to quickly search among grid data and locate the specific information quickly. In this example you can filter the grid data using the inline filter, which appears in first row. Depending on column data type, a different filter is applied for Date, Numeric and String values.</p>
                        <p><span className="initial-space"></span>You can choose a filter operation for each column that has filtering enabled. By clicking on filter operation icon a dropdown list will popup from where you can choose a different operation. In case of Dates, clicking on calendar icon allows you to select a Date.</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default GridInlineFilter;
