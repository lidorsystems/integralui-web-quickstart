import React, { Component } from 'react';

import { IntegralUISelectionMode, IntegralUITheme } from 'integralui-web/components/integralui.enums.js';

import IntegralUIButtonComponent from 'integralui-web/wrappers/react.integralui.button.js';
import IntegralUICheckBoxComponent from 'integralui-web/wrappers/react.integralui.checkbox.js';
import IntegralUITreeViewComponent from 'integralui-web/wrappers/react.integralui.treeview.js';

import './treeview-export-json.css';

class TreeViewExportJSON extends Component {
    constructor(props){
        super(props);

        this.state = {
            ctrlSize: { height: 300 },
            currentResourcePath: '../../integralui-web/icons',
            currentSelectionMode: IntegralUISelectionMode.MultiExtended,
            currentTheme: IntegralUITheme.Office,
            items: [],
            // Control PaneL
            selectedOnly: false,
            isFlat: false,
            result: ''
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

    isFlatChanged(e){
        this.setState({ isFlat: e.detail.checked });
    }

    selectedOnlyChanged(e){
        this.setState({ selectedOnly: e.detail.checked });
    }

    onExport(){
        let data = this.state.items;

        // Source is selected items only
        if (this.state.selectedOnly)
            data = this.treeRef.current.getList('selected');
        // Source is the full tree hierarchy as flat list
        else if (this.state.isFlat)
            data = this.treeRef.current.getFullList();

        this.setState({ result: this.treeRef.current.exportToJSON(data, null, '   ', this.state.isFlat) });
    }

    render() {
        return (
            <div>
                <h2>TreeView / Export to JSON</h2>
                <div className="sample-block">
                    <IntegralUITreeViewComponent id="treeview-export" ref={this.treeRef}
                        items={this.state.items}
                        resourcePath={this.state.currentResourcePath}
                        selectionMode={this.state.currentSelectionMode}
                        size={this.state.ctrlSize}
                        theme={this.state.currentTheme}
                    ></IntegralUITreeViewComponent>
                    <div className="treeview-export-panel">
                        <IntegralUICheckBoxComponent resourcePath={this.state.currentResourcePath} theme={this.state.currentTheme} checkedChanged={(e) => this.selectedOnlyChanged(e)}>Only selected</IntegralUICheckBoxComponent><br/>
                        <IntegralUICheckBoxComponent resourcePath={this.state.currentResourcePath} theme={this.state.currentTheme} checkedChanged={(e) => this.isFlatChanged(e)}>Export as Flat list</IntegralUICheckBoxComponent><br/>
                        <IntegralUIButtonComponent allowAnimation={this.state.isAnimationAllowed} theme={this.state.currentTheme} onClick={() => this.onExport()}>Export</IntegralUIButtonComponent>
                    </div>
                    <div id="treeview-export-result-block">
                        <pre><code>{this.state.result}</code></pre>
                    </div>                    
                    <div className="feature-help">
                        <p><span className="initial-space"></span>IntegralUI TreeView component comes with built-in functionality that allows you to export the tree data in full or partially to JSON format.</p>
                        <p><span className="initial-space"></span>When exporting the data in full, it is straightforward, you don't need to specify any parameters just call the exporting method. On the other hand, when exporting partial data from the TreeView, you need to specify items that you want to export, for example exporting selected items.</p>
                        <p><span className="initial-space"></span>To select items use the CTRL key or SHIFT key. The <strong>MultiExtended</strong> mode allows selection of multiple items in wide range. While SHIFT key is pressed, all items from first to last clicked item will become selected.</p>
                        <p><span className="initial-space"></span>You can also choose whether exported data will be as a tree hierarchy or a flat list.</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default TreeViewExportJSON;
