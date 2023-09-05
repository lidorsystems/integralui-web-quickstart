import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { html } from 'integralui-web/external/lit-element.js';

import IntegralUIPopOverComponent from 'integralui-web/wrappers/react.integralui.popover.js';
import { IntegralUITheme } from 'integralui-web/components/integralui.enums.js';

import './popover-overview.css';
import { iuiPopOverOverviewStyle } from './popover-overview.style.js';

class PopOverOverview extends Component {

    //
    // Initialization / Destruction --------------------------------------------------------------
    //

    constructor(props){
        super(props);

        this.state = {
            ctrlSize: { width: 400, height: 250 },
            currentResourcePath: 'integralui-web/icons',
            currentTheme: IntegralUITheme.Office,
            isPopoverActive: false,
            popoverSettings: {
                animation: {
                    delay: 0,
                    duration: 250,
                    translateValue: 25
                },
                activation: 'manual',
                autoPopDelay: 3000,
                closeButton: true,
                enabled: true,
                header: true,
                initialDelay: 0,
                position: 'right',
                showMarker: true,
                title: 'PopOver Title',
            }
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
            <div class="popover-content">
                <div>Curabitur pretium tincidunt lacus. Nulla gravida orci a odio.</div>
                <button @click="${() => this.btnOk()}">Ok</button>
            </div>
        `;
    };

    btnOk(){
        this.closePopup();

        alert("Ok button is clicked!");
    }

    updateEnabled(){
        let newSettings = Object.assign({}, this.state.popoverSettings);
        newSettings.enabled = !newSettings.enabled;

        this.setState({ popoverSettings: newSettings });
    }

    updateShowMarker(){
        let newSettings = Object.assign({}, this.state.popoverSettings);
        newSettings.showMarker = !newSettings.showMarker;
        
        this.setState({ popoverSettings: newSettings });
    }

    toggle(e){
        e.preventDefault();
        
        this.setState({ isPopoverActive: !this.state.isPopoverActive });
        e.stopPropagation();
    }

    closePopup(){
        this.setState({ isPopoverActive: false });
    }

    popoverClosed(){
        this.closePopup();
    }

    // Update ------------------------------------------------------------------------------------

    render() {
        return (
            <div>
                <h2>PopOver / Overview</h2>
                <div className="sample-block">
                    <IntegralUIPopOverComponent
                        contentTemplate={this.currentContentTemplate}
                        customStyle={iuiPopOverOverviewStyle}
                        enabled={this.state.popoverSettings.enabled}
                        resourcePath={this.state.currentResourcePath}
                        settings={this.state.popoverSettings}
                        theme={this.state.currentTheme}
                        size={this.state.ctrlSize}
                        visible={this.state.isPopoverActive}
                        closed={() => this.popoverClosed()}
                        > 
                        <div className="ppo-ovw-panel" onClick={(e) => this.toggle(e)}>
                            <span>Touch or click the left mouse button here to show a popover.</span>
                        </div>
                    </IntegralUIPopOverComponent>
                    <div className="feature-help">
                        <p><span className="initial-space"></span><strong><span className="code-name">IntegralUI</span> PopOver</strong> is a native Angular component that displays custom HTML content over specified element. It provides functionality that allows you to add a popover that will be displayed at specified position, with initial delay and how much time will remain active. This component is inherited from <Link to="/tooltip">Tooltip</Link> component.</p>
                        <p><span className="initial-space"></span>By clicking inside the element space, the PopOver will appear at position specfied in the control panel. The example uses a simple template that contais some text and Ok button, you can modify it and add any custom HTML elements or other components in it.</p>
                        <p><span className="initial-space"></span>In this example, there is a control panel where you can set different properties of PopOver component. You can choose the initial delay before popover is shown, how long it will remain visible, position at which will appear and whether it is enabled or not.</p>
                        <p><span className="initial-space"></span>If activation is set to 'manual', the popup will remain active until it's closed by changing the popOverShow property to false. If popOverShow property is not specified, then the popover will appear on mouse enter.</p>
                        <p><span className="initial-space"></span>The following properties are supported:</p>
                        <ul className="feature-points">
                            <li><span className="code-name">allowAnimation</span> - determines whether animations are allowed or not, default is true</li>
                            <li><span className="code-name">animation</span> - specifies the delay, duration and translate value</li>
                            <li><span className="code-name">activation</span> - specifies whether the popup is activated manually or automatically</li>
                            <li><span className="code-name">autoPopDelay</span> - specifies the time in milliseconds for PopOver to remain visible</li>
                            <li><span className="code-name">closeButton</span> - determines whether the close button is visible in the header</li>
                            <li><span className="code-name">enabled</span> - determines whether the PopOver is enabled or disabled</li>
                            <li><span className="code-name">header</span> - determines whether the popover has a header</li>
                            <li><span className="code-name">initialDelay</span> - specifies the time in milliseconds prior PopOver is shown</li>
                            <li><span className="code-name">position</span> - determines where the PopOver will appear: above, below, left or right side of the target element or at mouse position</li>
                            <li><span className="code-name">showMarker</span> - when true, an arrow marker will be displayed for the PopOver window</li>
                            <li><span className="code-name">title</span> - a text displayed in the header</li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

export default PopOverOverview;
