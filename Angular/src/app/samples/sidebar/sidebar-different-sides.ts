import { Component } from '@angular/core';

import 'integralui-web/components/integralui.panel';
import 'integralui-web/components/integralui.sidebar';
import 'integralui-web/components/integralui.tab';
import { IntegralUIPlacement, IntegralUITheme } from 'integralui-web/components/integralui.enums';
import { iuiSideBarDifferentSidesStyle } from './sidebar-different-sides.style';

@Component({
    selector: '',
    templateUrl: './sidebar-different-sides.html',
    styleUrls: ['./sidebar-different-sides.css']
})
export class SideBarDifferentSides {
    // Settings for both Sidebars
    public currentResourcePath: string = 'assets/icons';
    public currentTheme: IntegralUITheme = IntegralUITheme.Office;
    public customStyle: any = iuiSideBarDifferentSidesStyle;
    public isAnimationAllowed: boolean = true;

    // First SideBar
    public ctrlSize: any = { width: 300 };
    public currentPlacement: IntegralUIPlacement = IntegralUIPlacement.Left;
    public currentSelection: any = null;
    public data: Array<any> = [];

    // Second SideBar
    public ctrlSize2: any = { height: 200 };
    public currentPlacement2: IntegralUIPlacement = IntegralUIPlacement.Bottom;
    public currentSelection2: any = null;
    public data2: Array<any> = [];

    constructor(){
        // First SideBar
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

        // Second SideBar
        this.data2 = [
            { 
                id: 4,
                icon: 'tab-icon notes',
                text: 'Notes',
                body: 'Duis ac tellus et risus vulputate vehicula. Donec lobortis risus a elit. Etiam tempor. Ut ullamcorper, ligula eu tempor congue, eros est euismod turpis, id tincidunt sapien risus a quam. Maecenas fermentum consequat mi. Donec fermentum.'
            },
            { 
                id: 5,
                icon: 'tab-icon sports',
                text: 'Sports',
                body: 'Aliquam faucibus, elit ut dictum aliquet, felis nisl adipiscing sapien, sed malesuada diam lacus eget erat. Cras mollis scelerisque nunc. Nullam arcu. Aliquam consequat.'
            }
        ]
    }

    ngAfterViewInit(){
        this.currentSelection = this.data[0];
        this.currentSelection2 = this.data2[0];
    }
}
