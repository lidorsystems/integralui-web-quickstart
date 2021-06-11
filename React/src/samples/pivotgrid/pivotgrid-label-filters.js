import React, { Component } from 'react';
import { html } from 'integralui-web/external/lit-element.js';

import IntegralUIButtonComponent from 'integralui-web/wrappers/react.integralui.button.js';
import IntegralUIPivotGridComponent from 'integralui-web/wrappers/react.integralui.pivotgrid.js';
import IntegralUISelectComponent from 'integralui-web/wrappers/react.integralui.select.js';
import { IntegralUITheme } from 'integralui-web/components/integralui.enums.js';

import './pivotgrid-label-filters.css';
import gridData from './pivotgrid-data.json';

class PivotGridLabelFilters extends Component {

    //
    // Initialization / Destruction --------------------------------------------------------------
    //

    constructor(props){
        super(props);

        this.state = {
            columns: [ 
                { name: 'Country', expanded: true, width: 150 },
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
                { text: 'begins with' },
                { text: 'contains' },
                { text: 'ends with' },
                { text: 'equals' },
                { text: 'does not begin with' },
                { text: 'does not contain' },
                { text: 'does not end with' },
                { text: 'does not equal' }
            ],
            ctrlSize: { height: 500 },
            currentCondition: null,
            currentField: null,
            currentResourcePath: '../integralui-web/icons',
            currentTheme: IntegralUITheme.Office,
            currentValue: '',
            fields: [
                { text: 'Category' },
                { text: 'Country' }
            ],
            filters: [],
            isAnimationAllowed: true,
            items: [],
            listSize: { height: 377 },
            rows: [ 
                { name: 'Category', width: 175 }
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
                }
            ]
        }

        this.filterValues = {
            Category: { condition: null, value: '' },
            Country: { condition: null, value: '' }
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
            case 1: //begins with
                return '->';

            case 2: //contains
                return '[]';

            case 3: //ends with
                return '<-';

            case 4: //equals
                return '=';

            case 5: //does not begin with
                return '->';

            case 6: //does not contain
                return '[]';

            case 7: //does not end with
                return '<-';

            case 8: //does not equal
                return '!=';
        }

        return '';
    }

    // Events ------------------------------------------------------------------------------------

    applyFilter(){
        if (this.state.currentField){
            let currentFilters = [...this.state.filters];

            let currentOperation = this.getOperation(this.state.currentCondition);
            let filtered = currentFilters.filter(obj => obj.name === this.state.currentField.text);

            if (currentOperation !== '' && this.state.currentValue !== ''){
                if (filtered.length > 0){
                    filtered[0].conditions.value = this.state.currentValue;
                    filtered[0].conditions.operation = currentOperation;
                    filtered[0].conditions.negative = this.state.conditions.indexOf(this.state.currentCondition) > 4 ? true : false;
                }
                else 
                    currentFilters.push({ 
                        name: this.state.currentField.text,
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
            if (this.state.currentField)
                this.filterValues[this.state.currentField.text].condition = e.detail.item;

            this.setState({ currentCondition: e.detail.item });
        }
    }

    fieldChanged(e){
        if (e.detail.item)
            this.setState({ 
                currentCondition: this.filterValues[e.detail.item.text].condition,
                currentField: e.detail.item, 
                currentValue: this.filterValues[e.detail.item.text].value
            });
    }

    valueChanged(e){
        if (this.state.currentField)
            this.filterValues[this.state.currentField.text].value = e.target.value;
            
        this.setState({ currentValue: e.target.value });
    }

    // Templates ---------------------------------------------------------------------------------

    //
    // Currently when using templates, the LitElement binding syntax is required
    // for properties, methods and events
    //
    // In addition when using IntegralUI components, the React wrappers are not needed in this case
    //

    currentRowCellTemplate = (row, cell) => { 
        return cell.value === 0 ? html`` : null;
    }

    // Update ------------------------------------------------------------------------------------

    render() {
        return (
            <div>
                <h2>PivotGrid / Label Filters</h2>
                <div className="sample-block-pgrd-lbl-fltr" id="pivotgrid-label-filter">
                    <IntegralUIPivotGridComponent  ref={this.gridRef}
                        allowAnimation={this.state.isAnimationAllowed} 
                        columns={this.state.columns} 
                        data={gridData} 
                        filters={this.state.filters} 
                        footerHeight={22}
                        resourcePath={this.state.currentResourcePath}
                        rowHeight={22}
                        rows={this.state.rows} 
                        rowTemplate={this.currentRowCellTemplate}
                        size={this.state.ctrlSize}
                        theme={this.state.currentTheme}
                        values={this.state.values} 
                    ></IntegralUIPivotGridComponent>
                    <div className="sbp-pgrd-lbl-flt">
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
                        <input type="text" value={this.state.currentValue} onChange={(e) => this.valueChanged(e)}></input>
                        <IntegralUIButtonComponent allowAnimation={this.state.isAnimationAllowed} theme={this.state.currentTheme} onClick={() => this.applyFilter()}>Apply</IntegralUIButtonComponent>
                    </div>
                    <div className="feature-help">
                        <p><span className="initial-space"></span>In this sample you can filter the grid data by specified field using a string filtering conditions. You can choose one of available options:</p>
                        <ul className="feature-points">
                            <li><span className="code-object">begins with</span> - data is filtered so that field have value that begins with specified label</li>
                            <li><span className="code-object">contains</span> - data is filtered so that field have value that contains the specified label</li>
                            <li><span className="code-object">ends with</span> - data is filtered so that field have value that ends with specified label</li>
                            <li><span className="code-object">equals</span> - data is filtered so that field have value that equals with specified label</li>
                            <li><span className="code-object">does not begin with</span> - data is filtered so that field have value that does not begin with specified label</li>
                            <li><span className="code-object">does not contain</span> - data is filtered so that field have value that does not contain the specified label</li>
                            <li><span className="code-object">does not end with</span> - data is filtered so that field have value that does not end with specified label</li>
                            <li><span className="code-object">does not equal</span> - data is filtered so that field have value that does not equal with specified label</li>
                        </ul>
                        <p><span className="initial-space"></span>In this sample, all conditions are not case sensitive. This can be set in code, by specifying filtering conditions.</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default PivotGridLabelFilters;
