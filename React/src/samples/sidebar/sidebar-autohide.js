import React, { Component } from 'react';

import IntegralUIPanelComponent from 'integralui-web/wrappers/react.integralui.panel.js';
import IntegralUITabComponent from 'integralui-web/wrappers/react.integralui.tab.js';
import IntegralUISideBarComponent from 'integralui-web/wrappers/react.integralui.sidebar.js';
import { IntegralUITheme } from 'integralui-web/components/integralui.enums.js';

import './sidebar-autohide.css';
import { iuiSideBarAutoHideStyle } from './sidebar-autohide.style.js';

class SideBarAutoHide extends Component {
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
    }

    render() {
        let tabs = this.state.data.map((tab, index) => {
                return (
                    <IntegralUITabComponent key={index} data={tab} icon={tab.icon} theme={this.state.currentTheme}>
                        <div className="sdb-ah-tab-content">{tab.body}</div>
                    </IntegralUITabComponent>
                )
            });

        return (
            <div>
                <h2>SideBar / AutoHide</h2>
                <div className="sample-block" id="sample-block-sidebar-autohide">
                    <IntegralUISideBarComponent
                        allowAnimation={this.state.isAnimationAllowed}
                        autoHide={true}
                        customStyle={iuiSideBarAutoHideStyle}
                        parentId={'sample-block-sidebar-autohide'}
                        resourcePath={this.state.currentResourcePath}
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
                    <p><span className="initial-space"></span>This sample demonstrates the <strong>auto-hide</strong> ability of the SideBar component. With auto-hide you can change whether side bar content pops out on top of the parent container or pushes its content to the side when opening. You can activate this mode from header that appears when tab is opened. Clicking on the <strong>pin</strong> button will change the auto-hide state to true or false.</p>
                    <p><span className="initial-space"></span>Showing a header is optional. The <strong>showHeader</strong> property determines whether the header is visible or hidden. When header is hidden, you can still change the auto-hide mode from code using the <strong>autoHide</strong> property.</p>
                </div>
            </div>
        );
    }
}

export default SideBarAutoHide;
