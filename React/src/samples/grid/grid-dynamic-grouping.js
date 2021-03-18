import React, { Component } from 'react';
import { html } from 'integralui-web/external/lit-element.js';
import { classMap } from 'integralui-web/external/class-map.js';
import { styleMap } from 'integralui-web/external/style-map.js';

import IntegralUICommonService from 'integralui-web/services/integralui.common.service.js';
import IntegralUIGridComponent from 'integralui-web/wrappers/react.integralui.grid.js';
import { IntegralUIEditorType, IntegralUITheme } from 'integralui-web/components/integralui.enums.js';
import 'integralui-web/components/integralui.rating.js';

import gridData from './grid-dynamic-grouping-data.json';
import { iuiGridDynamicGroupingStyle } from './grid-dynamic-grouping.style.js';

class GridDynamicGrouping extends Component {

    //
    // Initialization / Destruction --------------------------------------------------------------
    //

    constructor(props){
        super(props);

        this._commonService = new IntegralUICommonService();

        this.state = {
            columns: [
                { id: 2, headerText: "Title", allowDrag: false, allowDrop: false, allowGrouping: false, width: 300 },
                { id: 1, groupText: "True/False", editorType: IntegralUIEditorType.CheckBox, contentAlignment: 'center', width: 30, fixedWidth: true },
                { id: 3, headerText: "Year", headerAlignment: "center", contentAlignment: "center", width: 70 },
                { id: 4, headerText: "Genre", headerAlignment: "center", contentAlignment: "center", width: 50, visible: false },
                { 
                    id: 5, 
                    headerText: "Rating", 
                    headerAlignment: "center", 
                    editorType: IntegralUIEditorType.Rating, 
                    editorSettings: {
                        editOnFocus: true
                    },
                    contentAlignment: "center", 
                    width: 170, 
                    fixedWidth: true
                },
                { id: 6, headerText: "Released", allowGrouping: false, headerAlignment: "center", contentAlignment: "center", width: 130 }
            ],
            ctrlSize: { width: 800, height: 460 },
            currentResourcePath: '../integralui-web/icons',
            currentTheme: IntegralUITheme.Office,
            groups: [
                { cid: 4 }
            ],
            groupSettings: {
                enabled: true,
                items: [
                    { id: 1, text: "True/False" },
                    { id: 3, text: "Year" },
                    { id: 4, text: "Genre" },
                    { id: 5, text: "Ratings" }
                ],
                showColumns: false
            },
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

        return result;
    }

    // Templates --------------------------------------------------------------------------------------

    //
    // Currently when using templates, the LitElement binding syntax is required
    // for properties, methods and events
    //

    currentRowCellTemplate = (row, cell) => { 
        switch (cell.cid){
            case 2:
                if (cell.isGroup){
                    switch (cell.valueID){
                        case 1: // True/False
                            return html`
                                <div style=${styleMap({ display: 'inline-block', textAlign: 'center'})}>
                                    <span class=${classMap(this.getCheckBoxClass(cell.value))}></span>
                                </div>`;

                        case 4: // GENRE
                            return html`<span>
                                    <span class="grid-grp-icons ${cell.text.toLowerCase()}"></span>
                                    <span>${cell.text}</span>
                                </span>`;

                        case 5: // Rating
                            return html`
                                <div class="iui-editor-rating" align="center" style=${styleMap({ display: 'inline-block' })}>
                                    <iui-rating 
                                        .customStyle=${iuiGridDynamicGroupingStyle}
                                        .readOnly=${true}
                                        .resourcePath="${this.state.currentResourcePath}"
                                        .theme="${this.state.currentTheme}" 
                                        .value=${cell.value} 
                                    ></iui-rating>
                                </div>`;
    
                        default:
                            return null;
                    }                
                }
                break;
            
            default:
                return null;
        }

        return null;
    };

    getCheckBoxClass(value){
        let retValue = { 'iui-editor-checkbox': true };

        if (value)
            retValue['iui-editor-checkbox-checked'] = true;
        else
            retValue['iui-editor-checkbox-unchecked'] = true;

        return retValue;  	
    }

    // Update ------------------------------------------------------------------------------------

    render() {
        return (
            <div>
                <h2>Grid / Dynamic Grouping</h2>
                <div className="sample-block" id="grid-dynamic-grouping">
                    <IntegralUIGridComponent ref={this.gridRef}
                        allowAnimation={this.state.isAnimationAllowed} 
                        allowColumnReorder={true} 
                        columns={this.state.columns} 
                        customStyle={iuiGridDynamicGroupingStyle}
                        grouping={this.state.groupSettings} 
                        groups={this.state.groups} 
                        resourcePath={this.state.currentResourcePath}
                        rowHeight={26}
                        rows={this.state.rows} 
                        rowTemplate={this.currentRowCellTemplate}
                        showFooter={false}
                        size={this.state.ctrlSize}
                        theme={this.state.currentTheme}
                    ></IntegralUIGridComponent>
                    <div className="feature-help">
                        <p><span className="initial-space"></span>An example of Grid where data is arranged dynamically by different groups.</p>
                        <p><span className="initial-space"></span>Initially, there is one group present, the 'Genre' group. But you can create other groups by:</p>
                        <ul className="feature-points">
                            <li>Dragging the column title and drop it in the grouping panel above</li>
                        </ul>
                        <p><span className="initial-space"></span>Once a group is created, the corresponding column is removed from the view. And vice versa, once group is removed, the column will re-appear in the view. This is customizable and handled in sample code by <span className="code-name">groupAdded</span> and <span className="code-name">groupRemoved</span> events.</p>
                        <p><span className="initial-space"></span>When you have more than one group present, you can reorder them by click and drag over the group title. The grid data will auto-update based on current group order. This allows you to dynamically change the Grid data.</p>
                        <p><span className="initial-space"></span>Depending on data in each column, a different template for group data is used. This is customizable in HTML, depending on group.valueID field, which corresponds to the column id value. In combination with group.value, you can create different templates for each group separatelly.</p>
                        <p><span className="initial-space"></span>Rating is displayed using the <strong>IntegralUI Rating</strong> component. By changing a rating value in rows, grouping will also change, based on new values.</p>
                        <p><span className="initial-space"></span>Some columns like 'Title' and 'Released' are excluded from grouping functionality. This is determined in sample code by <span className="code-name">allowGrouping</span> field of column object, which for these columns is set to <span className="code-lang">false</span>.</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default GridDynamicGrouping;
