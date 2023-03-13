import { Component } from '@angular/core';

import 'integralui-web/components/integralui.radiobutton';
import 'integralui-web/components/integralui.radiogroup';
import 'integralui-web/components/integralui.tab';
import 'integralui-web/components/integralui.tabstrip';
import { IntegralUIAnimationType, IntegralUITabDisplayMode, IntegralUITheme } from 'integralui-web/components/integralui.enums';

@Component({
    selector: '',
    templateUrl: './tabstrip-display-mode.html',
    styleUrls: ['./tabstrip-display-mode.css']
})
export class TabStripDisplayMode {

    public currentAnimation: IntegralUIAnimationType = IntegralUIAnimationType.Slide;
    public currentDisplayMode: IntegralUITabDisplayMode = IntegralUITabDisplayMode.AutoSized;
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

    onDisplayModeChecked(e: any){
        switch (e.detail.index){
            case 1:
                this.currentDisplayMode = IntegralUITabDisplayMode.Justified;
                break;

            default:
                this.currentDisplayMode = IntegralUITabDisplayMode.AutoSized;
                break;
        }
    }
}
