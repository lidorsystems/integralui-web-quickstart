import { Component, ElementRef, ViewChild } from '@angular/core';

import 'integralui-web/components/integralui.button';
import 'integralui-web/components/integralui.numeric';
import 'integralui-web/components/integralui.select';
import 'integralui-web/components/integralui.grid';
import { IntegralUISelectionMode, IntegralUITheme } from 'integralui-web/components/integralui.enums';

@Component({
    selector: '',
    templateUrl: './grid-pagination-overview.html',
    styleUrls: ['./grid-pagination-overview.css']
})
export class GridPaginationOverview {
    @ViewChild('grid', { static: false }) grid!: ElementRef;

    public columns: Array<any> = [];
    public ctrlSize: any = { height: 350 };
    public currentResourcePath: string = 'assets/icons';
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
            this.grid.nativeElement.addColumn({ id: j, headerText: 'Header' + j });
    }

    addRows(){
            
        for (let i = 0; i < this.numRows; i++){
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

            this.grid.nativeElement.addRow(row);
            this.rowCount++;
        }
    }

    getPaging(){
        return  { enabled: true, pageSize: parseInt(this.currentPageSize.text) };
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

    // Events ------------------------------------------------------------------------------------

    numColumnsChanged(e: any){
        this.numColumns = e.detail.value;
    }

    numRowsChanged(e: any){
        this.numRows = e.detail.value;
    }

    pageSizeChanged(e: any){
        if (e.detail.item)
            this.currentPageSize = e.detail.item;
    }
}
