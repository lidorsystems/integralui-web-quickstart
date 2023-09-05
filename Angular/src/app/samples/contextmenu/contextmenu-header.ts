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

import { iuiContextMenuHeaderStyle } from './contextmenu-header.style';

@Component({
    selector: '',
    templateUrl: './contextmenu-header.html',
    styleUrls: ['./contextmenu-header.css']
})
export class ContextMenuHeader {
    public currentTheme: IntegralUITheme = IntegralUITheme.Office;
    public customStyle: any = iuiContextMenuHeaderStyle;

    public menuSettings: any = {
        items: [
            { id: 1, text: "Context Menu", type: "header" },
            { 
                id: 2,
                text: "New",
                icon: "icons-medium new-document",
                items: [
                    { id: 21, pid: 2, text: "Project", icon: "icons-medium solution" },
                    { id: 22, pid: 2, text: "Window", icon: "icons-medium empty" }
                ]
            },
            { id: 3, text: "Open", icon: "icons-medium empty" },
            { id: 4, text: "Save As...", icon: "icons-medium save" },
            { id: 5, text: "Save All", icon: "icons-medium empty" },
            { id: 6, type: "separator", icon: "icons-medium empty" },
            { 
                id: 7, 
                text: "Social", 
                icon: "icons-medium people",
                items: [
                    { id: 71, pid: 7, text: "Facebook", icon: "icons-medium facebook" },
                    { id: 72, pid: 7, text: "Google Plus", icon: "icons-medium google-plus" },
                    { id: 73, pid: 7, text: "Twitter", icon: "icons-medium twitter" }
                ]
            },
            { id: 8, text: "Favorites", icon: "icons-medium empty" },
            { id: 9, type: "separator", icon: "icons-medium empty" },
            { id: 10, text: "Page Setup", icon: "icons-medium empty" },
            { id: 11, text: "Print", icon: "icons-medium print" },
        ]
    }
    
    //
    // Methods -----------------------------------------------------------------------------------
    //

    menuItemClick(e: any){
        if (e.detail.item && !e.detail.item.items)
            alert("Menu item: " + e.detail.item.text + " is clicked.");
    }
}
