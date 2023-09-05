import React, { Component } from 'react';

import { IntegralUIAnimationType, IntegralUITabScrollMode, IntegralUITheme } from 'integralui-web/components/integralui.enums.js';

import IntegralUIRadioButtonComponent from 'integralui-web/wrappers/react.integralui.radiobutton.js';
import IntegralUIRadioGroupComponent from 'integralui-web/wrappers/react.integralui.radiogroup.js';
import IntegralUITabComponent from 'integralui-web/wrappers/react.integralui.tab.js';
import IntegralUITabStripComponent from 'integralui-web/wrappers/react.integralui.tabstrip.js';

import './tabstrip-scroll-mode.css';

class TabStripScrollMode extends Component {
    constructor(props){
        super(props);

        this.state = {
            currentAnimation: IntegralUIAnimationType.Fade,
            currentResourcePath: '../../integralui-web/icons',
            currentScrollMode: IntegralUITabScrollMode.InBound,
            currentTheme: IntegralUITheme.Office,
            isAnimationAllowed: true,
            ctrlSize: { width: 600, height: 300 },
            tabs: []
        }
    }

    componentDidMount(){
        let tabList = [];
        for (let i = 1; i <= 15; i++)
            tabList.push({ id: i, text: 'Tab' + i });

        this.setState({ tabs: tabList });
    }

    onScrollModeChecked(e){
        switch (e.detail.index){
            case 1:
                this.setState({ currentScrollMode: IntegralUITabScrollMode.InBound });
                break;

            case 2:
                this.setState({ currentScrollMode: IntegralUITabScrollMode.OutBound });
                break;
    
            default:
                this.setState({ currentScrollMode: IntegralUITabScrollMode.None });
                break;
        }
    }

    render() {
        var tabs = this.state.tabs.map((tab, index) => {
            return (
                <IntegralUITabComponent key={index} data={tab} text={tab.text} theme={this.state.currentTheme}>
                    <div className="tbs-scrollmode-tab-content">Content of {tab.text}</div>
                </IntegralUITabComponent>
            )
        });

        return (
            <div>
                <h2>TabStrip / Different Types of Scrolling</h2>
                <div className="sample-block">
                    <IntegralUITabStripComponent id="tabstrip-scrollmode"
                        allowAnimation={this.state.isAnimationAllowed}
                        contentAnimation={this.state.currentAnimation}
                        resourcePath={this.state.currentResourcePath}
                        scrollMode={this.state.currentScrollMode}
                        size={this.state.ctrlSize}
                        tabStripPlacement={this.state.currentPlacement} 
                        theme={this.state.currentTheme} 
                    > 
                        {tabs}
                    </IntegralUITabStripComponent>
                    <div className="tabstrip-scrollmode-panel">
                        <label>Scroll Mode: </label>
                        <IntegralUIRadioGroupComponent theme={this.state.currentTheme} buttonChecked={(e) => this.onScrollModeChecked(e)}>
                            <IntegralUIRadioButtonComponent>None</IntegralUIRadioButtonComponent>
                            <IntegralUIRadioButtonComponent checked={true}>InBound</IntegralUIRadioButtonComponent>
                            <IntegralUIRadioButtonComponent>OutBound</IntegralUIRadioButtonComponent>
                        </IntegralUIRadioGroupComponent>
                    </div>
                    <div className="feature-help">
                        <p><span className="initial-space"></span>When you have many tabs that cannot appear in the TabStrip space all at the same time, it is best to enable scrolling. By default, scrolling is disabled.</p>
                        <p><span className="initial-space"></span>There are three scrolling modes:</p>
                        <ul className="feature-points">
                            <li><span className="code-object">None</span> - scrolling disabled, scroll buttons will not appear</li>
                            <li><span className="code-object">InBound</span> - scrolling enabled, scroll buttons appear next to each other</li>
                            <li><span className="code-object">OutBound</span> - scrolling enabled, scroll buttons appear on left/right or up/down side</li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

export default TabStripScrollMode;
