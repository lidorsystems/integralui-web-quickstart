import { Component, ElementRef, ViewChild } from '@angular/core';

import 'integralui-web/components/integralui.list';
import 'integralui-web/components/integralui.radiobutton';
import 'integralui-web/components/integralui.radiogroup';
import 'integralui-web/components/integralui.listview';
import { IntegralUISelectionMode, IntegralUITheme } from 'integralui-web/components/integralui.enums';

@Component({
    selector: '',
    templateUrl: './listview-multi-select.html',
    styleUrls: ['./listview-multi-select.css']
})
export class ListViewMultiSelect {

    // ListView
    @ViewChild('listview', { static: false }) listview!: ElementRef;

    public ctrlSize: any = { height: 300 };
    public currentResourcePath: string = 'assets/icons';
    public currentSelectionMode: IntegralUISelectionMode = IntegralUISelectionMode.One;
    public currentTheme: IntegralUITheme = IntegralUITheme.Office;
    public groups: Array<any> = [];
    public items: Array<any> = [];

    //
    // List settings
    //

    public listSize: any = { height: 300 }
    public selItems: Array<any> = [];

    ngAfterViewInit(){
        this.items = [
            { id: 11, text: "Milk" },
            { id: 12, text: "Butter" },
            { id: 13, text: "Cheese" },
            { id: 14, text: "Yogurt" },
            { id: 211, text: "BlackBerries" },
            { id: 212, text: "CranBerries" },
            { id: 213, text: "StrawBerries" },
            { id: 241, text: "Oranges" },
            { id: 242, text: "Lemons" },
            { id: 261, text: "Avocados" },
            { id: 262, text: "Bananas" },
            { id: 263, text: "Dates" },
            { id: 31, text: "Barley" },
            { id: 32, text: "Farro" },
            { id: 33, text: "Millet" },
            { id: 34, text: "Rice" },
            { id: 41, text: "Beef" },
            { id: 42, text: "Chicken" },
            { id: 43, text: "Turkey" },
            { id: 44, text: "Pork" },
            { id: 45, text: "Lamb" },
            { id: 51, text: "Biscuits" },
            { id: 52, text: "Cakes" },
            { id: 53, text: "Candies" },
            { id: 54, text: "Muffins" },
            { id: 55, text: "Pastries" },
            { id: 61, text: "Asparagus" },
            { id: 62, text: "Broccoli" },
            { id: 63, text: "Carrots" },
            { id: 64, text: "Corn" },
            { id: 65, text: "Lettuce" },
            { id: 66, text: "Onions" },
            { id: 67, text: "Pumpkin" },
            { id: 68, text: "Tomatoes" },
            { id: 69, text: "Zucchini" }
        ];
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
        let selList = this.listview.nativeElement.getList('selected');
        this.selItems = selList.map((item: any) => { return { id: item.id, text: item.text } });
    }
}
