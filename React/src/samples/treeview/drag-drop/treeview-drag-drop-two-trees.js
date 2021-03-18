import React, { Component } from 'react';

import IntegralUITreeViewComponent from 'integralui-web/wrappers/react.integralui.treeview.js';
import { IntegralUITheme } from 'integralui-web/components/integralui.enums.js';

import './treeview-drag-drop-two-trees.css';
import { iuiTreeViewDDTwoTreeStyle } from './treeview-drag-drop-two-trees.style.js';

class TreeViewDragDropTwoTrees extends Component {

    //
    // Initialization / Destruction --------------------------------------------------------------
    //

    constructor(props){
        super(props);

        this.state = {
            allowDrag: true,
            allowDrag2: true,
            allowDrop: true,
            allowDrop2: true,
            autoExpand: true,
            ctrlSize: { width: 350, height: 300 },
            currentResourcePath: '../../integralui-web/icons',
            currentTheme: IntegralUITheme.Office,
            data: [
                { 
                    id: 1,
                    text: "Books",
                    icon: "trw-dd-icons-medium library",
                    items: [
                        { id: 11, pid: 1, text: "Art" },
                        { 
                            id: 12,
                            pid: 1,
                            text: "Business",
                            icon: "trw-dd-icons-medium people",
                            items: [
                                { id: 121, pid: 12, text: "Economics" },
                                { 
                                    id: 122,
                                    pid: 12,
                                    checkState: 'checked',
                                    text: "Investing", 
                                    expanded: false,
                                    icon: "trw-dd-icons-medium economics",
                                    items: [
                                        { id: 1221, pid: 122, text: "Bonds" },
                                        { id: 1222, pid: 122, text: "Options" },
                                        { id: 1223, pid: 122, text: "Stocks" }
                                    ]
                                },
                                { id: 123, pid: 12, text: "Management" },
                                { id: 124, pid: 12, text: "Small Business" }
                            ]
                        },
                        { id: 13, pid: 1, text: "Health", icon: "trw-dd-icons-medium heart", checkState: 'checked' },
                        { id: 14, pid: 1, text: "Literature" },
                        { 
                            id: 15,
                            pid: 1,
                            text: "Science",
                            expanded: false,
                            items: [
                                { id: 151, pid: 15, text: "Astronomy" },
                                { id: 152, pid: 15, text: "Mathematics" },
                                { id: 153, pid: 15, text: "Evolution" },
                                { id: 154, pid: 15, text: "Nature" }
                            ]
                        }
                    ]
                },
                { id: 2, text: "Computers" },
                {
                    id: 3,
                    checkState: 'checked',
                    text: "Electronics",
                    items: [
                        { id: 31, pid: 3, text: "Camera", icon: "trw-dd-icons-medium camera" },
                        { id: 32, pid: 3, text: "Cell Phones" },
                        { id: 33, pid: 3, text: "Video Game Consoles" }
                    ]
                },
                { 
                    id: 4,
                    text: "Music", 
                    expanded: false,
                    icon: "trw-dd-icons-medium album",
                    items: [
                        { id: 41, pid: 4, text: "Blues" },
                        { id: 42, pid: 4, text: "Classic Rock" },
                        { id: 43, pid: 4, text: "Pop" },
                        { id: 44, pid: 4, text: "Jazz" }
                    ]
                },
                { 
                    id: 5,
                    text: "Software",
                    icon: "trw-dd-icons-medium software",
                    items: [
                        { id: 51, pid: 5, text: "Games", checkState: 'checked' },
                        { id: 52, pid: 5, text: "Operating Systems" },
                        { id: 53, pid: 5, text: "Network & Servers" },
                        { id: 54, pid: 5, text: "Security" }
                    ]
                },
                { 
                    id: 6,
                    text: "Sports",
                    expanded: false,
                    icon: "trw-dd-icons-medium sports",
                    items: [
                        { id: 61, pid: 6, text: "Baseball" },
                        { id: 62, pid: 6, text: "Martial Arts", checkState: 'checked' },
                        { id: 63, pid: 6, text: "Running" },
                        { 
                            id: 64,
                            pid: 6,
                            text: "Tennis",
                            expanded: false,
                            items: [
                                { id: 641, pid: 64, text: "Accessories" },
                                { id: 642, pid: 64, text: "Balls" },
                                { id: 643, pid: 64, text: "Racquets" }
                            ]
                        }
                    ]
                },
                { id: 7, text: "Video Games" },
                { id: 8, text: "Watches", icon: "trw-dd-icons-medium clock" }
            ],
            data2: []
        }
    }

