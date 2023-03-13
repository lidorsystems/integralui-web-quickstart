import { Component, ElementRef, ViewChild } from '@angular/core';
import { html } from 'integralui-web/external/lit-element';

import 'integralui-web/components/integralui.treeview';
import { IntegralUITheme } from 'integralui-web/components/integralui.enums';
import { iuiTreeViewCustomLabelEditStyle } from './treeview-custom-label-edit.style';

@Component({
    selector: '',
    templateUrl: './treeview-custom-label-edit.html',
    styleUrls: ['./treeview-custom-label-edit.css']
})
export class TreeViewCustomLabelEdit {

    // TreeView
    @ViewChild('treeview', { static: false }) treeview!: ElementRef;

    public ctrlSize: any = { width: 350, height: 300 };
    public currentResourcePath: string = 'assets/icons';
    public currentTheme: IntegralUITheme = IntegralUITheme.Office;
    public items: Array<any> = [];
    public treeStyle: any = iuiTreeViewCustomLabelEditStyle;

    // Editing
    private isEditActive: boolean = false;
    private editItem: any = null;
    private originalText: string = '';

    constructor(){
        this.items = [
            { 
                id: 1,
                text: "Favorites",
                items: [
                    { id: 11, pid: 1, text: "Desktop" },
                    { id: 12, pid: 1, text: "Downloads" }
                ]
            },
            { 
                id: 2,
                text: "Libraries",
                expanded: false,
                items: [
                    { 
                        id: 21, 
                        pid: 2, 
                        text: "Documents", 
                        expanded: false,
                        items: [
                            { id: 211, pid: 21, text: "My Documents" },
                            { id: 212, pid: 21, text: "Public Documents" }
                        ]
                    },
                    { id: 22, pid: 2, text: "Music", icon: "music" },
                    { id: 23, pid: 2, text: "Pictures", icon: "pictures" },
                    { id: 24, pid: 2, text: "Videos", icon: "videos" }
                ]
            },
            { 
                id: 3,
                text: "Computer",
                checkState: "checked",
                items: [
                    { id: 31, pid: 3, text: "Local Disk (C:)" },
                    { id: 32, pid: 3, text: "Storage (D:)" }
                ]
            },
            { id: 4, text: "Network", icon: "network" },
            { id: 5, text: "Recycle Bin", icon: "recycle" }
        ];
    }

    // Templates ---------------------------------------------------------------------------------

    public currentItemTemplate = (item: any) => { 
        if (item === this.editItem)
            return html`
                <input type="text" .value="${item.text}" @keydown="${(e: any) => this.editorKeyDown(e)}" @focus="${(e: any) => this.selectContent(e)}" @blur="${() => this.editorLostFocus()}" />
            `;

        return null;
    };

    public currentItemHoverTemplate = (item: any) => { 
        return html`
            <div class="trw-cle-toolbar">
                <span class="trw-cle-toolitem-button item-button-edit" @click="${() => this.showEditor(item)}"></span>
            </div>
        `;
    }

    // Editing -----------------------------------------------------------------------------------

    selectContent(e: any){
        if (e.target && e.target.value)
            e.target.setSelectionRange(0, e.target.value.length);
    }

    showEditor(item: any){
        let self = this;

        self.originalText = item.text;
        self.isEditActive = true;
        self.editItem = item;

        self.treeview.nativeElement.refresh();

        setTimeout(function(){
            let inputElem = self.treeview.nativeElement.getElemRef().querySelector('input');
            if (inputElem)
                inputElem.focus();
        }, 1);
    }

    closeEditor(){
        this.editItem = null;
        this.originalText = '';

        this.treeview.nativeElement.updateLayout();
    }

    editorKeyDown(e: any){
        if (this.editItem){
            switch (e.keyCode){
                case 13: // ENTER
                    this.editItem.text = e.target.value;

                    this.closeEditor();
                    break;
                    
                case 27: // ESCAPE
                    this.editItem.text = this.originalText;
                    this.closeEditor();
                    break;
            }
        }
    }

    editorLostFocus(){
        if (this.editItem)
            this.editItem.text = this.originalText;

        this.closeEditor();
    }
}
