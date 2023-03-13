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
import 'integralui-web/components/integralui.dropdownbutton';
import { IntegralUITheme } from 'integralui-web/components/integralui.enums';

@Component({
    selector: '',
    templateUrl: './dropdownbutton-overview.html',
    styleUrls: ['./dropdownbutton-overview.css']
})
export class DropDownButtonOverview {
    public currentResourcePath: string = 'assets/icons';
    public currentSelection: any = null;
    public currentTheme: IntegralUITheme = IntegralUITheme.Office;
    public dropDownSize: any = { width: 200, height: 150 }
    public isAnimationAllowed: boolean = true;
    public isExpanded: boolean = false;
    public list: Array<any> = [
        { text: "Item 1" },
        { text: "Item 2" },
        { text: "Item 3" }
    ];

    // Events ------------------------------------------------------------------------------------
    
    dropDownExpandedChanged(e: any){
        this.isExpanded = e.detail.expanded;
    }

    itemSelected(e: any){
        this.currentSelection = e.detail.item;
        this.isExpanded = false;
    }

    // Templates ---------------------------------------------------------------------------------

    currentContentTemplate = () => { 
        return html`
            <iui-list 
                .items="${this.list}" 
                .selectedItem="${this.currentSelection}" 
                .size="${{ width: this.dropDownSize.width - 4, height: this.dropDownSize.height - 4 }}" 
                .theme="${this.currentTheme}" 
                @itemClick="${(e: any) => this.itemSelected(e)}" 
                @itemTouch="${(e: any) => this.itemSelected(e)}"
            ></iui-list>
        `;
    };
}
