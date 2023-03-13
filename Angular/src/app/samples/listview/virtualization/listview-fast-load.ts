import { Component, ElementRef, ViewChild } from '@angular/core';

import 'integralui-web/components/integralui.button';
import 'integralui-web/components/integralui.listview';
import { IntegralUIScrollMode, IntegralUISelectionMode, IntegralUITheme } from 'integralui-web/components/integralui.enums';

@Component({
    selector: '',
    templateUrl: './listview-fast-load.html',
    styleUrls: ['./listview-fast-load.css']
})
export class ListViewFastLoad {

    // ListView
    @ViewChild('listview', { static: false }) listview!: ElementRef;

    public ctrlSize: any = { width: 500, height: 300 }
    public currentItemSize: any = { width: 150, height: 32 }
    public currentResourcePath: string = 'assets/icons';
    public currentScrollMode: IntegralUIScrollMode = IntegralUIScrollMode.Vertical;
    public currentSelectionMode: IntegralUISelectionMode = IntegralUISelectionMode.One;
    public currentTheme: IntegralUITheme = IntegralUITheme.Office;
    public items: Array<any> = [];

    public itemCount: number = 0;
    public numItems: number = 50000;

    onAddClicked(){
        this.listview.nativeElement.suspendLayout();

        this.onClearClicked();
        this.addItems();

        this.listview.nativeElement.resumeLayout();
    }

    onClearClicked(){
        this.itemCount = 0;

        this.listview.nativeElement.clearItems();
        this.listview.nativeElement.updateLayout();
    }

    addItems(){
        for (let i = 0; i < this.numItems; i++){
            let item = {
                id: i + 1,
                text : 'Item ' + (i + 1).toString()
            };

            this.listview.nativeElement.addItem(item);
        }
    }

    onScrollingChecked(e: any){
        switch (e.detail.index){
            case 1: 
                this.currentScrollMode = IntegralUIScrollMode.Vertical;
                break;

            default: 
                this.currentScrollMode = IntegralUIScrollMode.Horizontal;
                break;
        }
    }
}
