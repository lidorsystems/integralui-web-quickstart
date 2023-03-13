import React, { Component } from 'react';
import { html } from 'integralui-web/external/lit-element.js';
import { classMap } from 'integralui-web/external/class-map';
import { styleMap } from 'integralui-web/external/style-map';

import IntegralUICommonService from 'integralui-web/services/integralui.common.service.js';
import IntegralUIPivotGridComponent from 'integralui-web/wrappers/react.integralui.pivotgrid.js';
import { IntegralUITheme } from 'integralui-web/components/integralui.enums.js';

import { iuiPivotGridOverviewStyle } from './pivotgrid-overview.style.js';
import gridData from './pivotgrid-data.json';

class PivotGridOverview extends Component {

    //
    // Initialization / Destruction --------------------------------------------------------------
    //

    constructor(props){
        super(props);

        this._commonService = new IntegralUICommonService();

        this.state = {
            columns: [ 
                { name: "Year", headerAlignment: 'center', sorting: "Ascending" }
            ],
            ctrlSize: { height: 500 },
            currentResourcePath: '../integralui-web/icons',
            currentTheme: IntegralUITheme.Office,
            isAnimationAllowed: true,
            rows: [ 
                { name: 'Country', expanded: true, width: 150 },
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
    }

    //
    // Methods -----------------------------------------------------------------------------------
    //

    //
    // Currently when using templates, the LitElement binding syntax is required
    // for properties, methods and events
    //
    currentRowCellTemplate = (row, cell) => { 
        if (cell.value === 0){
            return html``;
        }
        else if ((cell.value < 200) || (cell.value > 1000 && cell.value < 9999)){
            let textColor = cell.value < 200 
                ? '#db4c39'
                : (cell.value > 1000 && cell.value < 9999 ? '#326de3' : 'black');

            return html`<div>
                    <span class=${classMap(this.getIndicatorClass(cell))}></span>
                    <span class="iui-editor-label" style=${styleMap({ color: textColor })}>${this.getCellDisplayValue(cell)}</span>
                </div>`;
        }

        return null;
    }

    getCellDisplayValue(cell){
        let currentFormat = null;
        let filtered = this.state.values.filter(obj => obj.name === cell.colName);
        
        if (filtered.length > 0)
            currentFormat = filtered[0].format;

        return this._commonService.convertValue(cell.value, currentFormat);
    }

    getIndicatorClass(cell){
        let classList = { 'indicator-icons': true }

        if (cell.value < 100)
            classList['indicator-down'] = true;
        else if (cell.value > 1000 && cell.value < 9999)
            classList['indicator-up'] = true;

        return classList;
    }

    // Update ------------------------------------------------------------------------------------

    render() {
        return (
            <div>
                <h2>PivotGrid / Overview</h2>
                <div className="sample-block-pgrd-ovw" id="pivotgrid-overview">
                    <IntegralUIPivotGridComponent 
                        allowAnimation={this.state.isAnimationAllowed} 
                        columns={this.state.columns} 
                        customStyle={iuiPivotGridOverviewStyle}
                        data={gridData} 
                        footerHeight={22}
                        resourcePath={this.state.currentResourcePath}
                        rowHeight={22}
                        rows={this.state.rows} 
                        rowTemplate={this.currentRowCellTemplate}
                        size={this.state.ctrlSize}
                        theme={this.state.currentTheme}
                        values={this.state.values} 
                    ></IntegralUIPivotGridComponent>
                    <div className="feature-help">
                        <p><span className="initial-space"></span><strong><span className="code-name">IntegralUI</span> PivotGrid</strong> is a native Web Component that summarizes the data of a more extensive table. You can load data on demand during run-time from local or remote data sources, and summarize it using built-in or custom aggregation functions. Custom Filtering and Sorting is also included.</p>
                        <p><span className="initial-space"></span>In addition, some of columns use data formatting, where numbers appear with commas or with preset currency. All data formatting comes with standard settings, which you can easily change.</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default PivotGridOverview;
