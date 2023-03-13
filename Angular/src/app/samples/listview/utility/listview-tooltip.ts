import { Component, ElementRef, ViewChild } from '@angular/core';
import { html } from 'integralui-web/external/lit-element';

import 'integralui-web/components/integralui.tooltip';
import 'integralui-web/components/integralui.listview';
import { IntegralUICheckMode, IntegralUITheme } from 'integralui-web/components/integralui.enums';

@Component({
    selector: '',
    templateUrl: './listview-tooltip.html',
    styleUrls: ['./listview-tooltip.css']
})
export class ListViewTooltip {

    // ListView
    @ViewChild('listview', { static: false }) listview!: ElementRef;

    public ctrlSize: any = { width: 350, height: 250 }
    public currentItemSize: any = { width: 150, height: 32 }
    public currentResourcePath: string = 'assets/icons';
    public currentTheme: IntegralUITheme = IntegralUITheme.Office;
    public items: Array<any> = [];

    // Tooltip settings
    private tooltipSettings: any = {
        autoPopDelay: 3000,
        enabled: true,
        initialDelay: 500,
        position: 'mouse',
        showMarker: true
    }

    constructor(){
        this.items = [
            { id: 1, text: "Star Trek" },
            { id: 2, text: "Cast Away"  },
            { id: 3, text: "Gladiator" },
            { id: 4, text: "Malèna" },
            { id: 5, text: "Moulin Rouge" },
            { id: 6, text: "Snatch"  },
            { id: 7, text: "A Beautiful Mind"  },
            { id: 8, text: "Black Hawk Down" },
            { id: 9, text: "Django Unchained" },
            { id: 10, text: "Man of Steel" },
            { id: 11, text: "The Ring" },
            { id: 12, text: "40 Days and 40 Nights" },
            { id: 13, text: "Minority Report" },
            { id: 14, text: "Scary Movie 3" },
            { id: 15, text: "Walk the Line"  },
            { id: 16, text: "How to Lose a Guy in 10 Days" },
            { id: 17, text: "The Dark Knight"  },
            { id: 18, text: "American Psycho" },
            { id: 19, text: "The Grand Budapest Hotel" },
            { id: 20, text: "The Wolf of Wall Street" }
        ];
    }

    currentItemTemplate = (item: any) => { 
        return html`
            <div>
                <iui-tooltip
                    .enabled=${this.tooltipSettings.enabled}
                    .settings=${Object.assign({ title: item.type === 'group' ? item.name : item.text }, this.tooltipSettings )}
                    .theme=${this.currentTheme}
                >
                    <div style="overflow: hidden;text-overflow: ellipsis;">
                        <span>${item.text}</span>
                    </div>
                </iui-tooltip>
            </div>
        `;
    }
}
