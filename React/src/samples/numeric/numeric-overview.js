import React, { Component } from 'react';

import IntegralUINumericComponent from 'integralui-web/wrappers/react.integralui.numeric.js';
import { IntegralUINumericDisplayMode, IntegralUITheme } from 'integralui-web/components/integralui.enums.js';

class NumericOverview extends Component {

    //
    // Initialization / Destruction --------------------------------------------------------------
    //

    constructor(props){
        super(props);

        this.state = {
            ctrlSize: { width: 100 },
            currentDisplayMode: IntegralUINumericDisplayMode.InBound,
            currentResourcePath: 'integralui-web/icons',
            currentTheme: IntegralUITheme.Office,
            currentValue: 30
        }
    }

    //
    // Methods -----------------------------------------------------------------------------------
    //

    // Update ------------------------------------------------------------------------------------

    render() {
        return (
            <div>
                <h2>Rating / Overview</h2>
                <div className="sample-block">
                    <IntegralUINumericComponent displayMode={this.state.currentDisplayMode} resourcePath={this.state.currentResourcePath} size={this.state.ctrlSize} value={this.state.currentValue} theme={this.state.currentTheme}></IntegralUINumericComponent>
                    <div className="feature-help">
                        <p><span className="initial-space"></span><strong><span className="code-name">IntegralUI</span> Numeric</strong> is a native Web Component that displays a numeric value and allows you to change it within a range of defined minimum and maximum values.</p>
                        <p><span className="initial-space"></span>The component appearance changes depending on current display mode: inBound, LeftRight and UpDown. In addition, you can customize the component appearance using different colors or shapes via CSS.</p>
                        <p><span className="initial-space"></span>The following properties and events are supported:</p>
                        <ul className="feature-points">
                            <li><span className="code-name">accelerator</span> - Specifies the factor by which the value changes when up/down buttons are pressed, default is 0</li>
                            <li><span className="code-name">data</span> - Specifies an object that holds data related to the component</li>
                            <li><span className="code-name">enabled</span> - Determines whether the component is enabled or disabled</li>
                            <li><span className="code-name">min</span> - Specifies the minimum value</li>
                            <li><span className="code-name">max</span> - Specifies the maximum value</li>
                            <li><span className="code-name">mouseWheelSpeed</span> - Specifies the scrolling speed of the mouse wheel</li>
                            <li><span className="code-name">name</span> - Uniquely identifies the component</li>
                            <li><span className="code-name">displayMode</span> - Determines the layout of the component</li>
                            <li><span className="code-name">state</span> - Specifies the component state: disabled, hovered, etc.</li>
                            <li><span className="code-name">step</span> - Specifies the number by which numeric value increases or decreases</li>
                            <li><span className="code-name">value</span> - Holds the current numeric value</li>
                            <br/>
                            <li><span className="code-name">valueChanged</span> - Occurs when value property changes</li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

export default NumericOverview;
