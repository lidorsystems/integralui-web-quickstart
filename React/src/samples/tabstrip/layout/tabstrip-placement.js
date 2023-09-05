import React, { Component } from 'react';

import { IntegralUIAnimationType, IntegralUITabStripPlacement, IntegralUITheme } from 'integralui-web/components/integralui.enums.js';

import IntegralUIRadioButtonComponent from 'integralui-web/wrappers/react.integralui.radiobutton.js';
import IntegralUIRadioGroupComponent from 'integralui-web/wrappers/react.integralui.radiogroup.js';
import IntegralUITabComponent from 'integralui-web/wrappers/react.integralui.tab.js';
import IntegralUITabStripComponent from 'integralui-web/wrappers/react.integralui.tabstrip.js';

import './tabstrip-placement.css';

class TabStripPlacement extends Component {
    constructor(props){
        super(props);

        this.state = {
            currentAnimation: IntegralUIAnimationType.Slide,
            currentPlacement: IntegralUITabStripPlacement.Top,
            currentResourcePath: '../../integralui-web/icons',
            currentTheme: IntegralUITheme.Office,
            isAnimationAllowed: true,
            ctrlSize: { height: 300 },
            data: [
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

    render() {
        var tabs = this.state.data.map((tab, index) => {
            return (
                <IntegralUITabComponent key={index} data={tab} text={tab.text} theme={this.state.currentTheme}>
                    <div className="tbs-placement-tab-content">{tab.body}</div>
                </IntegralUITabComponent>
            )
        });

        return (
            <div>
                <h2>TabStrip / Tabs on Different Sides</h2>
                <div className="sample-block">
                    <IntegralUITabStripComponent id="tabstrip-placement"
                        allowAnimation={this.state.isAnimationAllowed}
                        contentAnimation={this.state.currentAnimation}
                        resourcePath={this.state.currentResourcePath}
                        size={this.state.ctrlSize}
                        tabStripPlacement={this.state.currentPlacement} 
                        theme={this.state.currentTheme} 
                    > 
                        {tabs}
                    </IntegralUITabStripComponent>
                    <div className="tabstrip-placement-panel">
                        <label>Placement: </label>
                        <IntegralUIRadioGroupComponent theme={this.state.currentTheme} buttonChecked={(e) => this.onPlacementChecked(e)}>
                            <IntegralUIRadioButtonComponent checked={true}>Top</IntegralUIRadioButtonComponent>
                            <IntegralUIRadioButtonComponent>Right</IntegralUIRadioButtonComponent>
                            <IntegralUIRadioButtonComponent>Bottom</IntegralUIRadioButtonComponent>
                            <IntegralUIRadioButtonComponent>Left</IntegralUIRadioButtonComponent>
                        </IntegralUIRadioGroupComponent>
                    </div>
                    <div className="feature-help">
                        <p><span className="initial-space"></span>An example where you can change the side at which tabs will appear. You can have the following placements:</p>
                        <ul className="feature-points">
                            <li><span className="code-object">Top</span> - tabs appear on top side</li>
                            <li><span className="code-object">Right</span> - tabs appear on right side</li>
                            <li><span className="code-object">Bottom</span> - tabs appear on bottom side</li>
                            <li><span className="code-object">Left</span> - tabs appear on left side</li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

export default TabStripPlacement;
