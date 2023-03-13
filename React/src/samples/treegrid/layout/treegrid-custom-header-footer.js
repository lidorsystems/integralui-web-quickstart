import React, { Component } from 'react';
import { html } from 'integralui-web/external/lit-element.js';

import 'integralui-web/components/integralui.checkbox.js';
import 'integralui-web/components/integralui.tooltip.js';
import IntegralUITreeGridComponent from 'integralui-web/wrappers/react.integralui.treegrid.js';
import { IntegralUICheckState, IntegralUIEditorType, IntegralUITheme } from 'integralui-web/components/integralui.enums.js';
import { iuiTreeGridCustomHeaderFooterStyle } from './treegrid-custom-header-footer.style.js';

class TreeGridCustomHeaderFooter extends Component {

    //
    // Initialization / Destruction --------------------------------------------------------------
    //

    constructor(props){
        super(props);
    
        this.state = {
            columns: [
                { 
                    id: 1, 
                    editorType: IntegralUIEditorType.CheckBox,
                    editorSettings: { threeState: true },
                    headerAlignment: "center", 
                    fixedWidth: true, 
                    width: 30
                },
                { id: 2, headeraAlignment: "center", width: 325 },
                { id: 3, headeraAlignment: "center", width: 250 }
            ],
            ctrlSize: { width: 800, height: 400 },
            currentResourcePath: '../../../integralui-web/icons',
            currentTheme: IntegralUITheme.Office,
            isAnimationAllowed: true,
            rows: [
                { 
                    id: 1,
                    cells: [{ cid: 1 }, { cid: 2, text: "Cell 12" }, {  cid: 3, text: "Cell 13" }],
                    rows: [
                        { id: 11, pid: 1, cells: [{ cid: 1 }, {  cid: 2, text: "Cell 112" }, { cid: 3, text: "Cell 113" }] },
                        { 
                            id: 12,
                            pid: 1,
                            cells: [{ cid: 1 }, {  cid: 2, text: "Cell 122" }, { cid: 3, text: "Cell 123" }],
                            rows: [
                                { id: 121, pid: 12, cells: [{ cid: 1 }, {  cid: 2, text: "Cell 1212" }, { cid: 3, text: "Cell 1213" }] },
                                { 
                                    id: 122,
                                    pid: 12,
                                    cells: [{ cid: 1 }, {  cid: 2, text: "Cell 1222" }, { cid: 3, text: "Cell 1223" }],
                                    expanded: false,
                                    rows: [
                                        { id: 1221, pid: 122, cells: [{ cid: 1 }, {  cid: 2, text: "Cell 12212" }, { cid: 3, text: "Cell 12213" }] },
                                        { id: 1222, pid: 122, cells: [{ cid: 1 }, {  cid: 2, text: "Cell 12222" }, { cid: 3, text: "Cell 12223" }] }
                                    ]
                                },
                                { id: 123, pid: 12, cells: [{ cid: 1 }, {  cid: 2, text: "Cell 1232" }, { cid: 3, text: "Cell 1233" }] }
                            ]
                        },
                        { id: 13, pid: 1, cells: [{ cid: 1 }, {  cid: 2, text: "Cell 132" }, { cid: 3, text: "Cell 133" }] },
                        {
                            id: 14,
                            pid: 1,
                            cells: [{ cid: 1 }, {  cid: 2, text: "Cell 142" }, { cid: 3, text: "Cell 143" }],
                            expanded: false,
                            rows: [
                                { id: 141, pid: 14, cells: [{ cid: 1 }, {  cid: 2, text: "Cell 1412" }, { cid: 3, text: "Cell 1413" }] },
                                { id: 142, pid: 14, cells: [{ cid: 1 }, {  cid: 2, text: "Cell 1422" }, { cid: 3, text: "Cell 1423" }] }
                            ]
                        }
                    ]
                },
                {
                    id: 2,
                    cells: [{ cid: 1 }, {  cid: 2, text: "Cell 22" }, { cid: 3, text: "Cell 23" }],
                    rows: [
                        { id: 21, pid: 2, cells: [{ cid: 1 }, {  cid: 2, text: "Cell 212" }, { cid: 3, text: "Cell 213" }] },
                        { id: 22, pid: 2, cells: [{ cid: 1 }, {  cid: 2, text: "Cell 222" }, { cid: 3, text: "Cell 223" }] },
                        {
                            id: 23,
                            pid: 2,
                            cells: [{ cid: 1 }, {  cid: 2, text: "Cell 232" }, { cid: 3, text: "Cell 233" }],
                            expanded: false,
                            rows: [
                                { id: 231, pid: 23, cells: [{ cid: 1 }, {  cid: 2, text: "Cell 2312" }, { cid: 3, text: "Cell 2313" }] },
                                { id: 232, pid: 23, cells: [{ cid: 1 }, {  cid: 2, text: "Cell 2322" }, { cid: 3, text: "Cell 2323" }] }
                            ]
                        }
                    ]
                },
                { id: 3, cells: [{ cid: 1 }, {  cid: 2, text: "Cell 32" }, { cid: 3, text: "Cell 33" }] }
            ]
        }
    
        this.checkedRowsCount = 0;
        this.supressCallBack = false;

		//
		// Tooltip settings
		//

        this.tooltipSettings = {
            autoPopDelay: 3000,
            enabled: true,
            initialDelay: 1000,
            position: 'mouse',
            showMarker: true
        }

        this.gridRef = React.createRef();
    }

