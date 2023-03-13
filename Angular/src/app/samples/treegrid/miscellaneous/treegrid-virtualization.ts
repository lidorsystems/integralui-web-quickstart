import { Component, ElementRef, ViewChild } from '@angular/core';

import 'integralui-web/components/integralui.button';
import 'integralui-web/components/integralui.numeric';
import 'integralui-web/components/integralui.treegrid';
import { IntegralUISelectionMode, IntegralUITheme } from 'integralui-web/components/integralui.enums';

@Component({
    selector: '',
    templateUrl: './treegrid-virtualization.html',
    styleUrls: ['./treegrid-virtualization.css']
})
export class TreeGridVirtualization {
    @ViewChild('treegrid', { static: false }) treegrid!: ElementRef;

    public columns: Array<any> = [];
    public ctrlSize: any = { height: 400 };
    public currentResourcePath: string = 'assets/icons';
    public currentSelectionMode: IntegralUISelectionMode = IntegralUISelectionMode.MultiExtended;
    public currentTheme: IntegralUITheme = IntegralUITheme.Office;
    public rows: Array<any> = [];

    public buttonSize: any = { width: 100 };
    public inputSize: any = { width: 100 };

    public numColumns: number = 25;
    public numLevels: number = 2;
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
            this.treegrid.nativeElement.addColumn({ id: j, headerText: 'Header' + j });
    }

    addRows(parentRow: any, level: number){
        if (level > this.numLevels)
            return;
            
        let numChilds = this.getRandomNumber(level);    
        for (let i = 0; i < numChilds; i++){
            if (this.rowCount < this.numRows){
                let row: any = {
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

                this.treegrid.nativeElement.addRow(row, parentRow);
                this.rowCount++;
            
                this.addRows(row, level + 1);
            }
        }
    }
            
    // Make sure each row has a random set of child rows
    getRandomNumber(level: number){
        let nCount = 1 + Math.floor(Math.random() * 10);
        
        if (level === 0){
            if (this.numLevels === 0)
                nCount = this.numRows;
            else {
                let derivative = 1;
                for (var k = 1; k <= this.numLevels; k++)
                    derivative = (derivative * nCount) + 1;

                nCount = this.numRows / derivative + 1;
                if (nCount < 1000)
                    nCount = 1000;
            }
        }
        
        return nCount;
    }

    add(){
        if (this.treegrid.nativeElement){
            this.treegrid.nativeElement.suspendLayout();
        
            this.clear();

            this.addColumns();
            this.addRows(null, 0);

            this.treegrid.nativeElement.resumeLayout();
        }
    }

    clear(){
        this.rowCount = 0;

        this.treegrid.nativeElement.clearColumns();
        this.treegrid.nativeElement.clearRows();

        this.treegrid.nativeElement.updateLayout();
    }

    expandAll(){
        this.treegrid.nativeElement.expand();
    }

    collapseAll(){
        this.treegrid.nativeElement.collapse();
    }

    // Events ------------------------------------------------------------------------------------

    numColumnsChanged(e: any){
        this.numColumns = e.detail.value;
    }

    numRowsChanged(e: any){
        this.numRows = e.detail.value;
    }

    numLevelsChanged(e: any){
        this.numLevels = e.detail.value;
    }
}
