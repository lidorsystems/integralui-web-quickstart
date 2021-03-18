import React, { Component } from 'react';

import IntegralUISelectComponent from 'integralui-web/wrappers/react.integralui.select.js';
import { IntegralUITheme } from 'integralui-web/components/integralui.enums.js';

import './select-overview.css';
import { iuiSelectOverviewStyle } from './select-overview.style.js';

class SelectOverview extends Component {

    //
    // Initialization / Destruction --------------------------------------------------------------
    //

    constructor(props){
        super(props);

        this.state = {
            ctrlSize: { width: 300 },
            currentMaxDropDownItems: 5,
            currentResourcePath: 'integralui-web/icons',
            currentTheme: IntegralUITheme.Office,
            dropDownSize: { width: 350 },
            isAnimationAllowed: true,
            items: [
                { id: 1, icon: "cmb-ovw-icons library", text: "Books" },
                { id: 2, icon: "cmb-ovw-icons-empty", text: "Computers" },
                { id: 3, icon: "cmb-ovw-icons-empty", text: "Electronics" },
                { id: 4, icon: "cmb-ovw-icons album", text: "Music" },
                { id: 5, icon: "cmb-ovw-icons software", text: "Software" },
                { id: 6, icon: "cmb-ovw-icons sports", text: "Sports" },
                { id: 7, icon: "cmb-ovw-icons-empty", text: "Video Games" },
                { id: 8, icon: "cmb-ovw-icons clock", text: "Watches" }
            ]
        }

        this.state.currentSelection = this.state.items[3];

    }

    componentDidMount(){
    }

    //
    // Methods -----------------------------------------------------------------------------------
    //

    // Update ------------------------------------------------------------------------------------

    render() {
        return (
            <div>
                <h2>Select / Overview</h2>
                <div className="sample-block">
                    <IntegralUISelectComponent id="select-overview"
                        allowAnimation={this.state.isAnimationAllowed}
                        customStyle={iuiSelectOverviewStyle}
                        dropDownSize={this.state.dropDownSize}
                        items={this.state.items}
                        maxDropDownItems={this.state.currentMaxDropDownItems}
                        resourcePath={this.state.currentResourcePath}
                        selectedItem={this.state.currentSelection}
                        size={this.state.ctrlSize}
                        theme={this.state.currentTheme} 
                    > 
                    </IntegralUISelectComponent>
                    <div className="feature-help">
                        <p><span className="initial-space"></span><strong><span className="code-name">IntegralUI</span> Select</strong> is a native Web Component that replaces the standard &lt;select&gt; HTML element. It has advanced features like options to set the width and height of dropdown window, custom styles for header and dropdown list, sorting, choosing item that is currently selected in the combo box etc.</p>
                        <p><span className="initial-space"></span>The demonstration above shows only the basic features available in ComboBox component. There are several items present in the combo box. Opening or closing of dropdown list is animated.</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default SelectOverview;
