import React, { Component } from 'react';

import IntegralUISelectComponent from 'integralui-web/wrappers/react.integralui.select.js';
import IntegralUITreeGridComponent from 'integralui-web/wrappers/react.integralui.treegrid.js';
import { IntegralUITheme } from 'integralui-web/components/integralui.enums.js';

import './treegrid-expanding-column.css';

class TreeGridHighlightRows extends Component {

    //
    // Initialization / Destruction --------------------------------------------------------------
    //

    constructor(props){
        super(props);
    
        this.state = {
            columns: [
                { id: 1, headerText: 'Header1', footerText: 'Footer1', width: 250 },
                { id: 2, headerText: 'Header2', footerText: 'Footer2', width: 250 },
                { id: 3, headerText: 'Header3', footerText: 'Footer3', width: 250 }
            ],
            ctrlSize: { height: 400 },
            currentExpandColumnIndex: 0,
            currentSelectedIndex: -1,
            currentResourcePath: '../../../integralui-web/icons',
            currentTheme: IntegralUITheme.Office,
            isAnimationAllowed: true,
            rows: [
                { 
                    id: 1,
                    cells: [{ cid: 1, text: "Cell 11" }, { cid: 2, text: "Cell 12" }, {  cid: 3, text: "Cell 13" }],
                    rows: [
                        { id: 11, pid: 1, cells: [{ cid: 1, text: "Cell 111" }, {  cid: 2, text: "Cell 112" }, { cid: 3, text: "Cell 113" }] },
                        { 
                            id: 12,
                            pid: 1,
                            cells: [{ cid: 1, text: "Cell 121" }, {  cid: 2, text: "Cell 122" }, { cid: 3, text: "Cell 123" }],
                            rows: [
                                { id: 121, pid: 12, cells: [{ cid: 1, text: "Cell 1221" }, {  cid: 2, text: "Cell 1212" }, { cid: 3, text: "Cell 1213" }] },
                                { 
                                    id: 122,
                                    pid: 12,
                                    cells: [{ cid: 1, text: "Cell 1221" }, {  cid: 2, text: "Cell 1222" }, { cid: 3, text: "Cell 1223" }],
                                    expanded: false,
                                    rows: [
                                        { id: 1221, pid: 122, cells: [{ cid: 1, text: "Cell 12211" }, {  cid: 2, text: "Cell 12212" }, { cid: 3, text: "Cell 12213" }] },
                                        { id: 1222, pid: 122, cells: [{ cid: 1, text: "Cell 12221" }, {  cid: 2, text: "Cell 12222" }, { cid: 3, text: "Cell 12223" }] }
                                    ]
                                },
                                { id: 123, pid: 12, cells: [{ cid: 1, text: "Cell 1231" }, {  cid: 2, text: "Cell 1232" }, { cid: 3, text: "Cell 1233" }] }
                            ]
                        },
                        { id: 13, pid: 1, cells: [{ cid: 1, text: "Cell 131" }, {  cid: 2, text: "Cell 132" }, { cid: 3, text: "Cell 133" }] },
                        {
                            id: 14,
                            pid: 1,
                            cells: [{ cid: 1, text: "Cell 141" }, {  cid: 2, text: "Cell 142" }, { cid: 3, text: "Cell 143" }],
                            expanded: false,
                            rows: [
                                { id: 141, pid: 14, cells: [{ cid: 1, text: "Cell 1411" }, {  cid: 2, text: "Cell 1412" }, { cid: 3, text: "Cell 1413" }] },
                                { id: 142, pid: 14, cells: [{ cid: 1, text: "Cell 1421" }, {  cid: 2, text: "Cell 1422" }, { cid: 3, text: "Cell 1423" }] }
                            ]
                        }
                    ]
                },
                {
                    id: 2,
                    cells: [{ cid: 1, text: "Cell 21" }, {  cid: 2, text: "Cell 22" }, { cid: 3, text: "Cell 23" }],
                    rows: [
                        { id: 21, pid: 2, cells: [{ cid: 1, text: "Cell 211" }, {  cid: 2, text: "Cell 212" }, { cid: 3, text: "Cell 213" }] },
                        { id: 22, pid: 2, cells: [{ cid: 1, text: "Cell 221" }, {  cid: 2, text: "Cell 222" }, { cid: 3, text: "Cell 223" }] },
                        {
                            id: 23,
                            pid: 2,
                            cells: [{ cid: 1, text: "Cell 231" }, {  cid: 2, text: "Cell 232" }, { cid: 3, text: "Cell 233" }],
                            expanded: false,
                            rows: [
                                { id: 231, pid: 23, cells: [{ cid: 1, text: "Cell 2311" }, {  cid: 2, text: "Cell 2312" }, { cid: 3, text: "Cell 2313" }] },
                                { id: 232, pid: 23, cells: [{ cid: 1, text: "Cell 2321" }, {  cid: 2, text: "Cell 2322" }, { cid: 3, text: "Cell 2323" }] }
                            ]
                        }
                    ]
                },
                { id: 3, cells: [{ cid: 1, text: "Cell 31" }, {  cid: 2, text: "Cell 32" }, { cid: 3, text: "Cell 33" }] }
            ],
            selectOptions: []
        }
    
        this.gridRef = React.createRef();
    }

    componentDidMount(){
        this.init();
    }

    //
    // Methods -----------------------------------------------------------------------------------
    //
    
    init(){
        let currentOptions = [];

        // Create a dropdown list from all columns
        this.state.columns.forEach(column => {
            let item = { 
                id: column.id, 
                text: column.headerText
            }

            currentOptions.push(item);
        });

        this.setState({ currentSelectedIndex: 0, selectOptions: currentOptions });
    }

    // Events ------------------------------------------------------------------------------------

    onColumnSelectionChanged(e){
        if (e.detail.index >= 0)
            this.setState({ currentExpandColumnIndex: e.detail.index });
    } 

    // Update ------------------------------------------------------------------------------------

    render() {
        return (
            <div>
                <h2>TreeGrid / How to Change Expanding Column</h2>
                <div className="sample-block" id="treegrid-expanding-column">
                    <IntegralUITreeGridComponent ref={this.gridRef}
                        allowAnimation={this.state.isAnimationAllowed} 
                        allowFocus={false}
                        columns={this.state.columns} 
                        expandColumnIndex={this.state.currentExpandColumnIndex}
                        resourcePath={this.state.currentResourcePath}
                        rowHeight={24}
                        rows={this.state.rows} 
                        showFooter={false}
                        size={this.state.ctrlSize}
                        theme={this.state.currentTheme}
                    ></IntegralUITreeGridComponent>
                    <div className="sample-block-expanding-column">
                        <label>Expanding Column: </label>
                        <IntegralUISelectComponent 
                            allowAnimation={true}
                            items={this.state.selectOptions} 
                            maxDropDownItems={5} 
                            selectedIndex={this.state.currentSelectedIndex}
                            theme={this.state.currentTheme}
                            selectedIndexChanged={(e) => this.onColumnSelectionChanged(e)}
                        ></IntegralUISelectComponent>
                    </div>
                    <div className="feature-help">
                        <p><span className="initial-space"></span>This sample shows how to change the column which contains the expand box for rows in TreeGrid component. By default expanding column is set to be the first column. By selecting a different column from right panel, you can change that so expand boxes can appear in some other column.</p>
                        <p><span className="initial-space"></span>This is useful when you have one or more columns that contains a checkbox, icon, buttons or similar content that require small width that will appear left from the expanding column.</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default TreeGridHighlightRows;
