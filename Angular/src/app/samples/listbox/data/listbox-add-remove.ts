import { Component, ElementRef, ViewChild } from '@angular/core';

import 'integralui-web/components/integralui.button';
import 'integralui-web/components/integralui.numeric';
import 'integralui-web/components/integralui.listbox';
import { IntegralUITheme } from 'integralui-web/components/integralui.enums';

@Component({
    selector: '',
    templateUrl: './listbox-add-remove.html',
    styleUrls: ['./listbox-add-remove.css']
})
export class ListBoxAddRemove {
    @ViewChild('listbox', { static: false }) listbox!: ElementRef;

    public ctrlSize: any = { width: 350, height: 310 }
    public currentResourcePath: string = 'assets/icons';
    public currentTheme: IntegralUITheme = IntegralUITheme.Office;
    public items: Array<any> = [];

    // Control PaneL
    public insertAtValue: number = 0;
    public inlineCtrlSize: any = { width: 90 }
    private itemCount: number = 0;
    public removeAtValue: number = 0;

    // Control Panel -----------------------------------------------------------------------------

    // Add Button
    onAddClicked(){
        let newItem = this.createNewItem();

        this.listbox.nativeElement.addItem(newItem);
        this.updateContent(newItem);
    }

    // Insert After Button
    onInsertAfterClicked(){
        if (!this.listbox.nativeElement.selectedItem)
            this.onAddClicked();
        else {
            let newItem = this.createNewItem();

            this.listbox.nativeElement.insertItemAfter(newItem, this.listbox.nativeElement.selectedItem);
            this.updateContent();
        }
    }

    // Insert Before Button
    onInsertBeforeClicked(){
        if (!this.listbox.nativeElement.selectedItem)
            this.onAddClicked();
        else {
            let newItem = this.createNewItem();

            this.listbox.nativeElement.insertItemBefore(newItem, this.listbox.nativeElement.selectedItem);
            this.updateContent();
        }
    }

    // Insert At Button
    onInsertAtClicked(){
        let itemCount = this.items.length;
        let insertPos = this.insertAtValue >= itemCount && itemCount > 0 ? itemCount - 1 : this.insertAtValue;

        if (insertPos >= 0 && (insertPos < itemCount || itemCount === 0)){
            let newItem = this.createNewItem();

            this.listbox.nativeElement.insertItemAt(newItem, insertPos);
            this.updateContent(newItem);
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
            this.updateContent(newSelItem);
        }
    }

    // Remove At Button
    onRemoveAtClicked(){
        let itemCount = this.items.length;
        let removePos = this.removeAtValue;

        if (removePos >= 0 && removePos < itemCount){
            this.listbox.nativeElement.removeItemAt(removePos);
            this.updateContent();
        }
    }

    onRemoveAtValueChanged(e: any){
        this.removeAtValue = e.detail.value;
    }

    // Clear Button
    onClearClicked(){
        this.listbox.nativeElement.clearItems();
        this.itemCount = 0;

        this.listbox.nativeElement.selectedItem = null;
        this.listbox.nativeElement.updateLayout();
    }

    createNewItem(){
        this.itemCount++;

        // Create a new item object
        return { id: this.itemCount, text: "Item " + this.itemCount }
    }

    updateContent(item?: any){
        if (item)
            this.listbox.nativeElement.selectedItem = item;

        this.listbox.nativeElement.updateLayout();
    }
}
