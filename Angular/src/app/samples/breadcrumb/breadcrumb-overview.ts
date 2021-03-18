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
import 'integralui-web/components/integralui.breadcrumb.js';
import { IntegralUITheme } from 'integralui-web/components/integralui.enums.js';

@Component({
    selector: '',
    templateUrl: './breadcrumb-overview.html',
    styleUrls: ['./breadcrumb-overview.css']
})
export class BreadCrumbOverviewSample {
    public ctrlSize: any = { width: 300 };
    public currentMaxDropDownItems: number = 5;
    public currentResourcePath: string = 'assets/integralui-web/icons';
    public currentSelection: any = null;
    public currentTheme: IntegralUITheme = IntegralUITheme.Office;
    public dropDownSize: any = { width: 150 };
    public isAnimationAllowed: boolean = true;
    public items: Array<any> = [];

    constructor(){
        this.items = [
            { 
                id: 1,
                text: "Favorites",
                icon: "computer-icons favorites",
                items: [
                    { id: 11, pid: 1, text: "Desktop", icon: "computer-icons empty-doc" },
                    { id: 12, pid: 1, text: "Downloads", icon: "computer-icons downloads" }
                ]
            },
            { 
                id: 2,
                text: "Libraries",
                icon: "computer-icons folder",
                items: [
                    { 
                        id: 21, 
                        pid: 2, 
                        text: "Documents", 
                        icon: "computer-icons documents",
                        expanded: false,
                        items: [
                            { id: 211, pid: 21, text: "My Documents", icon: "computer-icons empty-doc" },
                            { id: 212, pid: 21, text: "Public Documents", icon: "computer-icons empty-doc" }
                        ]
                    },
                    { id: 22, pid: 2, text: "Music", icon: "computer-icons music" },
                    { id: 23, pid: 2, text: "Pictures", icon: "computer-icons pictures" },
                    { id: 24, pid: 2, text: "Videos", icon: "computer-icons videos" }
                ]
            },
            { 
                id: 3,
                text: "Computer",
                icon: "computer-icons pc",
                expanded: false,
                items: [
                    { id: 31, pid: 3, text: "Local Disk (C:)", icon: "computer-icons disk" },
                    { id: 32, pid: 3, text: "Storage (D:)", icon: "computer-icons disk" }
                ]
            },
            { id: 4, text: "Network", icon: "computer-icons network" },
            { id: 5, text: "Recycle Bin", icon: "computer-icons recycle" }
        ];

        this.currentSelection = this.items[0].items[1];
    } 

    onSelectionChanged(e){
        console.log("Selection changed to: ", e.detail.item);
    }
}
