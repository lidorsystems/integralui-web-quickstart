import React, { Component } from 'react';
import { html } from 'integralui-web/external/lit-element.js';
import { classMap } from 'integralui-web/external/class-map.js';
import { styleMap } from 'integralui-web/external/style-map.js';

import { IntegralUITheme } from 'integralui-web/components/integralui.enums.js';
import IntegralUITreeViewComponent from 'integralui-web/wrappers/react.integralui.treeview.js';
import { iuiEditorsDefaultStyle } from 'integralui-web/styles/default/integralui.editors.style.js';
import { iuiTreeViewCustomContentStyle } from './treeview-custom-content.style.js';

import './treeview-custom-content.css';

class TreeViewCustomContent extends Component {
    constructor(props){
        super(props);

        this.state = {
            ctrlSize: { width: 500, height: 400 },
            currentResourcePath: '../../../integralui-web/icons',
            currentTheme: IntegralUITheme.Office,
            items: [
                { 
                    text: "Theme Park Construction",
                    status: "In Progress",
                    items: [
                        { 
                            text: "Site Preparations", 
                            status: "Open",
                            items: [
                                { 
                                    text: "Location Map", 
                                    status: "In Progress",
                                    expanded: false,
                                    items: [
                                        { text: "Relocate trees", status: "Resolved", value: 100 },
                                        { text: "Relocate Elves", status: "Reopened", value: 78 },
                                        { text: "Bulldoze the hills", status: "Resolved", value: 40 },
                                        { text: "Remove waste rock and soil", status: "In Progress", value: 90 },
                                        { text: "Build access road", status: "Open", value: 28 },
                                    ]
                                },
                                { text: "Dig escape tunnels for staff", status: "Open", value: 71 },
                                { 
                                    text: "Build a transparent dome over the theme park", 
                                    status: "Reopened",
                                    items: [
                                        { text: "Check seismic activity", status: "In Progress", value: 85 }
                                    ]
                                },
                                { text: "Install entrance checkpoints", status: "Open", value: 50 }
                           ]
                        },
                        { 
                            text: "Marketing + PR activities", 
                            status: "In Progress",
                            items: [
                                { 
                                    text: "New folders", 
                                    status: "Open",
                                    expanded: false,
                                    items: [
                                        { text: "Advertising", status: "To Do", value: 25 },
                                        { text: "Backlog Breakdown Plugin requirements", status: "To Do", value: 10 },
                                        { text: "30-minute TV advertisement for prime-time broadcast/superbowl etc.", status: "To Do", value: 35 },
                                        { text: "Celebrity endorsements", status: "To Do", value: 90 }
                                    ]
                                },
                                { text: "Anti-PR campaign to discredit safety of competing theme parks", status: "In Progress", value: 76 }
                           ]
                        },
                        { 
                            text: "Rides + attractions", 
                            status: "Open",
                            items: [
                                { text: "Redefine the Standard Model of particle physics", status: "Open", value: 25 },
                                { text: "Arrange black hole insurance", status: "Complete", value: 100 },
                                { text: "Automatic hyper-drive engine warm up when enemy ships are close", status: "Open", value: 5 },
                                { text: "Use reverse hyper-driving to accumulate energy on braking", status: "Open", value: 15 },
                                { text: "Fuel Efficiency", status: "Open", value: 30 }
                           ]
                        }
                    ]
                }
            ]
        }
    }

    componentDidMount(){
        // Update the color of progress value for each item
        this.state.items.forEach(item => this.updateProgressValue(item));
    }

    currentItemTemplate = (item) => { 
        return html`
            <div>
                <div class="item-progress">
                    <div class="item-progress-text">${item.text}</div>
                    <div class="iui-editor-progress-block">
                        <div class=${classMap({ "iui-editor-progress": true })}>
                            <div class="iui-editor-progress-content" style=${styleMap(this.getEditorProgressStyle(item))}></div>
                        </div>
                        <div class="iui-editor-progress-label">${item.value}%</div>
                    </div>
                </div>
                <div class="item-status">${item.status}</div>
            </div>
        `;
    }
        
    getEditorProgressStyle(item){
        let style = {};

        style.width = item.value + '%';

        // Red
        if (item.value < 25) 
            style.background = '#ed3b3b';
        // Orange
        else if (item.value < 50)
            style.background = '#ff9c38';
        // Yellow
        else if (item.value < 75)
            style.background = '#ffe819';
        // Green
        else if (item.value < 95)
            style.background = '#48c548';
        // Blue
        else
            style.background ='#489dc5';

        return style;
    }

    getParentProgressFromChildren(parent){
        if (parent.items && parent.items.length > 0){
            let result = 0;
            parent.items.forEach((childItem) => {
                result += this.getParentProgressFromChildren(childItem); 
            })

            parent.value = result / parent.items.length;
        }

        return parent.value || 0;
    }

    updateProgressValue(item){
        item.value = this.getParentProgressFromChildren(item);
    }

    render() {
        return (
            <div>
                <h2>TreeView / Items with Custom Content</h2>
                <div className="sample-block">
                    <IntegralUITreeViewComponent id="treeview-custom-content"
                        customStyle={[iuiEditorsDefaultStyle, iuiTreeViewCustomContentStyle]}
                        items={this.state.items}
                        itemTemplate={this.currentItemTemplate}
                        resourcePath={this.state.currentResourcePath}
                        size={this.state.ctrlSize}
                        theme={this.state.currentTheme}
                    ></IntegralUITreeViewComponent>
                    <div className="feature-help">
                        <p><span className="initial-space"></span>In this demo, We have a tree structure where each item displays a progress bar visualizing the completion of specific operation. Depending on item value, the progress is updated in different colors, where each color represents a progression stage: red, orange, yellow, green and blue.</p>
                        <p><span className="initial-space"></span>For parent items, the progress value is calculated from its children, using an aggregation function.</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default TreeViewCustomContent;
