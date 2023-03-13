/*
  Copyright © 2016-2022 Lidor Systems. All rights reserved.

  This file is part of the "IntegralUI Web" Library. 
                                                                   
  The contents of this file are subject to the IntegralUI Web License, and may not be used except in compliance with the License.
  A copy of the License should have been installed in the product's root installation directory or it can be found at
  http://www.lidorsystems.com/products/web/studio/license-agreement.aspx.
                                                            
  This SOFTWARE is provided "AS IS", WITHOUT WARRANTY OF ANY KIND, either express or implied. See the License for the specific language 
  governing rights and limitations under the License. Any infringement will be prosecuted under applicable laws.                           
*/

import { Component } from '@angular/core';
import 'integralui-web/components/integralui.tab';
import 'integralui-web/components/integralui.tabstrip';
import { IntegralUIAnimationType, IntegralUITabScrollMode, IntegralUITabStripPlacement, IntegralUITheme } from 'integralui-web/components/integralui.enums';
import { iuiTabStripOverviewStyle } from './tabstrip-overview.style';

@Component({
    selector: '',
    templateUrl: './tabstrip-overview.html',
    styleUrls: ['./tabstrip-overview.css']
})
export class TabStripOverview {

    public currentAnimation: IntegralUIAnimationType = IntegralUIAnimationType.Slide;
    public currentResourcePath: string = 'assets/icons';
    public currentScrollMode: IntegralUITabScrollMode = IntegralUITabScrollMode.None;
    public currentSelection: any = null;
    public currentTabSpacing: number = 3;
    public currentTheme: IntegralUITheme = IntegralUITheme.Office;
    public customStyle: any = iuiTabStripOverviewStyle;
    public ctrlSize: any = { width: 600, height: 300 };
    public tabs: Array<any> = [];
    public tabPlacement: IntegralUITabStripPlacement = IntegralUITabStripPlacement.Top;

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
    }
}
