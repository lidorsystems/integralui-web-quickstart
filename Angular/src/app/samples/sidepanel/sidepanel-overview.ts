import { Component } from '@angular/core';

import 'integralui-web/components/integralui.button';
import 'integralui-web/components/integralui.panel';
import 'integralui-web/components/integralui.radiobutton';
import 'integralui-web/components/integralui.radiogroup';
import 'integralui-web/components/integralui.sidepanel';
import { IntegralUIPlacement, IntegralUITheme } from 'integralui-web/components/integralui.enums';

@Component({
    selector: '',
    templateUrl: './sidepanel-overview.html',
    styleUrls: ['./sidepanel-overview.css']
})
export class SidePanelOverview {
    public btnVisibilityText: string = 'Show';
    public ctrlSize: any = { width: 400, height: 200 };
    public currentPlacement: IntegralUIPlacement = IntegralUIPlacement.Left;
    public currentResourcePath: string = 'assets/icons';
    public currentTheme: IntegralUITheme = IntegralUITheme.Office;
    public isAnimationAllowed: boolean = true;
    public isPanelVisible: boolean = false;

    // Events ------------------------------------------------------------------------------------

    onPlacementChecked(e: any){
        switch (e.detail.index){
            case 1: 
                this.currentPlacement = IntegralUIPlacement.Right;
                break;

            case 2: 
                this.currentPlacement = IntegralUIPlacement.Bottom;
                break;

            case 3: 
                this.currentPlacement = IntegralUIPlacement.Left;
                break;

            default: 
                this.currentPlacement = IntegralUIPlacement.Top;
                break;
        }
    }

    onVisibilityClicked(){
        this.isPanelVisible = !this.isPanelVisible;
        this.updateVisibiltyButtonText();
    }

    updateVisibiltyButtonText(){
        this.btnVisibilityText = this.isPanelVisible ? 'Hide' : 'Show';
    }

    onSidePanelVisibleChanged(e: any){
        this.isPanelVisible = e.detail.visible;
        this.updateVisibiltyButtonText();
    }
}
