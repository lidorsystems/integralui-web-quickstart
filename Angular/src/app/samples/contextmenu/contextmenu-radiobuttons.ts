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
import 'integralui-web/components/integralui.radiobutton';
import { IntegralUITheme } from 'integralui-web/components/integralui.enums';

import { iuiContextMenRuadioButtonStyle } from './contextmenu-radiobuttons.style';

@Component({
    selector: '',
    templateUrl: './contextmenu-radiobuttons.html',
    styleUrls: ['./contextmenu-radiobuttons.css']
})
export class ContextMenuRadioButtons {

    @ViewChild('contextmenu', { static: false }) contextMenu!: ElementRef;

    public currentResourcePath: string = 'assets/icons';
    public currentTheme: IntegralUITheme = IntegralUITheme.Office;
    public customStyle: any = iuiContextMenRuadioButtonStyle;

    public menuSettings: any = {
        items: [
            { id: 31, text: "Auto Preview", icon: "icons-medium empty" },
            { id: 32, type: "separator" },
            {
                id: 33, 
                text: "Navigation Pane", 
                icon: "icons-medium empty",
                items: [
                    { id: 331, pid: 33, text: "Normal", allowRadioButton: true, checked: true },
                    { id: 332, pid: 33, text: "Minimized", allowRadioButton: true },
                    { id: 333, pid: 33, text: "Off", allowRadioButton: true },
                    { id: 334, pid: 33, type: "separator" },
                    { id: 335, pid: 33, text: "Current View Pane", allowCheckBox: true },
                    { id: 336, pid: 33, text: "Favorite Folders", allowCheckBox: true, checked: true }
                ]
            },
            {
                id: 34, 
                text: "To-Do Bar", 
                icon: "icons-medium empty",
                items: [
                    { id: 341, pid: 34, text: "Normal", allowRadioButton: true },
                    { id: 342, pid: 34, text: "Minimized", allowRadioButton: true },
                    { id: 343, pid: 34, text: "Off", allowRadioButton: true, checked: true },
                    { id: 344, pid: 34, type: "separator" },
                    { id: 345, pid: 34, text: "Date Navigator", allowCheckBox: true, checked: true, enabled: false },
                    { id: 346, pid: 34, text: "Appointments", allowCheckBox: true, checked: true, enabled: false },
                    { id: 347, pid: 34, text: "Task List", allowCheckBox: true, checked: true, enabled: false }
                ]
            },
            {
                id: 35, 
                text: "Reading Pane", 
                icon: "icons-medium empty",
                items: [
                    { id: 351, pid: 35, text: "Right", allowRadioButton: true },
                    { id: 352, pid: 35, text: "Bottom", allowRadioButton: true, checked: true },
                    { id: 353, pid: 35, text: "Off", allowRadioButton: true }
                ]
            },
            { id: 35, type: "separator" },
            { id: 36, text: "Refresh", icon: "icons-medium empty" }
        ]
    }

    // Events ------------------------------------------------------------------------------------

    changeMenuFunc(list: Array<any>, value: boolean){
        list.forEach((id: any) => {
            let item = this.contextMenu.nativeElement.findItemById(id);
            if (item)
                item.enabled = value;
        });

        this.contextMenu.nativeElement.refresh();
    }

    onMenuRadioChecked(e: any){
        switch (e.detail.item.pid){
                // Navigation Pane
            case 33: 
                // Enabled when Normal or Minimized
                if (e.detail.item.id <= 332)
                    this.changeMenuFunc([335, 336], true);
                // Disable when Off
                else if (e.detail.item.id === 333)
                    this.changeMenuFunc([335, 336], false);
                else
                    this.showCheckedMessage(e);
                break;

            // To-Do Bar
            case 34:
                // Enabled when Normal or Minimized
                if (e.detail.item.id <= 342)
                    this.changeMenuFunc([345, 346, 347], true);
                // Disable when Off
                else if (e.detail.item.id === 343)
                    this.changeMenuFunc([345, 346, 347], false);
                else
                    this.showCheckedMessage(e);
                break;
        }
    }

    showCheckedMessage(e: any){
        console.log(e.detail.item.text + " is now " + e.detail.checked);
    }
}
