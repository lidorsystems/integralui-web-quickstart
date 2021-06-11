import { Component, ElementRef, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { html } from 'integralui-web/external/lit-element.js';

import 'integralui-web/components/integralui.pivotgrid.js';
import 'integralui-web/components/integralui.select.js';
import { IntegralUISortOrder, IntegralUITheme } from 'integralui-web/components/integralui.enums.js';

@Component({
    selector: '',
    templateUrl: './pivotgrid-sorting.html',
    styleUrls: ['./pivotgrid-sorting.css']
})
export class PivotGridSorting {
    @ViewChild('grid', { static: false }) grid: ElementRef;

    public columns: Array<any> = [];
    public ctrlSize: any = { height: 500 };
    public currentResourcePath: string = 'assets/integralui-web/icons';
    public currentSelectedColumn: any = null;
    public currentSorting: any = null;
    public currentTheme: IntegralUITheme = IntegralUITheme.Office;
    public gridData: Array<any> = [];
    public rows: Array<any> = [];
    public values: Array<any> = [];

    public currentField: any = null;
    public fields: Array<any> = [
        { text: 'Category' },
        { text: 'Country' },
        { text: 'Year' }
    ];
    public sortList: Array<any> = [
        { text: 'None' },
        { text: 'Ascending' },
        { text: 'Descending' }
    ];

    private sortColumn: any = null;
    public sorting: IntegralUISortOrder = IntegralUISortOrder.None;

    constructor(private http: HttpClient){
        this.columns = [
            { name: "Year", sorting: 'Ascending', width: 150 }
        ];

        this.rows = [
            { name: 'Country', expanded: true, width: 175 },
            { name: 'Category' },
        ];

        this.values = [
            { name: "Quantity", contentAlignment: 'right', headerAlignment: 'center', formula: "SUM" }, 
            { name: "Cost", contentAlignment: 'right', headerAlignment: 'center', formula: "SUM" }
        ];

        this.sortColumn = null;
        this.sorting = IntegralUISortOrder.None;
    }

    ngAfterViewInit(){
        this.grid.nativeElement.rowTemplate = this.currentRowCellTemplate;

        // Load data into the Grid from a JSON file
        this.loadFromJSON();
    }

    // Data --------------------------------------------------------------------------------------

    private loadFromJSON(){
        let self = this;

        // Use HTTP service to get data from the specified JSON file
        self.http.get("./assets/pivotgrid-data.json").subscribe((data: Array<any>) => {
            // Suspend the tree layout from updates, to increase performance
            self.grid.nativeElement.suspendLayout();

            // Load data into the tree view
            this.gridData = data;

            // Resume and update the tree layout
            self.grid.nativeElement.resumeLayout();
        });
    }
    
    // Events ------------------------------------------------------------------------------------

    fieldChanged(e: any){
        if (e.detail.item){
            this.currentSorting = this.getSorting(e.detail.item.text);
            this.currentField = e.detail.item;
        }
    }

    getObjectFromFieldName(list: Array<any>, name: string){
        let found = list.filter(obj => obj.name === name);
        return found.length > 0 ? found[0] : null;
    }

    getExistingSortOrder(list: Array<any>, name: string){
        let obj = this.getObjectFromFieldName(list, name);
        return obj && obj.sorting !== undefined ? obj.sorting : null;
    }

    // if sorting already has been set, get it from columns or rows using the field name
    getSorting(name: string){
        let sortOrder = this.getExistingSortOrder(this.columns, name);
        if (!sortOrder)
            sortOrder = this.getExistingSortOrder(this.rows, name) || 'None';
       
        let found = this.sortList.filter(obj => obj.text === sortOrder);


        return found.length > 0 ? found[0] : this.sortList[0];
    }

    onColumnClick(e: any){
        if (e.detail.column){
            if (this.sortColumn && e.detail.column.id !== this.sortColumn.id){
                if (this.sorting === IntegralUISortOrder.None)
                    this.sorting = IntegralUISortOrder.Ascending;
            }
            else {
                if (this.sorting === IntegralUISortOrder.Ascending)
                    this.sorting = IntegralUISortOrder.Descending;
                else
                    this.sorting = IntegralUISortOrder.Ascending;
            }

            this.sortColumn = e.detail.column;

            this.grid.nativeElement.sort(e.detail.column, this.sorting);
        }
    }

    sortingChanged(e){
        if (e.detail.item){
            if (this.currentField){
                let obj = this.getObjectFromFieldName(this.columns, this.currentField.text);
                if (!obj)
                    obj = this.getObjectFromFieldName(this.rows, this.currentField.text);

                if (obj)
                    obj.sorting = e.detail.item.text;
            }

            // Clear the sort mark if sorting is enabled from columns by header click
            this.sortColumn = null;
            this.grid.nativeElement.sort(null, IntegralUISortOrder.None);

            // Update the sort order Select component
            this.currentSorting = e.detail.item;
        }
    }

    // Templates --------------------------------------------------------------------------------------

    //
    // Currently when using templates, the LitElement binding syntax is required
    // for properties, methods and events
    //
    currentRowCellTemplate = (row: any, cell: any) => { 
        return cell.value === 0 ? html`` : null;
    }
}
