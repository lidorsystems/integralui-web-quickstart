import { Component, ElementRef, ViewChild } from '@angular/core';

import 'integralui-web/components/integralui.radiobutton';
import 'integralui-web/components/integralui.radiogroup';
import 'integralui-web/components/integralui.listview';
import { IntegralUIComponentAppearance, IntegralUISortOrder, IntegralUITheme } from 'integralui-web/components/integralui.enums';

@Component({
    selector: '',
    templateUrl: './listview-sorting-overview.html',
    styleUrls: ['./listview-sorting-overview.css']
})
export class ListViewSortingOverview {

    // ListView
    @ViewChild('listview', { static: false }) listview!: ElementRef;

    public ctrlSize: any = { width: 400, height: 300 }
    public currentItemSize: any = { width: 175, height: 32 }
    public currentResourcePath: string = 'assets/icons';
    public currentScrollAppearance: IntegralUIComponentAppearance = IntegralUIComponentAppearance.Dynamic;
    public currentSorting: IntegralUISortOrder = IntegralUISortOrder.None;
    public currentTheme: IntegralUITheme = IntegralUITheme.Office;
    public items: Array<any> = [];

    // Initialization ----------------------------------------------------------------------------

    constructor(){
        this.items = [
            { id: 111, text: "DiRT 3" },
            { id: 112, text: "Ridge Racer Unbounded" },
            { id: 113, text: "TrackMania 2" },
            { id: 121, text: "Dark Souls 2" },
            { id: 122, text: "Mass Effect 3" },
            { id: 123, text: "The Elder Scrolls V: Skyrim" },
            { id: 124, text: "Divinity: Original Sin" },
            { id: 125, text: "Fallout: New Vegas" },
            { id: 131, text: "Diablo 3" },
            { id: 132, text: "Gears of War" },
            { id: 133, text: "F.E.A.R." },
            { id: 134, text: "Path of Exile" },
            { id: 135, text: "Grand Theft Auto IV" },
            { id: 136, text: "Divine Divinity" },
            { id: 137, text: "The Witcher 2" },
            { id: 141, text: "Battlefield: Bad Company 2" },
            { id: 142, text: "Call of Duty: Black Ops" },
            { id: 143, text: "BioShock Infinite" },
            { id: 144, text: "Crysis 2" },
            { id: 211, text: "FIFA 14" },
            { id: 212, text: "Madden NFL 25" },
            { id: 221, text: "Assassin's Creed IV" },
            { id: 222, text: "Tomb Raider" },
            { id: 223, text: "Metal Gear Solid V" },
            { id: 311, text: "Battlefield 4" },
            { id: 312, text: "Call of Duty: Ghosts" },
            { id: 313, text: "Killzone: Shadow Fall" },
            { id: 321, text: "Rayman Legends" },
            { id: 322, text: "Rogue Legacy" },
            { id: 323, text: "1001 Spikes" },
            { id: 333, text: "Final Fantasy XIV Online" }
        ];
    }

    // Events ------------------------------------------------------------------------------------

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

        this.listview.nativeElement.updateLayout();
    }
}
