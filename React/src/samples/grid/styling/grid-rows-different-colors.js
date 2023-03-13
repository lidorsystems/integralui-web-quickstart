import React, { Component } from 'react';

import IntegralUIGridComponent from 'integralui-web/wrappers/react.integralui.grid.js';
import {  IntegralUISelectionMode, IntegralUITheme } from 'integralui-web/components/integralui.enums.js';
import { iuiGridRowDifferentColorsStyle } from './grid-rows-different-colors.style.js';

import './grid-rows-different-colors.css';

class GridRowsDifferentColors extends Component {

    //
    // Initialization / Destruction --------------------------------------------------------------
    //

    constructor(props){
        super(props);

        this.state = {
            columns: [
                { id: 1, headerText: 'Header1', width: 200 },
                { id: 2, headerText: 'Header2', width: 250 },
                { id: 3, headerText: 'Header3', width: 120 }
            ],
            ctrlSize: { width: 700, height: 300 },
            currentResourcePath: '../../integralui-web/icons',
            currentTheme: IntegralUITheme.Office,
            isAnimationAllowed: true,
            rows: [
                { id: 1, cells: [{ cid: 1, text: "Cell 11" }, { cid: 2, text: "Cell 12" }, {  cid: 3, text: "Cell 13" }] },
                { id: 2, cells: [{ cid: 1, text: "Cell 21" }, {  cid: 2, text: "Cell 22" }, { cid: 3, text: "Cell 23" }] },
                { 
                    id: 3, 
                    style: { background: 'red', color: 'white' },
                    cells: [{ cid: 1, text: "Cell 31" }, {  cid: 2, text: "Cell 32" }, { cid: 3, text: "Cell 33" }]
                },
                { id: 4, cells: [{ cid: 1, text: "Cell 41" }, {  cid: 2, text: "Cell 42" }, { cid: 3, text: "Cell 43" }] },
                { 
                    id: 5, 
                    style: { background: 'green', color: 'white', fontStyle: 'italic' },
                    cells: [{ cid: 1, text: "Cell 51" }, {  cid: 2, text: "Cell 52" }, { cid: 3, text: "Cell 53" }]
                },
                { id: 6, cells: [{ cid: 1, text: "Cell 61" }, {  cid: 2, text: "Cell 62" }, { cid: 3, text: "Cell 63" }] },
                { id: 7, cells: [{ cid: 1, text: "Cell 71" }, {  cid: 2, text: "Cell 72" }, { cid: 3, text: "Cell 73" }] },
                { 
                    id: 8, 
                    style: { background: 'blue', color: 'white', fontWeight: 'bold' },
                    cells: [{ cid: 1, text: "Cell 81" }, {  cid: 2, text: "Cell 82" }, { cid: 3, text: "Cell 83" }]
                },
                { id: 9, cells: [{ cid: 1, text: "Cell 91" }, {  cid: 2, text: "Cell 92" }, { cid: 3, text: "Cell 93" }] }
            ]
        }
        
        this.gridRef = React.createRef();
    }

    //
    // Methods -----------------------------------------------------------------------------------
    //

    // Events ------------------------------------------------------------------------------------

    gridSelectionChanged(e){
        let obj = e.detail.obj;

        if (obj && obj.type === 'row'){
            obj.clickCount = obj.clickCount === undefined ? 1 : obj.clickCount + 1;

            let currentStyle = obj.style || { color: 'white', transition: 'all 0.25s ease-in' }

            switch (obj.clickCount % 4){
                case 1:
                    currentStyle.background = 'red';
                    break;

                case 2:
                    currentStyle.background = 'green';
                    break;

                case 3:
                    currentStyle = null;
                    this.gridRef.current.setClass('animated-background', obj);
                    break;

                default:
                    currentStyle = null;
                    break;
            }

            // Remove CSS class from the row when click count is different than 3
            // In this case inline style is applied instead of a CSS class
            if (obj.clickCount % 4 !== 3)
                this.gridRef.current.setClass(null, obj);

            // If there is inline style available, apply it to the row, otherwise delete the style field
            if (currentStyle)
                obj.style = currentStyle; 
            else
                delete obj.style;

            this.gridRef.current.refresh();
        }
    }

    // Update ------------------------------------------------------------------------------------

    render() {
        return (
            <div>
                <h2>Grid / Rows in Different Colors</h2>
                <div className="sample-block" id="grid-rows-different-colors">
                    <IntegralUIGridComponent ref={this.gridRef}
                        allowAnimation={this.state.isAnimationAllowed} 
                        allowFocus={false}
                        columns={this.state.columns} 
                        customStyle={iuiGridRowDifferentColorsStyle}
                        resourcePath={this.state.currentResourcePath}
                        rowHeight={24}
                        rows={this.state.rows} 
                        showFooter={false}
                        size={this.state.ctrlSize}
                        theme={this.state.currentTheme}
                        selectionChanged={(e) => this.gridSelectionChanged(e)}
                    ></IntegralUIGridComponent>
                    <div className="feature-help">
                        <p><span className="initial-space"></span>In this example, whenever a row is clicked it will appear in different color. Any subsequent clicks (up to three) will change the color until resets.</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default GridRowsDifferentColors;
