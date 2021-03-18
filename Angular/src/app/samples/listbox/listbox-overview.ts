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
import { html } from 'integralui-web/external/lit-element.js';
import 'integralui-web/components/integralui.listbox.js';
import 'integralui-web/components/integralui.rating.js';
import { IntegralUISelectionMode, IntegralUITheme } from 'integralui-web/components/integralui.enums.js';
import { iuiListBoxOverviewStyle } from './listbox-overview.style.js';

@Component({
    selector: '',
    templateUrl: './listbox-overview.html'
})
export class ListBoxOverviewSample {
    @ViewChild('listbox', { static: false }) listbox: ElementRef;

    public ctrlSize: any = { width: 500, height: 400 };
    public currentResourcePath: string = 'assets/integralui-web/icons';
    public currentSelectionMode: IntegralUISelectionMode = IntegralUISelectionMode.MultiExtended;
    public currentTheme: IntegralUITheme = IntegralUITheme.Office;
    public customStyle: any = iuiListBoxOverviewStyle;
    public items: Array<any> = [];

    //
    // Currently when using templates, the LitElement binding syntax is required
    // for properties, methods and events
    //
    currentItemTemplate = (item: any) => { 
        return html`
            <div class="lbox-ovw-item-content">
                <span class="lbox-ovw-icons ${item.icon}"></span>
                <span class="lbox-ovw-title">${item.text}</span>
                <span class="lbox-ovw-year">${item.year}</span>
                <iui-rating division="2" max="5" .resourcePath=${this.currentResourcePath} .value=${item.rating} @valueChanged="${(e) => this.ratingValueChanged(e, item)}"></iui-rating>
            </div>
        `;
    };

    constructor(){
        this.items = [
            { id: 1, icon: "sci-fi", text: "Star Trek", year: "2009", rating: 8.0 },
            { id: 2, icon: "adventure", text: "Cast Away", year: "2000", rating: 7.7  },
            { id: 3, icon: "action", text: "Gladiator ", year: "2000", rating: 8.5 },
            { id: 4, icon: "drama", text: "Malèna", year: "2000", rating: 7.5 },
            { id: 5, icon: "music", text: "Moulin Rouge", year: "2001", rating: 7.6 },
            { id: 6, icon: "comedy", text: "Snatch", year: "2000", rating: 8.3  },
            { id: 7, icon: "biography", text: "A Beautiful Mind", year: "2001", rating: 8.2  },
            { id: 8, icon: "crime", text: "Black Hawk Down", year: "2001", rating: 7.7 },
            { id: 9, icon: "western", text: "Django Unchained", year: "2012", rating: 8.5  },
            { id: 10, icon: "sci-fi", text: "Man of Steel", year: "2013", rating: 7.2 },
            { id: 11, icon: "horror", text: "The Ring", year: "2002", rating: 7.1 },
            { id: 12, icon: "romance", text: "40 Days and 40 Nights", year: "2002", rating: 5.6 },
            { id: 13, icon: "sci-fi", text: "Minority Report", year: "2002", rating: 7.7 },
            { id: 14, icon: "comedy", text: "Scary Movie 3", year: "2003", rating: 5.5 },
            { id: 15, icon: "music", text: "Walk the Line", year: "2005", rating: 7.9  },
            { id: 16, icon: "romance", text: "How to Lose a Guy in 10 Days", year: "2003", rating: 6.4 },
            { id: 17, icon: "crime", text: "The Dark Knight", year: "2008", rating: 9.0  },
            { id: 18, icon: "horror", text: "American Psycho", year: "2000", rating: 7.6 },
            { id: 19, icon: "drama", text: "The Grand Budapest Hotel", year: "2014", rating: 8.1 },
            { id: 20, icon: "comedy", text: "The Wolf of Wall Street", year: "2013", rating: 8.2 }
        ];
    } 

    ngAfterViewInit(){
        this.listbox.nativeElement.itemTemplate = this.currentItemTemplate;
    }

    ratingValueChanged(e: any, item: any){
        item.rating = e.detail.value;
    }
}
