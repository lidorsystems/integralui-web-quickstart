import { Component, ElementRef, ViewChild } from '@angular/core';

import 'integralui-web/components/integralui.grid';
import { IntegralUISelectionMode, IntegralUITheme } from 'integralui-web/components/integralui.enums';
import { iuiGridCellDifferentColorsStyle } from './grid-cells-different-colors.style';

@Component({
    selector: '',
    templateUrl: './grid-cells-different-colors.html',
    styleUrls: ['./grid-cells-different-colors.css']
})
export class GridCellsDifferentColors {
    @ViewChild('grid', { static: false }) grid!: ElementRef;

    public columns: Array<any> = [];
    public ctrlSize: any = { width: 700, height: 300 };
    public currentResourcePath: string = 'assets/icons';
    public currentSelectionMode: IntegralUISelectionMode = IntegralUISelectionMode.None;
    public currentTheme: IntegralUITheme = IntegralUITheme.Office;
    public customStyle: any = iuiGridCellDifferentColorsStyle;
    public rows: Array<any> = [];

    constructor(){
        this.columns = [
            { id: 1, headerText: 'Header1', width: 200 },
            { id: 2, headerText: 'Header2', width: 250 },
            { id: 3, headerText: 'Header3', width: 120 }
        ];

        this.rows = [
            { id: 1, cells: [{ cid: 1, text: "Cell 11" }, { cid: 2, text: "Cell 12" }, {  cid: 3, text: "Cell 13" }] },
            { 
                id: 2, 
                cells: [
                    { cid: 1, text: "Cell 21", style: { background: 'red', color: 'white' } }, 
                    { cid: 2, text: "Cell 22" }, 
                    { cid: 3, text: "Cell 23" }
                ]
            },
            { id: 3, cells: [{ cid: 1, text: "Cell 31" }, {  cid: 2, text: "Cell 32" }, { cid: 3, text: "Cell 33" }] },
            { 
                id: 4, 
                cells: [
                    { cid: 1, text: "Cell 41" }, 
                    {  cid: 2, text: "Cell 42" }, 
                    { cid: 3, text: "Cell 43", style: { background: 'blue', color: 'white' } }
                ]
            },
            { id: 5, cells: [{ cid: 1, text: "Cell 51" }, {  cid: 2, text: "Cell 52" }, { cid: 3, text: "Cell 53" }] },
            { 
                id: 6, 
                cells: [
                    { cid: 1, text: "Cell 61" }, 
                    {  cid: 2, text: "Cell 62", style: { background: 'green', color: 'white' } }, 
                    { cid: 3, text: "Cell 63" }
                ]
            },
            { id: 7, cells: [{ cid: 1, text: "Cell 71" }, {  cid: 2, text: "Cell 72" }, { cid: 3, text: "Cell 73" }] },
            { id: 8, cells: [{ cid: 1, text: "Cell 81" }, {  cid: 2, text: "Cell 82" }, { cid: 3, text: "Cell 83" }] },
            { id: 9, cells: [{ cid: 1, text: "Cell 91" }, {  cid: 2, text: "Cell 92" }, { cid: 3, text: "Cell 93" }] }
        ];
    }

    // Events ------------------------------------------------------------------------------------

    gridCellClicked(e: any){
        let cell = e.detail.cell;

        if (cell){
            cell.clickCount = cell.clickCount === undefined ? 1 : cell.clickCount + 1;

            let currentStyle = cell.style || { color: 'white', transition: 'all 0.25s ease-in' }

            switch (cell.clickCount % 4){
                case 1:
                    currentStyle = null;
                    this.grid.nativeElement.setClass('animated-background', cell);
                    break;

                case 2:
                    currentStyle.background = 'green';
                    break;

                case 3:
                    currentStyle.background = 'blue';
                    break;

                default:
                    currentStyle = null;
                    break;
            }

            // Remove CSS class from the cell when click count is different than 1
            // In this case inline style is applied instead of a CSS class
            if (cell.clickCount % 4 !== 1)
                this.grid.nativeElement.setClass(null, cell);

            // If there is inline style available, apply it to the row, otherwise delete the style field
            if (currentStyle)
                cell.style = currentStyle; 
            else
                delete cell.style;

            this.grid.nativeElement.refresh();
        }
    }
}
