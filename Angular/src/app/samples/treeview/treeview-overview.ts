/*
  Copyright © 2016-2020 Lidor Systems. All rights reserved.

  This file is part of the "IntegralUI Web" Library. 
                                                                   
  The contents of this file are subject to the IntegralUI Web License, and may not be used except in compliance with the License.
  A copy of the License should have been installed in the product's root installation directory or it can be found at
  http://www.lidorsystems.com/products/web/studio/license-agreement.aspx.
                                                            
  This SOFTWARE is provided "AS IS", WITHOUT WARRANTY OF ANY KIND, either express or implied. See the License for the specific language 
  governing rights and limitations under the License. Any infringement will be prosecuted under applicable laws.                           
*/

import { Component, ElementRef, ViewChild } from '@angular/core';
import { html } from 'integralui-web/external/lit-element.js';

import 'integralui-web/components/integralui.treeview.js';
import { IntegralUIItemDisplayMode, IntegralUISelectionMode, IntegralUITheme } from 'integralui-web/components/integralui.enums.js';
import { iuiTreeViewOverviewStyle } from './treeview-overview.style.js';

@Component({
    selector: '',
    templateUrl: './treeview-overview.html',
    styleUrls: ['./treeview-overview.css']
})
export class TreeViewOverviewSample {
    @ViewChild('treeview', { static: false }) treeview: ElementRef;

    public ctrlSize: any = { width: 350, height: 300 };
    public currentResourcePath: string = 'assets/integralui-web/icons';
    public currentSelectionMode: IntegralUISelectionMode = IntegralUISelectionMode.MultiExtended;
    public currentTheme: IntegralUITheme = IntegralUITheme.Office;
    public customStyle: any = iuiTreeViewOverviewStyle;
    public displayMode: IntegralUIItemDisplayMode = IntegralUIItemDisplayMode.Full;
    public items: Array<any> = [];

    //
    // Currently when using templates, the LitElement binding syntax is required
    // for properties, methods and events
    //
    public currentItemTemplate = (item: any) => { 
        return html`
            <div>
                <span class="computer-icons ${item.icon}"></span>
                <span>${item.text}</span>
            </div>
        `;
    };

    public currentItemHoverTemplate = (item: any) => { 
        return html`
            <div class="trw-ovw-toolbar">
                <span class="trw-ovw-toolitem-button item-button-delete" @click="${() => this.deleteItem(item)}"></span>
            </div>
        `;
    };

    constructor(){
        this.items = [
            { 
                id: 1,
                text: "Favorites",
                icon: "favorites",
                items: [
                    { id: 11, pid: 1, text: "Desktop", icon: "empty-doc" },
                    { id: 12, pid: 1, text: "Downloads", icon: "downloads", checkState: "checked" }
                ]
            },
            { 
                id: 2,
                text: "Libraries",
                icon: "folder",
                expanded: false,
                items: [
                    { 
                        id: 21, 
                        pid: 2, 
                        text: "Documents", 
                        icon: "documents",
                        expanded: false,
                        checkState: "checked",
                        items: [
                            { id: 211, pid: 21, text: "My Documents", icon: "empty-doc", checkState: "checked" },
                            { id: 212, pid: 21, text: "Public Documents", icon: "empty-doc", checkState: "checked" }
                        ]
                    },
                    { id: 22, pid: 2, text: "Music", icon: "music" },
                    { id: 23, pid: 2, text: "Pictures", icon: "pictures", checkState: "checked" },
                    { id: 24, pid: 2, text: "Videos", icon: "videos" }
                ]
            },
            { 
                id: 3,
                text: "Computer",
                icon: "pc",
                checkState: "checked",
                items: [
                    { id: 31, pid: 3, text: "Local Disk (C:)", icon: "disk", checkState: "checked" },
                    { id: 32, pid: 3, text: "Storage (D:)", icon: "disk", checkState: "checked" }
                ]
            },
            { id: 4, text: "Network", icon: "network" },
            { id: 5, text: "Recycle Bin", icon: "recycle" }
        ];
    } 

    ngAfterViewInit(){
        this.treeview.nativeElement.itemTemplate = this.currentItemTemplate;
        this.treeview.nativeElement.itemHoverTemplate = this.currentItemHoverTemplate;
    }

    deleteItem(item: any){
        this.treeview.nativeElement.removeItem(item);
        this.treeview.nativeElement.updateLayout();
    }
}
