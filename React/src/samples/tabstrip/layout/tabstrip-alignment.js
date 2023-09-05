import React, { Component } from 'react';

import { IntegralUIAnimationType, IntegralUITabAlignment, IntegralUITheme } from 'integralui-web/components/integralui.enums.js';

import IntegralUIRadioButtonComponent from 'integralui-web/wrappers/react.integralui.radiobutton.js';
import IntegralUIRadioGroupComponent from 'integralui-web/wrappers/react.integralui.radiogroup.js';
import IntegralUITabComponent from 'integralui-web/wrappers/react.integralui.tab.js';
import IntegralUITabStripComponent from 'integralui-web/wrappers/react.integralui.tabstrip.js';

import './tabstrip-alignment.css';

class TabStripTabAlignment extends Component {
    constructor(props){
        super(props);

        this.state = {
            currentAlignment: IntegralUITabAlignment.TopLeft,
            currentAnimation: IntegralUIAnimationType.Slide,
            currentResourcePath: '../../integralui-web/icons',
            currentTheme: IntegralUITheme.Office,
            isAnimationAllowed: true,
            ctrlSize: { height: 200 },
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

    onAlignmentChecked(e){
        switch (e.detail.index){
            case 1:
                this.setState({ currentAlignment: IntegralUITabAlignment.Middle });
                break;

            case 2:
                this.setState({ currentAlignment: IntegralUITabAlignment.BottomRight });
                break;

            default:
                this.setState({ currentAlignment: IntegralUITabAlignment.TopLeft });
                break;
        }
    }

    render() {
        var tabs = this.state.data.map((tab, index) => {
            return (
                <IntegralUITabComponent key={index} data={tab} text={tab.text} theme={this.state.currentTheme}>
                    <div className="tbs-alignment-tab-content">{tab.body}</div>
                </IntegralUITabComponent>
            )
        });

        return (
            <div>
                <h2>TabStrip / Tab Alignment</h2>
                <div className="sample-block">
                    <IntegralUITabStripComponent id="tabstrip-alignment"
                        allowAnimation={this.state.isAnimationAllowed}
                        contentAnimation={this.state.currentAnimation}
                        resourcePath={this.state.currentResourcePath}
                        size={this.state.ctrlSize}
                        tabAlignment={this.state.currentAlignment}
                        theme={this.state.currentTheme} 
                    > 
                        {tabs}
                    </IntegralUITabStripComponent>
                    <div className="tabstrip-alignment-panel">
                        <label>Alignment: </label>
                        <IntegralUIRadioGroupComponent theme={this.state.currentTheme} buttonChecked={(e) => this.onAlignmentChecked(e)}>
                            <IntegralUIRadioButtonComponent checked={true}>TopLeft</IntegralUIRadioButtonComponent>
                            <IntegralUIRadioButtonComponent>Middle</IntegralUIRadioButtonComponent>
                            <IntegralUIRadioButtonComponent>BottomRight</IntegralUIRadioButtonComponent>
                        </IntegralUIRadioGroupComponent>
                    </div>
                    <div className="feature-help">
                        <p><span className="initial-space"></span>This demo shows how you can align tabs to appear on top/left, middle or right side within the tabstrip. Example only shows the top placement, but it works on all other placements also.</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default TabStripTabAlignment;
