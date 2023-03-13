import React, { Component } from 'react';
import { html } from 'integralui-web/external/lit-element.js';

import IntegralUIDropDownButtonComponent from 'integralui-web/wrappers/react.integralui.dropdownbutton.js';
import { IntegralUITheme } from 'integralui-web/components/integralui.enums.js';
import 'integralui-web/components/integralui.list.js';

import './dropdownbutton-overview.css';

class DropDownButtonOverview extends Component {

    //
    // Initialization / Destruction --------------------------------------------------------------
    //

    constructor(props){
        super(props);

        this.state = {
            currentResourcePath: 'integralui-web/icons',
            currentSelection: null,
            currentTheme: IntegralUITheme.Office,
            dropDownSize: { width: 200, height: 150 },
            isAnimationAllowed: true,
            isExpanded: false,
            list: [
                { text: "Item 1" },
                { text: "Item 2" },
                { text: "Item 3" }
            ]
        }
    }

    //
    // Methods -----------------------------------------------------------------------------------
    //

    //
    // Currently when using templates, the LitElement binding syntax is required
    // for properties, methods and events
    //
    currentContentTemplate = () => { 
        return html`
            <iui-list 
                .items="${this.state.list}" 
                .selectedItem="${this.state.currentSelection}" 
                .size="${{ width: this.state.dropDownSize.width - 4, height: this.state.dropDownSize.height - 4 }}" 
                .theme="${this.state.currentTheme}" 
                @itemClick="${(e) => this.itemSelected(e)}" 
                @itemTouch="${(e) => this.itemSelected(e)}"
            ></iui-list>
        `;
    };

    dropDownExpandedChanged(e){
        this.setState({ isExpanded: e.detail.expanded });
    }

    itemSelected(e){
        this.setState({ currentSelection: e.detail.item, isExpanded: false });
    }

    // Update ------------------------------------------------------------------------------------

    render() {
        let dropDownButtonText = this.state.currentSelection ? this.state.currentSelection.text : 'Button';

        return (
            <div>
                <h2>DropDownButton / Overview</h2>
                <div className="sample-block" id="dropdownbutton-overview">
                    <IntegralUIDropDownButtonComponent 
                        allowAnimation={this.state.isAnimationAllowed} 
                        contentTemplate={this.currentContentTemplate}
                        dropDownSize={this.state.dropDownSize}
                        expanded={this.state.isExpanded}
                        resourcePath={this.state.currentResourcePath}
                        theme={this.state.currentTheme}
                        expandedChanged={(e) => this.dropDownExpandedChanged(e)}
                    >
                        {dropDownButtonText}
                    </IntegralUIDropDownButtonComponent>
                    <div className="feature-help">
                        <p><span className="initial-space"></span><strong><span className="code-name">IntegralUI</span> DropDownButton</strong> is a native Angular component that represents a button with option to show a dropdown window. Using different properties you can change the direction at which the dropdown window will open.</p>
                        <p><span className="initial-space"></span>To modify the button content, you can add other HTML elements or components. For example, the button label can also have an image before it. In addition, you can customize the appearance of dropdown button and window using different CSS styles.</p>
                        <p><span className="initial-space"></span>You can add ANY custom content in the dropdown window. In current example, the dropdown window contains the <strong>List</strong> component.</p>
                        <p><span className="initial-space"></span>The following properties and events are supported:</p>
                        <ul className="feature-points">
                            <li><span className="code-name">direction</span> - Specifies the direction at which the dropdown list will open</li>
                            <li><span className="code-name">dropDownAdjustment</span> - An object with values for position adjustment of dropdown window</li>
                            <li><span className="code-name">dropDownSize</span> - Specifies the width and height of dropdown window, in pixels</li>
                            <li><span className="code-name">data</span> - Specifies an object that holds data related to the component</li>
                            <li><span className="code-name">customStyle</span> - Specifies a custom CSS applied to the component</li>
                            <li><span className="code-name">enabled</span> - Determines whether the component is enabled or disabled</li>
                            <li><span className="code-name">expanded</span> - Determines whether the dropdown window is visible or not</li>
                            <li><span className="code-name">name</span> - Uniquely identifies the component</li>
                            <li><span className="code-name">placement</span> - Determines whether the dropdown arrow is placed on left or right side</li>
                            <li><span className="code-name">size</span> - Specifies the component width and height, in pixels</li>
                            <li><span className="code-name">state</span> - Specifies the component state: disabled, hovered, etc.</li>
                            <br/>
                            <li><span className="code-name">expandedChanged</span> - Occurs when expanded property changes</li>
                            <li><span className="code-name">closed</span> - Occurs after the dropdown window closes</li>
                            <li><span className="code-name">opened</span> - Occurs after the dropdown window opens</li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

export default DropDownButtonOverview;
