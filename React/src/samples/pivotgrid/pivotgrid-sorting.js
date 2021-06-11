import React, { Component } from 'react';
import { html } from 'integralui-web/external/lit-element.js';

import IntegralUIPivotGridComponent from 'integralui-web/wrappers/react.integralui.pivotgrid.js';
import IntegralUISelectComponent from 'integralui-web/wrappers/react.integralui.select.js';
import { IntegralUISortOrder, IntegralUITheme } from 'integralui-web/components/integralui.enums.js';

import './pivotgrid-sorting.css';
import gridData from './pivotgrid-data.json';

class PivotGridSorting extends Component {

    //
    // Initialization / Destruction --------------------------------------------------------------
    //

    constructor(props){
        super(props);
    
        this.state = {
            columns: [ 
                 //{ name: 'Country', sorting: 'Descending', expanded2: false },
                 { name: "Year", sorting: 'Ascending', width: 150 }
            ],
            ctrlSize: { height: 500 },
            currentField: null,
            currentResourcePath: '../integralui-web/icons',
            currentSelectedColumn: null,
            currentSorting: null,
            currentTheme: IntegralUITheme.Office,
            fields: [
                { text: 'Category' },
                { text: 'Country' },
                { text: 'Year' }
            ],
            isAnimationAllowed: true,
            rows: [ 
                { name: 'Country', expanded: true, width: 175 },
                { name: 'Category' },
            ],
            sortList: [
                { text: 'None' },
                { text: 'Ascending' },
                { text: 'Descending' }
            ],
            values: [ 
                { name: "Quantity", contentAlignment: 'right', headerAlignment: 'center', formula: "SUM" }, 
                { name: "Cost", contentAlignment: 'right', headerAlignment: 'center', formula: "SUM" }
            ]
        }

        this.prevColumn = null;
        this.sortColumn = null;
        this.sorting = IntegralUISortOrder.None;

        this.gridRef = React.createRef();
    }

    //
    // Methods -----------------------------------------------------------------------------------
    //

    // Events ------------------------------------------------------------------------------------

    fieldChanged(e){
        if (e.detail.item)
            this.setState({ 
                currentSorting: this.getSorting(e.detail.item.text),
                currentField: e.detail.item, 
            });
    }

    getObjectFromFieldName(list, name){
        let found = list.filter(obj => obj.name === name);
        return found.length > 0 ? found[0] : null;
    }

    getExistingSortOrder(list, name){
        let obj = this.getObjectFromFieldName(list, name);
        return obj && obj.sorting !== undefined ? obj.sorting : null;
    }

    // if sorting already has been set, get it from columns or rows using the field name
    getSorting(name){
        let sortOrder = this.getExistingSortOrder(this.state.columns, name);
        if (!sortOrder)
            sortOrder = this.getExistingSortOrder(this.state.rows, name) || 'None';
       
        let found = this.state.sortList.filter(obj => obj.text === sortOrder);


        return found.length > 0 ? found[0] : this.state.sortList[0];
    }

    onColumnClick(e){
        if (e.detail.column){
            if (this.prevColumn && e.detail.column.id !== this.prevColumn.id){
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

            this.gridRef.current.sort(e.detail.column, this.sorting);
        }
    }

    sortingChanged(e){
        if (e.detail.item){
            if (this.state.currentField){
                let obj = this.getObjectFromFieldName(this.state.columns, this.state.currentField.text);
                if (!obj)
                    obj = this.getObjectFromFieldName(this.state.rows, this.state.currentField.text);

                if (obj)
                    obj.sorting = e.detail.item.text;
            }

            // Clear the sort mark if sorting is enabled from columns by header click
            this.sortColumn = this.prevColumn = null;
            this.gridRef.current.sort(null, IntegralUISortOrder.None);

            // Update the sort order Select component
            this.setState({ currentSorting: e.detail.item });
        }
    }

    // Templates ---------------------------------------------------------------------------------

    //
    // Currently when using templates, the LitElement binding syntax is required
    // for properties, methods and events
    //
    currentRowCellTemplate = (row, cell) => { 
        return cell.value === 0 ? html`` : null;
    };

    // Update ------------------------------------------------------------------------------------

    render(){
        return (
            <div>
                <h2>PivotGrid / Sorting</h2>
                <div className="sample-block-pgrd-sort" id="pivotgrid-sorting">
                    <IntegralUIPivotGridComponent ref={this.gridRef}
                        allowAnimation={this.state.isAnimationAllowed} 
                        columns={this.state.columns} 
                        data={gridData} 
                        resourcePath={this.state.currentResourcePath}
                        rowHeight={22}
                        rows={this.state.rows} 
                        rowTemplate={this.currentRowCellTemplate}
                        selectedColumn={this.state.currentSelectedColumn} 
                        showFooter={false}
                        size={this.state.ctrlSize}
                        theme={this.state.currentTheme}
                        values={this.state.values} 
                        columnClick={(e) => this.onColumnClick(e)}
                    ></IntegralUIPivotGridComponent>
                    <div className="sbp-pgrd-sort">
                        <label>Field</label>
                        <IntegralUISelectComponent
                            allowAnimation={this.state.isAnimationAllowed} 
                            items={this.state.fields}
                            resourcePath={this.state.currentResourcePath}
                            selectedItem={this.state.currentField}
                            theme={this.state.currentTheme} 
                            selectionChanged={(e) => this.fieldChanged(e)}
                        > 
                        </IntegralUISelectComponent>
                        <label>Sort order</label>
                        <IntegralUISelectComponent
                            allowAnimation={this.state.isAnimationAllowed} 
                            items={this.state.sortList}
                            resourcePath={this.state.currentResourcePath}
                            selectedItem={this.state.currentSorting}
                            theme={this.state.currentTheme} 
                            selectionChanged={(e) => this.sortingChanged(e)}
                        > 
                        </IntegralUISelectComponent>
                    </div>
                    <div className="feature-help">
                        <p><span className="initial-space"></span>This sample demonstrates sorting in PivotGrid per field or column.</p>
                        <p><span className="initial-space"></span>You can sort the grid data per each field in ascending or descending order, separately. In addition, when column is clicked the grid data is sorted per column values.</p>
                        <p><span className="initial-space"></span>PivotGrid includes built-in sorting methods for string and numeric values, but you can also add your own custom sort functionality.</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default PivotGridSorting;
