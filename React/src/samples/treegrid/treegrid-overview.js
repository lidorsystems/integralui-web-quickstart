import React, { Component } from 'react';
import { Link } from "react-router-dom";

import IntegralUICommonService from 'integralui-web/services/integralui.common.service.js';
import IntegralUITreeGridComponent from 'integralui-web/wrappers/react.integralui.treegrid.js';
import { IntegralUIEditorType, IntegralUISelectionMode, IntegralUITheme } from 'integralui-web/components/integralui.enums.js';
import 'integralui-web/components/integralui.rating.js';

import gridData from './treegrid-overview-data.json';

class TreeGridOverview extends Component {

    //
    // Initialization / Destruction --------------------------------------------------------------
    //

    constructor(props){
        super(props);

        this._commonService = new IntegralUICommonService();

        this.state = {
            columns: [
                { id: 1, width: 30, editorType: IntegralUIEditorType.CheckBox, fixedWidth: true },
                { id: 2, headerText: "Title", width: 300 },
                { id: 3, headerText: "Year", headerAlignment: "center", contentAlignment: "center", width: 70 },
                { 
                    id: 4, 
                    headerText: "Rating", 
                    headerAlignment: "center", 
                    contentAlignment: "center", 
                    editorType: IntegralUIEditorType.Rating,
                    editorSettings: {
                        editOnFocus: true
                    },
                    width: 150, 
                    fixedWidth: true
                },
                { id: 5, headerText: "Released", headerAlignment: "center", contentAlignment: "center", width: 180 }
            ],
            ctrlSize: { width: 800, height: 400 },
            currentResourcePath: '../../integralui-web/icons',
            currentTheme: IntegralUITheme.Office,
            expandColumnIndex: 1,
            isAnimationAllowed: true,
            rows: [],
            selMode: IntegralUISelectionMode.MultiExtended
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
                <h2>TreeGrid / Overview</h2>
                <div className="sample-block" id="treegrid-overview">
                    <IntegralUITreeGridComponent ref={this.gridRef}
                        allowAnimation={this.state.isAnimationAllowed} 
                        expandColumnIndex={this.state.expandColumnIndex}
                        columns={this.state.columns} 
                        resourcePath={this.state.currentResourcePath}
                        rows={this.state.rows} 
                        selectionMode={this.state.selMode}
                        size={this.state.ctrlSize}
                        theme={this.state.currentTheme}
                    ></IntegralUITreeGridComponent>
                    <div className="feature-help">
                        <p><span className="initial-space"></span><strong><span className="code-name">IntegralUI</span> TreeGrid</strong> is a native Web Component that displays hierarchical data structures in multiple columns. You can load data on demand during run-time from local or remote data sources, and add custom HTML content or other components in each treegrid cell.</p>
                        <p><span className="initial-space"></span>In above demo, the treegrid has columns with different content: <Link to="/checkbox">checkbox</Link>, <Link to="/rating">rating</Link> and label. In this example, check boxes can have 2 values: checked or unchecked, but you can change this easily by providing three values.</p>
                        <p><span className="initial-space"></span>Some columns have their content aligned to center, while others have their alignment set to left. You may also notice that expand icon is shown in second column. This is customizable, you can set which column has the expand box in your code.</p>
                        <p><span className="initial-space"></span>To select multiple rows, hold SHIFT or CTRL key and click on specific row.</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default TreeGridOverview;
