import React, { Component } from 'react';
import { html } from 'integralui-web/external/lit-element.js';

import IntegralUICommonService from 'integralui-web/services/integralui.common.service.js';
import IntegralUIGridComponent from 'integralui-web/wrappers/react.integralui.grid.js';
import { IntegralUIEditMode, IntegralUIEditorType, IntegralUIDateFormat, IntegralUITheme } from 'integralui-web/components/integralui.enums.js';
import { iuiGridMultiLineHeadersStyle } from './grid-multi-line-headers.style.js';

// Editors
import 'integralui-web/components/integralui.checkbox.js';
import 'integralui-web/components/integralui.datepicker.js';
import 'integralui-web/components/integralui.select.js';

class GridMultiLineHeaders extends Component {

    //
    // Initialization / Destruction --------------------------------------------------------------
    //

    constructor(props){
        super(props);

        this._commonService = new IntegralUICommonService();
    
        this.deliveryOptions = [
            { text: "None", value: -1 },
            { text: "Delivery Truck", value: 0 },
            { text: "Regular Air", value: 1 },
            { text: "Express Air", value: 2 }
        ];

        this.state = {
            columns: [
                { id: 1, editorType: IntegralUIEditorType.CheckBox, width: 30, fixedWidth: true },
                { id: 2, title: 'ID', headerAlignment: 'center', contentAlignment: 'right', width: 40, fixedWidth: true },
                { id: 3, title: 'Customer', width: 200 },
                { 
                    id: 4, 
                    title: 'Order Details',
                    headerAlignment: 'center',
                    columns: [
                        { 
                            id: 41, 
                            title: 'Product', 
                            headerAlignment: 'center',
                            columns: [
                                { id: 411, title: 'Name', width: 150 },
                                { id: 412, title: 'Qty', headerAlignment: 'center', contentAlignment: 'right', width: 60 },
                                { 
                                    id: 413, 
                                    title: 'Price', 
                                    headerAlignment: 'center', 
                                    contentAlignment: 'right', 
                                    format: { 
                                        options: { 
                                            currency: 'USD', 
                                            style: 'currency',
                                            minimumFractionDigits: 2,
                                            maximumFractionDigits: 2
                                        }
                                    }, 
                                   width: 90
                                }
                            ]
                        },
                        { 
                            id: 42, 
                            title: 'Shipping Info', 
                            headerAlignment: 'center', 
                            contentAlignment: 'center', 
                            columns: [
                                { 
                                    id: 421, 
                                    title: 'Delivery', 
                                    editorType: IntegralUIEditorType.DropDownList, 
                                    editorSettings: { 
                                        allowAnimation: true,
                                        dropDownAdjustment: { top: 8 },
                                        items: this.deliveryOptions
                                    }, 
                                    headerAlignment: 'center', 
                                    width: 150
                                },
                                { 
                                    id: 422, 
                                    title: 'Cost', 
                                    headerAlignment: 'center',
                                    contentAlignment: 'right', 
                                    format: { 
                                        options: { 
                                            currency: 'USD', 
                                            style: 'currency',
                                            minimumFractionDigits: 2,
                                            maximumFractionDigits: 2
                                        }
                                    }, 
                                    width: 90
                                },
                                { 
                                    id: 423, 
                                    title: 'Date', 
                                    editorType: IntegralUIEditorType.Date,
                                    editorSettings: {
                                        allowAnimation: true,
                                        dropDownAdjustment: { top: 6 },
                                        locales: 'en-GB',
                                        format: IntegralUIDateFormat.Custom,
                                        formatOptions: {
                                            year: 'numeric',
                                            month: 'short',
                                            day: '2-digit'
                                        }
                                    },
                                    headerAlignment: 'center', 
                                    contentAlignment: 'center', 
                                    width: 120
                                }
                            ]
                        }
                    ]
                }
            ],
            ctrlSize: { height: 510 },
            currentEditMode: IntegralUIEditMode.Custom,
            currentResourcePath: '../../../integralui-web/icons',
            currentTheme: IntegralUITheme.Office,
            isAnimationAllowed: true,
            rows: [
                { id: 1, cells: [{ cid: 1 }, { cid: 2, text: '112' }, { cid: 3, text: 'Kevin MacIntyre' }, { cid: 411, text: 'Eldon Base for stackable storage shelf, platinum' }, { cid: 412, value: 6 }, { cid: 413, value: 38.94 }, { cid: 421, value: 1 }, { cid: 422, value: 35.00 }, { cid: 423, value: new Date(2018, 9, 20) }] },
                { id: 2, cells: [{ cid: 1, value: true }, { cid: 2, text: '293' }, { cid: 3, text: 'Barry French' }, { cid: 411, text: '1.7 Cubic Foot Compact "Cube" Office Refrigerators' }, { cid: 412, value: 49 }, { cid: 413, value: 208.16 }, { cid: 421, value: 0 }, { cid: 422, value: 68.02 }, { cid: 423, value: new Date(2019, 2, 11) }] },
                { id: 5, cells: [{ cid: 1 }, { cid: 2, text: '483' }, { cid: 3, text: 'Clay Rozendal' }, { cid: 411, text: 'R380' }, { cid: 412, value: 30 }, { cid: 413, value: 195.99 }, { cid: 421, value: 1 }, { cid: 422, value: 3.99 }, { cid: 423, value: new Date(2020, 0, 17) }] },
                { id: 7, cells: [{ cid: 1 }, { cid: 2, text: '534' }, { cid: 3, text: 'Alan Barnes' }, { cid: 411, text: 'G.E. Longer-Life Indoor Recessed Floodlight Bulbs' }, { cid: 412, value: 21 }, { cid: 413, value: 6.64 }, { cid: 421, value: 2 }, { cid: 422, value: 4.95 }, { cid: 423, value: new Date(2020, 3, 22) }] },
                { id: 8, cells: [{ cid: 1 }, { cid: 2, text: '678' }, { cid: 3, text: 'Dorothy Badders' }, { cid: 411, text: 'Xerox 198' }, { cid: 412, value: 37 }, { cid: 413, value: 4.98 }, { cid: 421, value: 1 }, { cid: 422, value: 8.33 }, { cid: 423, value: new Date(2020, 8, 19) }] },
                { id: 3, cells: [{ cid: 1, value: true }, { cid: 2, text: '643' }, { cid: 3, text: 'Monica Federle' }, { cid: 411, text: 'SAFCO Commercial Wire Shelving, Black' }, { cid: 412, value: 21 }, { cid: 413, value: 138.14 }, { cid: 421, value: 2 }, { cid: 422, value: 27.50 }, { cid: 423, value: new Date(2020, 6, 5) }] },
                { id: 4, cells: [{ cid: 1 }, { cid: 2, text: '868' }, { cid: 3, text: 'Carlos Daly' }, { cid: 411, text: 'Holmes HEPA Air Purifier' }, { cid: 412, value: 32 }, { cid: 413, value: 21.78 }, { cid: 421, value: 1 }, { cid: 422, value: 5.94 }, { cid: 423, value: new Date(2020, 7, 9) }] },
                { id: 9, cells: [{ cid: 1 }, { cid: 2, text: '933' }, { cid: 3, text: 'Claudia Miner' }, { cid: 411, text: "Wilson Jones 1' Hanging DublLock® Ring Binders" }, { cid: 412, value: 15 }, { cid: 413, value: 5.28 }, { cid: 421, value: 0 }, { cid: 422, value: 2.99 }, { cid: 423, value: new Date(2021, 4, 16) }] },
                { id: 10, cells: [{ cid: 1 }, { cid: 2, text: '995' }, { cid: 3, text: 'Neola Schneider' }, { cid: 411, text: 'Ultra Commercial Grade Dual Valve Door Closer' }, { cid: 412, value: 26 }, { cid: 413, value: 39.89 }, { cid: 421, value: 1 }, { cid: 422, value: 3.04 }, { cid: 423, value: new Date(2021, 5, 23) }] },
                { id: 6, cells: [{ cid: 1 }, { cid: 2, text: '1154' }, { cid: 3, text: 'Sylvia Foulston' }, { cid: 411, text: 'Hon 4-Shelf Metal Bookcases' }, { cid: 412, value: 44 }, { cid: 413, value: 100.98 }, { cid: 421, value: 0 }, { cid: 422, value: 26.22 }, { cid: 423, value: new Date(2021, 11, 16) }] }
            ]
        }

        this.gridRef = React.createRef();
    }

