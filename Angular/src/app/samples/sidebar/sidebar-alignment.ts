import { Component } from '@angular/core';

import 'integralui-web/components/integralui.panel';
import 'integralui-web/components/integralui.radiobutton';
import 'integralui-web/components/integralui.radiogroup';
import 'integralui-web/components/integralui.sidebar';
import 'integralui-web/components/integralui.tab';
import { IntegralUIPlacement, IntegralUITabAlignment, IntegralUITheme } from 'integralui-web/components/integralui.enums';
import { iuiSideBarAlignmentStyle } from './sidebar-alignment.style';

@Component({
    selector: '',
    templateUrl: './sidebar-alignment.html',
    styleUrls: ['./sidebar-alignment.css']
})
export class SideBarAlignment {
    public ctrlSize: any = { width: 400 };
    public currentPlacement: IntegralUIPlacement = IntegralUIPlacement.Right;
    public currentResourcePath: string = 'assets/icons';
    public currentSelection: any = null;
    public currentTabAlignment: IntegralUITabAlignment = IntegralUITabAlignment.Middle;
    public currentTheme: IntegralUITheme = IntegralUITheme.Office;
    public customStyle: any = iuiSideBarAlignmentStyle;
    public isAnimationAllowed: boolean = true;
    public data: Array<any> = [];

    private alignmentValues: Array<string> = [IntegralUITabAlignment.TopLeft, IntegralUITabAlignment.Middle, IntegralUITabAlignment.BottomRight];

    constructor(){
        this.data = [
            { 
                id: 1,
                icon: 'tab-icon library',
                text: 'Books',
                body: 'Curabitur pretium tincidunt lacus. Nulla gravida orci a odio. Nullam varius, turpis et commodo pharetra, est eros bibendum elit, nec luctus magna felis sollicitudin mauris. Integer in mauris eu nibh euismod gravida. Duis ac tellus et risus vulputate vehicula. Donec lobortis risus a elit. Etiam tempor.'
            },
            { 
                id: 2,
                icon: 'tab-icon album',
                text: 'Music',
                body: 'Pellentesque malesuada nulla a mi. Duis sapien sem, aliquet nec, commodo eget, consequat quis, neque. Aliquam faucibus, elit ut dictum aliquet, felis nisl adipiscing sapien, sed malesuada diam lacus eget erat. Cras mollis scelerisque nunc. Nullam arcu. Aliquam consequat.'
            },
            { 
                id: 3,
                icon: 'tab-icon star-empty',
                text: 'Favorites',
                body: 'Fusce convallis, mauris imperdiet gravida bibendum, nisl turpis suscipit mauris, sed placerat ipsum urna sed risus. In convallis tellus a mauris. Curabitur non elit ut libero tristique sodales. Mauris a lacus. Donec mattis semper leo. In hac habitasse platea dictumst.'
            }
        ];
    } 

    getAlignmentValue(index: number){
        return index >= 0 ? this.alignmentValues[index] : IntegralUITabAlignment.TopLeft;
    }

    onAlignmentChecked(e: any){
        this.currentTabAlignment = this.getAlignmentValue(e.detail.index);
    }

}
