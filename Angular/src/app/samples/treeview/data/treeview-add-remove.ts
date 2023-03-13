import { Component, ElementRef, ViewChild } from '@angular/core';

import 'integralui-web/components/integralui.button';
import 'integralui-web/components/integralui.numeric';
import 'integralui-web/components/integralui.treeview';
import { IntegralUITheme } from 'integralui-web/components/integralui.enums';

@Component({
    selector: '',
    templateUrl: './treeview-add-remove.html',
    styleUrls: ['./treeview-add-remove.css']
})
export class TreeViewAddRemove {
    @ViewChild('treeview', { static: false }) treeview!: ElementRef;

    public ctrlSize: any = { width: 350, height: 310 };
    public currentResourcePath: string = 'assets/icons';
    public currentTheme: IntegralUITheme = IntegralUITheme.Office;
    public items: Array<any> = [];

    public insertAtValue: number = 0;
    public inlineCtrlSize: any = { width: 90 }
    private itemCount: number = 0;
    public removeAtValue: number = 0;

    // Control Panel -----------------------------------------------------------------------------

    // Add Button
    onAddClicked(){
        let newItem = this.createNewItem();

        this.treeview.nativeElement.addItem(newItem);
        this.updateContent(newItem);
    }

    // Add Child Button
    onAddChildClicked(){
        let newItem = this.createNewItem();

        this.treeview.nativeElement.addItem(newItem, this.treeview.nativeElement.selectedItem);
        this.updateContent(newItem);
    }

    // Insert After Button
    onInsertAfterClicked(){
        if (!this.treeview.nativeElement.selectedItem)
            this.onAddClicked();
        else {
            let newItem = this.createNewItem();

            this.treeview.nativeElement.insertItemAfter(newItem, this.treeview.nativeElement.selectedItem);
            this.updateContent();
        }
    }

    // Insert Before Button
    onInsertBeforeClicked(){
        if (!this.treeview.nativeElement.selectedItem)
            this.onAddClicked();
        else {
            let newItem = this.createNewItem();

            this.treeview.nativeElement.insertItemBefore(newItem, this.treeview.nativeElement.selectedItem);
            this.updateContent();
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
            this.updateContent(newItem);
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
            this.updateContent(newSelItem);
        }
    }

    // Remove At Button
    onRemoveAtClicked(){
        let parent = this.treeview.nativeElement.getItemParent(this.treeview.nativeElement.selectedItem);
        let childCount = parent && parent.items ? parent.items.length : this.items.length;
        let removePos = this.removeAtValue >= childCount && childCount > 0 ? childCount - 1 : this.removeAtValue;

        if (removePos >= 0 && removePos < childCount){
            this.treeview.nativeElement.removeItemAt(removePos, parent);
            this.updateContent();
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

        this.treeview.nativeElement.selectedItem = null;
        this.treeview.nativeElement.updateLayout();
    }

    createNewItem(){
        this.itemCount++;

        // Create a new item object
        return { id: this.itemCount, text: "Item " + this.itemCount }
    }

    updateContent(item?: any){
        if (item)
            this.treeview.nativeElement.selectedItem = item;

        this.treeview.nativeElement.updateLayout();
    }
}
