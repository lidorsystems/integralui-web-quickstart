import { Component, ElementRef, ViewChild } from '@angular/core';

import 'integralui-web/components/integralui.button';
import 'integralui-web/components/integralui.dropdownfilter';
import 'integralui-web/components/integralui.listview';
import { IntegralUITheme } from 'integralui-web/components/integralui.enums';

@Component({
    selector: '',
    templateUrl: './listview-filtering-overview.html',
    styleUrls: ['./listview-filtering-overview.css']
})
export class ListViewFilteringOverview {

    // ListView
    @ViewChild('listview', { static: false }) listview!: ElementRef;

    public ctrlSize: any = { width: 350, height: 300 }
    public currentItemSize: any = { width: 150, height: 32 }
    public currentResourcePath: string = 'assets/icons';
    public currentTheme: IntegralUITheme = IntegralUITheme.Office;
    public items: Array<any> = [];

    // DropDown Filter
    private currentFilterOperation: string = '[]';
    private currentFilterValue: string = '';

    public filterAdjustment: any = { left: 280, top: -1 }
    public filterSize: any = { width: 292 }

    // Initialization ----------------------------------------------------------------------------

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

    // Filtering ---------------------------------------------------------------------------------

    applyFilter(){
        // Filter ListView based on selected operation and value
        if (this.currentFilterValue){
            let params: any = {
                caseSensitive: false,
                conditions: { 
                    value: this.currentFilterValue,
                    operation: this.currentFilterOperation
                }
            }

            this.listview.nativeElement.filter(params);
        }
        // Reset the filter by excluding the parameter
        else
            this.listview.nativeElement.filter();
    }

    onFilterChange(e: any){
        this.currentFilterValue = e.detail.value;
    }

    onFilterClicked(){
        this.applyFilter();
    }

    onFilterOperationChanged(e: any){
        this.currentFilterOperation = e.detail.operation;
    }

    onFilterValueChanged(e: any){
        this.currentFilterOperation = e.detail.filter.operation;
        this.currentFilterValue = e.detail.value;

        this.applyFilter();
    }
}
