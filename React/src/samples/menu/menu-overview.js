import React, { Component } from 'react';

import IntegralUIMenuComponent from 'integralui-web/wrappers/react.integralui.menu.js';
import { IntegralUITheme } from 'integralui-web/components/integralui.enums.js';

import './menu-overview.css';
import { iuiMenuOverviewStyle } from './menu-overview.style.js';

class MenuOverview extends Component {

    //
    // Initialization / Destruction --------------------------------------------------------------
    //

    constructor(props){
        super(props);

        this.state = {
            ctrlSize: { width: 700 },
            currentResourcePath: 'integralui-web/icons',
            currentTheme: IntegralUITheme.Office,
            items: [
                { 
                    id: 1, 
                    text: "File", 
                    icon: "",
                    items: [
                        {
                            id: 11, 
                            pid: 1,
                            text: "New", 
                            icon: "icons-medium new-document",
                            items: [
                                { id: 111, pid: 11, text: "Project", icon: "icons-medium empty" },
                                { id: 112, pid: 11, text: "Window", icon: "icons-medium empty" }
                            ]
                        },
                        { id: 12, pid: 1, text: "Open", icon: "icons-medium empty" },
                        { id: 13, pid: 1, text: "Save As...", icon: "icons-medium save" },
                        { id: 14, pid: 1, text: "Save All", icon: "icons-medium empty" },
                        { id: 15, pid: 1, type: "separator" },
                        { id: 16, pid: 1, text: "Page Setup", icon: "icons-medium empty" },
                        { id: 17, pid: 1, text: "Print", icon: "icons-medium print" },
                        { id: 18, pid: 1, type: "separator" },
                        { id: 19, pid: 1, text: "Exit", icon: "icons-medium empty" },
                    ]
    
                },
                { 
                    id: 2, 
                    text: "Edit", 
                    icon: "",
                    items: [
                        { id: 21, pid: 2, text: "Undo", icon: "icons-medium empty" },
                        { id: 22, pid: 2, text: "Redo", icon: "icons-medium empty" },
                        { id: 23, pid: 2, type: "separator" },
                        { id: 24, pid: 2, text: "Cut", icon: "icons-medium empty" },
                        { id: 25, pid: 2, text: "Copy", icon: "icons-medium copy" },
                        { id: 26, pid: 2, text: "Paste", icon: "icons-medium empty" },
                        { id: 27, pid: 2, text: "Delete", icon: "icons-medium delete-document" },
                    ]
                },
                { 
                    id: 3, 
                    text: "View", 
                    icon: "",
                    items: [
                        { id: 31, pid: 3, text: "Print Layout", icon: "icons-medium empty" },
                        {
                            id: 32, 
                            pid: 3,
                            text: "Zoom", 
                            icon: "icons-medium zoom",
                            items: [
                                { id: 321, pid: 32, text: "Zoom In", icon: "icons-medium zoom-in" },
                                { id: 322, pid: 32, text: "Zoom Out", icon: "icons-medium zoom-out" },
                                { id: 323, pid: 32, type: "separator" },
                                { id: 324, pid: 32, text: "Restore", icon: "icons-medium empty" }
                            ]
                        },
                        { id: 33, pid: 3, type: "separator" },
                        { id: 34, pid: 3, text: "Full Screen", icon: "icons-medium empty" },
                    ]
    
                },
                { 
                    id: 4, 
                    text: "Help", 
                    icon: "",
                    items: [
                        { id: 41, pid: 4, text: "Search", icon: "icons-medium empty" },
                        { id: 42, pid: 4, text: "Documents", icon: "icons-medium empty" },
                        { id: 43, pid: 4, type: "separator" },
                        { id: 44, pid: 4, text: "About", icon: "icons-medium empty" },
                    ]
                }
            ]
        }
    }

    //
    // Methods -----------------------------------------------------------------------------------
    //

    _menuItemClick(e){
        if (e.detail.item && e.detail.item.pid)
            alert("Menu item: " + e.detail.item.text + " is clicked.");
    }

    // Update ------------------------------------------------------------------------------------

    render() {
        return (
            <div>
                <h2>Menu / Overview</h2>
                <div className="sample-block">
                    <IntegralUIMenuComponent id="menu-overview"
                        customStyle={iuiMenuOverviewStyle}
                        items={this.state.items}
                        resourcePath={this.state.currentResourcePath}
                        size={this.state.ctrlSize}
                        theme={this.state.currentTheme}
                        menuClick={(e) => this._menuItemClick(e)}
                    ></IntegralUIMenuComponent>
                    <div className="feature-help">
                        <p><span className="initial-space"></span><strong><span className="code-name">IntegralUI</span> Menu</strong> is a native Web Component that allows you to create static and dynamic menus. You can populate the menu directly in your HTML or using a custom data source, either locally or remotely.</p>
                        <p><span className="initial-space"></span>In this example, we have a menu with four root menu items. Each menu has an icon, label and expand mark if there are child items. Whenever mouse cursor hovers over a menu item, an animation will start showing a window with child items. By clicking on menu item, a message box will appear, stating the menu item that was clicked.</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default MenuOverview;
