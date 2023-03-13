import { Component } from '@angular/core';

import 'integralui-web/components/integralui.radiobutton';
import 'integralui-web/components/integralui.radiogroup';
import 'integralui-web/components/integralui.tab';
import 'integralui-web/components/integralui.tabstrip';
import { IntegralUIAnimationType, IntegralUITabScrollMode, IntegralUITheme } from 'integralui-web/components/integralui.enums';

@Component({
    selector: '',
    templateUrl: './tabstrip-scroll-mode.html',
    styleUrls: ['./tabstrip-scroll-mode.css']
})
export class TabStripScrollMode {

    public currentAnimation: IntegralUIAnimationType = IntegralUIAnimationType.Slide;
    public currentResourcePath: string = 'assets/icons';
    public currentScrollMode: IntegralUITabScrollMode = IntegralUITabScrollMode.InBound;
    public currentTheme: IntegralUITheme = IntegralUITheme.Office;
    public ctrlSize: any = { width: 600, height: 300 };
    public tabs: Array<any> = [];

    constructor(){
        for (let i = 1; i <= 15; i++)
            this.tabs.push({ id: i, text: 'Tab' + i });
    }

    onScrollModeChecked(e: any){
        switch (e.detail.index){
            case 1: 
                this.currentScrollMode = IntegralUITabScrollMode.InBound;
                break;

            case 2: 
                this.currentScrollMode = IntegralUITabScrollMode.OutBound;
                break;

            default: 
                this.currentScrollMode = IntegralUITabScrollMode.None;
                break;
        }
    }
}
