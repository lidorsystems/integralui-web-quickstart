import React, { Component } from 'react';

import { IntegralUISelectionMode, IntegralUITheme } from 'integralui-web/components/integralui.enums.js';

import IntegralUIButtonComponent from 'integralui-web/wrappers/react.integralui.button.js';
import IntegralUICheckBoxComponent from 'integralui-web/wrappers/react.integralui.checkbox.js';
import IntegralUIListBoxComponent from 'integralui-web/wrappers/react.integralui.listbox.js';

import './listbox-export-json.css';

class ListBoxExportJSON extends Component {
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
            // Control PaneL
            isGrouped: false,
            result: '',
            selectedOnly: false
        }

        this.listRef = React.createRef();
    }

    // Events ------------------------------------------------------------------------------------

    isGroupedChanged(e){
        this.setState({ isGrouped: e.detail.checked });
    }

    onExport(){
        let data = this.state.items;

        // Source is selected items only
        if (this.state.selectedOnly)
            data = this.listRef.current.getList('selected');

        this.setState({ result: this.listRef.current.exportToJSON(data, null, '   ') });
    }

    selectedOnlyChanged(e){
        this.setState({ selectedOnly: e.detail.checked });
    }
    
    // Update ------------------------------------------------------------------------------------

    render() {
        return (
            <div>
                <h2>ListBox / Export to JSON</h2>
                <div className="sample-block">
                    <IntegralUIListBoxComponent id="listbox-export" ref={this.listRef}
                        groups={this.state.groups}
                        items={this.state.items}
                        resourcePath={this.state.currentResourcePath}
                        selectionMode={this.state.currentSelectionMode}
                        showGroups={this.state.isGrouped}
                        size={this.state.ctrlSize}
                        theme={this.state.currentTheme}
                    ></IntegralUIListBoxComponent>
                    <div className="listbox-export-panel">
                        <IntegralUICheckBoxComponent resourcePath={this.state.currentResourcePath} theme={this.state.currentTheme} checkedChanged={(e) => this.isGroupedChanged(e)}>Show Groups</IntegralUICheckBoxComponent><br/>
                        <IntegralUICheckBoxComponent resourcePath={this.state.currentResourcePath} theme={this.state.currentTheme} checkedChanged={(e) => this.selectedOnlyChanged(e)}>Only selected</IntegralUICheckBoxComponent><br/>
                        <IntegralUIButtonComponent allowAnimation={this.state.isAnimationAllowed} theme={this.state.currentTheme} onClick={() => this.onExport()}>Export</IntegralUIButtonComponent>
                    </div>
                    <div id="listbox-export-result-block">
                        <pre><code>{this.state.result}</code></pre>
                    </div>                    
                    <div className="feature-help">
                        <p><span className="initial-space"></span>IntegralUI ListBox component comes with built-in functionality that allows you to export the list data in full or partially to JSON format.</p>
                        <p><span className="initial-space"></span>When exporting the data in full, it is straightforward, you don't need to specify any parameters just call the exporting method. On the other hand, when exporting partial data from the ListBox, you need to specify items that you want to export, for example exporting selected items.</p>
                        <p><span className="initial-space"></span>To select items use the CTRL key or SHIFT key. The <strong>MultiExtended</strong> mode allows selection of multiple items in wide range. While SHIFT key is pressed, all items from first to last clicked item will become selected.</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default ListBoxExportJSON;
