import React, { Component } from 'react';

import { IntegralUIScrollMode, IntegralUITheme } from 'integralui-web/components/integralui.enums.js';

import IntegralUIButtonComponent from 'integralui-web/wrappers/react.integralui.button.js';
import IntegralUINumericComponent from 'integralui-web/wrappers/react.integralui.numeric.js';
import IntegralUIListViewComponent from 'integralui-web/wrappers/react.integralui.listview.js';

import './listview-add-remove.css';

class ListViewAddRemove extends Component {
    constructor(props){
        super(props);

        this.state = {
            ctrlSize: { width: 350, height: 310 },
            currentScrollMode: IntegralUIScrollMode.Horizontal,
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
    }

    //
    // Control Panel
    //

    // Add Button
    onAddClicked(e){
        let newItem = this.createNewItem();

        this.listRef.current.addItem(newItem);
        this.updateContent(newItem);
    }

    // Insert After Button
    onInsertAfterClicked(e){
        if (!this.state.currentSelection)
            this.onAddClicked(e);
        else {
            let newItem = this.createNewItem();

            this.listRef.current.insertItemAfter(newItem, this.state.currentSelection);
            this.updateContent();
        }
    }

    // Insert Before Button
    onInsertBeforeClicked(e){
        if (!this.state.currentSelection)
            this.onAddClicked(e);
        else {
            let newItem = this.createNewItem();

            this.listRef.current.insertItemBefore(newItem, this.state.currentSelection);
            this.updateContent();
        }
    }

    // Insert At Button
    onInsertAtClicked(e){
        let itemCount = this.state.items.length;
        let insertPos = this.state.insertAtValue >= itemCount && itemCount > 0 ? itemCount - 1 : this.state.insertAtValue;

        if (insertPos >= 0 && (insertPos < itemCount || itemCount === 0)){
            let newItem = this.createNewItem();

            this.listRef.current.insertItemAt(newItem, insertPos);
            this.updateContent(newItem);
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
            this.updateContent(newSelItem);
        }
    }

    // Remove At Button
    onRemoveAtClicked(e){
        let itemCount = this.state.items.length;
        let removePos = this.state.removeAtValue;

        if (removePos >= 0 && removePos < itemCount){
            this.listRef.current.removeItemAt(removePos);
            this.updateContent();
        }
    }

    onRemoveAtValueChanged(e){
        this.setState({ removeAtValue: e.detail.value });
    }

    // Clear Button
    onClearClicked(e){
        this.listRef.current.clearItems();
        this.itemCount = 0;

        this.setState({ currentSelection: null });
        this.listRef.current.updateLayout();
    }

    createNewItem(){
        this.itemCount++;

        // Create a new item object
        return { id: this.itemCount, text: "Item " + this.itemCount }
    }

    updateContent(item){
        if (item)
            this.setState({ currentSelection: item });

        this.listRef.current.updateLayout();
    }

    onItemsChanged(){
        this.setState({ isListEmpty: this.listRef.current.props.items.length === 0 });
    }

    onItemSelectionChanged(e){
        this.setState({ currentSelection: e.detail.item });
    }

    render() {
        return (
            <div>
                <h2>ListView / Add-Remove Items from Code</h2>
                <div className="sample-block">
                    <div id="listview-addremove" style={{ display: this.state.items.length > 0 ? 'inline-block' : 'none' }}>
                        <IntegralUIListViewComponent ref={this.listRef}
                            items={this.state.items}
                            resourcePath={this.state.currentResourcePath}
                            scrollMode={this.state.currentScrollMode}
                            selectedItem={this.state.currentSelection}
                            size={this.state.ctrlSize}
                            theme={this.state.currentTheme}
                            itemAdded={() => this.onItemsChanged()}
                            itemRemoved={() => this.onItemsChanged()}
                            clear={() => this.onItemsChanged()}
                            selectionChanged={(e) => this.onItemSelectionChanged(e)}
                        ></IntegralUIListViewComponent>
                    </div>
                    <div className="listview-addremove-empty-block" style={{ display: this.state.isListEmpty ? 'inline-block' : 'none' }}>ListView is empty.</div>
                    <div className="listview-addremove-panel">
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

export default ListViewAddRemove;
