import React, { Component } from 'react';

import IntegralUISliderComponent from 'integralui-web/wrappers/react.integralui.slider.js';
import { IntegralUITheme } from 'integralui-web/components/integralui.enums.js';

import './slider-overview.css';

class SliderOverview extends Component {

    //
    // Initialization / Destruction --------------------------------------------------------------
    //

    constructor(props){
        super(props);

        this.state = {
            ctrlSize: { width: 300, height: 20 },
            ctrlValue: 30,
            ctrlValue2: 75,
            currentTheme: IntegralUITheme.Office,
            isAnimationAllowed: false
        }
    }

    //
    // Methods -----------------------------------------------------------------------------------
    //

    // Update ------------------------------------------------------------------------------------

    render() {
        return (
            <div>
                <h2>Slider / Overview</h2>
                <div className="sample-block">
                    <IntegralUISliderComponent id="slider-1" allowAnimation={this.state.isAnimationAllowed} size={this.state.ctrlSize} theme={this.state.currentTheme} value={this.state.ctrlValue} /><br />
                    <IntegralUISliderComponent id="slider-2" allowAnimation={this.state.isAnimationAllowed} size={this.state.ctrlSize} theme={this.state.currentTheme} value={this.state.ctrlValue2} />
                    <div className="feature-help">
                        <p><span className="initial-space"></span><strong><span className="code-name">IntegralUI</span> Slider</strong> is a native Web Component that allows you to change a numeric value within a range of defined minimum and maximum values.</p>
                        <p><span className="initial-space"></span>You can move the slider by dragging it or by clicking the mouse to either side. In addition, you can customize its appearance using different colors or shapes via CSS.</p>
                        <p><span className="initial-space"></span>The following properties and events are supported:</p>
                        <ul className="feature-points">
                            <li><span className="code-name">allowAnimation</span> - Determines whether component appearance is animated or not</li>
                            <li><span className="code-name">controlStyle</span> - Specifies an object that contains all style settings for the component</li>
                            <li><span className="code-name">data</span> - Specifies an object that holds data related to the component</li>
                            <li><span className="code-name">enabled</span> - Determines whether the component is enabled or disabled</li>
                            <li><span className="code-name">min</span> - Specifies the minimum value</li>
                            <li><span className="code-name">max</span> - Specifies the maximum value</li>
                            <li><span className="code-name">name</span> - Uniquely identifies the component</li>
                            <li><span className="code-name">orientation</span> - Determines whether the slider appears horizontally or vertically</li>
                            <li><span className="code-name">state</span> - Specifies the component state: disabled, hovered, etc.</li>
                            <li><span className="code-name">value</span> - Holds the current slider value</li>
                            <br/>
                            <li><span className="code-name">valueChanged</span> - Occurs when value property changes</li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

export default SliderOverview;
