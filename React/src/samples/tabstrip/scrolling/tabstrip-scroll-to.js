import React, { Component } from 'react';

import { IntegralUIAnimationType, IntegralUITabScrollMode, IntegralUITheme } from 'integralui-web/components/integralui.enums.js';

import IntegralUISelectComponent from 'integralui-web/wrappers/react.integralui.select.js';
import IntegralUITabComponent from 'integralui-web/wrappers/react.integralui.tab.js';
import IntegralUITabStripComponent from 'integralui-web/wrappers/react.integralui.tabstrip.js';

import './tabstrip-scroll-to.css';

class TabStripScrollTo extends Component {
    constructor(props){
        super(props);

        this.state = {
            currentAnimation: IntegralUIAnimationType.Fade,
            currentResourcePath: '../../integralui-web/icons',
            currentScrollMode: IntegralUITabScrollMode.InBound,
            currentSelection: null,
            currentTheme: IntegralUITheme.Office,
            isAnimationAllowed: true,
            ctrlSize: { width: 600, height: 300 },
            tabs: []
        }

        this.tabstripRef = React.createRef();
    }

    componentDidMount(){
        let tabList = [];
        for (let i = 1; i <= 15; i++)
            tabList.push({ id: i, text: 'Tab' + i });

        this.setState({ tabs: tabList });
    }

    scrollToChanged(e){
        let tab = this.state.tabs[e.detail.index];
        this.tabstripRef.current.scrollTo(tab);
        this.setState({ currentSelection: tab });
    }

    render() {
        var tabs = this.state.tabs.map((tab, index) => {
            return (
                <IntegralUITabComponent key={index} data={tab} text={tab.text} theme={this.state.currentTheme}>
                    <div className="tbs-scrollto-tab-content">Content of {tab.text}</div>
                </IntegralUITabComponent>
            )
        });

        return (
            <div>
                <h2>TabStrip / Scroll To Specific Tab</h2>
                <div className="sample-block">
                    <IntegralUITabStripComponent id="tabstrip-scrollto" ref={this.tabstripRef}
                        allowAnimation={this.state.isAnimationAllowed}
                        contentAnimation={this.state.currentAnimation}
                        resourcePath={this.state.currentResourcePath}
                        scrollMode={this.state.currentScrollMode}
                        selectedTab={this.state.currentSelection}
                        size={this.state.ctrlSize}
                        tabStripPlacement={this.state.currentPlacement} 
                        theme={this.state.currentTheme} 
                    > 
                        {tabs}
                    </IntegralUITabStripComponent>
                    <div className="tabstrip-scrollto-panel">
                        <label>Scroll to: </label>
                        <IntegralUISelectComponent allowAnimation={true} items={this.state.tabs} resourcePath={this.state.currentResourcePath} theme={this.state.currentTheme} selectedIndexChanged={(e) => this.scrollToChanged(e)}></IntegralUISelectComponent>
                    </div>
                    <div className="feature-help">
                        <p><span className="initial-space"></span>In this example, there are multiple tabs and you can select the tab that you want to appear in view by scrolling to it.</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default TabStripScrollTo;
