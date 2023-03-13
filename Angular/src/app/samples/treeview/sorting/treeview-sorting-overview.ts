import { Component, ElementRef, ViewChild } from '@angular/core';

import 'integralui-web/components/integralui.radiobutton';
import 'integralui-web/components/integralui.radiogroup';
import 'integralui-web/components/integralui.treeview';
import { IntegralUISortOrder, IntegralUITheme } from 'integralui-web/components/integralui.enums';

@Component({
    selector: '',
    templateUrl: './treeview-sorting-overview.html',
    styleUrls: ['./treeview-sorting-overview.css']
})
export class TreeViewSortingOverview {

    // TreeView
    @ViewChild('treeview', { static: false }) treeview!: ElementRef;

    public ctrlSize: any = { width: 350, height: 300 };
    public currentResourcePath: string = 'assets/icons';
    public currentSorting: IntegralUISortOrder = IntegralUISortOrder.None;
    public currentTheme: IntegralUITheme = IntegralUITheme.Office;
    public items: Array<any> = [];

    constructor(){
        this.items = [
            { 
                id: 1,
                text: "PC",
                items: [
                    { id: 11, pid: 1, text: "Driving/Racing", expanded: false,
                        items: [
                            { id: 111, pid: 11, text: "DiRT 3" },
                            { id: 112, pid: 11, text: "Ridge Racer Unbounded" },
                            { id: 113, pid: 11, text: "TrackMania 2" }
                        ]
                    },
                    { id: 12, pid: 1, text: "Role-Playing",
                        items: [
                            { id: 121, pid: 12, text: "Dark Souls 2" },
                            { id: 122, pid: 12, text: "Mass Effect 3" },
                            { id: 123, pid: 12, text: "The Elder Scrolls V: Skyrim" },
                            { id: 124, pid: 12, text: "Divinity: Original Sin" },
                            { id: 125, pid: 12, text: "Fallout: New Vegas" }
                        ]
                    },
                    { id: 13, pid: 1, text: "Action", expanded: false,
                        items: [
                            { id: 131, pid: 13, text: "Diablo 3" },
                            { id: 132, pid: 13, text: "Gears of War" },
                            { id: 133, pid: 13, text: "F.E.A.R." },
                            { id: 134, pid: 13, text: "Path of Exile" },
                            { id: 135, pid: 13, text: "Grand Theft Auto IV" },
                            { id: 136, pid: 13, text: "Divine Divinity" },
                            { id: 137, pid: 13, text: "The Witcher 2" }
                        ]
                    },
                    { id: 14, pid: 1, text: "Shooter", expanded: false,
                        items: [
                            { id: 141, pid: 14, text: "Battlefield: Bad Company 2" },
                            { id: 142, pid: 14, text: "Call of Duty: Black Ops" },
                            { id: 143, pid: 14, text: "BioShock Infinite" },
                            { id: 143, pid: 14, text: "Crysis 2" }
                        ]
                    }
                ]
            },
            { 
                id: 2,
                text: "Xbox One",
                items: [
                    { id: 21, pid: 2, text: "Sports", expanded: false,
                        items: [
                            { id: 211, pid: 21, text: "FIFA 14" },
                            { id: 212, pid: 21, text: "Madden NFL 25" }
                        ]
                    },
                    { id: 22, pid: 2, text: "Adventure",
                        items: [
                            { id: 221, pid: 22, text: "Assassin's Creed IV" },
                            { id: 222, pid: 22, text: "Tomb Raider" },
                            { id: 223, pid: 22, text: "Metal Gear Solid V" }
                        ]
                    },
                    { id: 23, pid: 2, text: "Miscellaneous", expanded: false,
                        items: [
                            { id: 231, pid: 23, text: "Peggle 2" }
                        ]
                    }
                ]
            },
            { 
                id: 3,
                text: "PlayStation", 
                items: [
                    { id: 31, pid: 3, text: "First-Person",
                        items: [
                            { id: 311, pid: 31, text: "Battlefield 4" },
                            { id: 312, pid: 31, text: "Call of Duty: Ghosts" },
                            { id: 313, pid: 31, text: "Killzone: Shadow Fall" }
                        ]
                    },
                    { id: 32, pid: 3, text: "Platformer", expanded: false,
                        items: [
                            { id: 321, pid: 32, text: "Rayman Legends" },
                            { id: 322, pid: 32, text: "Rogue Legacy" },
                            { id: 323, pid: 32, text: "1001 Spikes" }
                        ]
                    },
                    { id: 33, pid: 3, text: "MMO", expanded: false,
                        items: [
                            { id: 333, pid: 33, text: "Final Fantasy XIV Online" }
                        ]
                    }
                ]
            }
        ];
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

        this.treeview.nativeElement.updateLayout();
    }
}
