import React, { Component } from 'react';
import { html } from 'integralui-web/external/lit-element.js';

import IntegralUIButtonComponent from 'integralui-web/wrappers/react.integralui.button.js';
import IntegralUIPivotGridComponent from 'integralui-web/wrappers/react.integralui.pivotgrid.js';
import IntegralUISelectComponent from 'integralui-web/wrappers/react.integralui.select.js';
import { IntegralUITheme } from 'integralui-web/components/integralui.enums.js';

import './pivotgrid-value-filters.css';
import gridData from './pivotgrid-data.json';

class PivotGridValueFilters extends Component {

    //
    // Initialization / Destruction --------------------------------------------------------------
    //

    constructor(props){
        super(props);

        this.state = {
            columns: [ 
                { 
                    name: "Year", 
                    contentAlignment: 'right', 
                    footerAlignment: 'right', 
                    format: {
                        options: { 
                            style: 'decimal'
                        }
                    },
                    headerAlignment: 'center', 
                    sorting: 'Ascending',
                    width: 110
                }
            ],
            conditions: [
                { text: 'none' },
                { text: 'equals' },
                { text: 'greater than' },
                { text: 'greater than or equal to' },
                { text: 'less than' },
                { text: 'less than or equal to' },
                { text: 'does not equal' }
            ],
            ctrlSize: { height: 500 },
            currentCondition: null,
            currentField: null,
            currentMeasure: null,
            currentResourcePath: '../integralui-web/icons',
            currentTheme: IntegralUITheme.Office,
            currentValue: 0,
            fields: [
                { text: 'Category' },
                { text: 'Country' }
            ],
            filters: [],
            isAnimationAllowed: true,
            items: [],
            measures: [
                { text: 'Quantity' },
                { text: 'Cost' }
            ],
            rows: [ 
                { name: 'Country', expanded: true, width: 175 },
                { name: 'Category' }
            ],
            values: [ 
                { 
                    name: "Quantity", 
                    contentAlignment: 'right', 
                    footerAlignment: 'right', 
                    format: {
                        options: { 
                            style: 'decimal'
                        }
                    },
                    formula: "SUM",
                    headerAlignment: 'center'
                },
                { 
                    name: "Cost", 
                    contentAlignment: 'right', 
                    footerAlignment: 'right', 
                    format: {
                        options: { 
                            style: 'currency',
                            currency: 'USD',
                            minimumFractionDigits: 2,
                            maximumFractionDigits: 2
                        }
                    },
                    formula: "SUM", 
                    headerAlignment: 'center', 
                    width: 120
                }
            ]
        }

        this.filterValues = {
            Category: {
                Quantity: { condition: null, value: 0 },
                Cost: { condition: null, value: 0 },
            },
            Country: {
                Quantity: { condition: null, value: 0 },
                Cost: { condition: null, value: 0 },
            }
        }

        this.gridRef = React.createRef();
    }

    //
    // Methods -----------------------------------------------------------------------------------
    //

    // General -----------------------------------------------------------------------------------

    getOperation(option){
        let index = this.state.conditions.indexOf(option);

        switch (index){
            case 1: //equals
                return '=';

            case 2: //greater than
                return '>';

            case 3: //greater than or equal to
                return '>=';

            case 4: //less than
                return '<';

            case 5: //less than or equal to
                return '<=';

            case 6: //does not equal
                return '!=';
            
            default:
                return '';
        }
    }

    // Events ------------------------------------------------------------------------------------

    applyFilter(){
        if (this.state.currentField && this.state.currentMeasure){
            let currentFilters = [...this.state.filters];

            let currentOperation = this.getOperation(this.state.currentCondition);
            let filtered = currentFilters.filter(obj => obj.name === this.state.currentField.text && obj.measure === this.state.currentMeasure.text);

            if (currentOperation !== ''){
                if (filtered.length > 0){
                    filtered[0].conditions.value = this.state.currentValue;
                    filtered[0].conditions.operation = currentOperation;
                    filtered[0].conditions.negative = this.state.conditions.indexOf(this.state.currentCondition) > 5 ? true : false;
                }
                else 
                    currentFilters.push({ 
                        name: this.state.currentField.text,
                        measure: this.state.currentMeasure.text,
                        caseSensitive: false,
                        conditions: { value: this.state.currentValue, operation: currentOperation, negative: false }
                    });
            }
            else if (filtered.length > 0)
                currentFilters.splice(currentFilters.indexOf(filtered[0]), 1);

            this.setState({ filters: currentFilters });
        }
    }

    conditionChanged(e){
        if (e.detail.item){
            if (this.state.currentField && this.state.currentMeasure)
                this.filterValues[this.state.currentField.text][this.state.currentMeasure.text].condition = e.detail.item;

            this.setState({ currentCondition: e.detail.item });
        }
    }

