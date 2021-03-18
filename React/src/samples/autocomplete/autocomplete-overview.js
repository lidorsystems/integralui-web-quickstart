import React, { Component } from 'react';

import IntegralUIAutoCompleteComponent from 'integralui-web/wrappers/react.integralui.autocomplete.js';
import { IntegralUITheme } from 'integralui-web/components/integralui.enums.js';
import cities from './cities.json';

class AutoCompleteOverview extends Component {

    //
    // Initialization / Destruction --------------------------------------------------------------
    //

    constructor(props){
        super(props);

        this.state = {
            ctrlSize: { width: 300 },
            currentTheme: IntegralUITheme.Office,
            dataFields: { text: 'name' },
            dropDownSize: { width: 400, height: 200},
            isAnimationAllowed: true,
            placeHolder: 'Search text ...',
            sampleList: cities,
            textValue: ''
        }
    }

    //
    // Methods -----------------------------------------------------------------------------------
    //

    // General -----------------------------------------------------------------------------------

    onValueChanged(e){
        console.log("Text value changes to: ", e.detail.value);
    }

    // Update ------------------------------------------------------------------------------------

    render() {
        return (
            <div>
                <h2>AutoComplete / Overview</h2>
                <div className="sample-block">
                    <IntegralUIAutoCompleteComponent
                        allowAnimation={this.state.isAnimationAllowed}
                        dataFields={this.state.dataFields}
                        dropDownSize={this.state.dropDownSize}
                        list={this.state.sampleList}
                        placeHolder={this.state.placeHolder}
                        size={this.state.ctrlSize}
                        text={this.state.textValue}
                        theme={this.state.currentTheme}
                        valueChanged={(e) => this.onValueChanged(e)}
                    > 
                    </IntegralUIAutoCompleteComponent>
                    <div className="feature-help">
                        <p><span className="initial-space"></span><strong><span className="code-name">IntegralUI</span> AutoComplete</strong> is a native Web Component that represents a text box with a dropdown list where you can choose among suggested options. You can modify the component appearance via CSS.</p>
                        <p><span className="initial-space"></span>In this example, whenever you enter a text, a dropdown list will appear showing city names that match the entered text. You can navigate through the list using keyboard and choose an option either by pressing the ENTER key, mouse button or touch. The list is loaded from a JSON file and sorted in ascending order.</p>
                        <p><span className="initial-space"></span>The following properties and events are supported:</p>
                        <ul className="feature-points">
                            <li><span className="code-name">allowAnimation</span> - Specifies whether animations are enabled or not</li>
                            <li><span className="code-name">data</span> - Specifies an object that holds data related to the component</li>
                            <li><span className="code-name">dataFields</span> - Specifies an object that map the fields names of list items from your data source to the ones used by the component</li>
                            <li><span className="code-name">dropDownSize</span> - Specifies the width and height of the dropdown list in pixels</li>
                            <li><span className="code-name">enabled</span> - Determines whether the component is enabled or disabled</li>
                            <li><span className="code-name">list</span> - Gets or sets a list of items that is assigned to the component</li>
                            <li><span className="code-name">name</span> - Uniquely identifies the component</li>
                            <li><span className="code-name">placeHolder</span> - A string that appears in text box as place holder</li>
                            <li><span className="code-name">state</span> - Specifies the component state: disabled, hovered, etc.</li>
                            <li><span className="code-name">text</span> - Specifies the input text value</li>
                            <br/>
                            <li><span className="code-name">valueChanged</span> - Occurs when a input text changes or an option is selected from a dropdown list</li>
                            <li><span className="code-name">enabledChanged</span> - Occurs when enabled property changes</li>
                            <li><span className="code-name">stateChanged</span> - Occurs when component state changes</li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

export default AutoCompleteOverview;
