import { Component, ElementRef, ViewChild } from '@angular/core';

import 'integralui-web/components/integralui.button';
import 'integralui-web/components/integralui.treeview';
import { IntegralUISelectionMode, IntegralUITheme } from 'integralui-web/components/integralui.enums';

@Component({
    selector: '',
    templateUrl: './treeview-fast-load.html',
    styleUrls: ['./treeview-fast-load.css']
})
export class TreeViewFastLoad {

    // TreeView
    @ViewChild('treeview', { static: false }) treeview!: ElementRef;

    public ctrlSize: any = { width: 350, height: 300 };
    public currentResourcePath: string = 'assets/icons';
    public currentSelectionMode: IntegralUISelectionMode = IntegralUISelectionMode.One;
    public currentTheme: IntegralUITheme = IntegralUITheme.Office;
    public items: Array<any> = [];

    public itemCount: number = 0;
    public numItems: number = 50000;
    public numLevels: number = 3;

    onAddClicked(){
        this.treeview.nativeElement.suspendLayout();

        this.onClearClicked();
        this.addItems(null, 0);

        this.treeview.nativeElement.resumeLayout();
    }

    onClearClicked(){
        this.itemCount = 0;

        this.treeview.nativeElement.clearItems();
        this.treeview.nativeElement.updateLayout();
    }

    onExpandAllClicked(){
        this.treeview.nativeElement.expand();
    }

    onCollapseAllClicked(){
        this.treeview.nativeElement.collapse();
    }

    addItems(parent: any, level: number){
        if (level > this.numLevels)
            return;
            
        let numChilds = this.getRandomNumber(level);    
        for (let i = 0; i < numChilds; i++){
            if (this.itemCount < this.numItems){
                let item = {
                    text : 'Item ' + (this.itemCount + 1).toString(),
                    id: this.itemCount,
                    expanded : false,
                    items: []
                };

                this.treeview.nativeElement.addItem(item, parent);
                this.itemCount++;
            
                this.addItems(item, level + 1);
            }
        }
    }
            
    // Make sure each item has a random set of child items
    getRandomNumber(level: number){
        let nCount = 1 + Math.floor(Math.random() * 10);
        
        if (level === 0){
            if (this.numLevels === 0)
                nCount = this.numItems;
            else {
                let derivative = 1;
                for (let k = 1; k <= this.numLevels; k++)
                    derivative = (derivative * nCount) + 1;

                nCount = this.numItems / derivative + 1;
                if (nCount < 1000)
                    nCount = 1000;
            }
        }
        
        return nCount;
    }
}
