import React, { Component } from 'react';

import { IntegralUIAnimationType, IntegralUITheme } from 'integralui-web/components/integralui.enums.js';

import IntegralUITabComponent from 'integralui-web/wrappers/react.integralui.tab.js';
import IntegralUITabStripComponent from 'integralui-web/wrappers/react.integralui.tabstrip.js';

import './tabstrip-different-colors.css';

class TabStripDifferentColors extends Component {
    constructor(props){
        super(props);

        this.state = {
            currentAnimation: IntegralUIAnimationType.Slide,
            currentResourcePath: '../../integralui-web/icons',
            currentTheme: IntegralUITheme.Office,
            isAnimationAllowed: true,
            ctrlSize: { width: 600, height: 300 },
            tabs: [
                { 
                    id: 1,
                    text: 'Tab 1',
                    body: 'Aliquam faucibus, elit ut dictum aliquet, felis nisl adipiscing sapien, sed malesuada diam lacus eget erat. Cras mollis scelerisque nunc. Nullam arcu. Aliquam consequat.',
                    style: { 
                        normal: { background: '#bf3737', color: 'white', transition: 'all 0.5s ease-in-out' },
                        hovered: { background: '#ff4d4d', borderColor: '#ff4d4d', color: 'white', transition: 'all 0.5s ease-in-out' },
                        selected: { background: 'white', borderColor: '#ff4d4d', color: '#ff4d4d', transition: 'all 0.25s ease-in-out' }
                    }
                },
                { 
                    id: 2,
                    text: 'Tab 2',
                    body: 'Nullam varius, turpis et commodo pharetra, est eros bibendum elit, nec luctus magna felis sollicitudin mauris. Integer in mauris eu nibh euismod gravida. Duis ac tellus et risus vulputate vehicula. Donec lobortis risus a elit. Etiam tempor.',
                    style: { 
                        normal: { background: '#37bf49', color: 'white', transition: 'all 0.5s ease-in-out' },
                        hovered: { background: '#43de7c', borderColor: '#43de7c', color: 'white', transition: 'all 0.5s ease-in-out' },
                        selected: { background: 'white', borderColor: '#36b565', color: '#36b565', transition: 'all 0.25s ease-in-out' }
                    }
               },
                { 
                    id: 3,
                    text: 'Tab 3',
                    body: 'In convallis tellus a mauris. Curabitur non elit ut libero tristique sodales. Mauris a lacus. Donec mattis semper leo. In hac habitasse platea dictumst.',
                    style: { 
                        normal: { background: '#378dbf', color: 'white', transition: 'all 0.5s ease-in-out' },
                        hovered: { background: '#46aeeb', borderColor: '#46aeeb', color: 'white', transition: 'all 0.5s ease-in-out' },
                        selected: { background: 'white', borderColor: '#3c93c7', color: '#3c93c7', transition: 'all 0.25s ease-in-out' }
                    }
               }
            ]
        }
    }

    render() {
        var tabs = this.state.tabs.map((tab, index) => {
            return (
                <IntegralUITabComponent key={index} allowDrag={this.state.isDragAllowed} data={tab} icon={tab.icon} text={tab.text} theme={this.state.currentTheme}>
                    <div className="tbs-dragdrop-tab-content">{tab.body}</div>
                </IntegralUITabComponent>
            )
        });

        return (
            <div>
                <h2>TabStrip / Tabs in Different Colors</h2>
                <div className="sample-block">
                    <IntegralUITabStripComponent id="tabstrip-diffclrs"
                        allowAnimation={this.state.isAnimationAllowed}
                        animation={this.state.currentAnimation}
                        resourcePath={this.state.currentResourcePath}
                        size={this.state.ctrlSize}
                        theme={this.state.currentTheme} 
                    > 
                        {tabs}
                    </IntegralUITabStripComponent>
                    <div className="feature-help">
                        <p><span className="initial-space"></span>An example where each tab has individual style applied with different colors. You can set the style in code and change it dynamically during run-time.</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default TabStripDifferentColors;
