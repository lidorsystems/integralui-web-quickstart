import { Component, ElementRef, ViewChild } from '@angular/core';
import { html } from 'integralui-web/external/lit-element';
import { classMap } from 'integralui-web/external/class-map';

import 'integralui-web/components/integralui.select';
import 'integralui-web/components/integralui.treeview';
import { IntegralUIItemDisplayMode, IntegralUITheme } from 'integralui-web/components/integralui.enums';
import { iuiTreeViewItemsDropDownStyle } from './treeview-items-dropdown.style';

@Component({
    selector: '',
    templateUrl: './treeview-items-dropdown.html',
    styleUrls: ['./treeview-items-dropdown.css']
})
export class TreeViewItemsDropDown {

    // TreeView
    public ctrlSize: any = { width: 475, height: 400 }
    public currentItemDisplay: IntegralUIItemDisplayMode = IntegralUIItemDisplayMode.Full;
    public currentResourcePath: string = 'assets/icons';
    public currentTheme: IntegralUITheme = IntegralUITheme.Office;
    public items: Array<any> = [];
    public treeStyle: any = iuiTreeViewItemsDropDownStyle;

    private activeItem: any = null;

    constructor(){
        this.items = [
            { 
                id: 1,
                text: "Paper/Output",
                icon: { "trw-items-dd-icons-medium": true, "trw-items-dd-icon-paper": true },
                items: [
                    { 
                        id: 11, 
                        pid: 1, 
                        text: "Paper Size: ", 
                        value: "Letter",
                        options: [
                            { text: "16K" },
                            { text: "A4" },
                            { text: "A5" },
                            { text: "A6" },
                            { text: "B5" },
                            { text: "Envelope #10" },
                            { text: "Envelope B5" },
                            { text: "Envelope C5" },
                            { text: "Envelope DL" },
                            { text: "Envelope Monarch" },
                            { text: "Executive" },
                            { text: "Folio" },
                            { text: "Legal" },
                            { text: "Letter" }
                        ],
                        dropDownWidth: 180
                    },
                    { id: 12, pid: 1, text: "Copy Count: ", value: 1, tag: "Copy" }
                ]
            },
            { 
                id: 2,
                text: "Graphics",
                expanded: false,
                icon: { "trw-items-dd-icons-medium": true, "trw-items-dd-icon-graphics": true },
                items: [
                    { 
                        id: 21, 
                        pid: 2, 
                        text: "Print Quality: ", 
                        value: "600x600 dots per inch",
                        options: [
                            { text: "600x600 dots per inch" },
                            { text: "300x300 dots per inch" }
                        ],
                        dropDownWidth: 200
                    },
                    { 
                        id: 22, 
                        pid: 2, 
                        text: "True Type Font: ", 
                        value: "Substitute with Device Font",
                        options: [
                            { text: "Substitute with Device Font" },
                            { text: "Download as Soft Font" }
                        ],
                        dropDownWidth: 230
                    },
                ]
            },
            { 
                id: 3,
                text: "Documents Options",
                icon: { "trw-items-dd-icons-medium": true, "trw-items-dd-icon-tools": true },
                items: [
                    { 
                        id: 31, 
                        pid: 3, 
                        text: "Advanced Printing Features: ", 
                        value: "Enabled",
                        options: [
                            { text: "Enabled" },
                            { text: "Disabled" }
                        ],
                        dropDownWidth: 100
                    },
                    { 
                        id: 32, 
                        pid: 3, 
                        text: "Halftoning: ", 
                        value: "AutoSelect",
                        options: [
                            { text: "AutoSelect" },
                            { text: "Dither 6x6" },
                            { text: "Dither 8x8" }
                        ],
                        dropDownWidth: 125
                    },
                    { 
                        id: 33, 
                        pid: 3, 
                        text: "Print Optimizations: ", 
                        value: "Enabled",
                        options: [
                            { text: "Enabled" },
                            { text: "Disabled" }
                        ],
                        dropDownWidth: 100
                    },
                    { 
                        id: 34, 
                        pid: 3, 
                        text: "Printer Features: ", 
                        icon: { "trw-items-dd-icons-medium": true, "trw-items-dd-icon-features": true },
                        items: [
                            { 
                                id: 341, 
                                pid: 34, 
                                text: "Optimize for: ", 
                                value: "Plain",
                                options: [
                                    { text: "Bond" },
                                    { text: "Cardstock" },
                                    { text: "Envelope" },
                                    { text: "Heavy" },
                                    { text: "Labels" },
                                    { text: "Plain" },
                                    { text: "Rough" },
                                    { text: "Thin" },
                                    { text: "Transparency" }
                                ],
                                dropDownWidth: 150
                            },
                            { 
                                id: 342, 
                                pid: 34, 
                                text: "Economode: ", 
                                value: "Off",
                                options: [
                                    { text: "Off" },
                                    { text: "On" }
                                ],
                                dropDownWidth: 60
                            }
                        ]
                    }
                ]
            }
        ];
    }

    currentItemTemplate = (item: any) => { 
        return html`
            <div @mousedown="${(e: any) => this.itemClicked(e, item)}">
                <span class=${classMap(this.getItemIcon(item))}"></span>
                <span class="trw-items-dd-item-label">${item.text}</span>
                ${this.getItemLayout(item)}
            </div>
        `;
    };

    getItemLayout(item: any){
        if (item !== this.activeItem)
            switch (item.id){
                case 12:
                    return html`<span class="trw-items-dd-item-value">
                            ${item.value}
                            ${item.value === 1
                                ? html`<span>Copy</span>`
                                : html`<span>Copies</span>`
                            }
                        </span>`;

                default:
                    return html`<span class="trw-items-dd-item-value" >${item.value}</span>`;
            }
        else
            switch (item.id){
                case 12:
                    return html`<input type="number" .value="${item.value}" @change="${(e: any) => this.itemInputChanged(e, item)}" />`;

                default:
                    return html`<iui-select 
                            .allowAnimation="true"
                            .customStyle="${iuiTreeViewItemsDropDownStyle}"
                            .items="${item.options}"
                            .selectedItem="${this.getDropDownSelection(item)}"
                            .size="${{ width: item.dropDownWidth }}"
                            @selectionChanged="${(e: any) => this.itemOptionSelected(e, item)}"
                        ></iui-select>`;
            }
    }

    getDropDownSelection(item: any){
        let found = null;

        if (item.options)
            for (let i = 0; i < item.options.length; i++){
                if (item.options[i].text === item.value){
                    found = item.options[i];
                    break;
                }
            }

        return found;
    }

    getItemIcon(item: any){
        return item.icon ? item.icon : { 'trw-items-dd-icons-medium': true, 'trw-items-dd-icon-empty': true };
    }

    itemClicked(e: any, item: any){
        this.activeItem = item.items ? null : item;
    }

    itemInputChanged(e: any, item: any){
        item.value = e.target.value;
    }

    itemOptionSelected(e: any, item: any){
        item.value = e.detail.item.text;
        this.activeItem = null;
    }
}
