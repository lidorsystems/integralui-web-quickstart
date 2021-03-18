import { Component, ElementRef, ViewChild } from '@angular/core';
import { html } from 'integralui-web/external/lit-element.js';

import 'integralui-web/components/integralui.button.js';
import 'integralui-web/components/integralui.treegrid.js';
import IntegralUICommonService from 'integralui-web/services/integralui.common.service.js';
import { IntegralUIEditorType, IntegralUITheme } from 'integralui-web/components/integralui.enums.js';
import { iuiTreeGridAddRowDynamicallyStyle } from './treegrid-add-row-dynamically.style.js';

@Component({
    selector: '',
    templateUrl: './treegrid-add-row-dynamically.html',
    styleUrls: ['./treegrid-add-row-dynamically.css']
})
export class TreeGridAddRowDynamically {
    @ViewChild('treegrid', { static: false }) treegrid: ElementRef;

    private _commonService: IntegralUICommonService  = null;

    public buttonSize: any = { width: 100 };
    public columns: Array<any> = [];
    public ctrlSize: any = { width: 850, height: 350 };
    public currentResourcePath: string = 'assets/integralui-web/icons';
    public currentTheme: IntegralUITheme = IntegralUITheme.Office;
    public customStyle: any = iuiTreeGridAddRowDynamicallyStyle;
    public rows: Array<any> = [];

    // Edit variables
    private currentEditRow: any = null;
    private isNewRow: boolean = false;

    constructor(){
        this._commonService = new IntegralUICommonService();

        this.columns = [
            { 
                id: 2, 
                headerText: "Title", 
                editorType: IntegralUIEditorType.Text, 
                editorSettings: { 
                    allowChange: 'lost-focus'
                }, 
                width: 420
            },
            { 
                id: 3, 
                headerText: "Year", 
                headerAlignment: "center", 
                contentAlignment: "center", 
                editorType: IntegralUIEditorType.Text, 
                editorSettings: { 
                    allowChange: 'lost-focus',
                    type: 'number' 
                }
            },
            { 
                id: 4, 
                headerText: "Rating", 
                headerAlignment: "center", 
                contentAlignment: "center", 
                editorType: IntegralUIEditorType.Rating,
                width: 150, 
                fixedWidth: true
            },
            { id: 7, contentAlignment: "center", editorType: IntegralUIEditorType.Custom, width: 120, fixedWidth: true }
        ];

        this.rows =[
            { 
                id: 1,
                text: "Mystery",
                cells: [ { cid: 2, value: "Mystery" }, { cid: 3, allowEdit: false }, { cid: 4, allowEdit: false }, { cid: 7 }],
                rows: [
                    { 
                        id: 11,
                        pid: 1,
                        text: "Inception",
                        cells: [ { cid: 2, value: "Inception" }, { cid: 3, value: "2010" }, { cid: 4, value: 4 }, { cid: 7 } ]
                    },
                    { 
                        id: 13,
                        pid: 1,
                        text: "Shutter Island",
                        cells: [ { cid: 2, value: "Shutter Island" }, { cid: 3, value: "2010" }, { cid: 4, value: 3 }, { cid: 7 } ]
                    }
                ]
            }
        ];
    }

    ngAfterViewInit(){
        this.treegrid.nativeElement.rowTemplate = this.currentRowCellTemplate;
    }

    //
    // Methods -----------------------------------------------------------------------------------
    //

    // Adds a new row as root
    addRoot(){
        if (this.currentEditRow)
            this.cancelEdit(this.currentEditRow);

        this.insertRowInGrid();
        this.setFocusToCell();
    }

    // Adds a new row as child
    addChild(){
        if (this.currentEditRow)
            this.cancelEdit(this.currentEditRow);

        this.insertRowInGrid(this.treegrid.nativeElement.selectedRow);
        this.setFocusToCell();
    }

    async cancelEdit(row: any){
        if (this.isNewRow)
            this.removeRow(row);

        if (row){
            this.updateEditStatus(row, true);

            for (let j = 0; j < row.cells.length; j++)
                row.cells[j].value = row.cells[j].originalValue;
        }
    
        await this.setFocusToCell();

        this.resetEditor();
        this.isNewRow = false;

        this.treegrid.nativeElement.updateView();
    }

    // Cancels the edit process and closes the editor
    cancelKeyDown(e: any, row: any){
        switch (e.keyCode){
            case 9: // TAB
                if (!e.shiftKey)
                    e.preventDefault();
                break;

            case 13: // ENTER
                this.cancelEdit(row);
                break;

            default:
                break;
        }

        e.stopPropagation();
    }

    // Creates a new row object
    createNewRow(){
        let row: any = {
            allowEdit: true,
            id: this._commonService.getUniqueId(),
            cells: [
                { cid: 2, value: "", saved: false },
                { cid: 3, value: "", saved: false },
                { cid: 4, value: 0, saved: false },
                { cid: 7, saved: false }
            ]
        }

        // Set the row id to each cell
        for (let j = 0; j < row.cells.length; j++)
            row.cells[j].rid = row.id;

        this.isNewRow = true;

        return row;
    }

    // Cancels the edit process and closes the editor
    editKeyDown(e: any, row: any){
        switch (e.keyCode){
            case 9: // TAB
                if (e.shiftKey && row)
                    this.treegrid.nativeElement.setFocus(row.cells[3]);
                break;

            case 13: // ENTER
                this.editRow(row);
                break;

            default:
                break;
        }

        e.stopPropagation();
    }

    // Sets the row in edit mode and opens the editor
    editRow(row: any, focusCell?: any){
        this.resetEditor();
        
        if (row){
            this.updateEditStatus(row);
            this.currentEditRow = row;

            this.setFocusToCell(focusCell);
        }
    } 

