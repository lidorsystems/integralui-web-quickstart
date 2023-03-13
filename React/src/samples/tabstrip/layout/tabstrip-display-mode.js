import React, { Component } from 'react';

import { IntegralUIAnimationType, IntegralUITabDisplayMode, IntegralUITheme } from 'integralui-web/components/integralui.enums.js';

import IntegralUIRadioButtonComponent from 'integralui-web/wrappers/react.integralui.radiobutton.js';
import IntegralUIRadioGroupComponent from 'integralui-web/wrappers/react.integralui.radiogroup.js';
import IntegralUITabComponent from 'integralui-web/wrappers/react.integralui.tab.js';
import IntegralUITabStripComponent from 'integralui-web/wrappers/react.integralui.tabstrip.js';

import './tabstrip-display-mode.css';

class TabStripDisplayMode extends Component {
    constructor(props){
        super(props);

        this.state = {
            currentAnimation: IntegralUIAnimationType.Slide,
            currentDisplayMode: IntegralUITabDisplayMode.AutoSized,
            currentResourcePath: '../../integralui-web/icons',
            currentTheme: IntegralUITheme.Office,
            isAnimationAllowed: true,
            ctrlSize: { height: 200 },
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
                }
            ]
        }
    }

    onDisplayModeChecked(e){
        switch (e.detail.index){
            case 1:
                this.setState({ currentDisplayMode: IntegralUITabDisplayMode.Justified });
                break;

            default:
                this.setState({ currentDisplayMode: IntegralUITabDisplayMode.AutoSized });
                break;
        }
    }

    render() {
        var tabs = this.state.tabs.map((tab, index) => {
            return (
                <IntegralUITabComponent key={index} data={tab} text={tab.text} theme={this.state.currentTheme}>
                    <div className="tbs-dplmode-tab-content">{tab.body}</div>
                </IntegralUITabComponent>
            )
        });

        return (
            <div>
                <h2>TabStrip / Display Mode</h2>
                <div className="sample-block">
                <IntegralUITabStripComponent id="tabstrip-dplmode"
                        allowAnimation={this.state.isAnimationAllowed}
                        animation={this.state.currentAnimation}
                        displayMode={this.state.currentDisplayMode}
                        resourcePath={this.state.currentResourcePath}
                        size={this.state.ctrlSize}
                        theme={this.state.currentTheme} 
                    > 
                        {tabs}
                    </IntegralUITabStripComponent>
                    <div className="tabstrip-dplmode-panel">
                        <label>Display Mode: </label>
                        <IntegralUIRadioGroupComponent theme={this.state.currentTheme} buttonChecked={(e) => this.onDisplayModeChecked(e)}>
                            <IntegralUIRadioButtonComponent checked={true}>AutoSized</IntegralUIRadioButtonComponent>
                            <IntegralUIRadioButtonComponent>Justified</IntegralUIRadioButtonComponent>
                        </IntegralUIRadioGroupComponent>
                    </div>
                    <div className="feature-help">
                        <p><span className="initial-space"></span>An example that shows how content of tab header is arranged. There are two options:</p>
                        <ul className="feature-points">
                            <li><span className="code-object">AutoSized</span> - tab header size is determined by its content</li>
                            <li><span className="code-object">Justified</span> - if there is an empty space in the tab strip, it is equally divided among all tabs</li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

export default TabStripDisplayMode;
