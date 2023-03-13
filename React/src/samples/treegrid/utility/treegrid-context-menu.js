import React, { Component } from 'react';
import { html } from 'integralui-web/external/lit-element.js';
import { styleMap } from 'integralui-web/external/style-map';

import 'integralui-web/components/integralui.contextmenu.js';
import IntegralUITreeGridComponent from 'integralui-web/wrappers/react.integralui.treegrid.js';
import { IntegralUITheme } from 'integralui-web/components/integralui.enums.js';

import { iuiTreeGridContextMenuStyle } from './treegrid-context-menu.style.js';

class TreeGridContextMenu extends Component {

    //
    // Initialization / Destruction --------------------------------------------------------------
    //

    constructor(props){
        super(props);
    
        this.state = {
            columns: [
                { id: 1, headerText: "Header1", footerText: "Footer1", width: 200 },
                { id: 2, headerText: "Header2", footerText: "Footer2", width: 250 },
                { id: 3, headerText: "Header3", footerText: "Footer3", width: 120 }
            ],
            ctrlSize: { width: 800, height: 250 },
            currentResourcePath: '../../integralui-web/icons',
            currentTheme: IntegralUITheme.Office,
            isAnimationAllowed: true,
            rows: [
                { 
                    id: 1,
                    text: "Item1",
                    cells: [{ cid: 1, text: "Item11" }, { cid: 2, text: "Item12" }, { cid: 3, text: "Item13" }],
                    rows: [
                        { id: 11, pid: 1, text: "Item11", cells: [{ cid: 1, text: "Item111" }, { cid: 2, text: "Item112" }, { cid: 3, text: "Item113" }] }
                    ]
                },
                { id: 2, text: "Row2", cells: [{ cid: 1, text: "Item21" }, { cid: 2, text: "Item22" }, { cid: 3, text: "Item23" }] }
            ],
            selColumn: null,
            selRow: null
        }

        this.columnMenu = {
            items: [
                { id: 3, text: "Add Column" },
                { id: 4, text: "Insert Column Before" },
                { id: 5, text: "Insert Column After" },
                { id: 6, type: "separator" },
                { id: 7, text: "Remove Column" }
            ]
        }

        this.rowMenu = {
            items: [
                { id: 3, text: "Add Row" },
                { id: 4, text: "Insert Row Before" },
                { id: 5, text: "Insert Row After" },
                { id: 6, type: "separator" },
                { id: 7, text: "Remove Row" }
            ]
        }

        this.columnCount = 3;
        this.rowCount = 3;

        this.gridRef = React.createRef();
    }

    //
    // Methods -----------------------------------------------------------------------------------
    //

    //
    // Currently when using templates, the LitElement binding syntax is required
    // for properties, methods and events
    //
    currentHeaderTemplate = (column) => { 
        return html`
            <div>
                <iui-contextmenu
                    .customStyle=${iuiTreeGridContextMenuStyle}
                    .enabled=${true}
                    .settings=${this.columnMenu}
                    .theme=${this.state.currentTheme}
                    @menuClick="${(e) => this.columnMenuClick(e)}"
                    @menuOpening="${() => this.columnMenuOpening(column)}"
                >
                    <span>${column.headerText}</span>
                </iui-contextmenu>
            </div>
        `;
    };

    currentRowTemplate = (row, cell) => { 
        return html`
            <div style=${styleMap({ display: 'inline-block', padding: '2px 0 0 0' })}>
                <iui-contextmenu
                    .customStyle=${iuiTreeGridContextMenuStyle}
                    .enabled=${true}
                    .settings=${this.rowMenu}
                    .theme=${this.state.currentTheme}
                    @menuClick="${(e) => this.rowMenuClick(e)}"
                    @menuOpening="${() => this.rowMenuOpening(row)}"
                >
                    <span>${cell.text}</span>
                </iui-contextmenu>
            </div>
        `;
    };

