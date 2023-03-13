import React, { Component } from 'react';

import { IntegralUITheme } from 'integralui-web/components/integralui.enums.js';

import IntegralUIButtonComponent from 'integralui-web/wrappers/react.integralui.button.js';
import IntegralUIDropDownFilterComponent from 'integralui-web/wrappers/react.integralui.dropdownfilter.js';
import IntegralUITreeViewComponent from 'integralui-web/wrappers/react.integralui.treeview.js';

import './treeview-filtering-overview.css';

class TreeViewFilteringOverview extends Component {
    constructor(props){
        super(props);

        this.state = {
            ctrlSize: { width: 350, height: 300 },
            currentResourcePath: '../../../integralui-web/icons',
            currentTheme: IntegralUITheme.Office,
            isAnimationAllowed: true,
            items: [],
            // DropDown Filter
            filterAdjustment: { left: 280, top: -1 },
            filterSize: { width: 292 }
        }

        this.currentFilterOperation = '[]';
        this.currentFilterValue = '';

        this.treeRef = React.createRef();
    }

    // Initialization ----------------------------------------------------------------------------

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

    // Filtering ---------------------------------------------------------------------------------

    applyFilter(){
        // Filter TreeView based on selected operation and value
        if (this.currentFilterValue){
            let params = {
                allowParent: true,
                caseSensitive: false,
                conditions: { 
                    value: this.currentFilterValue,
                    operation: this.currentFilterOperation
                }
            }

            this.treeRef.current.filter(params);
        }
        // Reset the filter by excluding the parameter
        else
            this.treeRef.current.filter();
    }

    onFilterChange(e){
        this.currentFilterValue = e.detail.value;
    }

    onFilterOperationChanged(e){
        this.currentFilterOperation = e.detail.operation;
    }

    onFilterValueChanged(e){
        this.currentFilterOperation = e.detail.filter.operation;
        this.currentFilterValue = e.detail.value;

        this.applyFilter();
    }

    onFilterClicked(){
        this.applyFilter();
    }

    render() {

        return (
            <div>
                <h2>TreeView / Filtering Overview</h2>
                <div className="sample-block">
                    <IntegralUIDropDownFilterComponent id="treeview-dropdownfilter"
                        allowAnimation={this.state.isAnimationAllowed}
                        dropDownAdjustment={this.state.filterAdjustment}
                        resourcePath={this.state.currentResourcePath}
                        size={this.state.filterSize}
                        theme={this.state.currentTheme}
                        change={(e) => this.onFilterChange(e)}
                        operationChanged={(e) => this.onFilterOperationChanged(e)}
                        valueChanged={(e) => this.onFilterValueChanged(e)}
                    ></IntegralUIDropDownFilterComponent>
                    <IntegralUIButtonComponent allowAnimation={this.state.isAnimationAllowed} theme={this.state.currentTheme} onClick={() => this.onFilterClicked()}>Filter</IntegralUIButtonComponent>
                    <IntegralUITreeViewComponent id="treeview-filtering-overview" ref={this.treeRef}
                        allowAnimation={this.state.isAnimationAllowed}
                        allowFilter={true}
                        items={this.state.items}
                        resourcePath={this.state.currentResourcePath}
                        size={this.state.ctrlSize}
                        theme={this.state.currentTheme} 
                    ></IntegralUITreeViewComponent>
                    <div className="feature-help">
                        <p><span className="initial-space"></span>This sample shows how to filter the TreeView content using different conditions.</p>
                        <p><span className="initial-space"></span>By selecting an operation from dropdown filter and specifying matching value, you can filter the TreeView so that only those items that matches the specified condition are shown.</p>
                        <p><span className="initial-space"></span>By default, filtering is executed using the item's value field to match the specified criteria. If this field value is empty, then the value of item's text field is used. If parent item has children that passes the filter conditions, then parent item also passes the filter conditions. This is determined from <span className="code-object">allowParent</span> field in filter parameters.</p>
                        <p><span className="initial-space"></span>For filtering operations we are using the <strong>IntegralUIFilterService</strong>, which provides many ways to set string, numeric or custom filtering using multiple conditions with multiple AND / OR combinations.</p>
                        <p><span className="initial-space"></span>You can also create a custom filtering operation, but you would need to create a function in your code and apply it to the callback field of filtering parameter.</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default TreeViewFilteringOverview;
