import { Component, ElementRef, ViewChild } from '@angular/core';

import 'integralui-web/components/integralui.grid';
import { IntegralUITheme } from 'integralui-web/components/integralui.enums';
import { iuiGridRowDifferentColorsStyle } from './grid-rows-different-colors.style';

@Component({
    selector: '',
    templateUrl: './grid-rows-different-colors.html',
    styleUrls: ['./grid-rows-different-colors.css']
})
export class GridRowsDifferentColors {
    @ViewChild('grid', { static: false }) grid!: ElementRef;

    public columns: Array<any> = [];
    public ctrlSize: any = { width: 700, height: 300 };
    public currentResourcePath: string = 'assets/icons';
    public currentTheme: IntegralUITheme = IntegralUITheme.Office;
    public customStyle: any = iuiGridRowDifferentColorsStyle;
    public rows: Array<any> = [];

    constructor(){
        this.columns = [
            { id: 1, headerText: 'Header1', width: 200 },
            { id: 2, headerText: 'Header2', width: 250 },
            { id: 3, headerText: 'Header3', width: 120 }
        ];

        this.rows = [
            { id: 1, cells: [{ cid: 1, text: "Cell 11" }, { cid: 2, text: "Cell 12" }, {  cid: 3, text: "Cell 13" }] },
            { id: 2, cells: [{ cid: 1, text: "Cell 21" }, {  cid: 2, text: "Cell 22" }, { cid: 3, text: "Cell 23" }] },
            { 
                id: 3, 
                style: { background: 'red', color: 'white' },
                cells: [{ cid: 1, text: "Cell 31" }, {  cid: 2, text: "Cell 32" }, { cid: 3, text: "Cell 33" }]
            },
            { id: 4, cells: [{ cid: 1, text: "Cell 41" }, {  cid: 2, text: "Cell 42" }, { cid: 3, text: "Cell 43" }] },
            { 
                id: 5, 
                style: { background: 'green', color: 'white', fontStyle: 'italic' },
                cells: [{ cid: 1, text: "Cell 51" }, {  cid: 2, text: "Cell 52" }, { cid: 3, text: "Cell 53" }]
            },
            { id: 6, cells: [{ cid: 1, text: "Cell 61" }, {  cid: 2, text: "Cell 62" }, { cid: 3, text: "Cell 63" }] },
            { id: 7, cells: [{ cid: 1, text: "Cell 71" }, {  cid: 2, text: "Cell 72" }, { cid: 3, text: "Cell 73" }] },
            { 
                id: 8, 
                style: { background: 'blue', color: 'white', fontWeight: 'bold' },
                cells: [{ cid: 1, text: "Cell 81" }, {  cid: 2, text: "Cell 82" }, { cid: 3, text: "Cell 83" }]
            },
            { id: 9, cells: [{ cid: 1, text: "Cell 91" }, {  cid: 2, text: "Cell 92" }, { cid: 3, text: "Cell 93" }] }
        ];
    }

    // Events ------------------------------------------------------------------------------------

    gridSelectionChanged(e: any){
        let obj = e.detail.obj;

        if (obj && obj.type === 'row'){
            obj.clickCount = obj.clickCount === undefined ? 1 : obj.clickCount + 1;

            let currentStyle = obj.style || { color: 'white', transition: 'all 0.25s ease-in' }

            switch (obj.clickCount % 4){
                case 1:
                    currentStyle.background = 'red';
                    break;

                case 2:
                    currentStyle.background = 'green';
                    break;

                case 3:
                    currentStyle = null;
                    this.grid.nativeElement.setClass('animated-background', obj);
                    break;

                default:
                    currentStyle = null;
                    break;
            }

            // Remove CSS class from the row when click count is different than 3
            // In this case inline style is applied instead of a CSS class
            if (obj.clickCount % 4 !== 3)
                this.grid.nativeElement.setClass(null, obj);

            // If there is inline style available, apply it to the row, otherwise delete the style field
            if (currentStyle)
                obj.style = currentStyle; 
            else
                delete obj.style;

            this.grid.nativeElement.refresh();
        }
    }
}
