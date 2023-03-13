import React, { Component } from 'react';
import { html } from 'integralui-web/external/lit-element.js';

import IntegralUIGridComponent from 'integralui-web/wrappers/react.integralui.grid.js';
import { IntegralUIEditMode, IntegralUIEditorType, IntegralUITheme } from 'integralui-web/components/integralui.enums.js';
import { iuiGridEditorsTextStyle } from './grid-editors-text.style.js';

class GridEditorsText extends Component {

    //
    // Initialization / Destruction --------------------------------------------------------------
    //

    constructor(props){
        super(props);
    
        this.state = {
            columns: [
                { 
                    id: 1, 
                    editorType: IntegralUIEditorType.Text,
                    editorSettings: {
                        allowChange: "lost-focus",
                        editOnFocus: true,
                        selected: true
                    },
                    headerText: "Company", 
                    width: 300
                },
                { id: 2, headerText: "Country", headerAlignment: "center", width: 180 },
                { 
                    id: 3, 
                    contentAlignment: "right", 
                    headerText: "Date", 
                    headerAlignment: "center", 
                    width: 150
                },
                { id: 4, headerText: "Price", headerAlignment: "center", contentAlignment: "right" },
            ],
            ctrlSize: { width: 800, height: 450 },
            currentEditMode: IntegralUIEditMode.Custom,
            currentResourcePath: '../../../../integralui-web/icons',
            currentTheme: IntegralUITheme.Office,
            isAnimationAllowed: true,
            rows: [
                { 
                    id: 1,
                    text: "Lacus Aliquam Consulting",
                    cells: [{ cid: 1, value: "Lacus Aliquam Consulting" }, { cid: 2, icon: 'brazil', text: "Brazil" }, { cid: 3, value: new Date(2021, 0, 13) }, { cid: 4, text: "$326.42" } ]
                },
                { 
                    id: 2,
                    text: "Magna Sed Limited",
                    cells: [{ cid: 1, value: "Magna Sed Limited" }, { cid: 2, icon: 'germany', text: "Germany" }, { cid: 3, value: new Date(2020, 3, 10) }, { cid: 4, text: "$780.60" } ]
                },
                { 
                    id: 3,
                    text: "Nulla Foundation",
                    cells: [{ cid: 1, value: "Nulla Foundation" }, { cid: 2, icon: 'poland', text: "Poland" }, { cid: 3, value: new Date(2019, 4, 19) }, { cid: 4, text: "$706.75" } ]
                },
                { 
                    id: 4,
                    text: "Augue LLC",
                    cells: [{ cid: 1, value: "Augue LLC" }, { cid: 2, icon: 'austria', text: "Austria" }, { cid: 3, value: new Date(2021, 5, 1) }, { cid: 4, text: "$743.29" } ]
                },
                { 
                    id: 5,
                    text: "Porttitor Corp.",
                    cells: [{ cid: 1, value: "Porttitor Corp." }, { cid: 2, icon: 'italy', text: "Italy" }, { cid: 3, value: new Date(2020, 10, 29) }, { cid: 4, text: "$196.53" } ]
                },
                { 
                    id: 6,
                    text: "Odio Sagittis Semper Industries",
                    cells: [{ cid: 1, value: "Odio Sagittis Semper Industries" }, { cid: 2, icon: 'spain', text: "Spain" }, { cid: 3, value: new Date(2020, 4, 3) }, { cid: 4, text: "$476.05" } ]
                },
                { 
                    id: 7,
                    text: "Varius Orci In PC",
                    cells: [{ cid: 1, value: "Varius Orci In PC" }, { cid: 2, icon: 'india', text: "India" }, { cid: 3, value: new Date(2019, 5, 23) }, { cid: 4, text: "$592.57" } ]
                },
                { 
                    id: 8,
                    text: "Neque Sed Sem Foundation",
                    cells: [{ cid: 1, value: "Neque Sed Sem Foundation" }, { cid: 2, icon: 'uk', text: "United Kingdom" }, { cid: 3, value: new Date(2017, 4, 24) }, { cid: 4, text: "$951.02" } ]
                },
                { 
                    id: 9,
                    text: "Semper Erat In Company",
                    cells: [{ cid: 1, value: "Semper Erat In Company" }, { cid: 2, icon: 'turkey', text: "Turkey" }, { cid: 3, value: new Date(2018, 11, 24) }, { cid: 4, text: "$977.49" } ]
                },
                { 
                    id: 10,
                    text: "Mi Pede Associates",
                    cells: [{ cid: 1, value: "Mi Pede Associates" }, { cid: 2, icon: 'netherlands', text: "Netherlands" }, { cid: 3, value: new Date(2019, 5, 26) }, { cid: 4, text: "$875.76" } ]
                },
                { 
                    id: 11,
                    text: "Aliquet Incorporated",
                    cells: [{ cid: 1, value: "Aliquet Incorporated" }, { cid: 2, icon: 'netherlands', text: "Netherlands" }, { cid: 3, value: new Date(2018, 4, 12) }, { cid: 4, text: "$100.27" } ]
                },
                { 
                    id: 12,
                    text: "Viverra LLC",
                    cells: [{ cid: 1, value: "Viverra LLC" }, { cid: 2, icon: 'brazil', text: "Brazil" }, { cid: 3, value: new Date(2021, 2, 26) }, { cid: 4, text: "$864.68" } ]
                },
                { 
                    id: 13,
                    text: "Hymenaeos Corporation",
                    cells: [{ cid: 1, value: "Hymenaeos Corporation" }, { cid: 2, icon: 'canada', text: "Canada" }, { cid: 3, value: new Date(2020, 8, 29) }, { cid: 4, text: "$444.67" } ]
                },
                { 
                    id: 14,
                    text: "Consectetuer Euismod Est PC",
                    cells: [{ cid: 1, value: "Consectetuer Euismod Est PC" }, { cid: 2, icon: 'sweden', text: "Sweden" }, { cid: 3, value: new Date(2016, 7, 26) }, { cid: 4, text: "$965.14" } ]
                },
                { 
                    id: 15,
                    text: "Ultricies Sem Magna Corp.",
                    cells: [{ cid: 1, value: "Ultricies Sem Magna Corp." }, { cid: 2, icon: 'ireland', text: "Ireland" }, { cid: 3, value: new Date(2016, 8, 28) }, { cid: 4, text: "$797.74" } ]
                },
                { 
                    id: 16,
                    text: "Proin Industries",
                    cells: [{ cid: 1, value: "Proin Industries" }, { cid: 2, icon: 'usa', text: "United States" }, { cid: 3, value: new Date(2019, 9, 31) }, { cid: 4, text: "$233.66" } ]
                },
                { 
                    id: 17,
                    text: "Sociis Consulting",
                    cells: [{ cid: 1, value: "Sociis Consulting" }, { cid: 2, icon: 'uk', text: "United Kingdom" }, { cid: 3, value: new Date(2019, 10, 26) }, { cid: 4, text: "$333.94" } ]
                },
                { 
                    id: 18,
                    text: "Metus Urna Convallis Corp.",
                    cells: [{ cid: 1, value: "Metus Urna Convallis Corp." }, { cid: 2, icon: 'germany', text: "Germany" }, { cid: 3, value: new Date(2016, 10, 9) }, { cid: 4, text: "$772.77" } ]
                },
                { 
                    id: 19,
                    text: "Augue Scelerisque PC",
                    cells: [{ cid: 1, value: "Augue Scelerisque PC" }, { cid: 2, icon: 'belgium', text: "Belgium" }, { cid: 3, value: new Date(2020, 0, 10) }, { cid: 4, text: "$676.69" } ]
                },
                { 
                    id: 20,
                    text: "Ornare Facilisis Eget LLP",
                    cells: [{ cid: 1, value: "Ornare Facilisis Eget LLP" }, { cid: 2, icon: 'turkey', text: "Turkey" }, { cid: 3, value: new Date(2018, 6, 25) }, { cid: 4, text: "$97.52" } ]
                },
                { 
                    id: 21,
                    text: "Id Risus",
                    cells: [{ cid: 1, value: "Id Risus" }, { cid: 2, icon: 'france', text: "France" }, { cid: 3, value: new Date(2019, 10, 29) }, { cid: 4, text: "$692.36" } ]
                }
            ]
        }

        this.gridRef = React.createRef();
    }

