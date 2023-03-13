import { Component, ElementRef, ViewChild } from '@angular/core';

import 'integralui-web/components/integralui.treeview';
import { IntegralUICheckMode, IntegralUITheme } from 'integralui-web/components/integralui.enums';

@Component({
    selector: '',
    templateUrl: './treeview-evenodd-items.html',
    styleUrls: ['./treeview-evenodd-items.css']
})
export class TreeViewEvenOdd {

    // TreeView
    @ViewChild('treeview', { static: false }) treeview!: ElementRef;

    public ctrlSize: any = { width: 350, height: 300 }
    public currentResourcePath: string = 'assets/icons';
    public currenCheckMode: IntegralUICheckMode = IntegralUICheckMode.ThreeState;
    public currentTheme: IntegralUITheme = IntegralUITheme.Office;
    public items: Array<any> = [];

    ngAfterViewInit(){
        let flatData = [
            { id: 1, text: "Dairy", expanded: false, checkState: "Checked" },
            { id: 11, pid: 1, text: "Milk" },
            { id: 12, pid: 1, text: "Butter" },
            { id: 13, pid: 1, text: "Cheese" },
            { id: 14, pid: 1, text: "Yogurt" },
            { id: 2, text: "Fruits" },
            { id: 21, pid: 2, text: "Berries", expanded:  false},
            { id: 211, pid: 21, text: "BlackBerries" },
            { id: 212, pid: 21, text: "CranBerries" },
            { id: 213, pid: 21, text: "StrawBerries" },
            { id: 22, pid: 2, text: "Pits", checkState: "Checked" },
            { id: 23, pid: 2, text: "Core" },
            { id: 24, pid: 2, text: "Citrus Fruits" },
            { id: 241, pid: 24, text: "Oranges", checkState: "Checked" },
            { id: 242, pid: 24, text: "Lemons" },
            { id: 25, pid: 2, text: "Melons" },
            { id: 26, pid: 2, text: "Tropical Fruits", expanded: false, checkState: "Checked" },
            { id: 261, pid: 26, text: "Avocados" },
            { id: 262, pid: 26, text: "Bananas" },
            { id: 263, pid: 26, text: "Dates" },
            { id: 3, text: "Grains" },
            { id: 4, text: "Meat" },
            { id: 41, pid: 4, text: "Beef" },
            { id: 42, pid: 4, text: "Lamb", expanded: false },
            { id: 421, pid: 42, text: "Lamb Breast" },
            { id: 422, pid: 42, text: "Lamb Leg", checkState: "Checked" },
            { id: 423, pid: 42, text: "Lamb Ribs" },
            { id: 43, pid: 4, text: "Pork" },
            { id: 5, text: "Sweets", checkState: "Checked" },
            { id: 6, text: "Vegetables" },
            { id: 7, text: "Water" }
        ];

        this.treeview.nativeElement.loadData(flatData, null, null, true);
    }

    // Set the styles for even/odd items
    onUpdateComplete(){
        let list = this.treeview.nativeElement.getFullList();

        list.forEach((item: any, index: number) => {
            if (index % 2 === 0)
                item.style = {
                    normal: { background: '#f5f5f5' }
                }
            else 
                item.style = {
                    normal: { background: '#e1e1e1' }
                }
             
            item.style.selected = { fontWeight: 'bold' }
        });

        this.treeview.nativeElement.refresh();
    }
}
