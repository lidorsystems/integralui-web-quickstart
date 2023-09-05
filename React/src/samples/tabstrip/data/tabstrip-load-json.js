import React, { Component } from 'react';

import { IntegralUIAnimationType, IntegralUITabAlignment, IntegralUITabStripPlacement, IntegralUITheme } from 'integralui-web/components/integralui.enums.js';

import IntegralUITabComponent from 'integralui-web/wrappers/react.integralui.tab.js';
import IntegralUITabStripComponent from 'integralui-web/wrappers/react.integralui.tabstrip.js';

import './tabstrip-load-json.css';
import tabData from './tabstrip-load-json-data.json';

class TabStripLoadJSON extends Component {

    constructor(props){
        super(props);

        this.state = {
            ctrlSize: {},
            currentAlignment: IntegralUITabAlignment.TopLeft,
            currentAnimation: IntegralUIAnimationType.Fade,
            currentPlacement: IntegralUITabStripPlacement.Top,
            currentResourcePath: '../../integralui-web/icons',
            currentTheme: IntegralUITheme.Office,
            isAnimationAllowed: true,
            tabs: []
        }
    }

    componentDidMount(){
        // Apply settings from JSON data
        if (tabData){
            this.setState({
                currentAlignment: tabData.settings.alignment,
                currentAnimation: tabData.settings.animation,
                currentPlacement: tabData.settings.tabStripPlacement,
                ctrlSize: tabData.settings.size,
                tabs: tabData.tabs
            });
        }
    }

    render() {
        let tabs = this.state.tabs.map((tab, index) => {
            return (
                <IntegralUITabComponent key={index} data={tab} text={tab.title} theme={this.state.currentTheme}>
                    <div className="tbs-loadjson-tab-content">{tab.content}</div>
                </IntegralUITabComponent>
            )
        });

        return (
            <div>
                <h2>TabStrip / Load Tabs from JSON</h2>
                <div className="sample-block">
                    <IntegralUITabStripComponent id="tabstrip-loadjson"
                        allowAnimation={this.state.currentAlignment}
                        contentAnimation={this.state.currentAnimation}
                        resourcePath={this.state.currentResourcePath}
                        size={this.state.ctrlSize}
                        tabAlignment={this.state.currentAlignment}
                        tabStripPlacement={this.state.currentPlacement}
                        theme={this.state.currentTheme} 
                    > 
                        {tabs}
                    </IntegralUITabStripComponent>
                    <div className="feature-help">
                        <p><span className="initial-space"></span>In this example, all tabs with their content are loaded from a JSON file.</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default TabStripLoadJSON;
