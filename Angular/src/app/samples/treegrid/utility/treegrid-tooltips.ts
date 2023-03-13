import { Component, ElementRef, ViewChild } from '@angular/core';
import { html } from 'integralui-web/external/lit-element';
import { styleMap } from 'integralui-web/external/style-map';

import 'integralui-web/components/integralui.tooltip';
import 'integralui-web/components/integralui.treegrid';
import { IntegralUITheme } from 'integralui-web/components/integralui.enums';

@Component({
    selector: '',
    templateUrl: './treegrid-tooltips.html',
    styleUrls: ['./treegrid-tooltips.css']
})
export class TreeGridTooltips {
    @ViewChild('treegrid', { static: false }) treegrid!: ElementRef;

    public columns: Array<any> = [];
    public ctrlSize: any = { width: 600, height: 300 };
    public currentResourcePath: string = 'assets/icons';
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
            { 
                id: 1,
                text: "Item1",
                cells: [{ text: "Item11" }, { text: "Item12" }, { text: "Item13" }],
                rows: [
                    { id: 11, pid: 1, text: "Item11", cells: [{ text: "Item111" }, { text: "Item112" }, { text: "Item113" }] },
                    { 
                        id: 12,
                        pid: 1,
                        text: "Item12",
                        cells: [{ text: "Item121" }, { text: "Item122" }, { text: "Item123" }],
                        rows: [
                            { id: 121, pid: 12, text: "Item121", cells: [{ text: "Item1211" }, { text: "Item1212" }, { text: "Item1213" }] },
                            { 
                                id: 122,
                                pid: 12,
                                text: "Item122", 
                                cells: [{ text: "Item1221" }, { text: "Item1222" }, { text: "Item1223" }],
                                expanded: false,
                                rows: [
                                    { id: 1221, pid: 122, text: "Item1221", cells: [{ text: "Item12211" }, { text: "Item12212" }, { text: "Item12213" }] },
                                    { id: 1222, pid: 122, text: "Item1222", cells: [{ text: "Item12221" }, { text: "Item12222" }, { text: "Item12223" }] }
                                ]
                            },
                            { id: 123, pid: 12, text: "Item123", cells: [{ text: "Item1231" }, { text: "Item1232" }, { text: "Item1233" }] },
                            { id: 124, pid: 12, text: "Item124", cells: [{ text: "Item1241" }, { text: "Item1242" }, { text: "Item1243" }] },
                            { id: 125, pid: 12, text: "Item125", cells: [{ text: "Item1251" }, { text: "Item1252" }, { text: "Item1253" }] }
                        ]
                    },
                    { id: 13, pid: 1, text: "Item13", cells: [{ text: "Item131" }, { text: "Item132" }, { text: "Item133" }] },
                    {
                        id: 14,
                        pid: 1,
                        text: "Item14",
                        cells: [{ text: "Item141" }, { text: "Item142" }, { text: "Item143" }],
                        rows: [
                            { id: 141, pid: 14, text: "Item141", cells: [{ text: "Item1411" }, { text: "Item1412" }, { text: "Item1413" }] },
                            { id: 142, pid: 14, text: "Item142", cells: [{ text: "Item1421" }, { text: "Item1422" }, { text: "Item1423" }] }
                        ]
                    }
                ]
            },
            {
                id: 2,
                text: "Item2",
                cells: [{ text: "Item21" }, { text: "Item22" }, { text: "Item23" }],
                expanded: false,
                rows: [
                    { id: 21, pid: 2, text: "Item21", cells: [{ text: "Item211" }, { text: "Item212" }, { text: "Item213" }] },
                    { id: 22, pid: 2, text: "Item22", cells: [{ text: "Item221" }, { text: "Item222" }, { text: "Item223" }] },
                    {
                        id: 23,
                        pid: 2,
                        text: "Item23", 
                        cells: [{ text: "Item231" }, { text: "Item232" }, { text: "Item233" }],
                        expanded: false,
                        rows: [
                            { id: 231, pid: 23, text: "Item231", cells: [{ text: "Item2311" }, { text: "Item2312" }, { text: "Item2313" }] },
                            { id: 232, pid: 23, text: "Item232", cells: [{ text: "Item2321" }, { text: "Item2322" }, { text: "Item2323" }] }
                        ]
                    }
                ]
            },
            { id: 3, text: "Item3", cells: [{ text: "Item31" }, { text: "Item32" }, { text: "Item33" }] },
            { id: 4, text: "Item4", cells: [{ text: "Item41" }, { text: "Item42" }, { text: "Item43" }] },
            { id: 5, text: "Item5", cells: [{ text: "Item51" }, { text: "Item52" }, { text: "Item53" }] },
            {
                id: 6,
                text: "Item6",
                cells: [{ text: "Item61" }, { text: "Item62" }, { text: "Item63" }],
                rows: [
                    { id: 61, pid: 6, text: "Item61", cells: [{ text: "Item611" }, { text: "Item612" }, { text: "Item613" }] },
                    { id: 62, pid: 6, text: "Item62", cells: [{ text: "Item621" }, { text: "Item622" }, { text: "Item623" }] }
                ]
            },
            { id: 7, text: "Item7", cells: [{ text: "Item71" }, { text: "Item72" }, { text: "Item73" }] }
        ];
    }

    ngAfterViewInit(){
        this.treegrid.nativeElement.headerTemplate = this.currentHeaderTemplate;
        this.treegrid.nativeElement.rowTemplate = this.currentRowTemplate;
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
