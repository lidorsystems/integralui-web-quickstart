import { Component, ElementRef, ViewChild } from '@angular/core';

import 'integralui-web/components/integralui.button.js';
import 'integralui-web/components/integralui.numeric.js';
import 'integralui-web/components/integralui.select.js';
import 'integralui-web/components/integralui.treegrid.js';
import { IntegralUISelectionMode, IntegralUITheme } from 'integralui-web/components/integralui.enums.js';

@Component({
    selector: '',
    templateUrl: './treegrid-pagination.html',
    styleUrls: ['./treegrid-pagination.css']
})
export class TreeGridPagination {
    @ViewChild('treegrid', { static: false }) treegrid: ElementRef;

    public columns: Array<any> = [];
    public ctrlSize: any = { height: 350 };
    public currentResourcePath: string = 'assets/integralui-web/icons';
    public currentSelectionMode: IntegralUISelectionMode = IntegralUISelectionMode.MultiExtended;
    public currentTheme: IntegralUITheme = IntegralUITheme.Office;
    public rows: Array<any> = [];

    public buttonSize: any = { width: 100 };
    public inputSize: any = { width: 100 };

    public currentPageSize: any = null;
    public pageSize: Array<any> = [
        { text: "2" },
        { text: "10" },
        { text: "25" },
        { text: "50" },
        { text: "100" },
        { text: "250" },
        { text: "500" },
        { text: "1000" },
        { text: "2500" },
        { text: "5000" }
    ];

    public numColumns: number = 25;
    public numLevels: number = 2;
    public numRows: number = 10000;
    public rowCount: number = 0;

    constructor(){
        this.columns = [
        ];

        this.currentPageSize = this.pageSize[4];
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

                this.treegrid.nativeElement.addRow(row, parentRow);
                this.rowCount++;
            
                this.addRows(row, level + 1);
            }
        }
    }

    getPaging(){
        return  { enabled: true, pageSize: parseInt(this.currentPageSize.text) };
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

    pageSizeChanged(e: any){
        if (e.detail.item)
            this.currentPageSize = e.detail.item;
    }
}
