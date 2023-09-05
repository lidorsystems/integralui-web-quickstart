import React, { Component } from 'react';

import IntegralUIContextMenuComponent from 'integralui-web/wrappers/react.integralui.contextmenu.js';
import { IntegralUITheme } from 'integralui-web/components/integralui.enums.js';

import './contextmenu-multi-level.css';
import { iuiContextMenuMultiLevelStyle } from './contextmenu-multi-level.style.js';

class ContextMenuMultiLevel extends Component {

    //
    // Initialization / Destruction --------------------------------------------------------------
    //

    constructor(props){
        super(props);

        this.state = {
            currentTheme: IntegralUITheme.Office,
            menuSettings: {
                items: [
                    { id: 10, text: "Books", type: "header" },
                    { id: 11, text: "Art" },
                    { 
                        id: 12,
                        text: "Business",
                        icon: "icons-medium people",
                        items: [
                            { id: 121, pid: 12, text: "Economics" },
                            { 
                                id: 122,
                                pid: 12,
                                text: "Investing", 
                                icon: "icons-medium economics",
                                items: [
                                    { id: 1221, pid: 122, text: "Bonds" },
                                    { id: 1222, pid: 122, text: "Options" },
                                    { id: 1223, pid: 122, text: "Stocks" }
                                ]
                            },
                            { id: 123, pid: 12, text: "Management" },
                            { id: 124, pid: 12, text: "Small Business" }
                        ]
                    },
                    { id: 13, text: "Health", icon: "icons-medium heart" },
                    { id: 14, text: "Literature" },
                    { 
                        id: 15,
                        text: "Science",
                        items: [
                            { id: 151, pid: 15, text: "Astronomy" },
                            { id: 152, pid: 15, text: "Mathematics" },
                            { id: 153, pid: 15, text: "Evolution" },
                            { id: 154, pid: 15, text: "Nature" }
                        ]
                    }
                ]
            }
        }
    }
    
    // Initialization ----------------------------------------------------------------------------
            
    // For menu items without icon, add an empty icon
    setEmptyItemIcon(list){
        list.forEach((item) => {
            if (!item.icon && item.type !== 'header') 
                item.icon = "menu-mlvl-icons-empty"

            this.setEmptyItemIcon(item.items || []);
        });
    }

    componentDidMount(){
        this.setEmptyItemIcon(this.state.menuSettings.items);
    }

    // Events -----------------------------------------------------------------------------------

    isThereChildMenus(item){
        return item.items && item.items.length > 0 ? true : false;
    }

    menuItemClick(e){
        let currentMenuItem = e.detail.item;

        if (currentMenuItem && !this.isThereChildMenus(currentMenuItem))
            alert("Menu item: " + currentMenuItem.text + " is clicked.");
    }

    // Update ------------------------------------------------------------------------------------

    render() {
        return (
            <div>
                <h2>ContextMenu / Multi-Level</h2>
                <div className="sample-block">
                    <IntegralUIContextMenuComponent
                        customStyle={iuiContextMenuMultiLevelStyle}
                        settings={this.state.menuSettings}
                        theme={this.state.currentTheme}
                        menuClick={(e) => this.menuItemClick(e)}
                    > 
                        <div className="cmnu-multi-level-block" id="menu-block">
                            <span>Right click to open the context menu</span>
                        </div>
                    </IntegralUIContextMenuComponent>
                    <div className="feature-help">
                        <p><span className="initial-space"></span>An example of Context Menu with sub-menus in multiple levels. Clicking on menu item, will show a message box, stating the menu item that was clicked. The message box will appear only if the menu item don't have any child menus.</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default ContextMenuMultiLevel;
