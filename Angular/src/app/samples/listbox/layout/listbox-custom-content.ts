import { Component, ElementRef, ViewChild } from '@angular/core';
import { html } from 'integralui-web/external/lit-element';
import { classMap } from 'integralui-web/external/class-map';

import 'integralui-web/components/integralui.button';
import 'integralui-web/components/integralui.listbox';
import { IntegralUITheme } from 'integralui-web/components/integralui.enums';
import { iuiListBoxCustomContentStyle } from './listbox-custom-content.style';

@Component({
    selector: '',
    templateUrl: './listbox-custom-content.html',
    styleUrls: ['./listbox-custom-content.css']
})
export class ListBoxCustomContent {

    // ListBox
    @ViewChild('listbox', { static: false }) listbox!: ElementRef;

    public ctrlSize: any = { width: 500, height: 240 }
    public currentResourcePath: string = 'assets/icons';
    public currentTheme: IntegralUITheme = IntegralUITheme.Office;
    public items: Array<any> = [];
    public listStyle: any = iuiListBoxCustomContentStyle;

    constructor(){
        this.items = [
            { 
                id: 1,
                category: 'Disk drives',
                date: '21 Jun 2022',
                driverName: 'TOSHIBA DT01ACA100 ATA Device',
                icon: 'disk',
                version: '6.1.7600.16385'
            },
            { 
                id: 2,
                checked: true,
                category: 'Display adapters',
                date: '05 Nov 2022',
                driverName: 'NVIDIA GeForce GT 730',
                icon: 'pc',
                version: '10.18.13.5891'
            },
            { 
                id: 3,
                category: 'Network',
                date: '17 Mar 2021',
                driverName: 'Realtek PCIe GBE Family Controller',
                icon: 'network',
                version: '7.82.317.2021'
            },
            { 
                id: 4,
                category: 'Sound',
                date: '14 Mar 2021',
                driverName: 'Realtek High Defintion Audio',
                icon: 'sound',
                version: '6.0.1.7200'
            },
            { 
                id: 5,
                category: 'Universal Serial Bus controllers',
                date: '12 Feb 2021',
                driverName: 'Intel USB 3.0 Root Hub',
                icon: 'usb',
                version: '3.0.0.16'
            }
        ];
    }

    // Templates ---------------------------------------------------------------------------------

    currentItemTemplate = (item: any) => { 
        return html`<div class="driver">
                <div class="driver-selection">
                    <span class=${classMap(this.getCheckBoxClass(item))} @mousedown="${(e: any) => this.checkItem(e, item)}"></span>
                </div>
                <div class="driver-info">
                    <span class="icons-medium ${item.icon}"></span>
                    <div class="driver-name">
                        <span class="driver-category">${item.category}</span><br/>
                        <span>${item.driverName}</span>
                    </div>
                </div>
                <div class="driver-action">
                    <iui-button allow-animation="true" .allowFocus="${false}" .customStyle="${iuiListBoxCustomContentStyle}" @click="${() => this.updateDriver(item)}">Update</iui-button>
                </div>
            </div>`;
    }
        
    // Methods -----------------------------------------------------------------------------------

    checkItem(e: any, item: any){
        if (e.which === 1 && item){
            item.checked = item.checked !== undefined ? !item.checked : true;
            this.listbox.nativeElement.refresh();
        }

        e.stopPropagation();
    }

    getCheckBoxClass(item: any){
        let cbClass: any = { 'lbox-item-cbox': true };

        if (item.checked)
            cbClass['lbox-item-cbox-checked'] = true;

        return cbClass;
    }

    updateDriver(item: any){
        alert("Update Driver for " + item.driverName);
    }
}
