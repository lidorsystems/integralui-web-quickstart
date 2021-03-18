import React, { Component } from 'react';
import { html } from 'integralui-web/external/lit-element.js';
import { classMap } from 'integralui-web/external/class-map.js';

import IntegralUIButtonComponent from 'integralui-web/wrappers/react.integralui.button.js';
import IntegralUIListComponent from 'integralui-web/wrappers/react.integralui.list.js';
import IntegralUISelectComponent from 'integralui-web/wrappers/react.integralui.select.js';
import IntegralUITreeViewComponent from 'integralui-web/wrappers/react.integralui.treeview.js';
import { IntegralUIItemDisplayMode, IntegralUITheme } from 'integralui-web/components/integralui.enums.js';

import './treeview-checkboxes.css';
import { iuiTreeViewCheckBoxesStyle } from './treeview-checkboxes.style.js';

class TreeViewCheckBoxes extends Component {

    //
    // Initialization / Destruction --------------------------------------------------------------
    //

    constructor(props){
        super(props);

        this.state = {
            checkedList: [],
            ctrlSize: { height: 395 },
            currentResourcePath: '../../integralui-web/icons',
            currentTheme: IntegralUITheme.Office,
            displayMode: IntegralUIItemDisplayMode.Full,
            isAnimationAllowed: true,
            isDragAllowed: true,
            items: [
                { 
                    id: 1,
                    text: "Books",
                    icon: "library",
                    items: [
                        { id: 11, pid: 1, text: "Art"  },
                        { 
                            id: 12,
                            pid: 1,
                            text: "Business",
                            icon: "people",
                            items: [
                                { id: 121, pid: 12, text: "Economics" },
                                { 
                                    id: 122,
                                    pid: 12,
                                    checkState: 'checked',
                                    text: "Investing", 
                                    expanded: false,
                                    icon: "economics",
                                    items: [
                                        { id: 1221, pid: 122, text: "Bonds", checkState: 'checked' },
                                        { id: 1222, pid: 122, text: "Options", checkState: 'checked' },
                                        { id: 1223, pid: 122, text: "Stocks", checkState: 'checked' }
                                    ]
                                },
                                { id: 123, pid: 12, text: "Management" },
                                { id: 124, pid: 12, text: "Small Business" }
                            ]
                        },
                        { id: 13, pid: 1, text: "Health", icon: "heart", checkState: 'checked' },
                        { id: 14, pid: 1, text: "Literature" },
                        { 
                            id: 15,
                            pid: 1,
                            text: "Science",
                            expanded: false,
                            items: [
                                { id: 151, pid: 15, text: "Astronomy" },
                                { id: 152, pid: 15, text: "Mathematics" },
                                { id: 153, pid: 15, text: "Evolution" },
                                { id: 154, pid: 15, text: "Nature" }
                            ]
                        }
                    ]
                },
                { id: 2, text: "Computers" },
                {
                    id: 3,
                    checkState: 'checked',
                    text: "Electronics",
                    items: [
                        { id: 31, pid: 3, text: "Camera", icon: "camera", checkState: 'checked' },
                        { id: 32, pid: 3, text: "Cell Phones", checkState: 'checked' },
                        { id: 33, pid: 3, text: "Video Game Consoles", checkState: 'checked' }
                    ]
                },
                { 
                    id: 4,
                    text: "Music", 
                    expanded: false,
                    icon: "album",
                    items: [
                        { id: 41, pid: 4, text: "Blues" },
                        { id: 42, pid: 4, text: "Classic Rock" },
                        { id: 43, pid: 4, text: "Pop" },
                        { id: 44, pid: 4, text: "Jazz" }
                    ]
                },
                { 
                    id: 5,
                    text: "Software",
                    icon: "software",
                    items: [
                        { id: 51, pid: 5, text: "Games", checkState: 'checked' },
                        { id: 52, pid: 5, text: "Operating Systems" },
                        { id: 53, pid: 5, text: "Network & Servers" },
                        { id: 54, pid: 5, text: "Security" }
                    ]
                },
                { 
                    id: 6,
                    text: "Sports",
                    expanded: false,
                    icon: "sports",
                    items: [
                        { id: 61, pid: 6, text: "Baseball" },
                        { id: 62, pid: 6, text: "Martial Arts", checkState: 'checked' },
                        { id: 63, pid: 6, text: "Running" },
                        { 
                            id: 64,
                            pid: 6,
                            text: "Tennis",
                            expanded: false,
                            items: [
                                { id: 641, pid: 64, text: "Accessories" },
                                { id: 642, pid: 64, text: "Balls" },
                                { id: 643, pid: 64, text: "Racquets" }
                            ]
                        }
                    ]
                },
                { id: 7, text: "Video Games" },
                { id: 8, text: "Watches", icon: "clock" }
            ],
            listSize: {  width: 375, height: 335 },
            options: [
                { id: 1, text: "Unchecked" },
                { id: 2, text: "Indeterminate" },
                { id: 3, text: "Checked" }
            ]
        }

        this.state.selectedOption = this.state.options[2];

        this.treeRef = React.createRef();
    }

