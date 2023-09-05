/*
  Copyright © 2016-2023 Lidor Systems. All rights reserved.

  This file is part of the "IntegralUI Web" Library. 
                                                                   
  The contents of this file are subject to the IntegralUI Web License, and may not be used except in compliance with the License.
  A copy of the License should have been installed in the product's root installation directory or it can be found at
  http://www.lidorsystems.com/products/web/studio/license-agreement.aspx.
                                                            
  This SOFTWARE is provided "AS IS", WITHOUT WARRANTY OF ANY KIND, either express or implied. See the License for the specific language 
  governing rights and limitations under the License. Any infringement will be prosecuted under applicable laws.                           
*/

import { Component, ElementRef, ViewChild } from '@angular/core';

import 'integralui-web/components/integralui.contextmenu';
import { IntegralUITheme } from 'integralui-web/components/integralui.enums';

import { iuiContextMenuCheckBoxStyle } from './contextmenu-checkbox.style';

@Component({
    selector: '',
    templateUrl: './contextmenu-checkbox.html',
    styleUrls: ['./contextmenu-checkbox.css']
})
export class ContextMenuCheckBoxes {
    public currentResourcePath: string = 'assets/icons';
    public currentTheme: IntegralUITheme = IntegralUITheme.Office;
    public customStyle: any = iuiContextMenuCheckBoxStyle;

    public menuSettings: any = {
        items: [
            { id: 31, text: "Auto Preview", icon: "icons-medium empty" },
            { id: 32, type: "separator" },
            {
                id: 33, 
                text: "Toolbars", 
                icon: "icons-medium empty",
                items: [
                    { id: 331, pid: 33, text: "Standard", allowCheckBox: true, checked: true },
                    { id: 332, pid: 33, text: "Advanced", allowCheckBox: true },
                    { id: 333, pid: 33, text: "Web", allowCheckBox: true },
                    { id: 334, pid: 33, type: "separator" },
                    { id: 335, pid: 33, text: "Customize ...", icon: "icons-medium empty" }
                ]
            },
            { id: 34, text: "StatusBar", allowCheckBox: true },
            { id: 35, type: "separator" },
            { id: 36, text: "Refresh", icon: "icons-medium empty" }
        ]
    }
    
    // Events ------------------------------------------------------------------------------------

    onMenuChecked(e: any){
        console.log(e.detail.item.text + " is now " + e.detail.checked);
    }
}
