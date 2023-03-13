import React, { Component } from 'react';

import { IntegralUIAnimationType, IntegralUITheme } from 'integralui-web/components/integralui.enums.js';

import IntegralUITabComponent from 'integralui-web/wrappers/react.integralui.tab.js';
import IntegralUITabStripComponent from 'integralui-web/wrappers/react.integralui.tabstrip.js';

import './tabstrip-dragdrop-overview.css';
import { iuiTabStripDragDropOverviewStyle } from './tabstrip-dragdrop-overview.style.js';

class TabStripDragDropOverview extends Component {
    constructor(props){
        super(props);

        this.state = {
            currentAnimation: IntegralUIAnimationType.Slide,
            currentResourcePath: '../../integralui-web/icons',
            currentSelection: null,
            currentTheme: IntegralUITheme.Office,
            isAnimationAllowed: true,
            isDragAllowed: true,
            ctrlSize: { width: 600, height: 300 },
            tabs: [
                { 
                    id: 1,
                    icon: 'tab-icon library',
                    text: 'Books',
                    body: 'Curabitur pretium tincidunt lacus. Nulla gravida orci a odio. Nullam varius, turpis et commodo pharetra, est eros bibendum elit, nec luctus magna felis sollicitudin mauris. Integer in mauris eu nibh euismod gravida. Duis ac tellus et risus vulputate vehicula. Donec lobortis risus a elit. Etiam tempor.'
                },
                { 
                    id: 2,
                    icon: 'tab-icon album',
                    text: 'Music',
                    body: 'Pellentesque malesuada nulla a mi. Duis sapien sem, aliquet nec, commodo eget, consequat quis, neque. Aliquam faucibus, elit ut dictum aliquet, felis nisl adipiscing sapien, sed malesuada diam lacus eget erat. Cras mollis scelerisque nunc. Nullam arcu. Aliquam consequat.'
                },
                { 
                    id: 3,
                    icon: 'tab-icon star-empty',
                    text: 'Favorites',
                    body: 'Fusce convallis, mauris imperdiet gravida bibendum, nisl turpis suscipit mauris, sed placerat ipsum urna sed risus. In convallis tellus a mauris. Curabitur non elit ut libero tristique sodales. Mauris a lacus. Donec mattis semper leo. In hac habitasse platea dictumst.'
                },
                { 
                    id: 4,
                    icon: 'tab-icon notes',
                    text: 'Notes',
                    body: 'Duis ac tellus et risus vulputate vehicula. Donec lobortis risus a elit. Etiam tempor. Ut ullamcorper, ligula eu tempor congue, eros est euismod turpis, id tincidunt sapien risus a quam. Maecenas fermentum consequat mi. Donec fermentum.'
                },
                { 
                    id: 5,
                    icon: 'tab-icon sports',
                    text: 'Sports',
                    body: 'Aliquam faucibus, elit ut dictum aliquet, felis nisl adipiscing sapien, sed malesuada diam lacus eget erat. Cras mollis scelerisque nunc. Nullam arcu. Aliquam consequat.'
                }
            ]
        }
    }

    tabOrderChanged(e){
        console.log(e.detail.tab.text + " changed its position to " + e.detail.index);

        this.setState({ tabs: e.detail.list });
    }

    render() {
        var tabs = this.state.tabs.map((tab, index) => {
            return (
                <IntegralUITabComponent key={index} allowDrag={this.state.isDragAllowed} data={tab} icon={tab.icon} text={tab.text} theme={this.state.currentTheme}>
                    <div className="tbs-dragdrop-tab-content">{tab.body}</div>
                </IntegralUITabComponent>
            )
        });

        return (
            <div>
                <h2>TabStrip / Drag and Drop Overview</h2>
                <div className="sample-block">
                    <IntegralUITabStripComponent
                        allowAnimation={this.state.isAnimationAllowed}
                        allowDrag={this.state.isDragAllowed}
                        animation={this.state.currentAnimation}
                        customStyle={iuiTabStripDragDropOverviewStyle}
                        resourcePath={this.state.currentResourcePath}
                        selectedTab={this.state.currentSelection}
                        size={this.state.ctrlSize}
                        theme={this.state.currentTheme} 
                        tabOrderChanged={(e) => this.tabOrderChanged(e)}
                    > 
                        {tabs}
                    </IntegralUITabStripComponent>
                    <div className="feature-help">
                        <p><span className="initial-space"></span>In this example, you can reorder tabs using drag and drop. Drag and drop functionality is controlled on general level with <span className="code-lang">allowDrag</span> property that enables or disables dragging of all tabs, or on individial level where each Tab has allowDrag property that determines whether tab is draggable or not.</p>
                        <p><span className="initial-space"></span>Whenever tab is reordered using drag and drop, the <span className="code-lang">tabOrderChanged</span> event is fired, which you can handle in your code and add custom actions.</p>
                        <p><span className="initial-space"></span>To reorder tabs, just select a tab and drag it over other tabs. An empty space will appear showing the target position.</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default TabStripDragDropOverview;
