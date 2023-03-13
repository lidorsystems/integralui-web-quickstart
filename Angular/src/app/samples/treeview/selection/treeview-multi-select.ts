import { Component, ElementRef, ViewChild } from '@angular/core';

import 'integralui-web/components/integralui.list';
import 'integralui-web/components/integralui.radiobutton';
import 'integralui-web/components/integralui.radiogroup';
import 'integralui-web/components/integralui.treeview';
import { IntegralUISelectionMode, IntegralUITheme } from 'integralui-web/components/integralui.enums';

@Component({
    selector: '',
    templateUrl: './treeview-multi-select.html',
    styleUrls: ['./treeview-multi-select.css']
})
export class TreeViewMultiSelect {

    // TreeView
    @ViewChild('treeview', { static: false }) treeview!: ElementRef;

    public ctrlSize: any = { height: 300 };
    public currentResourcePath: string = 'assets/icons';
    public currentSelectionMode: IntegralUISelectionMode = IntegralUISelectionMode.One;
    public currentTheme: IntegralUITheme = IntegralUITheme.Office;
    public items: Array<any> = [];

    //
    // List settings
    //

    public listSize: any = { height: 300 }
    public selItems: Array<any> = [];

    ngAfterViewInit(){
        let flatData = [
            { id: 1, text: "Dairy", expanded: false },
            { id: 11, pid: 1, text: "Milk" },
            { id: 12, pid: 1, text: "Butter" },
            { id: 13, pid: 1, text: "Cheese" },
            { id: 14, pid: 1, text: "Yogurt" },
            { id: 2, text: "Fruits" },
            { id: 21, pid: 2, text: "Berries", expanded:  false},
            { id: 211, pid: 21, text: "BlackBerries" },
            { id: 212, pid: 21, text: "CranBerries" },
            { id: 213, pid: 21, text: "StrawBerries" },
            { id: 22, pid: 2, text: "Pits" },
            { id: 23, pid: 2, text: "Core" },
            { id: 24, pid: 2, text: "Citrus Fruits" },
            { id: 241, pid: 24, text: "Oranges" },
            { id: 242, pid: 24, text: "Lemons" },
            { id: 25, pid: 2, text: "Melons" },
            { id: 26, pid: 2, text: "Tropical Fruits", expanded: false },
            { id: 261, pid: 26, text: "Avocados" },
            { id: 262, pid: 26, text: "Bananas" },
            { id: 263, pid: 26, text: "Dates" },
            { id: 3, text: "Grains" },
            { id: 4, text: "Meat" },
            { id: 41, pid: 4, text: "Beef" },
            { id: 42, pid: 4, text: "Lamb", expanded: false },
            { id: 421, pid: 42, text: "Lamb Breast" },
            { id: 422, pid: 42, text: "Lamb Leg" },
            { id: 423, pid: 42, text: "Lamb Ribs" },
            { id: 43, pid: 4, text: "Pork" },
            { id: 5, text: "Sweets" },
            { id: 6, text: "Vegetables" },
            { id: 7, text: "Water" }
        ];

        this.treeview.nativeElement.loadData(flatData, null, null, true);
    }

    onMultiSelectChecked(e: any){
        switch (e.detail.index){
            case 1: 
                this.currentSelectionMode = IntegralUISelectionMode.One;
                break;

            case 2: 
                this.currentSelectionMode = IntegralUISelectionMode.MultiSimple;
                break;

            case 3: 
                this.currentSelectionMode = IntegralUISelectionMode.MultiExtended;
                break;

            default: 
                this.currentSelectionMode = IntegralUISelectionMode.None;
                break;
        }
    }

    // Change the list on selection
    onSelectionChanged(e: any){
        this.updateSelectedList();
    }

    updateSelectedList(){
        let list = this.treeview.nativeElement.getList('selected');
        this.selItems = list.map((item: any) => { return { id: item.id, text: item.text } });
    }
}
