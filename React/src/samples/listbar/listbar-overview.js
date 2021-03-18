import React, { Component } from 'react';

import IntegralUIItemComponent from 'integralui-web/wrappers/react.integralui.item.js';
import IntegralUIListBarComponent from 'integralui-web/wrappers/react.integralui.listbar.js';
import IntegralUIListGroupComponent from 'integralui-web/wrappers/react.integralui.listgroup.js';
import { IntegralUITheme } from 'integralui-web/components/integralui.enums.js';

class ListBarOverview extends Component {

    //
    // Initialization / Destruction --------------------------------------------------------------
    //

    constructor(props){
        super(props);

        this.state = {
            ctrlSize: { width: 350, height: 400 },
            currentResourcePath: 'integralui-web/icons',
            currentTheme: IntegralUITheme.Office,
            expandBoxType: 'arrow',
            groups: [
                { 
                    id: 1, 
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
                    text: "Menus & Toolbars",
                    items: [
                        { id: 31, pid: 3, text: "ContextMenu" },
                        { id: 32, pid: 3, text: "Menu" },
                        { id: 33, pid: 3, text: "ToolStrip" }
                    ]
                },
                { 
                    id: 4, 
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
                    text: "Dialogs",
                    expanded: false,
                    items: [
                        { id: 51, pid: 5, text: "ColorDialog" },
                        { id: 52, pid: 5, text: "FontDialog" }
                    ]
                },
                { 
                    id: 6, 
                    text: "Printing",
                    expanded: false,
                    items: [
                        { id: 61, pid: 6, text: "PrintDialog" },
                        { id: 62, pid: 6, text: "PrintDocument" }
                    ]
                },
                { 
                    id: 7, 
                    text: "IntegralUI",
                    items: [
                        { id: 71, pid: 7, text: "Accordion" },
                        { id: 72, pid: 7, text: "CheckBox" },
                        { id: 73, pid: 7, text: "ComboBox" },
                        { id: 74, pid: 7, text: "ContextMenu" },
                        { id: 77, pid: 7, text: "Grid" },
                        { id: 77, pid: 7, text: "ListView" },
                        { id: 75, pid: 7, text: "Menu" },
                        { id: 76, pid: 7, text: "SlideBar" },
                        { id: 77, pid: 7, text: "TabStrip" },
                        { id: 78, pid: 7, text: "TreeGrid" },
                        { id: 79, pid: 7, text: "TreeView" }
                    ]
                }
            ],
            isAnimationAllowed: true
        }

        this.state.currentSelection = this.state.groups[1];

    }

    componentDidMount(){
    }

    //
    // Methods -----------------------------------------------------------------------------------
    //

    // Update ------------------------------------------------------------------------------------

    _getGroupItems(group){
        return group.items.map((item, index) => {
            return (
                <IntegralUIItemComponent key={index} theme={this.state.currentTheme}>
                    <span>{item.text}</span>
                </IntegralUIItemComponent>
            )
        });
    }

    render() {
        var groups = this.state.groups.map((group, index) => {
                return (
                    <IntegralUIListGroupComponent key={index} allowAnimation={this.state.isAnimationAllowed} data={group} text={group.text} icon={group.icon} expandBoxType={this.state.expandBoxType} theme={this.state.currentTheme}>
                        {this._getGroupItems(group)}
                    </IntegralUIListGroupComponent>
                )
            });

        return (
            <div>
                <h2>ListBar / Overview</h2>
                <div className="sample-block">
                    <IntegralUIListBarComponent
                        allowAnimation={this.state.isAnimationAllowed}
                        groups={this.state.groups}
                        resourcePath={this.state.currentResourcePath}
                        selectedGroup={this.state.currentSelection}
                        size={this.state.ctrlSize}
                        theme={this.state.currentTheme}
                        > 
                        {groups}
                    </IntegralUIListBarComponent>
                    <div className="feature-help">
                        <p><span className="initial-space"></span><strong><span style={{color: '#c60d0d'}}>IntegralUI</span> ListBar</strong> is a native Web Component that displays a list of expandable groups, in vertical layout. Each group contains a list of items created using custom HTML elements or components. When the current view cannot display all groups in whole, scroll buttons will appear on each side that will allow you to navigate among groups.</p>
                        <p><span className="initial-space"></span>Above demonstration shows several groups with different number of items. Each group can expand/collapse, but only one group can become selected. Whenever more groups are expanded and they overflow the current view, a set of scroll buttons will appear on top and bottom side. By pressing these buttons, you can scroll the current view and navigate among presented groups.</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default ListBarOverview;
