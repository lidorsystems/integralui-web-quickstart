import React, { Component } from 'react';

import IntegralUIButtonComponent from 'integralui-web/wrappers/react.integralui.button.js';
import { IntegralUITheme } from 'integralui-web/components/integralui.enums.js';

import './button-overview.css';

class ButtonOverview extends Component {

    //
    // Initialization / Destruction --------------------------------------------------------------
    //

    constructor(props){
        super(props);

        this.state = {
            currentTheme: IntegralUITheme.Office,
            isAnimationAllowed: true
        }
    }

    //
    // Methods -----------------------------------------------------------------------------------
    //

    onButtonClicked(index){
        console.log("Button with index: " + index + " is clicked");
    }

    // Update ------------------------------------------------------------------------------------

    render() {
        return (
            <div>
                <h2>Button / Overview</h2>
                <div className="sample-block" id="button-overview">
                    <IntegralUIButtonComponent allowAnimation={this.state.isAnimationAllowed} theme={this.state.currentTheme} onClick={() => this.onButtonClicked(0)}>Button 1</IntegralUIButtonComponent>
                    <IntegralUIButtonComponent allowAnimation={this.state.isAnimationAllowed} theme={this.state.currentTheme} onClick={() => this.onButtonClicked(1)}>Button 2</IntegralUIButtonComponent>
                    <IntegralUIButtonComponent allowAnimation={this.state.isAnimationAllowed} theme={this.state.currentTheme} onClick={() => this.onButtonClicked(2)}>Button 3</IntegralUIButtonComponent>
                    <div className="feature-help">
                        <p><span className="initial-space"></span><strong><span className="code-name">IntegralUI</span> Button</strong> is a native Web Component that represents a button. It is fully customizable via CSS.</p>
                        <p><span className="initial-space"></span>The following properties and events are supported:</p>
                        <ul className="feature-points">
                            <li><span className="code-name">allowAnimation</span> - Determines whether component appearance is animated or not</li>
                            <li><span className="code-name">controlStyle</span> - Specifies an object that contains all style settings for the component</li>
                            <li><span className="code-name">data</span> - Specifies an object that holds data related to the component</li>
                            <li><span className="code-name">enabled</span> - Determines whether the component is enabled or disabled</li>
                            <li><span className="code-name">name</span> - Uniquely identifies the component</li>
                            <li><span className="code-name">pressed</span> - Specifies whether Button is pressed or not: true or false</li>
                            <li><span className="code-name">state</span> - Specifies the component state: disabled, hovered, etc.</li>
                            <br/>
                            <li><span className="code-name">pressedChanged</span> - Occurs when pressed property changes</li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

export default ButtonOverview;
