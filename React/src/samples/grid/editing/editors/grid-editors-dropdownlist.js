import React, { Component } from 'react';

import IntegralUIGridComponent from 'integralui-web/wrappers/react.integralui.grid.js';
import { IntegralUIEditMode, IntegralUIEditorType, IntegralUITheme } from 'integralui-web/components/integralui.enums.js';
import { iuiGridEditorsDropDownListStyle } from './grid-editors-dropdownlist.style.js';
import 'integralui-web/components/integralui.select.js';

class GridEditorsDropList extends Component {

    //
    // Initialization / Destruction --------------------------------------------------------------
    //

    constructor(props){
        super(props);
    
        this.listItems = [
            { text: "None", value: -1 },
            { text: "Delivery Truck", value: 0 },
            { text: "Regular Air", value: 1 },
            { text: "Express Air", value: 2 }
        ];

        this.state = {
            columns: [
                { id: 1, headerText: "Order ID", width: 80 },
                { id: 2, headerText: "Customer", width: 150 },
                { 
                    id: 3, 
                    contentAlignment: "center", 
                    headerText: "Ship Mode", 
                    headerAlignment: "center", 
                    editorType: IntegralUIEditorType.DropDownList,
                    editorSettings: {
                        allowAnimation: true,
                        dropDownAdjustment: { top: 10 },
                        items: this.listItems
                    },
                    width: 200
                },
                { id: 4, headerText: "Ship Date", headerAlignment: "center", contentAlignment: "center", format: { options: { year: 'numeric', month: 'short', day: '2-digit' } } },
                { id: 5, headerText: "Quantity", contentAlignment: "right", width: 80 },
                { id: 6, headerText: "Price", headerAlignment: "center", contentAlignment: "right" }
            ],
            ctrlSize: { width: 800, height: 450 },
            currentEditMode: IntegralUIEditMode.Custom,
            currentResourcePath: '../../../../integralui-web/icons',
            currentTheme: IntegralUITheme.Office,
            isAnimationAllowed: true,
            rows: [
                { 
                    id: 1,
                    text: "John MacIntyre",
                    cells: [{ cid: 1, text: "293" }, { cid: 2, text: "John MacIntyre" }, { cid: 3, value: 1 }, { cid: 4, value: new Date(2016, 9, 21) }, { cid: 5, text: "6" }, { cid: 6, text: "$38.94" } ]
                },
                { 
                    id: 2,
                    text: "Barry French",
                    cells: [{ cid: 1, text: "312" }, { cid: 2, text: "Barry French" }, { cid: 3, value: 2 }, { cid: 4, value: new Date(2018, 6, 16) }, { cid: 5, text: "49" }, { cid: 6, text: "$208.16" } ]
                },
                { 
                    id: 3,
                    text: "Benjamin Oliver",
                    cells: [{ cid: 1, text: "476" }, { cid: 2, text: "Benjamin Oliver" }, { cid: 3, value: 0 }, { cid: 4, value: new Date(2017, 2, 28) }, { cid: 5, text: "27" }, { cid: 6, text: "$8.69" } ]
                },
                { 
                    id: 4,
                    text: "Clay Rozendal",
                    cells: [{ cid: 1, text: "119" }, { cid: 2, text: "Clay Rozendal" }, { cid: 3, value: 2 }, { cid: 4, value: new Date(2018, 7, 15) }, { cid: 5, text: "30" }, { cid: 6, text: "$195.99" } ]
                },
                { 
                    id: 5,
                    text: "Carlos Soltero",
                    cells: [{ cid: 1, text: "512" }, { cid: 2, text: "Carlos Soltero" }, { cid: 3, value: 0 }, { cid: 4, value: new Date(2019, 4, 20) }, { cid: 5, text: "19" }, { cid: 6, text: "$21.78" } ]
                },
                { 
                    id: 6,
                    text: "Noble Hancock",
                    cells: [{ cid: 1, text: "575" }, { cid: 2, text: "Noble Hancock" }, { cid: 3, value: 1 }, { cid: 4, value: new Date(2016, 11, 10) }, { cid: 5, text: "21" }, { cid: 6, text: "$8.69" } ]
                },
                { 
                    id: 7,
                    text: "Carl Jackson",
                    cells: [{ cid: 1, text: "237" }, { cid: 2, text: "Carl Jackson" }, { cid: 3, value: 0 }, { cid: 4, value: new Date(2018, 7, 8) }, { cid: 5, text: "12" }, { cid: 6, text: "$6.64" } ]
                },
                { 
                    id: 8,
                    text: "Monica Federle",
                    cells: [{ cid: 1, text: "254" }, { cid: 2, text: "Monica Federle" }, { cid: 3, value: 1 }, { cid: 4, value: new Date(2019, 8, 24) }, { cid: 5, text: "22" }, { cid: 6, text: "$7.30" } ]
                },
                { 
                    id: 9,
                    text: "Dorothy Badders",
                    cells: [{ cid: 1, text: "716" }, { cid: 2, text: "Dorothy Badders" }, { cid: 3, value: 2 }, { cid: 4, value: new Date(2016, 2, 14) }, { cid: 5, text: "21" }, { cid: 6, text: "$42.76" } ]
                },
                { 
                    id: 10,
                    text: "Neola Schneider",
                    cells: [{ cid: 1, text: "945" }, { cid: 2, text: "Neola Schneider" }, { cid: 3, value: 0 }, { cid: 4, value: new Date(2019, 1, 17) }, { cid: 5, text: "44" }, { cid: 6, text: "$138.14" } ]
                },
                { 
                    id: 11,
                    text: "Blaze Lester",
                    cells: [{ cid: 1, text: "831" }, { cid: 2, text: "Blaze Lester" }, { cid: 3, value: 1 }, { cid: 4, value: new Date(2016, 6, 22) }, { cid: 5, text: "37" }, { cid: 6, text: "$4.98" } ]
                },
                { 
                    id: 12,
                    text: "Carlos Daly",
                    cells: [{ cid: 1, text: "1024" }, { cid: 2, text: "Carlos Daly" }, { cid: 3, value: 0 }, { cid: 4, value: new Date(2018, 5, 29) }, { cid: 5, text: "32" }, { cid: 6, text: "$4.28" } ]
                },
                { 
                    id: 13,
                    text: "Steven Donaldson",
                    cells: [{ cid: 1, text: "712" }, { cid: 2, text: "Steven Donaldson" }, { cid: 3, value: 1 }, { cid: 4, value: new Date(2017, 7, 9) }, { cid: 5, text: "19" }, { cid: 6, text: "$3.95" } ]
                },
                { 
                    id: 14,
                    text: "Claudia Miner",
                    cells: [{ cid: 1, text: "449" }, { cid: 2, text: "Claudia Miner" }, { cid: 3, value: 0 }, { cid: 4, value: new Date(2019, 4, 4) }, { cid: 5, text: "24" }, { cid: 6, text: "$21.78" } ]
                },
                { 
                    id: 15,
                    text: "Bert Gibbs",
                    cells: [{ cid: 1, text: "312" }, { cid: 2, text: "Bert Gibbs" }, { cid: 3, value: 0 }, { cid: 4, value: new Date(2017, 10, 11) }, { cid: 5, text: "11" }, { cid: 6, text: "$47.98" } ]
                },
                { 
                    id: 16,
                    text: "Allen Rosenblatt",
                    cells: [{ cid: 1, text: "573" }, { cid: 2, text: "Allen Rosenblatt" }, { cid: 3, value: 2 }, { cid: 4, value: new Date(2018, 7, 23) }, { cid: 5, text: "15" }, { cid: 6, text: "$5.28" } ]
                },
                { 
                    id: 17,
                    text: "Sylvia Foulston",
                    cells: [{ cid: 1, text: "233" }, { cid: 2, text: "Sylvia Foulston" }, { cid: 3, value: 1 }, { cid: 4, value: new Date(2019, 2, 15) }, { cid: 5, text: "27" }, { cid: 6, text: "$39.89" } ]
                },
                { 
                    id: 18,
                    text: "Henry Branch",
                    cells: [{ cid: 1, text: "119" }, { cid: 2, text: "Henry Branch" }, { cid: 3, value: 0 }, { cid: 4, value: new Date(2016, 5, 7) }, { cid: 5, text: "5" }, { cid: 6, text: "$15.74" } ]
                },
                { 
                    id: 19,
                    text: "Jim Radford",
                    cells: [{ cid: 1, text: "158" }, { cid: 2, text: "Jim Radford" }, { cid: 3, value: 2 }, { cid: 4, value: new Date(2019, 11, 4) }, { cid: 5, text: "9" }, { cid: 6, text: "$100.98" } ]
                },
                { 
                    id: 20,
                    text: "Carl Forbes",
                    cells: [{ cid: 1, text: "356" }, { cid: 2, text: "Carl Forbes" }, { cid: 3, value: 0 }, { cid: 4, value: new Date(2016, 8, 27) }, { cid: 5, text: "12" }, { cid: 6, text: "$71.37" } ]
                },
                { 
                    id: 21,
                    text: "Christian Woodward",
                    cells: [{ cid: 1, text: "627" }, { cid: 2, text: "Christian Woodward" }, { cid: 3, value: 2 }, { cid: 4, value: new Date(2018, 3, 12) }, { cid: 5, text: "35" }, { cid: 6, text: "$7.26" } ]
                }
            ]
        }

        this.gridRef = React.createRef();
    }

