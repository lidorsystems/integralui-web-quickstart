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
import 'integralui-web/components/integralui.splitter.js';
import { IntegralUIOrientation, IntegralUITheme } from 'integralui-web/components/integralui.enums.js';

@Component({
    selector: '',
    templateUrl: './splitter-overview.html',
    styleUrls: ['./splitter-overview.css']
})
export class SplitterOverviewSample {
    @ViewChild('splitter2', { static: false }) splitter2: ElementRef;

    public currentSplitterDistance: number = 180;
    public currentTheme: IntegralUITheme = IntegralUITheme.Office;
    public panel1Data: any = { content: 'Curabitur pretium tincidunt lacus. Nulla gravida orci a odio. Nullam varius, turpis et commodo pharetra, est eros bibendum elit, nec luctus magna felis sollicitudin mauris. Integer in mauris eu nibh euismod gravida. Duis ac tellus et risus vulputate vehicula. Donec lobortis risus a elit. Etiam tempor.' };
    public panel2Data: any = { content: 'Pellentesque malesuada nulla a mi. Duis sapien sem, aliquet nec, commodo eget, consequat quis, neque. Aliquam faucibus, elit ut dictum aliquet, felis nisl adipiscing sapien, sed malesuada diam lacus eget erat. Cras mollis scelerisque nunc. Nullam arcu. Aliquam consequat.' };
    public panel3Data: any = { content: 'Fusce convallis, mauris imperdiet gravida bibendum, nisl turpis suscipit mauris, sed placerat ipsum urna sed risus. In convallis tellus a mauris. Curabitur non elit ut libero tristique sodales. Mauris a lacus. Donec mattis semper leo. In hac habitasse platea dictumst.' };
    public spliiterOrientation: IntegralUIOrientation = IntegralUIOrientation.Vertical;

    onSplitterMoving(e: any){
        if (e.detail.value < 100)
           e.detail.cancel = true;
        else if (this.splitter2)
            this.splitter2.nativeElement.updateLayout();
    }

    onSplitterMoved(e: any){
        if (this.splitter2)
            this.splitter2.nativeElement.updateLayout();
    }
}
