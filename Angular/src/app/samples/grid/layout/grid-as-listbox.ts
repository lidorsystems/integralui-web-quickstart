import { Component } from '@angular/core';
import { html } from 'integralui-web/external/lit-element';

import 'integralui-web/components/integralui.grid';
import { IntegralUIEditorType, IntegralUITheme } from 'integralui-web/components/integralui.enums';
import { iuiGridAsListBoxStyle } from './grid-as-listbox.style';

@Component({
    selector: '',
    templateUrl: './grid-as-listbox.html',
    styleUrls: ['./grid-as-listbox.css']
})
export class GridAsListBox {
    public columns: Array<any> = [];
    public ctrlSize: any = { width: 800, height: 300};
    public currentResourcePath: string = 'assets/icons';
    public currentTheme: IntegralUITheme = IntegralUITheme.Office;
    public customStyle: any = iuiGridAsListBoxStyle;
    public rows: Array<any> = [];

    constructor(){
        this.columns = [
            { id: 1, editorType: IntegralUIEditorType.CheckBox, fixedWidth: true, headerAlignment: "center", width: 30 },
            { id: 2, headerText: "Name", width: 300 },
            { id: 3, headerText: "Version", contentAlignment: 'center', width: 120 },
            { id: 4, headerText: "Date", contentAlignment: 'center', width: 110 },
            { id: 5, width: 90, contentAlignment: 'center' }
        ];

        this.rows = [
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
        ];
    }

    // Templates -----------------------------------------------------------------------------

    currentRowTemplate = (row: any, cell: any) => { 
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

    getCellById(row: any, id: any){
        let filtered = row.cells.filter((cell: any) => cell.cid === id);

        return filtered.length > 0 ? filtered[0] : null;
    }

    updateDriver(row: any){
        let driverInfoCell = this.getCellById(row, 2);

        if (driverInfoCell)
            alert("Update Driver for " + driverInfoCell.driverName);
    }
}
