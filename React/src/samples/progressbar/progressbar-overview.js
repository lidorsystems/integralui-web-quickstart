import React, { Component } from 'react';

import IntegralUIProgressBarComponent from 'integralui-web/wrappers/react.integralui.progressbar.js';
import {  } from 'integralui-web/components/integralui.enums.js';

import './progressbar-overview.css';

class ProgressBarOverview extends Component {

    //
    // Initialization / Destruction --------------------------------------------------------------
    //

    constructor(props){
        super(props);

        this.state = {
            ctrlSize: { width: 300 },
            isAnimationAllowed: true,
            progressValue1: 50,
            progressValue2: 30,
            progressValue3: 70
        }
    }

    //
    // Methods -----------------------------------------------------------------------------------
    //

    // Update ------------------------------------------------------------------------------------

    render() {
        return (
            <div>
                <h2>ProgressBar / Overview</h2>
                <div className="sample-block">
                    <IntegralUIProgressBarComponent id="progress-1" allowAnimation={this.state.isAnimationAllowed} size={this.state.ctrlSize} value={this.state.progressValue1}></IntegralUIProgressBarComponent>
                    <IntegralUIProgressBarComponent id="progress-2" allowAnimation={this.state.isAnimationAllowed} labelAlignment={'MiddleLeft'} size={this.state.ctrlSize} value={this.state.progressValue2}></IntegralUIProgressBarComponent>
                    <IntegralUIProgressBarComponent id="progress-3" allowAnimation={this.state.isAnimationAllowed} labelAlignment={'BottomCenter'} size={this.state.ctrlSize} value={this.state.progressValue3}></IntegralUIProgressBarComponent>
                    <div className="feature-help">
                        <p><span className="initial-space"></span><strong><span className="code-name">IntegralUI</span> ProgressBar</strong> is a native Web Component that visualize the progression of an operation. You can customize the progress indicator using different color or image via CSS.</p>
                        <p><span className="initial-space"></span>You can also change orientation of the ProgressBar to: horizontal or vertical. The appearance of progresss value is based on different set of CSS styles, based on orientation.</p>
                        <p><span className="initial-space"></span>The following properties and events are supported:</p>
                        <ul className="feature-points">
                            <li><span className="code-name">allowAnimation</span> - Determines whether changes to the progress value are animated or not</li>
                            <li><span className="code-name">controlStyle</span> - Specifies an object that contains all style settings for the component</li>
                            <li><span className="code-name">data</span> - Specifies an object that holds data related to the component</li>
                            <li><span className="code-name">enabled</span> - Determines whether the component is enabled or disabled</li>
                            <li><span className="code-name">name</span> - Uniquely identifies the component</li>
                            <li><span className="code-name">orientation</span> - Determines whether the progressbar appears horizontally or vertically</li>
                            <li><span className="code-name">state</span> - Specifies the component state: disabled, hovered, etc.</li>
                            <li><span className="code-name">value</span> - Holds the current progress value</li>
                            <br/>
                            <li><span className="code-name">valueChanged</span> - Occurs when value property changes</li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

export default ProgressBarOverview;
