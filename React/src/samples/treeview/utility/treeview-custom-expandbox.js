import React, { Component } from 'react';
import { html } from 'integralui-web/external/lit-element.js';

import { IntegralUITheme } from 'integralui-web/components/integralui.enums.js';
import IntegralUITreeViewComponent from 'integralui-web/wrappers/react.integralui.treeview.js';
import { iuiTreeViewCustomExpandBoxStyle } from './treeview-custom-expandbox.style.js';

import './treeview-custom-expandbox.css';

class TreeViewCustomExpandBox extends Component {
    constructor(props){
        super(props);

        this.state = {
            ctrlSize: { width: 350, height: 300 },
            currentResourcePath: '../integralui-web/icons',
            currentTheme: IntegralUITheme.Office,
            isAnimationAllowed: true,
            items: [
                { 
                    id: 1,
                    text: "Favorites",
                    items: [
                        { id: 11, pid: 1, text: "Desktop" },
                        { id: 12, pid: 1, text: "Downloads" }
                    ]
                },
                { 
                    id: 2,
                    text: "Libraries",
                    items: [
                        { 
                            id: 21, 
                            pid: 2, 
                            text: "Documents", 
                            expanded: false,
                            locked: true,
                            style: {
                                expandBox: {
                                    backgroundPosition: '-168px -144px'
                                }
                            },
                            items: [
                                { id: 211, pid: 21, text: "My Documents" },
                                { id: 212, pid: 21, text: "Public Documents" }
                            ]
                        },
                        { id: 22, pid: 2, text: "Music" },
                        { id: 23, pid: 2, text: "Pictures" },
                        { id: 24, pid: 2, text: "Videos" }
                    ]
                },
                { 
                    id: 3,
                    text: "Computer",
                    items: [
                        { id: 31, pid: 3, text: "Local Disk (C:)" },
                        { id: 32, pid: 3, text: "Storage (D:)" }
                    ]
                },
                { id: 4, text: "Network" },
                { id: 5, text: "Recycle Bin" }
            ]
        }
    }

    currentItemTemplate = (item) => { 
        return html`
            <div>
                <span class="iui-item-label">${item.text}</span>
            </div>
        `;
    }

    // Prevent expanding of items that are locked
    onBeforeExpand(e){
        if (e.detail.item && e.detail.item.locked === true)
            e.detail.cancel = true;
    }

    render() {

        return (
            <div>
                <h2>TreeView / Custom Expand Box</h2>
                <div className="sample-block">
                    <IntegralUITreeViewComponent id="treeview-custom-expandbox"
                        allowAnimation={this.state.isAnimationAllowed}
                        customStyle={iuiTreeViewCustomExpandBoxStyle}
                        items={this.state.items}
                        itemTemplate={this.currentItemTemplate}
                        resourcePath={this.state.currentResourcePath}
                        size={this.state.ctrlSize}
                        theme={this.state.currentTheme} 
                        beforeExpand={(e) => this.onBeforeExpand(e)}
                    ></IntegralUITreeViewComponent>
                    <div className="feature-help">
                        <p><span className="initial-space"></span>In above demo, expand boxes are represented by open/close folder icon, and additionally locked items display the locked folder icon.</p>
                        <p><span className="initial-space"></span>Default CSS classes responsible for expand box appearance are modified and instead of default arrow icons, a set of custom icons are used. Furthermore, one item is marked as locked, that is it cannot become expanded, by handling the <span className="code-object"beforeExpand></span> event and canceling the expand process. Additionaly, the expand box is changed to a locked folder icon, to make visual reprsentation of the locked state.</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default TreeViewCustomExpandBox;
