import { Component, ElementRef, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import 'integralui-web/components/integralui.rating';
import 'integralui-web/components/integralui.grid';
import IntegralUICommonService from 'integralui-web/services/integralui.common.service';
import { IntegralUIEditorType, IntegralUISelectionMode, IntegralUITheme } from 'integralui-web/components/integralui.enums';

@Component({
    selector: '',
    templateUrl: './grid-overview.html',
    styleUrls: ['./grid-overview.css']
})
export class GridOverview {
    @ViewChild('grid', { static: false }) grid!: ElementRef;

    private _commonService!: IntegralUICommonService;

    public columns: Array<any> = [];
    public ctrlSize: any = { width: 800, height: 400 };
    public currentResourcePath: string = 'assets/icons';
    public currentSelectionMode: IntegralUISelectionMode = IntegralUISelectionMode.MultiExtended;
    public currentTheme: IntegralUITheme = IntegralUITheme.Office;
    public rows: Array<any> = [];

    constructor(private http: HttpClient){
        this._commonService = new IntegralUICommonService();

        this.columns = [
            { id: 1, width: 30, editorType: IntegralUIEditorType.CheckBox, fixedWidth: true },
            { id: 2, headerText: "Title", width: 300 },
            { id: 3, headerText: "Year", headerAlignment: "center", contentAlignment: "center", width: 70 },
            { 
                id: 4, 
                headerText: "Rating", 
                headerAlignment: "center", 
                contentAlignment: "center", 
                editorType: IntegralUIEditorType.Rating,
                editorSettings: {
                    editOnFocus: true
                },
                width: 150, 
                fixedWidth: true
            },
            { id: 5, headerText: "Released", headerAlignment: "center", contentAlignment: "center", width: 180 }
        ];
    }

    ngAfterViewInit(){
        // Load data into the Grid from a JSON file
        this.loadFromJSON();
    }

    // Data --------------------------------------------------------------------------------------

    private convertJSONData(data: any){
        let result: Array<any> = [];

        data.forEach((obj: any) => {
            // Copy all fields from JSON data and add a new field 'cells'
            let row = Object.assign({ cells: [] }, obj);

            // Loop through all columns and create cells accordingly
            this.columns.forEach((column: any) => {
                let field = column.id === 1 ? 'isChecked' : column.headerText;

                // Delete all fields that will be included in cells, except for the field 'Title'
                if (column.headerText !== 'Title')
                    delete row[field];

                // Each row should have a cell for check box column, otherwise only add cells for existing fields
                if (column.id === 1 || obj[field] !== undefined){
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
        self.http.get("./assets/grid-overview-data.json").subscribe((data: any) => {
            // Suspend the grid layout from updates, to increase performance
            self.grid.nativeElement.suspendLayout();

            // Load data into the grid
            self.grid.nativeElement.loadData(this.convertJSONData(data), null, null, false);

            // Resume and update the grid layout
            self.grid.nativeElement.resumeLayout();
        });
    }
}