    componentDidMount(){
        // For items without icon, add an empty icon
        this.setEmptyItemIcon(this.state.data);
    }

    setEmptyItemIcon(list){
        list.forEach(item => {
            if (!item.icon) 
                item.icon = "trw-dd-icons-empty"

            this.setEmptyItemIcon(item.items || []);
        });

        this.setState({ data: [...list] });
    }

    //
    // Methods -----------------------------------------------------------------------------------
    //

    // Update ------------------------------------------------------------------------------------

    render() {
        return (
            <div>
                <h2>TreeView / Drag Drop Between TreeViews</h2>
                <div className="sample-block">
                    <IntegralUITreeViewComponent id="treeview-dragdrop-two-trees"
                        allowDrag={this.state.allowDrag}
                        allowDrop={this.state.allowDrop}
                        customStyle={iuiTreeViewDDTwoTreeStyle}
                        items={this.state.data}
                        name="'TreeView 1'"
                        resourcePath={this.state.currentResourcePath}
                        size={this.state.ctrlSize}
                        theme={this.state.currentTheme} 
                        > 
                    </IntegralUITreeViewComponent>
                    <IntegralUITreeViewComponent id="treeview-dragdrop-two-trees"
                        allowDrag={this.state.allowDrag2}
                        allowDrop={this.state.allowDrop2}
                        customStyle={iuiTreeViewDDTwoTreeStyle}
                        items={this.state.data2}
                        name="'TreeView 2'"
                        resourcePath={this.state.currentResourcePath}
                        size={this.state.ctrlSize}
                        theme={this.state.currentTheme} 
                        > 
                    </IntegralUITreeViewComponent>
                    <br style={{ clear: 'both' }} />
                    <div style={{ display: 'inline-block', marginTop: '20px' }}>
                        <div style={{ float: 'left', width: '350px', marginRight: '30px' }} align="center">
                            <label style={{ marginRight: '30px' }}><input type="checkbox" defaultChecked={this.state.allowDrag} onChange={(e) => this.setState({ allowDrag: e.target.checked})} /> Allow Drag</label>
                            <label><input type="checkbox" defaultChecked={this.state.allowDrop} onChange={(e) => this.setState({ allowDrop: e.target.checked})} /> Allow Drop</label>
                        </div>
                        <div style={{ float: 'left', width: '350px' }} align="center">
                            <label style={{ marginRight: '30px' }}><input type="checkbox" defaultChecked={this.state.allowDrag2} onChange={(e) => this.setState({ allowDrag2: e.target.checked})} /> Allow Drag</label>
                            <label><input type="checkbox" defaultChecked={this.state.allowDrop2} onChange={(e) => this.setState({ allowDrop2: e.target.checked})} /> Allow Drop</label>
                        </div>
                        <br style={{ clear: 'both' }} />
                    </div>
                </div>
                <div className="feature-help" style={{ marginTop: 0 }}>
                    <p><span className="initial-space"></span>In this sample you can drag drop items within the same TreeView or from left TreeView to the right TreeView and vice versa. When item is dragged a drop marker is displayed showing the exact location at which dragged item can drop. If the marker is not shown, the drop position is not allowed.</p>
                    <p><span className="initial-space"></span>You can reorder items by click and drag over specific item. A dragging window will appear, stating the target item and position at which item can be dropped. During drag drop operations, you can also create a copy of an item by holding the SHIFT key. The dragging window will change its icon, showing a <span style={{ color: '#c60d0d', fontWeight: 'bold' }}>+</span> sign next to the position marker.</p>
                    <p><span className="initial-space"></span>While dragging an item over middle space of some target item, when dropped the item will be added as a child of the target item. If the <span className="code-name">autoExpand</span> property is set to true, the target item will expand, after a short delay of 500ms.</p>
                    <p><span className="initial-space"></span>By clicking on check boxes, you can change the built-in properties:</p>
                    <ul className="feature-points">
                        <li><span className="code-name">allowDrag</span> - determines whether items can be dragged</li>
                        <li><span className="code-name">allowDrop</span> - determines whether items can be dropped</li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default TreeViewDragDropTwoTrees;
