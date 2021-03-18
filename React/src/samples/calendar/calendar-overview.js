import React, { Component } from 'react';

import IntegralUICalendarComponent from 'integralui-web/wrappers/react.integralui.calendar.js';
import { IntegralUITheme } from 'integralui-web/components/integralui.enums.js';

class CalendarOverview extends Component {

    //
    // Initialization / Destruction --------------------------------------------------------------
    //

    constructor(props){
        super(props);

        this.state = {
            ctrlSize: { width: 250, height: 200 },
            currentResourcePath: 'integralui-web/icons',
            currentTheme: IntegralUITheme.Office,
            isAnimationAllowed: true
        }

        this.state.currentCalendarion = null;

    }

    componentDidMount(){
    }

    //
    // Methods -----------------------------------------------------------------------------------
    //

    onDateChanged(e){
        console.log("Calendar date changed to: ", e.detail.date);
    }

    // Update ------------------------------------------------------------------------------------

    render() {
        return (
            <div>
                <h2>Calendar / Overview</h2>
                <div className="sample-block">
                    <IntegralUICalendarComponent id="calendar-overview"
                        allowAnimation={this.state.isAnimationAllowed}
                        resourcePath={this.state.currentResourcePath}
                        size={this.state.ctrlSize}
                        theme={this.state.currentTheme} 
                        dateChanged={(e) => this.onDateChanged(e)}
                    > 
                    </IntegralUICalendarComponent>
                    <div className="feature-help">
                        <p><span className="initial-space"></span><strong><span className="code-name">IntegralUI</span> Calendar</strong> is a native Web Component that enables the user to calendar a date using a visual monthly calendar display. This component is fully customizable via CSS.</p>
                        <p><span className="initial-space"></span>The following properties and events are supported:</p>
                        <ul className="feature-points">
                            <li><span className="code-name">allowAnimation</span> - Determines whether component appearance is animated or not</li>
                            <li><span className="code-name">data</span> - Specifies an object that holds data related to the component</li>
                            <li><span className="code-name">enabled</span> - Determines whether the component is enabled or disabled</li>
                            <li><span className="code-name">firstDayOfWeek</span> - Specifies the first day of the week</li>
                            <li><span className="code-name">locales</span> - Specifies the current localization string in use</li>
                            <li><span className="code-name">name</span> - Uniquely identifies the component</li>
                            <li><span className="code-name">calendaredDate</span> - The date that is calendared</li>
                            <li><span className="code-name">showToday</span> - Indicates whether the today date is visible</li>
                            <li><span className="code-name">size</span> - Specifies the component width and height in pixels.</li>
                            <li><span className="code-name">state</span> - Specifies the component state: disabled, hovered, etc.</li>
                            <li><span className="code-name">todayDate</span> - The current day</li>
                            <br/>
                            <li><span className="code-name">dateChanged</span> - Occurs when calendared date property changes</li>
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

export default CalendarOverview;
