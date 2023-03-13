import React, { Component } from 'react';
import { Link } from "react-router-dom";

import IntegralUIDatePickerComponent from 'integralui-web/wrappers/react.integralui.datepicker.js';
import { IntegralUITheme } from 'integralui-web/components/integralui.enums.js';

class DatePickerOverview extends Component {

    //
    // Initialization / Destruction --------------------------------------------------------------
    //

    constructor(props){
        super(props);

        this.state = {
            ctrlSize: { width: 200 },
            currentResourcePath: 'integralui-web/icons',
            currentTheme: IntegralUITheme.Office,
            isAnimationAllowed: true
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
                <h2>DatePicker / Overview</h2>
                <div className="sample-block">
                    <IntegralUIDatePickerComponent id="datepicker-overview"
                        allowAnimation={this.state.isAnimationAllowed}
                        resourcePath={this.state.currentResourcePath}
                        size={this.state.ctrlSize}
                        theme={this.state.currentTheme} 
                    > 
                    </IntegralUIDatePickerComponent>
                    <div className="feature-help">
                        <p><span className="initial-space"></span><strong><span className="code-name">IntegralUI</span> DatePicker</strong> is a native Web Component that allows the user to select a date by using a drop-down <Link to="/calendar">Calendar</Link> component. This component is fully customizable via CSS.</p>
                        <p><span className="initial-space"></span>The following properties and events are supported:</p>
                        <ul className="feature-points">
                            <li><span className="code-name">allowAnimation</span> - Determines whether component appearance is animated or not</li>
                            <li><span className="code-name">allowFocus</span> - Determines whether component can have the keyboard focus</li>
                            <li><span className="code-name">firstDayOfWeek</span> - Specifies the first day of the week in the calendar</li>
                            <li><span className="code-name">calendarSize</span> - Specifies the calendar width and height in pixels.</li>
                            <li><span className="code-name">controlStyle</span> - Specifies an object that contains all style settings for the component</li>
                            <li><span className="code-name">data</span> - Specifies an object that holds data related to the component</li>
                            <li><span className="code-name">enabled</span> - Determines whether the component is enabled or disabled</li>
                            <li><span className="code-name">format</span> - Determines whether dates are displayed using standard or custom formatting</li>
                            <li><span className="code-name">formatOptions</span> - An object that describes the date components in custom formatting</li>
                            <li><span className="code-name">locales</span> - Specifies the current localization string in use</li>
                            <li><span className="code-name">name</span> - Uniquely identifies the component</li>
                            <li><span className="code-name">selectedDate</span> - The date that is selected</li>
                            <li><span className="code-name">size</span> - Specifies the component width and height in pixels.</li>
                            <li><span className="code-name">state</span> - Specifies the component state: disabled, hovered, etc.</li>
                            <br/>
                            <li><span className="code-name">dateChanged</span> - Occurs when selected date property changes</li>
                            <li><span className="code-name">enabledChanged</span> - Occurs when enabled property changes</li>
                            <li><span className="code-name">sizeChanged</span> - Occurs when size property changes</li>
                            <li><span className="code-name">stateChanged</span> - Occurs when component state changes</li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

export default DatePickerOverview;
