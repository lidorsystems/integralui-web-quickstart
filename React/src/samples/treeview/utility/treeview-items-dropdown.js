import React, { Component } from 'react';
import { html } from 'integralui-web/external/lit-element.js';
import { classMap } from 'integralui-web/external/class-map.js';

import { IntegralUIItemDisplayMode, IntegralUITheme } from 'integralui-web/components/integralui.enums.js';
import IntegralUITreeViewComponent from 'integralui-web/wrappers/react.integralui.treeview.js';
import { iuiTreeViewItemsDropDownStyle } from './treeview-items-dropdown.style.js';
import 'integralui-web/components/integralui.select.js';

import './treeview-items-dropdown.css';

class TreeViewItemsDropDown extends Component {
    constructor(props){
        super(props);

        this.state = {
            ctrlSize: { width: 400, height: 400 },
            currentItemDisplay: IntegralUIItemDisplayMode.Full,
            currentResourcePath: '../../integralui-web/icons',
            currentTheme: IntegralUITheme.Office,
            isAnimationAllowed: true,
            items: [
                { 
                    id: 1,
                    text: "Paper/Output",
                    icon: { "trw-items-dd-icons-medium": true, "trw-items-dd-icon-paper": true },
                    items: [
                        { 
                            id: 11, 
                            pid: 1, 
                            text: "Paper Size: ", 
                            value: "Letter",
                            options: [
                                { text: "16K" },
                                { text: "A4" },
                                { text: "A5" },
                                { text: "A6" },
                                { text: "B5" },
                                { text: "Envelope #10" },
                                { text: "Envelope B5" },
                                { text: "Envelope C5" },
                                { text: "Envelope DL" },
                                { text: "Envelope Monarch" },
                                { text: "Executive" },
                                { text: "Folio" },
                                { text: "Legal" },
                                { text: "Letter" }
                            ],
                            dropDownWidth: 180
                        },
                        { id: 12, pid: 1, text: "Copy Count: ", value: 1, tag: "Copy" }
                    ]
                },
                { 
                    id: 2,
                    text: "Graphics",
                    expanded: false,
                    icon: { "trw-items-dd-icons-medium": true, "trw-items-dd-icon-graphics": true },
                    items: [
                        { 
                            id: 21, 
                            pid: 2, 
                            text: "Print Quality: ", 
                            value: "600x600 dots per inch",
                            options: [
                                { text: "600x600 dots per inch" },
                                { text: "300x300 dots per inch" }
                            ],
                            dropDownWidth: 200
                        },
                        { 
                            id: 22, 
                            pid: 2, 
                            text: "True Type Font: ", 
                            value: "Substitute with Device Font",
                            options: [
                                { text: "Substitute with Device Font" },
                                { text: "Download as Soft Font" }
                            ],
                            dropDownWidth: 230
                        },
                    ]
                },
                { 
                    id: 3,
                    text: "Documents Options",
                    icon: { "trw-items-dd-icons-medium": true, "trw-items-dd-icon-tools": true },
                    items: [
                        { 
                            id: 31, 
                            pid: 3, 
                            text: "Advanced Printing Features: ", 
                            value: "Enabled",
                            options: [
                                { text: "Enabled" },
                                { text: "Disabled" }
                            ],
                            dropDownWidth: 100
                        },
                        { 
                            id: 32, 
                            pid: 3, 
                            text: "Halftoning: ", 
                            value: "AutoSelect",
                            options: [
                                { text: "AutoSelect" },
                                { text: "Dither 6x6" },
                                { text: "Dither 8x8" }
                            ],
                            dropDownWidth: 125
                        },
                        { 
                            id: 33, 
                            pid: 3, 
                            text: "Print Optimizations: ", 
                            value: "Enabled",
                            options: [
                                { text: "Enabled" },
                                { text: "Disabled" }
                            ],
                            dropDownWidth: 100
                        },
                        { 
                            id: 34, 
                            pid: 3, 
                            text: "Printer Features: ", 
                            icon: { "trw-items-dd-icons-medium": true, "trw-items-dd-icon-features": true },
                            items: [
                                { 
                                    id: 341, 
                                    pid: 34, 
                                    text: "Optimize for: ", 
                                    value: "Plain",
                                    options: [
                                        { text: "Bond" },
                                        { text: "Cardstock" },
                                        { text: "Envelope" },
                                        { text: "Heavy" },
                                        { text: "Labels" },
                                        { text: "Plain" },
                                        { text: "Rough" },
                                        { text: "Thin" },
                                        { text: "Transparency" }
                                    ],
                                    dropDownWidth: 150
                                },
                                { 
                                    id: 342, 
                                    pid: 34, 
                                    text: "Economode: ", 
                                    value: "Off",
                                    options: [
                                        { text: "Off" },
                                        { text: "On" }
                                    ],
                                    dropDownWidth: 60
                                }
                            ]
                        }
                    ]
                }
            ]
        }

        this.activeItem = null;
    }

