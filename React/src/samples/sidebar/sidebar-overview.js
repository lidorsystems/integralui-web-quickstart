import React, { Component } from 'react';

import IntegralUIPanelComponent from 'integralui-web/wrappers/react.integralui.panel.js';
import IntegralUISideBarComponent from 'integralui-web/wrappers/react.integralui.sidebar.js';
import IntegralUITabComponent from 'integralui-web/wrappers/react.integralui.tab.js';
import { IntegralUITheme } from 'integralui-web/components/integralui.enums.js';

import './sidebar-overview.css';
import { iuiSideBarOverviewStyle } from './sidebar-overview.style.js';

class SideBarOverview extends Component {
    constructor(props){
        super(props);

        this.state = {
            ctrlSize: { width: 400 },
            currentResourcePath: '../integralui-web/icons',
            currentSelection: null,
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

        this.state.currentSelection = this.state.data[0];
    }

    // Update ------------------------------------------------------------------------------------

    render() {
        let tabs = this.state.data.map((tab, index) => {
                return (
                    <IntegralUITabComponent key={index} data={tab} icon={tab.icon} theme={this.state.currentTheme}>
                        <div className="sdb-ovw-tab-content">{tab.body}</div>
                    </IntegralUITabComponent>
                )
            });

        return (
            <div>
                <h2>SideBar / Overview</h2>
                <div className="sample-block" id="sample-block-sidebar-overview">
                    <IntegralUISideBarComponent
                        allowAnimation={this.state.isAnimationAllowed}
                        customStyle={iuiSideBarOverviewStyle}
                        expanded={true}
                        parentId={'sample-block-sidebar-overview'}
                        resourcePath={this.state.currentResourcePath}
                        selectedTab={this.state.currentSelection}
                        showHeader={true}
                        size={this.state.ctrlSize}
                        theme={this.state.currentTheme} 
                    >
                        {tabs}
                    </IntegralUISideBarComponent>
                    <IntegralUIPanelComponent id="sample-block-sidebar-content" contentAlignment = {{ horizontal: 'center', vertical: 'middle' }}>
                        Sample Content Block
                    </IntegralUIPanelComponent>
                </div>
                <div className="feature-help">
                    <p><span className="initial-space"></span><strong><span className="code-name">IntegralUI</span> SideBar</strong> is a native Web Component that allows you to add custom content panel that appears by sliding from page side.</p>
                    <p><span className="initial-space"></span>The following features are available.</p>
                    <ul className="feature-points">
                        <li><span className="code-name">Animations</span> - There are different animations available for different action within the side bar</li>
                        <li><span className="code-name">AutoHide</span> - Allows you to pin or unpin the content panel when expanded. When pinned other parts of parent container will move to make space for the content panel, when unpinned the content panel popups on top of parent container.</li>
                        <li><span className="code-name">Custom Content</span> - Each tab can have its own content composed from custom HTML elements or other components</li>
                        <li><span className="code-name">Different Sides</span> - You can place SideBar component on each side of parent container: Top, Right, Bottom or Left </li>
                        <li><span className="code-name">Dynamic Resize</span> - Any changes to parent container size affects the position and size of the side panel</li>
                        <li><span className="code-name">Events</span> - There are multiple events fired based on action: expand/collapse, selection, resize etc. </li>
                        <li><span className="code-name">Resize</span> - When enabled, you can resize the content panel during run-time</li>
                        <li><span className="code-name">Tab Alignment</span> - Tabs can appear aligned to top/left, middle or bottom/right side</li>
                        <li><span className="code-name">Tabs</span> - SideBar can contain multiple tabs with different content panels</li>
                        <li><span className="code-name">Templates</span> - You can add custom HTML elements to tabs and header</li>
                        <li><span className="code-name">Tooltips</span> - Each tab can have its own tooltip</li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default SideBarOverview;
