import React, { Component } from 'react';
import { html } from 'integralui-web/external/lit-element.js';

import IntegralUITreeViewComponent from 'integralui-web/wrappers/react.integralui.treeview.js';
import { IntegralUIItemDisplayMode, IntegralUISelectionMode, IntegralUITheme } from 'integralui-web/components/integralui.enums.js';

import './treeview-overview.css';
import { iuiTreeViewOverviewStyle } from './treeview-overview.style.js';

class TreeViewOverview extends Component {

    //
    // Initialization / Destruction --------------------------------------------------------------
    //

    constructor(props){
        super(props);

        this.state = {
            ctrlSize: { width: 350, height: 300 },
            currentResourcePath: '../integralui-web/icons',
            currentSelectionMode: IntegralUISelectionMode.MultiExtended,
            currentTheme: IntegralUITheme.Office,
            displayMode: IntegralUIItemDisplayMode.Full,
            isAnimationAllowed: true,
            isDragAllowed: true,
            items: [
                { 
                    id: 1,
                    text: "Favorites",
                    icon: "favorites",
                    items: [
                        { id: 11, pid: 1, text: "Desktop", icon: "empty-doc" },
                        { id: 12, pid: 1, text: "Downloads", icon: "downloads", checkState: "checked" }
                    ]
                },
                { 
                    id: 2,
                    text: "Libraries",
                    icon: "folder",
                    expanded: false,
                    items: [
                        { 
                            id: 21, 
                            pid: 2, 
                            text: "Documents", 
                            icon: "documents",
                            expanded: false,
                            checkState: "checked",
                            items: [
                                { id: 211, pid: 21, text: "My Documents", icon: "empty-doc", checkState: "checked" },
                                { id: 212, pid: 21, text: "Public Documents", icon: "empty-doc", checkState: "checked" }
                            ]
                        },
                        { id: 22, pid: 2, text: "Music", icon: "music" },
                        { id: 23, pid: 2, text: "Pictures", icon: "pictures", checkState: "checked" },
                        { id: 24, pid: 2, text: "Videos", icon: "videos" }
                    ]
                },
                { 
                    id: 3,
                    text: "Computer",
                    icon: "pc",
                    checkState: "checked",
                    items: [
                        { id: 31, pid: 3, text: "Local Disk (C:)", icon: "disk", checkState: "checked" },
                        { id: 32, pid: 3, text: "Storage (D:)", icon: "disk", checkState: "checked" }
                    ]
                },
                { id: 4, text: "Network", icon: "network" },
                { id: 5, text: "Recycle Bin", icon: "recycle" }
            ]
        }

        this.treeRef = React.createRef();
    }

    componentDidMount(){
    }

    //
    // Methods -----------------------------------------------------------------------------------
    //

    // General -----------------------------------------------------------------------------------

    //
    // Currently when using templates, the LitElement binding syntax is required
    // for properties, methods and events
    //
    currentItemTemplate = (item) => { 
        return html`
            <div>
                <span class="computer-icons ${item.icon}"></span>
                <span>${item.text}</span>
            </div>
        `;
    };

    currentItemHoverTemplate = (item) => { 
        return html`
            <div class="trw-ovw-toolbar">
                <span class="trw-ovw-toolitem-button item-button-delete" @click="${() => this._deleteItem(item)}"></span>
            </div>
        `;
    };

    _deleteItem(item){
        this.treeRef.current.removeItem(item);
        this.treeRef.current.updateLayout();
    }

    // Update ------------------------------------------------------------------------------------

    render() {
        return (
            <div>
                <h2>TreeView / Overview</h2>
                <div className="sample-block">
                   <IntegralUITreeViewComponent id="treeview-overview" ref={this.treeRef}
                        allowAnimation={this.state.isAnimationAllowed}
                        allowDrag={this.state.isDragAllowed}
                        customStyle={iuiTreeViewOverviewStyle}
                        itemDisplay={this.state.displayMode}
                        items={this.state.items}
                        itemTemplate={this.currentItemTemplate}
                        itemHoverTemplate={this.currentItemHoverTemplate}
                        resourcePath={this.state.currentResourcePath}
                        selectionMode={this.state.currentSelectionMode}
                        size={this.state.ctrlSize}
                        theme={this.state.currentTheme} 
                        > 
                    </IntegralUITreeViewComponent>
                    <div className="feature-help">
                        <p><span className="initial-space"></span><strong><span className="code-name">IntegralUI</span> TreeView</strong> is a native Web Component that displays tree hierarchy of items that can be reordered using advanced drag drop operations. You can load data on demand during run-time from local or remote data sources, and add custom HTML content in each tree item.</p>
                        <p><span className="initial-space"></span>Above demonstration shows a simple tree hierarchy, each item has an icon and an editable label. When item is hovered, a command button will appear on right side, which when clicked will open a text editor, where you can change the item label.</p>
                        <p><span className="initial-space"></span>Custom content (in this case edit button on right side), can appear when item is hovered or selected. You can determine the condition when this content appears, on general level for all items or on individual level for each item separately. The content appearance is determined by the <strong>contentVisibility</strong> property or item field which can accept values from <span className="code-object">IntegralUIContentVisibility</span> enumeration: None, Hover, Select or Both.</p>
                        <p><span className="initial-space"></span>You can reorder items by click and drag over specific item. A dragging window will appear, stating the target item and position at which item can be dropped. During drag drop operations, you can also create a copy of an item by holding the SHIFT key. The dragging window will change its icon, showing a + sign next to the position marker.</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default TreeViewOverview;
