import { Component, ElementRef, ViewChild } from '@angular/core';

import 'integralui-web/components/integralui.button';
import 'integralui-web/components/integralui.numeric';
import 'integralui-web/components/integralui.toaster';
import 'integralui-web/components/integralui.treeview';
import { IntegralUITheme, IntegralUIToastType } from 'integralui-web/components/integralui.enums';

@Component({
    selector: '',
    templateUrl: './treeview-add-remove.html',
    styleUrls: ['./treeview-add-remove.css']
})
export class TreeViewAddRemove {
    @ViewChild('treeview', { static: false }) treeview!: ElementRef;
    @ViewChild('toaster', { static: false }) toaster!: ElementRef;

    public ctrlSize: any = { width: 350, height: 310 };
    public currentResourcePath: string = 'assets/icons';
    public currentTheme: IntegralUITheme = IntegralUITheme.Office;
    public items: Array<any> = [];

    public isTreeEmpty: boolean = true;
    public insertAtValue: number = 0;
    public inlineCtrlSize: any = { width: 90 }
    private itemCount: number = 0;
    public removeAtValue: number = 0;

    // Control Panel -----------------------------------------------------------------------------

    // Add Button
    onAddClicked(){
        let newItem = this.createNewItem();

        this.initContent();

        this.treeview.nativeElement.addItem(newItem);
        this.updateSelection(newItem);
    }

    // Add Child Button
    onAddChildClicked(){
        let newItem = this.createNewItem();

        this.initContent();

        this.treeview.nativeElement.addItem(newItem, this.treeview.nativeElement.selectedItem);
    }

    // Insert After Button
    onInsertAfterClicked(){
        if (!this.treeview.nativeElement.selectedItem)
            this.onAddClicked();
        else {
            let newItem = this.createNewItem();

            this.initContent();

            this.treeview.nativeElement.insertItemAfter(newItem, this.treeview.nativeElement.selectedItem);
            this.updateSelection(newItem);
        }
    }

    // Insert Before Button
    onInsertBeforeClicked(){
        if (!this.treeview.nativeElement.selectedItem)
            this.onAddClicked();
        else {
            let newItem = this.createNewItem();

            this.initContent();

            this.treeview.nativeElement.insertItemBefore(newItem, this.treeview.nativeElement.selectedItem);
            this.updateSelection(newItem);
        }
    }

    // Insert At Button
    onInsertAtClicked(){
        let parent = this.treeview.nativeElement.getItemParent(this.treeview.nativeElement.selectedItem);
        let childCount = parent && parent.items ? parent.items.length : this.items.length;

        let insertPos = this.insertAtValue >= childCount && childCount > 0 ? childCount - 1 : this.insertAtValue;

        if (insertPos >= 0 && (insertPos < childCount || childCount === 0)){
            let newItem = this.createNewItem();

            this.treeview.nativeElement.insertItemAt(newItem, insertPos, parent);
            this.updateSelection(newItem);
        }
    }

    onInsertAtValueChanged(e: any){
        this.insertAtValue = e.detail.value;
    }

    // Remove Button
    onRemoveClicked(){
        let selItem = this.treeview.nativeElement.selectedItem;
        if (selItem){
            let newSelItem = this.treeview.nativeElement.getPrevItem(selItem);
            if (!newSelItem)
                newSelItem = this.treeview.nativeElement.getNextItem(selItem);
                
            this.treeview.nativeElement.removeItem(selItem);
            this.updateSelection(newSelItem);
        }
    }

    // Remove At Button
    onRemoveAtClicked(){
        let parent = this.treeview.nativeElement.getItemParent(this.treeview.nativeElement.selectedItem);
        let childCount = parent && parent.items ? parent.items.length : this.items.length;
        let removePos = this.removeAtValue >= childCount && childCount > 0 ? childCount - 1 : this.removeAtValue;

        if (removePos >= 0 && removePos < childCount){
            this.treeview.nativeElement.removeItemAt(removePos, parent);
        }
    }

    onRemoveAtValueChanged(e: any){
        this.removeAtValue = e.detail.value;
    }

    // Clear Button
    onClearClicked(){
        let parent = this.treeview.nativeElement.getItemParent(this.treeview.nativeElement.selectedItem);
        this.treeview.nativeElement.clearItems(parent);

        if (!parent)
            this.itemCount = 0;

        this.updateSelection();
    }

    createNewItem(){
        this.itemCount++;

        // Create a new item object
        return { id: this.itemCount, text: "Item " + this.itemCount }
    }

    // Events ------------------------------------------------------------------------------------
    
    treeClear(e: any){
        this.toaster.nativeElement.show({ text: 'The list is cleared', type: IntegralUIToastType.Success });

        this.updateContent();
    }

    treeItemAdded(e: any){
        if (e.detail.item){
            let message = 'The ' + e.detail.item.text + ' is added to the list';
            message += e.detail.index >= 0 ? ', at position ' + e.detail.index : '';

            this.toaster.nativeElement.show({ text: message, type: IntegralUIToastType.Success });
        }

        this.updateContent();
    }

    treeItemRemoved(e: any){
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
            this.isTreeEmpty = false;
    }

    updateSelection(item?: any){
        this.treeview.nativeElement.selectedItem = item;
    }

    updateContent(item?: any){
        this.isTreeEmpty = this.items.length === 0 ? true : false;;
    }
}