    componentDidMount(){
        this.treeRef.current.updateFullList();

        let list = this.treeRef.current.getFullList();
        list.forEach(item => this.updateParentItemCheckValue(item));

        this.showCheckList();
    }

    //
    // Methods -----------------------------------------------------------------------------------
    //

    // General -----------------------------------------------------------------------------------

    //
    // Currently when using templates, the LitElement binding syntax is required
    // for properties, methods and events
    //
    currentItemTemplate = (item) => { 
        return html`
            <div>
                <span class=${classMap(this.getCheckBoxClass(item))} @mousedown="${(e) => this.checkItem(e, item)}"></span>
                ${item.icon ? html`<span class="trw-cbox-icons-medium ${item.icon}"></span>` : ``}
                <span class="trw-cbox-item-label">${item.text}</span>
            </div>
        `;
    };
        
    // Item Template Content -----------------------------------------------------------------

    getCheckBoxClass(item){
        let cbClass = { 'trw-item-cbox': true };

        switch (item.checkState){
            case 'indeterminate':
                cbClass['trw-item-cbox-indeterminate'] = true;
                break;

            case 'checked':
                cbClass['trw-item-cbox-checked'] = true;
                break;

            default:
                break;
        }

        return cbClass;
    }

    getItemIcon(item){
        return item.icon ? item.icon : 'trw-cbox-icons-empty';
    }

    checkItem(e, item){
        if (item){
            let checkValue = this.getItemCheckValue(item);
            switch (checkValue){
                case 'unchecked':
                    checkValue = 'checked';
                    break;

                case 'indeterminate':
                    checkValue = 'checked';
                    break;

                default:
                    checkValue = 'unchecked';
                    break;
            }

            this.updateCheckValue(item, checkValue);

            this.updateChildItemCheckValue(item);
            this.updateParentItemCheckValue(item);

            this.treeRef.current.refresh();
        }

        e.stopPropagation();
    }

    getItemCheckValue(item){
        if (item)
            return item.checkState === undefined ? 'unchecked' : item.checkState;

        return 'unchecked';
    }

    updateCheckValue(item, value){
        if (item){
            switch (value){
                case 'checked':
                    item.checkState = 'checked';
                    break;

                case 'indeterminate':
                    item.checkState = 'indeterminate';
                    break;

                default:
                    item.checkState = 'unchecked';
                    break;
            }
        }
    }

    // Cascading Changes to CheckBoxes -------------------------------------------------------

