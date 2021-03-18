import React, { Component } from 'react';

import IntegralUIRadioButtonComponent from 'integralui-web/wrappers/react.integralui.radiobutton.js';
import IntegralUIRadioGroupComponent from 'integralui-web/wrappers/react.integralui.radiogroup.js';
import { IntegralUITheme } from 'integralui-web/components/integralui.enums.js';


class RadioButtonOverview extends Component {

    //
    // Initialization / Destruction --------------------------------------------------------------
    //

    constructor(props){
        super(props);

        this.state = {
            currentResourcePath: 'integralui-web/icons',
            currentTheme: IntegralUITheme.Office
        }
    }

    //
    // Methods -----------------------------------------------------------------------------------
    //

    onButtonChecked(e){
        console.log("RadioButton with index: " + e.detail.index + " is checked");
    }
    // Update ------------------------------------------------------------------------------------

    render() {
        return (
            <div>
                <h2>RadioButton / Overview</h2>
                <div className="sample-block" id="radiobutton-overview">
                    <IntegralUIRadioGroupComponent resourcePath={this.state.currentResourcePath} theme={this.state.currentTheme} buttonChecked={(e) => this.onButtonChecked(e)}>
                        <IntegralUIRadioButtonComponent checked={true}>Radio 1</IntegralUIRadioButtonComponent>
                        <IntegralUIRadioButtonComponent>Radio 2</IntegralUIRadioButtonComponent>
                        <IntegralUIRadioButtonComponent>Radio 3</IntegralUIRadioButtonComponent>
                    </IntegralUIRadioGroupComponent>
                    <div className="feature-help">
                        <p><span className="initial-space"></span><strong><span className="code-name">IntegralUI</span> RadioButton</strong> is a native Web Component that represents a radio button. It works in relation with <strong><span className="code-name">IntegralUI</span> RadioGroup</strong> for creating different sets of radio buttons. It is fully customizable via CSS.</p>
                        <p><span className="initial-space"></span>The following properties and events are supported:</p>
                        <ul className="feature-points">
                            <li><span className="code-name">allowAnimation</span> - Determines whether component appearance is animated or not</li>
                            <li><span className="code-name">checked</span> - Specifies whether RadioButton is checked or not: true or false</li>
                            <li><span className="code-name">controlStyle</span> - Specifies an object that contains all style settings for the component</li>
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
