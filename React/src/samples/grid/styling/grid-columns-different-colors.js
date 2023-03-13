import React, { Component } from 'react';

import IntegralUIGridComponent from 'integralui-web/wrappers/react.integralui.grid.js';
import {  IntegralUISelectionMode, IntegralUITheme } from 'integralui-web/components/integralui.enums.js';

import './grid-columns-different-colors.css';

class GridColumnsDifferentColors extends Component {

    //
    // Initialization / Destruction --------------------------------------------------------------
    //

    constructor(props){
        super(props);

        this.state = {
            columns: [
                { 
                    id: 1, 
                    headerText: 'Header1', 
                    footerText: 'Footer1', 
                    style: {
                        header: { background: '#ab3737', borderColor: '#872d2d', color: 'white' },
                        body: { background: '#fac5c5' },
                        footer: { background: '#ff6363' }
                    },
                    width: 200
                },
                { 
                    id: 2, 
                    headerText: 'Header2', 
                    footerText: 'Footer2', 
                    style: {
                        header: { background: '#30914c', borderColor: '#266e3b', color: 'white' },
                        body: { background: '#9ce6b1' },
                        footer: { background: '#4bc96f' }
                    },
                    width: 250
                },
                { 
                    id: 3, 
                    headerText: 'Header3', 
                    footerText: 'Footer3', 
                    style: {
                        header: { background: '#345d8c', borderColor: '#29486b', color: 'white' },
                        body: { background: '#b9d1ed' },
                        footer: { background: '#5796de' }
                    },
                    width: 120,
                }
            ],
            ctrlSize: { width: 700, height: 300 },
            currentResourcePath: '../../integralui-web/icons',
            currentSelectionMode: IntegralUISelectionMode.None,
            currentTheme: IntegralUITheme.Office,
            isAnimationAllowed: true,
            rows: [
                { id: 1, cells: [{ cid: 1, text: "Cell 11" }, { cid: 2, text: "Cell 12" }, {  cid: 3, text: "Cell 13" }] },
                { id: 2, cells: [{ cid: 1, text: "Cell 21" }, {  cid: 2, text: "Cell 22" }, { cid: 3, text: "Cell 23" }] },
                { id: 3, cells: [{ cid: 1, text: "Cell 31" }, {  cid: 2, text: "Cell 32" }, { cid: 3, text: "Cell 33" }] },
                { id: 4, cells: [{ cid: 1, text: "Cell 41" }, {  cid: 2, text: "Cell 42" }, { cid: 3, text: "Cell 43" }] },
                { id: 5, cells: [{ cid: 1, text: "Cell 51" }, {  cid: 2, text: "Cell 52" }, { cid: 3, text: "Cell 53" }] },
                { id: 6, cells: [{ cid: 1, text: "Cell 61" }, {  cid: 2, text: "Cell 62" }, { cid: 3, text: "Cell 63" }] },
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

    // Update ------------------------------------------------------------------------------------

    render() {
        return (
            <div>
                <h2>Grid / Columns in Different Colors</h2>
                <div className="sample-block" id="grid-columns-different-colors">
                    <IntegralUIGridComponent ref={this.gridRef}
                        allowAnimation={this.state.isAnimationAllowed} 
                        allowFocus={false}
                        columns={this.state.columns} 
                        resourcePath={this.state.currentResourcePath}
                        rowHeight={24}
                        rows={this.state.rows} 
                        selectionMode={this.state.currentSelectionMode}
                        size={this.state.ctrlSize}
                        theme={this.state.currentTheme}
                    ></IntegralUIGridComponent>
                    <div className="feature-help">
                        <p><span className="initial-space"></span>In this example, each column has different colors for its header, body and footer. This is done withing the code by setting inline style for each column.</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default GridColumnsDifferentColors;
