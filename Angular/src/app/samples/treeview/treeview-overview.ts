import { Component, ElementRef, ViewChild } from '@angular/core';
import { html } from 'integralui-web/external/lit-element';

import 'integralui-web/components/integralui.treeview';
import { IntegralUIItemDisplayMode, IntegralUISelectionMode, IntegralUITheme } from 'integralui-web/components/integralui.enums';
import { iuiTreeViewOverviewStyle } from './treeview-overview.style';

@Component({
    selector: '',
    templateUrl: './treeview-overview.html',
    styleUrls: ['./treeview-overview.css']
})
export class TreeViewOverview {
    @ViewChild('treeview', { static: false }) treeview!: ElementRef;

    public ctrlSize: any = { width: 350, height: 300 };
    public currentResourcePath: string = 'assets/icons';
    public currentSelectionMode: IntegralUISelectionMode = IntegralUISelectionMode.MultiExtended;
    public currentTheme: IntegralUITheme = IntegralUITheme.Office;
    public customStyle: any = iuiTreeViewOverviewStyle;
    public displayMode: IntegralUIItemDisplayMode = IntegralUIItemDisplayMode.Full;
    public items: Array<any> = [];

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
