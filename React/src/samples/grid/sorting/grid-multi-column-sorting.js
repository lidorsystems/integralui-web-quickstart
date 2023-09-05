import React, { Component } from 'react';

import IntegralUIGridComponent from 'integralui-web/wrappers/react.integralui.grid.js';
import { IntegralUISortMode, IntegralUISortOrder, IntegralUITheme } from 'integralui-web/components/integralui.enums.js';

class GridMultiColumnSorting extends Component {

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
            currentResourcePath: '../../integralui-web/icons',
            currentSelectedColumn: null,
            currentSortMode: IntegralUISortMode.Multiple,
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
                { id: 41, pid: 4, text: "Canada", cells: [{ cid: 2, text: "Canada" }, { cid: 3, value: 35702707 }, { cid: 4, value: new Date(2015, 0, 1) }, { cid: 6, value: 9093507 }, { cid: 7, text: "Ottawa" }] },
                { id: 42, pid: 4, text: "Mexico", cells: [{ cid: 2, text: "Mexico" }, { cid: 3, value: 121005815 }, { cid: 4, value: new Date(2015, 6, 1) }, { cid: 6, value: 1943945 }, { cid: 7, text: "Mexico City" }] },
                { id: 43, pid: 4, text: "USA", cells: [{ cid: 2, text: "USA" }, { cid: 3, value: 320651000 }, { cid: 4, value: new Date(2015, 3, 7) }, { cid: 6, value: 9161966 }, { cid: 7, text: "Washington" }] },
                { id: 51, pid: 5, text: "Argentina", cells: [{ cid: 2, text: "Argentina" }, { cid: 3, value: 43131966 }, { cid: 4, value: new Date(2015, 6, 1) }, { cid: 6, value: 2736690 }, { cid: 7, text: "Buenos Aires" }] },
                { id: 52, pid: 5, text: "Brazil", cells: [{ cid: 2, text: "Brazil" }, { cid: 3, value: 204134000 }, { cid: 4, value: new Date(2015, 3, 8) }, { cid: 6, value: 8460415 }, { cid: 7, text: "Brasília" }] }
            ]
        }

        this.sortColumn = null;
        this.sorting = IntegralUISortOrder.None;
  
        this.gridRef = React.createRef();
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

    onColumnSortClick(e){
        let currentColumn = e.detail.column;
        
        if (currentColumn && currentColumn.id === 4){
            e.detail.cancel = true;

            this.sortColumn = currentColumn;
            this.sorting = e.detail.sorting;

            currentColumn.comparer = this.comparer;
            this.gridRef.current.sort(currentColumn, e.detail.sorting);
        }
    }

    // Update ------------------------------------------------------------------------------------

    render() {
        return (
            <div>
                <h2>Grid / Multi Column Sorting</h2>
                <div className="sample-block" id="grid-multi-column-sorting">
                    <IntegralUIGridComponent ref={this.gridRef}
                        allowAnimation={this.state.isAnimationAllowed} 
                        columns={this.state.columns} 
                        resourcePath={this.state.currentResourcePath}
                        rows={this.state.rows} 
                        selectedColumn={this.state.currentSelectedColumn} 
                        showFooter={false}
                        size={this.state.ctrlSize}
                        sortMode={this.state.currentSortMode} 
                        theme={this.state.currentTheme}
                        columnSortClick={(e) => this.onColumnSortClick(e)}
                    ></IntegralUIGridComponent>
                    <div className="feature-help">
                        <p><span className="initial-space"></span>This sample demonstrates sorting by multiple columns in the Grid component. Each column have the following options:</p>
                        <ul className="feature-points">
                            <li><span className="code-name">allowSort</span> - true or undefined if column is sortable and false if not, by default is sortable</li>
                            <li><span className="code-name">comparer</span> - specifies a custom function used for sorting</li>
                            <li><span className="code-name">sorting</span> - specifies the column's sort order: Ascending, Descending or None</li>
                        </ul>
                        <p><span className="initial-space"></span>If column is sortable a sort button will appear in column header on right side. Depending on column's sort order, the button icon will change accordingly. To reset the column's sorting, click on sort button and change the sort order to None (up/down icons appear together).</p>
                        <p><span className="initial-space"></span>Whenever the sort button is clicked, the <span className="code-name">columnSortClick</span> event is fired. This event allows you to cancel the default sorting operations and specify your own comparer function and sorting order for clicked column.</p><br/>
                        <p><span className="initial-space"></span>When sorting is done by multiple columns, the order of sorting columns determines the result, starting from first sorting column to the last. To change the result, rearrange the order of sorting columns. For example:</p>
                        <ol className="feature-points">
                            <li>At first sort by 'Continents/Countries' column by clicking on sort button and set the order to Ascending (up arrow)</li>
                            <li>Then sort by 'Date' column by setting the sort order to Descending, down arrow</li>
                            <li>The Grid data is sorted first by: 'Continents/Countries' then by 'Date'</li>
                            <li>Reset the sorting by clicking on up arrow for 'Continents/Countries' column, this will remove column from sorting, the sort button icon will change to up/down arrow.</li>
                            <li>Click again on  up arrow for 'Continents/Countries' column, to set the sort order to Asecnding</li>
                            <li>The Grid data is now sorted by 'Date' and then by 'Continents/Countries'.</li>
                        </ol>
                    </div>
                </div>
            </div>
        );
    }
}

export default GridMultiColumnSorting;
