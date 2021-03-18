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
import 'integralui-web/components/integralui.radiobutton.js';
import 'integralui-web/components/integralui.radiogroup.js';
import { IntegralUITheme } from 'integralui-web/components/integralui.enums.js';

@Component({
    selector: '',
    templateUrl: './radiobutton-overview.html'
})
export class RadioButtonOverviewSample {
    public currentResourcePath: string = 'assets/integralui-web/icons';
    public currentTheme: IntegralUITheme = IntegralUITheme.Office;

    onButtonChecked(e: any){
        console.log("RadioButton with index: " + e.detail.index + " is checked");
    }
}