    //
    // Methods -----------------------------------------------------------------------------------
    //

    // Events ------------------------------------------------------------------------------------

    cellDoubleClicked(e){
        // Prevent expand/collapse when cell with check box is double-clicked
        if (e.detail.cell.cid === 1){
            e.detail.cancel = true;
            e.stopPropagation();
        }
    }

    cellValueChanged(e){
        // Supress changes from column check state when cell value is changing
        this.supressCallBack = true;

        // Update the checkbox in column header, based on check box values in all rows
        // Only handle if the value changes for the cell with a checkbox
        if (e.detail.cell.cid === 1){
            // If row has children, it can only be set to Checked or Unchecked on click
            // Indeterminate value is determined from its child rows checked value
            if (e.detail.value === IntegralUICheckState.Indeterminate)
                e.detail.row.checkState = IntegralUICheckState.Checked;
            else
                e.detail.row.checkState = e.detail.value;

            // Because visual representation or a checked row is in the first column cell
            // update the check box value for that cell based on row checked state
            this.updateCellCheckBoxValue(e.detail.row);

            // Update child row(s) check value based on this row checked value
            this.updateChildrenCheckValue(e.detail.row);

            // Update parent row(s) check value based on this row checked value
            let parent = this.gridRef.current.getRowParent(e.detail.row);
            this.updateParentRowCheckValue(parent);

            // Update the checked state in column header
            this.updateColumnCheckValue(e.detail.cell.cid);
        
            this.gridRef.current.updateView();
        }

        this.supressCallBack = false;
    }

    // General -------------------------------------------------------------------------------

    columnCheckStateChanged(e, column){
        if (column && !this.supressCallBack){
            if (e.detail.checkState === IntegralUICheckState.Indeterminate)
                column.checkState = IntegralUICheckState.Checked;
            else
                column.checkState = e.detail.checkState;

            // Update checkbox value for all rows, based on column checkbox value
            if (column.checkState !== IntegralUICheckState.Indeterminate){
                // Get a linear list of all rows
                let list = this.gridRef.current.getFullList();

                list.forEach(row => {
                    row.checkState = column.checkState;
                    this.updateCellCheckBoxValue(row);
                });
            }

            this.gridRef.current.updateLayout();
        }
    }

    getCheckStateValue(list){
        if (list && list.length > 0){
            let numChildRows = list.length;
            let checkedRows = list.filter(row => row.checkState === "Checked");
            let indeterminateRows = list.filter(row => row.checkState === "Indeterminate");

            // Depending on how many child rows are checked, the checkbox value can be either
            // Checked, Indeterminate or Unchecked
            if (checkedRows.length === numChildRows)
                return IntegralUICheckState.Checked;
            else if (checkedRows.length > 0 || indeterminateRows.length > 0)
                return IntegralUICheckState.Indeterminate;
        }

        return IntegralUICheckState.Unchecked;
    }

    updateCellCheckBoxValue(row){
        let cell = this.gridRef.current.getCellByColumnId(row.cells, 1);
        if (cell)
            cell.value = row.checkState;
    }

    updateChildrenCheckValue(row){
        if (row && row.rows){
            row.rows.forEach(childRow => {
                childRow.checkState = row.checkState;
                this.updateCellCheckBoxValue(childRow);

                this.updateChildrenCheckValue(childRow);
            });
        }
    }
            
    updateColumnCheckValue(colId){
        let column = this.gridRef.current.getColumnById(colId);
        if (column)
            column.checkState = this.getCheckStateValue(this.gridRef.current.rows);
    }

    updateParentRowCheckValue(row){
        if (row){
            row.checkState = this.getCheckStateValue(row.rows);
            this.updateCellCheckBoxValue(row);

            let parent = this.gridRef.current.getRowParent(row);
            this.updateParentRowCheckValue(parent);
        }
    }

