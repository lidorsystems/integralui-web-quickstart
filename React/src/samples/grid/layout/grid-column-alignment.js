import React, { Component } from 'react';
import { html } from 'integralui-web/external/lit-element.js';

import IntegralUICommonService from 'integralui-web/services/integralui.common.service.js';
import IntegralUIGridComponent from 'integralui-web/wrappers/react.integralui.grid.js';
import IntegralUIRadioButtonComponent from 'integralui-web/wrappers/react.integralui.radiobutton.js';
import IntegralUIRadioGroupComponent from 'integralui-web/wrappers/react.integralui.radiogroup.js';
import IntegralUISelectComponent from 'integralui-web/wrappers/react.integralui.select.js';
import { IntegralUITheme } from 'integralui-web/components/integralui.enums.js';
import gridData from './grid-column-alignment-data.json';

import './grid-column-alignment.css';

class GridColumnAlignment extends Component {

    //
    // Initialization / Destruction --------------------------------------------------------------
    //

    constructor(props){
        super(props);

        this._commonService = new IntegralUICommonService();

        this.state = {
            columns: [
                { id: 1, headerText: "Order ID", headerAlignment: "center", contentAlignment: "center" },
                { id: 2, headerText: "Customer", width: 200 },
                { id: 4, headerText: "Ship Date", headerAlignment: "center", contentAlignment: "center", width: 120 },
                { id: 5, headerText: "Quantity", headerAlignment: "center", contentAlignment: "right", width: 80 },
                { 
                    id: 6, 
                    headerText: "Price", 
                    headerAlignment: "center", 
                    contentAlignment: "right", 
                    footerText: "Total", 
                    footerAlignment: "right",
                    format: { 
                        options: { 
                            style: "currency", 
                            currency: "USD"
                        }
                    },
                    width: 90
                },
                { 
                    id: 7, 
                    headerText: "Total", 
                    headerAlignment: "center", 
                    contentAlignment: "right",
                    footerValue: 0, 
                    footerAlignment: "right",
                    format: { 
                        options: { 
                            style: "currency", 
                            currency: "USD"
                        }
                    },
                    width: 120
                }
            ],
            ctrlSize: { height: 400 },
            currentResourcePath: '../../../integralui-web/icons',
            currentSelectedColumn: null,
            currentTheme: IntegralUITheme.Office,
            contentAlignmentIndex: -1,
            footerAlignmentIndex: -1,
            headerAlignmentIndex: -1,
            isAnimationAllowed: true,
            rows: [],
            selectOptions: []
        }
    
        this.alignmentValues = ['left', 'center', 'right'];

        this.gridRef = React.createRef();
    }

