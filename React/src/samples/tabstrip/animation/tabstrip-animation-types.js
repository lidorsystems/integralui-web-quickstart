import React, { Component } from 'react';

import { IntegralUIAnimationType, IntegralUITheme } from 'integralui-web/components/integralui.enums.js';

import IntegralUIRadioButtonComponent from 'integralui-web/wrappers/react.integralui.radiobutton.js';
import IntegralUIRadioGroupComponent from 'integralui-web/wrappers/react.integralui.radiogroup.js';
import IntegralUITabComponent from 'integralui-web/wrappers/react.integralui.tab.js';
import IntegralUITabStripComponent from 'integralui-web/wrappers/react.integralui.tabstrip.js';

import './tabstrip-animation-types.css';

class TabStripAnimationTypes extends Component {
    constructor(props){
        super(props);

        this.state = {
            currentAnimation: IntegralUIAnimationType.Slide,
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

    onAnimationTypeChecked(e){
        switch (e.detail.index){
            case 1:
                this.setState({ currentAnimation: IntegralUIAnimationType.Fade });
                break;

            case 2:
                this.setState({ currentAnimation: IntegralUIAnimationType.Slide });
                break;

            default:
                this.setState({ currentAnimation: IntegralUIAnimationType.None });
                break;
        }
    }

    render() {
        var tabs = this.state.data.map((tab, index) => {
            return (
                <IntegralUITabComponent key={index} data={tab} text={tab.text} theme={this.state.currentTheme}>
                    <div className="tbs-animtypes-tab-content">{tab.body}</div>
                </IntegralUITabComponent>
            )
        });

        return (
            <div>
                <h2>TabStrip / How to Animate Tab Content</h2>
                <div className="sample-block">
                    <IntegralUITabStripComponent id="tabstrip-animtypes"
                        allowAnimation={this.state.isAnimationAllowed}
                        animation={this.state.currentAnimation}
                        resourcePath={this.state.currentResourcePath}
                        size={this.state.ctrlSize}
                        theme={this.state.currentTheme} 
                    > 
                        {tabs}
                    </IntegralUITabStripComponent>
                    <div className="tabstrip-animtypes-panel">
                        <label>Animation Type: </label>
                        <IntegralUIRadioGroupComponent theme={this.state.currentTheme} buttonChecked={(e) => this.onAnimationTypeChecked(e)}>
                            <IntegralUIRadioButtonComponent>None</IntegralUIRadioButtonComponent>
                            <IntegralUIRadioButtonComponent>Fade</IntegralUIRadioButtonComponent>
                            <IntegralUIRadioButtonComponent checked={true}>Slide</IntegralUIRadioButtonComponent>
                        </IntegralUIRadioGroupComponent>
                    </div>
                    <div className="feature-help">
                        <p><span className="initial-space"></span>In this example you can change the way tab content is animated. There are three options available:</p>
                        <ul className="feature-points">
                            <li><span className="code-object">None</span> - animations are disabled</li>
                            <li><span className="code-object">Fade</span> - when tab is selected, its content appears with fade in/out animation</li>
                            <li><span className="code-object">Slide</span> - when tab is selected, its content slides from left/right or top/bottom direction depending on tab placement</li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

export default TabStripAnimationTypes;
