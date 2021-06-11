import React, { Component } from 'react';
import { html } from 'integralui-web/external/lit-element.js';

import IntegralUIButtonComponent from 'integralui-web/wrappers/react.integralui.button.js';
import IntegralUIListBoxComponent from 'integralui-web/wrappers/react.integralui.listbox.js';
import IntegralUIPivotGridComponent from 'integralui-web/wrappers/react.integralui.pivotgrid.js';
import IntegralUISelectComponent from 'integralui-web/wrappers/react.integralui.select.js';
import { IntegralUITheme } from 'integralui-web/components/integralui.enums.js';

import './pivotgrid-inclusive-filters.css';
import gridData from './pivotgrid-data.json';
import { iuiPivotGridInclusiveFiltersStyle } from './pivotgrid-inclusive-filters.style.js';

class PivotGridInclusiveFilters extends Component {

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
                    width: 150
                }
            ],
            ctrlSize: { height: 500 },
            currentField: null,
            currentResourcePath: '../integralui-web/icons',
            currentTheme: IntegralUITheme.Office,
            fields: [
                { text: 'Category' },
                { text: 'Country' },
                { text: 'Year' }
            ],
            filters: [],
            isAnimationAllowed: true,
            items: [],
            listSize: { height: 377 },
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
                }
            ]
        }

        this.valueList = {
            Category: [],
            Country: [],
            Year: []
        }

        this.gridRef = React.createRef();
   }

    componentDidMount(){
        this.valueList = { 
            Category: this.initList('Category'),
            Country: this.initList('Country'),
            Year: this.initList('Year')
        }
    }

    //
    // Methods -----------------------------------------------------------------------------------
    //

    // Initialization ----------------------------------------------------------------------------
        
    checkObj(list, value){
    	return list.filter(obj => obj.text === value).length > 0 ? true : false;
    }

    initList(fieldName){
        let list = [];
        
        gridData.forEach(obj =>{
            if (!this.checkObj(list, obj[fieldName]))
                list.push({ checked: true, text: obj[fieldName] });
        });

        return list.sort((first, second) => {
            let x = first.text;
            let y = second.text;

            x = x !== undefined ? x : null;
            y = y !== undefined ? y : null;

            if (x < y)
                return -1;
            else if (x > y)
                return 1;
            else
                return 0;
        });
    }

    // Events ------------------------------------------------------------------------------------

    applyFilter(){
        if (this.state.currentField){
            let currentFilters = [...this.state.filters];

            let filtered = currentFilters.filter(obj => obj.name === this.state.currentField.text);
            let checkedItems = this.valueList[this.state.currentField.text]
                .filter(item => item.checked)
                .map(item => item.text);

            if (filtered.length > 0)
                filtered[0].conditions.value = checkedItems;
            else 
                currentFilters.push({ 
                    name: this.state.currentField.text,
                    caseSensitive: false,
                    conditions: { value: checkedItems, operation: '=', join: '|' }
                });

            this.setState({ filters: currentFilters });
        }
    }

    fieldChanged(e){
        if (e.detail.item)
            this.setState({ currentField: e.detail.item, items: this.valueList[e.detail.item.text] });
    }

    itemChecked(e, item){
        item.checked = e.detail.checked;
    }

    // Templates ---------------------------------------------------------------------------------

    //
    // Currently when using templates, the LitElement binding syntax is required
    // for properties, methods and events
    //
    // In addition when using IntegralUI components, the React wrappers are not needed in this case
    //
    currentItemTemplate = (item) => { 
        return html`
            <iui-checkbox
                .checked="${item.checked}"
                .customStyle="${iuiPivotGridInclusiveFiltersStyle}"
                .resourcePath="${this.state.currentResourcePath}"
                .theme="${this.state.currentTheme}" 
                @checkedChanged="${(e) => this.itemChecked(e, item)}" 
            >
                ${item.text}
            </iui-checkbox>
        `;
    };

    currentRowCellTemplate = (row, cell) => { 
        return cell.value === 0 ? html`` : null;
    }

    // Update ------------------------------------------------------------------------------------

    render() {
        return (
            <div>
                <h2>PivotGrid / Inclusive Filters</h2>
                <div className="sample-block-pgrd-incl-fltr" id="pivotgrid-inclusive-filter">
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
                    <div className="sbp-pgrd-incl-flt">
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
                        <label>Values</label>
                        <IntegralUIListBoxComponent
                            allowAnimation={this.state.isAnimationAllowed}
                            customStyle={iuiPivotGridInclusiveFiltersStyle}
                            items={this.state.items}
                            itemTemplate={this.currentItemTemplate}
                            resourcePath={this.state.currentResourcePath}
                            size={this.state.listSize}
                            theme={this.state.currentTheme}
                        > 
                        </IntegralUIListBoxComponent>
                        <IntegralUIButtonComponent allowAnimation={this.state.isAnimationAllowed} theme={this.state.currentTheme} onClick={() => this.applyFilter()}>Apply</IntegralUIButtonComponent>
                    </div>
                    <div className="feature-help">
                        <p><span className="initial-space"></span>In this sample you can filter the grid data per column and row fields. The filter includes or excludes all specified values, which you can select from control panel on the right side.</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default PivotGridInclusiveFilters;
