/*
  Copyright © 2016-2022 Lidor Systems. All rights reserved.

  This file is part of the "IntegralUI Web" Library. 
                                                                   
  The contents of this file are subject to the IntegralUI Web License, and may not be used except in compliance with the License.
  A copy of the License should have been installed in the product's root installation directory or it can be found at
  http://www.lidorsystems.com/products/web/studio/license-agreement.aspx.
                                                            
  This SOFTWARE is provided "AS IS", WITHOUT WARRANTY OF ANY KIND, either express or implied. See the License for the specific language 
  governing rights and limitations under the License. Any infringement will be prosecuted under applicable laws.                           
*/

import { Component, ElementRef, ViewChild } from '@angular/core';
import 'integralui-web/components/integralui.tooltip';
import { IntegralUITheme } from 'integralui-web/components/integralui.enums';

@Component({
    selector: '',
    templateUrl: './tooltip-overview.html',
    styleUrls: ['./tooltip-overview.css']
})
export class TooltipOverviewSample {
    public ctrlSize: any = { width: 400, height: 250 };
    public currentTheme: IntegralUITheme = IntegralUITheme.Office;
    public tooltipSettings: any = {
        autoPopDelay: 3000,
        enabled: true,
        initialDelay: 1000,
        position: 'mouse',
        showMarker: true,
        title: 'Tooltip Title'
    }
}
