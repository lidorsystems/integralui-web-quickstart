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

import { iuiContextMenuMultiLevelStyle } from './contextmenu-multi-level.style';

@Component({
    selector: '',
    templateUrl: './contextmenu-multi-level.html',
    styleUrls: ['./contextmenu-multi-level.css']
})
export class ContextMenuMultiLevel {
    public currentTheme: IntegralUITheme = IntegralUITheme.Office;
    public customStyle: any = iuiContextMenuMultiLevelStyle;

    public menuSettings: any = {
        items: [
            { id: 10, text: "Books", type: "header" },
            { id: 11, text: "Art" },
            { 
                id: 12,
                text: "Business",
                icon: "icons-medium people",
                items: [
                    { id: 121, pid: 12, text: "Economics" },
                    { 
                        id: 122,
                        pid: 12,
                        text: "Investing", 
                        icon: "icons-medium economics",
                        items: [
                            { id: 1221, pid: 122, text: "Bonds" },
                            { id: 1222, pid: 122, text: "Options" },
                            { id: 1223, pid: 122, text: "Stocks" }
                        ]
                    },
                    { id: 123, pid: 12, text: "Management" },
                    { id: 124, pid: 12, text: "Small Business" }
                ]
            },
            { id: 13, text: "Health", icon: "icons-medium heart" },
            { id: 14, text: "Literature" },
            { 
                id: 15,
                text: "Science",
                items: [
                    { id: 151, pid: 15, text: "Astronomy" },
                    { id: 152, pid: 15, text: "Mathematics" },
                    { id: 153, pid: 15, text: "Evolution" },
                    { id: 154, pid: 15, text: "Nature" }
                ]
            }
        ]
    }
    
    // Events -----------------------------------------------------------------------------------

    isThereChildMenus(item: any){
        return item.items && item.items.length > 0 ? true : false;
    }

    menuItemClick(e: any){
        let currentMenuItem = e.detail.item;

        if (currentMenuItem && !this.isThereChildMenus(currentMenuItem))
            alert("Menu item: " + currentMenuItem.text + " is clicked.");
    }

    // Initialization ----------------------------------------------------------------------------
            
    // For menu items without icon, add an empty icon
    setEmptyItemIcon(list: Array<any>){
        list.forEach((item: any) => {
            if (!item.icon && item.type !== 'header') 
                item.icon = "menu-mlvl-icons-empty"

            this.setEmptyItemIcon(item.items || []);
        });
    }

    ngAfterViewInit(){
        this.setEmptyItemIcon(this.menuSettings.items);
    }
}