    //
    // Methods -----------------------------------------------------------------------------------
    //

    // Events ------------------------------------------------------------------------------------

    beforeValueChange(e){
        // In case you dont know the matching row, you can search for rows using the findRowById method
        // and check whether the customer name matches the name you are looking for

        // In this case, the row ID for the Customer 'Barry French' is set to 2
        // If a Ship Mode is set to any other value than Express Air, cancel the event
        if (e.detail.cell && e.detail.cell.rid == 2 && e.detail.value != 2)
            e.detail.cancel = true;
    }

    // Update ------------------------------------------------------------------------------------

    render() {
        return (
            <div>
                <h2>Grid / Cells with DropList</h2>
                <div className="sample-block" id="grid-editors-droplist">
                    <IntegralUIGridComponent ref={this.gridRef}
                        allowAnimation={this.state.isAnimationAllowed} 
                        allowFocus={false}
                        columns={this.state.columns} 
                        customStyle={iuiGridEditorsDropDownListStyle}
                        editMode={this.state.currentEditMode}
                        resourcePath={this.state.currentResourcePath}
                        rowHeight={32}
                        rows={this.state.rows} 
                        showFooter={false}
                        size={this.state.ctrlSize}
                        theme={this.state.currentTheme}
                        valueChanging={(e) => this.beforeValueChange(e)}
                    ></IntegralUIGridComponent>
                    <div className="feature-help">
                        <p><span className="initial-space"></span>In above demo, you can change the Ship Mode using different options from a dropdown list. The cells that have a dropdown editor attached have a down arrow icon, which when clicked will open a dropdown list. Once the list opens, you can select a different option.</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default GridEditorsDropList;
