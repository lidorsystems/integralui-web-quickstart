import { Component } from '@angular/core';

import 'integralui-web/components/integralui.grid';
import { IntegralUISelectionMode, IntegralUITheme } from 'integralui-web/components/integralui.enums';

@Component({
    selector: '',
    templateUrl: './grid-columns-different-colors.html',
    styleUrls: ['./grid-columns-different-colors.css']
})
export class GridColumnsDifferentColors {
    public columns: Array<any> = [];
    public ctrlSize: any = { width: 700, height: 300 };
    public currentResourcePath: string = 'assets/icons';
    public currentSelectionMode: IntegralUISelectionMode = IntegralUISelectionMode.None;
    public currentTheme: IntegralUITheme = IntegralUITheme.Office;
    public rows: Array<any> = [];

    constructor(){
        this.columns = [
            { 
                id: 1, 
                headerText: 'Header1', 
                footerText: 'Footer1', 
                style: {
                    header: { background: '#ab3737', borderColor: '#872d2d', color: 'white' },
                    body: { background: '#fac5c5' },
                    footer: { background: '#ff6363' }
                },
                width: 200
            },
            { 
                id: 2, 
                headerText: 'Header2', 
                footerText: 'Footer2', 
                style: {
                    header: { background: '#30914c', borderColor: '#266e3b', color: 'white' },
                    body: { background: '#9ce6b1' },
                    footer: { background: '#4bc96f' }
                },
                width: 250
            },
            { 
                id: 3, 
                headerText: 'Header3', 
                footerText: 'Footer3', 
                style: {
                    header: { background: '#345d8c', borderColor: '#29486b', color: 'white' },
                    body: { background: '#b9d1ed' },
                    footer: { background: '#5796de' }
                },
                width: 120,
            }
        ];

        this.rows = [
            { id: 1, cells: [{ cid: 1, text: "Cell 11" }, { cid: 2, text: "Cell 12" }, {  cid: 3, text: "Cell 13" }] },
            { id: 2, cells: [{ cid: 1, text: "Cell 21" }, {  cid: 2, text: "Cell 22" }, { cid: 3, text: "Cell 23" }] },
            { id: 3, cells: [{ cid: 1, text: "Cell 31" }, {  cid: 2, text: "Cell 32" }, { cid: 3, text: "Cell 33" }] },
            { id: 4, cells: [{ cid: 1, text: "Cell 41" }, {  cid: 2, text: "Cell 42" }, { cid: 3, text: "Cell 43" }] },
            { id: 5, cells: [{ cid: 1, text: "Cell 51" }, {  cid: 2, text: "Cell 52" }, { cid: 3, text: "Cell 53" }] },
            { id: 6, cells: [{ cid: 1, text: "Cell 61" }, {  cid: 2, text: "Cell 62" }, { cid: 3, text: "Cell 63" }] },
            { id: 7, cells: [{ cid: 1, text: "Cell 71" }, {  cid: 2, text: "Cell 72" }, { cid: 3, text: "Cell 73" }] },
            { id: 8, cells: [{ cid: 1, text: "Cell 81" }, {  cid: 2, text: "Cell 82" }, { cid: 3, text: "Cell 83" }] },
            { id: 9, cells: [{ cid: 1, text: "Cell 91" }, {  cid: 2, text: "Cell 92" }, { cid: 3, text: "Cell 93" }] }
        ];
    }
}
