import { Component, ElementRef, ViewChild } from '@angular/core';

import 'integralui-web/components/integralui.button';
import 'integralui-web/components/integralui.dropdownfilter';
import 'integralui-web/components/integralui.treeview';
import { IntegralUITheme } from 'integralui-web/components/integralui.enums';

@Component({
    selector: '',
    templateUrl: './treeview-filtering-overview.html',
    styleUrls: ['./treeview-filtering-overview.css']
})
export class TreeViewFilteringOverview {

    // TreeView
    @ViewChild('treeview', { static: false }) treeview!: ElementRef;

    public ctrlSize: any = { width: 350, height: 300 };
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

    // Filtering ---------------------------------------------------------------------------------

    applyFilter(){
        // Filter TreeView based on selected operation and value
        if (this.currentFilterValue){
            let params: any = {
                allowParent: true,
                caseSensitive: false,
                conditions: { 
                    value: this.currentFilterValue,
                    operation: this.currentFilterOperation
                }
            }

            this.treeview.nativeElement.filter(params);
        }
        // Reset the filter by excluding the parameter
        else
            this.treeview.nativeElement.filter();
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
