import React, { Component } from 'react';

import 'integralui-web/components/integralui.checkbox.js';
import IntegralUITreeGridComponent from 'integralui-web/wrappers/react.integralui.treegrid.js';
import { IntegralUIEditorType, IntegralUITheme } from 'integralui-web/components/integralui.enums.js';
import { iuiTreeGridHighlightRowsStyle } from './treegrid-highlight-rows.style.js';

class TreeGridHighlightRows extends Component {

    //
    // Initialization / Destruction --------------------------------------------------------------
    //

    constructor(props){
        super(props);
    
        this.state = {
            columns: [
                { id: 1, contentAlignment: 'center', editorType: IntegralUIEditorType.CheckBox, fixedWidth: true, width: 30 },
                { id: 2, headerText: "Continents/Countries", width: 250 },
                { 
                    id: 3, 
                    headerText: "Population", 
                    headerAlignment: "center", 
                    contentAlignment: "right", 
                    format: { 
                        options: { 
                            style: "decimal" 
                        }
                    }, 
                    width: 150
                },
                { 
                    id: 4, 
                    headerText: "Land in km2", 
                    headerAlignment: "center", 
                    contentAlignment: "right", 
                    format: { 
                        options: { 
                            style: "decimal" 
                        }
                    }, 
                    width: 120
                },
                { id: 5, headerText: "Capital", headerAlignment: "center", width: 150 }
            ],
            ctrlSize: { height: 400 },
            currentResourcePath: '../../../integralui-web/icons',
            currentTheme: IntegralUITheme.Office,
            isAnimationAllowed: true,
            rows: [
                { 
                    id: 1,
                    text: "Africa",
                    expanded: false,
                    cells: [{ cid: 1 }, { cid: 2, text: "Africa" }],
                    rows: [
                        { id: 11, pid: 1, text: "Egypt", cells: [{ cid: 1 }, { cid: 2, text: "Egypt" }, { cid: 3, value: 102334404 }, { cid: 4, value: 995450 }, { cid: 5, text: "Cairo" }] },
                        { id: 12, pid: 1, text: "Nigeria", cells: [{ cid: 1 }, { cid: 2, text: "Nigeria" }, { cid: 3, value: 206139589 }, { cid: 4, value: 910768 }, { cid: 5, text: "Abuja" }] },
                        { id: 13, pid: 1, text: "South Africa", cells: [{ cid: 1 }, { cid: 2, text: "South Africa" }, { cid: 3, value: 59308690 }, { cid: 4, value: 1214470 }, { cid: 5, text: "Cape Town" }] }
                    ]
                },
                { 
                    id: 2,
                    text: "Asia",
                    expanded: false,
                    cells: [{ cid: 1 }, { cid: 2, text: "Asia" }],
                    rows: [
                        { id: 21, pid: 2, text: "China", cells: [{ cid: 1 }, { cid: 2, text: "China" }, { cid: 3, value: 1439323776 }, { cid: 4, value: 9326410 }, { cid: 5, text: "Beijing" }] },
                        { id: 22, pid: 2, text: "India", cells: [{ cid: 1 }, { cid: 2, text: "India" }, { cid: 3, value: 1380004385 }, { cid: 4, value: 2973190 }, { cid: 5, text: "New Delhi" }] },
                        { id: 23, pid: 2, text: "Japan", cells: [{ cid: 1 }, { cid: 2, text: "Japan" }, { cid: 3, value: 126476461 }, { cid: 4, value: 364546 }, { cid: 5, text: "Tokyo" }] },
                        { id: 24, pid: 2, text: "Saudi Arabia", cells: [{ cid: 1 }, { cid: 2, text: "Saudi Arabia" }, { cid: 3, value: 34813871 }, { cid: 4, value: 2149690 }, { cid: 5, text: "Riyadh" }] },
                        { id: 25, pid: 2, text: "South Korea", cells: [{ cid: 1 }, { cid: 2, text: "South Korea" }, { cid: 3, value: 51269185 }, { cid: 4, value: 99909 }, { cid: 5, text: "Seoul" }] }
                    ]
                },
                { 
                    id: 3,
                    text: "Europe",
                    cells: [{ cid: 1 }, { cid: 2, text: "Europe" }],
                    rows: [
                        { id: 31, pid: 3, text: "France", cells: [{ cid: 1 }, { cid: 2, text: "France" }, { cid: 3, value: 65273511 }, { cid: 4, value: 640427 }, { cid: 5, text: "Paris" }] },
                        { id: 32, pid: 3, text: "Germany", cells: [{ cid: 1 }, { cid: 2, text: "Germany" }, { cid: 3, value: 83783942 }, { cid: 4, value: 348672 }, { cid: 5, text: "Berlin" }] },
                        { id: 33, pid: 3, text: "Italy", cells: [{ cid: 1 }, { cid: 2, text: "Italy" }, { cid: 3, value: 60461826 }, { cid: 4, value: 294140 }, { cid: 5, text: "Rome" }] },
                        { id: 34, pid: 3, text: "Poland", cells: [{ cid: 1 }, { cid: 2, text: "Poland" }, { cid: 3, value: 37846611 }, { cid: 4, value: 311888 }, { cid: 5, text: "Warsaw" }] },
                        { id: 35, pid: 3, text: "Sweden", cells: [{ cid: 1 }, { cid: 2, text: "Sweden" }, { cid: 3, value: 10099265 }, { cid: 4, value: 410335 }, { cid: 5, text: "Stockholm" }] }
                    ]
                },
                { 
                    id: 4,
                    text: "North America",
                    cells: [{ cid: 1 }, { cid: 2, text: "North America" }],
                    rows: [
                        { id: 41, pid: 4, text: "Canada", cells: [{ cid: 1 }, { cid: 2, text: "Canada" }, { cid: 3, value: 37742154 }, { cid: 4, value: 9093507 }, { cid: 5, text: "Ottawa" }] },
                        { id: 42, pid: 4, text: "Mexico", cells: [{ cid: 1 }, { cid: 2, text: "Mexico" }, { cid: 3, value: 128932753 }, { cid: 4, value: 1943945 }, { cid: 5, text: "Mexico City" }] },
                        { id: 43, pid: 4, text: "USA", cells: [{ cid: 1 }, { cid: 2, text: "USA" }, { cid: 3, value: 331002651 }, { cid: 4, value: 9147593 }, { cid: 5, text: "Washington" }] }
                    ]
                },
                { 
                    id: 5,
                    text: "South America",
                    cells: [{ cid: 1 }, { cid: 2, text: "South America" }],
                    rows: [
                        { id: 51, pid: 5, text: "Argentina", cells: [{ cid: 1 }, { cid: 2, text: "Argentina" }, { cid: 3, value: 45195774 }, { cid: 4, value: 2736690 }, { cid: 5, text: "Buenos Aires" }] },
                        { id: 52, pid: 5, text: "Brazil", cells: [{ cid: 1 }, { cid: 2, text: "Brazil" }, { cid: 3, value: 212559417 }, { cid: 4, value: 8460415 }, { cid: 5, text: "Brasília" }] },
                        { id: 53, pid: 5, text: "Chile", cells: [{ cid: 1 }, { cid: 2, text: "Chile" }, { cid: 3, value: 19116201 }, { cid: 4, value: 743812 }, { cid: 5, text: "Santiago" }] }
                    ]
                }
            ]
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
        // Only handle if the value changes for the cell with a checkbox
        if (e.detail.cell.cid === 1){
            this.highlightRow(e.detail.row, e.detail.value);
            this.gridRef.current.refresh();
        }
    }
        
    // A method that highlights a row when the checkbox value changes
    highlightRow(row, value){
        if (row){
            row.highlight = value;

            if (row.highlight)
                row.style = { background: '#61ba61', color: 'white', fontWeight: 'bold' }
            else
                row.style = null;
        }
    }

    // Update ------------------------------------------------------------------------------------

    render() {
        return (
            <div>
                <h2>TreeGrid / Highlight Rows on Demand</h2>
                <div className="sample-block" id="treegrid-highlight-rows">
                    <IntegralUITreeGridComponent ref={this.gridRef}
                        allowAnimation={this.state.isAnimationAllowed} 
                        allowFocus={false}
                        autoSizeColumns={true}
                        columns={this.state.columns} 
                        customStyle={iuiTreeGridHighlightRowsStyle}
                        expandColumnIndex={1}
                        resourcePath={this.state.currentResourcePath}
                        rowHeight={28}
                        rows={this.state.rows} 
                        showFooter={false}
                        size={this.state.ctrlSize}
                        theme={this.state.currentTheme}
                        cellDblClick={(e) => this.cellDoubleClicked(e)}
                        valueChanged={(e) => this.cellValueChanged(e)}
                    ></IntegralUITreeGridComponent>
                    <div className="feature-help">
                        <p><span className="initial-space"></span>This sample demonstrates how to select or highlight a row in TreeGrid component.</p>
                        <p><span className="initial-space"></span>When you click on a checkbox in specific row, it will become highlighted. To distinguish highlighted state of a row from a normal state, a custom style is applied to highlighted rows. In this example, all rows affected have a green background with white text color in bold.</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default TreeGridHighlightRows;
