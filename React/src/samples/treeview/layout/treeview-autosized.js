import React, { Component } from 'react';

import { IntegralUITheme } from 'integralui-web/components/integralui.enums.js';
import IntegralUITreeViewComponent from 'integralui-web/wrappers/react.integralui.treeview.js';

import './treeview-autosized.css';

class TreeViewAutoSized extends Component {
    constructor(props){
        super(props);

        this.state = {
            ctrlSize: { width: 350 },
            currentResourcePath: '../../../integralui-web/icons',
            currentTheme: IntegralUITheme.Office,
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
    }

    render() {

        return (
            <div>
                <h2>TreeView / Auto Sized</h2>
                <div className="sample-block">
                    <IntegralUITreeViewComponent id="treeview-autosized"
                        autoSize={true}
                        items={this.state.items}
                        resourcePath={this.state.currentResourcePath}
                        size={this.state.ctrlSize}
                        theme={this.state.currentTheme}
                    ></IntegralUITreeViewComponent>
                    <div className="feature-help">
                        <p><span className="initial-space"></span>In this example, TreeView height is determined by its content. Whenever tree item expands or collapses, it also updates the treeview height.</p>
                        <p><span className="initial-space"></span>When auto-size is enabled, vertical scrollbar will remain hidden, only the horizontal scrollbar may appear when required.</p>
                        <p><span className="initial-space"></span>This feature is useful with small tree hierarchies or when you want to determine the tree view size on demand showing the tree structure in full.</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default TreeViewAutoSized;
