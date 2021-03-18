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

import 'integralui-web/components/integralui.slidebar.js';
import 'integralui-web/components/integralui.slide.js';
import { IntegralUITheme } from 'integralui-web/components/integralui.enums.js';

@Component({
    selector: '',
    templateUrl: './slidebar-overview.html',
    styleUrls: ['./slidebar-overview.css']
})
export class SlideBarOverviewSample {
    public currentResourcePath: string = 'assets/integralui-web/icons';
    public currentTheme: IntegralUITheme = IntegralUITheme.Office;
    public isAnimationAllowed: boolean = true;
    public slides: Array<any> = [];

    constructor(){
        this.slides = [
            { text: "Slide 1" },
            { text: "Slide 2" },
            { text: "Slide 3" }
        ];
    } 

    onSlideBarClicked(index){
        console.log("SlideBar with index: " + index + " is clicked");
    }
}
