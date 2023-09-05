import React, { Component } from 'react';

import IntegralUIContextMenuComponent from 'integralui-web/wrappers/react.integralui.contextmenu.js';
import { IntegralUITheme } from 'integralui-web/components/integralui.enums.js';

import './contextmenu-checkbox.css';
import { iuiContextMenuCheckBoxStyle } from './contextmenu-checkbox.style.js';

class ContextMenuCheckBoxes extends Component {

    //
    // Initialization / Destruction --------------------------------------------------------------
    //

    constructor(props){
        super(props);

        this.state = {
            currentResourcePath: '../integralui-web/icons',
            currentTheme: IntegralUITheme.Office,
            menuSettings: {
                items: [
                    { id: 31, text: "Auto Preview", icon: "icons-medium empty" },
                    { id: 32, type: "separator" },
                    {
                        id: 33, 
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
                    { id: 34, text: "StatusBar", allowCheckBox: true },
                    { id: 35, type: "separator" },
                    { id: 36, text: "Refresh", icon: "icons-medium empty" }
                ]
            }
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
                <h2>ContextMenu / Check Boxes</h2>
                <div className="sample-block">
                    <IntegralUIContextMenuComponent
                        customStyle={iuiContextMenuCheckBoxStyle}
                        resourcePath={this.state.currentResourcePath}
                        settings={this.state.menuSettings}
                        theme={this.state.currentTheme}
                        checkedChanged={(e) => this.onMenuChecked(e)}
                    > 
                        <div className="cmnu-checkbox-block" id="menu-block">
                            <span>Right click to open the context menu</span>
                        </div>
                    </IntegralUIContextMenuComponent>
                    <div className="feature-help">
                        <p><span className="initial-space"></span>An example of a Context Menu with Check Boxes. Opening the <strong>'Toolbars'</strong> menu will show three menu items with check boxes.</p>
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

export default ContextMenuCheckBoxes;
