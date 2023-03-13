import { Component } from '@angular/core';

import 'integralui-web/components/integralui.radiobutton';
import 'integralui-web/components/integralui.radiogroup';
import 'integralui-web/components/integralui.tab';
import 'integralui-web/components/integralui.tabstrip';
import { IntegralUIAnimationType, IntegralUITabDisplayMode, IntegralUITabNavigationMode, IntegralUITabStripPlacement, IntegralUITheme } from 'integralui-web/components/integralui.enums';

@Component({
    selector: '',
    templateUrl: './tabstrip-multiline.html',
    styleUrls: ['./tabstrip-multiline.css']
})
export class TabStripMultilineTabs {

    public currentAnimation: IntegralUIAnimationType = IntegralUIAnimationType.Slide;
    public currentDisplayMode: IntegralUITabDisplayMode = IntegralUITabDisplayMode.Justified;
    public currentNavigation = IntegralUITabNavigationMode.Multiline;
    public currentPlacement: IntegralUITabStripPlacement = IntegralUITabStripPlacement.Top;
    public currentResourcePath: string = 'assets/icons';
    public currentTabSpacing: number = 4;
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
            },
            { 
                id: 5,
                text: 'C#.NET',
                body: 'Morbi porttitor, ex ut vulputate tincidunt, ex justo gravida dolor, vel pulvinar neque ex placerat elit.'
            },
            { 
                id: 6,
                text: 'VB.NET',
                body: 'Aliquam malesuada lectus eget erat dignissim, vel euismod mauris vulputate. In hac habitasse platea dictumst.'
            },
            { 
                id: 7,
                text: 'C++',
                body: 'Sed augue lacus, ultrices mattis nisl eget, ornare imperdiet metus. Sed ac vulputate turpis. Suspendisse tincidunt, tortor at posuere dictum, elit erat laoreet ex, ut gravida tellus est non turpis. Praesent tempus diam tellus, et porta tellus aliquam nec. Pellentesque varius metus non lobortis malesuada.'
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
