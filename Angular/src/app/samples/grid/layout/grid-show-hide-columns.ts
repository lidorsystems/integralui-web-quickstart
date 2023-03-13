import { Component, ElementRef, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { html } from 'integralui-web/external/lit-element';

import 'integralui-web/components/integralui.grid';
import IntegralUICommonService from 'integralui-web/services/integralui.common.service';
import { IntegralUITheme } from 'integralui-web/components/integralui.enums';
import { iuiGridShowHideColumnsStyle } from './grid-show-hide-columns.style';

import 'integralui-web/components/integralui.contextmenu';
import 'integralui-web/components/integralui.dropdownbutton';
import 'integralui-web/components/integralui.list';

@Component({
    selector: '',
    templateUrl: './grid-show-hide-columns.html',
    styleUrls: ['./grid-show-hide-columns.css']
})
export class GridShowHideColumns {
    @ViewChild('grid', { static: false }) grid!: ElementRef;

    private _commonService!: IntegralUICommonService;

    public columns: Array<any> = [];
    public ctrlSize: any = { height: 400 };
    public currentResourcePath: string = 'assets/icons';
    public currentTheme: IntegralUITheme = IntegralUITheme.Office;
    public customStyle: any = iuiGridShowHideColumnsStyle;
    public gridScrolling: any = { horizontal: false }
    public rows: Array<any> = [];

    public columnList: Array<any> = [];
    public currentMaxDropDownItems: number = 6;
    public dropDownSize: any = { width: 150, height: 200 };

    constructor(private http: HttpClient){
        this._commonService = new IntegralUICommonService();

        this.columns = [
            { id: 1, headerText: "Order ID", width: 90 },
            { id: 2, headerText: "Customer", width: 225 },
            { id: 3, headerText: "Ship Mode", width: 180, visible: false },
            { id: 4, headerText: "Ship Date", contentAlignment: "center", width: 120 },
            { id: 5, headerText: "Quantity", contentAlignment: "right", width: 80 },
            { id: 6, headerText: "Price", contentAlignment: "right" }
        ];
    }

    ngAfterViewInit(){
        // Create a dropdown list from all columns
        this.columns.forEach(column => {
            let item: any = { 
                id: column.id, 
                text: column.headerText, 
                checked: column.visible !== false
            }

            item.icon = this.getItemIcon(item);

            this.columnList.push(item);
        });

        // Load data into the Grid from a JSON file
        this.loadFromJSON();
    }

    // Data --------------------------------------------------------------------------------------

    convertJSONData(data: any){
        let result: Array<any> = [];

        data.forEach((obj: any) => {
            // Copy all fields from JSON data and add a new field 'cells'
            let row = Object.assign({ cells: [] }, obj);

            // Loop through all columns and create cells accordingly
            this.columns.forEach((column: any) => {
                let field = column.headerText;

                // Delete all fields that will be included in cells, except for the field 'Title'
                delete row[field];

                // Each row should have a cell for check box column, otherwise only add cells for existing fields
                if (obj[field] !== undefined){
                    let cell: any = {
                        cid: column.id,
                        colName: field
                    }

                    if (this._commonService.isString(obj[field]))
                        cell.text = obj[field];
                    else
                        cell.value = obj[field];

                    row.cells.push(cell);
                }
            });

            // If there are child rows, convert the JSON data for them
            row.rows = this.convertJSONData(obj.rows || []);

            result.push(row);
        });

        return result;
    }
  
    private loadFromJSON(){
        let self = this;

        // Use HTTP service to get data from the specified JSON file
        self.http.get("./assets/grid-show-hide-columns-data.json").subscribe((data: any) => {
            // Suspend the grid layout from updates, to increase performance
            self.grid.nativeElement.suspendLayout();

            // Load data into the grid
            self.grid.nativeElement.loadData(self.convertJSONData(data));
    
            // Resume and update the grid layout
            self.grid.nativeElement.resumeLayout();
        });
    }

    // General -----------------------------------------------------------------------------------

    getItemIcon(item: any){
        return item && item.checked ? 'icons checked-icon' : 'icons';
    }

    //
    // ContextMenu
    //

    contextMenuClick(e: any){
        if (e.detail.item){
            e.detail.item.checked = !e.detail.item.checked;
            e.detail.item.icon = this.getItemIcon(e.detail.item);

            let column = this.getColumnFromItem(e.detail.item);
            if (column)
                column.visible = e.detail.item.checked;

            this.grid.nativeElement.updateLayout();
        }
    }
 
    contextMenuOpening(column: any){
        column.isDropDownExpanded = false;
        this.grid.nativeElement.selectedColumn = column;
        this.grid.nativeElement.refresh();
    }

    getColumnFromItem(item: any){
        if (item){
            let filtered = this.columns.filter(column => column.id === item.id);

            return filtered.length > 0 ? filtered[0] : null;
        }

        return null;
    }

    //
    // DropDownMenu
    //

    dropDownExpandedChanged(e: any, column: any){
        column.isDropDownExpanded = e.detail.expanded;
        this.grid.nativeElement.updateLayout();
    }

    getItemFromColumn(column: any){
        if (column){
            let filtered = this.columnList.filter(obj => obj.id === column.id);

            return filtered.length > 0 ? filtered[0] : null;
        }

        return null;
    }

    itemSelected(e: any, colum: any){
        if (e.detail.item){
            e.detail.item.checked = !e.detail.item.checked;
            e.detail.item.icon = this.getItemIcon(e.detail.item);

            let changedColumn = this.getColumnFromItem(e.detail.item);
            if (changedColumn)
                 changedColumn.visible = e.detail.item.checked;

            // Delete the selected status from the List component, so that item will not appear as selected when clicked
            this.columnList.forEach(item => delete item.selected);

            e.detail.update = true;
        }
    }

    // Templates ---------------------------------------------------------------------------------

    currentDropDownTemplate = (column: any) => { 
        return html`
            <iui-list 
                .allowFocus=${false}
                .customStyle=${iuiGridShowHideColumnsStyle}
                .items="${this.columnList}" 
                .maxVisibleItems="${this.currentMaxDropDownItems}"
                .selectedItem="${this.getItemFromColumn(column)}" 
                .size="${{ width: this.dropDownSize.width - 4, height: this.dropDownSize.height - 4 }}" 
                .theme="${this.currentTheme}" 
                @itemClick="${(e: any) => this.itemSelected(e, column)}" 
                @itemTouch="${(e: any) => this.itemSelected(e, column)}"
            ></iui-list>
        `;
    };

    currentHeaderTemplate = (column: any) => { 
        return html`
            <iui-contextmenu
                .customStyle=${iuiGridShowHideColumnsStyle}
                .enabled=${true}
                .settings=${{ items: this.columnList }}
                theme="Office"
                @menuClick="${(e: any) => this.contextMenuClick(e)}"
                @menuOpening="${() => this.contextMenuOpening(column)}"
            >
                <div>
                    <iui-dropdownbutton data-column-dropdown
                        .contentTemplate="${this.currentDropDownTemplate}"
                        .data="${column}"
                        .dropDownAdjustment=${{ left: 0, top: 7 }}
                        .dropDownIcon="${false}"
                        .dropDownSize="${this.dropDownSize}"
                        .expanded="${column.selected && column.isDropDownExpanded === true}"
                        .items="${this.columnList}"
                        @expandedChanged="${(e: any) => this.dropDownExpandedChanged(e, column)}"
                    >
                        <img src="assets/icons/menu-button.ico" />
                    </iui-dropdownbutton>
                    <span class="header-label">${column.headerText}</span>
                </div>
            </iui-contextmenu>
        `;
    };
}
