import { Component, ElementRef, ViewChild } from '@angular/core';

import 'integralui-web/components/integralui.treeview';
import { IntegralUITheme } from 'integralui-web/components/integralui.enums';
import { iuiTreeViewToolboxStyle } from './treeview-toolbox.style';

@Component({
    selector: '',
    templateUrl: './treeview-toolbox.html',
    styleUrls: ['./treeview-toolbox.css']
})
export class TreeViewToolbox {

    // TreeView
    @ViewChild('treeview', { static: false }) treeview!: ElementRef;

    public ctrlSize: any = { width: 350, height: 300 }
    public currentResourcePath: string = 'assets/icons';
    public currentTheme: IntegralUITheme = IntegralUITheme.Office;
    public items: Array<any> = [];
    public treeStyle: any = iuiTreeViewToolboxStyle;


    constructor(){
        this.items = [
            { 
                id: 1, 
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
                text: "Menus & Toolbars",
                items: [
                    { id: 31, pid: 3, text: "ContextMenu" },
                    { id: 32, pid: 3, text: "Menu" },
                    { id: 33, pid: 3, text: "ToolStrip" }
                ]
            },
            { 
                id: 4, 
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
                text: "Dialogs",
                expanded: false,
                items: [
                    { id: 51, pid: 5, text: "ColorDialog" },
                    { id: 52, pid: 5, text: "FontDialog" }
                ]
            },
            { 
                id: 6, 
                text: "Printing",
                expanded: false,
                items: [
                    { id: 61, pid: 6, text: "PrintDialog" },
                    { id: 62, pid: 6, text: "PrintDocument" }
                ]
            },
            { 
                id: 7, 
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

        this.applyGroupStyles();
    }

    onBeforeSelect(e: any){
        // Clear selection from any group item
        this.items.forEach(item => item.selected = false);
    }

    onAfterSelect(e: any){
        if (e.detail.item){
            // When child item is selected, select also its parent group
            let parent = this.treeview.nativeElement.getItemParent(e.detail.item);
            if (parent)
                parent.selected = true;
        }
    }

    applyGroupStyles(){
        let groupStyle = {
            normal: {
                background: '#dedede',
                borderColor: '#dedede',
                fontWeight: 'bold'
            },
            hovered: {
                background: '#dedede',
                borderColor: '#dedede',
                fontWeight: 'bold'
            },
            selected: {
                background: '#4d82b0',
                borderColor: '#4d82b0',
                color: 'white',
                fontWeight: 'bold'
            }
        }

        this.items.forEach(item => item.style = groupStyle);
    }
}
