/*
  Copyright © 2016-2022 Lidor Systems. All rights reserved.

  This file is part of the "IntegralUI Web" Library. 
                                                                   
  The contents of this file are subject to the IntegralUI Web License, and may not be used except in compliance with the License.
  A copy of the License should have been installed in the product's root installation directory or it can be found at
  http://www.lidorsystems.com/products/web/studio/license-agreement.aspx.
                                                            
  This SOFTWARE is provided "AS IS", WITHOUT WARRANTY OF ANY KIND, either express or implied. See the License for the specific language 
  governing rights and limitations under the License. Any infringement will be prosecuted under applicable laws.                           
*/

import { Component, ElementRef, ViewChild } from '@angular/core';
import { html } from 'integralui-web/external/lit-element';
import { classMap } from 'integralui-web/external/class-map';

import 'integralui-web/components/integralui.button';
import 'integralui-web/components/integralui.list';
import 'integralui-web/components/integralui.select';
import 'integralui-web/components/integralui.treeview';
import { IntegralUIItemDisplayMode, IntegralUITheme } from 'integralui-web/components/integralui.enums';
import { iuiTreeViewCheckBoxesStyle } from './treeview-checkboxes.style';

@Component({
    selector: '',
    templateUrl: './treeview-checkboxes.html',
    styleUrls: ['./treeview-checkboxes.css']
})
export class TreeViewCheckBoxes {
    @ViewChild('list', { static: false }) ctrlList!: ElementRef;
    @ViewChild('treeview', { static: false }) treeview!: ElementRef;

    public ctrlSize: any = { height: 395 };
    public currentResourcePath: string = 'assets/icons';
    public currentTheme: IntegralUITheme = IntegralUITheme.Office;
    public customStyle: any = iuiTreeViewCheckBoxesStyle;
    public displayMode: IntegralUIItemDisplayMode = IntegralUIItemDisplayMode.Full;
    public items: Array<any> = [];

    
    private selOption: string = 'checked';
    public options: Array<any> = [
        { id: 1, text: "Unchecked" },
        { id: 2, text: "Indeterminate" },
        { id: 3, text: "Checked" }
    ];

    public listSize: any = {  width: 375, height: 335 };

    //
    // Currently when using templates, the LitElement binding syntax is required
    // for properties, methods and events
    //
    public currentItemTemplate = (item: any) => { 
        return html`
            <div>
                <span class=${classMap(this.getCheckBoxClass(item))} @mousedown="${(e: any) => this.checkItem(e, item)}"></span>
                ${item.icon ? html`<span class="trw-cbox-icons-medium ${item.icon}"></span>` : ``}
                <span class="trw-cbox-item-label">${item.text}</span>
            </div>
        `;
    };
    
    // Initialization ------------------------------------------------------------------------

    constructor(){
        this.items = [
            { 
                id: 1,
                text: "Books",
                icon: "library",
                items: [
                    { id: 11, pid: 1, text: "Art"  },
                    { 
                        id: 12,
                        pid: 1,
                        text: "Business",
                        icon: "people",
                        items: [
                            { id: 121, pid: 12, text: "Economics" },
                            { 
                                id: 122,
                                pid: 12,
                                checkState: 'checked',
                                text: "Investing", 
                                expanded: false,
                                icon: "economics",
                                items: [
                                    { id: 1221, pid: 122, text: "Bonds", checkState: 'checked' },
                                    { id: 1222, pid: 122, text: "Options", checkState: 'checked' },
                                    { id: 1223, pid: 122, text: "Stocks", checkState: 'checked' }
                                ]
                            },
                            { id: 123, pid: 12, text: "Management" },
                            { id: 124, pid: 12, text: "Small Business" }
                        ]
                    },
                    { id: 13, pid: 1, text: "Health", icon: "heart", checkState: 'checked' },
                    { id: 14, pid: 1, text: "Literature" },
                    { 
                        id: 15,
                        pid: 1,
                        text: "Science",
                        expanded: false,
                        items: [
                            { id: 151, pid: 15, text: "Astronomy" },
                            { id: 152, pid: 15, text: "Mathematics" },
                            { id: 153, pid: 15, text: "Evolution" },
                            { id: 154, pid: 15, text: "Nature" }
                        ]
                    }
                ]
            },
            { id: 2, text: "Computers" },
            {
                id: 3,
                checkState: 'checked',
                text: "Electronics",
                items: [
                    { id: 31, pid: 3, text: "Camera", icon: "camera", checkState: 'checked' },
                    { id: 32, pid: 3, text: "Cell Phones", checkState: 'checked' },
                    { id: 33, pid: 3, text: "Video Game Consoles", checkState: 'checked' }
                ]
            },
            { 
                id: 4,
                text: "Music", 
                expanded: false,
                icon: "album",
                items: [
                    { id: 41, pid: 4, text: "Blues" },
                    { id: 42, pid: 4, text: "Classic Rock" },
                    { id: 43, pid: 4, text: "Pop" },
                    { id: 44, pid: 4, text: "Jazz" }
                ]
            },
            { 
                id: 5,
                text: "Software",
                icon: "software",
                items: [
                    { id: 51, pid: 5, text: "Games", checkState: 'checked' },
                    { id: 52, pid: 5, text: "Operating Systems" },
                    { id: 53, pid: 5, text: "Network & Servers" },
                    { id: 54, pid: 5, text: "Security" }
                ]
            },
            { 
                id: 6,
                text: "Sports",
                expanded: false,
                icon: "sports",
                items: [
                    { id: 61, pid: 6, text: "Baseball" },
                    { id: 62, pid: 6, text: "Martial Arts", checkState: 'checked' },
                    { id: 63, pid: 6, text: "Running" },
                    { 
                        id: 64,
                        pid: 6,
                        text: "Tennis",
                        expanded: false,
                        items: [
                            { id: 641, pid: 64, text: "Accessories" },
                            { id: 642, pid: 64, text: "Balls" },
                            { id: 643, pid: 64, text: "Racquets" }
                        ]
                    }
                ]
            },
            { id: 7, text: "Video Games" },
            { id: 8, text: "Watches", icon: "clock" }
        ];
    } 

