import React, { Component } from 'react';

import IntegralUIPanelComponent from 'integralui-web/wrappers/react.integralui.panel.js';
import IntegralUIRadioButtonComponent from 'integralui-web/wrappers/react.integralui.radiobutton.js';
import IntegralUIRadioGroupComponent from 'integralui-web/wrappers/react.integralui.radiogroup.js';
import IntegralUISideBarComponent from 'integralui-web/wrappers/react.integralui.sidebar.js';
import IntegralUITabComponent from 'integralui-web/wrappers/react.integralui.tab.js';
import { IntegralUIPlacement, IntegralUITheme } from 'integralui-web/components/integralui.enums.js';

import './sidebar-placement.css';
import { iuiSideBarPlacementStyle } from './sidebar-placement.style.js';

class SideBarPlacement extends Component {
    constructor(props){
        super(props);

        this.state = {
            ctrlSize: { width: 400, height: 150 },
            currentPlacement: IntegralUIPlacement.Left,
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
                }
            ]
        }
    }

    //
    // Methods -----------------------------------------------------------------------------------
    //


    // Events ------------------------------------------------------------------------------------

    onPlacementChecked(e){
        let placement = IntegralUIPlacement.Left;

        switch (e.detail.index){
            case 0: 
                placement = IntegralUIPlacement.Top;
                break;

            case 1: 
                placement = IntegralUIPlacement.Right;
                break;

            case 2: 
                placement = IntegralUIPlacement.Bottom;
                break;

            default: 
                placement = IntegralUIPlacement.Left;
                break;
        }

        this.setState({ currentPlacement: placement });
    }

    // Update ------------------------------------------------------------------------------------

    render() {
        let tabs = this.state.data.map((tab, index) => {
                return (
                    <IntegralUITabComponent key={index} data={tab} icon={tab.icon} theme={this.state.currentTheme}>
                        <div className="sdb-plt-tab-content">{tab.body}</div>
                    </IntegralUITabComponent>
                )
            });

        return (
            <div>
                <h2>SideBar / Placement</h2>
                <div className="sample-block" id="sample-block-sidebar-placement">
                    <IntegralUISideBarComponent
                        allowAnimation={this.state.isAnimationAllowed}
                        customStyle={iuiSideBarPlacementStyle}
                        inbound={true}
                        parentId={'sample-block-sidebar-placement'}
                        placement={this.state.currentPlacement}
                        resourcePath={this.state.currentResourcePath}
                        size={this.state.ctrlSize}
                        theme={this.state.currentTheme} 
                    >
                        {tabs}
                    </IntegralUISideBarComponent>
                    <IntegralUIPanelComponent id="sample-block-sidebar-placement-panel" contentAlignment = {{ horizontal: 'center', vertical: 'middle' }}>
                        <div className="sample-block-sidebar-control-panel">
                            <label>Placement: </label>
                            <IntegralUIRadioGroupComponent theme={this.state.currentTheme} buttonChecked={(e) => this.onPlacementChecked(e)}>
                                <IntegralUIRadioButtonComponent>Top</IntegralUIRadioButtonComponent>
                                <IntegralUIRadioButtonComponent>Right</IntegralUIRadioButtonComponent>
                                <IntegralUIRadioButtonComponent>Bottom</IntegralUIRadioButtonComponent>
                                <IntegralUIRadioButtonComponent checked={true}>Left</IntegralUIRadioButtonComponent>
                            </IntegralUIRadioGroupComponent>
                        </div>
                    </IntegralUIPanelComponent>
                </div>
                <div className="feature-help">
                    <p><span className="initial-space"></span>An example where you can change the side at which SideBar will appear. You can have the following placements:</p>
                    <ul className="feature-points">
                        <li><span className="code-object">Top</span> - sidebar is placed on top side</li>
                        <li><span className="code-object">Right</span> - sidebar is placed on right side</li>
                        <li><span className="code-object">Bottom</span> - sidebar is placed on bottom side</li>
                        <li><span className="code-object">Left</span> - sidebar is placed on left side</li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default SideBarPlacement;
