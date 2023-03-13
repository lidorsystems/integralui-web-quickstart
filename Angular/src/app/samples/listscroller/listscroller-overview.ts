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
import { html } from 'integralui-web/external/lit-element';

import 'integralui-web/components/integralui.listscroller';
import { IntegralUITheme } from 'integralui-web/components/integralui.enums';
import { iuiListScrollerOverviewStyle } from './listscroller-overview.style';

@Component({
    selector: '',
    templateUrl: './listscroller-overview.html',
    styleUrls: ['./listscroller-overview.css']
})
export class ListScrollerOverviewSample {
    @ViewChild('listscroller', { static: false }) listscroller!: ElementRef;

    public ctrlSize: any = { width: 275 };
    public currentItemSize: any = { width: 48, height: 36 };
    public currentResourcePath: string = 'assets/icons';
    public currentTheme: IntegralUITheme = IntegralUITheme.Office;
    public customStyle: any = iuiListScrollerOverviewStyle;
    public items: Array<any> = [];

    //
    // Currently when using templates, the LitElement binding syntax is required
    // for properties, methods and events
    //
    public currentItemTemplate = (item: any) => { 
        return html`
            <div align="center">
                <div class="lscrl-ovw-icons ${item.icon}"></div>
            </div>
        `;
    };

    constructor(){
        this.items = [
            { id: 1, icon: "sci-fi", text: "Sci-Fi" },
            { id: 2, icon: "adventure", text: "Adventure",  },
            { id: 3, icon: "action", text: "Action " },
            { id: 4, icon: "drama", text: "Drama" },
            { id: 5, icon: "music", text: "Music" },
            { id: 6, icon: "comedy", text: "Comedy"  },
            { id: 7, icon: "biography", text: "Biography"  },
            { id: 8, icon: "crime", text: "Crime" },
            { id: 9, icon: "western", text: "Western"  },
            { id: 10, icon: "horror", text: "Horror" },
            { id: 11, icon: "romance", text: "Romance" }
        ];
    } 

    ngAfterViewInit(){
        this.listscroller.nativeElement.itemTemplate = this.currentItemTemplate;
    }
}
