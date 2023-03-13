import { Component, ElementRef, ViewChild } from '@angular/core';

import 'integralui-web/components/integralui.select';
import 'integralui-web/components/integralui.treegrid';
import { IntegralUITheme } from 'integralui-web/components/integralui.enums';

@Component({
    selector: '',
    templateUrl: './treegrid-expanding-column.html',
    styleUrls: ['./treegrid-expanding-column.css']
})
export class TreeGridExpandingColumn {
    @ViewChild('treegrid', { static: false }) treegrid!: ElementRef;

    public columns: Array<any> = [];
    public ctrlSize: any = { height: 400 };
    public currentResourcePath: string = 'assets/icons';
    public currentTheme: IntegralUITheme = IntegralUITheme.Office;
    public rows: Array<any> = [];

    public currentSelectedIndex: number = -1;
    public selectOptions: Array<any> = [];

    constructor(){
        this.columns = [
            { id: 1, headerText: 'Header1', footerText: 'Footer1', width: 250 },
            { id: 2, headerText: 'Header2', footerText: 'Footer2', width: 250 },
            { id: 3, headerText: 'Header3', footerText: 'Footer3', width: 250 }
        ];

        this.rows = [
            { 
                id: 1,
                cells: [{ cid: 1, text: "Cell 11" }, { cid: 2, text: "Cell 12" }, {  cid: 3, text: "Cell 13" }],
                rows: [
                    { id: 11, pid: 1, cells: [{ cid: 1, text: "Cell 111" }, {  cid: 2, text: "Cell 112" }, { cid: 3, text: "Cell 113" }] },
                    { 
                        id: 12,
                        pid: 1,
                        cells: [{ cid: 1, text: "Cell 121" }, {  cid: 2, text: "Cell 122" }, { cid: 3, text: "Cell 123" }],
                        rows: [
                            { id: 121, pid: 12, cells: [{ cid: 1, text: "Cell 1221" }, {  cid: 2, text: "Cell 1212" }, { cid: 3, text: "Cell 1213" }] },
                            { 
                                id: 122,
                                pid: 12,
                                cells: [{ cid: 1, text: "Cell 1221" }, {  cid: 2, text: "Cell 1222" }, { cid: 3, text: "Cell 1223" }],
                                expanded: false,
                                rows: [
                                    { id: 1221, pid: 122, cells: [{ cid: 1, text: "Cell 12211" }, {  cid: 2, text: "Cell 12212" }, { cid: 3, text: "Cell 12213" }] },
                                    { id: 1222, pid: 122, cells: [{ cid: 1, text: "Cell 12221" }, {  cid: 2, text: "Cell 12222" }, { cid: 3, text: "Cell 12223" }] }
                                ]
                            },
                            { id: 123, pid: 12, cells: [{ cid: 1, text: "Cell 1231" }, {  cid: 2, text: "Cell 1232" }, { cid: 3, text: "Cell 1233" }] }
                        ]
                    },
                    { id: 13, pid: 1, cells: [{ cid: 1, text: "Cell 131" }, {  cid: 2, text: "Cell 132" }, { cid: 3, text: "Cell 133" }] },
                    {
                        id: 14,
                        pid: 1,
                        cells: [{ cid: 1, text: "Cell 141" }, {  cid: 2, text: "Cell 142" }, { cid: 3, text: "Cell 143" }],
                        expanded: false,
                        rows: [
                            { id: 141, pid: 14, cells: [{ cid: 1, text: "Cell 1411" }, {  cid: 2, text: "Cell 1412" }, { cid: 3, text: "Cell 1413" }] },
                            { id: 142, pid: 14, cells: [{ cid: 1, text: "Cell 1421" }, {  cid: 2, text: "Cell 1422" }, { cid: 3, text: "Cell 1423" }] }
                        ]
                    }
                ]
            },
            {
                id: 2,
                cells: [{ cid: 1, text: "Cell 21" }, {  cid: 2, text: "Cell 22" }, { cid: 3, text: "Cell 23" }],
                rows: [
                    { id: 21, pid: 2, cells: [{ cid: 1, text: "Cell 211" }, {  cid: 2, text: "Cell 212" }, { cid: 3, text: "Cell 213" }] },
                    { id: 22, pid: 2, cells: [{ cid: 1, text: "Cell 221" }, {  cid: 2, text: "Cell 222" }, { cid: 3, text: "Cell 223" }] },
                    {
                        id: 23,
                        pid: 2,
                        cells: [{ cid: 1, text: "Cell 231" }, {  cid: 2, text: "Cell 232" }, { cid: 3, text: "Cell 233" }],
                        expanded: false,
                        rows: [
                            { id: 231, pid: 23, cells: [{ cid: 1, text: "Cell 2311" }, {  cid: 2, text: "Cell 2312" }, { cid: 3, text: "Cell 2313" }] },
                            { id: 232, pid: 23, cells: [{ cid: 1, text: "Cell 2321" }, {  cid: 2, text: "Cell 2322" }, { cid: 3, text: "Cell 2323" }] }
                        ]
                    }
                ]
            },
            { id: 3, cells: [{ cid: 1, text: "Cell 31" }, {  cid: 2, text: "Cell 32" }, { cid: 3, text: "Cell 33" }] }
        ];
    }

    ngAfterViewInit(){
        this.init();
    }

    //
    // Methods -----------------------------------------------------------------------------------
    //
    
    init(){
        // Create a dropdown list from all columns
        this.treegrid.nativeElement.columns.forEach((column: any) => {
            let item = { 
                id: column.id, 
                text: column.headerText
            }

            this.selectOptions.push(item);
        });

        this.currentSelectedIndex = 0;
    }

    // Events ------------------------------------------------------------------------------------

    onColumnSelectionChanged(e: any){
        if (e.detail.index >= 0)
            this.treegrid.nativeElement.expandColumnIndex = e.detail.index;
    } 
}
