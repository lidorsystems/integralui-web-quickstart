import React, { Component } from 'react';

import { IntegralUIAnimationType } from 'integralui-web/components/integralui.enums.js';

import IntegralUITabComponent from 'integralui-web/wrappers/react.integralui.tab.js';
import IntegralUITabStripComponent from 'integralui-web/wrappers/react.integralui.tabstrip.js';

import './tabstrip-toolbar.css';

class TabStripToolbar extends Component {
    constructor(props){
        super(props);

        this.state = {
            currentAnimation: IntegralUIAnimationType.Slide,
            currentResourcePath: '../integralui-web/icons',
            currentTabSpacing: 0,
            isAnimationAllowed: true,
            ctrlSize: { width: 500, height: 300 },
            data: [
                { 
                    id: 1,
                    text: 'JavaScript',
                    body: 'Aliquam faucibus, elit ut dictum aliquet, felis nisl adipiscing sapien, sed malesuada diam lacus eget erat. Cras mollis scelerisque nunc. Nullam arcu. Aliquam consequat.'
                },
                { 
                    id: 2,
                    text: 'Angular',
                    body: 'Nullam varius, turpis et commodo pharetra, est eros bibendum elit, nec luctus magna felis sollicitudin mauris. Integer in mauris eu nibh euismod gravida. Duis ac tellus et risus vulputate vehicula. Donec lobortis risus a elit. Etiam tempor.'
                },
                { 
                    id: 3,
                    text: 'React',
                    body: 'In convallis tellus a mauris. Curabitur non elit ut libero tristique sodales. Mauris a lacus. Donec mattis semper leo. In hac habitasse platea dictumst.'
                },
                { 
                    id: 4,
                    text: 'Vue',
                    body: 'Nullam arcu. Aliquam consequat. Integer in mauris eu nibh euismod gravida. Duis ac tellus et risus vulputate vehicula.'
                }
            ]
        }
    }

    toolbarButtonClicked(index){
        // Skip if a click is made over the separator
        if (index !== 2){
            let strMsg = "";
            switch (index){
                case 1:
                    strMsg = "Charts";
                    break;

                case 3:
                    strMsg = "Favorite";
                    break;

                default:
                    strMsg = "Watch";
                    break;
            }

            alert(strMsg + " button clicked!");
        }
    }

    render() {
        let tabs = this.state.data.map((tab, index) => {
                return (
                    <IntegralUITabComponent key={index} data={tab} text={tab.text}>
                        <div className="tbs-tool-tab-content">{tab.body}</div>
                    </IntegralUITabComponent>
                )
            });

        let toolbarIcons = ['tbs-tool-watch', 'tbs-tool-charts', '', 'tbs-tool-favorite'];
        let toolbar = toolbarIcons.map((iconClass, index)=> {
            let btnClass = index === 2 ? 'tbs-toolbar-separator' : 'tbs-toolbar-button';
            return (
                <div key={index} className={`${btnClass} ${iconClass}`} onClick={() => this.toolbarButtonClicked(index)}><span></span></div>
            )
        });

        return (
            <div>
                <h2>TabStrip / Tabs with Toolbar</h2>
                <div className="sample-block">
                    <IntegralUITabStripComponent id="tabstrip-toolbar"
                        allowAnimation={this.state.isAnimationAllowed}
                        animation={this.state.currentAnimation}
                        resourcePath={this.state.currentResourcePath}
                        size={this.state.ctrlSize}
                        tabSpacing={this.state.currentTabSpacing}
                    > 
                        {tabs}
                        <div className="tbs-toolbar" slot="iui-tabstrip-toolbar-right">
                            {toolbar}
                        </div>
                    </IntegralUITabStripComponent>
                    <div className="feature-help">
                        <p><span className="initial-space"></span>A demo of a TabStrip with tabs on left and toolbar buttons on right side.</p>
                        <p><span className="initial-space"></span>TabStrip has a built-in support to add custom content on left or right side. In this case, the right side contains a custom toolbar with buttons. You can modify the content, by using the slot name <span className="code-name">'iui-tabstrip-toolbar-right'</span>.</p>
                        <p><span className="initial-space"></span>Templates on left or right side can contain any kind of custom HTML content or other components.</p>
                        <p><span className="initial-space"></span>In addition, this sample also shows tabs where their header has border with rounded corners.</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default TabStripToolbar;
