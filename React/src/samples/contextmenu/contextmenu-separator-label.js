import React, { Component } from 'react';

import IntegralUIContextMenuComponent from 'integralui-web/wrappers/react.integralui.contextmenu.js';
import { IntegralUITheme } from 'integralui-web/components/integralui.enums.js';

import './contextmenu-separator-label.css';
import { iuiContextMenuSeparatorLabelStyle } from './contextmenu-separator-label.style.js';

class ContextMenuSeparatorLabel extends Component {

    //
    // Initialization / Destruction --------------------------------------------------------------
    //

    constructor(props){
        super(props);

        this.state = {
            currentTheme: IntegralUITheme.Office,
            menuSettings: {
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
                                background: 'white',
                                borderColor: 'transparent',
                                color: '#008000',
                                fontWeight: 'normal',
                                margin: '0 25%',
                                textAlign: 'center'
                            },
                            line: {
                                background: '#008000'
                            }
                        },
                        type: "separator"
                    },
                    { id: 19, pid: 1, text: "Exit", icon: "icons-medium empty" }
                ]
            }
        }
    }

    // Events -----------------------------------------------------------------------------------

    menuItemClick(e){
        if (e.detail.item && !e.detail.item.items)
            alert("Menu item: " + e.detail.item.text + " is clicked.");
    }

    // Update ------------------------------------------------------------------------------------

    render() {
        return (
            <div>
                <h2>ContextMenu / Separator with Label</h2>
                <div className="sample-block">
                    <IntegralUIContextMenuComponent
                        customStyle={iuiContextMenuSeparatorLabelStyle}
                        settings={this.state.menuSettings}
                        theme={this.state.currentTheme}
                        menuClick={(e) => this.menuItemClick(e)}
                    > 
                        <div className="cmnu-separator-label-block" id="menu-block">
                            <span>Right click to open the context menu</span>
                        </div>
                    </IntegralUIContextMenuComponent>
                    <div className="feature-help">
                        <p><span className="initial-space"></span>An example where separators have customizable labels. Each separator can have cuistom appearance set in CSS shared among all menus or you can set separators in different colors and other settings with inline styles.</p>
                        <p><span className="initial-space"></span>Once Context Menu appears, you will find separators in <i>Blue</i> and <i>Green</i> colors with different settings. The blue separator uses general CSS settings, while the green separator uses inline styles.</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default ContextMenuSeparatorLabel;
