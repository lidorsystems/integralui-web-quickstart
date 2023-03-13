import { Component, ElementRef, ViewChild } from '@angular/core';

import 'integralui-web/components/integralui.tab';
import 'integralui-web/components/integralui.tabstrip';
import { IntegralUIAnimationType, IntegralUITheme } from 'integralui-web/components/integralui.enums';
import { iuiTabStripDragDropOverviewStyle } from './tabstrip-dragdrop-overview.style';

@Component({
    selector: '',
    templateUrl: './tabstrip-dragdrop-overview.html',
    styleUrls: ['./tabstrip-dragdrop-overview.css']
})
export class TabStripDragDropOverview {

    public currentAnimation: IntegralUIAnimationType = IntegralUIAnimationType.Slide;
    public currentResourcePath: string = 'assets/icons';
    public currentSelection: any = null;
    public currentTheme: IntegralUITheme = IntegralUITheme.Office;
    public customStyle: any = iuiTabStripDragDropOverviewStyle;
    public ctrlSize: any = { width: 600, height: 300 };
    public tabs: Array<any> = [];

    constructor(){
        this.tabs = [
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
            },
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
        ];
    }

    tabOrderChanged(e: any){
        this.currentSelection = e.detail.tab;
        this.tabs = e.detail.list;

        console.log(e.detail.tab.text + " changed its position to " + e.detail.index);
    }
}
