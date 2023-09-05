import React, { Component } from 'react';
import { html } from 'integralui-web/external/lit-element.js';

import { IntegralUIAnimationType, IntegralUITheme } from 'integralui-web/components/integralui.enums.js';

import IntegralUITabComponent from 'integralui-web/wrappers/react.integralui.tab.js';
import IntegralUITabStripComponent from 'integralui-web/wrappers/react.integralui.tabstrip.js';
import { iuiTabContextMenuStyle } from './tabstrip-contextmenu.style.js';
import 'integralui-web/components/integralui.contextmenu.js';

import './tabstrip-contextmenu.css';

class TabStripContextMenu extends Component {
    constructor(props){
        super(props);

        this.state = {
            ctrlSize: { width: 600, height: 300 },
            currentAnimation: IntegralUIAnimationType.Slide,
            currentResourcePath: '../../integralui-web/icons',
            currentSelection: null,
            currentTabSpacing: 3,
            currentTheme: IntegralUITheme.Office,
            isAnimationAllowed: true,
            tabs: [
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
            ]
        }

        //
        // Context Menu
        //

        this.menuSettings = {
            items: [
                { id: 3, text: "Add Tab" },
                { id: 4, text: "Insert Tab Before" },
                { id: 5, text: "Insert Tab After" },
                { id: 6, type: "separator" },
                { id: 7, text: "Remove Tab" }
            ]
        }

        this.tabstripRef = React.createRef();
    }

    currentTabTemplate = (tab) => { 
        return html`
            <iui-contextmenu
                .customStyle=${iuiTabContextMenuStyle}
                .enabled=${true}
                .settings=${this.menuSettings}
                .theme="${this.state.currentTheme}"
                @menuClick="${(e) => this.tabMenuClick(e)}"
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

    createNewTab(option){
        let self = this;

        let tabList = [...self.state.tabs];
        let newTab = { id: tabList.length + 1, text: "Tab " + (tabList.length + 1).toString() }
        newTab.body = "Content of " + newTab.id;
        let selIndex = self.tabstripRef.current.ctrlRef.current.selectedIndex;

        switch (option){
            case 3: // Add
                tabList.push(newTab);
                break;

            case 4: // Insert Before
                if (selIndex >= 0)
                    tabList.splice(selIndex, 0, newTab);
                break;

            case 5: // Insert After
                if (selIndex >= 0)
                    tabList.splice(selIndex + 1, 0, newTab);
                break;
        }

        // Scroll tabs and show the newly added tab in the TabStrip
        setTimeout(function(){
            // Change selection to the new tab
            self.setState({ tabs: tabList, currentSelection: newTab });
            self.tabstripRef.current.scrollTo(newTab);
        }, 1);
    }

    // Remove Tabs ---------------------------------------------------------------------------

    removeTab(){
        let tabList = [...this.state.tabs];
        let selIndex = this.tabstripRef.current.ctrlRef.current.selectedIndex;

        if (selIndex >= 0){
            tabList.splice(selIndex, 1);
            this.setState({ tabs: tabList, currentSelection: selIndex > 0 ? this.state.tabs[selIndex - 1] : null });
        }
    }

    // ContextMenu events --------------------------------------------------------------------

    tabMenuClick(e){
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

    tabMenuOpening(tab){
        this.setState({ currentSelection: tab });
    }

    render() {
        let tabs = this.state.tabs.map((tab, index) => {
            return (
                <IntegralUITabComponent key={index} data={tab} icon={tab.icon} text={tab.text}>
                    <div className="tbs-cmnu-tab-content">{tab.body}</div>
                </IntegralUITabComponent>
            )
        });

        return (
            <div>
                <h2>TabStrip / Tabs with Context Menu</h2>
                <div className="sample-block">
                    <IntegralUITabStripComponent id="tabstrip-contextmenu" ref={this.tabstripRef}
                        allowAnimation={this.state.isAnimationAllowed}
                        contentAnimation={this.state.currentAnimation}
                        customStyle={iuiTabContextMenuStyle}
                        resourcePath={this.state.currentResourcePath}
                        selectedTab={this.state.currentSelection}
                        size={this.state.ctrlSize}
                        tabTemplate={this.currentTabTemplate}
                    > 
                        {tabs}
                    </IntegralUITabStripComponent>
                    <div className="feature-help">
                        <p><span className="initial-space"></span>An example where if you right-click on each tab header a context menu will popup. Using the context menu you can add or remove tabs.</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default TabStripContextMenu;
