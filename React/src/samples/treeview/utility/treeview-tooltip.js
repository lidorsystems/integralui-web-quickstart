import React, { Component } from 'react';
import { html } from 'integralui-web/external/lit-element.js';

import { IntegralUICheckMode, IntegralUITheme } from 'integralui-web/components/integralui.enums.js';
import IntegralUITreeViewComponent from 'integralui-web/wrappers/react.integralui.treeview.js';
import 'integralui-web/components/integralui.tooltip.js';

import './treeview-tooltip.css';

class TreeViewTooltip extends Component {
    constructor(props){
        super(props);

        this.state = {
            ctrlSize: { width: 350, height: 300 },
            currenCheckMode: IntegralUICheckMode.ThreeState,
            currentResourcePath: '../../integralui-web/icons',
            currentTheme: IntegralUITheme.Office,
            isAnimationAllowed: true,
            items: [
                { 
                    id: 1,
                    text: "Favorites",
                    items: [
                        { id: 11, pid: 1, text: "Desktop" },
                        { id: 12, pid: 1, text: "Downloads", checkState: "Checked" }
                    ]
                },
                { 
                    id: 2,
                    text: "Libraries",
                    expanded: false,
                    items: [
                        { 
                            id: 21, 
                            pid: 2, 
                            text: "Documents", 
                            expanded: false,
                            checkState: "Checked",
                            items: [
                                { id: 211, pid: 21, text: "My Documents", checkState: "Checked" },
                                { id: 212, pid: 21, text: "Public Documents", checkState: "Checked" }
                            ]
                        },
                        { id: 22, pid: 2, text: "Music" },
                        { id: 23, pid: 2, text: "Pictures", checkState: "Checked" },
                        { id: 24, pid: 2, text: "Videos" }
                    ]
                },
                { 
                    id: 3,
                    text: "Computer",
                    checkState: "Checked",
                    items: [
                        { id: 31, pid: 3, text: "Local Disk (C:)", checkState: "Checked" },
                        { id: 32, pid: 3, text: "Storage (D:)", checkState: "Checked" }
                    ]
                },
                { id: 4, text: "Network" },
                { id: 5, text: "Recycle Bin" }
            ]
        }

        // Tooltip settings
        this.tooltipSettings = {
            autoPopDelay: 3000,
            enabled: true,
            initialDelay: 500,
            position: 'mouse',
            showMarker: true
        }
    }

    currentItemTemplate = (item) => { 
        return html`
            <div>
                <iui-tooltip
                    .enabled="${this.tooltipSettings.enabled}"
                    .settings="${Object.assign({ title: item.text }, this.tooltipSettings )}"
                    .theme="${this.state.currentTheme}"
                >
                    <span>${item.text}</span>
                </iui-tooltip>
            </div>
        `;
    };

    render() {

        return (
            <div>
                <h2>TreeView / Items with Tooltip</h2>
                <div className="sample-block">
                    <IntegralUITreeViewComponent id="treeview-tooltip"
                        allowAnimation={this.state.isAnimationAllowed}
                        checkBoxes={true}
                        checkMode={this.state.currenCheckMode}
                        items={this.state.items}
                        itemTemplate={this.currentItemTemplate}
                        resourcePath={this.state.currentResourcePath}
                        size={this.state.ctrlSize}
                        theme={this.state.currentTheme} 
                    ></IntegralUITreeViewComponent>
                    <div className="feature-help">
                        <p><span className="initial-space"></span>In this example, each item has a tooltip attached. Whenever the mouse cursor is moved above the item, a tooltip will appear showing the item text.</p>
                        <p><span className="initial-space"></span>Tooltip is fully customizable, you can set the initial delay, how long the tooltip will remain visible, its position etc.</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default TreeViewTooltip;
