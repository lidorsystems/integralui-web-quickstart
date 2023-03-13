import React, { Component } from 'react';

import { IntegralUISelectionMode, IntegralUITheme } from 'integralui-web/components/integralui.enums.js';

import IntegralUIListComponent from 'integralui-web/wrappers/react.integralui.list.js';
import IntegralUIRadioButtonComponent from 'integralui-web/wrappers/react.integralui.radiobutton.js';
import IntegralUIRadioGroupComponent from 'integralui-web/wrappers/react.integralui.radiogroup.js';
import IntegralUIListViewComponent from 'integralui-web/wrappers/react.integralui.listview.js';

import './listview-multi-select.css';

class ListViewMultiSelect extends Component {
    constructor(props){
        super(props);

        this.state = {
            ctrlSize: { height: 300 },
            currentResourcePath: '../../integralui-web/icons',
            currentSelectionMode: IntegralUISelectionMode.MultiExtended,
            currentTheme: IntegralUITheme.Office,
            isAnimationAllowed: true,
            items: [
                { id: 11, text: "Milk" },
                { id: 12, text: "Butter" },
                { id: 13, text: "Cheese" },
                { id: 14, text: "Yogurt" },
                { id: 211, text: "BlackBerries" },
                { id: 212, text: "CranBerries" },
                { id: 213, text: "StrawBerries" },
                { id: 241, text: "Oranges" },
                { id: 242, text: "Lemons" },
                { id: 261, text: "Avocados" },
                { id: 262, text: "Bananas" },
                { id: 263, text: "Dates" },
                { id: 31, text: "Barley" },
                { id: 32, text: "Farro" },
                { id: 33, text: "Millet" },
                { id: 34, text: "Rice" },
                { id: 41, text: "Beef" },
                { id: 42, text: "Chicken" },
                { id: 43, text: "Turkey" },
                { id: 44, text: "Pork" },
                { id: 45, text: "Lamb" },
                { id: 51, text: "Biscuits" },
                { id: 52, text: "Cakes" },
                { id: 53, text: "Candies" },
                { id: 54, text: "Muffins" },
                { id: 55, text: "Pastries" },
                { id: 61, text: "Asparagus" },
                { id: 62, text: "Broccoli" },
                { id: 63, text: "Carrots" },
                { id: 64, text: "Corn" },
                { id: 65, text: "Lettuce" },
                { id: 66, text: "Onions" },
                { id: 67, text: "Pumpkin" },
                { id: 68, text: "Tomatoes" },
                { id: 69, text: "Zucchini" }
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
                <h2>ListView / Select Multiple Items</h2>
                <div className="sample-block">
                    <IntegralUIListViewComponent id="listview-multiselect" ref={this.listRef}
                        allowAnimation={this.state.isAnimationAllowed}
                        items={this.state.items}
                        resourcePath={this.state.currentResourcePath}
                        selectionMode={this.state.currentSelectionMode}
                        size={this.state.ctrlSize}
                        theme={this.state.currentTheme} 
                        selectionChanged={(e) => this.onSelectionChanged(e)}
                    ></IntegralUIListViewComponent>
                    <div className="listview-multiselect-panel">
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
                        <p><span className="initial-space"></span>A demonstration of different selection types available in ListView component. By selecting an option from <strong>Select</strong> component above, you can change the current selected mode. There are four acceptable values:</p>
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

export default ListViewMultiSelect;
