import React, { Component } from 'react';

import { IntegralUITheme } from 'integralui-web/components/integralui.enums.js';
import IntegralUITreeViewComponent from 'integralui-web/wrappers/react.integralui.treeview.js';
import 'integralui-web/components/integralui.radiobutton.js';

import './treeview-radiobuttons.css';

class TreeViewRadioButtons extends Component {
    constructor(props){
        super(props);

        this.state = {
            ctrlSize: { width: 350, height: 300 },
            currentResourcePath: '../../integralui-web/icons',
            currentTheme: IntegralUITheme.Office,
            isAnimationAllowed: false,
            items: [
                { 
                    id: 1,
                    text: "Favorites",
                    items: [
                        { id: 11, pid: 1, text: "Desktop", allowRadioButton: true },
                        { id: 12, pid: 1, text: "Downloads", allowRadioButton: true, checked: true }
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
                            allowRadioButton: true,
                            expanded: false,
                            items: [
                                { id: 211, pid: 21, text: "My Documents", allowRadioButton: true, checked: true },
                                { id: 212, pid: 21, text: "Public Documents", allowRadioButton: true }
                            ]
                        },
                        { id: 22, pid: 2, text: "Music", allowRadioButton: true },
                        { id: 23, pid: 2, text: "Pictures", allowRadioButton: true, checked: true },
                        { id: 24, pid: 2, text: "Videos", allowRadioButton: true }
                    ]
                },
                { 
                    id: 3,
                    text: "Computer",
                    checked: true,
                    items: [
                        { id: 31, pid: 3, text: "Local Disk (C:)", allowRadioButton: true },
                        { id: 32, pid: 3, text: "Storage (D:)", allowRadioButton: true, checked: true }
                    ]
                },
                { id: 4, text: "Network" },
                { id: 5, text: "Recycle Bin" }
            ]
        }
    }

    onItemRadioChecked(e){
        console.log(e.detail.item.text + " is now " + e.detail.checked);
    }

    render() {

        return (
            <div>
                <h2>TreeView / Items with Radio Buttons</h2>
                <div className="sample-block">
                    <IntegralUITreeViewComponent id="treeview-radiobuttons"
                        allowAnimation={this.state.isAnimationAllowed}
                        items={this.state.items}
                        resourcePath={this.state.currentResourcePath}
                        size={this.state.ctrlSize}
                        theme={this.state.currentTheme} 
                        checkedChanged={(e) => this.onItemRadioChecked(e)}
                    ></IntegralUITreeViewComponent>
                    <div className="feature-help">
                        <p><span className="initial-space"></span>In this example, some items have a Radio Button shown before their label. Only one radio button is checked per item level that have the same parent.</p>
                        <p><span className="initial-space"></span>Showing radio buttons is optional for each item individually. Once set, all items with radio buttons that have the same parent belong to the same radio group.</p>
                        <p><span className="initial-space"></span>Whenever a radio button is checked, the <span className="code-object">checkedChanged</span> event is fired carrying data: the item object and its checked state.</p>
                        <p><span className="initial-space"></span>You can customize the appearance of radio buttons using custom CSS properties or styles.</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default TreeViewRadioButtons;
