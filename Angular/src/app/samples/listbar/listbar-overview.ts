/*
  Copyright © 2016-2020 Lidor Systems. All rights reserved.

  This file is part of the "IntegralUI Web" Library. 
                                                                   
  The contents of this file are subject to the IntegralUI Web License, and may not be used except in compliance with the License.
  A copy of the License should have been installed in the product's root installation directory or it can be found at
  http://www.lidorsystems.com/products/web/studio/license-agreement.aspx.
                                                            
  This SOFTWARE is provided "AS IS", WITHOUT WARRANTY OF ANY KIND, either express or implied. See the License for the specific language 
  governing rights and limitations under the License. Any infringement will be prosecuted under applicable laws.                           
*/

import { Component, ElementRef, ViewChild } from '@angular/core';
import 'integralui-web/components/integralui.listbar.js';
import 'integralui-web/components/integralui.listgroup.js';
import 'integralui-web/components/integralui.item.js';
import { IntegralUITheme } from 'integralui-web/components/integralui.enums.js';

@Component({
    selector: '',
    templateUrl: './listbar-overview.html'
})
export class ListBarOverviewSample {
    public ctrlSize: any = { width: 350, height: 400 };
    public currentResourcePath: string = 'assets/integralui-web/icons';
    public currentSelection: any = null;
    public currentTheme: IntegralUITheme = IntegralUITheme.Office;
    public expandBoxType: string = 'arrow';
    public groups: Array<any> = [];

    constructor(){
        this.groups = [
            { 
                id: 1, 
                text: "Common Controls",
                expanded: false,
                items: [
                    { id: 11, pid: 1, text: "Button" },
                    { id: 12, pid: 1, text: "CheckBox" },
                    { id: 13, pid: 1, text: "ComboBox" },
                    { id: 14, pid: 1, text: "DateTime Picker" },
                    { id: 15, pid: 1, text: "Label" },
                    { id: 16, pid: 1, text: "ProgressBar" },
                    { id: 17, pid: 1, text: "TextBox" }
                ]
            },
            { 
                id: 2, 
                text: "Containers",
                items: [
                    { id: 21, pid: 2, text: "GroupBox" },
                    { id: 22, pid: 2, text: "Panel" },
                    { id: 23, pid: 2, text: "SplitContainer" },
                    { id: 24, pid: 2, text: "TabControl" }
                ]
            },
            { 
                id: 3, 
                text: "Menus & Toolbars",
                items: [
                    { id: 31, pid: 3, text: "ContextMenu" },
                    { id: 32, pid: 3, text: "Menu" },
                    { id: 33, pid: 3, text: "ToolStrip" }
                ]
            },
            { 
                id: 4, 
                text: "Data",
                expanded: false,
                items: [
                    { id: 41, pid: 4, text: "DataGrid" },
                    { id: 42, pid: 4, text: "DataSet" },
                    { id: 43, pid: 4, text: "ReportViewer" }
                ]
            },
            { 
                id: 5, 
                text: "Dialogs",
                expanded: false,
                items: [
                    { id: 51, pid: 5, text: "ColorDialog" },
                    { id: 52, pid: 5, text: "FontDialog" }
                ]
            },
            { 
                id: 6, 
                text: "Printing",
                expanded: false,
                items: [
                    { id: 61, pid: 6, text: "PrintDialog" },
                    { id: 62, pid: 6, text: "PrintDocument" }
                ]
            },
            { 
                id: 7, 
                text: "IntegralUI",
                items: [
                    { id: 71, pid: 7, text: "Accordion" },
                    { id: 72, pid: 7, text: "CheckBox" },
                    { id: 73, pid: 7, text: "ComboBox" },
                    { id: 74, pid: 7, text: "ContextMenu" },
                    { id: 77, pid: 7, text: "Grid" },
                    { id: 77, pid: 7, text: "ListView" },
                    { id: 75, pid: 7, text: "Menu" },
                    { id: 76, pid: 7, text: "SlideBar" },
                    { id: 77, pid: 7, text: "TabStrip" },
                    { id: 78, pid: 7, text: "TreeGrid" },
                    { id: 79, pid: 7, text: "TreeView" }
                ]
            }
        ];

        this.currentSelection = this.groups[1];
    } 
}
