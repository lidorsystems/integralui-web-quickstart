import React, { Component } from 'react';
import { html } from 'integralui-web/external/lit-element.js';

import { IntegralUITheme } from 'integralui-web/components/integralui.enums.js';

import IntegralUIListViewComponent from 'integralui-web/wrappers/react.integralui.listview.js';
import { iuiListViewContextMenuStyle } from './listview-contextmenu.style.js';
import 'integralui-web/components/integralui.contextmenu.js';

class ListViewContexteMenu extends Component {
    constructor(props){
        super(props);

        this.state = {
            ctrlSize: { width: 350, height: 300 },
            currentItemSize: { width: 150, height: 32 },
            currentResourcePath: '../../integralui-web/icons',
            currentSelection: null,
            currentTheme: IntegralUITheme.Office,
            isAnimationAllowed: true,
            items: [
                { id: 1, text: "Favorites" },
                { id: 2, text: "Libraries" },
                { id: 3, text: "Computer" },
                { id: 4, text: "Network" },
                { id: 5, text: "Recycle Bin" }
            ]
        }

        this.itemCount = 0;

        // Context Menu
        this.menuSettings = {
            items: [
                { id: 3, text: "Add Item" },
                { id: 5, text: "Insert Item Before" },
                { id: 6, text: "Insert Item After" },
                { id: 7, type: "separator" },
                { id: 8, text: "Remove Item" }
            ]
        }
    
        this.listRef = React.createRef();
    }

    currentItemTemplate = (item) => { 
        return html`
            <iui-contextmenu
                .customStyle="${iuiListViewContextMenuStyle}"
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

            this.listRef.current.updateLayout();
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

        this.listRef.current.addItem(newItem);
        this.updateContent();
    }

    insertItemAfter(){
        let newItem = this.createNewItem();

        this.listRef.current.insertItemAfter(newItem, this.state.currentSelection);
        this.updateContent();
    }

    insertItemBefore(){
        let newItem = this.createNewItem();

        this.listRef.current.insertItemBefore(newItem, this.state.currentSelection);
        this.updateContent();
    }

    removeItem(){
        let selItem = this.state.currentSelection;
        if (selItem){
            let newSelItem = this.listRef.current.getPrevItem(selItem);
            if (!newSelItem)
                newSelItem = this.listRef.current.getNextItem(selItem);
            
            this.listRef.current.removeItem(selItem);
            this.listRef.current.selectedItem = newSelItem;
            this.updateContent();
        }
    }

    updateContent(){
        this.listRef.current.updateLayout();
    }

    onItemSelectionChanged(e){
        this.setState({ currentSelection: e.detail.item });
    }

    render(){

        return (
            <div>
                <h2>ListView / Items with Context Menu</h2>
                <div className="sample-block">
                    <IntegralUIListViewComponent id="listview-contextmenu" ref={this.listRef}
                        allowAnimation={this.state.isAnimationAllowed}
                        customStyle={iuiListViewContextMenuStyle}
                        items={this.state.items}
                        itemSize={this.state.currentItemSize}
                        itemTemplate={this.currentItemTemplate}
                        resourcePath={this.state.currentResourcePath}
                        size={this.state.ctrlSize}
                        theme={this.state.currentTheme} 
                        selectionChanged={(e) => this.onItemSelectionChanged(e)}
                    ></IntegralUIListViewComponent>
                    <div className="feature-help">
                        <p><span className="initial-space"></span>An example where if you right-click on each item a context menu will popup. Using the context menu you can add or remove items.</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default ListViewContexteMenu;
