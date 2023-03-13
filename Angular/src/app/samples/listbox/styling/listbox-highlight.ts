import { Component, ElementRef, ViewChild } from '@angular/core';
import { html } from 'integralui-web/external/lit-element';
import { classMap } from 'integralui-web/external/class-map';

import 'integralui-web/components/integralui.listbox';
import { IntegralUITheme } from 'integralui-web/components/integralui.enums';
import { iuiListBoxHighlightStyle } from './listbox-highlight.style';

@Component({
    selector: '',
    templateUrl: './listbox-highlight.html',
    styleUrls: ['./listbox-highlight.css']
})
export class ListBoxHighlight {

    // ListBox
    @ViewChild('listbox', { static: false }) listbox!: ElementRef;

    public ctrlSize: any = { width: 350, height: 300 }
    public currentResourcePath: string = 'assets/icons';
    public currentTheme: IntegralUITheme = IntegralUITheme.Office;
    public groups: Array<any> = [];
    public items: Array<any> = [];
    public listStyle: any = iuiListBoxHighlightStyle;

    private hightlightStyle: any = {
        borderLeftColor: '#56c756',
        borderLeftWidth: '4px',
        fontWeight: 'bold'
    }

    // Initialization ----------------------------------------------------------------------------

    constructor(){
        this.groups = [
            { name: "Common Controls", expanded: false },
            { name: "Containers" },
            { name: "Menus & Toolbars" },
            { name: "Data", expanded: false },
            { name: "Dialogs" },
            { name: "Printing" },
            { name: "IntegralUI" }
        ];

        this.items = [
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
        ];
    }

    // Templates ---------------------------------------------------------------------------------

    currentItemTemplate = (item: any) => { 
        if (item.type === 'group')
            return html`
                <div>
                    <span class="lbox-ovw-name">${item.name}</span>
                </div>
            `;
        else
            return html`
                <div>
                    <span class=${classMap(this.getCheckBoxClass(item))} @mousedown="${(e: any) => this.checkItem(e, item)}"></span>
                    <span class="lbox-cbox-item-label">${item.text}</span>
                </div>
            `;
    };

    // Methods -----------------------------------------------------------------------------------

    getCheckBoxClass(item: any){
        let cbClass: any = { 'lbox-item-cbox': true };

        if (item.checked)
            cbClass['lbox-item-cbox-checked'] = true;

        return cbClass;
    }

    // Highlight items with custom style
    checkItem(e: any, item: any){
        if (e.which === 1 && item){
            item.checked = item.checked !== undefined ? !item.checked : true;
            item.style = item.checked ? { normal: this.hightlightStyle, hovered: this.hightlightStyle, selected: this.hightlightStyle } : {}

            this.listbox.nativeElement.refresh();
        }

        e.stopPropagation();
    }
}
