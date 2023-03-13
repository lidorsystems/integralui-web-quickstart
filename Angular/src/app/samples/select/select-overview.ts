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

import 'integralui-web/components/integralui.select';
import { IntegralUITheme } from 'integralui-web/components/integralui.enums';
import { iuiSelectOverviewStyle } from './select-overview.style';

@Component({
    selector: '',
    templateUrl: './select-overview.html',
    styleUrls: ['./select-overview.css']
})
export class SelectOverviewSample {
    public ctrlSize: any = { width: 300 };
    public currentMaxDropDownItems: number = 5;
    public currentResourcePath: string = 'assets/icons';
    public currentSelection: any = null;
    public currentTheme: IntegralUITheme = IntegralUITheme.Office;
    public customStyle: any = iuiSelectOverviewStyle;
    public dropDownSize: any = { width: 350 };
    public isAnimationAllowed: boolean = true;
    public items: Array<any> = [];

    constructor(){
        this.items = [
            { id: 1, icon: "cmb-ovw-icons library", text: "Books" },
            { id: 2, icon: "cmb-ovw-icons-empty", text: "Computers" },
            { id: 3, icon: "cmb-ovw-icons-empty", text: "Electronics" },
            { id: 4, icon: "cmb-ovw-icons album", text: "Music" },
            { id: 5, icon: "cmb-ovw-icons software", text: "Software" },
            { id: 6, icon: "cmb-ovw-icons sports", text: "Sports" },
            { id: 7, icon: "cmb-ovw-icons-empty", text: "Video Games" },
            { id: 8, icon: "cmb-ovw-icons clock", text: "Watches" }
        ];

        this.currentSelection = this.items[3];
    } 
}
