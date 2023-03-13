import React, { Component } from 'react';
import { html } from 'integralui-web/external/lit-element.js';
import { styleMap } from 'integralui-web/external/style-map';

import { IntegralUIAnimationType, IntegralUITabScrollMode } from 'integralui-web/components/integralui.enums.js';

import IntegralUITabComponent from 'integralui-web/wrappers/react.integralui.tab.js';
import IntegralUITabStripComponent from 'integralui-web/wrappers/react.integralui.tabstrip.js';

import './tabstrip-new-tab.css';
import { iuiTabStripNewTabStyle } from './tabstrip-new-tab.style.js';

class TabStripNewTab extends Component {
    constructor(props){
        super(props);

        this.state = {
            currentAnimation: IntegralUIAnimationType.Fade,
            currentResourcePath: '../../integralui-web/icons',
            currentScrollMode: IntegralUITabScrollMode.OutBound,
            currentSelection: null,
            currentTabSpacing: 3,
            isAnimationAllowed: true,
            isLoading: false,
            ctrlSize: { width: 450, height: 300 },
            tabs: [
                { id: 1, text: 'Tab 1' },
                { id: 999, tag: 'NEW' }
            ]
        }

        this.tabStripRef = React.createRef();
   }

    //
    // Currently when using templates, the LitElement binding syntax is required
    // for properties, methods and events
    //
    currentTabTemplate = (tab) => { 
        if (tab && tab.tag === 'NEW'){
            let btnIcon = this.state.isLoading ? '../../../integralui-web/icons/load.gif' : '../../../integralui-web/icons/plus-24.png';
            let btnClass = this.state.isLoading ? 'new-tab-button-loading' : 'new-tab-button';

            return html`
                <div class="new-tab-block">
                    <img class=${btnClass} src=${btnIcon} @mousedown="${(e) => this.addNewTab(e, tab)}" />
                </div>
            `;
        }
        else
            return html`<div><span style=${styleMap({ display: 'inline-block', padding: '4px 2px 2px 2px'})}>${tab.text}</span></div>`;
    };

    addNewTab(e, tab){
        let self = this;

        // Add new tab only when left mouse button is clicked
        if (e.which === 1){
            // Replace the '+' icon with a loading icon
            self.setState({ isLoading: true });

            // Once the loading animation is active you can load tab from a custom data source (local or remote), like a JSON file
            setTimeout(function(){
                let newTabList = [...self.state.tabs];
                let newTabIndex = newTabList.indexOf(tab);
                let newTab = { id: newTabList.length, text: "Tab " + newTabList.length }
                newTabList.splice(newTabIndex, 0, newTab);

                self.setState({ tabs: newTabList, currentSelection: newTab, isLoading: false });

                // Scroll tabs and show the newly added tab in the TabStrip
                setTimeout(function(){
                    self.tabStripRef.current.scrollTo(newTab);
                }, 10);

            }, 1000);
        }

        e.stopPropagation();
    }

    // Cancel selection if an user clicks in space between '+' icon and the tab border
    // This is because of default style settings that provide small padding between custom content and tab header space
    // If this padding is zero, this event is not required
    beforeTabSelection(e){
        if (e.detail.tab && e.detail.tab.tag === 'NEW')
            e.detail.cancel = true; 
    }

    render() {
        let tabs = this.state.tabs.map((tab, index) => {
                return (
                    <IntegralUITabComponent id={tab.id} key={index} data={tab} text={tab.text}>
                        <div className="tbs-ntb-tab-content">Content of {tab.text}</div>
                    </IntegralUITabComponent>
                )
            });

        return (
            <div>
                <h2>TabStrip / Add New Tab on Demand</h2>
                <div className="sample-block">
                    <IntegralUITabStripComponent id="tabstrip-new-tab" ref={this.tabStripRef}
                        allowAnimation={this.state.isAnimationAllowed}
                        animation={this.state.currentAnimation}
                        customStyle={iuiTabStripNewTabStyle}
                        resourcePath={this.state.currentResourcePath}
                        scrollMode={this.state.currentScrollMode} 
                        selectedTab={this.state.currentSelection}
                        size={this.state.ctrlSize}
                        tabSpacing={this.state.currentTabSpacing}
                        tabTemplate={this.currentTabTemplate}
                        beforeSelect={(e) => this.beforeTabSelection(e)}
                    > 
                        {tabs}
                    </IntegralUITabStripComponent>
                    <div className="feature-help">
                        <p><span className="initial-space"></span>This sample shows how to create new tabs on demand, using a custom button set at the end of the tabstrip.</p>
                        <p><span className="initial-space"></span>The button is actually a Tab, where its content is modified so that tab border and background is hidden. For this purpose a custom template is used where the tab shows only a '+' icon.</p>
                        <p><span className="initial-space"></span>In this case, whenever the '+' button is clicked a new tab is added and the tabstrip is scrolled to show it into the view.</p>
                        <p><span className="initial-space"></span>When adding tabs from a remote data source, instead of a '+', you can show a custom loading icon.</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default TabStripNewTab;
