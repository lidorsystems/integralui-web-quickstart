import React, { Component } from 'react';
import { Link } from "react-router-dom";

import IntegralUIAccordionComponent from 'integralui-web/wrappers/react.integralui.accordion.js';
import IntegralUIGroupBoxComponent from 'integralui-web/wrappers/react.integralui.groupbox.js';
import { IntegralUITheme } from 'integralui-web/components/integralui.enums.js';

import './accordion-overview.css';
import { iuiAccordionOverviewStyle } from './accordion-overview.style.js';

class AccordionOverview extends Component {

    //
    // Initialization / Destruction --------------------------------------------------------------
    //

    constructor(props){
        super(props);

        this.state = {
            currentResourcePath: 'integralui-web/icons',
            currentTheme: IntegralUITheme.Office,
            expandBoxType: 'arrow',
            isAnimationAllowed: true,
            ctrlSize: { width: 400 },
            data: [
                { 
                    icon: 'icons library',
                    text: 'Books',
                    body: 'Curabitur pretium tincidunt lacus. Nulla gravida orci a odio. Nullam varius, turpis et commodo pharetra, est eros bibendum elit, nec luctus magna felis sollicitudin mauris. Integer in mauris eu nibh euismod gravida. Duis ac tellus et risus vulputate vehicula. Donec lobortis risus a elit. Etiam tempor.'
                },
                { 
                    icon: 'icons album',
                    text: 'Music',
                    body: 'Pellentesque malesuada nulla a mi. Duis sapien sem, aliquet nec, commodo eget, consequat quis, neque. Aliquam faucibus, elit ut dictum aliquet, felis nisl adipiscing sapien, sed malesuada diam lacus eget erat. Cras mollis scelerisque nunc. Nullam arcu. Aliquam consequat.'
                },
                { 
                    icon: 'icons star-empty',
                    text: 'Favorites',
                    body: 'Fusce convallis, mauris imperdiet gravida bibendum, nisl turpis suscipit mauris, sed placerat ipsum urna sed risus. In convallis tellus a mauris. Curabitur non elit ut libero tristique sodales. Mauris a lacus. Donec mattis semper leo. In hac habitasse platea dictumst. Fusce convallis, mauris imperdiet gravida bibendum, nisl turpis suscipit mauris, sed placerat ipsum urna sed risus. In convallis tellus a mauris. Curabitur non elit ut libero tristique sodales. Mauris a lacus. Donec mattis semper leo. In hac habitasse platea dictumst. Fusce convallis, mauris imperdiet gravida bibendum, nisl turpis suscipit mauris, sed placerat ipsum urna sed risus. In convallis tellus a mauris. Curabitur non elit ut libero tristique sodales. Mauris a lacus. Donec mattis semper leo. In hac habitasse platea dictumst.'
                }
            ]
        }

        this.state.currentSelection = this.state.data[0];

    }

    componentDidMount(){
    }

    //
    // Methods -----------------------------------------------------------------------------------
    //

    // Update ------------------------------------------------------------------------------------

    render() {
        let groups = this.state.data.map((group, index) => {
                return (
                    <IntegralUIGroupBoxComponent key={index} allowAnimation={this.state.isAnimationAllowed} customStyle={iuiAccordionOverviewStyle} data={group} text={group.text} icon={group.icon} expandBoxType={this.state.expandBoxType} size={this.state.ctrlSize} theme={this.state.currentTheme}>
                        <div className="acc-ovw-group-content">{group.body}</div>
                    </IntegralUIGroupBoxComponent>
                )
            });

        return (
            <div>
                <h2>Accordion / Overview</h2>
                <div className="sample-block">
                    <IntegralUIAccordionComponent id="accordion-overview"
                        allowAnimation={this.state.isAnimationAllowed}
                        groups={this.state.data}
                        resourcePath={this.state.currentResourcePath}
                        selectedGroup={this.state.currentSelection}
                        size={this.state.ctrlSize}
                        theme={this.state.currentTheme}
                        > 
                        {groups}
                    </IntegralUIAccordionComponent>
                    <div className="feature-help">
                        <p><span className="initial-space"></span><strong><span className="code-name">IntegralUI</span> Accordion</strong> is a native Web Component that represents a list of expandable panels arranged vertically.</p>
                        <p><span className="initial-space"></span>The demonstration above shows only the basic features available in Accordion component. There are few <Link to="/groupbox">group boxes</Link> each with a header and a content panel.</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default AccordionOverview;
