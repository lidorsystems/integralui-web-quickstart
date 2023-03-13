import { Component, ElementRef, ViewChild } from '@angular/core';

import 'integralui-web/components/integralui.select';
import 'integralui-web/components/integralui.tab';
import 'integralui-web/components/integralui.tabstrip';
import { IntegralUIAnimationType, IntegralUITabScrollMode, IntegralUITheme } from 'integralui-web/components/integralui.enums';

@Component({
    selector: '',
    templateUrl: './tabstrip-scroll-to.html',
    styleUrls: ['./tabstrip-scroll-to.css']
})
export class TabStripScrollTo {
    @ViewChild('tabstrip', { static: false }) tabstrip!: ElementRef;

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

    scrollToChanged(e: any){
        let tab = this.tabs[e.detail.index];
        this.tabstrip.nativeElement.scrollTo(tab);
        this.tabstrip.nativeElement.selectedTab = tab;
    }
}
