/*
  Copyright © 2016-2020 Lidor Systems. All rights reserved.

  This file is part of the "IntegralUI Web" Library. 
                                                                   
  The contents of this file are subject to the IntegralUI Web License, and may not be used except in compliance with the License.
  A copy of the License should have been installed in the product's root installation directory or it can be found at
  http://www.lidorsystems.com/products/web/studio/license-agreement.aspx.
                                                            
  This SOFTWARE is provided "AS IS", WITHOUT WARRANTY OF ANY KIND, either express or implied. See the License for the specific language 
  governing rights and limitations under the License. Any infringement will be prosecuted under applicable laws.                           
*/

import { Component, ElementRef, ViewChild } from '@angular/core';
import 'integralui-web/components/integralui.splitcontainer.js';
import { IntegralUITheme } from 'integralui-web/components/integralui.enums.js';

@Component({
    selector: '',
    templateUrl: './splitcontainer-overview.html',
    styleUrls: ['./splitcontainer-overview.css']
})
export class SplitContainerOverviewSample {
    public ctrlSize: any = { width: 700, height: 400 };
    public currentResourcePath: string = 'assets/integralui-web/icons';
    public currentSplitterDistance: number = 180;
    public currentTheme: IntegralUITheme = IntegralUITheme.Office;

    public panel1Data: any = {
        icon: 'tab-icon library',
        text: 'Books',
        content: 'Curabitur pretium tincidunt lacus. Nulla gravida orci a odio. Nullam varius, turpis et commodo pharetra, est eros bibendum elit, nec luctus magna felis sollicitudin mauris. Integer in mauris eu nibh euismod gravida. Duis ac tellus et risus vulputate vehicula. Donec lobortis risus a elit. Etiam tempor.'
    };
    
    public panel2Data: any = {
        icon: 'tab-icon album',
        text: 'Music',
        content: 'Pellentesque malesuada nulla a mi. Duis sapien sem, aliquet nec, commodo eget, consequat quis, neque. Aliquam faucibus, elit ut dictum aliquet, felis nisl adipiscing sapien, sed malesuada diam lacus eget erat. Cras mollis scelerisque nunc. Nullam arcu. Aliquam consequat.'
    };

    public showSplitterButons: boolean  = true;

    onSplitterMoving(e: any){
        if (e.detail.value < 100)
            e.detail.cancel = true;
    }
}
