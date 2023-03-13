import { Component, ElementRef, ViewChild } from '@angular/core';

import 'integralui-web/components/integralui.treeview';
import { IntegralUITheme } from 'integralui-web/components/integralui.enums';

@Component({
    selector: '',
    templateUrl: './treeview-highlight.html',
    styleUrls: ['./treeview-highlight.css']
})
export class TreeViewHighlight {

    // TreeView
    @ViewChild('treeview', { static: false }) treeview!: ElementRef;

    public ctrlSize: any = { width: 350, height: 300 }
    public currentResourcePath: string = 'assets/icons';
    public currentTheme: IntegralUITheme = IntegralUITheme.Office;
    public items: Array<any> = [];

    private hightlightStyle: any = {
        borderLeftColor: '#56c756',
        borderLeftWidth: '4px',
        fontWeight: 'bold'
    }

    constructor(){
        this.items = [
            { 
                id: 1, 
                allowCheckBox: false,
                text: "Common Controls",
                expanded: false,
                items: [
                    { id: 11, pid: 1, text: "Button" },
                    { id: 12, pid: 1, text: "CheckBox" },
                    { id: 13, pid: 1, text: "ComboBox" },
                    { id: 14, pid: 1, text: "DateTime Picker" },
                    { id: 15, pid: 1, text: "Label" },
                    { id: 16, pid: 1, text: "ProgressBar" },
                    { id: 17, pid: 1, text: "TextBox" }
                ]
            },
            { 
                id: 2, 
                allowCheckBox: false,
                text: "Containers",
                items: [
                    { id: 21, pid: 2, text: "GroupBox" },
                    { id: 22, pid: 2, text: "Panel" },
                    { id: 23, pid: 2, text: "SplitContainer" },
                    { id: 24, pid: 2, text: "TabControl" }
                ]
            },
            { 
                id: 3, 
                allowCheckBox: false,
                text: "Menus & Toolbars",
                items: [
                    { id: 31, pid: 3, text: "ContextMenu" },
                    { id: 32, pid: 3, text: "Menu" },
                    { id: 33, pid: 3, text: "ToolStrip" }
                ]
            },
            { 
                id: 4, 
                allowCheckBox: false,
                text: "Data",
                expanded: false,
                items: [
                    { id: 41, pid: 4, text: "DataGrid" },
                    { id: 42, pid: 4, text: "DataSet" },
                    { id: 43, pid: 4, text: "ReportViewer" }
                ]
            },
            { 
                id: 5, 
                allowCheckBox: false,
                text: "Dialogs",
                expanded: false,
                items: [
                    { id: 51, pid: 5, text: "ColorDialog" },
                    { id: 52, pid: 5, text: "FontDialog" }
                ]
            },
            { 
                id: 6, 
                allowCheckBox: false,
                text: "Printing",
                expanded: false,
                items: [
                    { id: 61, pid: 6, text: "PrintDialog" },
                    { id: 62, pid: 6, text: "PrintDocument" }
                ]
            },
            { 
                id: 7, 
                allowCheckBox: false,
                text: "IntegralUI",
                items: [
                    { id: 71, pid: 7, text: "Accordion" },
                    { id: 72, pid: 7, text: "CheckBox" },
                    { id: 73, pid: 7, text: "ComboBox" },
                    { id: 74, pid: 7, text: "ContextMenu" },
                    { id: 75, pid: 7, text: "Menu" },
                    { id: 76, pid: 7, text: "SlideBar" },
                    { id: 77, pid: 7, text: "TabStrip" },
                    { id: 78, pid: 7, text: "TreeGrid" },
                    { id: 79, pid: 7, text: "TreeView" }
                ]
            }
        ];
    }

    // Highlight items with custom style
    onItemChecked(e: any){
        e.detail.item.style = e.detail.checked ? {normal: this.hightlightStyle, hovered: this.hightlightStyle, selected: this.hightlightStyle } : {}

        this.treeview.nativeElement.refresh();
    }
}
