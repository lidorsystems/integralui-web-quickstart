import React, { Component } from 'react';

import IntegralUIContextMenuComponent from 'integralui-web/wrappers/react.integralui.contextmenu.js';
import { IntegralUITheme } from 'integralui-web/components/integralui.enums.js';

import './contextmenu-header.css';
import { iuiContextMenuHeaderStyle } from './contextmenu-header.style.js';

class ContextMenuHeader extends Component {

    //
    // Initialization / Destruction --------------------------------------------------------------
    //

    constructor(props){
        super(props);

        this.state = {
            currentTheme: IntegralUITheme.Office,
            menuSettings: {
                items: [
                    { id: 1, text: "Context Menu", type: "header" },
                    { 
                        id: 2,
                        text: "New",
                        icon: "icons-medium new-document",
                        items: [
                            { id: 21, pid: 2, text: "Project", icon: "icons-medium solution" },
                            { id: 22, pid: 2, text: "Window", icon: "icons-medium empty" }
                        ]
                    },
                    { id: 3, text: "Open", icon: "icons-medium empty" },
                    { id: 4, text: "Save As...", icon: "icons-medium save" },
                    { id: 5, text: "Save All", icon: "icons-medium empty" },
                    { id: 6, type: "separator", icon: "icons-medium empty" },
                    { 
                        id: 7, 
                        text: "Social", 
                        icon: "icons-medium people",
                        items: [
                            { id: 71, pid: 7, text: "Facebook", icon: "icons-medium facebook" },
                            { id: 72, pid: 7, text: "Google Plus", icon: "icons-medium google-plus" },
                            { id: 73, pid: 7, text: "Twitter", icon: "icons-medium twitter" }
                        ]
                    },
                    { id: 8, text: "Favorites", icon: "icons-medium empty" },
                    { id: 9, type: "separator", icon: "icons-medium empty" },
                    { id: 10, text: "Page Setup", icon: "icons-medium empty" },
                    { id: 11, text: "Print", icon: "icons-medium print" },
                ]
            }
        }
    }

    //
    // Methods -----------------------------------------------------------------------------------
    //

    menuItemClick(e){
        if (e.detail.item && !e.detail.item.items)
            alert("Menu item: " + e.detail.item.text + " is clicked.");
    }

    // Update ------------------------------------------------------------------------------------

    render() {
        return (
            <div>
                <h2>ContextMenu / Header</h2>
                <div className="sample-block">
                    <IntegralUIContextMenuComponent
                        customStyle={iuiContextMenuHeaderStyle}
                        settings={this.state.menuSettings}
                        theme={this.state.currentTheme}
                        menuClick={(e) => this.menuItemClick(e)}
                    > 
                        <div className="cmnu-header-block" id="menu-block">
                            <span>Right click to open the context menu</span>
                        </div>
                    </IntegralUIContextMenuComponent>
                    <div className="feature-help">
                        <p><span className="initial-space"></span>An example of Context Menu with header as first menu item. Having a header can help in describing what the context menu options are for.</p>
                        <p><span className="initial-space"></span>The header appears when menu item <strong>type</strong> field is set to <span className="code-name">'header'</span>. It is fully customizable with CSS.</p>
                        <p><span className="initial-space"></span>Tn addition, you can create custom template for headers, where you can add different HTML elements and CSS. In this case, the header has a label and blue background.</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default ContextMenuHeader;
