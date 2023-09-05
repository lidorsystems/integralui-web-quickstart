import React, { Component } from 'react';

import IntegralUIMenuComponent from 'integralui-web/wrappers/react.integralui.menu.js';
import { IntegralUITheme } from 'integralui-web/components/integralui.enums.js';

import './menu-separator-label.css';
import { iuiMenuSeparatorLabelStyle } from './menu-separator-label.style.js';

class MenuSeparatorLabel extends Component {

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
                        { id: 15, pid: 1, text: "Printing", type: "separator" },
                        { id: 16, pid: 1, text: "Page Setup", icon: "icons-medium empty" },
                        { id: 17, pid: 1, text: "Print", icon: "icons-medium print" },
                        { 
                            id: 18, 
                            pid: 1, 
                            text: "General", 
                            style: {
                                content: {
                                    background: '#e5e5e5',
                                    borderColor: '#e5e5e5',
                                    fontStyle: 'italic',
                                    fontWeight: 'normal',
                                    margin: '0 25%',
                                    padding: '5px 10px 5px 7px',
                                    textAlign: 'center'
                                },
                                line: {
                                    background: '#e5e5e5'
                                }
                            },
                            type: "separator"
                        },
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
                        { 
                            id: 23, 
                            pid: 2, 
                            text: "Copy/Paste" , 
                            style: {
                                content: {
                                    background: 'white',
                                    borderColor: 'transparent',
                                    color: '#008000',
                                    fontWeight: 'normal'
                                },
                                line: {
                                    background: '#008000'
                                }
                            },
                            type: "separator"
                        },
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
                <h2>Menu / Separator with Label</h2>
                <div className="sample-block">
                    <IntegralUIMenuComponent id="menu-separator-label"
                        customStyle={iuiMenuSeparatorLabelStyle}
                        items={this.state.items}
                        resourcePath={this.state.currentResourcePath}
                        size={this.state.ctrlSize}
                        menuClick={(e) => this._menuItemClick(e)}
                    ></IntegralUIMenuComponent>
                    <div className="feature-help">
                        <p><span className="initial-space"></span>In this example, menu separators have customizable label. Each separator can have custom appearance set in CSS shared among all menus or you can set separators in different colors and other settings with inline styles.</p>
                        <p><span className="initial-space"></span>Under <strong>'File'</strong> menu, you will find separators in <i>Blue</i> and <i>Gray</i> colors with different settings. The blue separator uses general CSS settings, while the gray separator uses inline styles.</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default MenuSeparatorLabel;
