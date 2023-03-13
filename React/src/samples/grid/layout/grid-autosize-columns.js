import React, { Component } from 'react';

import IntegralUICommonService from 'integralui-web/services/integralui.common.service.js';
import IntegralUIGridComponent from 'integralui-web/wrappers/react.integralui.grid.js';
import { IntegralUIEditorType, IntegralUITheme } from 'integralui-web/components/integralui.enums.js';
import { iuiGridAutoSizeColumnsStyle } from './grid-autosize-columns.style.js';

import gridData from './grid-autosize-columns-data.json';

class GridAutoSizeColumns extends Component {

    //
    // Initialization / Destruction --------------------------------------------------------------
    //

    constructor(props){
        super(props);

        this._commonService = new IntegralUICommonService();

        this.state = {
            columns: [
                { id: 2, headerText: "Title", width: 300 },
                { id: 3, headerText: "Year", headerAlignment: "center", contentAlignment: "center", width: 70 },
                { id: 1, editorType: IntegralUIEditorType.CheckBox, fixedWidth: true, width: 30 },
                { id: 5, headerText: "Genre", headerAlignment: "center", contentAlignment: "center", width: 120 },
                { 
                    id: 4, 
                    headerText: "Rating", 
                    editorType: IntegralUIEditorType.Rating, 
                    editorSettings: {
                        editOnFocus: true
                    },
                    headerAlignment: "center", 
                    contentAlignment: "center", 
                    width: 150, 
                    minWidth: 90
                },
                { id: 6, headerText: "Released", allowGrouping: false, headerAlignment: "center", contentAlignment: "center", width: 130 }
            ],
            ctrlSize: { height: 400 },
            currentResourcePath: '../../../integralui-web/icons',
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
        let rowList = [];

        data.forEach(obj => {
            // Copy all fields from JSON data and add a new field 'cells'
            let row = Object.assign({ cells: [] }, obj);

            // Loop through all columns and create cells accordingly
            this.state.columns.forEach(column => {
                let field = column.id === 1 ? 'isChecked' : column.headerText;

                // Add Title to the row text
                if (field === 'Title')
                    row.text = obj[field];

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

            rowList.push(row);
        });

        this.setState({ rows: rowList });
    }

    // Update ------------------------------------------------------------------------------------

    render() {
        return (
            <div>
                <h2>Grid / Auto-Size Columns</h2>
                <div className="sample-block" id="grid-auto-size-columns">
                    <IntegralUIGridComponent ref={this.gridRef}
                        allowAnimation={this.state.isAnimationAllowed} 
                        allowFocus={false}
                        autoSizeColumns={true}
                        columns={this.state.columns} 
                        customStyle={iuiGridAutoSizeColumnsStyle}
                        resourcePath={this.state.currentResourcePath}
                        rowHeight={28}
                        rows={this.state.rows} 
                        showFooter={false}
                        size={this.state.ctrlSize}
                        theme={this.state.currentTheme}
                    ></IntegralUIGridComponent>
                    <div className="feature-help">
                        <p><span className="initial-space"></span>In above sample, columns occupy the grid width in full. The horizontal scrollbar will remain hidden, and whenever a column resizes, it only changes its width and the width of neighboring column.</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default GridAutoSizeColumns;
