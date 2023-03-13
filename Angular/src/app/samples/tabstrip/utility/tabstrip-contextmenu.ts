import { Component, ElementRef, ViewChild } from '@angular/core';
import { html } from 'integralui-web/external/lit-element';

import 'integralui-web/components/integralui.contextmenu';
import 'integralui-web/components/integralui.tab';
import 'integralui-web/components/integralui.tabstrip';
import { IntegralUIAnimationType, IntegralUITheme } from 'integralui-web/components/integralui.enums';
import { iuiTabContextMenuStyle } from './tabstrip-contextmenu.style';

@Component({
    selector: '',
    templateUrl: './tabstrip-contextmenu.html',
    styleUrls: ['./tabstrip-contextmenu.css']
})
export class TabStripContextMenu {
    @ViewChild('tabstrip', { static: false }) tabstrip!: ElementRef;

    public currentAnimation: IntegralUIAnimationType = IntegralUIAnimationType.Slide;
    public currentResourcePath: string = 'assets/icons';
    public currentSelection: any = null;
    public customStyle: any = iuiTabContextMenuStyle;
    public ctrlSize: any = { width: 600, height: 300 };
    public currentTheme: IntegralUITheme = IntegralUITheme.Office;
    public tabs: Array<any> = [];

    //
    // Context Menu
    //

    public menuSettings: any = {
        items: [
            { id: 3, text: "Add Tab" },
            { id: 4, text: "Insert Tab Before" },
            { id: 5, text: "Insert Tab After" },
            { id: 6, type: "separator" },
            { id: 7, text: "Remove Tab" }
        ]
    }

    constructor(){
        this.tabs = [
            { 
                id: 1,
                text: 'Tab 1',
                body: 'Curabitur pretium tincidunt lacus. Nulla gravida orci a odio. Nullam varius, turpis et commodo pharetra, est eros bibendum elit, nec luctus magna felis sollicitudin mauris. Integer in mauris eu nibh euismod gravida. Duis ac tellus et risus vulputate vehicula. Donec lobortis risus a elit. Etiam tempor.'
            },
            { 
                id: 2,
                text: 'Tab 2',
                body: 'Pellentesque malesuada nulla a mi. Duis sapien sem, aliquet nec, commodo eget, consequat quis, neque. Aliquam faucibus, elit ut dictum aliquet, felis nisl adipiscing sapien, sed malesuada diam lacus eget erat. Cras mollis scelerisque nunc. Nullam arcu. Aliquam consequat.'
            },
            { 
                id: 3,
                text: 'Tab 3',
                body: 'Fusce convallis, mauris imperdiet gravida bibendum, nisl turpis suscipit mauris, sed placerat ipsum urna sed risus. In convallis tellus a mauris. Curabitur non elit ut libero tristique sodales. Mauris a lacus. Donec mattis semper leo. In hac habitasse platea dictumst.'
            }
        ];
    }

    currentTabTemplate = (tab: any) => { 
        return html`
            <iui-contextmenu
                .customStyle=${iuiTabContextMenuStyle}
                .enabled=${true}
                .settings=${this.menuSettings}
                .theme=${this.currentTheme}
                @menuClick="${(e: any) => this.tabMenuClick(e)}"
                @menuOpening="${() => this.tabMenuOpening(tab)}"
            >
                <div>
                    <span class="tbs-cmnu-icons ${tab.icon}"></span>
                    <span>${tab.text}</span>
                </div>
            </iui-contextmenu>
        `;
    };

    // Add Tabs ------------------------------------------------------------------------------

    createNewTab(option: any){
        let self = this;

        let tabId = self.tabs.length + 1;
        let newTab: any = { id: tabId, text: "Tab " + tabId, body: "Content of Tab " + tabId }
        let selIndex = self.tabs.indexOf(self.currentSelection);

        switch (option){
            case 3: // Add
                self.tabs.push(newTab);
                break;

            case 4: // Insert Before
                if (selIndex >= 0)
                    self.tabs.splice(selIndex, 0, newTab);
                break;

            case 5: // Insert After
                if (selIndex >= 0)
                    self.tabs.splice(selIndex + 1, 0, newTab);
                break;
        }

        // Scroll tabs and show the newly added tab in the TabStrip
        setTimeout(function(){
            // Change selection to the new tab
            self.currentSelection = newTab;
            self.tabstrip.nativeElement.scrollTo(newTab);
        }, 1);
    }

    // Remove Tabs ---------------------------------------------------------------------------

    removeTab(){
        let selIndex = this.tabs.indexOf(this.currentSelection);

        if (selIndex >= 0){
            this.tabs.splice(selIndex, 1);
            this.currentSelection = selIndex > 0 ? this.tabs[selIndex - 1] : null;
        }
    }

    // ContextMenu events --------------------------------------------------------------------

    tabMenuClick(e: any){
        if (e.detail.item){
            // Action depends on selected menu option
            switch (e.detail.item.id){
                case 7:
                    this.removeTab();
                    break;

                default:
                    this.createNewTab(e.detail.item.id);
                    break;
            }
        }
    }

    tabMenuOpening(tab: any){
        this.currentSelection = tab;
    }
}
