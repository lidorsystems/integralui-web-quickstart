import React, { Component } from 'react';

import IntegralUIRadioButtonComponent from 'integralui-web/wrappers/react.integralui.radiobutton.js';
import IntegralUIRadioGroupComponent from 'integralui-web/wrappers/react.integralui.radiogroup.js';
import { IntegralUITheme } from 'integralui-web/components/integralui.enums.js';

import './radiobutton-overview.css'

class RadioButtonOverview extends Component {

    //
    // Initialization / Destruction --------------------------------------------------------------
    //

    constructor(props){
        super(props);

        this.state = {
            currentTheme: IntegralUITheme.Office
        }
    }

    //
    // Methods -----------------------------------------------------------------------------------
    //

    onButtonChecked(e, group){
        console.log("RadioButton with index: " + e.detail.index + " is checked, in " + group);
    }
    // Update ------------------------------------------------------------------------------------

    render() {
        return (
            <div>
                <h2>RadioButton / Overview</h2>
                <div className="sample-block" id="radiobutton-overview">
                    <IntegralUIRadioGroupComponent id="radiogroup-1" theme={this.state.currentTheme} buttonChecked={(e) => this.onButtonChecked(e, 'group 1')}>
                        <IntegralUIRadioButtonComponent checked={true}>Radio 1</IntegralUIRadioButtonComponent>
                        <IntegralUIRadioButtonComponent>Radio 2</IntegralUIRadioButtonComponent>
                        <IntegralUIRadioButtonComponent>Radio 3</IntegralUIRadioButtonComponent>
                    </IntegralUIRadioGroupComponent>
                    <IntegralUIRadioGroupComponent id="radiogroup-2" theme={this.state.currentTheme} buttonChecked={(e) => this.onButtonChecked(e, 'group 2')}>
                        <IntegralUIRadioButtonComponent>Radio 4</IntegralUIRadioButtonComponent>
                        <IntegralUIRadioButtonComponent>Radio 5</IntegralUIRadioButtonComponent>
                        <IntegralUIRadioButtonComponent checked={true}>Radio 6</IntegralUIRadioButtonComponent>
                    </IntegralUIRadioGroupComponent>
                    <IntegralUIRadioGroupComponent id="radiogroup-3" theme={this.state.currentTheme} buttonChecked={(e) => this.onButtonChecked(e, 'group 3')}>
                        <IntegralUIRadioButtonComponent>Radio 7</IntegralUIRadioButtonComponent>
                        <IntegralUIRadioButtonComponent checked={true}>Radio 8</IntegralUIRadioButtonComponent>
                        <IntegralUIRadioButtonComponent>Radio 9</IntegralUIRadioButtonComponent>
                    </IntegralUIRadioGroupComponent>
                    <div className="feature-help">
                        <p><span className="initial-space"></span><strong><span className="code-name">IntegralUI</span> RadioButton</strong> is a native Web Component that represents a radio button. It works in relation with <strong><span className="code-name">IntegralUI</span> RadioGroup</strong> for creating different groups of radio buttons. It is fully customizable via CSS.</p>
                        <p><span className="initial-space"></span>All animations and appearances of radio buttons are done through CSS. In addition you can add your own custom images for each button state: checked or unchecked.</p>
                        <p><span className="initial-space"></span>The following properties and events are supported:</p>
                        <ul className="feature-points">
                            <li><span className="code-name">allowAnimation</span> - Determines whether component appearance is animated or not</li>
                            <li><span className="code-name">checked</span> - Specifies whether RadioButton is checked or not: true or false</li>
                            <li><span className="code-name">customStyle</span> - Specifies an object that contains custom style settings for the component</li>
                            <li><span className="code-name">data</span> - Specifies an object that holds data related to the component</li>
                            <li><span className="code-name">enabled</span> - Determines whether the component is enabled or disabled</li>
                            <li><span className="code-name">name</span> - Uniquely identifies the component</li>
                            <li><span className="code-name">state</span> - Specifies the component state: disabled, hovered, etc.</li>
                            <br/>
                            <li><span className="code-name">checkedChanged</span> - Occurs when checked property changes</li>
                        </ul>
                        <br/>
                        <p><span className="initial-space"></span>RadioGroup has similar properties and events. In this example, whenever RadioButton is checked, the <span className="code-name">buttonChecked</span> event is fired.</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default RadioButtonOverview;
