import React, { Component } from 'react';

import { IntegralUIComponentAppearance, IntegralUITheme } from 'integralui-web/components/integralui.enums.js';

import IntegralUIRadioButtonComponent from 'integralui-web/wrappers/react.integralui.radiobutton.js';
import IntegralUIRadioGroupComponent from 'integralui-web/wrappers/react.integralui.radiogroup.js';
import IntegralUISelectComponent from 'integralui-web/wrappers/react.integralui.select.js';
import IntegralUITreeViewComponent from 'integralui-web/wrappers/react.integralui.treeview.js';

import './treeview-scroll-to.css';

class TreeViewScrollTo extends Component {
    constructor(props){
        super(props);

        this.state = {
            ctrlSize: { width: 350, height: 300 },
            currentScrollAppearance: IntegralUIComponentAppearance.Static,
            currentResourcePath: '../../../integralui-web/icons',
            currentSelection: null,
            currentTheme: IntegralUITheme.Office,
            itemList: [],
            items: [
                { 
                    id: 1,
                    text: "Favorites",
                    items: [
                        { id: 11, pid: 1, text: "Desktop" },
                        { id: 12, pid: 1, text: "Downloads", checkState: "Checked" }
                    ]
                },
                { 
                    id: 2,
                    text: "Libraries",
                    items: [
                        { 
                            id: 21, 
                            pid: 2, 
                            text: "Documents", 
                            expanded: false,
                            checkState: "Checked",
                            items: [
                                { id: 211, pid: 21, text: "My Documents", checkState: "Checked" },
                                { id: 212, pid: 21, text: "Public Documents", checkState: "Checked" }
                            ]
                        },
                        { id: 22, pid: 2, text: "Music" },
                        { id: 23, pid: 2, text: "Pictures", checkState: "Checked" },
                        { id: 24, pid: 2, text: "Videos" }
                    ]
                },
                { 
                    id: 3,
                    text: "Computer",
                    checkState: "Checked",
                    items: [
                        { id: 31, pid: 3, text: "Local Disk (C:)", checkState: "Checked" },
                        { id: 32, pid: 3, text: "Storage (D:)", checkState: "Checked" }
                    ]
                },
                { id: 4, text: "Network" },
                { id: 5, text: "Recycle Bin" }
            ]
        }

        this.treeRef = React.createRef();
    }

    // Events ------------------------------------------------------------------------------------

    scrollToChanged(e){
        let item = e.detail.item;

        this.treeRef.current.scrollTo(item);
        this.setState({ currentSelection: item });
    }

    onItemSelectionChanged(e){
        this.setState({ currentSelection: e.detail.item });
    }

    onScrollAppearanceChecked(e){
        switch (e.detail.index){
            case 1: 
                this.setState({ currentScrollAppearance: IntegralUIComponentAppearance.Dynamic });
                break;

            default: 
                this.setState({ currentScrollAppearance: IntegralUIComponentAppearance.Static });
                break;
        }
    }

    // Update the item list to Select component
    onUpdateComplete(){
        if (this.treeRef && this.treeRef.current)
            this.setState({ itemList: this.treeRef.current.getFullList() });
    }
    
    // Update ------------------------------------------------------------------------------------

    render() {

        return (
            <div>
                <h2>TreeView / Scroll To Specific Item</h2>
                <div className="sample-block">
                    <IntegralUITreeViewComponent id="treeview-scrollto" ref={this.treeRef}
                        items={this.state.items}
                        resourcePath={this.state.currentResourcePath}
                        scrollAppearance={this.state.currentScrollAppearance}
                        selectedItem={this.state.currentSelection}
                        size={this.state.ctrlSize}
                        theme={this.state.currentTheme}
                        selectionChanged={(e) => this.onItemSelectionChanged(e)}
                        updateComplete={() => this.onUpdateComplete()}
                    ></IntegralUITreeViewComponent>
                    <div className="treeview-scrollto-panel">
                        <label>Scroll to: </label>
                        <IntegralUISelectComponent allowAnimation={true} items={this.state.itemList} resourcePath={this.state.currentResourcePath} theme={this.state.currentTheme} selectedIndexChanged={(e) => this.scrollToChanged(e)}></IntegralUISelectComponent>
                        <br/>
                        <label>Scroll Appearance: </label>
                        <IntegralUIRadioGroupComponent theme={this.state.currentTheme} buttonChecked={(e) => this.onScrollAppearanceChecked(e)}>
                            <IntegralUIRadioButtonComponent checked={true}>Static</IntegralUIRadioButtonComponent>
                            <IntegralUIRadioButtonComponent>Dynamic</IntegralUIRadioButtonComponent>
                        </IntegralUIRadioGroupComponent>
                    </div>
                    <div className="feature-help">
                        <p><span className="initial-space"></span>In this example, there are multiple items and you can select the item that you want to appear in view by scrolling to it.</p>
                        <p><span className="initial-space"></span>You can also choose how scroll bar appears, there are two options: Static and Dynamic. With Static appearance, the scroll bar is always visible when there are more items than currently present in the view. On the other hand, with Dynamic appearance, the scroll bar will appear only when mouse hovers over TreeView space.</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default TreeViewScrollTo;
