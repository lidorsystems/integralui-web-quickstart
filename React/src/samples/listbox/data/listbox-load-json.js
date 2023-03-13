import React, { Component } from 'react';
import { html } from 'integralui-web/external/lit-element.js';
import { classMap } from 'integralui-web/external/class-map.js';
import { styleMap } from 'integralui-web/external/style-map.js';

import IntegralUIButtonComponent from 'integralui-web/wrappers/react.integralui.button.js';
import IntegralUIListBoxComponent from 'integralui-web/wrappers/react.integralui.listbox.js';
import { IntegralUITheme } from 'integralui-web/components/integralui.enums.js';

import './listbox-load-json.css';
import { iuiListBoxLoadJSONStyle } from './listbox-load-json.style.js';
import listData from './listbox-load-json-data.json';

class ListBoxLoadJSON extends Component {

    //
    // Initialization / Destruction --------------------------------------------------------------
    //

    constructor(props){
        super(props);

        this.state = {
            ctrlSize: { width: 500, height: 350 },
            currentResourcePath: '../../integralui-web/icons',
            currentTheme: IntegralUITheme.Office,
            data: [],
            listFields: {
                icon: 'itemIcon',
                id: 'itemId',
                text: 'label'
            }
        }

        this.buttonRef = React.createRef();
        this.listRef = React.createRef();
    }

    // Templates ---------------------------------------------------------------------------------

    currentItemTemplate = (item) => { 
        return html`
            <div class="lbox-dfjson-item-content">
                <table width="100%">
                    <tr>
                        <td rowspan="99"><span class=${classMap({ 'lbox-dfjson-icons': true, [item.itemIcon]: true, 'envelope-open': item.isOpen && item.itemIcon === 'envelope' })}></span></td>
                        <td width="75%"><span class="lbox-dfjson-label">${item.label}</span></td>
                        <td class="lbox-dfjson-date" width="25%">${item.date}</td>
                    </tr>
                    <tr><td colspan="2"><span class="lbox-dfjson-subtext">${item.subtext}</span></td></tr>
                    <tr style=${styleMap({ display: item.isOpen ? 'table-row' : 'none' })}><td colspan="2"><hr /></td><tr>
                </table>
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
    
    // Update ------------------------------------------------------------------------------------

    render() {
        return (
            <div>
                <h2>ListBox / Load Data from JSON</h2>
                <div className="sample-block">
                    <IntegralUIButtonComponent id="listbox-button-load-json" ref={this.buttonRef}
                        allowAnimation={true}
                        theme={this.state.currentTheme} 
                        onClick={() => this.btnClicked()}
                    >Load JSON</IntegralUIButtonComponent>
                    <IntegralUIListBoxComponent id="listbox-load-json" ref={this.listRef}
                        customStyle={iuiListBoxLoadJSONStyle}
                        dataFields={this.state.listFields}
                        items={this.state.data}
                        itemTemplate={this.currentItemTemplate}
                        resourcePath={this.state.currentResourcePath}
                        size={this.state.ctrlSize}
                        theme={this.state.currentTheme} 
                    ></IntegralUIListBoxComponent>
                </div>
                <div className="feature-help">
                    <p><span className="initial-space"></span>This sample shows how to populate the ListBox using JSON file as a data source. The data source has custom data fields, which are mapped to the ones used by the list.</p>
                    <p><span className="initial-space"></span>For data binding, use the <strong>dataFields</strong> property of the ListBox component. This property accepts an object that replaces the default field names with your own.</p>
                    <p><span className="initial-space"></span>You can find the JSON data file in the same directory as this sample.</p>
                </div>
            </div>
        );
    }
}

export default ListBoxLoadJSON;
