import React, { Component } from 'react';

import IntegralUIPanelComponent from 'integralui-web/wrappers/react.integralui.panel.js';
import IntegralUITabComponent from 'integralui-web/wrappers/react.integralui.tab.js';
import IntegralUISideBarComponent from 'integralui-web/wrappers/react.integralui.sidebar.js';
import { IntegralUIPlacement, IntegralUITheme } from 'integralui-web/components/integralui.enums.js';

import './sidebar-different-sides.css';
import { iuiSideBarDifferentSidesStyle } from './sidebar-different-sides.style.js';

class SideBarDifferentSides extends Component {
    constructor(props){
        super(props);

        this.state = {
            // Settings for both Sidebars
            currentResourcePath: '../integralui-web/icons',
            currentTheme: IntegralUITheme.Office,
            isAnimationAllowed: true,

            // First SideBar
            ctrlSize: { width: 300 },
            currentPlacement: IntegralUIPlacement.Left,
            currentSelection: null,
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
                }
            ],

            // Second SideBar
            ctrlSize2: { height: 200 },
            currentPlacement2: IntegralUIPlacement.Bottom,
            currentSelection2: null,
            data2: [
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
        this.state.currentSelection2 = this.state.data2[0];
    }

    render() {
        let tabs = this.state.data.map((tab, index) => {
                return (
                    <IntegralUITabComponent key={index} data={tab} icon={tab.icon} theme={this.state.currentTheme}>
                        <div className="sdb-dfsd-tab-content">{tab.body}</div>
                    </IntegralUITabComponent>
                )
            });

        let tabs2 = this.state.data2.map((tab, index) => {
            return (
                <IntegralUITabComponent key={index} data={tab} icon={tab.icon} theme={this.state.currentTheme}>
                    <div className="sdb-dfsd-tab-content">{tab.body}</div>
                </IntegralUITabComponent>
            )
        });

        return (
            <div>
                <h2>SideBar / DifferentSides</h2>
                <div className="sample-block" id="sample-block-sidebar-first">
                    <IntegralUISideBarComponent
                        allowAnimation={this.state.isAnimationAllowed}
                        customStyle={iuiSideBarDifferentSidesStyle}
                        expanded={true}
                        parentId={'sample-block-sidebar-first'}
                        placement={this.state.currentPlacement}
                        resourcePath={this.state.currentResourcePath}
                        selectedTab={this.state.currentSelection}
                        showHeader={true}
                        size={this.state.ctrlSize}
                        theme={this.state.currentTheme} 
                    >
                        {tabs}
                    </IntegralUISideBarComponent>
                    <div id="sample-block-sidebar-second">
                        <IntegralUISideBarComponent
                            allowAnimation={this.state.isAnimationAllowed}
                            customStyle={iuiSideBarDifferentSidesStyle}
                            expanded={true}
                            inbound={true}
                            parentId={'sample-block-sidebar-second'}
                            placement={this.state.currentPlacement2}
                            resourcePath={this.state.currentResourcePath}
                            selectedTab={this.state.currentSelection2}
                            showHeader={true}
                            size={this.state.ctrlSize2}
                            theme={this.state.currentTheme} 
                        >
                            {tabs2}
                        </IntegralUISideBarComponent>
                        <IntegralUIPanelComponent id="sample-block-sidebar-content" contentAlignment = {{ vertical: 'middle' }}>
                            Sample Content Block
                        </IntegralUIPanelComponent>
                    </div>
                </div>
                <div className="feature-help">
                    <p><span className="initial-space"></span>An example of two SideBars placed on diffrent sides. The first is placed on Left and the second on the Bottom side of parent container. The auto-hide is enabled where each content panel has a headerwith button from where you can switch on/off the auto-hide mode. You can resize each side bar within the parent container bounds.</p>
                </div>
            </div>
        );
    }
}

export default SideBarDifferentSides;
