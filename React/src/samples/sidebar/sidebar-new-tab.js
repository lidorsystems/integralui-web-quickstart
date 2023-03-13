import React, { Component } from 'react';
import { html } from 'integralui-web/external/lit-element.js';

import IntegralUIPanelComponent from 'integralui-web/wrappers/react.integralui.panel.js';
import IntegralUITabComponent from 'integralui-web/wrappers/react.integralui.tab.js';
import IntegralUISideBarComponent from 'integralui-web/wrappers/react.integralui.sidebar.js';
import { IntegralUITheme } from 'integralui-web/components/integralui.enums.js';

import './sidebar-new-tab.css';
import { iuiSideBarNewTabStyle } from './sidebar-new-tab.style.js';

class SideBarNewTab extends Component {
    constructor(props){
        super(props);

        this.state = {
            ctrlSize: { width: 400 },
            currentResourcePath: '../integralui-web/icons',
            currentSelection: null,
            currentTheme: IntegralUITheme.Office,
            isAnimationAllowed: true,
            data: [
                { id: 999, key: 'NEW' }
            ]
        }

        this.isLoading = false;
        this.tabIcons = [
            'tab-icon library',
            'tab-icon album',
            'tab-icon star-empty',
            'tab-icon notes',
            'tab-icon sports'
        ]
 
        this.sideBarRef = React.createRef();
   }

    // Templates -----------------------------------------------------------------------------

    currentTabTemplate = (tab) => { 
        if (tab && tab.key === 'NEW'){
            let btnIcon = this.isLoading ? '../../integralui-web/icons/load.gif' : '../../integralui-web/icons/plus-24.png';
            let btnClass = this.isLoading ? 'new-tab-button-loading' : 'new-tab-button';

            return html`
                <div class="new-tab-block" @mousedown="${(e) => this.addNewTab(e, tab)}">
                    <img class=${btnClass} src=${btnIcon} />
                </div>
            `;
        }

        return null;
    };

    // Events ------------------------------------------------------------------------------------

    addNewTab(e, tab){
        let self = this;

        // Add new tab only when left mouse button is clicked
        if (e.which === 1){
            let tabs = self.state.data;

            if (tabs.length > 5)
                alert('In this example, you can load up to 5 tabs');
            else {
                // Replace the '+' icon with a loading icon
                self.isLoading = true;
                self.sideBarRef.current.refresh();

                // Once the loading animation is active you can load tab from a custom data source (local or remote), like a JSON file
                setTimeout(function(){
                    let newTabIndex = tabs.indexOf(tab.data);
                    let newTab = { 
                        id: tabs.length, 
                        icon: self.tabIcons[tabs.length - 1], 
                        text: "Tab " + tabs.length,
                        body: "Content of Tab " + tabs.length
                    }

                    // Add the new Tab object to the 
                    tabs.splice(newTabIndex, 0, newTab);
                    self.setState({ data: [...tabs] })

                    // Select the new tab after small delay (time for DOM to refresh the content)
                    setTimeout(function(){
                        self.setState({ currentSelection: newTab })
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
    beforeTabSelection(e){
        if (e.detail.tab && e.detail.tab.key === 'NEW')
            e.detail.cancel = true; 
    }

    // Update ------------------------------------------------------------------------------------

    render() {
        let tabs = this.state.data.map((tab, index) => {
                return (
                    <IntegralUITabComponent key={index} data={tab} icon={tab.icon} theme={this.state.currentTheme}>
                        <div className="sdb-new-tab-tab-content">{tab.body}</div>
                    </IntegralUITabComponent>
                )
            });

        return (
            <div>
                <h2>SideBar / Open New Tab</h2>
                <div className="sample-block" id="sample-block-sidebar-new-tab">
                    <IntegralUISideBarComponent ref={this.sideBarRef}
                        allowAnimation={this.state.isAnimationAllowed}
                        customStyle={iuiSideBarNewTabStyle}
                        parentId={'sample-block-sidebar-new-tab'}
                        resourcePath={this.state.currentResourcePath}
                        selectedTab={this.state.currentSelection}
                        size={this.state.ctrlSize}
                        tabTemplate={this.currentTabTemplate}
                        theme={this.state.currentTheme} 
                        beforeSelect={(e) => this.beforeTabSelection(e)}
                    >
                        {tabs}
                    </IntegralUISideBarComponent>
                    <IntegralUIPanelComponent id="sample-block-sidebar-content" contentAlignment = {{ vertical: 'middle' }}>
                        Sample Content Block
                    </IntegralUIPanelComponent>
                </div>
                <div className="feature-help">
                    <p><span className="initial-space"></span>This sample shows how to load new tab on demand into the SideBar, using the last tab with '+' icon.</p>
                    <p><span className="initial-space"></span>The last tab is modified using custom template to change its appearance to a loading icon whenever is selected. In this case, whenever the '+' is clicked a new tab is added into the SideBar, which becomes selected and expanded. In additon the tab with '+' icon is prevented to appear as selected, clicking on it will only add new tabs.</p>
                    <p><span className="initial-space"></span>You can use JSON file or any other data source, for demonstration purposes the sample shows a loading icon whenever a new tab is loaded. You can customize this behavior in code.</p>
                </div>
            </div>
        );
    }
}

export default SideBarNewTab;
