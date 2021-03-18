import React, { Component } from 'react';

import IntegralUITooltipComponent from 'integralui-web/wrappers/react.integralui.tooltip.js';
import { IntegralUITheme } from 'integralui-web/components/integralui.enums.js';

import './tooltip-overview.css';

class TooltipOverview extends Component {

    //
    // Initialization / Destruction --------------------------------------------------------------
    //

    constructor(props){
        super(props);

        this.state = {
            ctrlSize: { width: 400, height: 250 },
            currentTheme: IntegralUITheme.Office,
            tooltipSettings: {
                autoPopDelay: 3000,
                enabled: true,
                initialDelay: 1000,
                position: 'mouse',
                showMarker: true,
                title: 'Tooltip Title'
            }
        }
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
                <h2>Tooltip / Overview</h2>
                <div className="sample-block">
                    <IntegralUITooltipComponent
                        enabled={this.state.tooltipSettings.enabled}
                        settings={this.state.tooltipSettings}
                        theme={this.state.currentTheme}
                        size={this.state.ctrlSize}
                        > 
                        <div className="ttp-ovw-panel">
                            <span>Move mouse cursor here to show a tooltip.</span>
                        </div>
                    </IntegralUITooltipComponent>
                    <div className="feature-help">
                        <p><span className="initial-space"></span><strong><span className="code-name">IntegralUI</span> Tooltip</strong> is a native Web Component that represents a tooltip. It provides functionality that allows you to add a tooltip that will be displayed at specified position, with initial delay and will remain visible by specified amount of time.</p>
                        <p><span className="initial-space"></span>In this example, there is a control panel where you can set different properties of Tooltip component. You can choose the initial delay before tooltip is shown, how long it will remain visible, position at which will appear and whether it is enabled or not.</p>
                        <p><span className="initial-space"></span>The following properties are supported:</p>
                        <ul className="feature-points">
                            <li><span className="code-name">appRef</span> - holds a reference to application view</li>
                            <li><span className="code-name">autoPopDelay</span> - specifies the time in milliseconds for Tooltip to remain visible</li>
                            <li><span className="code-name">enabled</span> - determines whether the Tooltip is enabled or disabled</li>
                            <li><span className="code-name">initialDelay</span> - specifies the time in milliseconds prior Tooltip is shown</li>
                            <li><span className="code-name">position</span> - determines where the Tooltip will appear: above, below, left or right side of the target element or at mouse position</li>
                            <li><span className="code-name">showMarker</span> - when true, an arrow marker will be displayed for the Tooltip window</li>
                            <li><span className="code-name">title</span> - specifies the content of the Tooltip</li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

export default TooltipOverview;
