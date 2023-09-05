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
import { html } from 'integralui-web/external/lit-element';

import 'integralui-web/components/integralui.menu';
import { IntegralUITheme } from 'integralui-web/components/integralui.enums';
import { iuiMenuCustomTemplateStyle } from './menu-custom-template.style';

@Component({
    selector: '',
    templateUrl: './menu-custom-template.html',
    styleUrls: ['./menu-custom-template.css']
})
export class MenuCustomTemplate {

    @ViewChild('menu', { static: false }) menu!: ElementRef;

    public ctrlSize: any = { width: 700 };
    public currentResourcePath: string = 'assets/icons';
    public currentTheme: IntegralUITheme = IntegralUITheme.Office;
    public customStyle: any = iuiMenuCustomTemplateStyle;
    public items: Array<any> = [];
    
    public currentZoomValue: number = 250;
    private zoomInterval: any = null;

    // Panel
    public panelContentAlignment: any = { horizontal: 'center', vertical: 'middle' }

    constructor(){
        this.items = [
            { 
                text: "Menu",
                items: [
                    { text: "History" },
                    { text: "Downloads" },
                    { text: "Bookmarks" },
                    { text: "Extensions" },
                    { text: "Zoom", zoomValue: 250 },
                    { text: "Print" },
                    { type: "separator" },
                    { text: "Exit" }
                ]
             }
        ];
    } 

    // Templates ---------------------------------------------------------------------------------

    preventClosing(e: any){
        this.removeZoomInterval();
        e.stopPropagation();
    }

    removeZoomInterval(){
        if (this.zoomInterval)
            clearInterval(this.zoomInterval);

        this.zoomInterval = null;
    }

    zoomIn(e: any, item: any){
        let self = this;

        self.removeZoomInterval();

        self.zoomInterval = setInterval(function(){
            item.zoomValue = Math.min(500, item.zoomValue + 10);
            self.menu.nativeElement.refresh();

            self.currentZoomValue = item.zoomValue;
        }, 50);

        e.stopPropagation();
    }

    zoomOut(e: any, item: any){
        let self = this;

        self.removeZoomInterval();

        self.zoomInterval = setInterval(function(){
            item.zoomValue = Math.max(25, item.zoomValue - 10);
            self.menu.nativeElement.refresh();

            self.currentZoomValue = item.zoomValue;
        }, 50);
        
        e.stopPropagation();
    }

    currentItemTemplate = (item: any) => { 
        if (item.text === 'Zoom')
            return html`
                <div class="menu-cstpl-block">
                    <span class="menu-cstpl-label">${item.text}</span>
                    <div class="menu-cstpl-zoom-block" @mouseup="${(e: any) => this.preventClosing(e)}">
                        <span class="menu-cstpl-zoom-out" @mousedown="${(e: any) => this.zoomOut(e, item)}">-</span>
                        <span class="menu-cstpl-zoom-value">${item.zoomValue}%</span>
                        <span class="menu-cstpl-zoom-in" @mousedown="${(e: any) => this.zoomIn(e, item)}">+</span>
                    </div>
                </div>
            `;

        return null;
    };
}
