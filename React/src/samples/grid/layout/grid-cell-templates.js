import React, { Component } from 'react';
import { html } from 'integralui-web/external/lit-element.js';
import { classMap } from 'integralui-web/external/class-map';
import { styleMap } from 'integralui-web/external/style-map';

import IntegralUIGridComponent from 'integralui-web/wrappers/react.integralui.grid.js';
import { IntegralUIEditorType, IntegralUITheme } from 'integralui-web/components/integralui.enums.js';
import { iuiGridCellTemplatesStyle } from './grid-cell-templates.style.js';
import 'integralui-web/components/integralui.button.js';

class GridCellTemplates extends Component {

    //
    // Initialization / Destruction --------------------------------------------------------------
    //

    constructor(props){
        super(props);
    
        this.state = {
            columns: [
                { id: 1, headerText: "Company", width: 190},
                { id: 9, editorType: IntegralUIEditorType.CheckBox, width: 30, fixedWidth: true },
                { id: 2, headerText: "Price", headerAlignment: 'center', width: 90, contentAlignment: 'right' },
                { id: 3, headerText: "Change", width: 80, contentAlignment: 'center' },
                { id: 4, headerText: "Change %", width: 110, minWidth: 120, headerAlignment: 'center' },
                { id: 5, headerText: "Volume", width: 110, headerAlignment: 'center', contentAlignment: 'right' },
                { id: 6, headerText: "Country" },
                { id: 7, width: 90 }
            ],
            ctrlSize: { width: 900, height: 450 },
            currentResourcePath: '../../../integralui-web/icons',
            currentTheme: IntegralUITheme.Office,
            isAnimationAllowed: true,
            rows: [
                { 
                    id: 11,
                    cells: [
                        { cid: 9, value: true },
                        { cid: 1, text: "Augue LLC" },
                        {
                            cid: 2, 
                            indicator: true,
                            text: "$7.43"
                        },
                        { cid: 3, text: "+2.83" },
                        {
                            cid: 4, 
                            progress: 18.5,
                            text: "+18.50%"
                        },
                        { cid: 5, text: "12,251,937" },
                        { cid: 6, text: "Germany" },
                        { cid: 7 }
                    ]
                },
                { 
                    id: 12,
                    cells: [
                        { cid: 9, value: true },
                        { cid: 1, text: "Porttitor Corp." },
                        {
                            cid: 2, 
                            indicator: false,
                            text: "$196.53"
                        },
                        { cid: 3, text: "-1.47" },
                        {
                            cid: 4, 
                            indicator: false,
                            progress: 4.2,
                            text: "-4.21%"
                        },
                        { cid: 5, text: "2,763,552" },
                        { cid: 6, text: "Italy" },
                        { cid: 7 }
                    ]
                },
                { 
                    id: 13,
                    cells: [
                        { cid: 9 },
                        { cid: 1, text: "Id Risus PC" },
                        {
                            cid: 2, 
                            indicator: true,
                            text: "$69.23"
                        },
                        { cid: 3, text: "+3.51" },
                        {
                            cid: 4, 
                            progress: 5.59,
                            text: "+5.59%"
                        },
                        { cid: 5, text: "15,973,926" },
                        { cid: 6, text: "France" },
                        { cid: 7 }
                    ]
                },
                { 
                    id: 14,
                    cells: [
                        { cid: 9 },
                        { cid: 1, text: "Magna Sed Limited" },
                        {
                            cid: 2, 
                            text: "$78.60"
                        },
                        { cid: 3, text: "+0.07" },
                        {
                            cid: 4, 
                            progress: 0,
                            text: "+0.00%"
                        },
                        { cid: 5, text: "5,198,276" },
                        { cid: 6, text: "Germany" },
                        { cid: 7 }
                    ]
                },
                { 
                    id: 15,
                    cells: [
                        { cid: 9 },
                        { cid: 1, text: "Mi Felis Ltd" },
                        {
                            cid: 2, 
                            indicator: true,
                            text: "$27.85"
                        },
                        { cid: 3, text: "+3.17" },
                        {
                            cid: 4, 
                            progress: 2.67,
                            text: "+2.67%"
                        },
                        { cid: 5, text: "1,945,483" },
                        { cid: 6, text: "France" },
                        { cid: 7 }
                    ]
                },
                { 
                    id: 21,
                    cells: [
                        { cid: 9 },
                        { cid: 1, text: "Varius Orci In PC" },
                        {
                            cid: 2, 
                            indicator: false,
                            text: "$59.27"
                        },
                        { cid: 3, text: "-3.39" },
                        {
                            cid: 4, 
                            indicator: false,
                            progress: 6.92,
                            text: "-6.92%"
                        },
                        { cid: 5, text: "7,920,374" },
                        { cid: 6, text: "India" },
                        { cid: 7 }
                    ]
                },
                { 
                    id: 31,
                    cells: [
                        { cid: 9 },
                        { cid: 1, text: "Hymenaeos Corporation" },
                        {
                            cid: 2, 
                            indicator: true,
                            text: "$44.67"
                        },
                        { cid: 3, text: "+8.67" },
                        {
                            cid: 4, 
                            progress: 12.68,
                            text: "+12.68%"
                        },
                        { cid: 5, text: "3,399,847" },
                        { cid: 6, text: "Canada" },
                        { cid: 7 }
                    ]
                },
                { 
                    id: 32,
                    cells: [
                        { cid: 9, value: true },
                        { cid: 1, text: "Urna Institute" },
                        {
                            cid: 2, 
                            indicator: true,
                            text: "$77.79"
                        },
                        { cid: 3, text: "+0.79" },
                        {
                            cid: 4, 
                            progress: 3.24,
                            text: "+3.24%"
                        },
                        { cid: 5, text: "9,732,775" },
                        { cid: 6, text: "USA" },
                        { cid: 7 }
                    ]
                },
                { 
                    id: 33,
                    cells: [
                        { cid: 9, value: true },
                        { cid: 1, text: "Proin Ltd" },
                        {
                            cid: 2, 
                            indicator: true,
                            text: "$290.32"
                        },
                        { cid: 3, text: "+1.28" },
                        {
                            cid: 4, 
                            progress: 4.92,
                            text: "+4.92%"
                        },
                        { cid: 5, text: "5,999,324" },
                        { cid: 6, text: "USA" },
                        { cid: 7 }
                    ]
                },
                { 
                    id: 34,
                    cells: [
                        { cid: 9 },
                        { cid: 1, text: "Id Consulting" },
                        {
                            cid: 2, 
                            indicator: false,
                            text: "$54.99"
                        },
                        { cid: 3, text: "-2.39" },
                        {
                            cid: 4, 
                            indicator: false,
                            progress: 6.12,
                            text: "-6.12%"
                        },
                        { cid: 5, text: "3,542,897" },
                        { cid: 6, text: "Mexico" },
                        { cid: 7 }
                    ]
                },
                { 
                    id: 41,
                    cells: [
                        { cid: 9 },
                        { cid: 1, text: "Lacus Aliquam Consulting" },
                        {
                            cid: 2, 
                            indicator: true,
                            text: "$32.46"
                        },
                        { cid: 3, text: "+5.23" },
                        {
                            cid: 4, 
                            progress: 7.15,
                            text: "+7.15%"
                        },
                        { cid: 5, text: "2,749,325" },
                        { cid: 6, text: "Brazil" },
                        { cid: 7 }
                    ]
                },
                { 
                    id: 42,
                    cells: [
                        { cid: 9 },
                        { cid: 1, text: "Viverra LLC" },
                        {
                            cid: 2, 
                            indicator: false,
                            text: "$9.76"
                        },
                        { cid: 3, text: "-9.25" },
                        {
                            cid: 4, 
                            indicator: false,
                            progress: 24.31,
                            text: "-24.31%"
                        },
                        { cid: 5, text: "6,892,784" },
                        { cid: 6, text: "Argentina" },
                        { cid: 7 }
                    ]
                }
            ]
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
    currentRowCellTemplate = (row, cell) => { 
        switch (cell.cid){
            case 2:
                return html`<div class="price-cell">
                        <span class=${classMap(this.getPriceClass(cell))}></span> ${cell.text}
                    </div>`;

            case 4:
                return html`<div class="change-cell">
                        <span>${cell.text}</span>
                        <p class=${classMap(this.getProgressClass(cell.indicator))} style=${styleMap({ width: this.getProgressWidth(cell.progress) + 'px' })}></p>
                    </div>`;

            case 7:
                return html`<div class="button-cell">
                        <iui-button theme="Office" @mousedown="${() => this.deleteRow(row)}">Delete</iui-button>
                    </div>`;

            case 9:
                return html`<div style=${styleMap({ display: 'inline-block' })}>
                        <span class="grid-ctpl-item-label">${cell.text}</span>
                    </div>`;

            // no default
        }

        return null;
    };


    // Price Cell ------------------------------------------------------------------------

    getPriceClass(cell){
        let classList = { 'icons': true }

        if (cell.indicator)
            classList['price-up'] = true;
        else
            classList['price-down'] = true;

        return classList;
    }

    // Progress Cell ---------------------------------------------------------------------

    getProgressClass(indicator){
        return indicator !== false ? { ['progress-blue']: true } : { ['progress-red']: true };
    }

    getProgressWidth(value){
        return Math.floor(value * 5 / 3);
    }

    // Button Cell -----------------------------------------------------------------------

    deleteRow(row){
        if (row){
            this.gridRef.current.removeRow(row);
            this.gridRef.current.updateLayout();
        }
    }

    // Update ------------------------------------------------------------------------------------

    render() {
        return (
            <div>
                <h2>Grid / Cell Templates</h2>
                <div className="sample-block" id="grid-cell-templates">
                    <IntegralUIGridComponent ref={this.gridRef}
                        allowAnimation={this.state.isAnimationAllowed} 
                        allowFocus={false}
                        columns={this.state.columns} 
                        customStyle={iuiGridCellTemplatesStyle}
                        resourcePath={this.state.currentResourcePath}
                        rowHeight={30}
                        rows={this.state.rows} 
                        rowTemplate={this.currentRowCellTemplate}
                        showFooter={false}
                        size={this.state.ctrlSize}
                        theme={this.state.currentTheme}
                    ></IntegralUIGridComponent>
                    <div className="feature-help">
                        <p><span className="initial-space"></span>An example of a Grid where some of the cells are using custom template for their content:</p>
                        <ul className="feature-points">
                            <li><span className="code-object">Cells with a check box</span> - When check box in column header is clicked, it will update all cells in that column.</li>
                            <li><span className="code-object">Cells with price indicator</span> - represented by up/down icons algned on left side with price on right.</li>
                            <li><span className="code-object">Cells with change indicator</span> - represented by a progress bar on the right side.</li>
                            <li><span className="code-object">Cells with button</span> - when clicked will remove the row.</li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

export default GridCellTemplates;