    currentItemTemplate = (item) => { 
        return html`
            <div @mousedown="${(e) => this.itemClicked(e, item)}">
                <span class=${classMap(this.getItemIcon(item))}"></span>
                <span class="trw-items-dd-item-label">${item.text}</span>
                ${this.getItemLayout(item)}
            </div>
        `;
    };

    getItemLayout(item){
        if (item !== this.activeItem)
            switch (item.id){
                case 12:
                    return html`<span class="trw-items-dd-item-value">
                            ${item.value}
                            ${item.value === 1
                                ? html`<span>Copy</span>`
                                : html`<span>Copies</span>`
                            }
                        </span>`;

                default:
                    return html`<span class="trw-items-dd-item-value" >${item.value}</span>`;
            }
        else
            switch (item.id){
                case 12:
                    return html`<input type="number" .value="${item.value}" @change="${(e) => this.itemInputChanged(e, item)}" />`;

                default:
                    return html`<iui-select 
                            .allowAnimation="true"
                            .customStyle="${iuiTreeViewItemsDropDownStyle}"
                            .items="${item.options}"
                            .selectedItem="${this.getDropDownSelection(item)}"
                            .size="${{ width: item.dropDownWidth }}"
                            @selectionChanged="${(e) => this.itemOptionSelected(e, item)}"
                        ></iui-select>`;
            }
    }

    getDropDownSelection(item){
        let found = null;

        if (item.options)
            for (let i = 0; i < item.options.length; i++){
                if (item.options[i].text === item.value){
                    found = item.options[i];
                    break;
                }
            }

        return found;
    }

    getItemIcon(item){
        return item.icon ? item.icon : { 'trw-items-dd-icons-medium': true, 'trw-items-dd-icon-empty': true };
    }

    itemClicked(e, item){
        this.activeItem = item.items ? null : item;
    }

    itemInputChanged(e, item){
        item.value = e.target.value;
    }

    itemOptionSelected(e, item){
        item.value = e.detail.item.text;
        this.activeItem = null;
    }

    render() {
        return (
            <div>
                <h2>TreeView / Items with DropDown</h2>
                <div className="sample-block">
                    <IntegralUITreeViewComponent id="treeview-items-dropdown"
                        allowAnimation={this.state.isAnimationAllowed}
                        customStyle={iuiTreeViewItemsDropDownStyle}
                        itemDisplay={this.state.currentItemDisplay}
                        items={this.state.items}
                        itemTemplate={this.currentItemTemplate}
                        resourcePath={this.state.currentResourcePath}
                        size={this.state.ctrlSize}
                        theme={this.state.currentTheme} 
                    ></IntegralUITreeViewComponent>
                    <div className="feature-help">
                        <p><span className="initial-space"></span>In this example each TreeView item has a dropdown (using the Select component), shown after its label.</p>
                        <p><span className="initial-space"></span>The underlined label represents a value that can be changed. When item is clicked, an editor (in this case a Select component) replaces the label. By selecting different options from the options list, you can change the item value. After value is changed, the dropdown becomes hidden, and again the underlined label is shown.</p>
                        <p><span className="initial-space"></span>All items have a dropdown, except for the item labeled 'Copy Count' which uses a standard input element as editor.</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default TreeViewItemsDropDown;
