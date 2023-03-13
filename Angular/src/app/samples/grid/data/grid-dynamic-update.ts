import { Component, ElementRef, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { html } from 'integralui-web/external/lit-element';
import { classMap } from 'integralui-web/external/class-map';
import { styleMap } from 'integralui-web/external/style-map';

import 'integralui-web/components/integralui.dropdownbutton';
import 'integralui-web/components/integralui.grid';
import 'integralui-web/components/integralui.listbox';
import IntegralUICommonService from 'integralui-web/services/integralui.common.service';
import { IntegralUITheme } from 'integralui-web/components/integralui.enums';
import { iuiGridDynamicUpdateStyle } from './grid-dynamic-update.style';

@Component({
    selector: '',
    templateUrl: './grid-dynamic-update.html',
    styleUrls: ['./grid-dynamic-update.css']
})
export class GridDynamicUpdate {
    @ViewChild('grid', { static: false }) grid!: ElementRef;

    private _commonService!: IntegralUICommonService;

    public columns: Array<any> = [];
    public ctrlSize: any = { height: 500 };
    public currentResourcePath: string = 'assets/icons';
    public currentSelectedColumn: any = null;
    public currentTheme: IntegralUITheme = IntegralUITheme.Office;
    public customStyle: any = iuiGridDynamicUpdateStyle;
    public dropDownList: Array<any> = [];
    public dropDownSize: any = { width: 200, height: 150 };
    public isGridLoading: boolean = false;
    public rows: Array<any> = [];

    public groups: Array<any> = [
        { cid: 11 }
    ];
    public groupSettings: any = {
        enabled: true,
        showColumns: true
    };

    private changeInterval: any = null;
    private countInterval: number = 0;
    private initTimeout: any = null;
    private partialDataLoaded: number = 0;

    constructor(private http: HttpClient){
        this._commonService = new IntegralUICommonService();
    }

    ngAfterViewInit(){
        this.grid.nativeElement.headerTemplate = this.currentHeaderTemplate;
        this.grid.nativeElement.rowTemplate = this.currentRowCellTemplate;

        // Load data into the Grid from a JSON file
        this.loadFromJSON();
    }

    ngOnDestroy(){
        if (this.changeInterval)
            clearInterval(this.changeInterval);

        if (this.initTimeout)
            clearTimeout(this.initTimeout);

        this.changeInterval = null;
        this.initTimeout = null;
    }

    createDropDownList(){
        let list: Array<any> = [];
        this.columns
            .filter(column => column.id > 3)
            .forEach(column => list.push({ id: column.id, text: column.title ? column.title : column.groupText }));

        this.dropDownList = list;

        if (this.grid.nativeElement)
            this.grid.nativeElement.updateLayout();
    }

    //
    // Methods -----------------------------------------------------------------------------------
    //

    // Data --------------------------------------------------------------------------------------

    convertJSONData(data: any){
        let columnList: Array<any> = [];
        let rowList: Array<any> = [];

        // Create columns
        data.columns.forEach((obj: any) => {
            let column = Object.assign({ groupText: obj.title, headerAlignment: 'center' }, obj);
            if (column.id !== 1 && column.id !== 11 && column.id !== 15)
                column.allowDrag = false;

            columnList.push(column);
        });

        // Create rows
        data.rows.forEach((obj: any) => {
            // Copy all fields from JSON data and add a new field 'cells'
            let row = Object.assign({ cells: [] }, obj);

            // Loop through all columns and create cells accordingly
            data.columns.forEach((column: any) => {
                let field = column.id === 1 ? 'isChecked' : column.title;

                // Delete all fields that will be included in cells
                delete row[field];

                // Each row should have a cell for check box column, otherwise only add cells for existing fields
                let cell: any = {
                    cid: column.id,
                    colName: field
                }

                if (obj[field] !== undefined){
                    if (!column.editorType && this._commonService.isString(obj[field]))
                        cell.text = obj[field];
                    else
                        cell.value = obj[field];
                }

                // Change text color based on cell value
                this.updateCellColor(cell);

                row.cells.push(cell);
            });

            rowList.push(row);
        });

        this.columns = columnList;
        this.rows = rowList;
    }

    private loadFromJSON(){
        let self = this;

        // Use HTTP service to get data from the specified JSON file
        self.http.get("./assets/grid-dynamic-update-data.json").subscribe((data: any) => {
            // Suspend the grid layout from updates, to increase performance
            self.grid.nativeElement.suspendLayout();

            // Load data into the grid
            self.grid.nativeElement.loadData(self.convertJSONData(data));
    
            // Resume and update the grid layout
            self.grid.nativeElement.resumeLayout();

            self.initTimeout = setTimeout(function(){
                self.createDropDownList();
    
                self.changeInterval = setInterval(function(){
                    if (!self.isGridLoading){
                        self.updateData();
                        self.countInterval++;
                    }
                }, 150);
            }, 1000);
        });
    }
    
    loadRows(data: any){
        let rowList = [...this.rows];

        // Create rows
        data.rows.forEach((obj: any) => {
            // Copy all fields from JSON data and add a new field 'cells'
            let row = Object.assign({ cells: [] }, obj);

            // Loop through all columns and create cells accordingly
            this.columns.forEach(column => {
                let field = column.id === 1 ? 'isChecked' : column.title;

                // Delete all fields that will be included in cells
                delete row[field];

                // Each row should have a cell for check box column, otherwise only add cells for existing fields
                let cell: any = {
                    cid: column.id,
                    colName: field
                }

                if (obj[field] !== undefined){
                    if (!column.editorType && this._commonService.isString(obj[field]))
                        cell.text = obj[field];
                    else
                        cell.value = obj[field];
                }

                // Change text color based on cell value
                this.updateCellColor(cell);

                row.cells.push(cell);
            });

            rowList.push(row);
        });

        this.rows = rowList;
    }

    updateCellColor(cell: any){
        if (cell.cid === 4 || cell.cid === 5 || cell.cid === 12)
            cell.style = { color: cell.value === 0 ? '#999999' : (cell.value > 0 ? '#45a145' : '#db4f4f') }
        else if (cell.cid === 6)
            cell.style = { color: cell.value === 3 ? '#999999' : (cell.value > 3 ? '#4088db' : '#db4f4f') }
    }
 
    // Events ------------------------------------------------------------------------------------

    dropDownExpandedChanged(e: any, column: any){
        column.isDropDownExpanded = e.detail.expanded;
    }

    gridScrollPosChanged(e: any){
        let self = this;

        if (e.detail.value.y === e.detail.max.y && self.partialDataLoaded < 3){
            let fileName = './assets/grid-dynamic-update-partial-data-' + (this.partialDataLoaded + 1).toString() + '.json';
            self.http.get(fileName).subscribe((data: any) => {
                self.isGridLoading = true;

                setTimeout(function(){
                    // Suspend the tree layout from updates, to increase performance
                    self.grid.nativeElement.suspendLayout();
        
                    self.loadRows(data);
                    self.partialDataLoaded++;

                    // Resume and update the component layout
                    self.grid.nativeElement.resumeLayout();
                    self.isGridLoading = false;
                }, 1000);
            });
        }
    }

    isColumnVisible(id: any){
        let column = this.grid.nativeElement.getColumnById(id);

        return column ? (column.visible !== false ? true : false) : false;
    }

    itemChecked(e: any, item: any){
        let column = this.grid.nativeElement.getColumnById(item.id);

        if (column){
            column.visible = e.detail.checked;
            this.grid.nativeElement.updateLayout();
        }
    }

    // General -----------------------------------------------------------------------------------

    getGridSize(){
        return this.grid.nativeElement ? this.grid.nativeElement.getSize() : { width: 0, height: 0 }
    }

    // Random Values -----------------------------------------------------------------------------

    updateData(){
        let numRows = this.rows.length;
        // Change random set of records
        let numRecords = Math.floor(Math.random() * numRows) + 1;
        let currentRecords = [];
        while(currentRecords.length < numRecords){
            let change =  Math.floor(Math.random() * numRows);
            if(currentRecords.indexOf(change) === -1) currentRecords.push(change);
        }
        
        // Change to Stock Values
        let currentStockChange =  Math.floor(Math.random() * 5);
        let currentValues = [];
        while(currentValues.length < numRecords){
            let plusOrMinus = Math.random() < 0.5 ? -1 : 1;
            let change = Math.random() * 1 * currentStockChange * plusOrMinus;
            currentValues.push(change);
        }

        // Change to Ratings
        let currentRatings = [];
        while(currentRatings.length < numRecords){
            let change = Math.floor(Math.random() * 5) + 1;
            currentRatings.push(change);
        }

        // Change to Volume
        let currentVolumeChange =  Math.floor(Math.random() * 10000);
        let currentVolumes = [];
        while(currentVolumes.length < numRecords){
            let plusOrMinus = Math.random() < 0.5 ? -1 : 1;
            let change = Math.floor(Math.random() * numRecords) * currentVolumeChange * plusOrMinus;
            currentVolumes.push(change);
        }

        // Change to P/E
        let currentPEChange =  Math.floor(Math.random() * 5) * 0.1;
        let currentPEValues = [];
        while(currentPEValues.length < numRecords){
            let plusOrMinus = Math.random() < 0.5 ? -1 : 1;
            let change = Math.floor(Math.random() * numRecords) * currentPEChange * plusOrMinus;
            currentPEValues.push(change);
        }

        // Change to Div Yield
        let currentDivYieldChange =  Math.random() * 0.0001;
        let currentDivYieldValues = [];
        while(currentDivYieldValues.length < numRecords){
            let plusOrMinus = Math.random() < 0.5 ? -1 : 1;
            let change = Math.floor(Math.random() * numRecords) * currentDivYieldChange * plusOrMinus;
            currentDivYieldValues.push(change);
        }

        let currentData = this.rows;
        for (let i = 0; i < currentRecords.length; i++){
            let index = currentRecords[i];
            let currentRow = currentData[index];
            let stockCell = this.getCellId(currentRow, 3);

            // Change
            this.updateCellValue(currentRow, 5, currentValues[i]);
            // Change %
            this.updateCellValue(currentRow, 4, currentValues[i]);
            // Last
            this.updateCellValue(currentRow, 3, currentValues[i]);
            // Rating
            if (this.countInterval % numRecords === 0)
                this.updateCellValue(currentRow, 6, currentRatings[i]);
            // Volume
            this.updateCellValue(currentRow, 7, currentVolumes[i]);
            // P/E
            if (this.countInterval % numRecords * 2 === 0)
                this.updateCellValue(currentRow, 9, currentPEValues[i]);
            // Div Yield
            if (this.countInterval % 15 === 0)
                this.updateCellValue(currentRow, 12, currentDivYieldValues[i]);
            // All Time Low
            this.updateCellValue(currentRow, 13, stockCell.value);
            // All Time High
            this.updateCellValue(currentRow, 14, stockCell.value);
        }

        this.grid.nativeElement.updateView();
    }

	getCellId(row: any, id: any){
        let filtered = row.cells.filter((obj: any) => obj.cid === id);
        return filtered.length > 0 ? filtered[0] : null;
    }  

    updateCellValue(row: any, id: any, newValue: number){
        let cell = this.getCellId(row, id);

        switch (id){
            case 3: // Last
                cell.value += newValue;
                break;

            case 4: // Change %
                let stockCell = this.getCellId(row, 3);

                if (stockCell && stockCell.value > 0)
                    cell.value = newValue / stockCell.value;
                break;

            case 5: // Change
                cell.value = newValue;
                break;

            case 7: // Volume
                cell.value = Math.max(0, cell.value + newValue);
                break;

            case 9: // P/E
                cell.value = Math.max(0, cell.value + newValue);
                break;

            case 12: // Div Yield
                cell.value = Math.max(0, cell.value + newValue);
                break;

            case 13: // All Time Low
                cell.value = Math.min(cell.value, newValue);
                break;

            case 14: // All Time High
                cell.value = Math.max(cell.value, newValue);
                break;

            default:
                cell.value = newValue;
                break;
        }

        this.updateCellColor(cell);
    }

    // Templates --------------------------------------------------------------------------------------

    //
    // Currently when using templates, the LitElement binding syntax is required
    // for properties, methods and events
    //

    currentDropDownTemplate = () => { 
        return html`
            <iui-listbox 
                .items="${this.dropDownList}" 
                .itemTemplate="${this.currentItemTemplate}"
                .size="${{ width: this.dropDownSize.width - 4, height: this.dropDownSize.height - 4 }}" 
                .theme="${this.currentTheme}" 
            ></iui-listbox>
        `;
    };

    currentHeaderTemplate = (column: any) => { 
        if (column.id === 2)
            return html`
                <div>
                    <iui-dropdownbutton data-column-dropdown
                        .allowAnimation=${true}
                        .contentTemplate="${this.currentDropDownTemplate}"
                        .data="${column}"
                        .dropDownAdjustment="${{ left: -167, top: 10 }}"
                        .dropDownIcon="${false}"
                        .dropDownSize="${this.dropDownSize}"
                        .expanded="${column.selected && column.isDropDownExpanded === true}"
                        .items="${this.dropDownList}"
                        .theme="${this.currentTheme}" 
                        @expandedChanged="${(e: any) => this.dropDownExpandedChanged(e, column)}"
                    >
                        <img src="assets/icons/menu-button.ico" />
                    </iui-dropdownbutton>
                    <span class="header-label-fixed">${column.title}</span>
                </div>
            `;
        else
            return html`<span class="header-label">${column.title}</span>`;
    };

    currentItemTemplate = (item: any) => { 
        return html`
            <iui-checkbox
                .checked="${this.isColumnVisible(item.id)}"
                .customStyle="${iuiGridDynamicUpdateStyle}"
                .resourcePath="${this.currentResourcePath}"
                .theme="${this.currentTheme}" 
                @checkedChanged="${(e: any) => this.itemChecked(e, item)}" 
            >
                ${item.text}
            </iui-checkbox>
        `;
    };

    currentRowCellTemplate = (row: any, cell: any) => { 
        switch (cell.cid){
            case 2:
                if (cell.isGroup){
                    switch (cell.valueID){
                        case 1: // CheckBox
                            return html`
                                <div style=${styleMap({ display: 'inline-block', textAlign: 'center'})}>
                                    <span class=${classMap(this.getCheckBoxClass(cell.value))}></span>
                                </div>`;
                    }
                }
                else 
                    return html`<div style=${styleMap({ display: 'inline-block', marginTop: '3px' })}>
                        <div><strong>${row.Stock}</strong></div>
                        <div>${row.Company}</div>
                    </div>`;
                break;

            case 6:
                return html`<span class="iui-editor-label">${this.getCellValue(cell.value)}</span>`;    
        }

        return null;
    };

    getRatingSymbol(){
        return '&#8599';
    }

    getCellValue(value: number){
        switch (value){
            case 1:
                return '⇊ Strong Sell'
            case 2:
                return '↘ Sell'
            case 4:
                return '↗ Buy'
            case 5:
                return '⇈ Strong Buy'
            default:
                return '⇄ Neutral'
        }
    }

    getCheckBoxClass(value: boolean){
        let retValue: any = { 'iui-editor-checkbox': true };

        if (value)
            retValue['iui-editor-checkbox-checked'] = true;
        else
            retValue['iui-editor-checkbox-unchecked'] = true;

        return retValue;  	
    }

    getGroupValue(cell: any){
        switch (cell.valueID){
            case 6:
                return this.columns
                    .filter(column => column.id === cell.valueID)
                    [0].editorSettings.items[cell.value-1].text;
        }

        return cell.value;
    }
}