    // Update the checkbox of parent items
    updateParentItemCheckValue(item){
        let parent = this.treeRef.current.getItemParent(item);
        while (parent){
            let list = parent.items;

            if (list){
                let checkCount = 0;
                let indeterminateCount = 0;
                for (let i = 0; i < list.length; i++){
                    let checkValue = this.getItemCheckValue(list[i]);
                    if (checkValue === 'checked')
                        checkCount++;
                    else if (checkValue === 'indeterminate')
                        indeterminateCount++;
                }
                
                let parentCheckValue = 'unchecked';
                if (checkCount === list.length)
                    parentCheckValue = 'checked';
                else if (checkCount > 0 || indeterminateCount > 0)
                    parentCheckValue = 'indeterminate';

                this.updateCheckValue(parent, parentCheckValue);
            }   
            
            parent = this.treeRef.current.getItemParent(parent);
        }
    }
    
    // Update the checkbox of child items
    updateChildItemCheckValue(parent){
        if (parent && parent.items){
            for (let i = 0; i < parent.items.length; i++){
                let checkValue = this.getItemCheckValue(parent);
                if (checkValue === 'checked')
                    this.updateCheckValue(parent.items[i], 'checked');
                else
                    this.updateCheckValue(parent.items[i], 'unchecked');

                this.updateChildItemCheckValue(parent.items[i]);
            }
        }
    }

    // Check List ----------------------------------------------------------------------------

    showCheckList(){
        let currentList = [];

        let currentOption = this.state.selectedOption ? this.state.selectedOption.text.toLowerCase() : '';

        let list = this.treeRef.current.getFullList();
        list.forEach(item => {
            let checkValue = this.getItemCheckValue(item);
            if (checkValue === currentOption)
                currentList.push({ text: item.text });
        });

        this.setState({ checkedList: currentList });
    }

    onDropDownItemSelected(e){
        this.setState({ selectedOption: e.detail.item });
    } 

    // Update ------------------------------------------------------------------------------------

    render() {
        return (
            <div>
                <h2>TreeView / CheckBoxes</h2>
                <div className="sample-block">
                    <div className="tree-block">
                        <IntegralUITreeViewComponent id="treeview-checkboxes" ref={this.treeRef}
                            allowAnimation={this.state.isAnimationAllowed}
                            customStyle={iuiTreeViewCheckBoxesStyle}
                            itemDisplay={this.state.displayMode}
                            items={this.state.items}
                            itemTemplate={this.currentItemTemplate}
                            resourcePath={this.state.currentResourcePath}
                            size={this.state.ctrlSize}
                            theme={this.state.currentTheme} 
                            > 
                        </IntegralUITreeViewComponent>
                    </div>
                    <div className="sample-panel-treeview-checkboxes">
                        <label>List of items depending on their check state: </label><br />
                        <label style={{ display: 'inline-block', margin: '20px 3px 0 5px', verticalAlign: 'top' }}>State: </label>
                        <IntegralUISelectComponent allowAnimation={this.state.isAnimationAllowed} items={this.state.options} maxDropDownItems="3" selectedItem={this.state.selectedOption} theme={this.state.currentTheme} afterSelect={(e) => this.onDropDownItemSelected(e)}></IntegralUISelectComponent>
                        <IntegralUIButtonComponent theme={this.state.currentTheme} onClick={() => this.showCheckList()}>Show</IntegralUIButtonComponent><br />
                        <IntegralUIListComponent id="simple-list" items={this.state.checkedList} theme={this.state.currentTheme} size={this.state.listSize}></IntegralUIListComponent>
                        <br style={{ clear: 'both' }} />
                    </div>
                </div>
                <div className="feature-help">
                    <p><span className="initial-space"></span>In this example each TreeView item has a check box, shown before its label. Check boxes are added to the TreeView using the &lt;span&gt; element with custom check box image as background.</p>
                    <p><span className="initial-space"></span>The demo simulates cascading changes to the checkbox. Whenever item's check box value changes, all parent and child items updates their check box value.</p>
                    <p><span className="initial-space"></span>In addition, from DropDown on the right, you can select which items are displayed in the right list: unchecked, indeterminated or checked.</p>
                </div>
            </div>
        );
    }
}

export default TreeViewCheckBoxes;
