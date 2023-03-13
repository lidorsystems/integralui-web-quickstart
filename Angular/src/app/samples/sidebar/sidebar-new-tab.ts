import { Component, ElementRef, ViewChild } from '@angular/core';
import { html } from 'integralui-web/external/lit-element';

import 'integralui-web/components/integralui.panel';
import 'integralui-web/components/integralui.sidebar';
import 'integralui-web/components/integralui.tab';
import { IntegralUITheme } from 'integralui-web/components/integralui.enums';
import { iuiSideBarNewTabStyle } from './sidebar-new-tab.style';

@Component({
    selector: '',
    templateUrl: './sidebar-new-tab.html',
    styleUrls: ['./sidebar-new-tab.css']
})
export class SideBarNewTab {
    @ViewChild('sidebar', { static: false }) sidebar!: ElementRef;

    public ctrlSize: any = { width: 400 };
    public currentResourcePath: string = 'assets/icons';
    public currentSelection: any = null;
    public currentTheme: IntegralUITheme = IntegralUITheme.Office;
    public customStyle: any = iuiSideBarNewTabStyle;
    public isAnimationAllowed: boolean = true;
    public tabs: Array<any> = [];

    public isLoading: boolean = false;

    private tabIcons: Array<string> = [
        'tab-icon library',
        'tab-icon album',
        'tab-icon star-empty',
        'tab-icon notes',
        'tab-icon sports'
    ]

    constructor(){
        this.tabs = [
            { id: 999, key: 'NEW' }
        ];
    } 

    // Templates -----------------------------------------------------------------------------

    currentTabTemplate = (tab: any) => { 
        if (tab && tab.key === 'NEW'){
            let btnIcon = this.isLoading ? 'assets/icons/load.gif' : 'assets/icons/plus-24.png';
            let btnClass = this.isLoading ? 'new-tab-button-loading' : 'new-tab-button';

            return html`
                <div class="new-tab-block" @mousedown="${(e: any) => this.addNewTab(e, tab)}">
                    <img class=${btnClass} src=${btnIcon} />
                </div>
            `;
        }

        return null;
    };

    // Events ------------------------------------------------------------------------------------

    addNewTab(e: any, tab: any){
        let self = this;

        // Add new tab only when left mouse button is clicked
        if (e.which === 1){
            if (self.tabs.length > 5)
                alert('In this example, you can load up to 5 tabs');
            else {
                // Replace the '+' icon with a loading icon
                self.isLoading = true;
                self.sidebar.nativeElement.refresh();

                // Once the loading animation is active you can load tab from a custom data source (local or remote), like a JSON file
                setTimeout(function(){
                    let newTabIndex = self.tabs.indexOf(tab.data);
                    let newTab: any = { 
                        id: self.tabs.length, 
                        icon: self.tabIcons[self.tabs.length - 1], 
                        text: "Tab " + self.tabs.length,
                        body: "Content of Tab " + self.tabs.length
                    }

                    // Add the new Tab object to the SideBar
                    self.tabs.splice(newTabIndex, 0, newTab);

                    // Select the new tab after small delay (time for DOM to refresh the content)
                    setTimeout(function(){
                        self.currentSelection = newTab;
                    }, 1);

                    self.isLoading = false;
                }, 1000);
            }
        }

        e.stopPropagation();
    }

    // Cancel selection if an user clicks in space between '+' icon and the tab border
    // This is because of default style settings that provide small padding between custom content and tab header space
    // If this padding is zero, this event is not required
    beforeTabSelection(e: any){
        if (e.detail.tab && e.detail.tab.key === 'NEW')
            e.detail.cancel = true; 
    }
}
