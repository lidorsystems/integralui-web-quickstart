import React, { Component } from 'react';
import { html } from 'integralui-web/external/lit-element.js';
import { classMap } from 'integralui-web/external/class-map.js';

import { IntegralUITheme } from 'integralui-web/components/integralui.enums.js';
import IntegralUIListBoxComponent from 'integralui-web/wrappers/react.integralui.listbox.js';
import { iuiListBoxCustomContentStyle } from './listbox-custom-content.style.js';

class ListBoxCustomContent extends Component {
    constructor(props){
        super(props);

        this.state = {
            ctrlSize: { width: 500, height: 240 },
            currentResourcePath: '../../../integralui-web/icons',
            currentTheme: IntegralUITheme.Office,
            items: [
                { 
                    id: 1,
                    category: 'Disk drives',
                    date: '21 Jun 2022',
                    driverName: 'TOSHIBA DT01ACA100 ATA Device',
                    icon: 'disk',
                    version: '6.1.7600.16385'
                },
                { 
                    id: 2,
                    checked: true,
                    category: 'Display adapters',
                    date: '05 Nov 2022',
                    driverName: 'NVIDIA GeForce GT 730',
                    icon: 'pc',
                    version: '10.18.13.5891'
                },
                { 
                    id: 3,
                    category: 'Network',
                    date: '17 Mar 2021',
                    driverName: 'Realtek PCIe GBE Family Controller',
                    icon: 'network',
                    version: '7.82.317.2021'
                },
                { 
                    id: 4,
                    category: 'Sound',
                    date: '14 Mar 2021',
                    driverName: 'Realtek High Defintion Audio',
                    icon: 'sound',
                    version: '6.0.1.7200'
                },
                { 
                    id: 5,
                    category: 'Universal Serial Bus controllers',
                    date: '12 Feb 2021',
                    driverName: 'Intel USB 3.0 Root Hub',
                    icon: 'usb',
                    version: '3.0.0.16'
                }
            ]
        }

        this.listRef = React.createRef();
    }

    // Templates ---------------------------------------------------------------------------------

    currentItemTemplate = (item) => { 
        return html`<div class="driver">
                <div class="driver-selection">
                    <span class=${classMap(this.getCheckBoxClass(item))} @mousedown="${(e) => this.checkItem(e, item)}"></span>
                </div>
                <div class="driver-info">
                    <span class="icons-medium ${item.icon}"></span>
                    <div class="driver-name">
                        <span class="driver-category">${item.category}</span><br/>
                        <span>${item.driverName}</span>
                    </div>
                </div>
                <div class="driver-action">
                    <iui-button allow-animation="true" .allowFocus="${false}" .customStyle="${iuiListBoxCustomContentStyle}" @click="${() => this.updateDriver(item)}">Update</iui-button>
                </div>
            </div>`;
    }
        
    // Methods -----------------------------------------------------------------------------------

    checkItem(e, item){
        if (e.which === 1 && item){
            item.checked = item.checked !== undefined ? !item.checked : true;
            this.listRef.current.refresh();
        }

        e.stopPropagation();
    }

    getCheckBoxClass(item){
        let cbClass = { 'lbox-item-cbox': true };

        if (item.checked)
            cbClass['lbox-item-cbox-checked'] = true;

        return cbClass;
    }

    updateDriver(item){
        alert("Update Driver for " + item.driverName);
    }

    // Update ------------------------------------------------------------------------------------

    render() {
        return (
            <div>
                <h2>ListBox / Items with Custom Content</h2>
                <div className="sample-block">
                    <IntegralUIListBoxComponent id="listbox-custom-content" ref={this.listRef}
                        customStyle={iuiListBoxCustomContentStyle}
                        items={this.state.items}
                        itemTemplate={this.currentItemTemplate}
                        resourcePath={this.state.currentResourcePath}
                        size={this.state.ctrlSize}
                        theme={this.state.currentTheme}
                    ></IntegralUIListBoxComponent>
                    <div className="feature-help">
                        <p><span className="initial-space"></span>An example of ListBox component where templates are used to add custom HTML content in item space. Each item contains different HTML elements that present information about specific device driver based on provided data.</p>
                        <p><span className="initial-space"></span>Templates are fully customizable via CSS and you can add any custom actions to template elements.</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default ListBoxCustomContent;
