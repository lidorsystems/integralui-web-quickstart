import { Component, ElementRef, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { html } from 'integralui-web/external/lit-element.js';

import 'integralui-web/components/integralui.button.js';
import 'integralui-web/components/integralui.pivotgrid.js';
import 'integralui-web/components/integralui.select.js';
import { IntegralUITheme } from 'integralui-web/components/integralui.enums.js';

@Component({
    selector: '',
    templateUrl: './pivotgrid-value-filters.html',
    styleUrls: ['./pivotgrid-value-filters.css']
})
export class PivotGridValueFilters {
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
        { text: 'equals' },
        { text: 'greater than' },
        { text: 'greater than or equal to' },
        { text: 'less than' },
        { text: 'less than or equal to' },
        { text: 'does not equal' }
    ];
    public currentCondition: any = null;
    public currentField: any = null;
    public currentMeasure: any = null;
    public currentValue: number = 0;
    public fields: Array<any> = [
        { text: 'Category' },
        { text: 'Country' }
    ];
    public filterValues: any = {};
    public items: Array<any> = [];
    public measures: Array<any> = [
        { text: 'Quantity' },
        { text: 'Cost' }
    ];

    constructor(private http: HttpClient){
        this.columns = [
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
            { name: 'Country', expanded: true, width: 175 },
            { name: 'Category' }
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
            },
            { 
                name: "Cost", 
                contentAlignment: 'right', 
                footerAlignment: 'right', 
                format: {
                    options: { 
                        style: 'currency',
                        currency: 'USD',
                        minimumFractionDigits: 2,
                        maximumFractionDigits: 2
                    }
                },
                formula: "SUM", 
                headerAlignment: 'center', 
                width: 120
            }
        ];
 
        this.filterValues = {
            Category: {
                Quantity: { condition: null, value: 0 },
                Cost: { condition: null, value: 0 },
            },
            Country: {
                Quantity: { condition: null, value: 0 },
                Cost: { condition: null, value: 0 },
            }
        }
    }

    ngAfterViewInit(){
        this.grid.nativeElement.footerTemplate = this.currentFooterTemplate;
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
            case 1: //equals
                return '=';

            case 2: //greater than
                return '>';

            case 3: //greater than or equal to
                return '>=';

            case 4: //less than
                return '<';

            case 5: //less than or equal to
                return '<=';

            case 6: //does not equal
                return '!=';
        }

        return '';
    }

    // Events ------------------------------------------------------------------------------------

    applyFilter(){
        if (this.currentField && this.currentMeasure){
            let currentFilters = [...this.filters];

            let currentOperation = this.getOperation(this.currentCondition);
            let filtered = currentFilters.filter(obj => obj.name === this.currentField.text && obj.measure === this.currentMeasure.text);

            if (currentOperation !== ''){
                if (filtered.length > 0){
                    filtered[0].conditions.value = this.currentValue;
                    filtered[0].conditions.operation = currentOperation;
                    filtered[0].conditions.negative = this.conditions.indexOf(this.currentCondition) > 5 ? true : false;
                }
                else 
                    currentFilters.push({ 
                        name: this.currentField.text,
                        measure: this.currentMeasure.text,
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
            if (this.currentField && this.currentMeasure)
                this.filterValues[this.currentField.text][this.currentMeasure.text].condition = e.detail.item;

            this.currentCondition = e.detail.item;
        }
    }

    fieldChanged(e: any){
        if (e.detail.item){
            this.currentCondition = this.currentMeasure ? this.filterValues[e.detail.item.text][this.currentMeasure.text].condition : null;
            this.currentField = e.detail.item; 
            this.currentValue = this.currentMeasure ? this.filterValues[e.detail.item.text][this.currentMeasure.text].value : 0;
        }
    }

    measureChanged(e: any){
        if (e.detail.item){
            this.currentCondition = this.currentField ? this.filterValues[this.currentField.text][e.detail.item.text].condition : null;
            this.currentMeasure = e.detail.item; 
            this.currentValue = this.currentField ? this.filterValues[this.currentField.text][e.detail.item.text].value : 0;
        }
    }

    valueChanged(e: any){
        if (this.currentField)
            this.filterValues[this.currentField.text][this.currentMeasure.text].value = e.target.value;
            
        this.currentValue = e.target.value;
    }

    // Templates --------------------------------------------------------------------------------------

    //
    // Currently when using templates, the LitElement binding syntax is required
    // for properties, methods and events
    //

    currentFooterTemplate = (column: any) => { 
        return column.footerValue === 0 ? html`` : null;
    }

    currentRowCellTemplate = (row: any, cell: any) => { 
        return cell.value === 0 ? html`` : null;
    }
}
