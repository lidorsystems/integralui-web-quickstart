import React, { Component } from 'react';

import { IntegralUIAnimationType, IntegralUITheme } from 'integralui-web/components/integralui.enums.js';

import IntegralUINumericComponent from 'integralui-web/wrappers/react.integralui.numeric.js';
import IntegralUITabComponent from 'integralui-web/wrappers/react.integralui.tab.js';
import IntegralUITabStripComponent from 'integralui-web/wrappers/react.integralui.tabstrip.js';

import './tabstrip-spacing.css';

class TabStripSpacing extends Component {
    constructor(props){
        super(props);

        this.state = {
            currentAnimation: IntegralUIAnimationType.Slide,
            currentResourcePath: '../../integralui-web/icons',
            currentTheme: IntegralUITheme.Office,
            isAnimationAllowed: true,
            ctrlNumericSize: { width: 90 },
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
            ],
            spacingValue: 2
        }
    }

    onTabSpaceChanged(e){
        this.setState({ spacingValue: e.detail.value });
    }

    render() {
        var tabs = this.state.data.map((tab, index) => {
            return (
                <IntegralUITabComponent key={index} data={tab} text={tab.text} theme={this.state.currentTheme}>
                    <div className="tbs-spacing-tab-content">{tab.body}</div>
                </IntegralUITabComponent>
            )
        });

        return (
            <div>
                <h2>TabStrip / How to Add Space Between Tabs</h2>
                <div className="sample-block">
                    <IntegralUITabStripComponent id="tabstrip-spacing"
                        allowAnimation={this.state.isAnimationAllowed}
                        animation={this.state.currentAnimation}
                        resourcePath={this.state.currentResourcePath}
                        size={this.state.ctrlSize}
                        tabSpacing={this.state.spacingValue} 
                        theme={this.state.currentTheme} 
                    > 
                        {tabs}
                    </IntegralUITabStripComponent>
                    <div className="tabstrip-spacing-panel">
                        <IntegralUINumericComponent resourcePath={this.state.currentResourcePath} value={this.state.spacingValue} size={this.state.ctrlNumericSize} theme={this.state.currentTheme} valueChanged={(e) => this.onTabSpaceChanged(e)}></IntegralUINumericComponent>
                    </div>
                    <div className="feature-help">
                        <p><span className="initial-space"></span>This sample demonstrates how to change the spacing between tabs.</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default TabStripSpacing;