    // For quick editing open/save from any cell in the Grid using keyboard
    gridKeyDown(e: any){
        switch (e.detail.event.keyCode){
            case 9: // TAB
                // Prevent focus change to a different row than editing row
                if (this.currentEditRow && e.detail.event.shiftKey && e.detail.cell.cid === 2){
                    e.detail.event.preventDefault();
                    e.detail.cancel = true;
                }
                break;

            case 13: // ENTER
                if (this.currentEditRow)
                    this.saveRow(this.currentEditRow, e.detail.cell);
                else
                    this.editRow(e.detail.row, e.detail.cell);
                break;

            case 27: // ESCAPE
                this.cancelEdit(this.currentEditRow);
                break;

            case 38: // UP_ARROW
                if (this.currentEditRow)
                    e.detail.cancel = true;
                break;

            case 40: // DOWN_ARROW
                if (this.currentEditRow)
                    e.detail.cancel = true;
                break;

            default:
                break;
        }
    }

    // Inserts the created row at specific position and updates the grid layout
    insertRowInGrid(selRow?: any){
        let row = this.createNewRow();
    
        this.currentEditRow = row;

        this.treegrid.nativeElement.insertRowAt(row, 0, selRow);
        this.treegrid.nativeElement.updateLayout();

        this.treegrid.nativeElement.selectedRow = row;
    }

    // Moves a row at end of the list
    moveRowToEnd(row: any){
        if (row){
            let list = this.rows;

            let parentRow = this.treegrid.nativeElement.getRowParent(row);
            if (parentRow)
                list = parentRow.rows;

            if (list){
                list.splice(list.length-1, 0, list.splice(0, 1)[0]);
                this.treegrid.nativeElement.updateLayout();
            }
        }
    }

    // Removes a row from the grid using keyboard
    removeKeyDown(e: any, row: any){
        switch (e.keyCode){
            case 9: // TAB
                if (!e.shiftKey)
                    e.preventDefault();
                break;

            case 13: // ENTER
                this.removeRow(row);
                break;

            default:
                break;
        }

        e.stopPropagation();
    }

    // Removes a row from the grid
    removeRow(row: any){
        if (row){
            this.treegrid.nativeElement.removeRow(row);
            this.treegrid.nativeElement.updateLayout();
        }
    }

    // Resets the variables for editing
    resetEditor(){
        this.updateEditStatus(this.currentEditRow, true);

        this.currentEditRow = null;

        this.treegrid.nativeElement.updateView();
    }

    // Confirms the changes and saves the row
    saveKeyDown(e: any, row: any){
        switch (e.keyCode){
            case 9: // TAB
                if (e.shiftKey && row)
                    this.treegrid.nativeElement.setFocus(row.cells[3]);
                break;

            case 13: // ENTER
                this.saveRow(row);
                break;

            default:
                break;
        }

        e.stopPropagation();
    }

    async saveRow(row: any, focusCell?: any){
        if (row){
            this.updateEditStatus(row, true);

            if (this.isNewRow)
                this.moveRowToEnd(row);
        }

        await this.setFocusToCell(focusCell);

        this.resetEditor();
        this.isNewRow = false;
    }

    async setFocusToCell(cell?: any){
        await this.processFocusCell(cell);
    }

    processFocusCell(cell: any){
	    return new Promise(resolve => {
            let self = this;
            // Set focus after the Grid layout is updated
            // This is the reason for the timeout
            // On other hand you call call updateLayout method with await, it is also an asynchronous method
            setTimeout(function(){
                if (self.currentEditRow){
                    let focusCell = cell ? cell : self.currentEditRow.cells[0];
                    self.treegrid.nativeElement.setFocus(focusCell);
                }

                resolve(null);
            }, 100);
		});
    }

    // Updates the status of row, for edit or normal mode
    updateEditStatus(row: any, flag?: boolean){
        let status = flag ? true : false;

        if (row){
            // If edit is not cancelled or not during save process, allow editing
            row.allowEdit = !status;

            for (let j = 0; j < row.cells.length; j++){
                row.cells[j].saved = status;

                // If row is in edit mode, copy the text value of grid cell to the cell editor
                if (!status)
                    row.cells[j].originalValue = row.cells[j].value;
            }

            this.treegrid.nativeElement.updateView();
        }
    }

    // Templates --------------------------------------------------------------------------------------

    //
    // Currently when using templates, the LitElement binding syntax is required
    // for properties, methods and events
    //

    public currentRowCellTemplate = (row: any, cell: any) => { 
        switch (cell.cid){
            case 7: // Command Buttons
                if (row === this.currentEditRow)
                    return html`
                        <iui-button @mouseup="${() => this.saveRow(row)}" @touchstart="${() => this.saveRow(row)}" @keydown="${(e) => this.saveKeyDown(e, row)}">Save</iui-button>
                        <iui-button @mouseup="${() => this.cancelEdit(row)}" @touchstart="${() => this.cancelEdit(row)}" @keydown="${(e) => this.cancelKeyDown(e, row)}">Cancel</iui-button>
                    `
                else
                    return html`
                        <iui-button @mouseup="${() => this.editRow(row)}" @touchstart="${() => this.editRow(row)}" @keydown="${(e) => this.editKeyDown(e, row)}">Edit</iui-button>
                        <iui-button @mouseup="${() => this.removeRow(row)}" @touchstart="${() => this.removeRow(row)}" @keydown="${(e) => this.removeKeyDown(e, row)}">Remove</iui-button>
                    `
            // no default
        }

        return null;
    };
}
