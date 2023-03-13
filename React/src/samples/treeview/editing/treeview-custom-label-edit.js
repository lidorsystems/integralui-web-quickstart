import React, { Component } from 'react';
import { html } from 'integralui-web/external/lit-element.js';

import { IntegralUITheme } from 'integralui-web/components/integralui.enums.js';
import IntegralUITreeViewComponent from 'integralui-web/wrappers/react.integralui.treeview.js';
import { iuiTreeViewCustomLabelEditStyle } from './treeview-custom-label-edit.style.js';

class TreeViewCustomLabelEdit extends Component {
    constructor(props){
        super(props);

        this.state = {
            ctrlSize: { width: 350, height: 310 },
            currentResourcePath: '../../integralui-web/icons',
            currentSelection: null,
            currentTheme: IntegralUITheme.Office,
            items: [
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
            ]
        }

        // Editing
        this.editItem = null;
        this.isEditActive = false;
        this.originalText = '';

        this.treeRef = React.createRef();
    }

    // Templates ---------------------------------------------------------------------------------

    currentItemTemplate = (item) => { 
        if (item === this.editItem)
            return html`
                <input type="text" .value="${item.text}" @keydown="${(e) => this.editorKeyDown(e)}" @focus="${(e) => this.selectContent(e)}" @blur="${() => this.editorLostFocus()}" />
            `;

        return null;
    };

    currentItemHoverTemplate = (item) => { 
        return html`
            <div class="trw-cle-toolbar">
                <span class="trw-cle-toolitem-button item-button-edit" @click="${() => this.showEditor(item)}"></span>
            </div>
        `;
    }

    // Editing -----------------------------------------------------------------------------------

    selectContent(e){
        if (e.target && e.target.value)
            e.target.setSelectionRange(0, e.target.value.length);
    }

    showEditor(item){
        let self = this;

        self.editItem = item;
        self.isEditActive = true;
        self.originalText = item.text;
        self.treeRef.current.refresh();

        setTimeout(function(){
            let inputElem = self.treeRef.current.getElemRef().querySelector('input');
            if (inputElem)
                inputElem.focus();
        }, 1);
    }

    closeEditor(){
        this.editItem = null;
        this.originalText = '';
        this.treeRef.current.updateLayout();
    }

    editorKeyDown(e){
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

    onItemSelectionChanged(e){
        this.setState({ currentSelection: e.detail.item });
    }

    render() {

        return (
            <div>
                <h2>TreeView / Custom Label Edit</h2>
                <div className="sample-block">
                    <IntegralUITreeViewComponent id="treeview-custom-label-edit" ref={this.treeRef}
                        allowAnimation={this.state.isAnimationAllowed}
                        customStyle={iuiTreeViewCustomLabelEditStyle}
                        itemHoverTemplate={this.currentItemHoverTemplate}
                        items={this.state.items}
                        itemTemplate={this.currentItemTemplate}
                        resourcePath={this.state.currentResourcePath}
                        selectedItem={this.state.currentSelection}
                        size={this.state.ctrlSize}
                        theme={this.state.currentTheme} 
                        selectionChanged={(e) => this.onItemSelectionChanged(e)}
                    ></IntegralUITreeViewComponent>
                    <div className="feature-help">
                        <p><span className="initial-space"></span>In this sample you can edit item label in TreeView component, by click on edit button which appears when item is hovered.</p>
                        <p><span className="initial-space"></span>When edit button is clicked, the text editor will appear and you can change the item label. To confirm any changes in the editor, press the ENTER key. If you press the ESCAPE key or click anywhere outside of the editor, editing is cancelled.</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default TreeViewCustomLabelEdit;
