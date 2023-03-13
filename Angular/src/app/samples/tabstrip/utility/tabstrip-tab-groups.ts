import { Component } from '@angular/core';

import 'integralui-web/components/integralui.select';
import 'integralui-web/components/integralui.tab';
import 'integralui-web/components/integralui.tabstrip';
import { IntegralUIAnimationType } from 'integralui-web/components/integralui.enums';

@Component({
    selector: '',
    templateUrl: './tabstrip-tab-groups.html',
    styleUrls: ['./tabstrip-tab-groups.css']
})
export class TabStripGroups {

    public currentAnimation: IntegralUIAnimationType = IntegralUIAnimationType.Fade;
    public currentResourcePath: string = 'assets/icons';
    public currentSelection: any = null;
    public ctrlSize: any = { width: 600, height: 300 };
    public tabs: Array<any> = [];
    public ctrlSelectSize: any = { width: 150 };

    public groupList: Array<any> = [
        [
            { id: 1, name: 'Tab1', text: 'Tab 1' },
            { id: 2, name: 'Tab2', text: 'Tab 2' },
            { id: 3, name: 'Tab3', text: 'Tab 3' }
        ],
        [
            { id: 4, name: 'Tab4', text: 'Tab 4' },
            { id: 5, name: 'Tab5', text: 'Tab 5' }
        ],
        [
            { id: 6, name: 'Tab6', text: 'Tab 6' },
            { id: 7, name: 'Tab7', text: 'Tab 7' },
            { id: 8, name: 'Tab8', text: 'Tab 8' },
            { id: 9, name: 'Tab9', text: 'Tab 9' }
        ]
    ];

    // A list of groups available to select from
    public options = [
        { id: 1, text: "Group 1" },
        { id: 2, text: "Group 2" },
        { id: 3, text: "Group 3" }
    ];

    constructor(){
        this.tabs = this.groupList[0];
    }

    groupChanged(e: any){
        // Create a new set of tabs based on selected group
        this.tabs = this.groupList[e.detail.index];
        this.currentSelection = this.tabs[0];
    }
}
