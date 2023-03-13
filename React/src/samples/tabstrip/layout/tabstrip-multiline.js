import React, { Component } from 'react';

import { IntegralUIAnimationType, IntegralUITabDisplayMode, IntegralUITabNavigationMode, IntegralUITabStripPlacement, IntegralUITheme } from 'integralui-web/components/integralui.enums.js';

import IntegralUIRadioButtonComponent from 'integralui-web/wrappers/react.integralui.radiobutton.js';
import IntegralUIRadioGroupComponent from 'integralui-web/wrappers/react.integralui.radiogroup.js';
import IntegralUITabComponent from 'integralui-web/wrappers/react.integralui.tab.js';
import IntegralUITabStripComponent from 'integralui-web/wrappers/react.integralui.tabstrip.js';

import './tabstrip-multiline.css';

class TabStripMultilineTabs extends Component {
    constructor(props){
        super(props);

        this.state = {
            currentAnimation: IntegralUIAnimationType.Slide,
            currentDisplayMode: IntegralUITabDisplayMode.Justified,
            currentNavigation: IntegralUITabNavigationMode.Multiline,
            currentPlacement: IntegralUITabStripPlacement.Top,
            currentResourcePath: '../../integralui-web/icons',
            currentTheme: IntegralUITheme.Office,
            isAnimationAllowed: true,
            ctrlSize: { height: 300 },
            tabs: [
                { 
                    id: 1,
                    text: 'JavaScript',
                    body: 'Aliquam faucibus, elit ut dictum aliquet, felis nisl adipiscing sapien, sed malesuada diam lacus eget erat. Cras mollis scelerisque nunc. Nullam arcu. Aliquam consequat.'
                },
                { 
                    id: 2,
                    text: 'Angular',
                    body: 'Nullam varius, turpis et commodo pharetra, est eros bibendum elit, nec luctus magna felis sollicitudin mauris. Integer in mauris eu nibh euismod gravida. Duis ac tellus et risus vulputate vehicula. Donec lobortis risus a elit. Etiam tempor.'
                },
                { 
                    id: 3,
                    text: 'React',
                    body: 'In convallis tellus a mauris. Curabitur non elit ut libero tristique sodales. Mauris a lacus. Donec mattis semper leo. In hac habitasse platea dictumst.'
                },
                { 
                    id: 4,
                    text: 'Vue',
                    body: 'Nullam arcu. Aliquam consequat. Integer in mauris eu nibh euismod gravida. Duis ac tellus et risus vulputate vehicula.'
                },
                { 
                    id: 5,
                    text: 'C#.NET',
                    body: 'Morbi porttitor, ex ut vulputate tincidunt, ex justo gravida dolor, vel pulvinar neque ex placerat elit.'
                },
                { 
                    id: 6,
                    text: 'VB.NET',
                    body: 'Aliquam malesuada lectus eget erat dignissim, vel euismod mauris vulputate. In hac habitasse platea dictumst.'
                },
                { 
                    id: 7,
                    text: 'C++',
                    body: 'Sed augue lacus, ultrices mattis nisl eget, ornare imperdiet metus. Sed ac vulputate turpis. Suspendisse tincidunt, tortor at posuere dictum, elit erat laoreet ex, ut gravida tellus est non turpis. Praesent tempus diam tellus, et porta tellus aliquam nec. Pellentesque varius metus non lobortis malesuada.'
                }
            ]
        }
    }

    onPlacementChecked(e){
        switch (e.detail.index){
            case 1:
                this.setState({ currentPlacement: IntegralUITabStripPlacement.Right });
                break;

            case 2:
                this.setState({ currentPlacement: IntegralUITabStripPlacement.Bottom });
                break;

            case 3:
                this.setState({ currentPlacement: IntegralUITabStripPlacement.Left });
                break;
    
            default:
                this.setState({ currentPlacement: IntegralUITabStripPlacement.Top });
                break;
        }
    }

    render(){
        var tabs = this.state.tabs.map((tab, index) => {
            return (
                <IntegralUITabComponent key={index} data={tab} text={tab.text} theme={this.state.currentTheme}>
                    <div className="tbs-multiline-tab-content">{tab.body}</div>
                </IntegralUITabComponent>
            )
        });

        return (
            <div>
                <h2>TabStrip / Multiline Tabs</h2>
                <div className="sample-block">
                    <IntegralUITabStripComponent id="tabstrip-multiline"
                        allowAnimation={this.state.isAnimationAllowed}
                        animation={this.state.currentAnimation}
                        displayMode={this.state.currentDisplayMode}
                        navigation={this.state.currentNavigation} 
                        resourcePath={this.state.currentResourcePath}
                        size={this.state.ctrlSize}
                        tabSpacing={4} 
                        tabStripPlacement={this.state.currentPlacement} 
                        theme={this.state.currentTheme} 
                    > 
                        {tabs}
                    </IntegralUITabStripComponent>
                    <div className="tabstrip-multiline-panel">
                        <label>Placement: </label>
                        <IntegralUIRadioGroupComponent theme={this.state.currentTheme} buttonChecked={(e) => this.onPlacementChecked(e)}>
                            <IntegralUIRadioButtonComponent checked={true}>Top</IntegralUIRadioButtonComponent>
                            <IntegralUIRadioButtonComponent>Right</IntegralUIRadioButtonComponent>
                            <IntegralUIRadioButtonComponent>Bottom</IntegralUIRadioButtonComponent>
                            <IntegralUIRadioButtonComponent>Left</IntegralUIRadioButtonComponent>
                        </IntegralUIRadioGroupComponent>
                    </div>
                    <div className="feature-help">
                        <p><span className="initial-space"></span>An example where tabs appear in multiple lines. Only the line tab contains the selected tab is attached to the tab content, while others appear in lines above the current line.</p>
                        <p><span className="initial-space"></span>In this mode, drag and drop, scrolling and toolbars are disabled.</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default TabStripMultilineTabs;
