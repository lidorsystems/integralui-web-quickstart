import { Component } from '@angular/core';

import 'integralui-web/components/integralui.radiobutton';
import 'integralui-web/components/integralui.radiogroup';
import 'integralui-web/components/integralui.tab';
import 'integralui-web/components/integralui.tabstrip';
import { IntegralUIAnimationType, IntegralUITabStripPlacement, IntegralUITheme } from 'integralui-web/components/integralui.enums';

@Component({
    selector: '',
    templateUrl: './tabstrip-placement.html',
    styleUrls: ['./tabstrip-placement.css']
})
export class TabStripPlacement {

    public currentAnimation: IntegralUIAnimationType = IntegralUIAnimationType.Slide;
    public currentPlacement: IntegralUITabStripPlacement = IntegralUITabStripPlacement.Top;
    public currentResourcePath: string = 'assets/icons';
    public currentTheme: IntegralUITheme = IntegralUITheme.Office;
    public ctrlSize: any = { height: 300 };
    public tabs: Array<any> = [];

    constructor(){
        this.tabs = [
            { 
                id: 1,
                text: 'JavaScript',
                body: 'Aliquam faucibus, elit ut dictum aliquet, felis nisl adipiscing sapien, sed malesuada diam lacus eget erat. Cras mollis scelerisque nunc. Nullam arcu. Aliquam consequat.'
            },
            { 
                id: 2,
                text: 'Angular',
                body: 'Nullam varius, turpis et commodo pharetra, est eros bibendum elit, nec luctus magna felis sollicitudin mauris. Integer in mauris eu nibh euismod gravida. Duis ac tellus et risus vulputate vehicula. Donec lobortis risus a elit. Etiam tempor.'
            },
            { 
                id: 3,
                text: 'React',
                body: 'In convallis tellus a mauris. Curabitur non elit ut libero tristique sodales. Mauris a lacus. Donec mattis semper leo. In hac habitasse platea dictumst.'
            },
            { 
                id: 4,
                text: 'Vue',
                body: 'Nullam arcu. Aliquam consequat. Integer in mauris eu nibh euismod gravida. Duis ac tellus et risus vulputate vehicula.'
            }
        ];
    }

    onPlacementChecked(e: any){
        switch (e.detail.index){
            case 1: 
                this.currentPlacement = IntegralUITabStripPlacement.Right;
                break;

            case 2: 
                this.currentPlacement = IntegralUITabStripPlacement.Bottom;
                break;

            case 3: 
                this.currentPlacement = IntegralUITabStripPlacement.Left;
                break;

            default: 
                this.currentPlacement = IntegralUITabStripPlacement.Top;
                break;
        }
    }
}
