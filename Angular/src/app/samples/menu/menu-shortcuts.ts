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
import { iuiMenuShortcutStyle } from './menu-shortcuts.style';

@Component({
    selector: '',
    templateUrl: './menu-shortcuts.html',
    styleUrls: ['./menu-shortcuts.css']
})
export class MenuShortcuts {
    public ctrlSize: any = { width: 700 };
    public currentResourcePath: string = 'assets/icons';
    public currentTheme: IntegralUITheme = IntegralUITheme.Office;
    public customStyle: any = iuiMenuShortcutStyle;
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
                            { id: 111, pid: 11, text: "Project", shortcutKey: 'Ctrl+Alt+N', icon: "icons-medium empty" },
                            { id: 112, pid: 11, text: "Window", icon: "icons-medium empty" }
                        ]
                    },
                    { id: 12, pid: 1, text: "Open", shortcutKey: 'Ctrl+Alt+O', icon: "icons-medium empty" },
                    { id: 13, pid: 1, text: "Save As...", shortcutKey: 'Ctrl+S', icon: "icons-medium save" },
                    { id: 14, pid: 1, text: "Save All", icon: "icons-medium empty" },
                    { id: 15, pid: 1, type: "separator" },
                    { id: 16, pid: 1, text: "Page Setup", icon: "icons-medium empty" },
                    { id: 17, pid: 1, text: "Print", shortcutKey: 'Ctrl+Alt+P', icon: "icons-medium print" },
                    { id: 18, pid: 1, type: "separator" },
                    { id: 19, pid: 1, text: "Exit", shortcutKey: 'Ctrl+X', icon: "icons-medium empty" },
                ]

            },
            { 
                id: 2, 
                text: "Edit", 
                icon: "",
                items: [
                    { id: 21, pid: 2, text: "Undo", icon: "icons-medium empty" },
                    { id: 22, pid: 2, text: "Redo", icon: "icons-medium empty" },
                    { id: 23, pid: 2, type: "separator" },
                    { id: 24, pid: 2, text: "Cut", icon: "icons-medium empty" },
                    { id: 25, pid: 2, text: "Copy", shortcutKey: 'Ctrl+Shift+C', icon: "icons-medium copy" },
                    { id: 26, pid: 2, text: "Paste", shortcutKey: 'Ctrl+Shift+V', icon: "icons-medium empty" },
                    { id: 27, pid: 2, text: "Delete", icon: "icons-medium delete-document" },
                ]
            },
            { 
                id: 3, 
                text: "View", 
                icon: "",
                items: [
                    { id: 31, pid: 3, text: "Print Layout", icon: "icons-medium empty" },
                    {
                        id: 32, 
                        pid: 3,
                        text: "Zoom", 
                        icon: "icons-medium zoom",
                        items: [
                            { id: 321, pid: 32, text: "Zoom In", icon: "icons-medium zoom-in" },
                            { id: 322, pid: 32, text: "Zoom Out", icon: "icons-medium zoom-out" },
                            { id: 323, pid: 32, type: "separator" },
                            { id: 324, pid: 32, text: "Restore", icon: "icons-medium empty" }
                        ]
                    },
                    { id: 33, pid: 3, type: "separator" },
                    { id: 34, pid: 3, text: "Full Screen", shortcutKey: 'Ctrl+F11', icon: "icons-medium empty" },
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
                    { id: 44, pid: 4, text: "About", shortcutKey: 'Alt+H', icon: "icons-medium empty" },
                ]
            }
        ];
    } 

    menuItemClick(e: any){
        if (e.detail.item && e.detail.item.pid)
            alert("Menu item: " + e.detail.item.text + " is clicked.");
    }
}
