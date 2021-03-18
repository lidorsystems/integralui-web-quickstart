import React, { Component } from 'react';

import IntegralUIButtonComponent from 'integralui-web/wrappers/react.integralui.button.js';
import IntegralUIButtonGroupComponent from 'integralui-web/wrappers/react.integralui.buttongroup.js';
import { IntegralUISelectionMode, IntegralUITheme } from 'integralui-web/components/integralui.enums.js';

import './buttongroup-overview.css';

class ButtonGroupOverview extends Component {

    //
    // Initialization / Destruction --------------------------------------------------------------
    //

    constructor(props){
        super(props);

        this.state = {
            currentSelectionMode: IntegralUISelectionMode.MultiSimple,
            currentTheme: IntegralUITheme.Office
        }
    }

    //
    // Methods -----------------------------------------------------------------------------------
    //

    onButtonPressed(e){
        console.log("Button with index: " + e.detail.index + " is pressed");
    }

    // Update ------------------------------------------------------------------------------------

    render() {
        return (
            <div>
                <h2>ButtonGroup / Overview</h2>
                <div className="sample-block" id="buttongroup-overview">
                    <IntegralUIButtonGroupComponent selectionMode={this.state.currentSelectionMode} theme={this.state.currentTheme} buttonPressed={(e) => this.onButtonPressed(e)}>
                        <IntegralUIButtonComponent pressed={true}>Button 1</IntegralUIButtonComponent>
                        <IntegralUIButtonComponent>Button 2</IntegralUIButtonComponent>
                        <IntegralUIButtonComponent>Button 3</IntegralUIButtonComponent>
                    </IntegralUIButtonGroupComponent>
                    <div className="feature-help">
                        <p><span className="initial-space"></span><strong><span className="code-name">IntegralUI</span> Button</strong> is a native Web Component that manages actions of multiple buttons. Depending on selection mode, you can have none, one or multiple button pressed.</p>
                        <p><span className="initial-space"></span>In this example, button appearance is changed via CSS using custom properties.</p><br/>
                        <p><span className="initial-space"></span>The following properties and events are supported:</p>
                        <ul className="feature-points">
                            <li><span className="code-name">allowAnimation</span> - Determines whether component appearance is animated or not</li>
                            <li><span className="code-name">controlStyle</span> - Specifies an object that contains all style settings for the component</li>
                            <li><span className="code-name">data</span> - Specifies an object that holds data related to the component</li>
                            <li><span className="code-name">enabled</span> - Determines whether the component is enabled or disabled</li>
                            <li><span className="code-name">name</span> - Uniquely identifies the component</li>
                            <li><span className="code-name">selectionMode</span> - Specifies whether none, one or multiple button are pressed</li>
                            <li><span className="code-name">state</span> - Specifies the component state: disabled, hovered, etc.</li>
                            <li><span className="code-name">theme</span> - Specifies the current theme in use</li>
                            <br/>
                            <li><span className="code-name">buttonPressed</span> - Occurs when pressed property changes</li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

export default ButtonGroupOverview;
