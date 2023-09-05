import React, { Component } from 'react';

import IntegralUIMenuComponent from 'integralui-web/wrappers/react.integralui.menu.js';
import { IntegralUITheme } from 'integralui-web/components/integralui.enums.js';

import './menu-shortcuts.css';
import { iuiMenuShortcutStyle } from './menu-shortcuts.style.js';

class MenuShortcuts extends Component {

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
                                { id: 111, pid: 11, text: "Project", shortcutKey: 'Ctrl+Alt+N', icon: "icons-medium empty" },
                                { id: 112, pid: 11, text: "Window", icon: "icons-medium empty" }
                            ]
                        },
                        { id: 12, pid: 1, text: "Open", shortcutKey: 'Ctrl+Alt+O', icon: "icons-medium empty" },
                        { id: 13, pid: 1, text: "Save As...", shortcutKey: 'Ctrl+S', icon: "icons-medium save" },
                        { id: 14, pid: 1, text: "Save All", icon: "icons-medium empty" },
                        { id: 15, pid: 1, type: "separator" },
                        { id: 16, pid: 1, text: "Page Setup", icon: "icons-medium empty" },
                        { id: 17, pid: 1, text: "Print", shortcutKey: 'Ctrl+Alt+P', icon: "icons-medium print" },
                        { id: 18, pid: 1, type: "separator" },
                        { id: 19, pid: 1, text: "Exit", shortcutKey: 'Ctrl+X', icon: "icons-medium empty" },
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
                        { id: 25, pid: 2, text: "Copy", shortcutKey: 'Ctrl+Shift+C', icon: "icons-medium copy" },
                        { id: 26, pid: 2, text: "Paste", shortcutKey: 'Ctrl+Shift+V', icon: "icons-medium empty" },
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
                        { id: 34, pid: 3, text: "Full Screen", shortcutKey: 'Ctrl+F11', icon: "icons-medium empty" },
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
                        { id: 44, pid: 4, text: "About", shortcutKey: 'Alt+H', icon: "icons-medium empty" },
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
                <h2>Menu / Shortcuts</h2>
                <div className="sample-block">
                    <IntegralUIMenuComponent id="menu-shortcuts"
                        allowAnimation={this.state.isAnimationAllowed}
                        customStyle={iuiMenuShortcutStyle}
                        items={this.state.items}
                        resourcePath={this.state.currentResourcePath}
                        size={this.state.ctrlSize}
                        theme={this.state.currentTheme}
                        menuClick={(e) => this._menuItemClick(e)}
                    ></IntegralUIMenuComponent>
                    <div className="feature-help">
                        <p><span className="initial-space"></span>An example of menu with shortcuts. Some of the menu items have a shortcut key attached. Whenever the combination of keys set in the shortcut is pressed, the <span className="code-name">menuClick</span> event will fire. Shortcuts will call the same function as the menu item is clicked. In this case, an alert box will popup.</p>
                        <p><span className="initial-space"></span>You can create custom shortcuts with different combinations of CTRL, SHIFT, ALT and function or regular keys.</p>
                        <p><span className="initial-space"></span>In addition, you can customize the shortcut label with CSS.</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default MenuShortcuts;
