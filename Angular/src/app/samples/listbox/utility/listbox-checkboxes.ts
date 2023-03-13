import { Component, ElementRef, ViewChild } from '@angular/core';
import { html } from 'integralui-web/external/lit-element';
import { classMap } from 'integralui-web/external/class-map';

import 'integralui-web/components/integralui.button';
import 'integralui-web/components/integralui.list';
import 'integralui-web/components/integralui.listbox';
import 'integralui-web/components/integralui.select';
import { IntegralUIComponentAppearance, IntegralUITheme } from 'integralui-web/components/integralui.enums';
import { iuiListBoxCheckBoxesStyle } from './listbox-checkboxes.style';

@Component({
    selector: '',
    templateUrl: './listbox-checkboxes.html',
    styleUrls: ['./listbox-checkboxes.css']
})
export class ListBoxCheckBoxes {
    @ViewChild('list', { static: false }) ctrlList!: ElementRef;
    @ViewChild('listbox', { static: false }) listbox!: ElementRef;

    public ctrlSize: any = { height: 395 }
    public currentResourcePath: string = 'assets/icons';
    public currentScrollAppearance: IntegralUIComponentAppearance = IntegralUIComponentAppearance.Dynamic;
    public currentTheme: IntegralUITheme = IntegralUITheme.Office;
    public groups: Array<any> = [];
    public items: Array<any> = [];
    public listStyle: any = iuiListBoxCheckBoxesStyle;

    private selOption: string = 'checked';
    public options: Array<any> = [
        { id: 1, text: "Unchecked" },
        { id: 2, text: "Checked" }
    ];

    public listSize: any = {  width: 375, height: 335 };
    
    // Initialization ------------------------------------------------------------------------

    constructor(){
        this.groups = [
            { name: "Books", expanded: false },
            { name: "Electronics" },
            { name: "Music" },
            { name: "Software", expanded: false },
            { name: "Sports" }
        ];

        this.items = [
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
    } 

    ngAfterViewInit(){
        this.showCheckList();
    }
    
    // Templates ---------------------------------------------------------------------------------

    currentItemTemplate = (item: any) => { 
        if (item.type === 'group')
            return html`
                <div>
                    <span class="lbox-ovw-name">${item.name}</span>
                </div>
            `;
        else
            return html`
                <div>
                    <span class=${classMap(this.getCheckBoxClass(item))} @mousedown="${(e: any) => this.checkItem(e, item)}"></span>
                    <span class="lbox-cbox-item-label">${item.text}</span>
                </div>
            `;
    };

    // Item Template Content -----------------------------------------------------------------

    getCheckBoxClass(item: any){
        let cbClass: any = { 'lbox-item-cbox': true };

        if (item.checked)
            cbClass['lbox-item-cbox-checked'] = true;

        return cbClass;
    }

    checkItem(e: any, item: any){
        if (e.which === 1 && item){
            item.checked = item.checked !== undefined ? !item.checked : true;
            this.listbox.nativeElement.refresh();
        }

        e.stopPropagation();
    }

    // Check List ----------------------------------------------------------------------------

    showCheckList(){
        let checkedList: Array<any> = [];

        this.items.forEach((item: any) => {
            if (this.selOption === 'Checked' && item.checked === true)
                checkedList.push({ text: item.text });
            else if (this.selOption === 'Unchecked' && item.checked !== true)
                checkedList.push({ text: item.text });
        });

        this.ctrlList.nativeElement.items = checkedList;
    }

    onDropDownItemSelected(e: any){
        if (e.detail.item)
            switch (e.detail.item.id){
                case 1:
                    this.selOption = 'Unchecked';
                    break;

                default:
                    this.selOption = 'Checked';
                    break;
            }
    } 
}
