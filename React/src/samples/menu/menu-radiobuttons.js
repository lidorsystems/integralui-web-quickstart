import React, { Component } from 'react';

import IntegralUIMenuComponent from 'integralui-web/wrappers/react.integralui.menu.js';
import { IntegralUITheme } from 'integralui-web/components/integralui.enums.js';
import 'integralui-web/components/integralui.radiobutton.js';

import './menu-radiobuttons.css';
import { iuiMenuRadioButtonStyle } from './menu-radiobuttons.style.js';

class MenuRadioButtons extends Component {

    //
    // Initialization / Destruction --------------------------------------------------------------
    //

    constructor(props){
        super(props);

        this.state = {
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
                            text: "Navigation Pane", 
                            icon: "icons-medium empty",
                            items: [
                                { id: 331, pid: 33, text: "Normal", allowRadioButton: true, checked: true },
                                { id: 332, pid: 33, text: "Minimized", allowRadioButton: true },
                                { id: 333, pid: 33, text: "Off", allowRadioButton: true },
                                { id: 334, pid: 33, type: "separator" },
                                { id: 335, pid: 33, text: "Current View Pane", allowCheckBox: true },
                                { id: 336, pid: 33, text: "Favorite Folders", allowCheckBox: true, checked: true }
                            ]
                        },
                        {
                            id: 34, 
                            pid: 3,
                            text: "To-Do Bar", 
                            icon: "icons-medium empty",
                            items: [
                                { id: 341, pid: 34, text: "Normal", allowRadioButton: true },
                                { id: 342, pid: 34, text: "Minimized", allowRadioButton: true },
                                { id: 343, pid: 34, text: "Off", allowRadioButton: true, checked: true },
                                { id: 344, pid: 34, type: "separator" },
                                { id: 345, pid: 34, text: "Date Navigator", allowCheckBox: true, checked: true, enabled: false },
                                { id: 346, pid: 34, text: "Appointments", allowCheckBox: true, checked: true, enabled: false },
                                { id: 347, pid: 34, text: "Task List", allowCheckBox: true, checked: true, enabled: false }
                            ]
                        },
                        {
                            id: 35, 
                            pid: 3,
                            text: "Reading Pane", 
                            icon: "icons-medium empty",
                            items: [
                                { id: 351, pid: 35, text: "Right", allowRadioButton: true },
                                { id: 352, pid: 35, text: "Bottom", allowRadioButton: true, checked: true },
                                { id: 353, pid: 35, text: "Off", allowRadioButton: true }
                            ]
                        },
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

        this.menuRef = React.createRef();
    }

    //
    // Events ------------------------------------------------------------------------------------
    //

    changeMenuFunc(list, value){
        list.forEach(id => {
            let item = this.menuRef.current.findItemById(id);
            if (item)
                item.enabled = value;
        });

        this.menuRef.current.refresh();
    }

    onMenuRadioChecked(e){
        switch (e.detail.item.pid){
             // Navigation Pane
            case 33: 
                // Enabled when Normal or Minimized
                if (e.detail.item.id <= 332)
                    this.changeMenuFunc([335, 336], true);
                // Disable when Off
                else if (e.detail.item.id === 333)
                    this.changeMenuFunc([335, 336], false);
                else
                    this.showCheckedMessage(e);
                break;

            // To-Do Bar
            case 34:
                // Enabled when Normal or Minimized
                if (e.detail.item.id <= 342)
                    this.changeMenuFunc([345, 346, 347], true);
                // Disable when Off
                else if (e.detail.item.id === 343)
                    this.changeMenuFunc([345, 346, 347], false);
                else
                    this.showCheckedMessage(e);
                break;
        }
    }

    showCheckedMessage(e){
        console.log(e.detail.item.text + " is now " + e.detail.checked);
    }

    // Update ------------------------------------------------------------------------------------

    render() {
        return (
            <div>
                <h2>Menu / Radio Buttons</h2>
                <div className="sample-block">
                   <IntegralUIMenuComponent id="menu-radiobuttons" ref={this.menuRef}
                        customStyle={iuiMenuRadioButtonStyle}
                        items={this.state.items}
                        resourcePath={this.state.currentResourcePath}
                        theme={this.state.currentTheme}
                        checkedChanged={(e) => this.onMenuRadioChecked(e)}
                    ></IntegralUIMenuComponent>
                    <div className="feature-help">
                        <p><span className="initial-space"></span>An example of a Menu with Radio Buttons. Under the <strong>'View'</strong> menu, there are sub-menus with radio buttons. Opening these sub-menus will show a set of radio buttons and check boxes. If <strong>'Off'</strong> radio button is active, menu items with check boxes below will become disabled.</p>
                        <p><span className="initial-space"></span>Each item can have a radio button, by setting the following fields:</p>
                        <ul className="feature-points">
                            <li><span className="code-name">allowRadioButton</span> - determines whether radio button is visible or not</li>
                            <li><span className="code-name">checked</span> - specifies whether the radio button is checked or not</li>
                            <li><span className="code-name">radioGroup</span> - specifies the group to which the radio button belongs</li>
                        </ul>
                        <p><span className="initial-space"></span>Whenever menu radio button is clicked, the <span className="code-name">checkedChanged</span> event is fired, which you can handle in your code and add specific action.</p>
                        <p><span className="initial-space"></span>Clicking on the radio button will not close the parent menu. This allows you to change the active radio button without closing. To close the menu, click on the menu label or anywhere outside of the menu space.</p>
                        <p><span className="initial-space"></span>Radio Buttons are fully customizable via CSS.</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default MenuRadioButtons;