    ngAfterViewInit(){
        this.treeview.nativeElement.itemTemplate = this.currentItemTemplate;
        
        this.treeview.nativeElement.updateFullList();

        let list = this.treeview.nativeElement.getFullList();
        list.forEach((item: any) => this.updateParentItemCheckValue(item));

        this.showCheckList();
    }
    
    // Item Template Content -----------------------------------------------------------------

    getCheckBoxClass(item: any){
        let cbClass: any = { 'trw-item-cbox': true };

        switch (item.checkState){
            case 'indeterminate':
                cbClass['trw-item-cbox-indeterminate'] = true;
                break;

            case 'checked':
                cbClass['trw-item-cbox-checked'] = true;
                break;
        }

        return cbClass;
    }

    getItemIcon(item: any){
        return item.icon ? item.icon : 'trw-cbox-icons-empty';
    }

    checkItem(e: any, item: any){
        if (item){
            let checkValue = this.getItemCheckValue(item);
            switch (checkValue){
                case 'unchecked':
                    checkValue = 'checked';
                    break;

                case 'indeterminate':
                    checkValue = 'checked';
                    break;

                case 'checked':
                    checkValue = 'unchecked';
                    break;
            }

            this.updateCheckValue(item, checkValue);

            this.updateChildItemCheckValue(item);
            this.updateParentItemCheckValue(item);

            this.treeview.nativeElement.refresh();
        }

        e.stopPropagation();
    }

    getItemCheckValue(item: any){
        if (item)
            return item.checkState === undefined ? 'unchecked' : item.checkState;

        return 'unchecked';
    }

    updateCheckValue(item: any, value: any){
        if (item){
            switch (value){
                case 'unchecked':
                    item.checkState = 'unchecked';
                    break;

                case 'indeterminate':
                    item.checkState = 'indeterminate';
                    break;

                case 'checked':
                    item.checkState = 'checked';
                    break;
            }
        }
    }

    // Cascading Changes to CheckBoxes -------------------------------------------------------

    // Update the checkbox of parent items
    updateParentItemCheckValue(item: any){
        let parent = this.treeview.nativeElement.getItemParent(item);
        while (parent){
            let list = parent.items;

            if (list){
                let checkCount = 0;
                let indeterminateCount = 0;
                for (let i = 0; i < list.length; i++){
                    let checkValue = this.getItemCheckValue(list[i]);
                    if (checkValue === 'checked')
                        checkCount++;
                    else if (checkValue == 'indeterminate')
                        indeterminateCount++;
                }
                
                let parentCheckValue = 'unchecked';
                if (checkCount === list.length)
                    parentCheckValue = 'checked';
                else if (checkCount > 0 || indeterminateCount > 0)
                    parentCheckValue = 'indeterminate';

                    this.updateCheckValue(parent, parentCheckValue);
            }   
            
            parent = this.treeview.nativeElement.getItemParent(parent);
        }
    }
    
    // Update the checkbox of child items
    updateChildItemCheckValue(parent: any){
        if (parent && parent.items){
            for (let i = 0; i < parent.items.length; i++){
                let checkValue = this.getItemCheckValue(parent);
                if (checkValue === 'checked')
                    this.updateCheckValue(parent.items[i], 'checked');
                else
                    this.updateCheckValue(parent.items[i], 'unchecked');

                this.updateChildItemCheckValue(parent.items[i]);
            }
        }
    }

    // Check List ----------------------------------------------------------------------------

    showCheckList(){
        let checkedList: Array<any> = [];

        let list = this.treeview.nativeElement.getFullList();
        list.forEach((item: any) => {
            let checkValue = this.getItemCheckValue(item);
            if (checkValue === this.selOption)
                checkedList.push({ text: item.text });
        });

        this.ctrlList.nativeElement.items = checkedList;
    }

    onDropDownItemSelected(e: any){
        if (e.detail.item)
            switch (e.detail.item.id){
                case 1:
                    this.selOption = 'unchecked';
                    break;

                case 2:
                    this.selOption = 'indeterminate';
                    break;

                default:
                    this.selOption = 'checked';
                    break;
            }
    } 
}
