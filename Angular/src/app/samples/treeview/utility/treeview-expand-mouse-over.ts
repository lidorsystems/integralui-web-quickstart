import { Component, ElementRef, ViewChild } from '@angular/core';

import 'integralui-web/components/integralui.treeview';
import { IntegralUITheme } from 'integralui-web/components/integralui.enums';

@Component({
    selector: '',
    templateUrl: './treeview-expand-mouse-over.html',
    styleUrls: ['./treeview-expand-mouse-over.css']
})
export class TreeViewExpandMouseOver {

    // TreeView
    @ViewChild('treeview', { static: false }) treeview!: ElementRef;

    public ctrlSize: any = { width: 350, height: 300 }
    public currentResourcePath: string = 'assets/icons';
    public currentTheme: IntegralUITheme = IntegralUITheme.Office;
    public items: Array<any> = [];

    private expandTimer: any = null;

    constructor(){
        this.items =[
            { 
                id: 1,
                text: "Favorites",
                expanded: false,
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
                expanded: false,
                items: [
                    { id: 31, pid: 3, text: "Local Disk (C:)"},
                    { id: 32, pid: 3, text: "Storage (D:)"}
                ]
            },
            { id: 4, text: "Network" },
            { id: 5, text: "Recycle Bin" }
        ];
    }

    // Expand item on mouse over after a delay of 500ms
    resetExpandTImer(){
        if (this.expandTimer)
            clearTimeout(this.expandTimer);

            this.expandTimer = null;
    }

    onItemHover(e: any){
        let self = this;

        self.resetExpandTImer();

        self.expandTimer = setTimeout(function(){
            self.treeview.nativeElement.expand(e.detail.item);

            clearTimeout(self.expandTimer);
        }, 500);
    }
}
