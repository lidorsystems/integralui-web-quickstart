import { Component, ElementRef, ViewChild } from '@angular/core';
import { html } from 'integralui-web/external/lit-element';
import { styleMap } from 'integralui-web/external/style-map';

import 'integralui-web/components/integralui.contextmenu';
import 'integralui-web/components/integralui.treegrid';
import { IntegralUITheme } from 'integralui-web/components/integralui.enums';
import { iuiTreeGridContextMenuStyle } from './treegrid-context-menu.style';

@Component({
    selector: '',
    templateUrl: './treegrid-context-menu.html',
    styleUrls: ['./treegrid-context-menu.css']
})
export class TreeGridContextMenu {
    @ViewChild('treegrid', { static: false }) treegrid!: ElementRef;

    public columns: Array<any> = [];
    public ctrlSize: any = { width: 800, height: 250 };
    public currentResourcePath: string = 'assets/icons';
    public currentTheme: IntegralUITheme = IntegralUITheme.Office;
    public rows: Array<any> = [];

    public selColumn: any = null;
    public selRow: any = null;

    private columnMenu: any = {
        items: [
            { id: 3, text: "Add Column" },
            { id: 4, text: "Insert Column Before" },
            { id: 5, text: "Insert Column After" },
            { id: 6, type: "separator" },
            { id: 7, text: "Remove Column" }
        ]
    }

    private rowMenu: any = {
        items: [
            { id: 3, text: "Add Row" },
            { id: 4, text: "Insert Row Before" },
            { id: 5, text: "Insert Row After" },
            { id: 6, type: "separator" },
            { id: 7, text: "Remove Row" }
        ]
    }

    private columnCount: number = 3;
    private rowCount: number= 3;

    constructor(){
        this.columns = [
            { id: 1, headerText: "Header1", footerText: "Footer1", width: 200 },
            { id: 2, headerText: "Header2", footerText: "Footer2", width: 250 },
            { id: 3, headerText: "Header3", footerText: "Footer3", width: 120 }
        ];

        this.rows =[
            { 
                id: 1,
                text: "Item1",
                cells: [{ cid: 1, text: "Item11" }, { cid: 2, text: "Item12" }, { cid: 3, text: "Item13" }],
                rows: [
                    { id: 11, pid: 1, text: "Item11", cells: [{ cid: 1, text: "Item111" }, { cid: 2, text: "Item112" }, { cid: 3, text: "Item113" }] }
                ]
            },
            { id: 2, text: "Row2", cells: [{ cid: 1, text: "Item21" }, { cid: 2, text: "Item22" }, { cid: 3, text: "Item23" }] }
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
            <div>
                <iui-contextmenu
                    .customStyle=${iuiTreeGridContextMenuStyle}
                    .enabled=${true}
                    .settings=${this.columnMenu}
                    .theme=${this.currentTheme}
                    @menuClick="${(e: any) => this.columnMenuClick(e)}"
                    @menuOpening="${() => this.columnMenuOpening(column)}"
                >
                    <span>${column.headerText}</span>
                </iui-contextmenu>
            </div>
        `;
    };

    currentRowTemplate = (row: any, cell: any) => { 
        return html`
            <div style=${styleMap({ display: 'inline-block', padding: '2px 0 0 0' })}>
                <iui-contextmenu
                    .customStyle=${iuiTreeGridContextMenuStyle}
                    .enabled=${true}
                    .settings=${this.rowMenu}
                    .theme=${this.currentTheme}
                    @menuClick="${(e: any) => this.rowMenuClick(e)}"
                    @menuOpening="${() => this.rowMenuOpening(row)}"
                >
                    <span>${cell.text}</span>
                </iui-contextmenu>
            </div>
        `;
    };

    // Add Columns ----------------------------------------------------------------
                
    createNewColumn(){
        this.columnCount++;

        return { id: this.columnCount, headerText: "Header" + this.columnCount, footerText: "Footer" + this.columnCount };
    }

    // Add Rows ----------------------------------------------------------------
                
    createNewRow(){
        this.rowCount++;

        let newRow: any = {
            text: "Row" + this.rowCount,
            cells: []
        }

        for (let j = 1; j <= this.columns.length; j++){
            let colId = this.columns[j-1].id;

            newRow.cells.push({ cid: colId, text: "Item" + this.rowCount + colId });
        }

        return newRow;
    }

    // ContextMenu events ----------------------------------------------------------------

    columnMenuClick(e: any){
        if (e.detail.item){
            // Action depends on selected menu option
            switch (e.detail.item.id){
                case 3:
                    this.treegrid.nativeElement.addColumn(this.createNewColumn());
                    break;

                case 4:
                    this.treegrid.nativeElement.insertColumnBefore(this.createNewColumn(), this.selColumn);
                    break;

                case 5:
                    this.treegrid.nativeElement.insertColumnAfter(this.createNewColumn(), this.selColumn);
                    break;

                case 7:
                    this.treegrid.nativeElement.removeColumn(this.selColumn);
                    break;

                default:
                    break;
            }

            this.treegrid.nativeElement.updateLayout();
       }
    }

    columnMenuOpening(column: any){
        this.selColumn = column;
    }

    rowMenuClick(e: any){
        if (e.detail.item){
            // Action depends on selected menu option
            switch (e.detail.item.id){
                case 3:
                    this.treegrid.nativeElement.addRow(this.createNewRow(), this.selRow);
                    break;

                case 4:
                    this.treegrid.nativeElement.insertRowBefore(this.createNewRow(), this.selRow);
                    break;

                case 5:
                    this.treegrid.nativeElement.insertRowAfter(this.createNewRow(), this.selRow);
                    break;

                case 7:
                    this.treegrid.nativeElement.removeRow(this.selRow);
                    break;

                default:
                    break;
            }

            this.treegrid.nativeElement.updateLayout();
       }
    }
    
    rowMenuOpening(row: any){
        this.selRow = row;
    }
}