    //
    // Methods -----------------------------------------------------------------------------------
    //

    // Templates ---------------------------------------------------------------------------------

    currentHeaderTemplate = (column) => { 
        return html`<span class="header-label">${column.title}</span>`;
    };

    // Update ------------------------------------------------------------------------------------

    render() {
        return (
            <div>
                <h2>Grid / Multi-line Headers</h2>
                <div className="sample-block" id="grid-multi-line-headers">
                    <IntegralUIGridComponent ref={this.gridRef}
                        allowAnimation={this.state.isAnimationAllowed} 
                        allowFocus={false}
                        autoSizeColumns={true}
                        columns={this.state.columns} 
                        customStyle={iuiGridMultiLineHeadersStyle}
                        editMode={this.state.currentEditMode}
                        headerTemplate={this.currentHeaderTemplate}
                        resourcePath={this.state.currentResourcePath}
                        rowHeight={28}
                        rows={this.state.rows} 
                        showFooter={false}
                        size={this.state.ctrlSize}
                        theme={this.state.currentTheme}
                    ></IntegralUIGridComponent>
                    <div className="feature-help">
                        <p><span className="initial-space"></span>This example shows a grid with order details. The first three columns have only one header, while the 'Order Details' column is separated in multiple sub-columns, three header levels in total. There are two child columns 'Product' and 'Shipping Info' with their own child columns.</p>
                        <p><span className="initial-space"></span>Using the CheckBox, DropDownList or DatePicker editor, you can change the values in corresponding cells. In addition, the Grid component has <strong>autoSizeColumns</strong> property set to true, which means the grid space is divided between all columns and empty space is removed. Resizing the grid will also auto-size columns to fit the grid width.</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default GridMultiLineHeaders;
