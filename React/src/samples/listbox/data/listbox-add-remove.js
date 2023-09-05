import React, { Component } from 'react';

import { IntegralUITheme, IntegralUIToastType } from 'integralui-web/components/integralui.enums.js';

import IntegralUIButtonComponent from 'integralui-web/wrappers/react.integralui.button.js';
import IntegralUINumericComponent from 'integralui-web/wrappers/react.integralui.numeric.js';
import IntegralUIListBoxComponent from 'integralui-web/wrappers/react.integralui.listbox.js';
import IntegralUIToasterComponent from 'integralui-web/wrappers/react.integralui.toaster.js';

import './listbox-add-remove.css';

class ListBoxAddRemove extends Component {
    constructor(props){
        super(props);

        this.state = {
            ctrlSize: { width: 350, height: 310 },
            currentResourcePath: '../../integralui-web/icons',
            currentSelection: null,
            currentTheme: IntegralUITheme.Office,
            isListEmpty: true,
            items: [],
            // Control Panel
            insertAtValue: 0,
            inlineCtrlSize: { width: 90 },
            removeAtValue: 0
        }

        this.itemCount = 0;
        this.listRef = React.createRef();
        this.toasterRef = React.createRef();
    }

    //
    // Control Panel
    //

    // Add Button
    onAddClicked(e){
        let newItem = this.createNewItem();

        this.initContent();

        this.listRef.current.addItem(newItem);
        this.updateSelection(newItem);
    }

    // Insert After Button
    onInsertAfterClicked(e){
        if (!this.state.currentSelection)
            this.onAddClicked(e);
        else {
            let newItem = this.createNewItem();

            this.initContent();

            this.listRef.current.insertItemAfter(newItem, this.state.currentSelection);
            this.updateSelection(newItem);
        }
    }

    // Insert Before Button
    onInsertBeforeClicked(e){
        if (!this.state.currentSelection)
            this.onAddClicked(e);
        else {
            let newItem = this.createNewItem();

            this.initContent();

            this.listRef.current.insertItemBefore(newItem, this.state.currentSelection);
            this.updateSelection(newItem);
        }
    }

    // Insert At Button
    onInsertAtClicked(e){
        let itemCount = this.state.items.length;
        let insertPos = this.state.insertAtValue >= itemCount && itemCount > 0 ? itemCount - 1 : this.state.insertAtValue;

        if (insertPos >= 0 && (insertPos < itemCount || itemCount === 0)){
            let newItem = this.createNewItem();

            this.initContent();

            this.listRef.current.insertItemAt(newItem, insertPos);
            this.updateSelection(newItem);
        }
    }

    onInsertAtValueChanged(e){
        this.setState({ insertAtValue: e.detail.value });
    }

    // Remove Button
    onRemoveClicked(e){
        let selItem = this.state.currentSelection;
        if (selItem){
            let newSelItem = this.listRef.current.getPrevItem(selItem);
            if (!newSelItem)
                newSelItem = this.listRef.current.getNextItem(selItem);
                
            this.listRef.current.removeItem(selItem);
            this.updateSelection(newSelItem);
        }
    }

    // Remove At Button
    async onRemoveAtClicked(e){
        let itemCount = this.state.items.length;
        let removePos = this.state.removeAtValue;

        if (removePos >= 0 && removePos < itemCount){
            await this.listRef.current.removeItemAt(removePos);
            this.updateSelection(this.state.items[removePos]);
        }
    }

    onRemoveAtValueChanged(e){
        this.setState({ removeAtValue: e.detail.value });
    }

    // Clear Button
    async onClearClicked(e){
        await this.listRef.current.clearItems();
        this.itemCount = 0;

        this.setState({ currentSelection: null });
        this.updateSelection();
    }

    createNewItem(){
        this.itemCount++;

        // Create a new item object
        return { id: this.itemCount, text: "Item " + this.itemCount }
    }

    // Events ------------------------------------------------------------------------------------

    listClear(){
        this.toasterRef.current.show({ text: 'The list is cleared', type: IntegralUIToastType.Success });

        this.updateContent();
    }

    listItemAdded(e){
        if (e.detail.item){
            let message = 'The ' + e.detail.item.text + ' is added to the list';
            message += e.detail.index >= 0 ? ', at position ' + e.detail.index : '';

            this.toasterRef.current.show({ text: message, type: IntegralUIToastType.Success });
        }

        this.updateContent();
    }

    listItemRemoved(e){
        if (e.detail.item){
            let message = 'The ' + e.detail.item.text + ' is removed from the list';
            message += e.detail.index >= 0 ? ', at position ' + e.detail.index : '';

            this.toasterRef.current.show({ text: message, type: IntegralUIToastType.Success });
        }
        else 
            this.toasterRef.current.show({ text: 'EMPTY ITEM', type: IntegralUIToastType.Error });

        this.updateContent();
    }

    listSelectionChanged(e){
        this.setState({ currentSelection: e.detail.item });
    }

