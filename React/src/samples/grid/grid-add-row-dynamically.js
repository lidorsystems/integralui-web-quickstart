import React, { Component } from 'react';
import { html } from 'integralui-web/external/lit-element.js';

import IntegralUICommonService from 'integralui-web/services/integralui.common.service.js';
import IntegralUIButtonComponent from 'integralui-web/wrappers/react.integralui.button.js';
import IntegralUIGridComponent from 'integralui-web/wrappers/react.integralui.grid.js';
import { IntegralUIEditMode, IntegralUIEditorType, IntegralUITheme } from 'integralui-web/components/integralui.enums.js';

import { iuiGridAddRowDynamicallyStyle } from './grid-add-row-dynamically.style.js';

class GridAddRowDynamically extends Component {

    //
    // Initialization / Destruction --------------------------------------------------------------
    //

    constructor(props){
        super(props);

        this._commonService = new IntegralUICommonService();

        this.state = {
            buttonSize: { width: 100 },
            columns: [
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
            ],
            ctrlSize: { width: 850, height: 350 },
            currentEditMode: IntegralUIEditMode.Custom,
            currentResourcePath: '../integralui-web/icons',
            currentTheme: IntegralUITheme.Office,
            isAnimationAllowed: true,
            rows: [
                { 
                    id: 11,
                    text: "Inception",
                    cells: [ { cid: 2, value: "Inception" }, { cid: 3, value: "2010" }, { cid: 4, value: 4 }, { cid: 7 } ]
                },
                { 
                    id: 13,
                    text: "Shutter Island",
                    cells: [ { cid: 2, value: "Shutter Island" }, { cid: 3, value: "2010" }, { cid: 4, value: 3 }, { cid: 7 } ]
                }
            ]
        }

        // Edit variables
        this.currentEditRow = null;
        this.isNewRow = false;

        this.gridRef = React.createRef();
    }

    //
    // Methods -----------------------------------------------------------------------------------
    //

    // Adds a new row
    addRow(){
        if (this.currentEditRow)
            this.cancelEdit(this.currentEditRow);

        this.insertRowInGrid();
        this.gridRef.current.beginEdit(this.currentEditRow);

        this.setFocusToCell();
    }

    async cancelEdit(row){
        this.gridRef.current.endEdit();

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

        this.gridRef.current.updateView();
    }

    // Cancels the edit process and closes the editor
    cancelKeyDown(e, row){
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
        let row = {
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
    editKeyDown(e, row){
        switch (e.keyCode){
            case 9: // TAB
                if (e.shiftKey && row)
                    this.gridRef.current.setFocus(row.cells[3]);
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
    editRow(row, focusCell){
        this.resetEditor();
        
        if (row){
            this.updateEditStatus(row);
            this.currentEditRow = row;
            this.gridRef.current.beginEdit(this.currentEditRow);

            this.setFocusToCell(focusCell);
        }
    } 

    // For quick editing open/save from any cell in the Grid using keyboard
    gridKeyDown(e){
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
    insertRowInGrid(){
        let row = this.createNewRow();
    
        this.currentEditRow = row;

        this.gridRef.current.insertRowAt(row, 0);
        this.gridRef.current.updateLayout();

        this.gridRef.current.ctrlRef.current.selectedRow = row;
    }

    // Moves a row at end of the list
    moveRowToEnd(row){
        if (row){
            let list = this.state.rows;
            if (list){
                list.splice(list.length-1, 0, list.splice(0, 1)[0]);
                this.gridRef.current.updateLayout();
            }
        }
    }

    // Removes a row from the grid using keyboard
    removeKeyDown(e, row){
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
    removeRow(row){
        if (row){
            this.gridRef.current.removeRow(row);
            this.gridRef.current.updateLayout();
        }
    }

    // Resets the variables for editing
    resetEditor(){
        this.updateEditStatus(this.currentEditRow, true);

        this.currentEditRow = null;

        this.gridRef.current.updateView();
    }

    // Confirms the changes and saves the row
    saveKeyDown(e, row){
        switch (e.keyCode){
            case 9: // TAB
                if (e.shiftKey && row)
                    this.gridRef.current.setFocus(row.cells[3]);
                break;

            case 13: // ENTER
                this.saveRow(row);
                break;

            default:
                break;
        }

        e.stopPropagation();
    }

    async saveRow(row, focusCell){
        if (row){
            this.updateEditStatus(row, true);

            if (this.isNewRow)
                this.moveRowToEnd(row);
        }

        await this.setFocusToCell(focusCell);

        this.gridRef.current.endEdit(true);
        this.resetEditor();
        this.isNewRow = false;
    }

    async setFocusToCell(cell){
        await this.processFocusCell(cell);
    }

    processFocusCell(cell){
	    return new Promise(resolve => {
            let self = this;
            // Set focus after the Grid layout is updated
            // This is the reason for the timeout
            // On other hand you call call updateLayout method with await, it is also an asynchronous method
            setTimeout(function(){
                if (self.currentEditRow){
                    let focusCell = cell ? cell : self.currentEditRow.cells[0];
                    self.gridRef.current.setFocus(focusCell);
                }

                resolve();
            }, 100);
		});
    }

    // Updates the status of row, for edit or normal mode
    updateEditStatus(row, flag){
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

            this.gridRef.current.updateView();
        }
    }

    // Templates --------------------------------------------------------------------------------------

    //
    // Currently when using templates, the LitElement binding syntax is required
    // for properties, methods and events
    //

    currentRowCellTemplate = (row, cell) => { 
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

    // Update ------------------------------------------------------------------------------------

    render() {
        return (
            <div>
                <h2>Grid / Add Rows Dynamically</h2>
                <div className="sample-block" id="grid-add-row-dynamically">
                    <IntegralUIButtonComponent allowAnimation={this.state.isAnimationAllowed} size={this.state.buttonSize} theme={this.state.currentTheme} onClick={() => this.addRow()}>Add Row</IntegralUIButtonComponent>
                    <IntegralUIGridComponent ref={this.gridRef}
                        allowAnimation={this.state.isAnimationAllowed} 
                        columns={this.state.columns} 
                        customStyle={iuiGridAddRowDynamicallyStyle}
                        editMode={this.state.currentEditMode}
                        resourcePath={this.state.currentResourcePath}
                        rowHeight={32}
                        rows={this.state.rows} 
                        rowTemplate={this.currentRowCellTemplate}
                        showFooter={false}
                        size={this.state.ctrlSize}
                        theme={this.state.currentTheme}
                        keyDown={(e) => this.gridKeyDown(e)}
                    ></IntegralUIGridComponent>
                    <div className="feature-help">
                        <p><span className="initial-space"></span>To populate the Grid component with data, you can either load data on demand from local or remote data source or add new rows dynamically when required. In order to create a new row manually, you can use some of public methods available that allows you to insert a row at specific position in the grid. This sample demonstrates how to add new rows on demand and how to create and use cell editors.</p>
                        <p><span className="initial-space"></span>To add a new row use the button above the grid. Whenever the add button is clicked, a new row is created at first position in the grid and an inline cell editor appears. The cells in the last column contain action buttons that confirm or cancel the change of cell values.</p>
                        <p><span className="initial-space"></span>After row is created, you can easily edit its cell values by clicking on edit action button. In addition, you can remove rows by clicking on remove action button.</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default GridAddRowDynamically;
