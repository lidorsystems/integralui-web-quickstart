import React, { Component } from 'react';
import { Link } from "react-router-dom";

import IntegralUIGroupBoxComponent from 'integralui-web/wrappers/react.integralui.groupbox.js';
import { IntegralUITheme } from 'integralui-web/components/integralui.enums.js';

import './groupbox-overview.css';

class GroupBoxOverview extends Component {

    //
    // Initialization / Destruction --------------------------------------------------------------
    //

    constructor(props){
        super(props);

        this.state = {
            expandBoxType: 'arrow',
            isAnimationAllowed: true,
            ctrlSize: { width: 290 },
            currentTheme: IntegralUITheme.Office,
            title: 'Login'
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
        return (
            <div>
                <h2>GroupBox / Overview</h2>
                <div className="sample-block">
                    <IntegralUIGroupBoxComponent allowAnimation={this.state.isAnimationAllowed} size={this.state.ctrlSize} text={this.state.title} expandBoxType={this.state.expandBoxType} theme={this.state.currentTheme}>
                        <div className="grbox-ovw-group-content">
                            <span>User name:</span><input type="text" /><br/>
                            <span>Password:</span><input type="password" /><br/>
                            <button onClick={() => this.submitClicked()}>Submit</button>
                        </div>
                    </IntegralUIGroupBoxComponent>
                    <div className="feature-help">
                        <p><span className="initial-space"></span><strong><span className="code-name">IntegralUI</span> GroupBox</strong> is a native Web Component that represents a collapsible panel. It consists of a header and content panel. Header displays the group title and in content panel you can place any custom HTML elements or other components.</p>
                        <p><span className="initial-space"></span>The demonstration above is simple, there is a group box with icon and title and content panel that by default is hidden. Whenever the group header is clicked, the content panel will expand and become visible. In this example, the content panel contains labels, input elements and a button.</p>
                        <p><span className="initial-space"></span>This component is also used as part of <Link to="/accordion">Accordion</Link> component.</p> 
                    </div>
                </div>
            </div>
        );
    }
}

export default GroupBoxOverview;
