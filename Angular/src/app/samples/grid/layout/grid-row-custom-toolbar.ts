import { Component, ElementRef, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { html } from 'integralui-web/external/lit-element';
import { classMap } from 'integralui-web/external/class-map';
import { styleMap } from 'integralui-web/external/style-map';

import 'integralui-web/components/integralui.grid';
import IntegralUICommonService from 'integralui-web/services/integralui.common.service';
import { IntegralUIEditMode, IntegralUIEditorType, IntegralUITheme } from 'integralui-web/components/integralui.enums';
import { iuiGridRowCustomToolbarStyle } from './grid-row-custom-toolbar.style';

@Component({
    selector: '',
    templateUrl: './grid-row-custom-toolbar.html',
    styleUrls: ['./grid-row-custom-toolbar.css']
})
export class GridRowCustomToolbar {
    @ViewChild('grid', { static: false }) grid!: ElementRef;

    private _commonService!: IntegralUICommonService;

    public columns: Array<any> = [];
    public ctrlSize: any = { height: 400 };
    public currentEditMode: IntegralUIEditMode = IntegralUIEditMode.Custom;
    public currentResourcePath: string = 'assets/icons';
    public currentTheme: IntegralUITheme = IntegralUITheme.Office;
    public customStyle: any = iuiGridRowCustomToolbarStyle;
    public gridScrolling: any = { horizontal: false }
    public rows: Array<any> = [];

    // DropDownList
    public genres: Array<any> = [
        { text: 'Action' },
        { text: "Adventure" },
        { text: "Animation" },
        { text: "Biography" },
        { text: "Comedy" },
        { text: "Crime" },
        { text: "Drama" },
        { text: "Fantasy" },
        { text: "Horror" },
        { text: "Mystery" },
        { text: "Sci-Fi" },
        { text: "Thriller" },
        { text: "Western" }
    ];

    constructor(private http: HttpClient){
        this._commonService = new IntegralUICommonService();

        this.columns = [
            { id: 1, fixedWidth: true, width: 30 },
            { id: 2, headerText: "Title", minWidth: 150, width: 300 },
            { 
                id: 5, 
                headerText: "Genre", 
                headerAlignment: "center", 
                editorType: IntegralUIEditorType.DropDownList,
                editorSettings: {
                    allowAnimation: true,
                    dropDownAdjustment: { top: 10 },
                    items: this.genres
                },
                minWidth: 100,
                width: 120
            },
            { 
                id: 4, 
                headerText: "Rating", 
                editorType: IntegralUIEditorType.Rating, 
                editorSettings: {
                    editOnFocus: true
                },
                headerAlignment: "center", 
                contentAlignment: "center", 
                width: 120, 
                fixedWidth: true
            },
            { id: 3, headerText: "Year", headerAlignment: "center", contentAlignment: "center", minWidth: 50, width: 70 },
        ];
    }

    ngAfterViewInit(){
        // Load data into the Grid from a JSON file
        this.loadFromJSON();
    }

    // Data --------------------------------------------------------------------------------------

    convertJSONData(data: any){
        this.rows = [];

        data.forEach((obj: any) => {
            // Copy all fields from JSON data and add a new field 'cells'
            let row = Object.assign({ cells: [] }, obj);

            // Loop through all columns and create cells accordingly
            this.columns.forEach((column: any) => {
                let field = column.id === 1 ? 'isChecked' : column.headerText;

                // Add Title to the row text
                if (field === 'Title')
                    row.text = obj[field];

                // Delete all fields that will be included in cells, except for the field 'Title'
                if (column.headerText !== 'Title')
                    delete row[field];

                // Each row should have a cell for check box column, otherwise only add cells for existing fields
                if (column.id === 1 || obj[field] !== undefined){
                    let cell: any = {
                        cid: column.id,
                        colName: field
                    }

                    // If it is not the Genre field, add it to cell text, otherwise because of dropdownlist editor add it to cell value
                    if (column.id !== 5 && this._commonService.isString(obj[field]))
                        cell.text = obj[field];
                    else
                        cell.value = obj[field];

                    row.cells.push(cell);
                }
            });

            this.rows.push(row);
        });
    }
    
    createRowToolbar(){
        this.rows.map(row => 
            row.buttons = [
                { key: 'DELETE', icon: 'trash', tooltip: { title: "Delete", initialDelay: 1000, position: 'above' } },
                { key: 'CHARTS', icon: 'statistics', tooltip: { title: "Statistics", initialDelay: 1000, position: 'above' } },
                { key: 'MARK', icon: 'favorite', tooltip: { title: "Favorite", initialDelay: 1000, position: 'above' } }
            ]
        );
    }

    private loadFromJSON(){
        let self = this;

        // Use HTTP service to get data from the specified JSON file
        self.http.get("./assets/grid-row-custom-toolbar-data.json").subscribe((data: any) => {
            // Suspend the grid layout from updates, to increase performance
            self.grid.nativeElement.suspendLayout();

            // Load data into the grid
            self.convertJSONData(data);
            self.createRowToolbar();

            // Resume and update the grid layout
            self.grid.nativeElement.resumeLayout();
        });
    }

    // Events ------------------------------------------------------------------------------------

    toolbarButtonClicked(row: any, button: any){
        switch (button.key){
            case 'DELETE':
                this.grid.nativeElement.removeRow(row);
                this.grid.nativeElement.updateLayout();
                break;

            case 'CHARTS':
                alert("Statistics button is clicked for row: " + row.text);
                break;

            case 'MARK':
                row.favorite = row.favorite != undefined ? !row.favorite : true;
                button.icon = row.favorite ? 'favorite-selected' : 'favorite';
                break;
        }
    }

    // Templates ---------------------------------------------------------------------------------

    currentRowHoverTemplate = (row: any) => { 
        if (row && row.buttons)
            return html`
                ${row.buttons.map((button: any) => html`
                        <div class="grid-row-hover-button">
                    <iui-tooltip enabled="true" .settings="${button.tooltip}"> 
                            <span class="grid-row-hover-button-icons ${button.icon}" @click="${() => this.toolbarButtonClicked(row, button)}"></span>
                    </iui-tooltip>
                        </div>
                `)}
            `;

        return null;
    };

    currentRowTemplate = (row: any, cell: any) => { 
        switch (cell.cid){
            case 1:
                return html`<span class=${classMap({ 'grid-row-hover-cell-favorite': true, 'grid-row-hover-cell-favorite-selected': row.favorite === true })} style=${styleMap({ opacity: this.isRowHovered(row) ? 1 : 0.5 })}></span>`;
        }

        return null;
    };

    isRowHovered(row: any){
        return this.grid.nativeElement.isRowHovered(row);
    }
}
