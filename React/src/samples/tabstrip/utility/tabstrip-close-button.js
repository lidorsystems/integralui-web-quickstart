import React, { Component } from 'react';
import { html } from 'integralui-web/external/lit-element.js';

import { IntegralUIAnimationType, IntegralUIObjectState } from 'integralui-web/components/integralui.enums.js';

import IntegralUITabComponent from 'integralui-web/wrappers/react.integralui.tab.js';
import IntegralUITabStripComponent from 'integralui-web/wrappers/react.integralui.tabstrip.js';

import './tabstrip-close-button.css';
import { iuiTabStripCloseButtonStyle } from './tabstrip-close-button.style.js';

class TabStripCloseButton extends Component {
    constructor(props){
        super(props);

        this.state = {
            currentAnimation: IntegralUIAnimationType.Fade,
            currentResourcePath: '../integralui-web/icons',
            currentSelection: null,
            currentTabSpacing: 3,
            isAnimationAllowed: true,
            ctrlSize: { width: 600, height: 300 },
            data: [
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
            ]
        }
    }

    //
    // Currently when using templates, the LitElement binding syntax is required
    // for properties, methods and events
    //
    currentTabTemplate = (tab) => { 
        let btnIcon = tab.state & IntegralUIObjectState.Hovered || tab.state & IntegralUIObjectState.Selected ? '../../integralui-web/icons/close.ico' : '../../integralui-web/icons/close-gray.ico';

        return html`
            <div>
                <span class="tbs-cbtn-icons ${tab.icon}"></span>
                <span>${tab.text}</span>
                <img class="tab-close-button" src=${btnIcon} @mousedown="${(e) => this.closeButtonClicked(e, tab)}" />
            </div>
        `;
    };

    closeButtonClicked(e, tab){
        // Delete tabs only when left mouse button is clicked
        if (e.which === 1){
            let tabIndex = this.state.data.indexOf(tab.data);
            let newTabList = [...this.state.data];
            newTabList.splice(tabIndex, 1);

            // Set selection to a new tab 
            let newSelTab = this.state.currentSelection;
            if (tab.state & IntegralUIObjectState.Selected){
                let newSelIndex = tabIndex < newTabList.length ? tabIndex : newTabList.length - 1;
                newSelTab = newSelIndex >= 0 && newSelIndex < newTabList.length  ? newTabList[newSelIndex] : null;
            }

            this.setState({ data: newTabList, currentSelection: newSelTab });
        }

        e.stopPropagation();
    }

    render() {
        let emptyBlockStyle = { 
            border: 'thin solid #cecece', 
            fontSize: '2rem', 
            padding: '125px 20px',
            width: this.state.ctrlSize.width + 'px', 
            textAlign: 'center'
        }

        let tabs = this.state.data.map((tab, index) => {
                return (
                    <IntegralUITabComponent key={index} data={tab} icon={tab.icon} text={tab.text}>
                        <div className="tbs-cbtn-tab-content">{tab.body}</div>
                    </IntegralUITabComponent>
                )
            });

        return (
            <div>
                <h2>TabStrip / Tabs with Close Button</h2>
                <div className="sample-block">
                    { tabs.length > 0 && 
                        <IntegralUITabStripComponent id="tabstrip-close-button"
                            allowAnimation={this.state.isAnimationAllowed}
                            animation={this.state.currentAnimation}
                            customStyle={iuiTabStripCloseButtonStyle}
                            resourcePath={this.state.currentResourcePath}
                            selectedTab={this.state.currentSelection}
                            size={this.state.ctrlSize}
                            tabSpacing={this.state.currentTabSpacing}
                            tabTemplate={this.currentTabTemplate}
                        > 
                            {tabs}
                        </IntegralUITabStripComponent>
                    }
                    { tabs.length === 0 && <div style={emptyBlockStyle}>All Tabs are Deleted.</div>}
                    <div className="feature-help">
                        <p><span className="initial-space"></span>This sample shows tabs with close button in their header. You can delete tabs by clicking this button.</p>
                        <p><span className="initial-space"></span>Whenever you need to add custom content to the tab header, you can use custom template. This template can be shared between all tabs, or you can specify a different template for each tab separately.</p>
                        <p><span className="initial-space"></span>In this case, the template contains an icon, text and a close button, represented by an 'X' icon.</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default TabStripCloseButton;
