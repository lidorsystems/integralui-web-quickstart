import { Component } from '@angular/core';

import 'integralui-web/components/integralui.button';
import 'integralui-web/components/integralui.numeric';
import 'integralui-web/components/integralui.tab';
import 'integralui-web/components/integralui.tabstrip';
import { IntegralUIAnimationType, IntegralUITabScrollMode, IntegralUITheme } from 'integralui-web/components/integralui.enums';

@Component({
    selector: '',
    templateUrl: './tabstrip-add-remove.html',
    styleUrls: ['./tabstrip-add-remove.css']
})
export class TabStripAddRemove {

    public currentAnimation: IntegralUIAnimationType = IntegralUIAnimationType.Fade;
    public currentResourcePath: string = 'assets/icons';
    public currentScrollMode: IntegralUITabScrollMode = IntegralUITabScrollMode.InBound;
    public currentSelection: any = null;
    public currentTheme: IntegralUITheme = IntegralUITheme.Office;
    public ctrlSize: any = { height: 300 };
    public tabs: Array<any> = [];

    public insertAtValue: number = 0;
    public inlineCtrlSize: any = { width: 90 }
    public removeAtValue: number = 0;

    //
    // Control Panel
    //

    // Add Button
    onAddClicked(){
        let newTab = this.createNewTab();

        this.tabs.push(newTab);
        this.currentSelection = newTab;
    }

    // Insert After Button
    onInsertAfterClicked(){
        let selIndex = this.tabs.indexOf(this.currentSelection);

        if (selIndex < 0)
            this.onAddClicked();
        else {
            let newTab = this.createNewTab();

            this.tabs.splice(selIndex + 1, 0, newTab);
            this.currentSelection = newTab;
        }
    }

    // Insert Before Button
    onInsertBeforeClicked(){
        let selIndex = this.tabs.indexOf(this.currentSelection);

        if (selIndex < 0)
            this.onAddClicked();
        else {
            let newTab = this.createNewTab();

            this.tabs.splice(selIndex, 0, newTab);
            this.currentSelection = newTab;
        }
    }

    // Insert At Button
    onInsertAtClicked(){
        if (this.insertAtValue >= this.tabs.length)
            this.onAddClicked();
        else if (this.insertAtValue >= 0 && this.insertAtValue < this.tabs.length){
            let newTab = this.createNewTab();

            this.tabs.splice(this.insertAtValue, 0, newTab);
            this.currentSelection = newTab;
        }
    }

    // Remove Button
    onRemoveClicked(){
        let selIndex = this.tabs.indexOf(this.currentSelection);

        if (selIndex >= 0){
            this.tabs.splice(selIndex, 1);
            this.currentSelection = selIndex > 0 ? this.tabs[selIndex - 1] : null;
        }
    }

    // Remove At Button
    onRemoveAtClicked(){
        if (this.removeAtValue >= this.tabs.length)
            this.onRemoveClicked();
        else if (this.removeAtValue >= 0 && this.removeAtValue < this.tabs.length){
            this.tabs.splice(this.removeAtValue, 1);
            this.currentSelection = this.removeAtValue > 0 ? this.tabs[this.removeAtValue - 1] : null;
        }
    }

    // Clear Button
    onClearClicked(){
        this.tabs.length = 0;
        this.currentSelection = null;
    }

    //
    // Create Tabs Methods
    //

    createNewTab(){
        // Create a new tab object
        return { id: this.tabs.length + 1, text: "Tab " + (this.tabs.length + 1).toString() }
    }

}
