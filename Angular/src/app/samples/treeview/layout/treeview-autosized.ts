import { Component, ElementRef, ViewChild } from '@angular/core';

import 'integralui-web/components/integralui.treeview';
import { IntegralUITheme } from 'integralui-web/components/integralui.enums';

@Component({
    selector: '',
    templateUrl: './treeview-autosized.html',
    styleUrls: ['./treeview-autosized.css']
})
export class TreeViewAutoSized {

    // TreeView
    public ctrlSize: any = { width: 350 };
    public currentResourcePath: string = 'assets/icons';
    public currentTheme: IntegralUITheme = IntegralUITheme.Office;
    public items: Array<any> = [];

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
                expanded: false,
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
}
