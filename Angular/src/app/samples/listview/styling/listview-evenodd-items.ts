import { Component, ElementRef, ViewChild } from '@angular/core';

import 'integralui-web/components/integralui.listview';
import { IntegralUITheme } from 'integralui-web/components/integralui.enums';

@Component({
    selector: '',
    templateUrl: './listview-evenodd-items.html',
    styleUrls: ['./listview-evenodd-items.css']
})
export class ListViewEvenOdd {

    // ListView
    @ViewChild('listview', { static: false }) listview!: ElementRef;

    public ctrlSize: any = { width: 600, height: 200 }
    public currentItemSize: any = { width: 175, height: 32 }
    public currentResourcePath: string = 'assets/icons';
    public currentTheme: IntegralUITheme = IntegralUITheme.Office;
    public items: Array<any> = [];

    ngAfterViewInit(){
        let flatData = [
            { id: 11, text: "Art"  },
            { id: 12, text: "Economics" },
            { id: 13, text: "Investing" },
            { id: 14, text: "Management" },
            { id: 15, text: "Small Business" },
            { id: 16, text: "Health" },
            { id: 17, text: "Literature" },
            { id: 18, text: "Astronomy" },
            { id: 19, text: "Mathematics" },
            { id: 21, text: "Camera", icon: "camera" },
            { id: 22, text: "Cell Phones" },
            { id: 23, text: "Video Game Consoles" },
            { id: 31, text: "Blues" },
            { id: 32, text: "Classic Rock" },
            { id: 33, text: "Pop" },
            { id: 34, text: "Jazz" },
            { id: 41, text: "Games" },
            { id: 42, text: "Operating Systems" },
            { id: 43, text: "Network & Servers" },
            { id: 44, text: "Security" },
            { id: 51, text: "Baseball" },
            { id: 52, text: "Martial Arts" },
            { id: 53, text: "Running" },
            { id: 54, text: "Tennis" }
        ];

        this.listview.nativeElement.loadData(flatData);
    }

    // Set the styles for even/odd items
    onUpdateComplete(){
        let list = this.listview.nativeElement.getFullList();

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

        this.listview.nativeElement.refresh();
    }
}
