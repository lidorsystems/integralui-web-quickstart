import { Component, ElementRef, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { html } from 'integralui-web/external/lit-element';

import 'integralui-web/components/integralui.button';
import 'integralui-web/components/integralui.pivotgrid';
import { IntegralUITheme } from 'integralui-web/components/integralui.enums';

@Component({
    selector: '',
    templateUrl: './pivotgrid-export.html',
    styleUrls: ['./pivotgrid-export.css']
})
export class PivotGridExport {
    @ViewChild('grid', { static: false }) grid!: ElementRef;

    public columns: Array<any> = [];
    public ctrlSize: any = { height: 500 };
    public currentResourcePath: string = 'assets/icons';
    public currentTheme: IntegralUITheme = IntegralUITheme.Office;
    public gridData: Array<any> = [];
    public rows: Array<any> = [];
    public values: Array<any> = [];

    constructor(private http: HttpClient){
        this.columns = [
            { name: "Year", headerAlignment: 'center', sorting: "Ascending", width: 150 }
        ];

        this.rows = [
            { name: 'Country', expanded: false, width: 180 },
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
        self.http.get("./assets/pivotgrid-data.json").subscribe((data: any) => {
            // Suspend the tree layout from updates, to increase performance
            self.grid.nativeElement.suspendLayout();

            // Load data into the tree view
            this.gridData = data;

            // Resume and update the tree layout
            self.grid.nativeElement.resumeLayout();
        });
    }
    
    // Export ----------------------------------------------------------------------------

    exportJSON(){
        let data = this.grid.nativeElement.exportToJSON();
        console.log(data);
    }

    exportCSV(){
        let data = this.grid.nativeElement.exportToCSV();
        this.downloadCSV(data, 'pivotgrid');
    }

    downloadCSV(data: any, fileName: string){
        let blob = new Blob([data], { type: "text/csv;charset=utf-8;" });

        let link = document.createElement("a");
        if (link.download !== undefined) {
            let url = URL.createObjectURL(blob);
            link.setAttribute("href", url);
            link.setAttribute("download", this.generateFileName(fileName));

            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        }
    }

    generateFileName(fileName: string){
        let date = new Date();

        return fileName + date.toLocaleDateString() + "_" +  date.toLocaleTimeString() + '.csv';
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