    // Update ------------------------------------------------------------------------------------

    initContent(){
        if (this.state.items.length === 0)
            this.setState({ isListEmpty: false });
    }

    updateSelection(item){
        this.setState({ currentSelection: item });
    }

    updateContent(){
        this.setState({ isListEmpty: this.listRef.current.props.items.length === 0 });
    }

    render() {
        return (
            <div>
                <h2>ListBox / Add-Remove Items from Code</h2>
                <div className="sample-block">
                    <div id="listbox-addremove" style={{ display: !this.state.isListEmpty ? 'inline-block' : 'none' }}>
                        <IntegralUIListBoxComponent ref={this.listRef}
                            items={this.state.items}
                            resourcePath={this.state.currentResourcePath}
                            selectedItem={this.state.currentSelection}
                            size={this.state.ctrlSize}
                            theme={this.state.currentTheme}
                            clear={() => this.listClear()}
                            itemAdded={(e) => this.listItemAdded(e)}
                            itemRemoved={(e) => this.listItemRemoved(e)}
                            selectionChanged={(e) => this.listSelectionChanged(e)}
                        ></IntegralUIListBoxComponent>
                    </div>
                    <div className="listbox-addremove-empty-block" style={{ display: this.state.isListEmpty ? 'inline-block' : 'none' }}>ListBox is empty.</div>
                    <div className="listbox-addremove-panel">
                        <IntegralUIButtonComponent allowAnimation={this.state.isAnimationAllowed} theme={this.state.currentTheme} onClick={() => this.onAddClicked(0)}>Add</IntegralUIButtonComponent>
                        <IntegralUIButtonComponent allowAnimation={this.state.isAnimationAllowed} theme={this.state.currentTheme} onClick={() => this.onInsertAfterClicked(0)}>Insert After</IntegralUIButtonComponent>
                        <IntegralUIButtonComponent allowAnimation={this.state.isAnimationAllowed} theme={this.state.currentTheme} onClick={() => this.onInsertBeforeClicked(0)}>Insert Before</IntegralUIButtonComponent>
                        <div className="inline-block">
                            <IntegralUIButtonComponent allowAnimation={this.state.isAnimationAllowed} size={this.state.inlineCtrlSize} theme={this.state.currentTheme} onClick={() => this.onInsertAtClicked(0)}>Insert At</IntegralUIButtonComponent><IntegralUINumericComponent resourcePath={this.state.currentResourcePath} size={this.state.inlineCtrlSize} value={this.state.insertAtValue} theme={this.state.currentTheme} valueChanged={(e) => this.onInsertAtValueChanged(e)}></IntegralUINumericComponent>
                        </div>
                        <IntegralUIButtonComponent allowAnimation={this.state.isAnimationAllowed} theme={this.state.currentTheme} onClick={() => this.onRemoveClicked(0)}>Remove</IntegralUIButtonComponent>
                        <div className="inline-block">
                            <IntegralUIButtonComponent allowAnimation={this.state.isAnimationAllowed} size={this.state.inlineCtrlSize} theme={this.state.currentTheme} onClick={() => this.onRemoveAtClicked(0)}>Remove At</IntegralUIButtonComponent><IntegralUINumericComponent resourcePath={this.state.currentResourcePath} size={this.state.inlineCtrlSize} value={this.state.removeAtValue} theme={this.state.currentTheme} valueChanged={(e) => this.onRemoveAtValueChanged(e)}></IntegralUINumericComponent>
                        </div>
                        <IntegralUIButtonComponent allowAnimation={this.state.isAnimationAllowed} theme={this.state.currentTheme} onClick={() => this.onClearClicked(0)}>Clear</IntegralUIButtonComponent>
                    </div>
                    <IntegralUIToasterComponent duration={3000} ref={this.toasterRef}></IntegralUIToasterComponent>
                    <div className="feature-help">
                        <p><span className="initial-space"></span>An example that demonstrates adding and removal od items manually from code using buttons.</p>
                        <p><span className="initial-space"></span>You can add items at the end, before or after a specific item (in this case the selected item) or at specific position.</p>
                        <p><span className="initial-space"></span>In similar way, you can remove a specific item using its object reference or its position in the item list. There is an option to remove all items from the list.</p>
                        <p><span className="initial-space"></span>The following methods are used:</p>
                        <ul className="feature-points">
                            <li><span className="code-object">addItem</span> - adds the item to the end of the parent list</li>
                            <li><span className="code-object">clearItems</span> - removes all child items from specified parent</li>
                            <li><span className="code-object">insertItemAfter</span> - inserts the item after the specified item</li>
                            <li><span className="code-object">insertItemAt</span> - inserts the item at specified position within the parent list</li>
                            <li><span className="code-object">insertItemBefore</span> - inserts the item before the specified item</li>
                            <li><span className="code-object">removeItem</span> - removes the item from the list</li>
                            <li><span className="code-object">removeItemAt</span> - removes the item at specified position from the list</li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

export default ListBoxAddRemove;
