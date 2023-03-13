import { Component, ElementRef, ViewChild } from '@angular/core';
import { html } from 'integralui-web/external/lit-element';

import 'integralui-web/components/integralui.contextmenu';
import 'integralui-web/components/integralui.listview';
import { IntegralUITheme } from 'integralui-web/components/integralui.enums';
import { iuiListViewContextMenuStyle } from './listview-contextmenu.style';

@Component({
    selector: '',
    templateUrl: './listview-contextmenu.html',
    styleUrls: ['./listview-contextmenu.css']
})
export class ListViewContexteMenu {

    // ListView
    @ViewChild('listview', { static: false }) listview!: ElementRef;

    public ctrlSize: any = { width: 350, height: 250 }
    public currentItemSize: any = { width: 150, height: 32 }
    public currentResourcePath: string = 'assets/icons';
    public currentTheme: IntegralUITheme = IntegralUITheme.Office;
    public items: Array<any> = [];
    public listStyle: any = iuiListViewContextMenuStyle;

    private itemCount: number = 0;

    // Context Menu
    public menuSettings: any = {
        items: [
            { id: 3, text: "Add Item" },
            { id: 5, text: "Insert Item Before" },
            { id: 6, text: "Insert Item After" },
            { id: 7, type: "separator" },
            { id: 8, text: "Remove Item" }
        ]
    }

    constructor(){
        this.items = [
            { id: 1, text: "Favorites" },
            { id: 2, text: "Libraries" },
            { id: 3, text: "Computer" },
            { id: 4, text: "Network" },
            { id: 5, text: "Recycle Bin" }
        ];
    }

    currentItemTemplate = (item: any) => { 
        return html`
            <iui-contextmenu
                .customStyle="${iuiListViewContextMenuStyle}"
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

            this.listview.nativeElement.updateLayout();
        }
    }

    onMenuOpening(item: any){
        this.listview.nativeElement.selectedItem = item;
    }

    // Add/Remove methods
    createNewItem(){
        this.itemCount++;

        // Create a new item object
        return { id: this.itemCount, text: "Item " + this.itemCount }
    }

    addItem(){
        let newItem = this.createNewItem();

        this.listview.nativeElement.addItem(newItem);
    }

    insertItemAfter(){
        let newItem = this.createNewItem();

        this.listview.nativeElement.insertItemAfter(newItem, this.listview.nativeElement.selectedItem);
    }

    insertItemBefore(){
        let newItem = this.createNewItem();

        this.listview.nativeElement.insertItemBefore(newItem, this.listview.nativeElement.selectedItem);
    }

    removeItem(){
        let selItem = this.listview.nativeElement.selectedItem;
        if (selItem){
            let newSelItem = this.listview.nativeElement.getPrevItem(selItem);
            if (!newSelItem)
                newSelItem = this.listview.nativeElement.getNextItem(selItem);
            
            this.listview.nativeElement.removeItem(selItem);
            this.listview.nativeElement.selectedItem = newSelItem;
        }
    }
}
