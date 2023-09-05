import { Component, ElementRef, ViewChild } from '@angular/core';

import 'integralui-web/components/integralui.button';
import 'integralui-web/components/integralui.listbox';
import { IntegralUISelectionMode, IntegralUITheme } from 'integralui-web/components/integralui.enums';

@Component({
    selector: '',
    templateUrl: './listbox-fast-load.html',
    styleUrls: ['./listbox-fast-load.css']
})
export class ListBoxFastLoad {

    // ListBox
    @ViewChild('listbox', { static: false }) listbox!: ElementRef;

    public ctrlSize: any = { width: 350, height: 300 };
    public currentResourcePath: string = 'assets/icons';
    public currentSelectionMode: IntegralUISelectionMode = IntegralUISelectionMode.One;
    public currentTheme: IntegralUITheme = IntegralUITheme.Office;
    public items: Array<any> = [];

    public itemCount: number = 0;
    public numItems: number = 50000;

    onAddClicked(){
        this.listbox.nativeElement.suspendLayout();

        this.onClearClicked();
        this.addItems();

        this.listbox.nativeElement.resumeLayout();
    }

    onClearClicked(){
        this.itemCount = 0;

        this.listbox.nativeElement.clearItems();
        this.listbox.nativeElement.updateLayout();
    }

    addItems(){
        let list = [];
        for (let i = 0; i < this.numItems; i++){
            let item = {
                id: i + 1,
                text : 'Item ' + (i + 1).toString()
            };

            list.push(item);
        }

        this.listbox.nativeElement.addItem(list);
    }
}