    // Templates -----------------------------------------------------------------------------

    //
    // Currently when using templates, the LitElement binding syntax is required
    // for properties, methods and events
    //
    currentHeaderTemplate = (column) => { 
        switch (column.id){
            case 1:
                return html`<iui-checkbox 
                        .allowFocus=${false}
                        .checkState=${column.checkState}
                        .customStyle=${iuiTreeGridCustomHeaderFooterStyle} 
                        .resourcePath=${this.state.currentResourcePath} 
                        .threeState=${true} 
                        @checkStateChanged=${(e) => this.columnCheckStateChanged(e, column)}
                    ></iui-checkbox>
                `;

            case 2:
                return html`
                    <div class="two-lines">
                        <p>This is a column with longer text</p>
                        <p>Second line</p>
                    </div>
                `;

            case 3:
                return html`
                    <div class="italic-content">
                        <span>In convallis tellus a mauris </span>
                        <iui-tooltip
                            .customStyle=${iuiTreeGridCustomHeaderFooterStyle} 
                            .enabled=${this.tooltipSettings.enabled}
                            .settings=${Object.assign({ title: 'More info' }, this.tooltipSettings )}
                            .theme=${this.state.currentTheme}
                        >
                            <span class="more-info"></span>
                        </iui-tooltip>
                    </div>
                `;
        }

        return null;
    };

    currentFooterTemplate = (column) => { 
        if (column.id === 2)
            return html`
                <div class="custom-footer">
                    <span>Checked Rows: ${this.checkedRowsCount} / ${this.getTotalRowsCount()}</span>
                    <iui-button .allowAnimation=${true} .allowFocus=${false} .customStyle=${iuiTreeGridCustomHeaderFooterStyle} @click="${() => this.countCheckedRows()}">Count</iui-button>
                </div>
            `;

        return null;
    };

    countCheckedRows(){
        let list = this.gridRef.current.getFullList();

        this.checkedRowsCount = 0;
        list.forEach(row => {
            if (row.checkState === "Checked")
                this.checkedRowsCount++
        });
    }

    getTotalRowsCount(){
        return this.gridRef.current.getFullList().length;
    }

    // Update ------------------------------------------------------------------------------------

    render() {
        return (
            <div>
                <h2>TreeGrid / Custom Header and Footer</h2>
                <div className="sample-block" id="treegrid-custom-header-footer">
                    <IntegralUITreeGridComponent ref={this.gridRef}
                        allowAnimation={this.state.isAnimationAllowed} 
                        allowFocus={false}
                        columns={this.state.columns} 
                        customStyle={iuiTreeGridCustomHeaderFooterStyle}
                        expandColumnIndex={1}
                        footerTemplate={this.currentFooterTemplate}
                        headerTemplate={this.currentHeaderTemplate}
                        resourcePath={this.state.currentResourcePath}
                        rowHeight={28}
                        rows={this.state.rows} 
                        size={this.state.ctrlSize}
                        theme={this.state.currentTheme}
                        cellDblClick={(e) => this.cellDoubleClicked(e)}
                        valueChanged={(e) => this.cellValueChanged(e)}
                    ></IntegralUITreeGridComponent>
                    <div className="feature-help">
                        <p><span className="initial-space"></span>In this sample each column header is built using a custom template. Second column footer also uses a custom template. The following examples are presented:</p>
                        <ul className="feature-points">
                            <li>column header with check box - a template showing a check box. We are using the IntegralUI CheckBox component in this case, but any other HTML element is acceptable, like input element</li>
                            <li>column header with text in two lines - a template with two text paragraphs</li>
                            <li>column header  with text and an icon - a template with a paragraph containing text and question icon with a tooltip</li>
                            <li>column footer with button and text - a template with a paragraph containing button and text</li>
                        </ul>
                        <p><span className="initial-space"></span>Whenever button in column footer is clicked, the text is updated showing how many rows are checked.</p>
                        <p><span className="initial-space"></span>The template is created in code, using custom CSS styles and HTML elements, and then applied to the column by using the following properties:</p>
                        <ul className="feature-points">
                            <li><span style={{ color: '#c60d0d' }}>headerTemplate</span> - holds a reference to a custom template used to replace the header text with custom HTML elements</li>
                            <li><span style={{ color: '#c60d0d' }}>footerTemplate</span> - holds a reference to a custom template used to replace the footer text with custom HTML elements</li>
                        </ul>
                        <p><span className="initial-space"></span>There is no limit on what kind of template that you can create. Any combination of HTML elements is acceptable, along with custom events.</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default TreeGridCustomHeaderFooter;