    //
    // Methods -----------------------------------------------------------------------------------
    //

    // Events ------------------------------------------------------------------------------------

    textValueChanged(e){
        // Only handle if the value changes for the cell with a text editor
        if (e.detail.cell.cid === 1)
            console.log("Cell text has changed to: ", e.detail.value);
    }


    // Templates ---------------------------------------------------------------------------------

    //
    // Currently when using templates, the LitElement binding syntax is required
    // for properties, methods and events
    //
    currentRowCellTemplate = (row, cell) => { 
        if (cell.cid === 2)
            return html`<div class="change-cell">
                    <span class="grid-celltxt-flags ${cell.icon}"></span>
                    <span class="grid-celltxt-country">${cell.text}</span>
                </div>`;

        return null;
    };

    // Update ------------------------------------------------------------------------------------

    render() {
        return (
            <div>
                <h2>Grid / Cells with Text Editor</h2>
                <div className="sample-block" id="grid-editors-text">
                    <IntegralUIGridComponent ref={this.gridRef}
                        allowAnimation={this.state.isAnimationAllowed} 
                        columns={this.state.columns} 
                        customStyle={iuiGridEditorsTextStyle}
                        editMode={this.state.currentEditMode}
                        resourcePath={this.state.currentResourcePath}
                        rowHeight={32}
                        rows={this.state.rows} 
                        rowTemplate={this.currentRowCellTemplate}
                        showFooter={false}
                        size={this.state.ctrlSize}
                        theme={this.state.currentTheme}
                        valueChanged={(e) => this.textValueChanged(e)}
                    ></IntegralUIGridComponent>
                    <div className="feature-help">
                        <p><span className="initial-space"></span>In above demo, cells in Company column are editable. When you click on the cell, a textbox will popup where you can enter a new string. Cell value is changed when you press the ENTER key or move the input focus to another cell.</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default GridEditorsText;
