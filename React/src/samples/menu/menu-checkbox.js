import React, { Component } from 'react';

import IntegralUIMenuComponent from 'integralui-web/wrappers/react.integralui.menu.js';
import { IntegralUITheme } from 'integralui-web/components/integralui.enums.js';

import './menu-checkbox.css';
import { iuiMenuCheckBoxStyle } from './menu-checkbox.style.js';

class MenuCheckBox extends Component {

    //
    // Initialization / Destruction --------------------------------------------------------------
    //

    constructor(props){
        super(props);

        this.state = {
            currentResourcePath: '../integralui-web/icons',
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
                        { id: 22, pid: 2, type: "separator" },
                        { id: 23, pid: 2, text: "Cut", icon: "icons-medium empty" },
                        { id: 24, pid: 2, text: "Copy", icon: "icons-medium copy" },
                        { id: 25, pid: 2, text: "Paste", icon: "icons-medium empty" },
                        { id: 26, pid: 2, type: "separator" },
                        { id: 27, pid: 2, text: "Delete", icon: "icons-medium delete-document" },
                    ]
                },
                { 
                    id: 3, 
                    text: "View", 
                    icon: "",
                    items: [
                        { id: 31, pid: 3, text: "Auto Preview", icon: "icons-medium empty" },
                        { id: 32, pid: 3, type: "separator" },
                        {
                            id: 33, 
                            pid: 3,
                            text: "Toolbars", 
                            icon: "icons-medium empty",
                            items: [
                                { id: 331, pid: 33, text: "Standard", allowCheckBox: true, checked: true },
                                { id: 332, pid: 33, text: "Advanced", allowCheckBox: true },
                                { id: 333, pid: 33, text: "Web", allowCheckBox: true },
                                { id: 334, pid: 33, type: "separator" },
                                { id: 335, pid: 33, text: "Customize ...", icon: "icons-medium empty" }
                            ]
                        },
                        { id: 34, pid: 3, text: "StatusBar", allowCheckBox: true },
                        { id: 35, pid: 3, type: "separator" },
                        { id: 36, pid: 3, text: "Refresh", icon: "icons-medium empty" }
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

    // Events ------------------------------------------------------------------------------------

    onMenuChecked(e){
        console.log(e.detail.item.text + " is now " + e.detail.checked);
    }

    // Update ------------------------------------------------------------------------------------

    render() {
        return (
            <div>
                <h2>Menu / CheckBox</h2>
                <div className="sample-block">
                    <IntegralUIMenuComponent id="menu-checkbox"
                        customStyle={iuiMenuCheckBoxStyle}
                        items={this.state.items}
                        resourcePath={this.state.currentResourcePath}
                        theme={this.state.currentTheme}
                        checkedChanged={(e) => this.onMenuChecked(e)}
                    ></IntegralUIMenuComponent>
                    <div className="feature-help">
                        <p><span className="initial-space"></span>An example of a Menu with Check Boxes. Under the <strong>'View'</strong> menu, you will find a menu item with a check box. In addition, opening the <strong>'Toolbars'</strong> menu will show three menu items with check boxes.</p>
                        <p><span className="initial-space"></span>Each item can have a checkbox, by setting the followiing fields:</p>
                        <ul className="feature-points">
                            <li><span className="code-name">allowCheckBox</span> - Determines whether checkbox is visible or not</li>
                            <li><span className="code-name">checked</span> - specifies whether the checkbox is checked or not</li>
                        </ul>
                        <p><span className="initial-space"></span>Whenever menu checkbox is clicked, the <span className="code-name">checkedChanged</span> event is fired, which you can handle in your code and add specific action.</p>
                        <p><span className="initial-space"></span>Clicking on the checkbox will not close the parent menu. This allows you to check multiples menu items without closing. To close the menu, click on the menu label or anywhere outside of the menu space.</p>
                        <p><span className="initial-space"></span>Check boxes are fully customizable via CSS.</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default MenuCheckBox;
