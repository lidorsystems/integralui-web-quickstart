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
import { styleMap } from 'integralui-web/external/style-map';

import 'integralui-web/components/integralui.tab';
import 'integralui-web/components/integralui.tabstrip';
import { IntegralUIAnimationType, IntegralUITabScrollMode } from 'integralui-web/components/integralui.enums';
import { iuiTabStripNewTabStyle } from './tabstrip-new-tab.style';

@Component({
    selector: '',
    templateUrl: './tabstrip-new-tab.html',
    styleUrls: ['./tabstrip-new-tab.css']
})
export class TabStripNewTab {
    @ViewChild('tabstrip', { static: false }) tabstrip!: ElementRef;

    public currentAnimation: IntegralUIAnimationType = IntegralUIAnimationType.Fade;
    public currentResourcePath: string = 'assets/icons';
    public currentScrollMode: IntegralUITabScrollMode = IntegralUITabScrollMode.OutBound;
    public currentSelection: any = null;
    public currentTabSpacing: number = 3;
    public customStyle: any = iuiTabStripNewTabStyle;
    public ctrlSize: any = { width: 450, height: 300 };
    public isLoading: boolean = false;
    public tabs: Array<any> = [];

    constructor(){
        this.tabs = [
            { id: 1, text: 'Tab 1' },
            { id: 999, tag: 'NEW' }
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
        if (tab && tab.tag === 'NEW'){
            let btnIcon = this.isLoading ? 'assets/icons/load.gif' : 'assets/icons/plus-24.png';
            let btnClass = this.isLoading ? 'new-tab-button-loading' : 'new-tab-button';

            return html`
                <div class="new-tab-block">
                    <img class=${btnClass} src=${btnIcon} @mousedown="${(e: any) => this.addNewTab(e, tab)}" />
                </div>
            `;
        }
        else
            return html`<div><span style=${styleMap({ display: 'inline-block', padding: '4px 2px 2px 2px'})}>${tab.text}</span></div>`;
    };

    addNewTab(e: any, tab: any){
        let self = this;

        // Add new tab only when left mouse button is clicked
        if (e.which === 1){
            // Replace the '+' icon with a loading icon
           self.isLoading = true;

            // Once the loading animation is active you can load tab from a custom data source (local or remote), like a JSON file
            setTimeout(function(){
                let newTabIndex = self.tabs.indexOf(tab);
                let newTab = { id: self.tabs.length, text: "Tab " + self.tabs.length }
                self.tabs.splice(newTabIndex, 0, newTab);

                self.currentSelection = newTab;
                self.isLoading = false;

                // Scroll tabs and show the newly added tab in the TabStrip
                setTimeout(function(){
                    self.tabstrip.nativeElement.scrollPos(999);
                }, 1);

            }, 1000);
        }

        e.stopPropagation();
    }

    // Cancel selection if an user clicks in space between '+' icon and the tab border
    // This is because of default style settings that provide small padding between custom content and tab header space
    // If this padding is zero, this event is not required
    beforeTabSelection(e: any){
        if (e.detail.tab && e.detail.tab.tag === 'NEW')
            e.detail.cancel = true; 
    }
}