import React, { Component } from 'react';
import { html } from 'integralui-web/external/lit-element.js';

import { IntegralUITheme } from 'integralui-web/components/integralui.enums.js';

import IntegralUITreeViewComponent from 'integralui-web/wrappers/react.integralui.treeview.js';
import { iuiTreeViewContextMenuStyle } from './treeview-contextmenu.style.js';
import 'integralui-web/components/integralui.contextmenu.js';

import './treeview-contextmenu.css';

class TreeViewContexteMenu extends Component {
    constructor(props){
        super(props);

        this.state = {
            ctrlSize: { width: 350, height: 300 },
            currentResourcePath: '../../integralui-web/icons',
            currentSelection: null,
            currentTheme: IntegralUITheme.Office,
            isAnimationAllowed: true,
            items: [
                { 
                    id: 1,
                    text: "Favorites",
                    items: [
                        { id: 11, pid: 1, text: "Desktop" },
                        { id: 12, pid: 1, text: "Downloads"}
                    ]
                },
                { 
                    id: 2,
                    text: "Libraries",
                    expanded: false,
                    items: [
                        { 
                            id: 21, 
                            pid: 2, 
                            text: "Documents", 
                            expanded: false,
                            items: [
                                { id: 211, pid: 21, text: "My Documents"},
                                { id: 212, pid: 21, text: "Public Documents"}
                            ]
                        },
                        { id: 22, pid: 2, text: "Music" },
                        { id: 23, pid: 2, text: "Pictures"},
                        { id: 24, pid: 2, text: "Videos" }
                    ]
                },
                { 
                    id: 3,
                    text: "Computer",
                    items: [
                        { id: 31, pid: 3, text: "Local Disk (C:)"},
                        { id: 32, pid: 3, text: "Storage (D:)"}
                    ]
                },
                { id: 4, text: "Network" },
                { id: 5, text: "Recycle Bin" }
            ]
        }

        this.itemCount = 0;

        // Context Menu
        this.menuSettings = {
            items: [
                { id: 3, text: "Add Item" },
                { id: 4, text: "Add Child Item" },
                { id: 5, text: "Insert Item Before" },
                { id: 6, text: "Insert Item After" },
                { id: 7, type: "separator" },
                { id: 8, text: "Remove Item" }
            ]
        }
    
        this.treeRef = React.createRef();
    }

    currentItemTemplate = (item) => { 
        return html`
            <iui-contextmenu
                .customStyle="${iuiTreeViewContextMenuStyle}"
                .enabled="${true}"
                .settings="${this.menuSettings}"
                .theme="${this.state.currentTheme}"
                @menuClick="${(e) => this.onMenuClick(e)}"
            >
                <div>
                    <span>${item.text}</span>
                </div>
            </iui-contextmenu>
        `;
    }
    
    // ContextMenu -------------------------------------------------------------------------------

    onMenuClick(e){
        if (e.detail.item){
            // Action depends on selected menu option
            switch (e.detail.item.id){
                case 3:
                    this.addItem();
                    break;

                case 4:
                    this.addChildItem();
                    break;

                case 5:
                    this.insertItemBefore();
                    break;

                case 6:
                    this.insertItemAfter();
                    break;

                case 8:
                    this.removeItem();
                    break;

                // no default
            }

            this.treeRef.current.updateLayout();
        }
    }

    // Add/Remove methods
    createNewItem(){
        this.itemCount++;

        // Create a new item object
        return { id: this.itemCount, text: "Item " + this.itemCount }
    }

    addItem(){
        let newItem = this.createNewItem();

        this.treeRef.current.addItem(newItem);
        this.updateContent();
    }

    addChildItem(){
        let newItem = this.createNewItem();

        this.treeRef.current.addItem(newItem, this.state.currentSelection);
        this.updateContent();
    }

    insertItemAfter(){
        let newItem = this.createNewItem();

        this.treeRef.current.insertItemAfter(newItem, this.state.currentSelection);
        this.updateContent();
    }

    insertItemBefore(){
        let newItem = this.createNewItem();

        this.treeRef.current.insertItemBefore(newItem, this.state.currentSelection);
        this.updateContent();
    }

    removeItem(){
        let selItem = this.state.currentSelection;
        if (selItem){
            this.treeRef.current.removeItem(selItem);
            this.updateContent();
        }
    }

    updateContent(){
        this.treeRef.current.updateLayout();
    }

    onItemSelectionChanged(e){
        this.setState({ currentSelection: e.detail.item });
    }

    render(){

        return (
            <div>
                <h2>TreeView / Items with Context Menu</h2>
                <div className="sample-block">
                    <IntegralUITreeViewComponent id="treeview-contextmenu" ref={this.treeRef}
                        allowAnimation={this.state.isAnimationAllowed}
                        customStyle={iuiTreeViewContextMenuStyle}
                        items={this.state.items}
                        itemTemplate={this.currentItemTemplate}
                        resourcePath={this.state.currentResourcePath}
                        size={this.state.ctrlSize}
                        theme={this.state.currentTheme} 
                        selectionChanged={(e) => this.onItemSelectionChanged(e)}
                    ></IntegralUITreeViewComponent>
                    <div className="feature-help">
                        <p><span className="initial-space"></span>An example where if you right-click on each item a context menu will popup. Using the context menu you can add or remove items.</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default TreeViewContexteMenu;
