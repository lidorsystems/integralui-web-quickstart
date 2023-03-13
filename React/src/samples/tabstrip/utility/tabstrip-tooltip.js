import React, { Component } from 'react';
import { html } from 'integralui-web/external/lit-element.js';

import { IntegralUIAnimationType, IntegralUITheme } from 'integralui-web/components/integralui.enums.js';
import IntegralUITabComponent from 'integralui-web/wrappers/react.integralui.tab.js';
import IntegralUITabStripComponent from 'integralui-web/wrappers/react.integralui.tabstrip.js';
import 'integralui-web/components/integralui.tooltip.js';

import './tabstrip-tooltip.css';

class TabStripTooltip extends Component {
    constructor(props){
        super(props);

        this.state = {
            ctrlSize: { width: 600, height: 300 },
            currentAnimation: IntegralUIAnimationType.Fade,
            currentResourcePath: '../../integralui-web/icons',
            currentTheme: IntegralUITheme.Office,
            isAnimationAllowed: true,
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

        //
        // Tooltip settings
        //

        this.tooltipSettings = {
            autoPopDelay: 3000,
            enabled: true,
            initialDelay: 500,
            position: 'mouse',
            showMarker: true
        }
    }

    currentTabTemplate = (tab) => { 
        return html`
            <div>
                <iui-tooltip
                    .enabled=${this.tooltipSettings.enabled}
                    .settings=${Object.assign({ title: tab.text }, this.tooltipSettings )}
                    .theme="${this.state.currentTheme}"
                >
                    <span class="tbs-cbtn-icons ${tab.icon}"></span>
                    <span>${tab.text}</span>
                </iui-tooltip>
            </div>
        `;
    };

    render() {
        let tabs = this.state.data.map((tab, index) => {
            return (
                <IntegralUITabComponent key={index} data={tab} icon={tab.icon} text={tab.text}>
                    <div className="tbs-tooltip-tab-content">{tab.body}</div>
                </IntegralUITabComponent>
            )
        });

        return (
            <div>
                <h2>TabStrip / Tabs with Tooltip</h2>
                <div className="sample-block">
                    <IntegralUITabStripComponent id="tabstrip-tooltip"
                        allowAnimation={this.state.isAnimationAllowed}
                        animation={this.state.currentAnimation}
                        resourcePath={this.state.currentResourcePath}
                        size={this.state.ctrlSize}
                        tabTemplate={this.currentTabTemplate}
                    > 
                        {tabs}
                    </IntegralUITabStripComponent>
                    <div className="feature-help">
                        <p><span className="initial-space"></span>In this example, each tab header has a tooltip attached. Whenever the mouse cursor is moved above the tab header, a tooltip will appear showing the tab title.</p>
                        <p><span className="initial-space"></span>Tooltip is fully customizable, you can set the initial delay, how long the tooltip will remain visible, its position etc.</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default TabStripTooltip;
