import React, { Component } from 'react';

import IntegralUIPanelComponent from 'integralui-web/wrappers/react.integralui.panel.js';
import IntegralUIRadioButtonComponent from 'integralui-web/wrappers/react.integralui.radiobutton.js';
import IntegralUIRadioGroupComponent from 'integralui-web/wrappers/react.integralui.radiogroup.js';
import IntegralUISideBarComponent from 'integralui-web/wrappers/react.integralui.sidebar.js';
import IntegralUITabComponent from 'integralui-web/wrappers/react.integralui.tab.js';
import { IntegralUIPlacement, IntegralUITabAlignment, IntegralUITheme } from 'integralui-web/components/integralui.enums.js';

import './sidebar-alignment.css';
import { iuiSideBarAlignmentStyle } from './sidebar-alignment.style.js';

class SideBarAlignment extends Component {
    constructor(props){
        super(props);

        this.state = {
            ctrlSize: { width: 400 },
            currentPlacement: IntegralUIPlacement.Right,
            currentResourcePath: '../integralui-web/icons',
            currentSelection: null,
            currentTabAlignment: IntegralUITabAlignment.Middle,
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
        
        this.alignmentValues = [IntegralUITabAlignment.TopLeft, IntegralUITabAlignment.Middle, IntegralUITabAlignment.BottomRight];
    }

    getAlignmentValue(index){
        return index >= 0 ? this.alignmentValues[index] : IntegralUITabAlignment.TopLeft;
    }

    onAlignmentChecked(e){
        this.setState({ currentTabAlignment: this.getAlignmentValue(e.detail.index) });
    }

    render() {
        let tabs = this.state.data.map((tab, index) => {
                return (
                    <IntegralUITabComponent key={index} data={tab} icon={tab.icon} theme={this.state.currentTheme}>
                        <div className="sdb-alg-tab-content">{tab.body}</div>
                    </IntegralUITabComponent>
                )
            });

        return (
            <div>
                <h2>SideBar / Alignment</h2>
                <div className="sample-block" id="sample-block-sidebar-alignment">
                    <IntegralUISideBarComponent
                        allowAnimation={this.state.isAnimationAllowed}
                        customStyle={iuiSideBarAlignmentStyle}
                        placement={this.state.currentPlacement}
                        parentId={'sample-block-sidebar-alignment'}
                        resourcePath={this.state.currentResourcePath}
                        showHeader={true}
                        size={this.state.ctrlSize}
                        tabAlignment={this.state.currentTabAlignment}
                        theme={this.state.currentTheme} 
                    >
                        {tabs}
                    </IntegralUISideBarComponent>
                    <IntegralUIPanelComponent id="sample-block-sidebar-alignment-panel" contentAlignment = {{ horizontal: 'center', vertical: 'middle' }}>
                        <div className="sample-block-sidebar-control-panel">
                            <label>Alignment: </label>
                            <IntegralUIRadioGroupComponent theme={this.state.currentTheme} buttonChecked={(e) => this.onAlignmentChecked(e)}>
                                <IntegralUIRadioButtonComponent>TopLeft</IntegralUIRadioButtonComponent>
                                <IntegralUIRadioButtonComponent checked={true}>Middle</IntegralUIRadioButtonComponent>
                                <IntegralUIRadioButtonComponent>BottomRight</IntegralUIRadioButtonComponent>
                            </IntegralUIRadioGroupComponent>
                        </div>
                    </IntegralUIPanelComponent>
                </div>
                <div className="feature-help">
                    <p><span className="initial-space"></span>This demo shows how you can align tabs to appear on top/left, middle or bottom/right side within the side bar. Example only shows tabs placed on right side, but it works on all other sides also.</p>
                </div>
            </div>
        );
    }
}

export default SideBarAlignment;
