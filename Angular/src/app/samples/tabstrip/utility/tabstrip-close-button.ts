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

import 'integralui-web/components/integralui.tab';
import 'integralui-web/components/integralui.tabstrip';
import { IntegralUIAnimationType, IntegralUIObjectState } from 'integralui-web/components/integralui.enums';
import { iuiTabStripCloseButtonStyle } from './tabstrip-close-button.style';

@Component({
    selector: '',
    templateUrl: './tabstrip-close-button.html',
    styleUrls: ['./tabstrip-close-button.css']
})
export class TabStripCloseButton {
    @ViewChild('tabstrip', { static: false }) tabstrip!: ElementRef;

    public currentAnimation: IntegralUIAnimationType = IntegralUIAnimationType.Fade;
    public currentResourcePath: string = 'assets/icons';
    public currentSelection: any = null;
    public currentTabSpacing: number = 3;
    public customStyle: any = iuiTabStripCloseButtonStyle;
    public ctrlSize: any = { width: 600, height: 300 };
    public tabs: Array<any> = [];
    public toolbarIcons: Array<string> = ['tbs-tool-watch', 'tbs-tool-charts', '', 'tbs-tool-favorite'];

    constructor(){
        this.tabs = [
            { 
                id: 1,
                icon: 'library',
                text: 'Books',
                body: 'Curabitur pretium tincidunt lacus. Nulla gravida orci a odio. Nullam varius, turpis et commodo pharetra, est eros bibendum elit, nec luctus magna felis sollicitudin mauris. Integer in mauris eu nibh euismod gravida. Duis ac tellus et risus vulputate vehicula. Donec lobortis risus a elit. Etiam tempor.'
            },
            { 
                id: 2,
                icon: 'album',
                text: 'Music',
                body: 'Pellentesque malesuada nulla a mi. Duis sapien sem, aliquet nec, commodo eget, consequat quis, neque. Aliquam faucibus, elit ut dictum aliquet, felis nisl adipiscing sapien, sed malesuada diam lacus eget erat. Cras mollis scelerisque nunc. Nullam arcu. Aliquam consequat.'
            },
            { 
                id: 3,
                icon: 'star-empty',
                text: 'Favorites',
                body: 'Fusce convallis, mauris imperdiet gravida bibendum, nisl turpis suscipit mauris, sed placerat ipsum urna sed risus. In convallis tellus a mauris. Curabitur non elit ut libero tristique sodales. Mauris a lacus. Donec mattis semper leo. In hac habitasse platea dictumst.'
            }
        ];
    }

    ngAfterViewInit(){
        this.tabstrip.nativeElement.tabTemplate = this.currentTabTemplate;
    }

    //
    // Currently when using templates, the LitElement binding syntax is required
    // for properties, methods and events
    //
    currentTabTemplate = (tab: any) => { 
        let btnIcon = 'assets/icons/close.ico';

        return html`
            <div>
                <span class="tbs-cbtn-icons ${tab.icon}"></span>
                <span>${tab.text}</span>
                <img class="tab-close-button" src=${btnIcon} @mousedown="${(e: any) => this.closeButtonClicked(e, tab)}" />
            </div>
        `;
    };

    closeButtonClicked(e: any, tab: any){
        // Delete tabs only when left mouse button is clicked
        if (e.which === 1){
            let tabIndex = this.tabs.indexOf(tab);
            this.tabs.splice(tabIndex, 1);

            // Set selection to a new tab 
            let newSelTab = this.currentSelection;
            if (tab.selected){
                let newSelIndex = tabIndex < this.tabs.length ? tabIndex : this.tabs.length - 1;
                newSelTab = newSelIndex >= 0 && newSelIndex < this.tabs.length  ? this.tabs[newSelIndex] : null;
            }

            this.currentSelection = newSelTab;
        }

        e.stopPropagation();
    }
}