    fieldChanged(e){
        if (e.detail.item)
            this.setState({ 
                currentCondition: this.state.currentMeasure ? this.filterValues[e.detail.item.text][this.state.currentMeasure.text].condition : null,
                currentField: e.detail.item, 
                currentValue: this.state.currentMeasure ? this.filterValues[e.detail.item.text][this.state.currentMeasure.text].value : 0
            });
    }

    measureChanged(e){
        if (e.detail.item)
            this.setState({ 
                currentCondition: this.state.currentField ? this.filterValues[this.state.currentField.text][e.detail.item.text].condition : null,
                currentMeasure: e.detail.item, 
                currentValue: this.state.currentField ? this.filterValues[this.state.currentField.text][e.detail.item.text].value : 0
            });
    }

    valueChanged(e){
        if (this.state.currentField)
            this.filterValues[this.state.currentField.text][this.state.currentMeasure.text].value = e.target.value;
            
        this.setState({ currentValue: e.target.value });
    }

    // Templates ---------------------------------------------------------------------------------

    //
    // Currently when using templates, the LitElement binding syntax is required
    // for properties, methods and events
    //
    // In addition when using IntegralUI components, the React wrappers are not needed in this case
    //

    currentFooterTemplate = (column) => { 
        return column.footerValue === 0 ? html`` : null;
    }

    currentRowCellTemplate = (row, cell) => { 
        return cell.value === 0 ? html`` : null;
    }

    // Update ------------------------------------------------------------------------------------

    render() {
        return (
            <div>
                <h2>PivotGrid / Value Filters</h2>
                <div className="sample-block-pgrd-val-fltr" id="pivotgrid-value-filter">
                    <IntegralUIPivotGridComponent  ref={this.gridRef}
                        allowAnimation={this.state.isAnimationAllowed} 
                        columns={this.state.columns} 
                        data={gridData} 
                        filters={this.state.filters} 
                        footerHeight={22}
                        footerTemplate={this.currentFooterTemplate}
                        resourcePath={this.state.currentResourcePath}
                        rowHeight={22}
                        rows={this.state.rows} 
                        rowTemplate={this.currentRowCellTemplate}
                        size={this.state.ctrlSize}
                        theme={this.state.currentTheme}
                        values={this.state.values} 
                    ></IntegralUIPivotGridComponent>
                    <div className="sbp-pgrd-val-flt">
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
                        <label>Measure</label>
                        <IntegralUISelectComponent
                            allowAnimation={this.state.isAnimationAllowed} 
                            items={this.state.measures}
                            resourcePath={this.state.currentResourcePath}
                            selectedItem={this.state.currentMeasure}
                            theme={this.state.currentTheme} 
                            selectionChanged={(e) => this.measureChanged(e)}
                        > 
                        </IntegralUISelectComponent>
                        <label>Condition</label>
                        <IntegralUISelectComponent
                            allowAnimation={this.state.isAnimationAllowed} 
                            items={this.state.conditions}
                            resourcePath={this.state.currentResourcePath}
                            selectedItem={this.state.currentCondition}
                            theme={this.state.currentTheme} 
                            selectionChanged={(e) => this.conditionChanged(e)}
                        > 
                        </IntegralUISelectComponent>
                        <label>Value</label>
                        <input type="number" value={this.state.currentValue} onChange={(e) => this.valueChanged(e)}></input>
                        <IntegralUIButtonComponent allowAnimation={this.state.isAnimationAllowed} theme={this.state.currentTheme} onClick={() => this.applyFilter()}>Apply</IntegralUIButtonComponent>
                    </div>
                    <div className="feature-help">
                        <p><span className="initial-space"></span>In this sample you can filter the grid data by specified field using a numeric filtering conditions. You can choose the data value that you want to filter with one of available options:</p>
                        <ul className="feature-points">
                            <li><span className="code-object">equals</span> - data is filtered so that field with data value equals the specified value</li>
                            <li><span className="code-object">greater than</span> - data is filtered so that field with data value is greater than specified value</li>
                            <li><span className="code-object">greater than or equal to</span> - data is filtered so that field with data value is greater than or equal to specified value</li>
                            <li><span className="code-object">less than</span> - data is filtered so that field with data value is less than specified value</li>
                            <li><span className="code-object">less than or equal to</span> - data is filtered so that field with data value is less than or equal to specified value</li>
                            <li><span className="code-object">does not equal</span> - data is filtered so that field with data value does not equal to specified value</li>
                        </ul>
                        <p><span className="initial-space"></span>All set conditions are preserved. To reset a condition, select a field, the measured value and then change the condition to none.</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default PivotGridValueFilters;
