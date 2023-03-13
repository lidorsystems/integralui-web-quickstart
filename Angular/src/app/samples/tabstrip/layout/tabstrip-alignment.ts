import { Component } from '@angular/core';

import 'integralui-web/components/integralui.radiobutton';
import 'integralui-web/components/integralui.radiogroup';
import 'integralui-web/components/integralui.tab';
import 'integralui-web/components/integralui.tabstrip';
import { IntegralUIAnimationType, IntegralUITabAlignment, IntegralUITheme } from 'integralui-web/components/integralui.enums';

@Component({
    selector: '',
    templateUrl: './tabstrip-alignment.html',
    styleUrls: ['./tabstrip-alignment.css']
})
export class TabStripTabAlignment {

    public currentAlignment: IntegralUITabAlignment = IntegralUITabAlignment.TopLeft;
    public currentAnimation: IntegralUIAnimationType = IntegralUIAnimationType.Slide;
    public currentResourcePath: string = 'assets/icons';
    public currentTheme: IntegralUITheme = IntegralUITheme.Office;
    public ctrlSize: any = { height: 200 };
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

    onAlignmentChecked(e: any){
        switch (e.detail.index){
            case 1:
                this.currentAlignment = IntegralUITabAlignment.Middle;
                break;

            case 2:
                this.currentAlignment = IntegralUITabAlignment.BottomRight;
                break;

            default:
                this.currentAlignment = IntegralUITabAlignment.TopLeft;
                break;
        }
    }
}
