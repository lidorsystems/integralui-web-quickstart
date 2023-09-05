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

import { iuiContextMenuSeparatorLabelStyle } from './contextmenu-separator-label.style';

@Component({
    selector: '',
    templateUrl: './contextmenu-separator-label.html',
    styleUrls: ['./contextmenu-separator-label.css']
})
export class ContextMenuSeparatorLabel {
    public currentTheme: IntegralUITheme = IntegralUITheme.Office;
    public customStyle: any = iuiContextMenuSeparatorLabelStyle;

    public menuSettings: any = {
        items: [
            {
                id: 11, 
                pid: 1,
                text: "New", 
                icon: "icons-medium new-document",
                items: [
                    { id: 111, pid: 11, text: "Project", icon: "icons-medium empty" },
                    { id: 112, pid: 11, text: "Window", icon: "icons-medium empty" }
                ]
            },
            { id: 12, pid: 1, text: "Open", icon: "icons-medium empty" },
            { id: 13, pid: 1, text: "Save As...", icon: "icons-medium save" },
            { id: 14, pid: 1, text: "Save All", icon: "icons-medium empty" },
            { id: 15, pid: 1, text: "Printing", type: "separator" },
            { id: 16, pid: 1, text: "Page Setup", icon: "icons-medium empty" },
            { id: 17, pid: 1, text: "Print", icon: "icons-medium print" },
            { 
                id: 18, 
                pid: 1, 
                text: "General", 
                style: {
                    content: {
                        background: 'white',
                        borderColor: 'transparent',
                        color: '#008000',
                        fontWeight: 'normal',
                        margin: '0 25%',
                        textAlign: 'center'
                    },
                    line: {
                        background: '#008000'
                    }
                },
                type: "separator"
            },
            { id: 19, pid: 1, text: "Exit", icon: "icons-medium empty" }
        ]
    }
    
    // Events ------------------------------------------------------------------------------------

    menuItemClick(e: any){
        if (e.detail.item && !e.detail.item.items)
            alert("Menu item: " + e.detail.item.text + " is clicked.");
    }
}
