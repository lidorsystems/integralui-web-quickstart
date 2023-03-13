import { Component, ElementRef, ViewChild } from '@angular/core';

import 'integralui-web/components/integralui.button';
import 'integralui-web/components/integralui.numeric';
import 'integralui-web/components/integralui.listview';
import { IntegralUIScrollMode, IntegralUITheme } from 'integralui-web/components/integralui.enums';

@Component({
    selector: '',
    templateUrl: './listview-add-remove.html',
    styleUrls: ['./listview-add-remove.css']
})
export class ListViewAddRemove {
    @ViewChild('listview', { static: false }) listview!: ElementRef;

    public ctrlSize: any = { width: 350, height: 310 }
    public currentResourcePath: string = 'assets/icons';
    public currentScrollMode: IntegralUIScrollMode = IntegralUIScrollMode.Horizontal;
    public currentTheme: IntegralUITheme = IntegralUITheme.Office;
    public items: Array<any> = [];

    // Control Panel
    public insertAtValue: number = 0;
    public inlineCtrlSize: any = { width: 90 }
    private itemCount: number = 0;
    public removeAtValue: number = 0;

    // Control Panel -----------------------------------------------------------------------------

    // Add Button
    onAddClicked(){
        let newItem = this.createNewItem();

        this.listview.nativeElement.addItem(newItem);
        this.updateContent(newItem);
    }

    // Insert After Button
    onInsertAfterClicked(){
        if (!this.listview.nativeElement.selectedItem)
            this.onAddClicked();
        else {
            let newItem = this.createNewItem();

            this.listview.nativeElement.insertItemAfter(newItem, this.listview.nativeElement.selectedItem);
            this.updateContent();
        }
    }

    // Insert Before Button
    onInsertBeforeClicked(){
        if (!this.listview.nativeElement.selectedItem)
            this.onAddClicked();
        else {
            let newItem = this.createNewItem();

            this.listview.nativeElement.insertItemBefore(newItem, this.listview.nativeElement.selectedItem);
            this.updateContent();
        }
    }

    // Insert At Button
    onInsertAtClicked(){
        let itemCount = this.items.length;
        let insertPos = this.insertAtValue >= itemCount && itemCount > 0 ? itemCount - 1 : this.insertAtValue;

        if (insertPos >= 0 && (insertPos < itemCount || itemCount === 0)){
            let newItem = this.createNewItem();

            this.listview.nativeElement.insertItemAt(newItem, insertPos);
            this.updateContent(newItem);
        }
    }

    onInsertAtValueChanged(e: any){
        this.insertAtValue = e.detail.value;
    }

    // Remove Button
    onRemoveClicked(){
        let selItem = this.listview.nativeElement.selectedItem;
        if (selItem){
            let newSelItem = this.listview.nativeElement.getPrevItem(selItem);
            if (!newSelItem)
                newSelItem = this.listview.nativeElement.getNextItem(selItem);
                
            this.listview.nativeElement.removeItem(selItem);
            this.updateContent(newSelItem);
        }
    }

    // Remove At Button
    onRemoveAtClicked(){
        let itemCount = this.items.length;
        let removePos = this.removeAtValue;

        if (removePos >= 0 && removePos < itemCount){
            this.listview.nativeElement.removeItemAt(removePos);
            this.updateContent();
        }
    }

    onRemoveAtValueChanged(e: any){
        this.removeAtValue = e.detail.value;
    }

    // Clear Button
    onClearClicked(){
        this.listview.nativeElement.clearItems();
        this.itemCount = 0;

        this.listview.nativeElement.selectedItem = null;
        this.listview.nativeElement.updateLayout();
    }

    createNewItem(){
        this.itemCount++;

        // Create a new item object
        return { id: this.itemCount, text: "Item " + this.itemCount }
    }

    updateContent(item?: any){
        if (item)
            this.listview.nativeElement.selectedItem = item;

        this.listview.nativeElement.updateLayout();
    }
}
