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
import 'integralui-web/components/integralui.rating';
import { IntegralUIIncrementMode, IntegralUITheme } from 'integralui-web/components/integralui.enums';

@Component({
    selector: '',
    templateUrl: './rating-overview.html',
    styleUrls: ['./rating-overview.css']
})
export class RatingOverviewSample {
    public currentResourcePath: string = 'assets/icons';
    public currentTheme: IntegralUITheme = IntegralUITheme.Office;

    // Rating with stars
    public ctrlMaxValue: number = 5;
    public ctrlValue: number = 3.5;

    // Rating with bricks
    public ctrlMaxValue2: number = 20;
    public ctrlStepSize2: number = 8;
    public ctrlValue2: number = 12;
    public brickIncrementMode: IntegralUIIncrementMode = IntegralUIIncrementMode.Full;
}
