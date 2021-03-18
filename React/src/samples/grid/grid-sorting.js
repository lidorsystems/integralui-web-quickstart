import React, { Component } from 'react';

import IntegralUIGridComponent from 'integralui-web/wrappers/react.integralui.grid.js';
import { IntegralUISortOrder, IntegralUITheme } from 'integralui-web/components/integralui.enums.js';

class GridSorting extends Component {

    //
    // Initialization / Destruction --------------------------------------------------------------
    //

    constructor(props){
        super(props);
    
        this.state = {
            columns: [
                { id: 2, headerText: "Continents / Countries", width: 220 },
                { 
                    id: 3, 
                    headerText: "Population", 
                    format: { options: { style: 'decimal' } }, 
                    headerAlignment: "center", 
                    contentAlignment: "right", width: 125
                },
                { 
                    id: 4, 
                    headerText: "Date", 
                    format: { options: { year: 'numeric', month: 'short', day: '2-digit' } }, 
                    headerAlignment: "center", 
                    contentAlignment: "center", 
                    width: 140
                },
                { 
                    id: 6, 
                    headerText: "Land in km2", 
                    format: { options: { style: 'unit', unit: 'kilometer', unitDisplay: 'short' } }, 
                    headerAlignment: "center", 
                    contentAlignment: "right", 
                    width: 120
                },
                { id: 7, headerText: "Capital", headerAlignment: "center", width: 120 }
            ],
            ctrlSize: { width: 800, height: 400 },
            currentResourcePath: '../integralui-web/icons',
            currentSelectedColumn: null,
            currentTheme: IntegralUITheme.Office,
            isAnimationAllowed: true,
            rows: [
                { id: 11, pid: 1, text: "Egypt", cells: [{ cid: 2, text: "Egypt" }, { cid: 3, value: 88311000 }, { cid: 4, value: new Date(2015, 3, 6) }, { cid: 6, value: 995450 }, { cid: 7, text: "Cairo" }] },
                { id: 12, pid: 1, text: "Nigeria", cells: [{ cid: 2, text: "Nigeria" }, { cid: 3, value: 185043000 }, { cid: 4, value: new Date(2015, 6, 1) }, { cid: 6, value: 910768 }, { cid: 7, text: "Abuja" }] },
                { id: 13, pid: 1, text: "South Africa", cells: [{ cid: 2, text: "South Africa" }, { cid: 3, value: 54002000 }, { cid: 4, value: new Date(2014, 6, 1) }, { cid: 6, value: 1214470 }, { cid: 7, text: "Pretoria" }] },
                { id: 21, pid: 2, text: "China", cells: [{ cid: 2, text: "China" }, { cid: 3, value: 1369140000 }, { cid: 4, value: new Date(2015, 3, 6) }, { cid: 6, value: 9326410 }, { cid: 7, text: "Beijing" }] },
                { id: 22, pid: 2, text: "India", cells: [{ cid: 2, text: "India" }, { cid: 3, value: 1269545000 }, { cid: 4, value: new Date(2015, 6, 1) }, { cid: 6, value: 2864021 }, { cid: 7, text: "New Delhi" }] },
                { id: 23, pid: 2, text: "Japan", cells: [{ cid: 2, text: "Japan" }, { cid: 3, value: 126910000 }, { cid: 4, value: new Date(2015, 2, 1) }, { cid: 6, value: 364485 }, { cid: 7, text: "Tokyo" }] },
                { id: 24, pid: 2, text: "Saudi Arabia", cells: [{ cid: 2, text: "Saudi Arabia" }, { cid: 3, value: 31521418 }, { cid: 4, value: new Date(2015, 6, 1) }, { cid: 6, value: 2149690 }, { cid: 7, text: "Riyadh" }] },
                { id: 25, pid: 2, text: "South Korea", cells: [{ cid: 2, text: "South Korea" }, { cid: 3, value: 51342881 }, { cid: 4, value: new Date(2015, 0, 1) }, { cid: 6, value: 100032 }, { cid: 7, text: "Seoul" }] },
                { id: 31, pid: 3, text: "France", cells: [{ cid: 2, text: "France" }, { cid: 3, value: 66109000 }, { cid: 4, value: new Date(2015, 2, 1) }, { cid: 6, value: 640427 }, { cid: 7, text: "Paris" }] },
                { id: 32, pid: 3, text: "Germany", cells: [{ cid: 2, text: "Germany" }, { cid: 3, value: 80925000 }, { cid: 4, value: new Date(2014, 5, 30) }, { cid: 6, value: 348672 }, { cid: 7, text: "Berlin" }] },
                { id: 33, pid: 3, text: "Italy", cells: [{ cid: 2, text: "Italy" }, { cid: 3, value: 60788845 }, { cid: 4, value: new Date(2014, 10, 30) }, { cid: 6, value: 294140 }, { cid: 7, text: "Rome" }] },
                { id: 34, pid: 3, text: "Macedonia", cells: [{ cid: 2, text: "Macedonia" }, { cid: 3, value: 2065769 }, { cid: 4, value: new Date(2013, 11, 31) }, { cid: 6, value: 25433}, { cid: 7, text: "Skopje" }] },
                { id: 41, pid: 4, text: "Canada", cells: [{ cid: 2, text: "Canada" }, { cid: 3, value: 35702707 }, { cid: 4, value: new Date(2015, 0, 1) }, { cid: 6, value: 9093507 }, { cid: 7, text: "Ottawa" }] },
                { id: 42, pid: 4, text: "Mexico", cells: [{ cid: 2, text: "Mexico" }, { cid: 3, value: 121005815 }, { cid: 4, value: new Date(2015, 6, 1) }, { cid: 6, value: 1943945 }, { cid: 7, text: "Mexico City" }] },
                { id: 43, pid: 4, text: "USA", cells: [{ cid: 2, text: "USA" }, { cid: 3, value: 320651000 }, { cid: 4, value: new Date(2015, 3, 7) }, { cid: 6, value: 9161966 }, { cid: 7, text: "Washington" }] },
                { id: 51, pid: 5, text: "Argentina", cells: [{ cid: 2, text: "Argentina" }, { cid: 3, value: 43131966 }, { cid: 4, value: new Date(2015, 6, 1) }, { cid: 6, value: 2736690 }, { cid: 7, text: "Buenos Aires" }] },
                { id: 52, pid: 5, text: "Brazil", cells: [{ cid: 2, text: "Brazil" }, { cid: 3, value: 204134000 }, { cid: 4, value: new Date(2015, 3, 8) }, { cid: 6, value: 8460415 }, { cid: 7, text: "Brasília" }] }
            ]
        }

        this.prevColumn = null;
        this.sortColumn = null;
        this.sorting = IntegralUISortOrder.None;
    
        this.gridRef = React.createRef();
    }

