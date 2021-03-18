import React, { Component } from 'react';
import { Link } from "react-router-dom";

import IntegralUIItemComponent from 'integralui-web/wrappers/react.integralui.item.js';
import IntegralUIListGroupComponent from 'integralui-web/wrappers/react.integralui.listgroup.js';
import { IntegralUITheme } from 'integralui-web/components/integralui.enums.js';

class ListGroupOverview extends Component {

    //
    // Initialization / Destruction --------------------------------------------------------------
    //

    constructor(props){
        super(props);

        this.state = {
            expandBoxType: 'arrow',
            groupItems: [
                { id: 11, pid: 1, text: "Button" },
                { id: 12, pid: 1, text: "CheckBox" },
                { id: 13, pid: 1, text: "ComboBox" },
                { id: 14, pid: 1, text: "DateTime Picker" },
                { id: 15, pid: 1, text: "Label" },
                { id: 16, pid: 1, text: "ProgressBar" },
                { id: 17, pid: 1, text: "TextBox" }
            ],
            isAnimationAllowed: true,
            ctrlSize: { width: 290 },
            currentTheme: IntegralUITheme.Office,
            title: 'Common Controls'
        }
    }

    componentDidMount(){
    }

    //
    // Methods -----------------------------------------------------------------------------------
    //

    submitClicked(){
        alert("Submit button was clicked.");
    }

    // Update ------------------------------------------------------------------------------------

    render() {
        let items = this.state.groupItems.map((item, index) => {
            return (
                <IntegralUIItemComponent key={index} theme={this.state.currentTheme}>
                    <span>{item.text}</span>
                </IntegralUIItemComponent>
            )
        });

        return (
            <div>
                <h2>ListGroup / Overview</h2>
                <div className="sample-block">
                    <IntegralUIListGroupComponent id="test" allowAnimation={this.state.isAnimationAllowed} size={this.state.ctrlSize} text={this.state.title} expandBoxType={this.state.expandBoxType} theme={this.state.currentTheme}>
                        {items}
                    </IntegralUIListGroupComponent>
                    <div className="feature-help">
                        <p><span className="initial-space"></span><strong><span style={{color: '#c60d0d'}}>IntegralUI</span> ListGroup</strong> is a native Web Component that represents a collapsible panel with list of items. It consists of a header and content list. Header displays the group title and in content list you can add custom items.</p>
                        <p><span className="initial-space"></span>The demonstration above is simple, there is a group box with icon and title and content list that by default is hidden. Whenever the group header is clicked, the content list will expand and become visible. In this example, the content list contains text only items.</p>
                        <p><span className="initial-space"></span>This component is also used as part of <Link to="/listbar">ListBar</Link> component.</p> 
                    </div>
                </div>
            </div>
        );
    }
}

export default ListGroupOverview;
