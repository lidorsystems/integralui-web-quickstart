import { Component, ElementRef, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { html } from 'integralui-web/external/lit-element';

import 'integralui-web/components/integralui.treegrid';
import IntegralUICommonService from 'integralui-web/services/integralui.common.service';
import { IntegralUIFilterType, IntegralUITheme } from 'integralui-web/components/integralui.enums';

@Component({
    selector: '',
    templateUrl: './treegrid-inline-filter.html',
    styleUrls: ['./treegrid-inline-filter.css']
})
export class TreeGridInlineFilter {
    @ViewChild('treegrid', { static: false }) treegrid!: ElementRef;

    private _commonService!: IntegralUICommonService;

    public columns: Array<any> = [];
    public ctrlSize: any = { height: 500 };
    public currentResourcePath: string = 'assets/icons';
    public currentTheme: IntegralUITheme = IntegralUITheme.Office;
    public rows: Array<any> = [];

    constructor(private http: HttpClient){
        this._commonService = new IntegralUICommonService();
    }

    ngAfterViewInit(){
        this.treegrid.nativeElement.headerTemplate = this.currentHeaderTemplate;

        // Load data into the Grid from a JSON file
        this.loadFromJSON();
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
            let column = Object.assign({ headerAlignment: 'center' }, obj);

            if (column.filterType)
                column.filterType = this.getFilterType(column.filterType); // IntegralUIFilterType[column.filterType];

            columnList.push(column);
        });

        // Create rows
        data.rows.forEach((obj: any) => {
            // Copy all fields from JSON data and add a new field 'cells'
            let row = Object.assign({ cells: [] }, obj);

            // Loop through all columns and create cells accordingly
            data.columns.forEach((column: any) => {
                let field = column.title;

                // Delete all fields that will be included in cells
                delete row[field];

                // Each row should have a cell for check box column, otherwise only add cells for existing fields
                let cell: any = {
                    cid: column.id,
                    colName: field
                }

                if (obj[field] !== undefined){
                    if (this._commonService.isString(obj[field])){
                        let fieldValue = Date.parse(obj[field]);
                        if (obj[field].slice(-1) === 'Z' && !isNaN(fieldValue))
                            cell.value = new Date(fieldValue);
                        else
                            cell.text = obj[field];
                    }
                    else
                        cell.value = obj[field];
                }
                // Caluclate the Total value: sum of (Quantity * Price) + Shipping Cost
                else if (column.id === 11)
                    cell.value = (obj["Quantity"] * obj["Price"]) + obj["Shipping Cost"];

                row.cells.push(cell);
            });

            rowList.push(row);
        });

        this.columns = columnList;
        this.rows = rowList;
    }

    private getFilterType(value: string){
        switch (value){
            case 'Boolean':
                return IntegralUIFilterType.Boolean;

            case 'Date':
                return IntegralUIFilterType.Date;

            case 'Numeric':
                return IntegralUIFilterType.Numeric;

            default:
                return IntegralUIFilterType.String;
        }
    }
    
    private loadFromJSON(){
        let self = this;

        // Use HTTP service to get data from the specified JSON file
        self.http.get("./assets/treegrid-inline-filter-data.json").subscribe((data: any) => {
            // Suspend the treegrid layout from updates, to increase performance
            self.treegrid.nativeElement.suspendLayout();

            // Load data into the treegrid
            self.convertJSONData(data);

            // Resume and update the treegrid layout
            self.treegrid.nativeElement.resumeLayout();
        });
    }

    // Templates ---------------------------------------------------------------------------------

    //
    // Currently when using templates, the LitElement binding syntax is required
    // for properties, methods and events
    //

    currentHeaderTemplate = (column: any) => { 
        return html`<span class="header-label">${column.title}</span>`;
    };
}
