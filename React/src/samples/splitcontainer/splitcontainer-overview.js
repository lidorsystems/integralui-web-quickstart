import React, { Component } from 'react';

import IntegralUISplitContainerComponent from 'integralui-web/wrappers/react.integralui.splitcontainer.js';
import { IntegralUITheme } from 'integralui-web/components/integralui.enums.js';

import './splitcontainer-overview.css';

class SplitContainerOverview extends Component {

    //
    // Initialization / Destruction --------------------------------------------------------------
    //

    constructor(props){
        super(props);

        this.state = {
            ctrlSize: { width: 700, height: 400 },
            currentResourcePath: 'integralui-web/icons',
            currentSplitterDistance: 180,
            currentTheme: IntegralUITheme.Office,
            panel1Data: {
                icon: 'tab-icon library',
                text: 'Books',
                content: 'Curabitur pretium tincidunt lacus. Nulla gravida orci a odio. Nullam varius, turpis et commodo pharetra, est eros bibendum elit, nec luctus magna felis sollicitudin mauris. Integer in mauris eu nibh euismod gravida. Duis ac tellus et risus vulputate vehicula. Donec lobortis risus a elit. Etiam tempor.'
            },
            panel2Data: {
                icon: 'tab-icon album',
                text: 'Music',
                content: 'Pellentesque malesuada nulla a mi. Duis sapien sem, aliquet nec, commodo eget, consequat quis, neque. Aliquam faucibus, elit ut dictum aliquet, felis nisl adipiscing sapien, sed malesuada diam lacus eget erat. Cras mollis scelerisque nunc. Nullam arcu. Aliquam consequat.'
            },
            showSplitterButons: true
        }
    }

    //
    // Methods -----------------------------------------------------------------------------------
    //

    _onSplitterMoving(e){
        if (e.detail.value < 100)
            e.detail.cancel = true;
    }

    // Update ------------------------------------------------------------------------------------

    render() {
        return (
            <div>
                <h2>Splitter / Overview</h2>
                <div className="sample-block">
                    <IntegralUISplitContainerComponent
                        size={this.state.ctrlSize} 
                        panel1={this.state.panel1Data} 
                        panel2={this.state.panel2Data}
                        resourcePath={this.state.currentResourcePath} 
                        splitterDistance={this.state.currentSplitterDistance} 
                        showButtons={this.state.showSplitterButons}
                        theme={this.state.currentTheme}
                        splitterMoving={(e) => this._onSplitterMoving(e)}
                        >
                        <div slot="iui-panel1">
                            <span className="spltc-ovw-panel-content">{this.state.panel1Data.content}</span>
                        </div>
                        <div slot="iui-panel2">
                            <span className="spltc-ovw-panel-content">{this.state.panel2Data.content}</span>
                        </div>
                    </IntegralUISplitContainerComponent>
                    <div className="feature-help">
                        <p><span className="initial-space"></span><strong><span className="code-name">IntegralUI</span> SplitContainer</strong> is a native Web Component that consists of two resizable panels separated by a splitter with tabs and command buttons. It allows you to place different content in two panels and change their size during run-time.</p>
                        <p><span className="initial-space"></span>The demonstration above shows a SplitContainer component, with option to change its orientation to horizontal or vertical. Each panel is represented by a tab with icon and title, also there is a swap button that when clicked will swap panels on demand. By left click and hold the splitter handle, you can change the size of panels.</p>
                        <p><span className="initial-space"></span>You may also notice that the top/left panel has condition set to prevent its height/width go below 100px. This is done by handling the <span className="code-name">splitterMoving</span> event in your code and set the condition there.</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default SplitContainerOverview;
