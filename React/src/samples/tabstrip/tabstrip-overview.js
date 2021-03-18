import React, { Component } from 'react';
//import { html, LitElement } from 'lit-element';

import { IntegralUIAnimationType, IntegralUITabDisplayMode, IntegralUITabScrollMode, IntegralUITabStripPlacement, IntegralUITheme } from 'integralui-web/components/integralui.enums.js';

import IntegralUITabComponent from 'integralui-web/wrappers/react.integralui.tab.js';
import IntegralUITabStripComponent from 'integralui-web/wrappers/react.integralui.tabstrip.js';

import './tabstrip-overview.css';
import { iuiTabStripOverviewStyle } from './tabstrip-overview.style.js';

class TabStripOverview extends Component {
    constructor(props){
        super(props);

        this.state = {
            currentAnimation: IntegralUIAnimationType.Slide,
            currentDisplayMode: IntegralUITabDisplayMode.AutoSized,
            currentResourcePath: '../integralui-web/icons',
            currentScrollMode: IntegralUITabScrollMode.InBound,
            currentSelection: null,
            currentTabSpacing: 3,
            currentTheme: IntegralUITheme.Office,
            isAnimationAllowed: true,
            isDragAllowed: true,
            ctrlSize: { width: 600, height: 300 },
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
            ],
            tabPlacement: IntegralUITabStripPlacement.Top
        }
    }

    tabOrderChanged(e){
        this.setState({ currentSelection: e.detail.tab, data: e.detail.list });
    }

    render() {
        var tabs = this.state.data.map((tab, index) => {
                return (
                    <IntegralUITabComponent key={index} allowDrag={this.state.isDragAllowed} data={tab} icon={tab.icon} text={tab.text} theme={this.state.currentTheme}>
                        <div className="tbs-ovw-tab-content">{tab.body}</div>
                    </IntegralUITabComponent>
                )
            });

        return (
            <div>
                <h2>TabStrip / Overview</h2>
                <div className="sample-block">
                    <IntegralUITabStripComponent
                        allowAnimation={this.state.isAnimationAllowed}
                        allowDrag={this.state.isDragAllowed}
                        animation={this.state.currentAnimation}
                        customStyle={iuiTabStripOverviewStyle}
                        resourcePath={this.state.currentResourcePath}
                        scrollMode={this.state.currentScrollMode} 
                        selectedTab={this.state.currentSelection}
                        size={this.state.ctrlSize}
                        tabSpacing={this.state.currentTabSpacing}
                        tabStripPlacement={this.state.tabPlacement}
                        theme={this.state.currentTheme} 
                        tabOrderChanged={(e) => this.tabOrderChanged(e)}
                        > 
                        {tabs}
                    </IntegralUITabStripComponent>
                    <div className="feature-help">
                        <p><span className="initial-space"></span><strong><span className="code-name">IntegralUI</span> TabStrip</strong> is a native Web Component that allows you to create tabbed content using tabs placed in different orientations.</p>
                        <p><span className="initial-space"></span>When you have many tabs that cannot appear in the TabStrip space all at the same time, it is best to enable scrolling. By default, scrolling is disabled.</p>
                        <p><span className="initial-space"></span>There are three scrolling modes:</p>
                        <ul className="feature-points">
                            <li><span className="code-object">None</span> - scrolling disabled, scroll buttons will not appear</li>
                            <li><span className="code-object">InBound</span> - scrolling enabled, scroll buttons appear next to each other</li>
                            <li><span className="code-object">OutBound</span> - scrolling enabled, scroll buttons appear on left/right or up/down side</li>
                        </ul>
                        <p><span className="initial-space"></span>To reorder tabs, you can use drag drop. Just select a tab and drag it over other tabs. An empty space will appear showing the target position.</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default TabStripOverview;
