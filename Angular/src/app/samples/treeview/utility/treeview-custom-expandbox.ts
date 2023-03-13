import { Component, ElementRef, ViewChild } from '@angular/core';
import { html } from 'integralui-web/external/lit-element';

import 'integralui-web/components/integralui.treeview';
import { IntegralUITheme } from 'integralui-web/components/integralui.enums';
import { iuiTreeViewCustomExpandBoxStyle } from './treeview-custom-expandbox.style';

@Component({
    selector: '',
    templateUrl: './treeview-custom-expandbox.html',
    styleUrls: ['./treeview-custom-expandbox.css']
})
export class TreeViewCustomExpandBox {

    // TreeView
    public ctrlSize: any = { width: 350, height: 300 }
    public currentResourcePath: string = 'assets/icons';
    public currentTheme: IntegralUITheme = IntegralUITheme.Office;
    public items: Array<any> = [];
    public treeStyle: any = iuiTreeViewCustomExpandBoxStyle;

    constructor(){
        this.items = [
            { 
                id: 1,
                text: "Favorites",
                items: [
                    { id: 11, pid: 1, text: "Desktop" },
                    { id: 12, pid: 1, text: "Downloads" }
                ]
            },
            { 
                id: 2,
                text: "Libraries",
                items: [
                    { 
                        id: 21, 
                        pid: 2, 
                        text: "Documents", 
                        expanded: false,
                        locked: true,
                        style: {
                            expandBox: {
                                backgroundPosition: '-168px -144px'
                            }
                        },
                        items: [
                            { id: 211, pid: 21, text: "My Documents" },
                            { id: 212, pid: 21, text: "Public Documents" }
                        ]
                    },
                    { id: 22, pid: 2, text: "Music" },
                    { id: 23, pid: 2, text: "Pictures" },
                    { id: 24, pid: 2, text: "Videos" }
                ]
            },
            { 
                id: 3,
                text: "Computer",
                items: [
                    { id: 31, pid: 3, text: "Local Disk (C:)" },
                    { id: 32, pid: 3, text: "Storage (D:)" }
                ]
            },
            { id: 4, text: "Network" },
            { id: 5, text: "Recycle Bin" }
        ];
    }

    currentItemTemplate = (item: any) => { 
        return html`
            <div>
                <span class="iui-item-label">${item.text}</span>
            </div>
        `;
    };

    // Prevent expanding of items that are locked
    onBeforeExpand(e: any){
        if (e.detail.item && e.detail.item.locked === true)
            e.detail.cancel = true;
    }
}
