import React, { Component } from 'react';

import { IntegralUICheckMode, IntegralUITheme } from 'integralui-web/components/integralui.enums.js';
import IntegralUITreeViewComponent from 'integralui-web/wrappers/react.integralui.treeview.js';

import './treeview-highlight.css';

class TreeViewHighlight extends Component {
    constructor(props){
        super(props);

        this.state = {
            ctrlSize:  { width: 350, height: 300 },
            currentResourcePath: '../../../integralui-web/icons',
            currenCheckMode: IntegralUICheckMode.ThreeState,
            currentTheme: IntegralUITheme.Office,
            isAnimationAllowed: true,
            items: [
                { 
                    id: 1, 
                    allowCheckBox: false,
                    text: "Common Controls",
                    expanded: false,
                    items: [
                        { id: 11, pid: 1, text: "Button" },
                        { id: 12, pid: 1, text: "CheckBox" },
                        { id: 13, pid: 1, text: "ComboBox" },
                        { id: 14, pid: 1, text: "DateTime Picker" },
                        { id: 15, pid: 1, text: "Label" },
                        { id: 16, pid: 1, text: "ProgressBar" },
                        { id: 17, pid: 1, text: "TextBox" }
                    ]
                },
                { 
                    id: 2, 
                    allowCheckBox: false,
                    text: "Containers",
                    items: [
                        { id: 21, pid: 2, text: "GroupBox" },
                        { id: 22, pid: 2, text: "Panel" },
                        { id: 23, pid: 2, text: "SplitContainer" },
                        { id: 24, pid: 2, text: "TabControl" }
                    ]
                },
                { 
                    id: 3, 
                    allowCheckBox: false,
                    text: "Menus & Toolbars",
                    items: [
                        { id: 31, pid: 3, text: "ContextMenu" },
                        { id: 32, pid: 3, text: "Menu" },
                        { id: 33, pid: 3, text: "ToolStrip" }
                    ]
                },
                { 
                    id: 4, 
                    allowCheckBox: false,
                    text: "Data",
                    expanded: false,
                    items: [
                        { id: 41, pid: 4, text: "DataGrid" },
                        { id: 42, pid: 4, text: "DataSet" },
                        { id: 43, pid: 4, text: "ReportViewer" }
                    ]
                },
                { 
                    id: 5, 
                    allowCheckBox: false,
                    text: "Dialogs",
                    expanded: false,
                    items: [
                        { id: 51, pid: 5, text: "ColorDialog" },
                        { id: 52, pid: 5, text: "FontDialog" }
                    ]
                },
                { 
                    id: 6, 
                    allowCheckBox: false,
                    text: "Printing",
                    expanded: false,
                    items: [
                        { id: 61, pid: 6, text: "PrintDialog" },
                        { id: 62, pid: 6, text: "PrintDocument" }
                    ]
                },
                { 
                    id: 7, 
                    allowCheckBox: false,
                    text: "IntegralUI",
                    items: [
                        { id: 71, pid: 7, text: "Accordion" },
                        { id: 72, pid: 7, text: "CheckBox" },
                        { id: 73, pid: 7, text: "ComboBox" },
                        { id: 74, pid: 7, text: "ContextMenu" },
                        { id: 75, pid: 7, text: "Menu" },
                        { id: 76, pid: 7, text: "SlideBar" },
                        { id: 77, pid: 7, text: "TabStrip" },
                        { id: 78, pid: 7, text: "TreeGrid" },
                        { id: 79, pid: 7, text: "TreeView" }
                    ]
                }
            ]
        }

        this.hightlightStyle = {
            borderLeftColor: '#56c756',
            borderLeftWidth: '4px',
            fontWeight: 'bold'
        }
    
        this.treeRef = React.createRef();
    }

    // Highlight items with custom style
    onItemChecked(e){
        e.detail.item.style = e.detail.checked ? {normal: this.hightlightStyle, hovered: this.hightlightStyle, selected: this.hightlightStyle } : {}

        this.treeRef.current.refresh();
    }

    render() {
        return (
            <div>
                <h2>TreeView / Highlight Items</h2>
                <div className="sample-block">
                    <IntegralUITreeViewComponent id="treeview-highlight" ref={this.treeRef}
                        allowAnimation={this.state.isAnimationAllowed}
                        checkBoxes={true}
                        items={this.state.items}
                        resourcePath={this.state.currentResourcePath}
                        size={this.state.ctrlSize}
                        theme={this.state.currentTheme} 
                        checkStateChanged={(e) => this.onItemChecked(e)}
                    ></IntegralUITreeViewComponent>
                    <div className="feature-help">
                        <p><span className="initial-space"></span>In this example, you can highlight items using a checkbox. Whenever item is checked, a vertical green line will appear in front of the item and the label appears in bold.</p>
                        <p><span className="initial-space"></span>For demonstration purposes, root items don't have a check box and you can't highlight them. You can choose other ways to highlight items, like changing their background color or applying a different style on demand.</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default TreeViewHighlight;
