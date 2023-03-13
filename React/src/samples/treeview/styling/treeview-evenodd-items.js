import React, { Component } from 'react';

import { IntegralUICheckMode, IntegralUITheme } from 'integralui-web/components/integralui.enums.js';
import IntegralUITreeViewComponent from 'integralui-web/wrappers/react.integralui.treeview.js';

import './treeview-evenodd-items.css';

class TreeViewEvenOdd extends Component {
    constructor(props){
        super(props);

        this.state = {
            ctrlSize:  { width: 350, height: 300 },
            currentResourcePath: '../../../integralui-web/icons',
            currenCheckMode: IntegralUICheckMode.ThreeState,
            currentTheme: IntegralUITheme.Office,
            isAnimationAllowed: true,
            items: []
        }

        this.treeRef = React.createRef();
    }

    componentDidMount(){
        let flatData = [
            { id: 1, text: "Dairy", expanded: false, checkState: "Checked" },
            { id: 11, pid: 1, text: "Milk" },
            { id: 12, pid: 1, text: "Butter" },
            { id: 13, pid: 1, text: "Cheese" },
            { id: 14, pid: 1, text: "Yogurt" },
            { id: 2, text: "Fruits" },
            { id: 21, pid: 2, text: "Berries", expanded:  false},
            { id: 211, pid: 21, text: "BlackBerries" },
            { id: 212, pid: 21, text: "CranBerries" },
            { id: 213, pid: 21, text: "StrawBerries" },
            { id: 22, pid: 2, text: "Pits", checkState: "Checked" },
            { id: 23, pid: 2, text: "Core" },
            { id: 24, pid: 2, text: "Citrus Fruits" },
            { id: 241, pid: 24, text: "Oranges", checkState: "Checked" },
            { id: 242, pid: 24, text: "Lemons" },
            { id: 25, pid: 2, text: "Melons" },
            { id: 26, pid: 2, text: "Tropical Fruits", expanded: false, checkState: "Checked" },
            { id: 261, pid: 26, text: "Avocados" },
            { id: 262, pid: 26, text: "Bananas" },
            { id: 263, pid: 26, text: "Dates" },
            { id: 3, text: "Grains" },
            { id: 4, text: "Meat" },
            { id: 41, pid: 4, text: "Beef" },
            { id: 42, pid: 4, text: "Lamb", expanded: false },
            { id: 421, pid: 42, text: "Lamb Breast" },
            { id: 422, pid: 42, text: "Lamb Leg", checkState: "Checked" },
            { id: 423, pid: 42, text: "Lamb Ribs" },
            { id: 43, pid: 4, text: "Pork" },
            { id: 5, text: "Sweets", checkState: "Checked" },
            { id: 6, text: "Vegetables" },
            { id: 7, text: "Water" }
        ];

        this.treeRef.current.loadData(flatData, null, null, true);
    }

    // Set the styles for even/odd items
    onUpdateComplete(){
        if (this.treeRef && this.treeRef.current){
            let list = this.treeRef.current.getFullList();

            list.forEach((item, index) => {
                if (index % 2 === 0)
                    item.style = {
                        normal: { background: '#f5f5f5' }
                    }
                else 
                    item.style = {
                        normal: { background: '#e1e1e1' }
                    }
                
                item.style.selected = { fontWeight: 'bold' }
            });

            this.treeRef.current.refresh();
        }
    }

    render() {

        return (
            <div>
                <h2>TreeView / Even/Odd Items</h2>
                <div className="sample-block">
                    <IntegralUITreeViewComponent id="treeview-evenodd" ref={this.treeRef}
                        allowAnimation={this.state.isAnimationAllowed}
                        checkBoxes={true}
                        checkMode={this.state.currenCheckMode}
                        items={this.state.items}
                        resourcePath={this.state.currentResourcePath}
                        size={this.state.ctrlSize}
                        theme={this.state.currentTheme} 
                        updateComplete={() => this.onUpdateComplete()}
                    ></IntegralUITreeViewComponent>
                    <div className="feature-help">
                        <p><span className="initial-space"></span>An example of TreeView with items displayed in alternate colors.</p>
                        <p><span className="initial-space"></span>Each item can have a unique look. This is done by setting custom inline style to specific item. In case of this sample, we want to have even items in same color, and different color for odd items. This is done by creating two CSS styles which will be applied to even or odd items, accordingly to their order.</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default TreeViewEvenOdd;
