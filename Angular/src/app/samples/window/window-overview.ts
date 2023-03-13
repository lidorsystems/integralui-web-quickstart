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
import 'integralui-web/components/integralui.panel';
import 'integralui-web/components/integralui.window';
import { IntegralUITheme } from 'integralui-web/components/integralui.enums';

@Component({
    selector: '',
    templateUrl: './window-overview.html',
    styleUrls: ['./window-overview.css']
})
export class WindowOverview {
    @ViewChild('win1', { static: false }) winRef1!: ElementRef;
    @ViewChild('win2', { static: false }) winRef2!: ElementRef;

    public ctrlSize: any = { width: 250, height: 300 }
    public currentResourcePath: string = 'assets/icons';
    public currentTheme: IntegralUITheme = IntegralUITheme.Office;

    constructor(private window: Window){}
    
    ngOnDestroy(){
        if (this.winRef1)
            this.winRef1.nativeElement.close(true);

        if (this.winRef2)
            this.winRef2.nativeElement.close(true);
    }

    getBlockStyle(){
        return {
            overflow: 'hidden',
            position: 'relative', 
            height: this.window.innerHeight - 100 + 'px'
        }
    }
}
