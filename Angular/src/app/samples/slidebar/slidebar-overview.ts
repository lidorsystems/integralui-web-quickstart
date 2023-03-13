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

import 'integralui-web/components/integralui.slidebar';
import 'integralui-web/components/integralui.slide';
import { IntegralUISlideDisplayMode, IntegralUITheme } from 'integralui-web/components/integralui.enums';

@Component({
    selector: '',
    templateUrl: './slidebar-overview.html',
    styleUrls: ['./slidebar-overview.css']
})
export class SlideBarOverviewSample {
    public currentDisplayMode: string = IntegralUISlideDisplayMode.Stream;
    public currentResourcePath: string = 'assets/icons';
    public currentTheme: IntegralUITheme = IntegralUITheme.Office;
    public isAnimationAllowed: boolean = true;
    public slides: Array<any> = [];

    constructor(){
        this.slides = [
            { text: "Slide 1" },
            { text: "Slide 2" },
            { text: "Slide 3" },
            { text: "Slide 4" },
            { text: "Slide 5" }
        ];
    } 

    onSlideBarClicked(index: number){
        console.log("SlideBar with index: " + index + " is clicked");
    }

    onButtonChecked(e: any){
        this.currentDisplayMode = e.detail.index === 1 ? IntegralUISlideDisplayMode.Carousel : IntegralUISlideDisplayMode.Stream;
    }

}
