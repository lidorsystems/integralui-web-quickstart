import React, { Component } from 'react';

import { IntegralUIAnimationType } from 'integralui-web/components/integralui.enums.js';

import IntegralUISelectComponent from 'integralui-web/wrappers/react.integralui.select.js';
import IntegralUITabComponent from 'integralui-web/wrappers/react.integralui.tab.js';
import IntegralUITabStripComponent from 'integralui-web/wrappers/react.integralui.tabstrip.js';

import './tabstrip-tab-groups.css';

class TabStripGroups extends Component {
    constructor(props){
        super(props);

        this.state = {
            currentAnimation: IntegralUIAnimationType.Fade,
            currentResourcePath: '../../integralui-web/icons',
            currentSelection: null,
            isAnimationAllowed: true,
            ctrlSelectSize: { width: 120 },
            ctrlSize: { width: 600, height: 300 },
            tabs: []
        }
 
        this.groupList = [
            [
                { id: 1, name: 'Tab1', text: 'Tab 1' },
                { id: 2, name: 'Tab2', text: 'Tab 2' },
                { id: 3, name: 'Tab3', text: 'Tab 3' }
            ],
            [
                { id: 4, name: 'Tab4', text: 'Tab 4' },
                { id: 5, name: 'Tab5', text: 'Tab 5' }
            ],
            [
                { id: 6, name: 'Tab6', text: 'Tab 6' },
                { id: 7, name: 'Tab7', text: 'Tab 7' },
                { id: 8, name: 'Tab8', text: 'Tab 8' },
                { id: 9, name: 'Tab9', text: 'Tab 9' }
            ]
        ];
    
        // A list of groups available to select from
        this.options = [
            { id: 1, text: "Group 1" },
            { id: 2, text: "Group 2" },
            { id: 3, text: "Group 3" }
        ];
    }

    componentDidMount(){
        this.setState({ tabs: this.groupList[0] });
    }

    groupChanged(e){
        // Create a new set of tabs based on selected group
        let tabList = this.groupList[e.detail.index];
        console.log(tabList);
        this.setState({ tabs: tabList, currentSelection: tabList[0] });
    }

    render() {
        let tabs = this.state.tabs.map((tab, index) => {
            return (
                <IntegralUITabComponent id={tab.id} key={index} data={tab} text={tab.text}>
                    <div className="tbs-tab-groups-tab-content">Content of {tab.text}</div>
                </IntegralUITabComponent>
            )
        });

        return (
            <div>
                <h2>TabStrip / Switch Tab Groups with ComboBox</h2>
                <div className="sample-block">
                    <IntegralUITabStripComponent id="tabstrip-tab-groups"
                        allowAnimation={this.state.isAnimationAllowed}
                        contentAnimation={this.state.currentAnimation}
                        resourcePath={this.state.currentResourcePath}
                        selectedTab={this.state.currentSelection}
                        size={this.state.ctrlSize}
                    > 
                        {tabs}
                        <div slot="toolbar-right">
                            <IntegralUISelectComponent allowAnimation={true} items={this.options} resourcePath={this.state.currentResourcePath} size={this.state.ctrlSelectSize} selectedIndexChanged={(e) => this.groupChanged(e)}></IntegralUISelectComponent>
                        </div>
                    </IntegralUITabStripComponent>
                    <div className="feature-help">
                        <p><span className="initial-space"></span> An example that shows how you can change the tab list using the Select component. Depending on current option selected, a different set of tabs is shown.</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default TabStripGroups;
