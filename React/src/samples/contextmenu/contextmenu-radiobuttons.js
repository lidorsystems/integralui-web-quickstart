import React, { Component } from 'react';

import IntegralUIContextMenuComponent from 'integralui-web/wrappers/react.integralui.contextmenu.js';
import { IntegralUITheme } from 'integralui-web/components/integralui.enums.js';
import 'integralui-web/components/integralui.radiobutton';

import './contextmenu-radiobuttons.css';
import { iuiContextMenRuadioButtonStyle } from './contextmenu-radiobuttons.style.js';

class ContextMenuRadioButtons extends Component {

    //
    // Initialization / Destruction --------------------------------------------------------------
    //

    constructor(props){
        super(props);

        this.state = {
            currentResourcePath: 'integralui-web/icons',
            currentTheme: IntegralUITheme.Office,
            menuSettings: {
                items: [
                    { id: 31, text: "Auto Preview", icon: "icons-medium empty" },
                    { id: 32, type: "separator" },
                    {
                        id: 33, 
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
                        text: "Reading Pane", 
                        icon: "icons-medium empty",
                        items: [
                            { id: 351, pid: 35, text: "Right", allowRadioButton: true },
                            { id: 352, pid: 35, text: "Bottom", allowRadioButton: true, checked: true },
                            { id: 353, pid: 35, text: "Off", allowRadioButton: true }
                        ]
                    },
                    { id: 35, type: "separator" },
                    { id: 36, text: "Refresh", icon: "icons-medium empty" }
                ]
            }
        }

        this.contextMenuRef = React.createRef();
    }

    componentDidMount(){
    }

    // Events ------------------------------------------------------------------------------------

    changeMenuFunc(list, value){
        list.forEach(id => {
            let item = this.contextMenuRef.current.findItemById(id);
            if (item)
                item.enabled = value;
        });

        this.contextMenuRef.current.refresh();
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
                <h2>ContextMenu / Radio Buttons</h2>
                <div className="sample-block">
                    <IntegralUIContextMenuComponent ref={this.contextMenuRef}
                        customStyle={iuiContextMenRuadioButtonStyle}
                        resourcePath={this.state.currentResourcePath}
                        settings={this.state.menuSettings}
                        theme={this.state.currentTheme}
                        checkedChanged={(e) => this.onMenuRadioChecked(e)}
                    > 
                        <div className="cmnu-radiobuttons-block" id="menu-block">
                            <span>Right click to open the context menu</span>
                        </div>
                    </IntegralUIContextMenuComponent>
                    <div className="feature-help">
                        <p><span className="initial-space"></span>An example of a Context Menu with Radio Buttons. Opening some of the sub-menus will show a set of radio buttons and check boxes. If <strong>'Off'</strong> radio button is active, menu items with check boxes below will become disabled.</p>
                        <p><span className="initial-space"></span>Each item can have a radio button, by setting the followiing fields:</p>
                        <ul className="feature-points">
                            <li><span className="code-name">allowRadioButton</span> - Determines whether radio button is visible or not</li>
                            <li><span className="code-name">checked</span> - specifies whether the radio button is checked or not</li>
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

export default ContextMenuRadioButtons;