    componentDidMount(){
        this.sortColumn = this.state.columns[0];
        
        this.sorting = IntegralUISortOrder.Ascending;
        this.gridRef.current.sort(this.sortColumn, this.sorting);

        this.prevColumn = this.sortColumn;

        this.setState({ currentSelectedColumn: this.sortColumn });
    }

    //
    // Methods -----------------------------------------------------------------------------------
    //
    
    getCellValue(row){
        let cellValue = null;

        if (this.sortColumn && row.cells){
            for (let j = 0; j < row.cells.length; j++){
                if (row.cells[j].cid === this.sortColumn.id){
                    cellValue = row.cells[j].value;
                    break;
                }
            }
        }

        return cellValue;
    }

    comparer = (firstRow, secondRow) => {
        let x = this.getCellValue(firstRow);
        let y = this.getCellValue(secondRow);

        x = x ? x.valueOf() : null;
        y = y ? y.valueOf() : null;

        switch (this.sorting){
            case IntegralUISortOrder.Ascending:
                if (x < y)
                    return -1;
                else if (x > y)
                    return 1;
                break;

            case IntegralUISortOrder.Descending:
                if (x > y)
                    return -1;
                else if (x < y)
                    return 1;
                break;

            // no default
        }

        return 0;
    }

    // Events ------------------------------------------------------------------------------------

    onColumnClick(e){
        if (e.detail.column){
            if (e.detail.column !== this.prevColumn){
                if (this.sorting === IntegralUISortOrder.None)
                    this.sorting = IntegralUISortOrder.Ascending;
            }
            else {
                if (this.sorting === IntegralUISortOrder.Ascending)
                    this.sorting = IntegralUISortOrder.Descending;
                else
                    this.sorting = IntegralUISortOrder.Ascending;
            }

            this.sortColumn = e.detail.column;
            this.prevColumn = e.detail.column;

            if (e.detail.column.id === 4)
                this.gridRef.current.sort(e.detail.column, this.sorting, this.comparer);
            else
                this.gridRef.current.sort(e.detail.column, this.sorting);
        }
    }


    // Update ------------------------------------------------------------------------------------

    render() {
        return (
            <div>
                <h2>Grid / Sorting</h2>
                <div className="sample-block" id="grid-sorting">
                    <IntegralUIGridComponent ref={this.gridRef}
                        allowAnimation={this.state.isAnimationAllowed} 
                        columns={this.state.columns} 
                        resourcePath={this.state.currentResourcePath}
                        rows={this.state.rows} 
                        selectedColumn={this.state.currentSelectedColumn} 
                        showFooter={false}
                        size={this.state.ctrlSize}
                        theme={this.state.currentTheme}
                        columnClick={(e) => this.onColumnClick(e)}
                    ></IntegralUIGridComponent>
                    <div className="feature-help">
                        <p><span className="initial-space"></span>This sample demonstrates basic and custom sorting operations in the Grid component.</p>
                        <p><span className="initial-space"></span>If column cells contain a String or a Number as their value, a basic sorting is executed, using built-in sort operations, for which you only need to specify by which column rows will be sorted and the sort order.</p>
                        <p><span className="initial-space"></span>For columns which cells contains custom values, a <span className="code-name">comparer</span> function is required. In case of this example, 3rd column contains date values, and a custom comparer function is created and applied to the Grid.</p>
                        <p>The following properties and methods are presented:</p>
                        <ul className="feature-points">
                            <li><span className="code-name">sorting</span> a property which determines the sort order</li>
                            <li><span className="code-name">sort</span> a method which sorts the Grid rows based on applied order for specified column</li>
                        </ul>
                        <p><span className="initial-space"></span>In addition, some of columns use data formatting, for numbers to appear with commas, dates in standard format and metrics for column 'Land in km2'. All data formatting comes with standard settings, which you can easily change.</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default GridSorting;
