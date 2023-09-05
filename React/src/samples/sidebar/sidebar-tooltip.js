import React, { Component } from 'react';
import { html } from 'integralui-web/external/lit-element.js';

import IntegralUIPanelComponent from 'integralui-web/wrappers/react.integralui.panel.js';
import IntegralUITabComponent from 'integralui-web/wrappers/react.integralui.tab.js';
import IntegralUISideBarComponent from 'integralui-web/wrappers/react.integralui.sidebar.js';
import { IntegralUITheme } from 'integralui-web/components/integralui.enums.js';
import 'integralui-web/components/integralui.tooltip.js';

import './sidebar-tooltip.css';
import { iuiSideBarTooltipStyle } from './sidebar-tooltip.style.js';

class SideBarTooltip extends Component {
    constructor(props){
        super(props);

        this.state = {
            ctrlSize: { width: 400 },
            currentResourcePath: '../integralui-web/icons',
            currentTheme: IntegralUITheme.Office,
            isAnimationAllowed: true,
            data: [
                { 
                    id: 1,
                    icon: 'tab-icon library',
                    text: 'Books',
                    body: 'Curabitur pretium tincidunt lacus. Nulla gravida orci a odio. Nullam varius, turpis et commodo pharetra, est eros bibendum elit, nec luctus magna felis sollicitudin mauris. Integer in mauris eu nibh euismod gravida. Duis ac tellus et risus vulputate vehicula. Donec lobortis risus a elit. Etiam tempor.'
                },
                { 
                    id: 2,
                    icon: 'tab-icon album',
                    text: 'Music',
                    body: 'Pellentesque malesuada nulla a mi. Duis sapien sem, aliquet nec, commodo eget, consequat quis, neque. Aliquam faucibus, elit ut dictum aliquet, felis nisl adipiscing sapien, sed malesuada diam lacus eget erat. Cras mollis scelerisque nunc. Nullam arcu. Aliquam consequat.'
                },
                { 
                    id: 3,
                    icon: 'tab-icon star-empty',
                    text: 'Favorites',
                    body: 'Fusce convallis, mauris imperdiet gravida bibendum, nisl turpis suscipit mauris, sed placerat ipsum urna sed risus. In convallis tellus a mauris. Curabitur non elit ut libero tristique sodales. Mauris a lacus. Donec mattis semper leo. In hac habitasse platea dictumst.'
                },
                { 
                    id: 4,
                    icon: 'tab-icon notes',
                    text: 'Notes',
                    body: 'Duis ac tellus et risus vulputate vehicula. Donec lobortis risus a elit. Etiam tempor. Ut ullamcorper, ligula eu tempor congue, eros est euismod turpis, id tincidunt sapien risus a quam. Maecenas fermentum consequat mi. Donec fermentum.'
                },
                { 
                    id: 5,
                    icon: 'tab-icon sports',
                    text: 'Sports',
                    body: 'Aliquam faucibus, elit ut dictum aliquet, felis nisl adipiscing sapien, sed malesuada diam lacus eget erat. Cras mollis scelerisque nunc. Nullam arcu. Aliquam consequat.'
                }
            ]
        }

        //
        // Tooltip settings
        //

        this.tooltipSettings = {
            autoPopDelay: 3000,
            enabled: true,
            initialDelay: 1000,
            position: 'mouse',
            showMarker: true
        }
    }

    // Templates -----------------------------------------------------------------------------

    currentTabTemplate = (tab) => { 
        return html`
            <div>
                <iui-tooltip
                    .enabled=${this.tooltipSettings.enabled}
                    .settings=${Object.assign({ title: tab.text }, this.tooltipSettings )}
                    .theme=${this.state.currentTheme}
                >
                    <span class="sdbr-ttp-icons ${tab.icon}"></span>
                </iui-tooltip>
            </div>
        `;
    };

    // Update ------------------------------------------------------------------------------------

    render() {
        let tabs = this.state.data.map((tab, index) => {
                return (
                    <IntegralUITabComponent key={index} data={tab} icon={tab.icon} theme={this.state.currentTheme}>
                        <div className="sdb-ttp-tab-content">{tab.body}</div>
                    </IntegralUITabComponent>
                )
            });

        return (
            <div>
                <h2>SideBar / Tooltip</h2>
                <div className="sample-block" id="sample-block-sidebar-tooltip">
                    <IntegralUISideBarComponent
                        allowAnimation={this.state.isAnimationAllowed}
                        customStyle={iuiSideBarTooltipStyle}
                        inbound={true}
                        parentId={'sample-block-sidebar-tooltip'}
                        resourcePath={this.state.currentResourcePath}
                        selectedTab={this.state.currentSelection}
                        size={this.state.ctrlSize}
                        tabTemplate={this.currentTabTemplate}
                        theme={this.state.currentTheme} 
                    >
                        {tabs}
                    </IntegralUISideBarComponent>
                    <IntegralUIPanelComponent id="sample-block-sidebar-content" contentAlignment = {{ horizontal: 'center', vertical: 'middle' }}>
                        Sample Content Block
                    </IntegralUIPanelComponent>
                </div>
                <div className="feature-help">
                    <p><span className="initial-space"></span>In this example, each tab has a tooltip attached. Whenever the mouse cursor is moved above the tab icon, a tooltip will appear showing the tab title.</p>
                    <p><span className="initial-space"></span>Tooltip is fully customizable, you can set the initial delay, how long the tooltip will remain visible, its position etc.</p>
                </div>
            </div>
        );
    }
}

export default SideBarTooltip;