    // Add Columns ----------------------------------------------------------------
                
    createNewColumn(){
        this.columnCount++;

        return { id: this.columnCount, headerText: "Header" + this.columnCount, footerText: "Footer" + this.columnCount };
    }

    // Add Rows ----------------------------------------------------------------
                
    createNewRow(){
        this.rowCount++;

        let newRow = {
            text: "Row" + this.rowCount,
            cells: []
        }

        for (let j = 1; j <= this.state.columns.length; j++){
            let colId = this.state.columns[j-1].id;

            newRow.cells.push({ cid: colId, text: "Item" + this.rowCount + colId });
        }

        return newRow;
    }

    // ContextMenu events ----------------------------------------------------------------

    columnMenuClick(e){
        if (e.detail.item){
            // Action depends on selected menu option
            switch (e.detail.item.id){
                case 3:
                    this.gridRef.current.addColumn(this.createNewColumn());
                    break;

                case 4:
                    this.gridRef.current.insertColumnBefore(this.createNewColumn(), this.state.selColumn);
                    break;

                case 5:
                    this.gridRef.current.insertColumnAfter(this.createNewColumn(), this.state.selColumn);
                    break;

                case 7:
                    this.gridRef.current.removeColumn(this.state.selColumn);
                    break;

                default:
                    break;
            }

            this.gridRef.current.updateLayout();
       }
    }

    columnMenuOpening(column){
        this.setState({ selColumn: column });
    }

    rowMenuClick(e){
        if (e.detail.item){
            // Action depends on selected menu option
            switch (e.detail.item.id){
                case 3:
                    this.gridRef.current.addRow(this.createNewRow(), this.state.selRow);
                    break;

                case 4:
                    this.gridRef.current.insertRowBefore(this.createNewRow(), this.state.selRow);
                    break;

                case 5:
                    this.gridRef.current.insertRowAfter(this.createNewRow(), this.state.selRow);
                    break;

                case 7:
                    this.gridRef.current.removeRow(this.state.selRow);
                    break;

                default:
                    break;
            }

            this.gridRef.current.updateLayout();
       }
    }
    
    rowMenuOpening(row){
        this.setState({ selRow: row });
    }

    // Update ------------------------------------------------------------------------------------

    render() {
        return (
            <div>
                <h2>TreeGrid / Context Menu</h2>
                <div className="sample-block" id="treegrid-contextmenu">
                    <IntegralUITreeGridComponent ref={this.gridRef}
                        allowAnimation={this.state.isAnimationAllowed} 
                        columns={this.state.columns} 
                        headerTemplate={this.currentHeaderTemplate}
                        resourcePath={this.state.currentResourcePath}
                        rows={this.state.rows} 
                        rowTemplate={this.currentRowTemplate}
                        selectedColumn={this.state.selColumn}
                        selectedRow={this.state.selRow}
                        size={this.state.ctrlSize}
                        theme={this.state.currentTheme}
                    ></IntegralUITreeGridComponent>
                    <div className="feature-help">
                        <p><span className="initial-space"></span>In this sample you can see how to add a <strong>ContextMenu</strong> to columns and rows in TreeGrid component. To open the context menu, right-click anywhere inside a coumn header or a row.</p>
                        <p><span className="initial-space"></span>The Context Menu for columns and rows is different, in general consists of these options:</p>
                        <ul className="feature-points">
                            <li><span className="code-name">Add</span> - adds a new column or row at the end</li>
                            <li><span className="code-name">Insert Before</span> - inserts a new column or row before selected one</li>
                            <li><span className="code-name">Insert After</span> - inserts a new column or row after selected one</li>
                            <li><span className="code-name">Remove</span> - deletes the selected column or row</li>
                        </ul>
                        <p><span className="initial-space"></span>You can also add a context menu to the column footer, but in this sample this is excluded.</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default TreeGridContextMenu;
