import React, { Component } from 'react';
import { html } from 'integralui-web/external/lit-element.js';
import { styleMap } from 'integralui-web/external/style-map';

import IntegralUIGridComponent from 'integralui-web/wrappers/react.integralui.grid.js';
import { IntegralUITheme } from 'integralui-web/components/integralui.enums.js';
import 'integralui-web/components/integralui.tooltip.js';

class GridTooltips extends Component {

    //
    // Initialization / Destruction --------------------------------------------------------------
    //

    constructor(props){
        super(props);
    
        this.state = {
            columns: [
                { headerText: "Header1", footerText: "Footer1", width: 180 },
                { headerText: "Header2", footerText: "Footer2", width: 250 },
                { headerText: "Header3", footerText: "Footer3", width: 120 }
            ],
            ctrlSize: { width: 600, height: 350 },
            currentResourcePath: '../../../integralui-web/icons',
            currentTheme: IntegralUITheme.Office,
            isAnimationAllowed: true,
            rows: [
                { id: 1, text: "Item1", cells: [{ text: "Item11" }, { text: "Item12" }, { text: "Item13" }] },
                { id: 2, text: "Item2", cells: [{ text: "Item21" }, { text: "Item22" }, { text: "Item23" }] },
                { id: 3, text: "Item3", cells: [{ text: "Item31" }, { text: "Item32" }, { text: "Item33" }] },
                { id: 4, text: "Item4", cells: [{ text: "Item41" }, { text: "Item42" }, { text: "Item43" }] },
                { id: 5, text: "Item5", cells: [{ text: "Item51" }, { text: "Item52" }, { text: "Item53" }] },
                { id: 6, text: "Item6", cells: [{ text: "Item61" }, { text: "Item62" }, { text: "Item63" }] },
                { id: 7, text: "Item7", cells: [{ text: "Item71" }, { text: "Item72" }, { text: "Item73" }] },
            ],
            tooltipSettings: {
                autoPopDelay: 3000,
                enabled: true,
                initialDelay: 1000,
                position: 'mouse',
                showMarker: true
            }
        }

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
            <div style=${styleMap({ display: 'inline-block', padding: '2px 0 0 0' })}>
                <iui-tooltip
                    .enabled=${this.state.tooltipSettings.enabled}
                    .settings=${Object.assign({ title: column.headerText }, this.state.tooltipSettings )}
                    .theme=${this.state.currentTheme}
                >
                    ${column.headerText}
                </iui-tooltip>
            </div>
        `;
    };

    currentRowTemplate = (row, cell) => { 
        return html`
            <div style=${styleMap({ display: 'inline-block', padding: '2px 0 0 0' })}>
                <iui-tooltip
                    .enabled=${this.state.tooltipSettings.enabled}
                    .settings=${Object.assign({ title: cell.text }, this.state.tooltipSettings )}
                    .theme=${this.state.currentTheme}
                >
                    ${cell.text}
                </iui-tooltip>
            </div>
        `;
    };

    // Update ------------------------------------------------------------------------------------

    render() {
        return (
            <div>
                <h2>Grid / Tooltips</h2>
                <div className="sample-block" id="grid-tooltips">
                    <IntegralUIGridComponent ref={this.gridRef}
                        allowAnimation={this.state.isAnimationAllowed} 
                        columns={this.state.columns} 
                        headerTemplate={this.currentHeaderTemplate}
                        resourcePath={this.state.currentResourcePath}
                        rows={this.state.rows} 
                        rowTemplate={this.currentRowTemplate}
                        size={this.state.ctrlSize}
                        theme={this.state.currentTheme}
                    ></IntegralUIGridComponent>
                    <div className="feature-help">
                        <p><span className="initial-space"></span>In this sample you can see how to add a tooltip to each column and row in the Grid component.</p>
                        <p><span className="initial-space"></span>Whenever a mouse cursor enters the space of column or row cell, a tooltip will appear. To simplify this example, the default tooltip settings are used and only the tooltip title is set.</p>
                        <p><span className="initial-space"></span>We are using the <strong>IntegralUI Tooltip</strong> component to apply a tooltip to Grid cells. The tooltip is applied by creating a custom cell template.</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default GridTooltips;
