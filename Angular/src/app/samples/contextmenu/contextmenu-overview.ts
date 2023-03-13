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

import 'integralui-web/components/integralui.contextmenu';
import { IntegralUITheme } from 'integralui-web/components/integralui.enums';

import { iuiContextMenuOverviewStyle } from './contextmenu-overview.style';

@Component({
    selector: '',
    templateUrl: './contextmenu-overview.html',
    styleUrls: ['./contextmenu-overview.css']
})
export class ContextMenuOverviewSample {
    public currentTheme: IntegralUITheme = IntegralUITheme.Office;
    public customStyle: any = iuiContextMenuOverviewStyle;
    public fontWeight: string = 'bold';
    public fontStyle: string = 'normal';
    public fontSize: string = '1';
    public textDecoration: string = 'none';

    public menuSettings: any = {
        items: [
            { id: 2, text: "Bold", icon: 'cmnu-icons-medium check-mark', checked: true },
            { id: 3, text: "Italic", icon: 'cmnu-icons-medium empty' },
            { id: 4, text: "Strikethrough", icon: 'cmnu-icons-medium empty' },
            { id: 5, type: "separator" },
            { id: 6, text: "x1", icon: 'cmnu-icons-medium radio-mark-filled' },
            { id: 7, text: "x1.5", icon: 'cmnu-icons-medium radio-mark-empty' },
            { id: 8, text: "x2", icon: 'cmnu-icons-medium radio-mark-empty' }
        ]
    }
    
    //
    // Methods -----------------------------------------------------------------------------------
    //

    menuItemClick(e: any){
        let currentItem = e.detail.item;

        if (currentItem){
            if (currentItem.id < 5)
                currentItem.checked = currentItem.checked !== undefined ? !currentItem.checked : true;
            else
                currentItem.checked = true;

            switch (currentItem.id){
                case 2: 
                    this.fontWeight = currentItem.checked !== false ? 'bold' : 'normal';
                    break;
                case 3: 
                    this.fontStyle = currentItem.checked !== false ? 'italic' : 'normal';
                    break;
                case 4: 
                    this.textDecoration = currentItem.checked !== false ? 'line-through' : 'none';
                    break;
                case 6: 
                    this.fontSize = currentItem.checked !== false ? '1' : '1';
                    break;
                case 7: 
                    this.fontSize = currentItem.checked !== false ? '1.5' : '1';
                    break;
                case 8: 
                    this.fontSize = currentItem.checked !== false ? '2' : '1';
                    break;

                default:
                    break;
            }

            if (currentItem.id < 5)
                currentItem.icon = currentItem.checked !== false ? 'cmnu-icons-medium check-mark' : 'cmnu-icons-medium empty';
            else {
                let list = [...this.menuSettings.items];
                for (let i = 4; i < list.length; i++){
                    if (list[i] !== currentItem)
                        list[i].checked = false;

                    list[i].icon = list[i].checked !== false ? 'cmnu-icons-medium radio-mark-filled' : 'cmnu-icons-medium radio-mark-empty';
                }

                this.menuSettings.items = list;
            }
        }
    }
}
