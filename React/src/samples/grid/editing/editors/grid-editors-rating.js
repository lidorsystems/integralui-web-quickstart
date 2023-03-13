import React, { Component } from 'react';

import IntegralUICommonService from 'integralui-web/services/integralui.common.service.js';
import IntegralUIGridComponent from 'integralui-web/wrappers/react.integralui.grid.js';
import { IntegralUIEditorType, IntegralUIIncrementMode, IntegralUITheme } from 'integralui-web/components/integralui.enums.js';
import 'integralui-web/components/integralui.rating.js';

import gridData from './grid-editors-rating-data.json';
import { iuiGridEditorsRatingStyle } from './grid-editors-rating.style.js';

class GridEditorsRating extends Component {

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
                { 
                    id: 4, 
                    headerText: "Rating", 
                    headerAlignment: "center", 
                    contentAlignment: "center", 
                    editorType: IntegralUIEditorType.Rating,
                    editorSettings: {
                        editOnFocus: true,
                        increment: IntegralUIIncrementMode.Partial,
                        stepSize: 22
                    },
                    width: 150, 
                    fixedWidth: true
                }
            ],
            ctrlSize: { width: 600, height: 400 },
            currentResourcePath: '../../../../integralui-web/icons',
            currentTheme: IntegralUITheme.Office,
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
                let field = column.headerText;

                // Add Title to the row text
                if (field === 'Title')
                    row.text = obj[field];

                // Delete all fields that will be included in cells, except for the field 'Title'
                if (column.headerText !== 'Title')
                    delete row[field];

                // Each row should have a cell for check box column, otherwise only add cells for existing fields
                if (obj[field] !== undefined){
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

        return result;
    }

    // Events ------------------------------------------------------------------------------------

    cellValueChanged(e){
        // Only handle if the value changes for the cell with a rating
        if (e.detail.cell.cid === 4)
            console.log("Rating for " + e.detail.row.text + " has changed to: ", e.detail.value);
    }

    getCellWithRating(list, id){
        return this.gridRef.current.getCellByColumnId(list, id);
    }

    // Update ------------------------------------------------------------------------------------

    render() {
        return (
            <div>
                <h2>Grid / Cells with Rating</h2>
                <div className="sample-block" id="grid-editors-rating">
                    <IntegralUIGridComponent ref={this.gridRef}
                        allowAnimation={this.state.isAnimationAllowed} 
                        columns={this.state.columns} 
                        customStyle={iuiGridEditorsRatingStyle} 
                        rowHeight={28}
                        resourcePath={this.state.currentResourcePath}
                        rows={this.state.rows} 
                        showFooter={false}
                        size={this.state.ctrlSize}
                        theme={this.state.currentTheme}
                        valueChanged={(e) => this.cellValueChanged(e)}
                    ></IntegralUIGridComponent>
                    <div className="feature-help">
                        <p><span className="initial-space"></span>In this example, the default gold star that represents a rating are replaced by a white star on gray and red background. By clicking inside the rating space and move the cursor while you hold the left mouse button, you can change the rating value for each grid cell individually. You can also change the rating by single click or with mouse scroll.</p>
                        <p><span className="initial-space"></span>Whenever rating changes, the console log displays a message from the event fired when cell value changes.</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default GridEditorsRating;
