import { Component, ElementRef, ViewChild } from '@angular/core';
import { html } from 'integralui-web/external/lit-element';

import 'integralui-web/components/integralui.tooltip';
import 'integralui-web/components/integralui.listbox';
import { IntegralUITheme } from 'integralui-web/components/integralui.enums';

@Component({
    selector: '',
    templateUrl: './listbox-tooltip.html',
    styleUrls: ['./listbox-tooltip.css']
})
export class ListBoxTooltip {

    // ListBox
    @ViewChild('listbox', { static: false }) listbox!: ElementRef;

    public ctrlSize: any = { width: 350, height: 300 }
    public currentResourcePath: string = 'assets/icons';
    public currentTheme: IntegralUITheme = IntegralUITheme.Office;
    public groups: Array<any> = [];
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
        this.groups = [
            { name: "Sci-Fi", expanded: false },
            { name: "Adventure" },
            { name: "Action" },
            { name: "Drama" },
            { name: "Music", expanded: false },
            { name: "Comedy" },
            { name: "Biography" },
            { name: "Crime" },
            { name: "Western", expanded: false },
            { name: "Horror" },
            { name: "Romance" }
        ];

        this.items = [
            { id: 1, text: "Star Trek", group: "Sci-Fi" },
            { id: 2, text: "Cast Away", group: "Adventure"  },
            { id: 3, text: "Gladiator", group: "Action" },
            { id: 4, text: "Malèna", group: "Drama" },
            { id: 5, text: "Moulin Rouge", group: "Music" },
            { id: 6, text: "Snatch", group: "Comedy"  },
            { id: 7, text: "A Beautiful Mind", group: "Biography"  },
            { id: 8, text: "Black Hawk Down", group: "Crime" },
            { id: 9, text: "Django Unchained", group: "Western"  },
            { id: 10, text: "Man of Steel", group: "Sci-Fi" },
            { id: 11, text: "The Ring", group: "Horror" },
            { id: 12, text: "40 Days and 40 Nights", group: "Romance" },
            { id: 13, text: "Minority Report", group: "Sci-Fi" },
            { id: 14, text: "Scary Movie 3", group: "Comedy" },
            { id: 15, text: "Walk the Line", group: "Music"  },
            { id: 16, text: "How to Lose a Guy in 10 Days", group: "Romance" },
            { id: 17, text: "The Dark Knight", group: "Crime"  },
            { id: 18, text: "American Psycho", group: "Horror"},
            { id: 19, text: "The Grand Budapest Hotel", group: "Drama" },
            { id: 20, text: "The Wolf of Wall Street", group: "Comedy" }
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
                    ${item.type === 'group'
                        ? html`<span>${item.name}</span>`
                        : html`<span>${item.text}</span>`
                    }
                </iui-tooltip>
            </div>
        `;
    }
}
