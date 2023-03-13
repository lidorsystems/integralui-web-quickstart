import { Component, ElementRef, ViewChild } from '@angular/core';

import 'integralui-web/components/integralui.checkbox';
import 'integralui-web/components/integralui.radiobutton';
import 'integralui-web/components/integralui.radiogroup';
import 'integralui-web/components/integralui.listbox';
import { IntegralUIComponentAppearance, IntegralUISortOrder, IntegralUITheme } from 'integralui-web/components/integralui.enums';

@Component({
    selector: '',
    templateUrl: './listbox-sorting-overview.html',
    styleUrls: ['./listbox-sorting-overview.css']
})
export class ListBoxSortingOverview {

    // ListBox
    @ViewChild('listbox', { static: false }) listbox!: ElementRef;

    public ctrlSize: any = { width: 350, height: 300 };
    public currentResourcePath: string = 'assets/icons';
    public currentScrollAppearance: IntegralUIComponentAppearance = IntegralUIComponentAppearance.Dynamic;
    public currentSorting: IntegralUISortOrder = IntegralUISortOrder.None;
    public currentTheme: IntegralUITheme = IntegralUITheme.Office;
    public groups: Array<any> = [];
    public isGrouped: boolean = false;
    public items: Array<any> = [];

    // Initialization ----------------------------------------------------------------------------

    constructor(){
        this.groups =[
            { name: "Driving/Racing" },
            { name: "Role-Playing", expanded: false },
            { name: "Action" },
            { name: "Shooter" },
            { name: "Sports", expanded: false },
            { name: "Adventure" },
            { name: "First-Person" },
            { name: "Platformer", expanded: false },
            { name: "MMO" }
        ];

        this.items = [
            { id: 111, text: "DiRT 3", group: "Driving/Racing" },
            { id: 112, text: "Ridge Racer Unbounded", group: "Driving/Racing" },
            { id: 113, text: "TrackMania 2", group: "Driving/Racing" },
            { id: 121, text: "Dark Souls 2", group: "Role-Playing" },
            { id: 122, text: "Mass Effect 3", group: "Role-Playing" },
            { id: 123, text: "The Elder Scrolls V: Skyrim", group: "Role-Playing" },
            { id: 124, text: "Divinity: Original Sin", group: "Role-Playing" },
            { id: 125, text: "Fallout: New Vegas", group: "Role-Playing" },
            { id: 131, text: "Diablo 3", group: "Action" },
            { id: 132, text: "Gears of War", group: "Action" },
            { id: 133, text: "F.E.A.R.", group: "Action" },
            { id: 134, text: "Path of Exile", group: "Action" },
            { id: 135, text: "Grand Theft Auto IV", group: "Action" },
            { id: 136, text: "Divine Divinity", group: "Action" },
            { id: 137, text: "The Witcher 2", group: "Action" },
            { id: 141, text: "Battlefield: Bad Company 2", group: "Shooter" },
            { id: 142, text: "Call of Duty: Black Ops", group: "Shooter" },
            { id: 143, text: "BioShock Infinite", group: "Shooter" },
            { id: 144, text: "Crysis 2", group: "Shooter" },
            { id: 211, text: "FIFA 14", group: "Sports" },
            { id: 212, text: "Madden NFL 25", group: "Sports" },
            { id: 221, text: "Assassin's Creed IV", group: "Adventure" },
            { id: 222, text: "Tomb Raider", group: "Adventure" },
            { id: 223, text: "Metal Gear Solid V", group: "Adventure" },
            { id: 311, text: "Battlefield 4", group: "First-Person" },
            { id: 312, text: "Call of Duty: Ghosts", group: "First-Person" },
            { id: 313, text: "Killzone: Shadow Fall", group: "First-Person" },
            { id: 321, text: "Rayman Legends", group: "Platformer" },
            { id: 322, text: "Rogue Legacy", group: "Platformer" },
            { id: 323, text: "1001 Spikes", group: "Platformer" },
            { id: 333, text: "Final Fantasy XIV Online", group: "MMO" }
        ];
    }

    // Events ------------------------------------------------------------------------------------

    onAllowGroupsChanged(e: any){
        this.isGrouped = e.detail.checked;
    }

    onSortingChecked(e: any){
        switch (e.detail.index){
            case 1: 
                this.currentSorting = IntegralUISortOrder.Ascending;
                break;

            case 2: 
                this.currentSorting = IntegralUISortOrder.Descending;
                break;

            default: 
                this.currentSorting = IntegralUISortOrder.None;
                break;
        }

        this.listbox.nativeElement.updateLayout();
    }
}
