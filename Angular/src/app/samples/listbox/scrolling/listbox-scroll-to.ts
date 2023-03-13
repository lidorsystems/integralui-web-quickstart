import { Component, ElementRef, ViewChild } from '@angular/core';

import 'integralui-web/components/integralui.listbox';
import 'integralui-web/components/integralui.radiobutton';
import 'integralui-web/components/integralui.radiogroup';
import 'integralui-web/components/integralui.select';
import { IntegralUIComponentAppearance, IntegralUITheme } from 'integralui-web/components/integralui.enums';

@Component({
    selector: '',
    templateUrl: './listbox-scroll-to.html',
    styleUrls: ['./listbox-scroll-to.css']
})
export class ListBoxScrollTo {

    // ListBox
    @ViewChild('listbox', { static: false }) listbox!: ElementRef;

    public ctrlSize: any = { width: 350, height: 300 }
    public currentResourcePath: string = 'assets/icons';
    public currentScrollAppearance: IntegralUIComponentAppearance = IntegralUIComponentAppearance.Static;
    public currentTheme: IntegralUITheme = IntegralUITheme.Office;
    public items: Array<any> = [];

    // Initialization ----------------------------------------------------------------------------

    constructor(){
        this.items = [
            { id: 11, text: "Milk", group: "Dairy" },
            { id: 12, text: "Butter", group: "Dairy" },
            { id: 13, text: "Cheese", group: "Dairy" },
            { id: 14, text: "Yogurt", group: "Dairy" },
            { id: 211, text: "BlackBerries", group: "Fruits" },
            { id: 212, text: "CranBerries", group: "Fruits" },
            { id: 213, text: "StrawBerries", group: "Fruits" },
            { id: 241, text: "Oranges", group: "Fruits" },
            { id: 242, text: "Lemons", group: "Fruits" },
            { id: 261, text: "Avocados", group: "Fruits" },
            { id: 262, text: "Bananas", group: "Fruits" },
            { id: 263, text: "Dates", group: "Fruits" },
            { id: 31, text: "Barley", group: "Grains" },
            { id: 32, text: "Farro", group: "Grains" },
            { id: 33, text: "Millet", group: "Grains" },
            { id: 34, text: "Rice", group: "Grains" },
            { id: 41, text: "Beef", group: "Meat" },
            { id: 42, text: "Chicken", group: "Meat" },
            { id: 43, text: "Turkey", group: "Meat" },
            { id: 44, text: "Pork", group: "Meat" },
            { id: 45, text: "Lamb", group: "Meat" },
            { id: 51, text: "Biscuits", group: "Sweets" },
            { id: 52, text: "Cakes", group: "Sweets" },
            { id: 53, text: "Candies", group: "Sweets" },
            { id: 54, text: "Muffins", group: "Sweets" },
            { id: 55, text: "Pastries", group: "Sweets" },
            { id: 61, text: "Asparagus", group: "Vegetables" },
            { id: 62, text: "Broccoli", group: "Vegetables" },
            { id: 63, text: "Carrots", group: "Vegetables" },
            { id: 64, text: "Corn", group: "Vegetables" },
            { id: 65, text: "Lettuce", group: "Vegetables" },
            { id: 66, text: "Onions", group: "Vegetables" },
            { id: 67, text: "Pumpkin", group: "Vegetables" },
            { id: 68, text: "Tomatoes", group: "Vegetables" },
            { id: 69, text: "Zucchini", group: "Vegetables" }
        ];
    }

    // Events ------------------------------------------------------------------------------------

    scrollToChanged(e: any){
        let item = e.detail.item;

        this.listbox.nativeElement.scrollTo(item);
        this.listbox.nativeElement.selectedItem = item;
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
}
