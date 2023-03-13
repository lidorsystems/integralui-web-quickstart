import { Component, ElementRef, ViewChild } from '@angular/core';

import 'integralui-web/components/integralui.radiobutton';
import 'integralui-web/components/integralui.radiogroup';
import 'integralui-web/components/integralui.select';
import 'integralui-web/components/integralui.treeview';
import { IntegralUIComponentAppearance, IntegralUITheme } from 'integralui-web/components/integralui.enums';

@Component({
    selector: '',
    templateUrl: './treeview-scroll-to.html',
    styleUrls: ['./treeview-scroll-to.css']
})
export class TreeViewScrollTo {

    // TreeView
    @ViewChild('treeview', { static: false }) treeview!: ElementRef;

    public ctrlSize: any = { width: 350, height: 300 };
    public currentResourcePath: string = 'assets/icons';
    public currentScrollAppearance: IntegralUIComponentAppearance = IntegralUIComponentAppearance.Static;
    public currentTheme: IntegralUITheme = IntegralUITheme.Office;
    public items: Array<any> = [];

    // Select component
    public itemList:  Array<any> = [];

    // Initialization ----------------------------------------------------------------------------

    constructor(){
        this.items = [
            { 
                id: 1,
                text: "Favorites",
                items: [
                    { id: 11, pid: 1, text: "Desktop" },
                    { id: 12, pid: 1, text: "Downloads", checkState: "Checked" }
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
                        checkState: "Checked",
                        items: [
                            { id: 211, pid: 21, text: "My Documents", checkState: "Checked" },
                            { id: 212, pid: 21, text: "Public Documents", checkState: "Checked" }
                        ]
                    },
                    { id: 22, pid: 2, text: "Music" },
                    { id: 23, pid: 2, text: "Pictures", checkState: "Checked" },
                    { id: 24, pid: 2, text: "Videos" }
                ]
            },
            { 
                id: 3,
                text: "Computer",
                checkState: "Checked",
                items: [
                    { id: 31, pid: 3, text: "Local Disk (C:)", checkState: "Checked" },
                    { id: 32, pid: 3, text: "Storage (D:)", checkState: "Checked" }
                ]
            },
            { id: 4, text: "Network" },
            { id: 5, text: "Recycle Bin" }
        ];
    }

    // Events ------------------------------------------------------------------------------------

    scrollToChanged(e: any){
        let item = e.detail.item;

        this.treeview.nativeElement.scrollTo(item);
        this.treeview.nativeElement.selectedItem = item;
    }

    onScrollAppearanceChecked(e: any){
        switch (e.detail.index){
            case 1: 
                this.currentScrollAppearance = IntegralUIComponentAppearance.Dynamic;
                break;

            default: 
                this.currentScrollAppearance = IntegralUIComponentAppearance.Static;
                break;
        }
    }

    // Update the item list to Select component
    onUpdateComplete(e: any){
        this.itemList = this.treeview.nativeElement.getFullList();
    }
}
