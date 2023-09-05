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
import { IntegralUITheme } from 'integralui-web/components/integralui.enums';
import { iuiMenuCheckBoxStyle } from './menu-checkbox.style';

@Component({
    selector: '',
    templateUrl: './menu-checkbox.html',
    styleUrls: ['./menu-checkbox.css']
})
export class MenuCheckBox {
    public currentResourcePath: string = 'assets/icons';
    public currentTheme: IntegralUITheme = IntegralUITheme.Office;
    public customStyle: any = iuiMenuCheckBoxStyle;
    public items: Array<any> = [];

    constructor(){
        this.items = [
            { 
                id: 1, 
                text: "File", 
                icon: "",
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
                    { id: 15, pid: 1, type: "separator" },
                    { id: 16, pid: 1, text: "Page Setup", icon: "icons-medium empty" },
                    { id: 17, pid: 1, text: "Print", icon: "icons-medium print" },
                    { id: 18, pid: 1, type: "separator" },
                    { id: 19, pid: 1, text: "Exit", icon: "icons-medium empty" },
                ]

            },
            { 
                id: 2, 
                text: "Edit", 
                icon: "",
                items: [
                    { id: 21, pid: 2, text: "Undo", icon: "icons-medium empty" },
                    { id: 22, pid: 2, type: "separator" },
                    { id: 23, pid: 2, text: "Cut", icon: "icons-medium empty" },
                    { id: 24, pid: 2, text: "Copy", icon: "icons-medium copy" },
                    { id: 25, pid: 2, text: "Paste", icon: "icons-medium empty" },
                    { id: 26, pid: 2, type: "separator" },
                    { id: 27, pid: 2, text: "Delete", icon: "icons-medium delete-document" },
                ]
            },
            { 
                id: 3, 
                text: "View", 
                icon: "",
                items: [
                    { id: 31, pid: 3, text: "Auto Preview", icon: "icons-medium empty" },
                    { id: 32, pid: 3, type: "separator" },
                    {
                        id: 33, 
                        pid: 3,
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
                    { id: 34, pid: 3, text: "StatusBar", allowCheckBox: true },
                    { id: 35, pid: 3, type: "separator" },
                    { id: 36, pid: 3, text: "Refresh", icon: "icons-medium empty" }
                ]

            },
            { 
                id: 4, 
                text: "Help", 
                icon: "",
                items: [
                    { id: 41, pid: 4, text: "Search", icon: "icons-medium empty" },
                    { id: 42, pid: 4, text: "Documents", icon: "icons-medium empty" },
                    { id: 43, pid: 4, type: "separator" },
                    { id: 44, pid: 4, text: "About", icon: "icons-medium empty" },
                ]
            }
        ];
    } 

    // Events ------------------------------------------------------------------------------------

    onMenuChecked(e: any){
        console.log(e.detail.item.text + " is now " + e.detail.checked);
    }
}
