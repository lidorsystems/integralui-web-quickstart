import React, { Component } from 'react';
import { html } from 'integralui-web/external/lit-element.js';

import IntegralUIButtonComponent from 'integralui-web/wrappers/react.integralui.button.js';
import IntegralUIPivotGridComponent from 'integralui-web/wrappers/react.integralui.pivotgrid.js';
import { IntegralUITheme } from 'integralui-web/components/integralui.enums.js';

import './pivotgrid-export.css';
import gridData from './pivotgrid-data.json';

class PivotGridExport extends Component {

    //
    // Initialization / Destruction --------------------------------------------------------------
    //

    constructor(props){
        super(props);
    
        this.state = {
            columns: [ 
                 { name: "Year", headerAlignment: 'center', sorting: "Ascending", width: 150 }
            ],
            ctrlSize: { height: 500 },
            currentResourcePath: '../integralui-web/icons',
            currentTheme: IntegralUITheme.Office,
            isAnimationAllowed: true,
            rows: [ 
                { name: 'Country', expanded: false, width: 180 },
                { name: 'Category' }
            ],
            values: [ 
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
            ]
        }

        this.gridRef = React.createRef();
    }

    //
    // Methods -----------------------------------------------------------------------------------
    //

    // Export ----------------------------------------------------------------------------

    exportJSON(){
        let data = this.gridRef.current.exportToJSON();
        console.log(data);
    }

    exportCSV(){
        let data = this.gridRef.current.exportToCSV();
        this.downloadCSV(data, 'pivotgrid');
    }

    downloadCSV(data, fileName){
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

    generateFileName(fileName){
        let date = new Date();

        return fileName + date.toLocaleDateString() + "_" +  date.toLocaleTimeString() + '.csv';
    }

    // Events ------------------------------------------------------------------------------------

    //
    // Currently when using templates, the LitElement binding syntax is required
    // for properties, methods and events
    //
    currentRowCellTemplate = (row, cell) => { 
        return cell.value === 0 ? html`` : null;
    }

    // Update ------------------------------------------------------------------------------------

    render(){
        return (
            <div>
                <h2>PivotGrid / Export</h2>
                <div className="sample-block-grd-expt" id="pivotgrid-export">
                    <IntegralUIPivotGridComponent ref={this.gridRef}
                        allowAnimation={this.state.isAnimationAllowed} 
                        columns={this.state.columns} 
                        data={gridData} 
                        footerHeight={22}
                        resourcePath={this.state.currentResourcePath}
                        rowHeight={22}
                        rows={this.state.rows} 
                        rowTemplate={this.currentRowCellTemplate}
                        size={this.state.ctrlSize}
                        theme={this.state.currentTheme}
                        values={this.state.values} 
                    ></IntegralUIPivotGridComponent>
                    <div className="sbp-pgrd-expt" align="center">
                        <IntegralUIButtonComponent allowAnimation={this.state.isAnimationAllowed} theme={this.state.currentTheme} onClick={() => this.exportCSV()}>Export as CSV</IntegralUIButtonComponent>
                        <IntegralUIButtonComponent allowAnimation={this.state.isAnimationAllowed} theme={this.state.currentTheme} onClick={() => this.exportJSON()}>Export as JSON</IntegralUIButtonComponent>
                    </div>
                    <div className="feature-help">
                        <p><span className="initial-space"></span>This example presents how to export the PivotGrid data to Excel CSV file or a JSON formatted string. When exporting to JSON, the final result is shown in console window.</p>
                        <p><span className="initial-space"></span>To export data, the following methods are used:</p>
                        <ul className="feature-points">
                            <li><span className="code-name">exportToCSV()</span> - exports data to Excel CSV format</li>
                            <li><span className="code-name">exportToJSON(columnFields, rowFields, spacing)</span> - exports data to a JSON formatted string</li>
                        </ul>
                        <p><span className="initial-space"></span>When exporting to a CSV file, only display values are exported for each column cell. On the other hand, when exporting to JSON, all or only specified fields are exported.</p> 
                    </div>
                </div>
            </div>
        );
    }
}

export default PivotGridExport;
