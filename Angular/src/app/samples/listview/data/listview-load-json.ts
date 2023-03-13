import { Component, ElementRef, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { html } from 'integralui-web/external/lit-element';

import 'integralui-web/components/integralui.dropdownbutton';
import 'integralui-web/components/integralui.list';
import 'integralui-web/components/integralui.listview';
import { IntegralUIComponentAppearance, IntegralUIDirection, IntegralUITheme } from 'integralui-web/components/integralui.enums';
import { iuiListViewLoadJSONStyle } from './listview-load-json.style';

@Component({
    selector: '',
    templateUrl: './listview-load-json.html',
    styleUrls: ['./listview-load-json.css']
})
export class ListViewLoadJSON {
    @ViewChild('listview', { static: false }) listview!: ElementRef;

    public ctrlSize: any = { height: 300 };
    public currentItemSize: any = { width: 178, height: 128 }
    public currentResourcePath: string = 'assets/icons';
    public currentScrollAppearance: IntegralUIComponentAppearance = IntegralUIComponentAppearance.Dynamic;
    public currentTheme: IntegralUITheme = IntegralUITheme.Office;
    public listStyle: any = iuiListViewLoadJSONStyle;
    public items: Array<any> = [];
        
    private listFields: any = {
        icon: 'itemIcon',
        id: 'itemId',
        text: 'label'
    }

    // DropDownButton
    public dropDownDirection: IntegralUIDirection = IntegralUIDirection.Left | IntegralUIDirection.Below;
    public dropDownSize: any = { width: 125, height: 68 };

    // Templates ---------------------------------------------------------------------------------

    currentDropDownTemplate = (item: any) => { 
        return html`
            <iui-list 
                .items="${item.dropdown.items}" 
                .selectedItem="${this.getDropDownItem(item)}" 
                .showScroll="${{ vertical: false }}"
                .size="${{ width: this.dropDownSize.width - 4, height: this.dropDownSize.height - 4 }}" 
                .theme="${this.currentTheme}" 
                @itemClick="${(e: any) => this.itemSelected(e, item)}" 
                @itemTouch="${(e: any) => this.itemSelected(e, item)}"
            ></iui-list>
        `;
    };

    currentItemTemplate = (item: any) => { 
        return html`
            <div class="lview-dfjson-item-content">
                <div class="lview-dfjson-item-top-content">
                    <div class="lview-dfjson-item-icon">
                        <span class="lview-dfjson-icons ${item.icon}"></span>
                    </div>
                    <span class="lview-dfjson-item-label">${item.label}</span><br />
                </div>
                <div class="lview-dfjson-item-dropdown">
                    <iui-dropdownbutton 
                        .contentTemplate="${this.currentDropDownTemplate}"
                        .data="${item}"
                        .direction="${this.dropDownDirection}" 
                        .dropDownSize="${this.dropDownSize}"
                        .expanded="${item.selected && item.isDropDownExpanded === true}"
                        .items="${item.dropdown.items}" 
                        .resourcePath="${this.currentResourcePath}"
                        .theme="${this.currentTheme}" 
                        @expandedChanged="${(e: any) => this.dropDownExpandedChanged(e, item)}"
                    >
                        ${item.dropdown.label}
                    </iui-dropdownbutton>
                </div>
            </div>
        `;
    }

    // Initialization ----------------------------------------------------------------------------

    constructor(private http: HttpClient){
    }   

    ngAfterViewInit(){
        // Load data into the ListView from a JSON file
        this.loadFromJSON();
    }

    private loadFromJSON(){
        let self = this;

        // Use HTTP service to get data from the specified JSON file
        self.http.get("./assets/listview-load-json-data.json").subscribe((data: any) => {
            // Suspend the component layout from updates, to increase performance
            self.listview.nativeElement.suspendLayout();

            // Load data into the listview
            self.listview.nativeElement.loadData(data, self.listFields);

            // Resume and update the component layout
            self.listview.nativeElement.resumeLayout();
        });
    }

    // DropDownButton Selection ------------------------------------------------------------------

    dropDownExpandedChanged(e: any, item: any){
        item.isDropDownExpanded = e.detail.expanded;
    }

    getDropDownItem(item: any){
        let filtered = item.dropdown.items.filter((obj: any) => obj.text === item.dropdown.label);

        return filtered.length > 0 ? filtered[0] : null;
    }

    itemSelected(e: any, listItem: any){
        console.log("Item is selected: ", e.detail.item);

        listItem.dropdown.label = e.detail.item.text;
        listItem.isDropDownExpanded = false;

        this.listview.nativeElement.updateLayout();
    }
}
