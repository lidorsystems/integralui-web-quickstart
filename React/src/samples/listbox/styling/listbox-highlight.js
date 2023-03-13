import React, { Component } from 'react';
import { html } from 'integralui-web/external/lit-element.js';
import { classMap } from 'integralui-web/external/class-map';

import { IntegralUICheckMode, IntegralUITheme } from 'integralui-web/components/integralui.enums.js';
import IntegralUIListBoxComponent from 'integralui-web/wrappers/react.integralui.listbox.js';
import { iuiListBoxHighlightStyle } from './listbox-highlight.style.js';

import './listbox-highlight.css';

class ListBoxHighlight extends Component {
    constructor(props){
        super(props);

        this.state = {
            ctrlSize:  { width: 350, height: 300 },
            currentResourcePath: '../../../integralui-web/icons',
            currenCheckMode: IntegralUICheckMode.ThreeState,
            currentTheme: IntegralUITheme.Office,
            groups: [
                { name: "Common Controls", expanded: false },
                { name: "Containers" },
                { name: "Menus & Toolbars" },
                { name: "Data", expanded: false },
                { name: "Dialogs" },
                { name: "Printing" },
                { name: "IntegralUI" }
            ],
            items: [
                { id: 11, text: "Button", group: "Common Controls" },
                { id: 12, text: "CheckBox", group: "Common Controls" },
                { id: 13, text: "ComboBox", group: "Common Controls" },
                { id: 14, text: "DateTime Picker", group: "Common Controls" },
                { id: 15, text: "Label", group: "Common Controls" },
                { id: 16, text: "ProgressBar", group: "Common Controls" },
                { id: 17, text: "TextBox", group: "Common Controls" },
                { id: 21, text: "GroupBox", group: "Containers" },
                { id: 22, text: "Panel", group: "Containers" },
                { id: 23, text: "SplitContainer", group: "Containers" },
                { id: 24, text: "TabControl", group: "Containers" },
                { id: 31, text: "ContextMenu", group: "Menus & Toolbars" },
                { id: 32, text: "Menu", group: "Menus & Toolbars" },
                { id: 33, text: "ToolStrip", group: "Menus & Toolbars" },
                { id: 41, text: "DataGrid", group: "Data" },
                { id: 42, text: "DataSet", group: "Data" },
                { id: 43, text: "ReportViewer", group: "Data" },
                { id: 51, text: "ColorDialog", group: "Dialogs" },
                { id: 52, text: "FontDialog", group: "Dialogs" },
                { id: 61, text: "PrintDialog", group: "Printing" },
                { id: 62, text: "PrintDocument", group: "Printing" },
                { id: 71, text: "Accordion", group: "IntegralUI" },
                { id: 72, text: "CheckBox", group: "IntegralUI" },
                { id: 73, text: "ComboBox", group: "IntegralUI" },
                { id: 74, text: "ContextMenu", group: "IntegralUI" },
                { id: 75, text: "Menu", group: "IntegralUI" },
                { id: 76, text: "SlideBar", group: "IntegralUI" },
                { id: 77, text: "TabStrip", group: "IntegralUI" },
                { id: 78, text: "TreeGrid", group: "IntegralUI" },
                { id: 79, text: "ListBox", group: "IntegralUI" }
            ]
        }

        this.hightlightStyle = {
            borderLeftColor: '#56c756',
            borderLeftWidth: '4px',
            fontWeight: 'bold'
        }
    
        this.listRef = React.createRef();
    }

    // Templates ---------------------------------------------------------------------------------

    currentItemTemplate = (item) => { 
        if (item.type === 'group')
            return html`
                <div>
                    <span class="lbox-ovw-name">${item.name}</span>
                </div>
            `;
        else
            return html`
                <div>
                    <span class=${classMap(this.getCheckBoxClass(item))} @mousedown="${(e) => this.checkItem(e, item)}"></span>
                    <span class="lbox-cbox-item-label">${item.text}</span>
                </div>
            `;
    };

    // Methods -----------------------------------------------------------------------------------

    getCheckBoxClass(item){
        let cbClass = { 'lbox-item-cbox': true };

        if (item.checked)
            cbClass['lbox-item-cbox-checked'] = true;

        return cbClass;
    }

    // Highlight items with custom style
    checkItem(e, item){
        if (e.which === 1 && item){
            item.checked = item.checked !== undefined ? !item.checked : true;
            item.style = item.checked ? { normal: this.hightlightStyle, hovered: this.hightlightStyle, selected: this.hightlightStyle } : {}

            this.listRef.current.refresh();
        }

        e.stopPropagation();
    }

    render() {
        return (
            <div>
                <h2>ListBox / Highlight Items</h2>
                <div className="sample-block">
                    <IntegralUIListBoxComponent id="listbox-highlight" ref={this.listRef}
                        customStyle={iuiListBoxHighlightStyle}
                        groups={this.state.groups}
                        items={this.state.items}
                        itemTemplate={this.currentItemTemplate}
                        resourcePath={this.state.currentResourcePath}
                        showGroups={true}
                        size={this.state.ctrlSize}
                        theme={this.state.currentTheme} 
                    ></IntegralUIListBoxComponent>
                    <div className="feature-help">
                        <p><span className="initial-space"></span>In this example, you can highlight items using a checkbox. Whenever item is checked, a vertical green line will appear in front of the item and the label appears in bold.</p>
                        <p><span className="initial-space"></span>For demonstration purposes, root items don't have a check box and you can't highlight them. You can choose other ways to highlight items, like changing their background color or applying a different style on demand.</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default ListBoxHighlight;
