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

import 'integralui-web/components/integralui.menu';
import { IntegralUIOrientation, IntegralUITheme } from 'integralui-web/components/integralui.enums';
import { iuiMenuVerticalStyle } from './menu-vertical.style';

@Component({
    selector: '',
    templateUrl: './menu-vertical.html',
    styleUrls: ['./menu-vertical.css']
})
export class MenuVertical {
    public ctrlSize: any = { width: 200 };
    public currentResourcePath: string = 'assets/icons';
    public currentTheme: IntegralUITheme = IntegralUITheme.Office;
    public customStyle: any = iuiMenuVerticalStyle;
    public currentOrientation: IntegralUIOrientation = IntegralUIOrientation.Vertical;
    public items: Array<any> = [];

    constructor(){
        this.items = [
            { 
                id: 1,
                text: "Books",
                icon: "icons-medium library",
                items: [
                    { id: 11, pid: 1, text: "Art" },
                    { 
                        id: 12,
                        pid: 1,
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
                    { id: 13, pid: 1, text: "Health", icon: "icons-medium heart" },
                    { id: 14, pid: 1, text: "Literature" },
                    { 
                        id: 15,
                        pid: 1,
                        text: "Science",
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
                text: "Electronics",
                items: [
                    { id: 31, pid: 3, text: "Camera", icon: "icons-medium camera" },
                    { id: 32, pid: 3, text: "Cell Phones" },
                    { id: 33, pid: 3, text: "Video Game Consoles" }
                ]
            },
            { 
                id: 4,
                text: "Music", 
                icon: "icons-medium album",
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
                icon: "icons-medium software",
                items: [
                    { id: 51, pid: 5, text: "Games" },
                    { id: 52, pid: 5, text: "Operating Systems" },
                    { id: 53, pid: 5, text: "Network & Servers" },
                    { id: 54, pid: 5, text: "Security" }
                ]
            },
            { 
                id: 6,
                text: "Sports",
                icon: "icons-medium sports",
                items: [
                    { id: 61, pid: 6, text: "Baseball" },
                    { id: 62, pid: 6, text: "Martial Arts" },
                    { id: 63, pid: 6, text: "Running" },
                    { 
                        id: 64,
                        pid: 6,
                        text: "Tennis",
                        items: [
                            { id: 641, pid: 64, text: "Accessories" },
                            { id: 642, pid: 64, text: "Balls" },
                            { id: 643, pid: 64, text: "Racquets" }
                        ]
                    }
                ]
            },
            { id: 7, text: "Video Games" },
            { id: 8, text: "Watches", icon: "icons-medium clock-full" }
        ];
    } 

    // Events ------------------------------------------------------------------------------------

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
            if (!item.icon) 
                item.icon = "menu-vert-icons-empty"

            this.setEmptyItemIcon(item.items || []);
        });
    }

    ngAfterViewInit(){
        this.setEmptyItemIcon(this.items);
    }
}
