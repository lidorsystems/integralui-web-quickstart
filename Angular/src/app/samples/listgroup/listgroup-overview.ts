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
import 'integralui-web/components/integralui.listgroup';
import 'integralui-web/components/integralui.item';
import { IntegralUITheme } from 'integralui-web/components/integralui.enums';

@Component({
    selector: '',
    templateUrl: './listgroup-overview.html'
})
export class ListGroupOverviewSample {
    public ctrlSize: any = { width: 290 };
    public currentTheme: IntegralUITheme = IntegralUITheme.Office;
    public expandBoxType: string = 'arrow';
    public groupItems: Array<any> = [];
    public title: string = 'Common Controls';

    constructor(){
        this.groupItems = [
            { id: 11, pid: 1, text: "Button" },
            { id: 12, pid: 1, text: "CheckBox" },
            { id: 13, pid: 1, text: "ComboBox" },
            { id: 14, pid: 1, text: "DateTime Picker" },
            { id: 15, pid: 1, text: "Label" },
            { id: 16, pid: 1, text: "ProgressBar" },
            { id: 17, pid: 1, text: "TextBox" }
        ];
    } 
}
