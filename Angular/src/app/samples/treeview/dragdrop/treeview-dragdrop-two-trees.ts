/*
  Copyright © 2016-2019 Lidor Systems. All rights reserved.

  This file is part of the "IntegralUI Web" Library. 
                                                                   
  The contents of this file are subject to the IntegralUI Web License, and may not be used except in compliance with the License.
  A copy of the License should have been installed in the product's root installation directory or it can be found at
  http://www.lidorsystems.com/products/web/studio/license-agreement.aspx.
                                                            
  This SOFTWARE is provided "AS IS", WITHOUT WARRANTY OF ANY KIND, either express or implied. See the License for the specific language 
  governing rights and limitations under the License. Any infringement will be prosecuted under applicable laws.                           
*/

import { Component, ElementRef, ViewChild } from '@angular/core';

import 'integralui-web/components/integralui.treeview';
import { IntegralUITheme } from 'integralui-web/components/integralui.enums';
import { iuiTreeViewDDTwoTreeStyle } from './treeview-dragdrop-two-trees.style';

@Component({
    selector: '',
    templateUrl: './treeview-dragdrop-two-trees.html',
    styleUrls: ['./treeview-dragdrop-two-trees.css']
})
export class TreeViewDragDropTwoTrees {
    // TreeView 1 settings
    public data: Array<any> = [];
    public allowDrag: boolean = true;
    public allowDrop: boolean = true;

    // TreeView 2 settings
    public data2: Array<any> = [];
    public allowDrag2: boolean = true;
    public allowDrop2: boolean = true;

    // Both TreeView have the same settings
    public autoExpand: boolean = true;
    public ctrlSize: any = { width: 350, height: 300 };
    public currentResourcePath: string = 'assets/icons';
    public currentTheme: IntegralUITheme = IntegralUITheme.Office;
    public customStyle: any = iuiTreeViewDDTwoTreeStyle;
    
    // Initialization ------------------------------------------------------------------------

    constructor(){
        this.data = [
            { 
                id: 1,
                text: "Books",
                icon: "trw-dd-icons-medium library",
                items: [
                    { id: 11, pid: 1, text: "Art" },
                    { 
                        id: 12,
                        pid: 1,
                        text: "Business",
                        icon: "trw-dd-icons-medium people",
                        items: [
                            { id: 121, pid: 12, text: "Economics" },
                            { 
                                id: 122,
                                pid: 12,
                                checkState: 'checked',
                                text: "Investing", 
                                expanded: false,
                                icon: "trw-dd-icons-medium economics",
                                items: [
                                    { id: 1221, pid: 122, text: "Bonds" },
                                    { id: 1222, pid: 122, text: "Options" },
                                    { id: 1223, pid: 122, text: "Stocks" }
                                ]
                            },
                            { id: 123, pid: 12, text: "Management" },
                            { id: 124, pid: 12, text: "Small Business" }
                        ]
                    },
                    { id: 13, pid: 1, text: "Health", icon: "trw-dd-icons-medium heart", checkState: 'checked' },
                    { id: 14, pid: 1, text: "Literature" },
                    { 
                        id: 15,
                        pid: 1,
                        text: "Science",
                        expanded: false,
                        items: [
                            { id: 151, pid: 15, text: "Astronomy" },
                            { id: 152, pid: 15, text: "Mathematics" },
                            { id: 153, pid: 15, text: "Evolution" },
                            { id: 154, pid: 15, text: "Nature" }
                        ]
                    }
                ]
            },
            { id: 2, text: "Computers" },
            {
                id: 3,
                checkState: 'checked',
                text: "Electronics",
                items: [
                    { id: 31, pid: 3, text: "Camera", icon: "trw-dd-icons-medium camera" },
                    { id: 32, pid: 3, text: "Cell Phones" },
                    { id: 33, pid: 3, text: "Video Game Consoles" }
                ]
            },
            { 
                id: 4,
                text: "Music", 
                expanded: false,
                icon: "trw-dd-icons-medium album",
                items: [
                    { id: 41, pid: 4, text: "Blues" },
                    { id: 42, pid: 4, text: "Classic Rock" },
                    { id: 43, pid: 4, text: "Pop" },
                    { id: 44, pid: 4, text: "Jazz" }
                ]
            },
            { 
                id: 5,
                text: "Software",
                icon: "trw-dd-icons-medium software",
                items: [
                    { id: 51, pid: 5, text: "Games", checkState: 'checked' },
                    { id: 52, pid: 5, text: "Operating Systems" },
                    { id: 53, pid: 5, text: "Network & Servers" },
                    { id: 54, pid: 5, text: "Security" }
                ]
            },
            { 
                id: 6,
                text: "Sports",
                expanded: false,
                icon: "trw-dd-icons-medium sports",
                items: [
                    { id: 61, pid: 6, text: "Baseball" },
                    { id: 62, pid: 6, text: "Martial Arts", checkState: 'checked' },
                    { id: 63, pid: 6, text: "Running" },
                    { 
                        id: 64,
                        pid: 6,
                        text: "Tennis",
                        expanded: false,
                        items: [
                            { id: 641, pid: 64, text: "Accessories" },
                            { id: 642, pid: 64, text: "Balls" },
                            { id: 643, pid: 64, text: "Racquets" }
                        ]
                    }
                ]
            },
            { id: 7, text: "Video Games" },
            { id: 8, text: "Watches", icon: "trw-dd-icons-medium clock" }
        ];  

        // For items without icon, add an empty icon
        this.setEmptyItemIcon(this.data);
    }

    setEmptyItemIcon(list: Array<any>){
        list.forEach(item => {
            if (!item.icon) 
                item.icon = "trw-dd-icons-empty"

            this.setEmptyItemIcon(item.items || []);
        });
    }
}
