import React, { Component } from 'react';
import { html } from 'integralui-web/external/lit-element.js';

import IntegralUIButtonComponent from 'integralui-web/wrappers/react.integralui.button.js';
import IntegralUIListViewComponent from 'integralui-web/wrappers/react.integralui.listview.js';
import { IntegralUIComponentAppearance, IntegralUIDirection, IntegralUITheme } from 'integralui-web/components/integralui.enums.js';

import './listview-load-json.css';
import { iuiListViewLoadJSONStyle } from './listview-load-json.style.js';
import listData from './listview-load-json-data.json';

class ListViewLoadJSON extends Component {

    //
    // Initialization / Destruction --------------------------------------------------------------
    //

    constructor(props){
        super(props);

        this.state = {
            ctrlSize: { height: 300 },
            currentItemSize: { width: 178, height: 128 },
            currentScrollAppearance: IntegralUIComponentAppearance.Dynamic,
            currentResourcePath: '../../integralui-web/icons',
            currentTheme: IntegralUITheme.Office,
            data: [],
            listFields: {
                icon: 'itemIcon',
                id: 'itemId',
                text: 'label'
            }
        }

        // DropDownButton
        this.dropDownDirection = IntegralUIDirection.Left | IntegralUIDirection.Below;
        this.dropDownSize = { width: 125, height: 68 };

        this.buttonRef = React.createRef();
        this.listRef = React.createRef();
    }

    // Templates ---------------------------------------------------------------------------------

    currentDropDownTemplate = (item) => { 
        return html`
            <iui-list 
                .items="${item.dropdown.items}" 
                .selectedItem="${this.getDropDownItem(item)}" 
                .showScroll="${{ vertical: false }}"
                .size="${{ width: this.dropDownSize.width - 4, height: this.dropDownSize.height - 4 }}" 
                .theme="${this.state.currentTheme}" 
                @itemClick="${(e) => this.itemSelected(e, item)}" 
                @itemTouch="${(e) => this.itemSelected(e, item)}"
            ></iui-list>
        `;
    };

    currentItemTemplate = (item) => { 
        return html`
            <div class="lview-dfjson-item-content">
                <div class="lview-dfjson-item-top-content">
                    <div class="lview-dfjson-item-icon">
                        <span class="lview-dfjson-icons ${item.icon}"></span>
                    </div>
                    <span class="lview-dfjson-item-label">${item.label}</span><br />
                </div>
                <div class="lview-dfjson-item-dropdown">
                    <iui-dropdownbutton 
                        .contentTemplate="${this.currentDropDownTemplate}"
                        .data="${item}"
                        .direction="${this.dropDownDirection}" 
                        .dropDownSize="${this.dropDownSize}"
                        .expanded="${item.selected && item.isDropDownExpanded === true}"
                        .items="${item.dropdown.items}" 
                        .resourcePath="${this.state.currentResourcePath}"
                        .theme="${this.state.currentTheme}" 
                        @expandedChanged="${(e) => this.dropDownExpandedChanged(e, item)}"
                    >
                        ${item.dropdown.label}
                    </iui-dropdownbutton>
                </div>
            </div>
        `;
    }

    // Initialization ----------------------------------------------------------------------------

    btnClicked(){
        this.buttonRef.current.setStyle({ display: 'none' });

        this.loadFromJSON();
    }

    loadFromJSON(){
        // Suspend the list layout from updates, to increase performance
        this.listRef.current.suspendLayout();

        // Load data into the list
        this.listRef.current.loadData(listData, this.state.listFields);

        // Resume and update the list layout
        this.listRef.current.resumeLayout();
    }
  
    // DropDownButton Selection ------------------------------------------------------------------

    dropDownExpandedChanged(e, item){
        item.isDropDownExpanded = e.detail.expanded;
    }

    getDropDownItem(item){
        let filtered = item.dropdown.items.filter(obj => obj.text === item.dropdown.label);

        return filtered.length > 0 ? filtered[0] : null;
    }

    itemSelected(e, listItem){
        console.log("Item is selected: ", e.detail.item);

        listItem.dropdown.label = e.detail.item.text;
        listItem.isDropDownExpanded = false;

        this.listRef.current.updateLayout();
    }
  
    // Update ------------------------------------------------------------------------------------

    render() {
        return (
            <div>
                <h2>ListView / Load Data from JSON</h2>
                <div className="sample-block">
                    <IntegralUIButtonComponent id="listview-button-load-json" ref={this.buttonRef}
                        allowAnimation={true}
                        theme={this.state.currentTheme} 
                        onClick={() => this.btnClicked()}
                    >Load JSON</IntegralUIButtonComponent>
                    <IntegralUIListViewComponent id="listview-load-json" ref={this.listRef}
                        customStyle={iuiListViewLoadJSONStyle}
                        dataFields={this.state.listFields}
                        items={this.state.data}
                        itemSize={this.state.currentItemSize}
                        itemTemplate={this.currentItemTemplate}
                        scrollAppearance={this.state.currentScrollAppearance}
                        resourcePath={this.state.currentResourcePath}
                        size={this.state.ctrlSize}
                        theme={this.state.currentTheme} 
                    ></IntegralUIListViewComponent>
                </div>
                <div className="feature-help">
                    <p><span className="initial-space"></span>This sample shows how to populate the ListView using JSON file as a data source. The data source has custom data fields, which are mapped to the ones used by the tree view.</p>
                    <p><span className="initial-space"></span>For data binding, use the <strong>dataFields</strong> property of the ListView component. This property accepts an object that replaces the default field names with your own. The other way with custom fields, is to use <strong>loadData</strong> method and set the data fields as function parameter.</p>
                    <p><span className="initial-space"></span>You can find the JSON data file in the same directory as this sample.</p>
                    <p><span className="initial-space"></span>This example also shows dynamic scrolling, the scroll bar will appear only when mouse hovers over ListView space.</p>
                </div>
            </div>
        );
    }
}

export default ListViewLoadJSON;
