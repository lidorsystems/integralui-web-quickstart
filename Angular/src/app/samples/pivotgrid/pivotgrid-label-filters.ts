import { Component, ElementRef, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { html } from 'integralui-web/external/lit-element.js';

import 'integralui-web/components/integralui.button.js';
import 'integralui-web/components/integralui.pivotgrid.js';
import 'integralui-web/components/integralui.select.js';
import { IntegralUITheme } from 'integralui-web/components/integralui.enums.js';

@Component({
    selector: '',
    templateUrl: './pivotgrid-label-filters.html',
    styleUrls: ['./pivotgrid-label-filters.css']
})
export class PivotGridLabelFilters {
    @ViewChild('grid', { static: false }) grid: ElementRef;

    public columns: Array<any> = [];
    public ctrlSize: any = { height: 500 };
    public currentResourcePath: string = 'assets/integralui-web/icons';
    public currentTheme: IntegralUITheme = IntegralUITheme.Office;
    public filters: Array<any> = [];
    public gridData: Array<any> = [];
    public rows: Array<any> = [];
    public values: Array<any> = [];

    public conditions: Array<any> = [
        { text: 'none' },
        { text: 'begins with' },
        { text: 'contains' },
        { text: 'ends with' },
        { text: 'equals' },
        { text: 'does not begin with' },
        { text: 'does not contain' },
        { text: 'does not end with' },
        { text: 'does not equal' }
    ];
    public currentCondition: any = null;
    public currentField: any = null;
    public currentValue: string = '';
    public fields: Array<any> = [
        { text: 'Category' },
        { text: 'Country' }
    ];
    public filterValues: any = {};

    constructor(private http: HttpClient){
        this.columns = [
            { name: 'Country', expanded: true, width: 150 },
            { 
                name: "Year", 
                contentAlignment: 'right', 
                footerAlignment: 'right', 
                format: {
                    options: { 
                        style: 'decimal'
                    }
                },
                headerAlignment: 'center', 
                sorting: 'Ascending',
                width: 110
            }
        ];

        this.rows = [
            { name: 'Category', width: 175 }
        ];

        this.values = [
            { 
                name: "Quantity", 
                contentAlignment: 'right', 
                footerAlignment: 'right', 
                format: {
                    options: { 
                        style: 'decimal'
                    }
                },
                formula: "SUM",
                headerAlignment: 'center'
            }
        ];

        this.filterValues = {
            Category: { condition: null, value: '' },
            Country: { condition: null, value: '' }
        }
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
    
    // General -----------------------------------------------------------------------------------

    getOperation(option: any){
        let index = this.conditions.indexOf(option);

        switch (index){
            case 1: //begins with
                return '->';

            case 2: //contains
                return '[]';

            case 3: //ends with
                return '<-';

            case 4: //equals
                return '=';

            case 5: //does not begin with
                return '->';

            case 6: //does not contain
                return '[]';

            case 7: //does not end with
                return '<-';

            case 8: //does not equal
                return '!=';
        }

        return '';
    }

    // Events ------------------------------------------------------------------------------------

    applyFilter(){
        if (this.currentField){
            let currentFilters = [...this.filters];

            let currentOperation = this.getOperation(this.currentCondition);
            let filtered = currentFilters.filter(obj => obj.name === this.currentField.text);

            if (currentOperation != '' && this.currentValue != ''){
                if (filtered.length > 0){
                    filtered[0].conditions.value = this.currentValue;
                    filtered[0].conditions.operation = currentOperation;
                    filtered[0].conditions.negative = this.conditions.indexOf(this.currentCondition) > 4 ? true : false;
                }
                else 
                    currentFilters.push({ 
                        name: this.currentField.text,
                        caseSensitive: false,
                        conditions: { value: this.currentValue, operation: currentOperation, negative: false }
                    });
            }
            else if (filtered.length > 0)
                currentFilters.splice(currentFilters.indexOf(filtered[0]), 1);

            this.filters = currentFilters;
        }
    }

    conditionChanged(e: any){
        if (e.detail.item){
            if (this.currentField)
                this.filterValues[this.currentField.text].condition = e.detail.item;

            this.currentCondition = e.detail.item;
        }
    }

    fieldChanged(e: any){
        if (e.detail.item){
            this.currentCondition = this.filterValues[e.detail.item.text].condition;
            this.currentField = e.detail.item;
            this.currentValue = this.filterValues[e.detail.item.text].value;
        }
    }

    valueChanged(e: any){
        if (this.currentField)
            this.filterValues[this.currentField.text].value = e.target.value;
            
        this.currentValue = e.target.value;
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
