import { Component, ElementRef, ViewChild } from '@angular/core';

import 'integralui-web/components/integralui.button';
import 'integralui-web/components/integralui.numeric';
import 'integralui-web/components/integralui.listbox';
import 'integralui-web/components/integralui.toaster';
import { IntegralUITheme, IntegralUIToastType } from 'integralui-web/components/integralui.enums';

@Component({
    selector: '',
    templateUrl: './listbox-add-remove.html',
    styleUrls: ['./listbox-add-remove.css']
})
export class ListBoxAddRemove {
    @ViewChild('listbox', { static: false }) listbox!: ElementRef;
    @ViewChild('toaster', { static: false }) toaster!: ElementRef;

    public ctrlSize: any = { width: 350, height: 310 }
    public currentResourcePath: string = 'assets/icons';
    public currentTheme: IntegralUITheme = IntegralUITheme.Office;
    public items: Array<any> = [];

    // Control PaneL
    public isListEmpty: boolean = true;
    public insertAtValue: number = 0;
    public inlineCtrlSize: any = { width: 90 }
    private itemCount: number = 0;
    public removeAtValue: number = 0;

    // Control Panel -----------------------------------------------------------------------------

    // Add Button
    onAddClicked(){
        let newItem = this.createNewItem();

        this.initContent();

        this.listbox.nativeElement.addItem(newItem);
        this.updateSelection(newItem);
    }

    // Insert After Button
    onInsertAfterClicked(){
        if (!this.listbox.nativeElement.selectedItem)
            this.onAddClicked();
        else {
            let newItem = this.createNewItem();

            this.initContent();

            this.listbox.nativeElement.insertItemAfter(newItem, this.listbox.nativeElement.selectedItem);
            this.updateSelection(newItem);
        }
    }

    // Insert Before Button
    onInsertBeforeClicked(){
        if (!this.listbox.nativeElement.selectedItem)
            this.onAddClicked();
        else {
            let newItem = this.createNewItem();

            this.initContent();

            this.listbox.nativeElement.insertItemBefore(newItem, this.listbox.nativeElement.selectedItem);
            this.updateSelection(newItem);
        }
    }

    // Insert At Button
    onInsertAtClicked(){
        let itemCount = this.items.length;
        let insertPos = this.insertAtValue >= itemCount && itemCount > 0 ? itemCount - 1 : this.insertAtValue;

        if (insertPos >= 0 && (insertPos < itemCount || itemCount === 0)){
            let newItem = this.createNewItem();

            this.initContent();

            this.listbox.nativeElement.insertItemAt(newItem, insertPos);
            this.updateSelection(newItem);
        }
    }

    onInsertAtValueChanged(e: any){
        this.insertAtValue = e.detail.value;
    }

    // Remove Button
    onRemoveClicked(){
        let selItem = this.listbox.nativeElement.selectedItem;
        if (selItem){
            let newSelItem = this.listbox.nativeElement.getPrevItem(selItem);
            if (!newSelItem)
                newSelItem = this.listbox.nativeElement.getNextItem(selItem);
                
            this.listbox.nativeElement.removeItem(selItem);
            this.updateSelection(newSelItem);
        }
    }

    // Remove At Button
    onRemoveAtClicked(){
        let itemCount = this.items.length;
        let removePos = this.removeAtValue;

        if (removePos >= 0 && removePos < itemCount){
            this.listbox.nativeElement.removeItemAt(removePos);
            this.updateSelection(this.items[removePos]);
        }
    }

    onRemoveAtValueChanged(e: any){
        this.removeAtValue = e.detail.value;
    }

    // Clear Button
    async onClearClicked(){
        await this.listbox.nativeElement.clearItems();
        this.itemCount = 0;

        this.updateSelection();
    }

    createNewItem(){
        this.itemCount++;

        // Create a new item object
        return { id: this.itemCount, text: "Item " + this.itemCount }
    }

    // Events ------------------------------------------------------------------------------------
    
    listClear(e: any){
        this.toaster.nativeElement.show({ text: 'The list is cleared', type: IntegralUIToastType.Success });

        this.updateContent();
    }

    listItemAdded(e: any){
        if (e.detail.item){
            let message = 'The ' + e.detail.item.text + ' is added to the list';
            message += e.detail.index >= 0 ? ', at position ' + e.detail.index : '';

            this.toaster.nativeElement.show({ text: message, type: IntegralUIToastType.Success });
        }

        this.updateContent();
    }

    listItemRemoved(e: any){
        if (e.detail.item){
            let message = 'The ' + e.detail.item.text + ' is removed from the list';
            message += e.detail.index >= 0 ? ', at position ' + e.detail.index : '';

            this.toaster.nativeElement.show({ text: message, type: IntegralUIToastType.Success });
        }
        else 
            this.toaster.nativeElement.show({ text: 'EMPTY ITEM', type: IntegralUIToastType.Error });

            this.updateContent();
    }

    // Update ------------------------------------------------------------------------------------

    initContent(){
        if (this.items.length === 0)
            this.isListEmpty = false;
    }

    updateSelection(item?: any){
        this.listbox.nativeElement.selectedItem = item;
    }

    updateContent(item?: any){
        this.isListEmpty = this.items.length === 0 ? true : false;;
    }
}
