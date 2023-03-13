import React, { Component } from 'react';
import { html } from 'integralui-web/external/lit-element.js';
import { classMap } from 'integralui-web/external/class-map.js';
import { styleMap } from 'integralui-web/external/style-map.js';

import IntegralUICommonService from 'integralui-web/services/integralui.common.service.js';
import IntegralUIGridComponent from 'integralui-web/wrappers/react.integralui.grid.js';
import { IntegralUIEditMode, IntegralUIEditorType, IntegralUITheme } from 'integralui-web/components/integralui.enums.js';
import { iuiGridRowCustomToolbarStyle } from './grid-row-custom-toolbar.style.js';

import gridData from './grid-row-custom-toolbar-data.json';

class GridRowCustomToolbar extends Component {

    //
    // Initialization / Destruction --------------------------------------------------------------
    //

    constructor(props){
        super(props);

        this._commonService = new IntegralUICommonService();
    
        // DropDownList
        this.genres = [
            { text: 'Action' },
            { text: "Adventure" },
            { text: "Animation" },
            { text: "Biography" },
            { text: "Comedy" },
            { text: "Crime" },
            { text: "Drama" },
            { text: "Fantasy" },
            { text: "Horror" },
            { text: "Mystery" },
            { text: "Sci-Fi" },
            { text: "Thriller" },
            { text: "Western" }
        ];

        this.state = {
            columns: [
                { id: 1, fixedWidth: true, width: 30 },
                { id: 2, headerText: "Title", minWidth: 150, width: 300 },
                { 
                    id: 5, 
                    headerText: "Genre", 
                    headerAlignment: "center", 
                    editorType: IntegralUIEditorType.DropDownList,
                    editorSettings: {
                        allowAnimation: true,
                        dropDownAdjustment: { top: 10 },
                        items: this.genres
                    },
                    minWidth: 100,
                    width: 120
                },
                { 
                    id: 4, 
                    headerText: "Rating", 
                    editorType: IntegralUIEditorType.Rating, 
                    editorSettings: {
                        editOnFocus: true
                    },
                    headerAlignment: "center", 
                    contentAlignment: "center", 
                    width: 120, 
                    fixedWidth: true
                },
                { id: 3, headerText: "Year", headerAlignment: "center", contentAlignment: "center", minWidth: 50, width: 70 },
            ],
            ctrlSize: { height: 400 },
            currentEditMode: IntegralUIEditMode.Custom,
            currentResourcePath: '../../../integralui-web/icons',
            currentTheme: IntegralUITheme.Office,
            gridScrolling: { horizontal: false },
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

                    // If it is not the Genre field, add it to cell text, otherwise because of dropdownlist editor add it to cell value
                    if (column.id !== 5 && this._commonService.isString(obj[field]))
                        cell.text = obj[field];
                    else
                        cell.value = obj[field];

                    row.cells.push(cell);
                }
            });

            rowList.push(row);
        });

        this.createRowToolbar(rowList);

        this.setState({ rows: rowList });
    }
    
    createRowToolbar(list){
        list.map(row => 
            row.buttons = [
                { key: 'DELETE', icon: 'trash', tooltip: { title: "Delete", initialDelay: 1000, position: 'above' } },
                { key: 'CHARTS', icon: 'statistics', tooltip: { title: "Statistics", initialDelay: 1000, position: 'above' } },
                { key: 'MARK', icon: 'favorite', tooltip: { title: "Favorite", initialDelay: 1000, position: 'above' } }
            ]
        );
    }

    // Events ------------------------------------------------------------------------------------

    toolbarButtonClicked(row, button){
        switch (button.key){
            case 'DELETE':
                this.gridRef.current.removeRow(row);
                this.gridRef.current.updateLayout();
                break;

            case 'CHARTS':
                alert("Statistics button is clicked for row: " + row.text);
                break;

            case 'MARK':
                row.favorite = row.favorite != undefined ? !row.favorite : true;
                button.icon = row.favorite ? 'favorite-selected' : 'favorite';
                break;
        }
    }

    // Templates ---------------------------------------------------------------------------------

    currentRowHoverTemplate = (row) => { 
        if (row && row.buttons)
            return html`
                ${row.buttons.map(button => html`
                        <div class="grid-row-hover-button">
                    <iui-tooltip enabled="true" .settings="${button.tooltip}"> 
                            <span class="grid-row-hover-button-icons ${button.icon}" @click="${() => this.toolbarButtonClicked(row, button)}"></span>
                    </iui-tooltip>
                        </div>
                `)}
            `;

        return null;
    };

    currentRowTemplate = (row, cell) => { 
        switch (cell.cid){
            case 1:
                return html`<span class=${classMap({ 'grid-row-hover-cell-favorite': true, 'grid-row-hover-cell-favorite-selected': row.favorite === true })} style=${styleMap({ opacity: this.isRowHovered(row) ? 1 : 0.5 })}></span>`;
        }

        return null;
    };

    isRowHovered(row){
        return this.gridRef.current.isRowHovered(row);
    }

    // Update ------------------------------------------------------------------------------------

    render() {
        return (
            <div>
                <h2>Grid / Custom Toolbar on Mouse Over</h2>
                <div className="sample-block" id="grid-row-custom-toolbar">
                    <IntegralUIGridComponent ref={this.gridRef}
                        allowAnimation={this.state.isAnimationAllowed} 
                        allowFocus={false}
                        autoSizeColumns={true}
                        columns={this.state.columns} 
                        customStyle={iuiGridRowCustomToolbarStyle}
                        editMode={this.state.currentEditMode}
                        resourcePath={this.state.currentResourcePath}
                        rowHeight={28}
                        rows={this.state.rows} 
                        rowHoverTemplate={this.currentRowHoverTemplate}
                        rowTemplate={this.currentRowTemplate}
                        showFooter={false}
                        showScroll={this.state.gridScrolling}
                        size={this.state.ctrlSize}
                        theme={this.state.currentTheme}
                    ></IntegralUIGridComponent>
                    <div className="feature-help">
                        <p><span className="initial-space"></span>in this demo, when moving the mouse cursor over rows, a toolbar will appear on the right side. The toolbar contains three icons: Delete, Statistics and Favorite. Clicking on them will start a different action accordingly.</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default GridRowCustomToolbar;
