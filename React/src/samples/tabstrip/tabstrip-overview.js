import React, { Component } from 'react';
//import { html, LitElement } from 'lit-element.js';

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
            currentResourcePath: '../../integralui-web/icons',
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
                        contentAnimation={this.state.currentAnimation}
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
                        <p><span className="initial-space"></span><strong><span className="code-name">IntegralUI</span> TabStrip</strong> is a native Web Component that allows you to create tabbed content using tabs placed in single or multiple lines on specific side.</p>
                        <p><span className="initial-space"></span>The following features are supported:</p>
                        <ul className="feature-points">
                            <li><span className="code-object">Animations</span> - tab content is animated using Fade or Slide animations</li>
                            <li><span className="code-object">Customizable Appearance</span> - you can customize appearance of all tabs in general using CSS or for individualy for each tab using inline styles</li>
                            <li><span className="code-object">Drag and Drop</span> - allows you to reorder tabs during run-time</li>
                            <li><span className="code-object">Multiline tabs</span> - arranges tabs in multiple lines</li>
                            <li><span className="code-object">Scrolling</span> - different modes of scrolling</li>
                            <li><span className="code-object">Tab Alignment</span> - aligns tabs to top/left, middle or bottom/right side within the tab strip</li>
                            <li><span className="code-object">Tab Placement</span> - tabs can be placed on each side: Top, Right, Bottom or Left</li>
                            <li><span className="code-object">Tab Orientataion</span> - tabs can appear with Horizontal or Vertical orientation</li>
                            <li><span className="code-object">Templates</span> - each tab header can have custom HTML elements arranged in custom layouts</li>
                            <li><span className="code-object">Toolbars</span> - in top and border placement, tab strip can have custom HTML content like toolbar on left and right side</li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

export default TabStripOverview;