    componentDidMount(){
        let columnList = [];

        // Create a dropdown list from all columns
        this.state.columns.forEach(column => {
            let item = { 
                id: column.id, 
                text: column.headerText
            }

            columnList.push(item);
        });
        
        this.setState({ selectOptions: columnList });

        // Load rows from JSON file
        this.gridRef.current.loadData(this.convertJSONData(gridData), null, null, false);

        // Update Total Value based on Quantity and Prices
        this.updateTotalValue();
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

                // Delete all fields that will be included in cells, except for the field 'Title'
                delete row[field];

                let cell = {
                    cid: column.id,
                    colName: field
                }

                if (obj[field] !== undefined){
                    if (this._commonService.isString(obj[field]))
                        cell.text = obj[field];
                    else
                        cell.value = obj[field];
                }
                else if (column.id === 7) // Total Column
                    cell.value = obj["Quantity"] * obj["Price"];

                row.cells.push(cell);
            });

            // If there are child rows, convert the JSON data for them
            row.rows = this.convertJSONData(obj.rows || []);

            result.push(row);
        });

        return result;
    }

    // Events ------------------------------------------------------------------------------------

    onHeaderAlignmentChecked(e){
        let selColumn = this.state.currentSelectedColumn;
        if (selColumn){
            selColumn.headerAlignment = this.getAlignmentValue(e.detail.index);
            this.setState({ currentSelectedColumn: selColumn });
        }
    }

    onContentAlignmentChecked(e){
        let selColumn = this.state.currentSelectedColumn;
        if (selColumn){
            selColumn.contentAlignment = this.getAlignmentValue(e.detail.index);
            this.setState({ currentSelectedColumn: selColumn });
            
            this.gridRef.current.updateView();
        }
   }

    onFooterAlignmentChecked(e){
        let selColumn = this.state.currentSelectedColumn;
        if (selColumn){
            selColumn.footerAlignment = this.getAlignmentValue(e.detail.index);
            this.setState({ currentSelectedColumn: selColumn });
        }
    }

    onColumnSelectionChanged(e){
        if (e.detail.item){
            let column = this.gridRef.current.getColumnById(e.detail.item.id);

            this.setState({ 
                currentSelectedColumn: column,
                contentAlignmentIndex: this.getIndexFromAlignment(column.contentAlignment),
                footerAlignmentIndex: this.getIndexFromAlignment(column.footerAlignment),
                headerAlignmentIndex: this.getIndexFromAlignment(column.headerAlignment)
            });
        }
    } 

    // General -----------------------------------------------------------------------------------

    getAlignmentValue(index){
        return index >= 0 ? this.alignmentValues[index] : 'left';
    }

    getCellById(row, id){
        let filtered = row.cells.filter(cell => cell.cid === id);

        return filtered.length > 0 ? filtered[0] : null;
    }

    getIndexFromAlignment(value){
        return value ? this.alignmentValues.indexOf(value) : 0;
    }

    updateTotalValue(){
        let sumTotal = 0;

        this.state.rows.forEach(row => {
            let quantityCell = this.getCellById(row, 5);
            let priceCell = this.getCellById(row, 6);
            let totalCell = this.getCellById(row, 7);

            let total = quantityCell.value * priceCell.value
            totalCell.value = total;

            sumTotal += total;
        });

        // Show Total value in the footer
        let column = this.gridRef.current.getColumnById(7);
        if (column)
            column.footerValue = sumTotal;
    }

    // Templates ---------------------------------------------------------------------------------

    currentFooterTemplate = (column) => { 
        switch (column.id){
            case 6: // Total description
                return html`<strong>${column.footerText}</strong>`;

            case 7: // Total value
                return html`<strong>${this.getFooterDisplayValue(column)}</strong>`;
        }
    };

    
    getFooterDisplayValue(column){
        return this._commonService.convertValue(column.footerValue, column.format);
    }

    // Update ------------------------------------------------------------------------------------

    render() {
        return (
            <div>
                <h2>Grid / Cells in Different Colors</h2>
                <div className="sample-block" id="grid-column-alignment">
                    <IntegralUIGridComponent ref={this.gridRef}
                        allowAnimation={this.state.isAnimationAllowed} 
                        allowFocus={false}
                        columns={this.state.columns} 
                        footerTemplate={this.currentFooterTemplate}
                        resourcePath={this.state.currentResourcePath}
                        rowHeight={24}
                        rows={this.state.rows} 
                        selectedColumn={this.state.currentSelectedColumn}
                        size={this.state.ctrlSize}
                        theme={this.state.currentTheme}
                    ></IntegralUIGridComponent>
                    <div className="sample-block-column-alignment">
                        <label>Selected Column: </label>
                        <IntegralUISelectComponent allowAnimation={true} items={this.state.selectOptions} maxDropDownItems={5} theme={this.state.currentTheme} afterSelect={(e) => this.onColumnSelectionChanged(e)}></IntegralUISelectComponent>
                        <label>Header alignment: </label>
                        <IntegralUIRadioGroupComponent id="header-alignment" selectedIndex={this.state.headerAlignmentIndex} theme={this.state.currentTheme} buttonChecked={(e) => this.onHeaderAlignmentChecked(e)}>
                            <IntegralUIRadioButtonComponent>Left</IntegralUIRadioButtonComponent>
                            <IntegralUIRadioButtonComponent>Center</IntegralUIRadioButtonComponent>
                            <IntegralUIRadioButtonComponent>Right</IntegralUIRadioButtonComponent>
                        </IntegralUIRadioGroupComponent>
                        <label>Content alignment: </label>
                        <IntegralUIRadioGroupComponent id="content-alignment" selectedIndex={this.state.contentAlignmentIndex} theme={this.state.currentTheme} buttonChecked={(e) => this.onContentAlignmentChecked(e)}>
                            <IntegralUIRadioButtonComponent>Left</IntegralUIRadioButtonComponent>
                            <IntegralUIRadioButtonComponent>Center</IntegralUIRadioButtonComponent>
                            <IntegralUIRadioButtonComponent>Right</IntegralUIRadioButtonComponent>
                        </IntegralUIRadioGroupComponent>
                        <label>Footer alignment: </label>
                        <IntegralUIRadioGroupComponent id="footer-alignment" selectedIndex={this.state.footerAlignmentIndex} theme={this.state.currentTheme} buttonChecked={(e) => this.onFooterAlignmentChecked(e)}>
                            <IntegralUIRadioButtonComponent>Left</IntegralUIRadioButtonComponent>
                            <IntegralUIRadioButtonComponent>Center</IntegralUIRadioButtonComponent>
                            <IntegralUIRadioButtonComponent>Right</IntegralUIRadioButtonComponent>
                        </IntegralUIRadioGroupComponent>
                    </div>
                    <div className="feature-help">
                        <p><span className="initial-space"></span>A demonstration on how to change alignment of column header, content and footer in Grid component. By clicking on radio-buttons on right panel, you can change the alignment of each cell for currently selected column. By default column's content is aligned to the left.</p>
                        <p><span className="initial-space"></span>Each column object has three fields which allows you to horizontally align the content of cells that belong to specified column.</p>
                        <ul className="feature-points">
                            <li><span style={{ color: '#c60d0d' }}>headerAlignment</span> - aligns the content of column header</li>
                            <li><span style={{ color: '#c60d0d' }}>contentAlignment</span> - aligns the content of column body</li>
                            <li><span style={{ color: '#c60d0d' }}>footerAlignment</span> - aligns the content of column footer</li>
                        </ul>
                        <p><span className="initial-space"></span>In case of footer, in this example it makes sense to show some data only in the footer for 'Total' column, showing the sumary from all current records. Regardless, each column has its own separate footer with its own alignment.</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default GridColumnAlignment;
