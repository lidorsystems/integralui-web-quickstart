import { Component } from '@angular/core';

import 'integralui-web/components/integralui.panel';
import 'integralui-web/components/integralui.radiobutton';
import 'integralui-web/components/integralui.radiogroup';
import 'integralui-web/components/integralui.sidebar';
import 'integralui-web/components/integralui.tab';
import { IntegralUIPlacement, IntegralUITheme } from 'integralui-web/components/integralui.enums';
import { iuiSideBarPlacementStyle } from './sidebar-placement.style';

@Component({
    selector: '',
    templateUrl: './sidebar-placement.html',
    styleUrls: ['./sidebar-placement.css']
})
export class SideBarPlacement {
    public ctrlSize: any = { width: 400, height: 150 }
    public currentPlacement: IntegralUIPlacement = IntegralUIPlacement.Left;
    public currentResourcePath: string = 'assets/icons';
    public currentTheme: IntegralUITheme = IntegralUITheme.Office;
    public customStyle: any = iuiSideBarPlacementStyle;
    public isAnimationAllowed: boolean = true;
    public data: Array<any> = [];

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
}
