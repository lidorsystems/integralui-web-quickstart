import React, { Component } from 'react';

import IntegralUICheckBoxComponent from 'integralui-web/wrappers/react.integralui.checkbox.js';
import { IntegralUICheckState } from 'integralui-web/components/integralui.enums.js';

import './checkbox-overview.css';

class CheckBoxOverview extends Component {

    //
    // Initialization / Destruction --------------------------------------------------------------
    //

    constructor(props){
        super(props);

        this.state = {
            currentResourcePath: 'integralui-web/icons'
        }
    }

    //
    // Methods -----------------------------------------------------------------------------------
    //

    onCheckStateChanged(e){
        console.log("CheckState changed to " + e.detail.checkState);
    }

    onCheckedChanged(e){
        console.log("Checked changed to " + e.detail.checked);
    }

    // Update ------------------------------------------------------------------------------------

    render() {
        return (
            <div>
                <h2>CheckBox / Overview</h2>
                <div className="sample-block" id="checkbox-overview">
                    <IntegralUICheckBoxComponent resourcePath={this.state.currentResourcePath} threeState={true} checkStateChanged={(e) => this.onCheckStateChanged(e)}>CheckBox 1</IntegralUICheckBoxComponent><br/>
                    <IntegralUICheckBoxComponent id="checkbox-ovw-2" checkState={IntegralUICheckState.Checked} threeState={true} checkStateChanged={(e) => this.onCheckStateChanged(e)}>CheckBox 2</IntegralUICheckBoxComponent><br/>
                    <IntegralUICheckBoxComponent id="checkbox-ovw-3" checkedChanged={(e) => this.onCheckedChanged(e)}>CheckBox 3</IntegralUICheckBoxComponent><br/>
                    <IntegralUICheckBoxComponent id="checkbox-ovw-4" checkedChanged={(e) => this.onCheckedChanged(e)}>CheckBox 4</IntegralUICheckBoxComponent><br/>
                    <IntegralUICheckBoxComponent id="checkbox-ovw-5" checked={true} checkedChanged={(e) => this.onCheckedChanged(e)}>CheckBox 5</IntegralUICheckBoxComponent>
                    <div className="feature-help">
                    <p><span className="initial-space"></span><strong><span className="code-name">IntegralUI</span> CheckBox</strong> is a native Web Component that represents a check box. It is fully customizable via CSS.</p>
                        <p><span className="initial-space"></span>The following properties and events are supported:</p>
                        <ul className="feature-points">
                            <li><span className="code-name">allowAnimation</span> - Determines whether component appearance is animated or not</li>
                            <li><span className="code-name">checked</span> - Specifies whether CheckBox is checked or not: true or false</li>
                            <li><span className="code-name">checkState</span> - Specifies one of the three state values: unchecked, indeterminate or checked</li>
                            <li><span className="code-name">controlStyle</span> - Specifies an object that contains all style settings for the component</li>
                            <li><span className="code-name">data</span> - Specifies an object that holds data related to the component</li>
                            <li><span className="code-name">enabled</span> - Determines whether the component is enabled or disabled</li>
                            <li><span className="code-name">name</span> - Uniquely identifies the component</li>
                            <li><span className="code-name">state</span> - Specifies the component state: disabled, hovered, etc.</li>
                            <li><span className="code-name">threeState</span> - Determines whether the CheckBox uses three or two state values</li>
                            <li><span className="code-name">value</span> - Holds the current checkbox value</li>
                            <br/>
                            <li><span className="code-name">checkedChanged</span> - Occurs when checked property changes</li>
                            <li><span className="code-name">checkStateChanged</span> - Occurs when checkState property changes</li>
                            <li><span className="code-name">valueChanged</span> - Occurs when value property changes</li>
                        </ul> 
                   </div>
                </div>
            </div>
        );
    }
}

export default CheckBoxOverview;
