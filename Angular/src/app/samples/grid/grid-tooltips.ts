import { Component, ElementRef, ViewChild } from '@angular/core';
import { html } from 'integralui-web/external/lit-element.js';
import { styleMap } from 'integralui-web/external/style-map.js';

import 'integralui-web/components/integralui.tooltip.js';
import 'integralui-web/components/integralui.grid.js';
import { IntegralUITheme } from 'integralui-web/components/integralui.enums.js';

@Component({
    selector: '',
    templateUrl: './grid-tooltips.html',
    styleUrls: ['./grid-tooltips.css']
})
export class GridTooltips {
    @ViewChild('grid', { static: false }) grid: ElementRef;

    public columns: Array<any> = [];
    public ctrlSize: any = { width: 600, height: 350 };
    public currentResourcePath: string = 'assets/integralui-web/icons';
    public currentTheme: IntegralUITheme = IntegralUITheme.Office;
    public rows: Array<any> = [];

    public tooltipSettings: any = {
        autoPopDelay: 3000,
        enabled: true,
        initialDelay: 1000,
        position: 'mouse',
        showMarker: true
    }

    constructor(){
        this.columns = [
            { headerText: "Header1", footerText: "Footer1", width: 180 },
            { headerText: "Header2", footerText: "Footer2", width: 250 },
            { headerText: "Header3", footerText: "Footer3", width: 120 }
        ];

        this.rows = [
            { id: 1, text: "Item1", cells: [{ text: "Item11" }, { text: "Item12" }, { text: "Item13" }] },
            { id: 2, text: "Item2", cells: [{ text: "Item21" }, { text: "Item22" }, { text: "Item23" }] },
            { id: 3, text: "Item3", cells: [{ text: "Item31" }, { text: "Item32" }, { text: "Item33" }] },
            { id: 4, text: "Item4", cells: [{ text: "Item41" }, { text: "Item42" }, { text: "Item43" }] },
            { id: 5, text: "Item5", cells: [{ text: "Item51" }, { text: "Item52" }, { text: "Item53" }] },
            { id: 6, text: "Item6", cells: [{ text: "Item61" }, { text: "Item62" }, { text: "Item63" }] },
            { id: 7, text: "Item7", cells: [{ text: "Item71" }, { text: "Item72" }, { text: "Item73" }] },
        ];
    }

    ngAfterViewInit(){
        this.grid.nativeElement.headerTemplate = this.currentHeaderTemplate;
        this.grid.nativeElement.rowTemplate = this.currentRowTemplate;
    }

    //
    // Methods -----------------------------------------------------------------------------------
    //

    //
    // Currently when using templates, the LitElement binding syntax is required
    // for properties, methods and events
    //
    currentHeaderTemplate = (column: any) => { 
        return html`
            <div style=${styleMap({ display: 'inline-block', padding: '2px 0 0 0' })}>
                <iui-tooltip
                    .enabled=${this.tooltipSettings.enabled}
                    .settings=${Object.assign({ title: column.headerText }, this.tooltipSettings )}
                    .theme=${this.currentTheme}
                >
                    ${column.headerText}
                </iui-tooltip>
            </div>
        `;
    };

    currentRowTemplate = (row: any, cell: any) => { 
        return html`
            <div style=${styleMap({ display: 'inline-block', padding: '2px 0 0 0' })}>
                <iui-tooltip
                    .enabled=${this.tooltipSettings.enabled}
                    .settings=${Object.assign({ title: cell.text }, this.tooltipSettings )}
                    .theme=${this.currentTheme}
                >
                    ${cell.text}
                </iui-tooltip>
            </div>
        `;
    };
}
