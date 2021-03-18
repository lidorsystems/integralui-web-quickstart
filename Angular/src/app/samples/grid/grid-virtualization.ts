import { Component, ElementRef, ViewChild } from '@angular/core';

import 'integralui-web/components/integralui.button.js';
import 'integralui-web/components/integralui.numeric.js';
import 'integralui-web/components/integralui.grid.js';
import { IntegralUISelectionMode, IntegralUITheme } from 'integralui-web/components/integralui.enums.js';

@Component({
    selector: '',
    templateUrl: './grid-virtualization.html',
    styleUrls: ['./grid-virtualization.css']
})
export class GridVirtualization {
    @ViewChild('grid', { static: false }) grid: ElementRef;

    public columns: Array<any> = [];
    public ctrlSize: any = { height: 400 };
    public currentResourcePath: string = 'assets/integralui-web/icons';
    public currentSelectionMode: IntegralUISelectionMode = IntegralUISelectionMode.MultiExtended;
    public currentTheme: IntegralUITheme = IntegralUITheme.Office;
    public rows: Array<any> = [];

    public buttonSize: any = { width: 100 };
    public inputSize: any = { width: 100 };

    public numColumns: number = 25;
    public numRows: number = 10000;
    public rowCount: number = 0;

    constructor(){
        this.columns = [
        ];
    }

    ngAfterViewInit(){
        let self = this;
        setTimeout(function(){
            self.add();
        }, 1);
    }

    //
    // Methods -----------------------------------------------------------------------------------
    //
    
    addColumns(){
        for (let j = 1; j <= this.numColumns; j++)
            this.grid.nativeElement.addColumn({ id: j, headerText: 'Header' + j });
    }

    addRows(){
        for (let i = 0; i < this.numRows; i++){
            let row = {
                id: this.rowCount + 1,
                text: 'Item' + (this.rowCount + 1).toString(),
                expanded : false,
                cells: []
            };
                
            this.columns.forEach((column, j) => 
                row.cells.push({
                    cid: j + 1,
                    colName: column.headerText,
                    text: 'Item' + (this.rowCount + 1).toString() + (j + 1).toString()
                })
            );

            this.grid.nativeElement.addRow(row);
            this.rowCount++;
        }
    }

    add(){
        if (this.grid.nativeElement){
            this.grid.nativeElement.suspendLayout();
        
            this.clear();

            this.addColumns();
            this.addRows();

            this.grid.nativeElement.resumeLayout();
        }
    }

    clear(){
        this.rowCount = 0;

        this.grid.nativeElement.clearColumns();
        this.grid.nativeElement.clearRows();

        this.grid.nativeElement.updateLayout();
    }

    expandAll(){
        this.grid.nativeElement.expand();
    }

    collapseAll(){
        this.grid.nativeElement.collapse();
    }

    // Events ------------------------------------------------------------------------------------

    numColumnsChanged(e: any){
        this.numColumns = e.detail.value;
    }

    numRowsChanged(e: any){
        this.numRows = e.detail.value;
    }
}
