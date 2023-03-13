import React, { Component } from 'react';

import { IntegralUISelectionMode, IntegralUITheme } from 'integralui-web/components/integralui.enums.js';

import IntegralUIListComponent from 'integralui-web/wrappers/react.integralui.list.js';
import IntegralUIRadioButtonComponent from 'integralui-web/wrappers/react.integralui.radiobutton.js';
import IntegralUIRadioGroupComponent from 'integralui-web/wrappers/react.integralui.radiogroup.js';
import IntegralUIListBoxComponent from 'integralui-web/wrappers/react.integralui.listbox.js';

import './listbox-multi-select.css';

class ListBoxMultiSelect extends Component {
    constructor(props){
        super(props);

        this.state = {
            ctrlSize: { height: 300 },
            currentResourcePath: '../../integralui-web/icons',
            currentSelectionMode: IntegralUISelectionMode.MultiExtended,
            currentTheme: IntegralUITheme.Office,
            groups: [
                { name: "Dairy" },
                { name: "Fruits", expanded: false },
                { name: "Grains" },
                { name: "Meat" },
                { name: "Sweets", expanded: false },
                { name: "Vegetables" }
            ],
            isAnimationAllowed: true,
            items: [
                { id: 11, text: "Milk", group: "Dairy" },
                { id: 12, text: "Butter", group: "Dairy" },
                { id: 13, text: "Cheese", group: "Dairy" },
                { id: 14, text: "Yogurt", group: "Dairy" },
                { id: 211, text: "BlackBerries", group: "Fruits" },
                { id: 212, text: "CranBerries", group: "Fruits" },
                { id: 213, text: "StrawBerries", group: "Fruits" },
                { id: 241, text: "Oranges", group: "Fruits" },
                { id: 242, text: "Lemons", group: "Fruits" },
                { id: 261, text: "Avocados", group: "Fruits" },
                { id: 262, text: "Bananas", group: "Fruits" },
                { id: 263, text: "Dates", group: "Fruits" },
                { id: 31, text: "Barley", group: "Grains" },
                { id: 32, text: "Farro", group: "Grains" },
                { id: 33, text: "Millet", group: "Grains" },
                { id: 34, text: "Rice", group: "Grains" },
                { id: 41, text: "Beef", group: "Meat" },
                { id: 42, text: "Chicken", group: "Meat" },
                { id: 43, text: "Turkey", group: "Meat" },
                { id: 44, text: "Pork", group: "Meat" },
                { id: 45, text: "Lamb", group: "Meat" },
                { id: 51, text: "Biscuits", group: "Sweets" },
                { id: 52, text: "Cakes", group: "Sweets" },
                { id: 53, text: "Candies", group: "Sweets" },
                { id: 54, text: "Muffins", group: "Sweets" },
                { id: 55, text: "Pastries", group: "Sweets" },
                { id: 61, text: "Asparagus", group: "Vegetables" },
                { id: 62, text: "Broccoli", group: "Vegetables" },
                { id: 63, text: "Carrots", group: "Vegetables" },
                { id: 64, text: "Corn", group: "Vegetables" },
                { id: 65, text: "Lettuce", group: "Vegetables" },
                { id: 66, text: "Onions", group: "Vegetables" },
                { id: 67, text: "Pumpkin", group: "Vegetables" },
                { id: 68, text: "Tomatoes", group: "Vegetables" },
                { id: 69, text: "Zucchini", group: "Vegetables" }
            ],
            listSize: { height: 300 },
            selItems: []
        }

        this.listRef = React.createRef();
    }

    onMultiSelectChecked(e){
        let selMode = IntegralUISelectionMode.One;

        switch (e.detail.index){
            case 1: 
                selMode = IntegralUISelectionMode.One;
                break;

            case 2: 
                selMode = IntegralUISelectionMode.MultiSimple;
                break;

            case 3: 
                selMode = IntegralUISelectionMode.MultiExtended;
                break;

            default: 
                selMode = IntegralUISelectionMode.None;
                break;
        }

        this.setState({ currentSelectionMode: selMode });
    }

    // Change the list on selection
    onSelectionChanged(e){
        let list = this.listRef.current.getList('selected');
        this.setState({ selItems: list.map(item => { return { id: item.id, text: item.text } }) });
    }

    render(){

        return (
            <div>
                <h2>ListBox / Select Multiple Items</h2>
                <div className="sample-block">
                    <IntegralUIListBoxComponent id="listbox-multiselect" ref={this.listRef}
                        allowAnimation={this.state.isAnimationAllowed}
                        groups={this.state.groups}
                        items={this.state.items}
                        resourcePath={this.state.currentResourcePath}
                        selectionMode={this.state.currentSelectionMode}
                        size={this.state.ctrlSize}
                        showGroups={true}
                        theme={this.state.currentTheme} 
                        selectionChanged={(e) => this.onSelectionChanged(e)}
                    ></IntegralUIListBoxComponent>
                    <div className="listbox-multiselect-panel">
                        <label>Selection Mode: </label>
                        <IntegralUIRadioGroupComponent theme={this.state.currentTheme} buttonChecked={(e) => this.onMultiSelectChecked(e)}>
                            <IntegralUIRadioButtonComponent>None</IntegralUIRadioButtonComponent>
                            <IntegralUIRadioButtonComponent checked={true}>One</IntegralUIRadioButtonComponent>
                            <IntegralUIRadioButtonComponent>MultiSimple</IntegralUIRadioButtonComponent>
                            <IntegralUIRadioButtonComponent>MultiExtended</IntegralUIRadioButtonComponent>
                        </IntegralUIRadioGroupComponent>
                    </div>
                    <IntegralUIListComponent id="list-multiselect" allowFocus={false} items={this.state.selItems} size={this.state.listSize} theme={this.state.currentTheme}></IntegralUIListComponent>
                    <div className="feature-help">
                        <p><span className="initial-space"></span>A demonstration of different selection types available in ListBox component. By selecting an option from <strong>Select</strong> component above, you can change the current selected mode. There are four acceptable values:</p>
                        <ul className="feature-points">
                            <li><span className="code-object">None</span> - selection is disabled</li>
                            <li><span className="code-object">One</span> - Only one item is selectable</li>
                            <li><span className="code-object">MultiSimple</span> - Multiple items are selectable using mouse clicks without CTRL key</li>
                            <li><span className="code-object">MultiExtended</span> - Multiple items are selectabl using mouse clicks with CTRL and SHIFT key</li>
                        </ul>
                        <p><span className="initial-space"></span>In multi-selection mode, items can become selected using the CTRL key or SHIFT key. The <strong>MultiExtended</strong> mode allows selection of multiple items in wide range. While SHIFT key is pressed, all items from first to last clicked item will become selected.</p>
                        <p><span className="initial-space"></span>List on the right, shows which items are currently selected. To retrieve this list, you can use the <span className="code-object">getList</span> method with key value <strong>'selected'</strong>.</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default ListBoxMultiSelect;
