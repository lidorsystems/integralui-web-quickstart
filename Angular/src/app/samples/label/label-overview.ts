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
import 'integralui-web/components/integralui.label';
import 'integralui-web/components/integralui.select';
import { IntegralUILabelAlignment, IntegralUITheme } from 'integralui-web/components/integralui.enums';

@Component({
    selector: '',
    templateUrl: './label-overview.html',
    styleUrls: ['./label-overview.css']
})
export class LabelOverviewSample {
    public alignmentOptions: Array<any> = [
        { text: 'BottomCenter' },
        { text: 'BottomLeft' },
        { text: 'BottomRight' },
        { text: 'Left' },
        { text: 'Right' },
        { text: 'TopCenter' },
        { text: 'TopLeft' },
        { text: 'TopRight' }
    ];

    public labelAlignment: IntegralUILabelAlignment = IntegralUILabelAlignment.Left;
    public labelContentSize: any = { width: 200 }
    public labelSize: any = { width: 350 }
    public currentSelection: any = null;
    public currentTheme: IntegralUITheme = IntegralUITheme.Office;

    constructor(){
        this.currentSelection = this.alignmentOptions[3];
    }

    onAlignmentChanged(e: any){
        if (e.detail.item)
            this.labelAlignment = e.detail.item.text;
    }
}