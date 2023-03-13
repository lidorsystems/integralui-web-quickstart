import React, { Component } from 'react';

import { IntegralUISelectionMode, IntegralUITheme } from 'integralui-web/components/integralui.enums.js';

import IntegralUIListComponent from 'integralui-web/wrappers/react.integralui.list.js';
import IntegralUIRadioButtonComponent from 'integralui-web/wrappers/react.integralui.radiobutton.js';
import IntegralUIRadioGroupComponent from 'integralui-web/wrappers/react.integralui.radiogroup.js';
import IntegralUITreeViewComponent from 'integralui-web/wrappers/react.integralui.treeview.js';

import './treeview-multi-select.css';

class TreeViewMultiSelect extends Component {
    constructor(props){
        super(props);

        this.state = {
            ctrlSize: { height: 300 },
            currentResourcePath: '../../integralui-web/icons',
            currentSelectionMode: IntegralUISelectionMode.MultiExtended,
            currentTheme: IntegralUITheme.Office,
            isAnimationAllowed: true,
            items: [],
            listSize: { height: 300 },
            selItems: []
        }

        this.treeRef = React.createRef();
    }

    componentDidMount(){
        let flatData = [
            { id: 1, text: "Dairy", expanded: false },
            { id: 11, pid: 1, text: "Milk" },
            { id: 12, pid: 1, text: "Butter" },
            { id: 13, pid: 1, text: "Cheese" },
            { id: 14, pid: 1, text: "Yogurt" },
            { id: 2, text: "Fruits" },
            { id: 21, pid: 2, text: "Berries", expanded:  false},
            { id: 211, pid: 21, text: "BlackBerries" },
            { id: 212, pid: 21, text: "CranBerries" },
            { id: 213, pid: 21, text: "StrawBerries" },
            { id: 22, pid: 2, text: "Pits" },
            { id: 23, pid: 2, text: "Core" },
            { id: 24, pid: 2, text: "Citrus Fruits" },
            { id: 241, pid: 24, text: "Oranges" },
            { id: 242, pid: 24, text: "Lemons" },
            { id: 25, pid: 2, text: "Melons" },
            { id: 26, pid: 2, text: "Tropical Fruits", expanded: false },
            { id: 261, pid: 26, text: "Avocados" },
            { id: 262, pid: 26, text: "Bananas" },
            { id: 263, pid: 26, text: "Dates" },
            { id: 3, text: "Grains" },
            { id: 4, text: "Meat" },
            { id: 41, pid: 4, text: "Beef" },
            { id: 42, pid: 4, text: "Lamb", expanded: false },
            { id: 421, pid: 42, text: "Lamb Breast" },
            { id: 422, pid: 42, text: "Lamb Leg" },
            { id: 423, pid: 42, text: "Lamb Ribs" },
            { id: 43, pid: 4, text: "Pork" },
            { id: 5, text: "Sweets" },
            { id: 6, text: "Vegetables" },
            { id: 7, text: "Water" }
        ];

        this.treeRef.current.loadData(flatData, null, null, true);
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
        let list = this.treeRef.current.getList('selected');
        this.setState({ selItems: list.map(item => { return { id: item.id, text: item.text } }) });
    }

    render(){

        return (
            <div>
                <h2>TreeView / Select Multiple Items</h2>
                <div className="sample-block">
                    <IntegralUITreeViewComponent id="treeview-multiselect" ref={this.treeRef}
                        allowAnimation={this.state.isAnimationAllowed}
                        items={this.state.items}
                        resourcePath={this.state.currentResourcePath}
                        selectionMode={this.state.currentSelectionMode}
                        size={this.state.ctrlSize}
                        theme={this.state.currentTheme} 
                        selectionChanged={(e) => this.onSelectionChanged(e)}
                    ></IntegralUITreeViewComponent>
                    <div className="treeview-multiselect-panel">
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
                        <p><span className="initial-space"></span>A demonstration of different selection types available in TreeView component. By selecting an option from <strong>Select</strong> component above, you can change the current selected mode. There are four acceptable values:</p>
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

export default TreeViewMultiSelect;
