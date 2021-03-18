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
import 'integralui-web/components/integralui.checkbox.js';

@Component({
    selector: '',
    templateUrl: './checkbox-overview.html',
    styleUrls: ['./checkbox-overview.css']
})
export class CheckBoxOverviewSample {
    public currentResourcePath: string = 'assets/integralui-web/icons';

    onCheckStateChanged(e: any){
        console.log("CheckState changed to " + e.detail.checkState);
    }

    onCheckedChanged(e: any){
        console.log("Checked changed to " + e.detail.checked);
    }
}
