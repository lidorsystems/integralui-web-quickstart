import { Component, ElementRef, ViewChild } from '@angular/core';
import { html } from 'integralui-web/external/lit-element';

import 'integralui-web/components/integralui.contextmenu';
import 'integralui-web/components/integralui.treeview';
import { IntegralUITheme } from 'integralui-web/components/integralui.enums';
import { iuiTreeViewContextMenuStyle } from './treeview-contextmenu.style';

@Component({
    selector: '',
    templateUrl: './treeview-contextmenu.html',
    styleUrls: ['./treeview-contextmenu.css']
})
export class TreeViewContexteMenu {

    // TreeView
    @ViewChild('treeview', { static: false }) treeview!: ElementRef;

    public ctrlSize: any = { width: 350, height: 300 }
    public currentResourcePath: string = 'assets/icons';
    public currentTheme: IntegralUITheme = IntegralUITheme.Office;
    public items: Array<any> = [];
    public treeStyle: any = iuiTreeViewContextMenuStyle;

    private itemCount: number = 0;

    // Context Menu
    public menuSettings: any = {
        items: [
            { id: 3, text: "Add Item" },
            { id: 4, text: "Add Child Item" },
            { id: 5, text: "Insert Item Before" },
            { id: 6, text: "Insert Item After" },
            { id: 7, type: "separator" },
            { id: 8, text: "Remove Item" }
        ]
    }

    constructor(){
        this.items = [
            { 
                id: 1,
                text: "Favorites",
                items: [
                    { id: 11, pid: 1, text: "Desktop" },
                    { id: 12, pid: 1, text: "Downloads"}
                ]
            },
            { 
                id: 2,
                text: "Libraries",
                expanded: false,
                items: [
                    { 
                        id: 21, 
                        pid: 2, 
                        text: "Documents", 
                        expanded: false,
                        items: [
                            { id: 211, pid: 21, text: "My Documents"},
                            { id: 212, pid: 21, text: "Public Documents"}
                        ]
                    },
                    { id: 22, pid: 2, text: "Music" },
                    { id: 23, pid: 2, text: "Pictures"},
                    { id: 24, pid: 2, text: "Videos" }
                ]
            },
            { 
                id: 3,
                text: "Computer",
                items: [
                    { id: 31, pid: 3, text: "Local Disk (C:)"},
                    { id: 32, pid: 3, text: "Storage (D:)"}
                ]
            },
            { id: 4, text: "Network" },
            { id: 5, text: "Recycle Bin" }
        ];
    }

    currentItemTemplate = (item: any) => { 
        return html`
            <iui-contextmenu
                .customStyle="${iuiTreeViewContextMenuStyle}"
                .enabled="${true}"
                .settings="${this.menuSettings}"
                .theme="${this.currentTheme}"
                @menuClick="${(e: any) => this.onMenuClick(e)}"
                @menuOpening="${() => this.onMenuOpening(item)}"
            >
                <div>
                    <span>${item.text}</span>
                </div>
            </iui-contextmenu>
        `;
    };

    // ContextMenu -------------------------------------------------------------------------------

    onMenuClick(e: any){
        if (e.detail.item){
            // Action depends on selected menu option
            switch (e.detail.item.id){
                case 3:
                    this.addItem();
                    break;

                case 4:
                    this.addChildItem();
                    break;

                case 5:
                    this.insertItemBefore();
                    break;

                case 6:
                    this.insertItemAfter();
                    break;

                case 8:
                    this.removeItem();
                    break;

                // no default
            }

            this.treeview.nativeElement.updateLayout();
        }
    }

    onMenuOpening(item: any){
        this.treeview.nativeElement.selectedItem = item;
    }

    // Add/Remove methods
    createNewItem(){
        this.itemCount++;

        // Create a new item object
        return { id: this.itemCount, text: "Item " + this.itemCount }
    }

    addItem(){
        let newItem = this.createNewItem();

        this.treeview.nativeElement.addItem(newItem);
    }

    addChildItem(){
        let newItem = this.createNewItem();

        this.treeview.nativeElement.addItem(newItem, this.treeview.nativeElement.selectedItem);
    }

    insertItemAfter(){
        let newItem = this.createNewItem();

        this.treeview.nativeElement.insertItemAfter(newItem, this.treeview.nativeElement.selectedItem);
    }

    insertItemBefore(){
        let newItem = this.createNewItem();

        this.treeview.nativeElement.insertItemBefore(newItem, this.treeview.nativeElement.selectedItem);
    }

    removeItem(){
        let selItem = this.treeview.nativeElement.selectedItem;
        if (selItem){
            let newSelItem = this.treeview.nativeElement.getPrevItem(selItem);
            if (!newSelItem)
                newSelItem = this.treeview.nativeElement.getNextItem(selItem);
            
            this.treeview.nativeElement.removeItem(selItem);
            this.treeview.nativeElement.selectedItem = newSelItem;
        }
    }
}
