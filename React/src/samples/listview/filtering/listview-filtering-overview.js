import React, { Component } from 'react';

import { IntegralUITheme } from 'integralui-web/components/integralui.enums.js';

import IntegralUIButtonComponent from 'integralui-web/wrappers/react.integralui.button.js';
import IntegralUIDropDownFilterComponent from 'integralui-web/wrappers/react.integralui.dropdownfilter.js';
import IntegralUIListViewComponent from 'integralui-web/wrappers/react.integralui.listview.js';

import './listview-filtering-overview.css';

class ListViewFilteringOverview extends Component {
    constructor(props){
        super(props);

        this.state = {
            ctrlSize: { width: 350, height: 300 },
            currentItemSize: { width: 150, height: 32 },
            currentResourcePath: '../../../integralui-web/icons',
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
            // DropDown Filter
            filterAdjustment: { left: 280, top: -1 },
            filterSize: { width: 292 }
        }

        this.currentFilterOperation = '[]';
        this.currentFilterValue = '';

        this.listRef = React.createRef();
    }

    // Filtering ---------------------------------------------------------------------------------

    applyFilter(){
        // Filter ListView based on selected operation and value
        if (this.currentFilterValue){
            let params = {
                allowParent: true,
                caseSensitive: false,
                conditions: { 
                    value: this.currentFilterValue,
                    operation: this.currentFilterOperation
                }
            }

            this.listRef.current.filter(params);
        }
        // Reset the filter by excluding the parameter
        else
            this.listRef.current.filter();
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
                <h2>ListView / Filtering Overview</h2>
                <div className="sample-block">
                    <IntegralUIDropDownFilterComponent id="listview-dropdownfilter"
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
                    <IntegralUIListViewComponent id="listview-filtering-overview" ref={this.listRef}
                        allowAnimation={this.state.isAnimationAllowed}
                        allowFilter={true}
                        items={this.state.items}
                        itemSize={this.state.currentItemSize}
                        resourcePath={this.state.currentResourcePath}
                        size={this.state.ctrlSize}
                        theme={this.state.currentTheme} 
                    ></IntegralUIListViewComponent>
                    <div className="feature-help">
                        <p><span className="initial-space"></span>This sample shows how to filter the ListView content using different conditions.</p>
                        <p><span className="initial-space"></span>By selecting an operation from dropdown filter and specifying matching value, you can filter the ListView so that only those items that matches the specified condition are shown.</p>
                        <p><span className="initial-space"></span>By default, filtering is executed using the item's value field to match the specified criteria. If this field value is empty, then the value of item's text field is used.</p>
                        <p><span className="initial-space"></span>For filtering operations we are using the <strong>IntegralUIFilterService</strong>, which provides many ways to set string, numeric or custom filtering using multiple conditions with multiple AND / OR combinations.</p>
                        <p><span className="initial-space"></span>You can also create a custom filtering operation, but you would need to create a function in your code and apply it to the callback field of filtering parameter.</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default ListViewFilteringOverview;
