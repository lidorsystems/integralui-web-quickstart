import React, { Component } from 'react';
import { html } from 'integralui-web/external/lit-element.js';
import { classMap } from 'integralui-web/external/class-map';

import IntegralUIButtonComponent from 'integralui-web/wrappers/react.integralui.button.js';
import IntegralUIListComponent from 'integralui-web/wrappers/react.integralui.list.js';
import IntegralUIListBoxComponent from 'integralui-web/wrappers/react.integralui.listbox.js';
import IntegralUISelectComponent from 'integralui-web/wrappers/react.integralui.select.js';
import { IntegralUIComponentAppearance, IntegralUITheme } from 'integralui-web/components/integralui.enums.js';

import './listbox-checkboxes.css';
import { iuiListBoxCheckBoxesStyle } from './listbox-checkboxes.style.js';

class ListBoxCheckBoxes extends Component {

    //
    // Initialization / Destruction --------------------------------------------------------------
    //

    constructor(props){
        super(props);

        this.state = {
            checkedList: [],
            ctrlSize: { height: 395 },
            currentScrollAppearance: IntegralUIComponentAppearance.Dynamic,
            currentResourcePath: '../../integralui-web/icons',
            currentTheme: IntegralUITheme.Office,
            groups: [
                { name: "Books", expanded: false },
                { name: "Electronics" },
                { name: "Music" },
                { name: "Software", expanded: false },
                { name: "Sports" }
            ],
            items: [
                { id: 11, text: "Art", group: "Books"  },
                { id: 12, text: "Economics", group: "Books" },
                { id: 13, text: "Investing", group: "Books", checked: true },
                { id: 14, text: "Management", group: "Books" },
                { id: 15, text: "Small Business", group: "Books" },
                { id: 16, text: "Health", group: "Books", checked: true },
                { id: 17, text: "Literature", group: "Books" },
                { id: 18, text: "Astronomy", group: "Books" },
                { id: 19, text: "Mathematics", group: "Books" },
                { id: 21, text: "Camera", icon: "camera", group: "Electronics", checked: true },
                { id: 22, text: "Cell Phones", group: "Electronics", checked: true },
                { id: 23, text: "Video Game Consoles", group: "Electronics" },
                { id: 31, text: "Blues", group: "Music" },
                { id: 32, text: "Classic Rock", group: "Music", checked: true },
                { id: 33, text: "Pop", group: "Music" },
                { id: 34, text: "Jazz", group: "Music" },
                { id: 41, text: "Games", group: "Software", checkState: 'checked' },
                { id: 42, text: "Operating Systems", group: "Software" },
                { id: 43, text: "Network & Servers", group: "Software" },
                { id: 44, text: "Security", group: "Software" },
                { id: 51, text: "Baseball", group: "Sports" },
                { id: 52, text: "Martial Arts", group: "Sports", checked: true },
                { id: 53, text: "Running", group: "Sports" },
                { id: 54, text: "Tennis", group: "Sports" }
            ],
            listSize: {  width: 375, height: 335 },
            options: [
                { id: 1, text: "Unchecked" },
                { id: 3, text: "Checked" }
            ]
        }

        this.state.selectedOption = this.state.options[1];

        this.listRef = React.createRef();
    }

    componentDidMount(){
        this.showCheckList();
    }
    
    // Templates ---------------------------------------------------------------------------------

    currentItemTemplate = (item) => { 
        if (item.type === 'group')
            return html`
                <div>
                    <span class="lbox-ovw-name">${item.name}</span>
                </div>
            `;
        else
            return html`
                <div>
                    <span class=${classMap(this.getCheckBoxClass(item))} @mousedown="${(e) => this.checkItem(e, item)}"></span>
                    <span class="lbox-cbox-item-label">${item.text}</span>
                </div>
            `;
    };

    // Item Template Content -----------------------------------------------------------------

    getCheckBoxClass(item){
        let cbClass = { 'lbox-item-cbox': true };

        if (item.checked)
            cbClass['lbox-item-cbox-checked'] = true;

        return cbClass;
    }

    checkItem(e, item){
        if (e.which === 1 && item){
            item.checked = item.checked !== undefined ? !item.checked : true;
            this.listRef.current.refresh();
        }

        e.stopPropagation();
    }

    // Check List ----------------------------------------------------------------------------

    showCheckList(){
        let currentList = [];

        let currentOption = this.state.selectedOption ? this.state.selectedOption.text : '';

        this.state.items.forEach(item => {
            if (currentOption === 'Checked' && item.checked === true)
                currentList.push({ text: item.text });
            else if (currentOption === 'Unchecked' && item.checked !== true)
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
                <h2>ListBox / CheckBoxes</h2>
                <div className="sample-block-listbox-checkboxes">
                    <div className="ctrl-block">
                        <IntegralUIListBoxComponent id="listbox-checkboxes" ref={this.listRef}
                            customStyle={iuiListBoxCheckBoxesStyle}
                            items={this.state.items}
                            itemTemplate={this.currentItemTemplate}
                            resourcePath={this.state.currentResourcePath}
                            scrollAppearance={this.state.currentScrollAppearance}
                            size={this.state.ctrlSize}
                            theme={this.state.currentTheme} 
                        ></IntegralUIListBoxComponent>
                    </div>
                    <div className="sample-panel-listbox-checkboxes">
                        <label>List of items depending on their check state: </label><br />
                        <label style={{ display: 'inline-block', margin: '20px 3px 0 5px', verticalAlign: 'top' }}>State: </label>
                        <IntegralUISelectComponent items={this.state.options} maxDropDownItems="3" selectedItem={this.state.selectedOption} theme={this.state.currentTheme} afterSelect={(e) => this.onDropDownItemSelected(e)}></IntegralUISelectComponent>
                        <IntegralUIButtonComponent theme={this.state.currentTheme} onClick={() => this.showCheckList()}>Show</IntegralUIButtonComponent><br />
                        <IntegralUIListComponent id="simple-list" items={this.state.checkedList} theme={this.state.currentTheme} size={this.state.listSize}></IntegralUIListComponent>
                        <br style={{ clear: 'both' }} />
                    </div>
                </div>
                <div className="feature-help">
                    <p><span className="initial-space"></span>In this example each ListBox item has a check box, shown before its label. Check boxes are added to the ListBox using the &lt;span&gt; element with custom check box image as background.</p>
                    <p><span className="initial-space"></span>The demo simulates cascading changes to the checkbox. Whenever item's check box value changes, all parent and child items updates their check box value.</p>
                    <p><span className="initial-space"></span>In addition, from DropDown on the right, you can select which items are displayed in the right list: unchecked, indeterminated or checked.</p>
                    <p><span className="initial-space"></span>This example also shows dynamic scrolling, the scroll bar will appear only when mouse hovers over ListBox space.</p>
                </div>
            </div>
        );
    }
}

export default ListBoxCheckBoxes;
