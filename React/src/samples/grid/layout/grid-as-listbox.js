import React, { Component } from 'react';
import { html } from 'integralui-web/external/lit-element.js';

import IntegralUIGridComponent from 'integralui-web/wrappers/react.integralui.grid.js';
import { IntegralUIEditorType, IntegralUITheme } from 'integralui-web/components/integralui.enums.js';
import { iuiGridAsListBoxStyle } from './grid-as-listbox.style.js';

class GridAsListBox extends Component {

    //
    // Initialization / Destruction --------------------------------------------------------------
    //

    constructor(props){
        super(props);

        this.state = {
            columns: [
                { id: 1, editorType: IntegralUIEditorType.CheckBox, fixedWidth: true, headerAlignment: "center", width: 30 },
                { id: 2, headerText: "Name", width: 300 },
                { id: 3, headerText: "Version", contentAlignment: 'center', width: 120 },
                { id: 4, headerText: "Date", contentAlignment: 'center', width: 110 },
                { id: 5, width: 90, contentAlignment: 'center' }
            ],
            ctrlSize: { width: 800, height: 300 },
            currentResourcePath: '../../../integralui-web/icons',
            currentTheme: IntegralUITheme.Office,
            isAnimationAllowed: true,
            rows: [
                { 
                    id: 1,
                    cells: [ 
                        { cid: 1 }, 
                        { cid: 2, icon: 'disk',category: 'Disk drives', driverName: 'TOSHIBA DT01ACA100 ATA Device' },
                        { cid: 3, text: "6.1.7600.16385" },
                        { cid: 4, text: "21 Jun 2015" },
                        { cid: 5 }
                    ]
                },
                { 
                    id: 2,
                    cells: [
                        { cid: 1, value: true },
                        { cid: 2, icon: 'pc', category: 'Display adapters', driverName: 'NVIDIA GeForce GT 730' },
                        { cid: 3, text: "10.18.13.5891" },
                        { cid: 4, text: "05 Nov 2015" },
                        { cid: 5 }
                    ]
                },
                { 
                    id: 3,
                    cells: [
                        { cid: 1 },
                        { cid: 2, icon: 'network', category: 'Network', driverName: 'Realtek PCIe GBE Family Controller' },
                        { cid: 3, text: "7.82.317.2014" },
                        { cid: 4, text: "17 Mar 2014" },
                        { cid: 5 }
                    ]
                },
                { 
                    id: 4,
                    cells: [
                        { cid: 1, value: true },
                        { cid: 2, icon: 'sound', category: 'Sound', driverName: 'Realtek High Defintion Audio' },
                        { cid: 3, text: "6.0.1.7200" },
                        { cid: 4, text: "14 Mar 2014" },
                        { cid: 5 }
                    ]
                },
                { 
                    id: 5,
                    cells: [
                        { cid: 1 },
                        { cid: 2, icon: 'usb', category: 'Universal Serial Bus controllers', driverName: 'Intel USB 3.0 Root Hub' },
                        { cid: 3, text: "3.0.0.16" },
                        { cid: 4, text: "12 Feb 2014" },
                        { cid: 5 }
                    ]
                }
            ]
        }
    
        this.gridRef = React.createRef();
    }

    //
    // Methods -----------------------------------------------------------------------------------
    //

    // Templates -----------------------------------------------------------------------------

    currentRowTemplate = (row, cell) => { 
        switch (cell.cid){
            case 2: // Driver Info
                return html`<div class="driver">
                        <span class="icons-medium ${cell.icon}"></span>
                        <div class="driver-info">
                            <span class="driver-category">${cell.category}</span><br/>
                            <span>${cell.driverName}</span>
                        </div>
                    </div>`;

            case 5: // Driver Action
                return html`<iui-button allow-animation="true" .allowFocus="${false}" .customStyle="${iuiGridAsListBoxStyle}" @click="${() => this.updateDriver(row)}">Update</iui-button>`;
        }

        return null;
    }

    getCellById(row, id){
        let filtered = row.cells.filter(cell => cell.cid === id);

        return filtered.length > 0 ? filtered[0] : null;
    }

    updateDriver(row){
        let driverInfoCell = this.getCellById(row, 2);

        if (driverInfoCell)
            alert("Update Driver for " + driverInfoCell.driverName);
    }

    // Update ------------------------------------------------------------------------------------

    render() {
        return (
            <div>
                <h2>Grid / Grid as ListBox</h2>
                <div className="sample-block" id="grid-as-listbox">
                    <IntegralUIGridComponent ref={this.gridRef}
                        allowAnimation={this.state.isAnimationAllowed} 
                        allowFocus={false}
                        autoSizeColumns={true}
                        columns={this.state.columns} 
                        customStyle={iuiGridAsListBoxStyle}
                        resourcePath={this.state.currentResourcePath}
                        rowHeight={64}
                        rows={this.state.rows} 
                        rowTemplate={this.currentRowTemplate}
                        showFooter={false}
                        showHeader={false}
                        size={this.state.ctrlSize}
                        theme={this.state.currentTheme}
                    ></IntegralUIGridComponent>
                    <div className="feature-help">
                        <p><span className="initial-space"></span>An example of Grid component that act as a ListBox. The column header and footer are hidden and templates are used to add custom HTML content in grid cells.</p>
                        <p><span className="initial-space"></span>On first look, you cannot tell whether the above control is a Grid or a ListBox. By CSS modifications and templates, the Grid appears as a simple list. In this example, we have chosen to show a list of device drivers.</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default GridAsListBox;
