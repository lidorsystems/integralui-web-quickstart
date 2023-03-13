import React, { Component } from 'react';

import { IntegralUISelectionMode, IntegralUITheme } from 'integralui-web/components/integralui.enums.js';

import IntegralUIButtonComponent from 'integralui-web/wrappers/react.integralui.button.js';
import IntegralUICheckBoxComponent from 'integralui-web/wrappers/react.integralui.checkbox.js';
import IntegralUIListViewComponent from 'integralui-web/wrappers/react.integralui.listview.js';

import './listview-export-json.css';

class ListViewExportJSON extends Component {
    constructor(props){
        super(props);

        this.state = {
            ctrlSize: { height: 300 },
            currentItemSize: { width: 150, height: 32 },
            currentResourcePath: '../../integralui-web/icons',
            currentSelectionMode: IntegralUISelectionMode.MultiExtended,
            currentTheme: IntegralUITheme.Office,
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
            // Control PaneL
            result: '',
            selectedOnly: false
        }

        this.listRef = React.createRef();
    }

    // Events ------------------------------------------------------------------------------------

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
                <h2>ListView / Export to JSON</h2>
                <div className="sample-block">
                    <IntegralUIListViewComponent id="listview-export" ref={this.listRef}
                        items={this.state.items}
                        itemSize={this.state.currentItemSize}
                        resourcePath={this.state.currentResourcePath}
                        selectionMode={this.state.currentSelectionMode}
                        size={this.state.ctrlSize}
                        theme={this.state.currentTheme}
                    ></IntegralUIListViewComponent>
                    <div className="listview-export-panel">
                        <IntegralUICheckBoxComponent resourcePath={this.state.currentResourcePath} theme={this.state.currentTheme} checkedChanged={(e) => this.selectedOnlyChanged(e)}>Only selected</IntegralUICheckBoxComponent><br/>
                        <IntegralUIButtonComponent allowAnimation={this.state.isAnimationAllowed} theme={this.state.currentTheme} onClick={() => this.onExport()}>Export</IntegralUIButtonComponent>
                    </div>
                    <div id="listview-export-result-block">
                        <pre><code>{this.state.result}</code></pre>
                    </div>                    
                    <div className="feature-help">
                        <p><span className="initial-space"></span>IntegralUI ListView component comes with built-in functionality that allows you to export the list data in full or partially to JSON format.</p>
                        <p><span className="initial-space"></span>When exporting the data in full, it is straightforward, you don't need to specify any parameters just call the exporting method. On the other hand, when exporting partial data from the ListView, you need to specify items that you want to export, for example exporting selected items.</p>
                        <p><span className="initial-space"></span>To select items use the CTRL key or SHIFT key. The <strong>MultiExtended</strong> mode allows selection of multiple items in wide range. While SHIFT key is pressed, all items from first to last clicked item will become selected.</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default ListViewExportJSON;
