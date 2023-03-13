import { Component, ElementRef, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { html } from 'integralui-web/external/lit-element';

import 'integralui-web/components/integralui.checkbox';
import 'integralui-web/components/integralui.datepicker';
import 'integralui-web/components/integralui.grid';
import 'integralui-web/components/integralui.select';
import IntegralUICommonService from 'integralui-web/services/integralui.common.service';
import { IntegralUIEditMode, IntegralUIEditorType, IntegralUIDateFormat, IntegralUITheme } from 'integralui-web/components/integralui.enums';
import { iuiGridMultiLineHeadersStyle } from './grid-multi-line-headers.style';

@Component({
    selector: '',
    templateUrl: './grid-multi-line-headers.html',
    styleUrls: ['./grid-multi-line-headers.css']
})
export class GridMultiLineHeaders {
    @ViewChild('grid', { static: false }) grid!: ElementRef;

    private _commonService!: IntegralUICommonService;

    public columns: Array<any> = [];
    public ctrlSize: any = { height: 510 };
    public currentEditMode: IntegralUIEditMode = IntegralUIEditMode.Custom;
    public currentResourcePath: string = 'assets/icons';
    public currentTheme: IntegralUITheme = IntegralUITheme.Office;
    public customStyle: any = iuiGridMultiLineHeadersStyle;
    public rows: Array<any> = [];

    public deliveryOptions: Array<any> = [
        { text: "None", value: -1 },
        { text: "Delivery Truck", value: 0 },
        { text: "Regular Air", value: 1 },
        { text: "Express Air", value: 2 }
    ];

    constructor(private http: HttpClient){
        this._commonService = new IntegralUICommonService();

        this.columns = [
            { id: 1, editorType: IntegralUIEditorType.CheckBox, width: 30, fixedWidth: true },
            { id: 2, title: 'ID', headerAlignment: 'center', contentAlignment: 'right', width: 40, fixedWidth: true },
            { id: 3, title: 'Customer', width: 200 },
            { 
                id: 4, 
                title: 'Order Details',
                headerAlignment: 'center',
                columns: [
                    { 
                        id: 41, 
                        title: 'Product', 
                        headerAlignment: 'center',
                        columns: [
                            { id: 411, title: 'Name', width: 150 },
                            { id: 412, title: 'Qty', headerAlignment: 'center', contentAlignment: 'right', width: 60 },
                            { 
                                id: 413, 
                                title: 'Price', 
                                headerAlignment: 'center', 
                                contentAlignment: 'right', 
                                format: { 
                                    options: { 
                                        currency: 'USD', 
                                        style: 'currency',
                                        minimumFractionDigits: 2,
                                        maximumFractionDigits: 2
                                    }
                                }, 
                               width: 90
                            }
                        ]
                    },
                    { 
                        id: 42, 
                        title: 'Shipping Info', 
                        headerAlignment: 'center', 
                        contentAlignment: 'center', 
                        columns: [
                            { 
                                id: 421, 
                                title: 'Delivery', 
                                editorType: IntegralUIEditorType.DropDownList, 
                                editorSettings: { 
                                    allowAnimation: true,
                                    dropDownAdjustment: { top: 8 },
                                    items: this.deliveryOptions
                                }, 
                                headerAlignment: 'center', 
                                width: 150
                            },
                            { 
                                id: 422, 
                                title: 'Cost', 
                                headerAlignment: 'center',
                                contentAlignment: 'right', 
                                format: { 
                                    options: { 
                                        currency: 'USD', 
                                        style: 'currency',
                                        minimumFractionDigits: 2,
                                        maximumFractionDigits: 2
                                    }
                                }, 
                                width: 90
                            },
                            { 
                                id: 423, 
                                title: 'Date', 
                                editorType: IntegralUIEditorType.Date,
                                editorSettings: {
                                    allowAnimation: true,
                                    dropDownAdjustment: { top: 6 },
                                    locales: 'en-GB',
                                    format: IntegralUIDateFormat.Custom,
                                    formatOptions: {
                                        year: 'numeric',
                                        month: 'short',
                                        day: '2-digit'
                                    }
                                },
                                headerAlignment: 'center', 
                                contentAlignment: 'center', 
                                width: 120
                            }
                        ]
                    }
                ]
            }
        ];

        this.rows = [
            { id: 1, cells: [{ cid: 1 }, { cid: 2, text: '112' }, { cid: 3, text: 'Kevin MacIntyre' }, { cid: 411, text: 'Eldon Base for stackable storage shelf, platinum' }, { cid: 412, value: 6 }, { cid: 413, value: 38.94 }, { cid: 421, value: 1 }, { cid: 422, value: 35.00 }, { cid: 423, value: new Date(2018, 9, 20) }] },
            { id: 2, cells: [{ cid: 1, value: true }, { cid: 2, text: '293' }, { cid: 3, text: 'Barry French' }, { cid: 411, text: '1.7 Cubic Foot Compact "Cube" Office Refrigerators' }, { cid: 412, value: 49 }, { cid: 413, value: 208.16 }, { cid: 421, value: 0 }, { cid: 422, value: 68.02 }, { cid: 423, value: new Date(2019, 2, 11) }] },
            { id: 5, cells: [{ cid: 1 }, { cid: 2, text: '483' }, { cid: 3, text: 'Clay Rozendal' }, { cid: 411, text: 'R380' }, { cid: 412, value: 30 }, { cid: 413, value: 195.99 }, { cid: 421, value: 1 }, { cid: 422, value: 3.99 }, { cid: 423, value: new Date(2020, 0, 17) }] },
            { id: 7, cells: [{ cid: 1 }, { cid: 2, text: '534' }, { cid: 3, text: 'Alan Barnes' }, { cid: 411, text: 'G.E. Longer-Life Indoor Recessed Floodlight Bulbs' }, { cid: 412, value: 21 }, { cid: 413, value: 6.64 }, { cid: 421, value: 2 }, { cid: 422, value: 4.95 }, { cid: 423, value: new Date(2020, 3, 22) }] },
            { id: 8, cells: [{ cid: 1 }, { cid: 2, text: '678' }, { cid: 3, text: 'Dorothy Badders' }, { cid: 411, text: 'Xerox 198' }, { cid: 412, value: 37 }, { cid: 413, value: 4.98 }, { cid: 421, value: 1 }, { cid: 422, value: 8.33 }, { cid: 423, value: new Date(2020, 8, 19) }] },
            { id: 3, cells: [{ cid: 1, value: true }, { cid: 2, text: '643' }, { cid: 3, text: 'Monica Federle' }, { cid: 411, text: 'SAFCO Commercial Wire Shelving, Black' }, { cid: 412, value: 21 }, { cid: 413, value: 138.14 }, { cid: 421, value: 2 }, { cid: 422, value: 27.50 }, { cid: 423, value: new Date(2020, 6, 5) }] },
            { id: 4, cells: [{ cid: 1 }, { cid: 2, text: '868' }, { cid: 3, text: 'Carlos Daly' }, { cid: 411, text: 'Holmes HEPA Air Purifier' }, { cid: 412, value: 32 }, { cid: 413, value: 21.78 }, { cid: 421, value: 1 }, { cid: 422, value: 5.94 }, { cid: 423, value: new Date(2020, 7, 9) }] },
            { id: 9, cells: [{ cid: 1 }, { cid: 2, text: '933' }, { cid: 3, text: 'Claudia Miner' }, { cid: 411, text: "Wilson Jones 1' Hanging DublLock® Ring Binders" }, { cid: 412, value: 15 }, { cid: 413, value: 5.28 }, { cid: 421, value: 0 }, { cid: 422, value: 2.99 }, { cid: 423, value: new Date(2021, 4, 16) }] },
            { id: 10, cells: [{ cid: 1 }, { cid: 2, text: '995' }, { cid: 3, text: 'Neola Schneider' }, { cid: 411, text: 'Ultra Commercial Grade Dual Valve Door Closer' }, { cid: 412, value: 26 }, { cid: 413, value: 39.89 }, { cid: 421, value: 1 }, { cid: 422, value: 3.04 }, { cid: 423, value: new Date(2021, 5, 23) }] },
            { id: 6, cells: [{ cid: 1 }, { cid: 2, text: '1154' }, { cid: 3, text: 'Sylvia Foulston' }, { cid: 411, text: 'Hon 4-Shelf Metal Bookcases' }, { cid: 412, value: 44 }, { cid: 413, value: 100.98 }, { cid: 421, value: 0 }, { cid: 422, value: 26.22 }, { cid: 423, value: new Date(2021, 11, 16) }] }
        ];
    }

    // Templates ---------------------------------------------------------------------------------

    currentHeaderTemplate = (column: any) => { 
        return html`<span class="header-label">${column.title}</span>`;
    };
}