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

import 'integralui-web/components/integralui.tab';
import 'integralui-web/components/integralui.tabstrip';
import { IntegralUIAnimationType } from 'integralui-web/components/integralui.enums';

@Component({
    selector: '',
    templateUrl: './tabstrip-toolbar.html',
    styleUrls: ['./tabstrip-toolbar.css']
})
export class TabStripToolbar {
    public currentAnimation: IntegralUIAnimationType = IntegralUIAnimationType.Slide;
    public currentResourcePath: string = 'assets/icons';
    public currentTabSpacing: number = 0;
    public ctrlSize: any = { width: 500, height: 300 };
    public tabs: Array<any> = [];
    public toolbarIcons: Array<string> = ['tbs-tool-watch', 'tbs-tool-charts', '', 'tbs-tool-favorite'];

    constructor(){
        this.tabs = [
            { 
                id: 1,
                text: 'JavaScript',
                body: 'Aliquam faucibus, elit ut dictum aliquet, felis nisl adipiscing sapien, sed malesuada diam lacus eget erat. Cras mollis scelerisque nunc. Nullam arcu. Aliquam consequat.'
            },
            { 
                id: 2,
                text: 'Angular',
                body: 'Nullam varius, turpis et commodo pharetra, est eros bibendum elit, nec luctus magna felis sollicitudin mauris. Integer in mauris eu nibh euismod gravida. Duis ac tellus et risus vulputate vehicula. Donec lobortis risus a elit. Etiam tempor.'
            },
            { 
                id: 3,
                text: 'React',
                body: 'In convallis tellus a mauris. Curabitur non elit ut libero tristique sodales. Mauris a lacus. Donec mattis semper leo. In hac habitasse platea dictumst.'
            },
            { 
                id: 4,
                text: 'Vue',
                body: 'Nullam arcu. Aliquam consequat. Integer in mauris eu nibh euismod gravida. Duis ac tellus et risus vulputate vehicula.'
            }
        ];
    }

    toolbarButtonClicked(index: number){
        // Skip if a click is made over the separator
        if (index !== 2){
            let strMsg = "";
            switch (index){
                case 1:
                    strMsg = "Charts";
                    break;

                case 3:
                    strMsg = "Favorite";
                    break;

                default:
                    strMsg = "Watch";
                    break;
            }

            alert(strMsg + " button clicked!");
        }
    }

    getToolButtonClass(index: number, iconClass: string){
        let result = [];

        let btnClass = index === 2 ? 'tbs-toolbar-separator' : 'tbs-toolbar-button';

        result.push(btnClass);
        result.push(iconClass);

        return result;
    }
}
