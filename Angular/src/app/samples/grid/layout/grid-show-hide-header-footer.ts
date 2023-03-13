import { Component, ElementRef, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { html } from 'integralui-web/external/lit-element';
import { styleMap } from 'integralui-web/external/style-map';

import 'integralui-web/components/integralui.checkbox';
import 'integralui-web/components/integralui.grid';
import IntegralUICommonService from 'integralui-web/services/integralui.common.service';
import { IntegralUIGridLines, IntegralUITheme } from 'integralui-web/components/integralui.enums';
import { iuiGridShowHideHeaderFooterStyle } from './grid-show-hide-header-footer.style';

@Component({
    selector: '',
    templateUrl: './grid-show-hide-header-footer.html',
    styleUrls: ['./grid-show-hide-header-footer.css']
})
export class GridShowHideHeaderFooter {
    @ViewChild('grid', { static: false }) grid!: ElementRef;

    private _commonService!: IntegralUICommonService;

    public columns: Array<any> = [];
    public ctrlSize: any = { height: 500 };
    public currentResourcePath: string = 'assets/icons';
    public currentTheme: IntegralUITheme = IntegralUITheme.Office;
    public customStyle: any = iuiGridShowHideHeaderFooterStyle;
    public rows: Array<any> = [];

    public currentGridLines: IntegralUIGridLines = IntegralUIGridLines.Both;
    public isFooterVisible: boolean = true;
    public isHeaderVisible: boolean = true;

    private changeInterval: any = null;
    private countInterval: number = 0;
    private initTimeout: any = null;

    constructor(private http: HttpClient){
        this._commonService = new IntegralUICommonService();
    }

    ngAfterViewInit(){
        // Load data into the Grid from a JSON file
        this.loadFromJSON();
    }

    // Data --------------------------------------------------------------------------------------

    convertJSONData(data: any){
        // Create columns
        this.columns = [];

        data.columns.forEach((obj: any) => {
            let column = Object.assign({ groupText: obj.title, headerAlignment: 'center' }, obj);
            if (column.id !== 1 && column.id !== 11 && column.id !== 15)
                column.allowDrag = false;

            // Set Footer
            // Because there are fixed columns, they must have some footer text so that they appear aligned with non-fixed columns footer
            column.footerText = '.';

            // Set description for Total Volume, it will appear under Rating column
            if (column.id === 6)
                column.footerText = 'Total';
                
            this.columns.push(column);
        });

        // Create rows
        this.rows = [];

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

            this.rows.push(row);
        });
    }
        
    private loadFromJSON(){
        let self = this;

        // Use HTTP service to get data from the specified JSON file
        self.http.get("./assets/grid-show-hide-header-footer-data.json").subscribe((data: any) => {
            // Suspend the grid layout from updates, to increase performance
            self.grid.nativeElement.suspendLayout();

            // Load data into the grid
            self.convertJSONData(data);
    
            // Resume and update the grid layout
            self.grid.nativeElement.resumeLayout();

            self.initTimeout = setTimeout(function(){
                self.changeInterval = setInterval(function(){
                    self.updateData();
                    self.countInterval++;
                }, 150);
            }, 1000);
        });
    }

    // Events ------------------------------------------------------------------------------------

    onHeaderChanged(e: any){
        this.isHeaderVisible = e.detail.checked ? true : false;
        if (this.grid)
            this.grid.nativeElement.scrollPos({ x: 0, y: 0 });
    }

    onFooterChanged(e: any){
        this.isFooterVisible = e.detail.checked ? true : false;
    }

    onGridLinesChanged(e: any){
        this.currentGridLines = this.currentGridLines === IntegralUIGridLines.Both ? IntegralUIGridLines.None : IntegralUIGridLines.Both;
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

        // Volume
        let totalVolume = 0;
        currentData.forEach(row => {
            totalVolume += this.getNewVolume(row, 7);
        });

        this.updateFooterVolumeValue(totalVolume);

        // Update the grid view with current data
        this.grid.nativeElement.updateView();
    }

    getCellId(row: any, id: any){
        let filtered = row.cells.filter((obj: any) => obj.cid === id);
        return filtered.length > 0 ? filtered[0] : null;
    }  

    getNewVolume(row: any, id: any){
        let cell = this.getCellId(row, id);
        return cell.value;
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

    updateFooterVolumeValue(value: number){
        let column = this.grid.nativeElement.getColumnById(7);
        if (column)
            column.footerValue = value;
    }

    // Templates -----------------------------------------------------------------------------

    currentFooterTemplate = (column: any) => { 
        switch (column.id){
            case 6: // Total description
                return html`<strong>${column.footerText}</strong>`;

            case 7: // Total Volume
                return html`<strong>${this.getFooterDisplayValue(column)}</strong>`;

            default: // Hide the '.' from foom footer for otheer columns
                return html`<span style="opacity:0">${column.footerText}</span>`;
        }
    };

    currentHeaderTemplate = (column: any) => { 
        return html`<span class="header-label">${column.title}</span>`;
    };

    currentRowTemplate = (row: any, cell: any) => { 
        switch (cell.cid){
            case 2:
                return html`<div style=${styleMap({ display: 'inline-block', marginTop: '3px' })}>
                        <div><strong>${row.Stock}</strong></div>
                        <div>${row.Company}</div>
                    </div>`;

            case 6:
                return html`<span class="iui-editor-label">${this.getCellValue(cell.value)}</span>`;    
        }

        return null;
    };

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

    getFooterDisplayValue(column: any){
        return this._commonService.convertValue(column.footerValue, column.format);
    }

    updateCellColor(cell: any){
        if (cell.cid === 4 || cell.cid === 5 || cell.cid === 12)
            cell.style = { color: cell.value === 0 ? '#999999' : (cell.value > 0 ? '#45a145' : '#db4f4f') }
        else if (cell.cid === 6)
            cell.style = { color: cell.value === 3 ? '#999999' : (cell.value > 3 ? '#4088db' : '#db4f4f') }
    }
}
