import React, { Component } from 'react';

import IntegralUIRatingComponent from 'integralui-web/wrappers/react.integralui.rating.js';
import { IntegralUIIncrementMode, IntegralUITheme } from 'integralui-web/components/integralui.enums.js';

import './rating-overview.css';

class RatingOverview extends Component {

    //
    // Initialization / Destruction --------------------------------------------------------------
    //

    constructor(props){
        super(props);

        this.state = {
            // Rating with stars
            ctrlMaxValue: 5,
            ctrlValue: 3.5,
        
            // Rating with bricks
            ctrlMaxValue2: 20,
            ctrlStepSize2: 8,
            ctrlValue2: 12,
            brickIncrementMode: IntegralUIIncrementMode.Full,

            ctrlSize: { height: 16 },
            currentResourcePath: 'integralui-web/icons',
            currentTheme: IntegralUITheme.Office
        }
    }

    //
    // Methods -----------------------------------------------------------------------------------
    //

    // Update ------------------------------------------------------------------------------------

    render() {
        return (
            <div>
                <h2>Rating / Overview</h2>
                <div className="sample-block">
                    <IntegralUIRatingComponent id="rating-1" max={this.state.ctrlMaxValue} resourcePath={this.state.currentResourcePath} size={this.state.ctrlSize} value={this.state.ctrlValue} /><br/>
                    <IntegralUIRatingComponent id="rating-2" increment={this.state.brickIncrementMode} max={this.state.ctrlMaxValue2} resourcePath={this.state.currentResourcePath} size={this.state.ctrlSize} stepSize={this.state.ctrlStepSize2} value={this.state.ctrlValue2} />
                    <div className="feature-help">
                        <p><span className="initial-space"></span><strong><span className="code-name">IntegralUI</span> Rating</strong> is a native Web Component that visualizes ratings. You can change the rating by left-click and drag the mouse cursor, by clicking the left mouse button or using touch. In addition, you can customize its appearance using different images via CSS.</p>
                        <p><span className="initial-space"></span>The following properties and events are supported:</p>
                        <ul className="feature-points">
                            <li><span className="code-name">data</span> - Specifies an object that holds data related to the component</li>
                            <li><span className="code-name">division</span> - Specifies a number by which rating values are divided, used to display large values within small component size</li>
                            <li><span className="code-name">enabled</span> - Determines whether the component is enabled or disabled</li>
                            <li><span className="code-name">increment</span> - Determines how the rating value changes: Free, Partial or Full</li>
                            <li><span className="code-name">max</span> - Specifies the maximum value</li>
                            <li><span className="code-name">name</span> - Uniquely identifies the component</li>
                            <li><span className="code-name">stepSize</span> - Determines the width of one rating image in pixels</li>
                            <li><span className="code-name">state</span> - Specifies the component state: disabled, hovered, etc.</li>
                            <li><span className="code-name">value</span> - Holds the current rating value</li>
                            <br/>
                            <li><span className="code-name">valueChanged</span> - Occurs when value property changes</li>
                        </ul>
                        <p><span className="initial-space"></span>In this example, the Rating component with stars uses Free increment mode, which allows smooth changes to the rating value (in decimals). As comparision, the Rating component with bricks uses Full increment mode, and the rating changes in integer values.</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default RatingOverview;
