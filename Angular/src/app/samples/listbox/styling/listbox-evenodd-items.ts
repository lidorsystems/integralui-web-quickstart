import { Component, ElementRef, ViewChild } from '@angular/core';

import 'integralui-web/components/integralui.listbox';
import { IntegralUITheme } from 'integralui-web/components/integralui.enums';

@Component({
    selector: '',
    templateUrl: './listbox-evenodd-items.html',
    styleUrls: ['./listbox-evenodd-items.css']
})
export class ListBoxEvenOdd {

    // ListBox
    @ViewChild('listbox', { static: false }) listbox!: ElementRef;

    public ctrlSize: any = { width: 350, height: 300 }
    public currentResourcePath: string = 'assets/icons';
    public currentTheme: IntegralUITheme = IntegralUITheme.Office;
    public items: Array<any> = [];

    ngAfterViewInit(){
        let flatData = [
            { id: 11, text: "Art", group: "Books"  },
            { id: 12, text: "Economics", group: "Books" },
            { id: 13, text: "Investing", group: "Books", checked: true },
            { id: 14, text: "Management", group: "Books" },
            { id: 15, text: "Small Business", group: "Books" },
            { id: 16, text: "Health", group: "Books", checked: true },
            { id: 17, text: "Literature", group: "Books" },
            { id: 18, text: "Astronomy", group: "Books" },
            { id: 19, text: "Mathematics", group: "Books" },
            { id: 21, text: "Camera", icon: "camera", group: "Electronics", checked: true },
            { id: 22, text: "Cell Phones", group: "Electronics", checked: true },
            { id: 23, text: "Video Game Consoles", group: "Electronics" },
            { id: 31, text: "Blues", group: "Music" },
            { id: 32, text: "Classic Rock", group: "Music", checked: true },
            { id: 33, text: "Pop", group: "Music" },
            { id: 34, text: "Jazz", group: "Music" },
            { id: 41, text: "Games", group: "Software", checkState: 'checked' },
            { id: 42, text: "Operating Systems", group: "Software" },
            { id: 43, text: "Network & Servers", group: "Software" },
            { id: 44, text: "Security", group: "Software" },
            { id: 51, text: "Baseball", group: "Sports" },
            { id: 52, text: "Martial Arts", group: "Sports", checked: true },
            { id: 53, text: "Running", group: "Sports" },
            { id: 54, text: "Tennis", group: "Sports" }
        ];

        this.listbox.nativeElement.loadData(flatData);
    }

    // Set the styles for even/odd items
    onUpdateComplete(){
        let list = this.listbox.nativeElement.getFullList();

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

        this.listbox.nativeElement.refresh();
    }
}
