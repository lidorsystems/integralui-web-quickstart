import { Component } from '@angular/core';

import 'integralui-web/components/integralui.tab';
import 'integralui-web/components/integralui.tabstrip';
import { IntegralUIAnimationType, IntegralUITheme } from 'integralui-web/components/integralui.enums';

@Component({
    selector: '',
    templateUrl: './tabstrip-different-colors.html',
    styleUrls: ['./tabstrip-different-colors.css']
})
export class TabStripDifferentColors {

    public currentAnimation: IntegralUIAnimationType = IntegralUIAnimationType.Fade;
    public currentResourcePath: string = 'assets/icons';
    public currentSelection: any = null;
    public currentTheme: IntegralUITheme = IntegralUITheme.Office;
    public ctrlSize: any = { width: 600, height: 300 };
    public tabs: Array<any> = [];

    constructor(){
        this.tabs = [
            { 
                id: 1,
                text: 'Tab 1',
                body: 'Aliquam faucibus, elit ut dictum aliquet, felis nisl adipiscing sapien, sed malesuada diam lacus eget erat. Cras mollis scelerisque nunc. Nullam arcu. Aliquam consequat.',
                style: { 
                    normal: { background: '#bf3737', color: 'white', transition: 'all 0.5s ease-in-out' },
                    hovered: { background: '#ff4d4d', borderColor: '#ff4d4d', color: 'white', transition: 'all 0.5s ease-in-out' },
                    selected: { background: 'white', borderColor: '#ff4d4d', color: '#ff4d4d', transition: 'all 0.25s ease-in-out' }
                }
            },
            { 
                id: 2,
                text: 'Tab 2',
                body: 'Nullam varius, turpis et commodo pharetra, est eros bibendum elit, nec luctus magna felis sollicitudin mauris. Integer in mauris eu nibh euismod gravida. Duis ac tellus et risus vulputate vehicula. Donec lobortis risus a elit. Etiam tempor.',
                style: { 
                    normal: { background: '#37bf49', color: 'white', transition: 'all 0.5s ease-in-out' },
                    hovered: { background: '#43de7c', borderColor: '#43de7c', color: 'white', transition: 'all 0.5s ease-in-out' },
                    selected: { background: 'white', borderColor: '#36b565', color: '#36b565', transition: 'all 0.25s ease-in-out' }
                }
           },
            { 
                id: 3,
                text: 'Tab 3',
                body: 'In convallis tellus a mauris. Curabitur non elit ut libero tristique sodales. Mauris a lacus. Donec mattis semper leo. In hac habitasse platea dictumst.',
                style: { 
                    normal: { background: '#378dbf', color: 'white', transition: 'all 0.5s ease-in-out' },
                    hovered: { background: '#46aeeb', borderColor: '#46aeeb', color: 'white', transition: 'all 0.5s ease-in-out' },
                    selected: { background: 'white', borderColor: '#3c93c7', color: '#3c93c7', transition: 'all 0.25s ease-in-out' }
                }
           }
        ];
    }
}
