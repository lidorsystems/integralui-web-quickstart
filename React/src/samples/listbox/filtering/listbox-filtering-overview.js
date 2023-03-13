import React, { Component } from 'react';

import { IntegralUITheme } from 'integralui-web/components/integralui.enums.js';

import IntegralUIButtonComponent from 'integralui-web/wrappers/react.integralui.button.js';
import IntegralUIDropDownFilterComponent from 'integralui-web/wrappers/react.integralui.dropdownfilter.js';
import IntegralUIListBoxComponent from 'integralui-web/wrappers/react.integralui.listbox.js';

import './listbox-filtering-overview.css';

class ListBoxFilteringOverview extends Component {
    constructor(props){
        super(props);

        this.state = {
            ctrlSize: { width: 350, height: 300 },
            currentResourcePath: '../../../integralui-web/icons',
            currentTheme: IntegralUITheme.Office,
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
        // Filter ListBox based on selected operation and value
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
                <h2>ListBox / Filtering Overview</h2>
                <div className="sample-block">
                    <IntegralUIDropDownFilterComponent id="listbox-dropdownfilter"
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
                    <IntegralUIListBoxComponent id="listbox-filtering-overview" ref={this.listRef}
                        allowAnimation={this.state.isAnimationAllowed}
                        allowFilter={true}
                        items={this.state.items}
                        resourcePath={this.state.currentResourcePath}
                        size={this.state.ctrlSize}
                        theme={this.state.currentTheme} 
                    ></IntegralUIListBoxComponent>
                    <div className="feature-help">
                        <p><span className="initial-space"></span>This sample shows how to filter the ListBox content using different conditions.</p>
                        <p><span className="initial-space"></span>By selecting an operation from dropdown filter and specifying matching value, you can filter the ListBox so that only those items that matches the specified condition are shown.</p>
                        <p><span className="initial-space"></span>By default, filtering is executed using the item's value field to match the specified criteria. If this field value is empty, then the value of item's text field is used.</p>
                        <p><span className="initial-space"></span>For filtering operations we are using the <strong>IntegralUIFilterService</strong>, which provides many ways to set string, numeric or custom filtering using multiple conditions with multiple AND / OR combinations.</p>
                        <p><span className="initial-space"></span>You can also create a custom filtering operation, but you would need to create a function in your code and apply it to the callback field of filtering parameter.</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default ListBoxFilteringOverview;
