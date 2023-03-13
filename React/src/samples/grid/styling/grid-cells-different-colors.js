import React, { Component } from 'react';

import IntegralUIGridComponent from 'integralui-web/wrappers/react.integralui.grid.js';
import { IntegralUISelectionMode, IntegralUITheme } from 'integralui-web/components/integralui.enums.js';
import { iuiGridCellDifferentColorsStyle } from './grid-cells-different-colors.style.js';

import './grid-cells-different-colors.css';

class GridCellsDifferentColors extends Component {

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
            currentSelectionMode: IntegralUISelectionMode.None,
            currentTheme: IntegralUITheme.Office,
            isAnimationAllowed: true,
            rows: [
                { id: 1, cells: [{ cid: 1, text: "Cell 11" }, { cid: 2, text: "Cell 12" }, {  cid: 3, text: "Cell 13" }] },
                { 
                    id: 2, 
                    cells: [
                        { cid: 1, text: "Cell 21", style: { background: 'red', color: 'white' } }, 
                        { cid: 2, text: "Cell 22" }, 
                        { cid: 3, text: "Cell 23" }
                    ]
                },
                { id: 3, cells: [{ cid: 1, text: "Cell 31" }, {  cid: 2, text: "Cell 32" }, { cid: 3, text: "Cell 33" }] },
                { 
                    id: 4, 
                    cells: [
                        { cid: 1, text: "Cell 41" }, 
                        {  cid: 2, text: "Cell 42" }, 
                        { cid: 3, text: "Cell 43", style: { background: 'blue', color: 'white' } }
                    ]
                },
                { id: 5, cells: [{ cid: 1, text: "Cell 51" }, {  cid: 2, text: "Cell 52" }, { cid: 3, text: "Cell 53" }] },
                { 
                    id: 6, 
                    cells: [
                        { cid: 1, text: "Cell 61" }, 
                        {  cid: 2, text: "Cell 62", style: { background: 'green', color: 'white' } }, 
                        { cid: 3, text: "Cell 63" }
                    ]
                },
                { id: 7, cells: [{ cid: 1, text: "Cell 71" }, {  cid: 2, text: "Cell 72" }, { cid: 3, text: "Cell 73" }] },
                { id: 8, cells: [{ cid: 1, text: "Cell 81" }, {  cid: 2, text: "Cell 82" }, { cid: 3, text: "Cell 83" }] },
                { id: 9, cells: [{ cid: 1, text: "Cell 91" }, {  cid: 2, text: "Cell 92" }, { cid: 3, text: "Cell 93" }] }
            ]
        }
    
        this.gridRef = React.createRef();
}

    //
    // Methods -----------------------------------------------------------------------------------
    //

    // Events ------------------------------------------------------------------------------------

    gridCellClicked(e){
        let cell = e.detail.cell;

        if (cell){
            cell.clickCount = cell.clickCount === undefined ? 1 : cell.clickCount + 1;

            let currentStyle = cell.style || { color: 'white', transition: 'all 0.25s ease-in' }

            switch (cell.clickCount % 4){
                case 1:
                    currentStyle = null;
                    this.gridRef.current.setClass('animated-background', cell);
                    break;

                case 2:
                    currentStyle.background = 'green';
                    break;

                case 3:
                    currentStyle.background = 'blue';
                    break;

                default:
                    currentStyle = null;
                    break;
            }

            // Remove CSS class from the cell when click count is different than 1
            // In this case inline style is applied instead of a CSS class
            if (cell.clickCount % 4 !== 1)
                this.gridRef.current.setClass(null, cell);

            // If there is inline style available, apply it to the row, otherwise delete the style field
            if (currentStyle)
                cell.style = currentStyle; 
            else
                delete cell.style;

            this.gridRef.current.refresh();
        }
    }

    // Update ------------------------------------------------------------------------------------

    render() {
        return (
            <div>
                <h2>Grid / Cells in Different Colors</h2>
                <div className="sample-block" id="grid-cells-different-colors">
                    <IntegralUIGridComponent ref={this.gridRef}
                        allowAnimation={this.state.isAnimationAllowed} 
                        allowFocus={false}
                        columns={this.state.columns} 
                        customStyle={iuiGridCellDifferentColorsStyle}
                        resourcePath={this.state.currentResourcePath}
                        rowHeight={24}
                        rows={this.state.rows} 
                        selectionMode={this.state.currentSelectionMode}
                        showFooter={false}
                        size={this.state.ctrlSize}
                        theme={this.state.currentTheme}
                        cellClick={(e) => this.gridCellClicked(e)}
                    ></IntegralUIGridComponent>
                    <div className="feature-help">
                        <p><span className="initial-space"></span>In this example, whenever a cell is clicked it will appear in different color. In addition, an alert state with animation is applied to a cell when clicked few times.</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default GridCellsDifferentColors;
