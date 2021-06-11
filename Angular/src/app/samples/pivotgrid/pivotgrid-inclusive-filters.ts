import { Component, ElementRef, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { html } from 'integralui-web/external/lit-element.js';

import 'integralui-web/components/integralui.button.js';
import 'integralui-web/components/integralui.checkbox.js';
import 'integralui-web/components/integralui.listbox.js';
import 'integralui-web/components/integralui.pivotgrid.js';
import 'integralui-web/components/integralui.select.js';
import { IntegralUITheme } from 'integralui-web/components/integralui.enums.js';
import { iuiPivotGridInclusiveFiltersStyle } from './pivotgrid-inclusive-filters.style.js';

@Component({
    selector: '',
    templateUrl: './pivotgrid-inclusive-filters.html',
    styleUrls: ['./pivotgrid-inclusive-filters.css']
})
export class PivotGridInclusiveFilters {
    @ViewChild('grid', { static: false }) grid: ElementRef;
    @ViewChild('listbox', { static: false }) listBox: ElementRef;

    public columns: Array<any> = [];
    public ctrlSize: any = { height: 500 };
    public currentResourcePath: string = 'assets/integralui-web/icons';
    public currentTheme: IntegralUITheme = IntegralUITheme.Office;
    public customStyle: any = iuiPivotGridInclusiveFiltersStyle;
    public filters: Array<any> = [];
    public gridData: Array<any> = [];
    public rows: Array<any> = [];
    public values: Array<any> = [];

    public currentField: any = null;
    public fields: Array<any> = [
        { text: 'Category' },
        { text: 'Country' },
        { text: 'Year' }
    ];
    public items: Array<any> = [];
    public listSize: any = { height: 377 };
    public valueList: any = {
        Category: [],
        Country: [],
        Year: []
    }

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
                width: 150
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
            }
        ];
    }

    ngAfterViewInit(){
        this.grid.nativeElement.rowTemplate = this.currentRowCellTemplate;
        this.listBox.nativeElement.itemTemplate = this.currentItemTemplate;

        // Load data into the Grid from a JSON file
        this.loadFromJSON();
    }

    // Initialization ----------------------------------------------------------------------------
        
    checkObj(list: Array<any>, value: any){
    	return list.filter(obj => obj.text === value).length > 0 ? true : false;
    }

    initList(fieldName: string){
        let list = [];
        
        this.gridData.forEach(obj =>{
            if (!this.checkObj(list, obj[fieldName]))
                list.push({ checked: true, text: obj[fieldName] });
        });

        return list.sort((first, second) => {
            let x = first.text;
            let y = second.text;

            x = x !== undefined ? x : null;
            y = y !== undefined ? y : null;

            if (x < y)
                return -1;
            else if (x > y)
                return 1;
            else
                return 0;
        });
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

            self.valueList = { 
                Category: self.initList('Category'),
                Country: self.initList('Country'),
                Year: self.initList('Year')
            }
        });
    }
   
    // Events ------------------------------------------------------------------------------------

    applyFilter(){
        if (this.currentField){
            let currentFilters = [...this.filters];

            let filtered = currentFilters.filter(obj => obj.name === this.currentField.text);
            let checkedItems = this.valueList[this.currentField.text]
                .filter(item => item.checked)
                .map(item => item.text);

            if (filtered.length > 0)
                filtered[0].conditions.value = checkedItems;
            else 
                currentFilters.push({ 
                    name: this.currentField.text,
                    caseSensitive: false,
                    conditions: { value: checkedItems, operation: '=', join: '|' }
                });

            this.filters = currentFilters;
        }
    }

    fieldChanged(e: any){
        if (e.detail.item){
            this.currentField = e.detail.item;
            this.items = this.valueList[e.detail.item.text];
        }
    }

    itemChecked(e: any, item: any){
        item.checked = e.detail.checked;
    }
 
    // Templates --------------------------------------------------------------------------------------

    //
    // Currently when using templates, the LitElement binding syntax is required
    // for properties, methods and events
    //
    currentItemTemplate = (item: any) => { 
        return html`
            <iui-checkbox
                .checked="${item.checked}"
                .customStyle="${iuiPivotGridInclusiveFiltersStyle}"
                .resourcePath="${this.currentResourcePath}"
                .theme="${this.currentTheme}" 
                @checkedChanged="${(e) => this.itemChecked(e, item)}" 
            >
                ${item.text}
            </iui-checkbox>
        `;
    };

    currentRowCellTemplate = (row: any, cell: any) => { 
        return cell.value === 0 ? html`` : null;
    }
}
