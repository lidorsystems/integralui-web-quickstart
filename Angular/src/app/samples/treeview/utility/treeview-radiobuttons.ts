import { Component, ElementRef, ViewChild } from '@angular/core';

import 'integralui-web/components/integralui.radiobutton';
import 'integralui-web/components/integralui.treeview';
import { IntegralUITheme } from 'integralui-web/components/integralui.enums';

@Component({
    selector: '',
    templateUrl: './treeview-radiobuttons.html',
    styleUrls: ['./treeview-radiobuttons.css']
})
export class TreeViewRadioButtons {

    // TreeView
    public ctrlSize: any = { width: 350, height: 300 }
    public currentResourcePath: string = 'assets/icons';
    public currentTheme: IntegralUITheme = IntegralUITheme.Office;
    public items: Array<any> = [];

    constructor(){
        this.items = [
            { 
                id: 1,
                text: "Favorites",
                items: [
                    { id: 11, pid: 1, text: "Desktop", allowRadioButton: true },
                    { id: 12, pid: 1, text: "Downloads", allowRadioButton: true, checked: true }
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
                        allowRadioButton: true,
                        expanded: false,
                        items: [
                            { id: 211, pid: 21, text: "My Documents", allowRadioButton: true, checked: true },
                            { id: 212, pid: 21, text: "Public Documents", allowRadioButton: true }
                        ]
                    },
                    { id: 22, pid: 2, text: "Music", allowRadioButton: true },
                    { id: 23, pid: 2, text: "Pictures", allowRadioButton: true, checked: true },
                    { id: 24, pid: 2, text: "Videos", allowRadioButton: true }
                ]
            },
            { 
                id: 3,
                text: "Computer",
                checked: true,
                items: [
                    { id: 31, pid: 3, text: "Local Disk (C:)", allowRadioButton: true },
                    { id: 32, pid: 3, text: "Storage (D:)", allowRadioButton: true, checked: true }
                ]
            },
            { id: 4, text: "Network" },
            { id: 5, text: "Recycle Bin" }
        ];
    }

    onItemRadioChecked(e: any){
        console.log(e.detail.item.text + " is now " + e.detail.checked);
    }
}
