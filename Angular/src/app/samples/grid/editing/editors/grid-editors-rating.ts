import { Component, ElementRef, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import 'integralui-web/components/integralui.grid';
import 'integralui-web/components/integralui.rating';
import IntegralUICommonService from 'integralui-web/services/integralui.common.service';
import { IntegralUIEditorType, IntegralUIIncrementMode, IntegralUITheme } from 'integralui-web/components/integralui.enums';
import { iuiGridEditorsRatingStyle } from './grid-editors-rating.style';

@Component({
    selector: '',
    templateUrl: './grid-editors-rating.html',
    styleUrls: ['./grid-editors-rating.css']
})
export class GridEditorsRating {
    @ViewChild('grid', { static: false }) grid!: ElementRef;

    private _commonService!: IntegralUICommonService;

    // Grid
    public columns: Array<any> = [];
    public ctrlSize: any = { width: 600, height: 400 };
    public currentResourcePath: string = 'assets/icons';
    public currentTheme: IntegralUITheme = IntegralUITheme.Office;
    public customStyle: any = iuiGridEditorsRatingStyle;
    public rows: Array<any> = [];

    constructor(private http: HttpClient){
        this._commonService = new IntegralUICommonService();

        this.columns = [
            { id: 2, headerText: "Title", width: 300 },
            { id: 3, headerText: "Year", headerAlignment: "center", contentAlignment: "center", width: 70 },
            { 
                id: 4, 
                headerText: "Rating", 
                headerAlignment: "center", 
                contentAlignment: "center", 
                editorType: IntegralUIEditorType.Rating,
                editorSettings: {
                    editOnFocus: true,
                    increment: IntegralUIIncrementMode.Partial,
                    stepSize: 22
                },
                width: 150, 
                fixedWidth: true
            }
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
            this.columns.forEach(column => {
                let field = column.headerText;

                // Add Title to the row text
                if (field === 'Title')
                    row.text = obj[field];

                // Delete all fields that will be included in cells, except for the field 'Title'
                if (column.headerText !== 'Title')
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

            this.rows.push(row);
        });
    }

    private loadFromJSON(){
        let self = this;

        // Use HTTP service to get data from the specified JSON file
        self.http.get("./assets/grid-editors-rating-data.json").subscribe((data: any) => {
            // Suspend the grid layout from updates, to increase performance
            self.grid.nativeElement.suspendLayout();

            // Load data into the grid
            self.convertJSONData(data);
    
            // Resume and update the grid layout
            self.grid.nativeElement.resumeLayout();
        });
    }

    // Events ------------------------------------------------------------------------------------

    cellValueChanged(e: any){
        // Only handle if the value changes for the cell with a rating
        if (e.detail.cell.cid === 4)
            console.log("Rating for " + e.detail.row.text + " has changed to: ", e.detail.value);
    }
}
