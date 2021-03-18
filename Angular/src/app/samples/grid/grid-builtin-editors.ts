import { Component, ElementRef, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import 'integralui-web/components/integralui.datepicker.js';
import 'integralui-web/components/integralui.numeric.js';
import 'integralui-web/components/integralui.select.js';
import 'integralui-web/components/integralui.grid.js';
import { IntegralUIAlignment, IntegralUIDateFormat, IntegralUIEditorType, IntegralUITheme, IntegralUIVisibility, IntegralUIWeekDays } from 'integralui-web/components/integralui.enums.js';

@Component({
    selector: '',
    templateUrl: './grid-builtin-editors.html',
    styleUrls: ['./grid-builtin-editors.css']
})
export class GridBuiltInEditors {
    @ViewChild('grid', { static: false }) grid: ElementRef;

    public columns: Array<any> = [];
    public ctrlSize: any = { width: 800, height: 400 };
    public currentResourcePath: string = 'assets/integralui-web/icons';
    public currentTheme: IntegralUITheme = IntegralUITheme.Office;
    public rows: Array<any> = [];

    private shipModeList: Array<any> = [
        { text: "None", value: -1 },
        { text: "Delivery Truck", value: 0 },
        { text: "Regular Air", value: 1 },
        { text: "Express Air", value: 2 }
    ];

    constructor(private http: HttpClient){
        this.columns = [
            { id: 1, headerText: "Order ID", width: 80 },
            { id: 2, headerText: "Customer", width: 150 },
            { 
                id: 3, 
                headerText: "Ship Mode", 
                editorType: IntegralUIEditorType.DropList,
                editorSettings: {
                    allowAnimation: true,
                    dropDownAdjustment: { top: 7 },
                    items: this.shipModeList,
                    visible: IntegralUIVisibility.Click | IntegralUIVisibility.Hover
                },
                width: 140
            },
            { 
                id: 5, 
                headerText: "Quantity", 
                contentAlignment: "right", 
                editorType: IntegralUIEditorType.Numeric,
                editorSettings: {
                    buttonAlign: IntegralUIAlignment.Left,
                    max: 200,
                    visible: IntegralUIVisibility.Click | IntegralUIVisibility.Hover
                },
                width: 100
            },
            { 
                id: 4, 
                headerText: "Ship Date", 
                headerAlignment: "center", 
                contentAlignment: "center",
                editorType: IntegralUIEditorType.Date,
                editorSettings: {
                    allowAnimation: true,
                    calendarSize: { width: 250, height: 200 },
                    dropDownAdjustment: { top: 7 },
                    locales: 'en-GB',
                    firstDayOfWeek: IntegralUIWeekDays.Monday,
                    format: IntegralUIDateFormat.Custom,
                    formatOptions: {
                        year: 'numeric',
                        month: 'short',
                        day: '2-digit'
                    },
                    visible: IntegralUIVisibility.Click | IntegralUIVisibility.Hover
                },
                width: 150
            },
            { 
                id: 6, 
                headerText: "Price", 
                headerAlignment: "center", 
                editorType: IntegralUIEditorType.Text,
                editorSettings: {
                    allowChange: 'lost-focus',
                    editOnFocus: true,
                    format: { 
                        options: { 
                            style: 'currency', 
                            currency: 'USD'
                        }
                    }, 
                    type: 'number'
                },
                contentAlignment: "right"
            }
        ];

        this.rows =[
            { 
                id: 1,
                text: "John MacIntyre",
                cells: [{ cid: 1, text: "293" }, { cid: 2, text: "John MacIntyre" }, { cid: 3, value: 1 }, { cid: 4, value: new Date(2016, 9, 21) }, { cid: 5, value: 6 }, { cid: 6, value: 38.94 } ]
            },
            { 
                id: 2,
                text: "Barry French",
                cells: [{ cid: 1, text: "312" }, { cid: 2, text: "Barry French" }, { cid: 3, value: 2 }, { cid: 4, value: new Date(2018, 6, 16) }, { cid: 5, value: 49 }, { cid: 6, value: 208.16 } ]
            },
            { 
                id: 3,
                text: "Benjamin Oliver",
                cells: [{ cid: 1, text: "476" }, { cid: 2, text: "Benjamin Oliver" }, { cid: 3, value: 0 }, { cid: 4, value: new Date(2017, 2, 28) }, { cid: 5, value: 27 }, { cid: 6, value: 8.69 } ]
            },
            { 
                id: 4,
                text: "Clay Rozendal",
                cells: [{ cid: 1, text: "119" }, { cid: 2, text: "Clay Rozendal" }, { cid: 3, value: 2 }, { cid: 4, value: new Date(2018, 7, 15) }, { cid: 5, value: 30 }, { cid: 6, value: 195.99 } ]
            },
            { 
                id: 5,
                text: "Carlos Soltero",
                cells: [{ cid: 1, text: "512" }, { cid: 2, text: "Carlos Soltero" }, { cid: 3, value: 0 }, { cid: 4, value: new Date(2019, 4, 20) }, { cid: 5, value: 19 }, { cid: 6, value: 21.78 } ]
            },
            { 
                id: 6,
                text: "Noble Hancock",
                cells: [{ cid: 1, text: "575" }, { cid: 2, text: "Noble Hancock" }, { cid: 3, value: 1 }, { cid: 4, value: new Date(2016, 11, 10) }, { cid: 5, value: 21 }, { cid: 6, value: 8.69 } ]
            },
            { 
                id: 7,
                text: "Carl Jackson",
                cells: [{ cid: 1, text: "237" }, { cid: 2, text: "Carl Jackson" }, { cid: 3, value: 0 }, { cid: 4, value: new Date(2018, 7, 8) }, { cid: 5, value: 12 }, { cid: 6, value: 6.64 } ]
            },
            { 
                id: 8,
                text: "Monica Federle",
                cells: [{ cid: 1, text: "254" }, { cid: 2, text: "Monica Federle" }, { cid: 3, value: 1 }, { cid: 4, value: new Date(2019, 8, 24) }, { cid: 5, value: 22 }, { cid: 6, value: 7.30 } ]
            },
            { 
                id: 9,
                text: "Dorothy Badders",
                cells: [{ cid: 1, text: "716" }, { cid: 2, text: "Dorothy Badders" }, { cid: 3, value: 2 }, { cid: 4, value: new Date(2016, 2, 14) }, { cid: 5, value: 21 }, { cid: 6, value: 42.76 } ]
            },
            { 
                id: 10,
                text: "Neola Schneider",
                cells: [{ cid: 1, text: "945" }, { cid: 2, text: "Neola Schneider" }, { cid: 3, value: 0 }, { cid: 4, value: new Date(2019, 1, 17) }, { cid: 5, value: 44 }, { cid: 6, value: 138.14 } ]
            },
            { 
                id: 11,
                text: "Blaze Lester",
                cells: [{ cid: 1, text: "831" }, { cid: 2, text: "Blaze Lester" }, { cid: 3, value: 1 }, { cid: 4, value: new Date(2016, 6, 22) }, { cid: 5, value: 37 }, { cid: 6, value: 4.98 } ]
            },
            { 
                id: 12,
                text: "Carlos Daly",
                cells: [{ cid: 1, text: "1024" }, { cid: 2, text: "Carlos Daly" }, { cid: 3, value: 0 }, { cid: 4, value: new Date(2018, 5, 29) }, { cid: 5, value: 32 }, { cid: 6, value: 4.28 } ]
            },
            { 
                id: 13,
                text: "Steven Donaldson",
                cells: [{ cid: 1, text: "712" }, { cid: 2, text: "Steven Donaldson" }, { cid: 3, value: 1 }, { cid: 4, value: new Date(2017, 7, 9) }, { cid: 5, value: 19 }, { cid: 6, value: 3.95 } ]
            },
            { 
                id: 14,
                text: "Claudia Miner",
                cells: [{ cid: 1, text: "449" }, { cid: 2, text: "Claudia Miner" }, { cid: 3, value: 0 }, { cid: 4, value: new Date(2019, 4, 4) }, { cid: 5, value: 24 }, { cid: 6, value: 21.78 } ]
            },
            { 
                id: 15,
                text: "Bert Gibbs",
                cells: [{ cid: 1, text: "312" }, { cid: 2, text: "Bert Gibbs" }, { cid: 3, value: 0 }, { cid: 4, value: new Date(2017, 10, 11) }, { cid: 5, value: 11 }, { cid: 6, value: 47.98 } ]
            },
            { 
                id: 16,
                text: "Allen Rosenblatt",
                cells: [{ cid: 1, text: "573" }, { cid: 2, text: "Allen Rosenblatt" }, { cid: 3, value: 2 }, { cid: 4, value: new Date(2018, 7, 23) }, { cid: 5, value: 15 }, { cid: 6, value: 5.28 } ]
            },
            { 
                id: 17,
                text: "Sylvia Foulston",
                cells: [{ cid: 1, text: "233" }, { cid: 2, text: "Sylvia Foulston" }, { cid: 3, value: 1 }, { cid: 4, value: new Date(2019, 2, 15) }, { cid: 5, value: 27 }, { cid: 6, value: 39.89 } ]
            },
            { 
                id: 18,
                text: "Henry Branch",
                cells: [{ cid: 1, text: "119" }, { cid: 2, text: "Henry Branch" }, { cid: 3, value: 0 }, { cid: 4, value: new Date(2016, 5, 7) }, { cid: 5, value: 5 }, { cid: 6, value: 15.74 } ]
            },
            { 
                id: 19,
                text: "Jim Radford",
                cells: [{ cid: 1, text: "158" }, { cid: 2, text: "Jim Radford" }, { cid: 3, value: 2 }, { cid: 4, value: new Date(2019, 11, 4) }, { cid: 5, value: 9 }, { cid: 6, value: 100.98 } ]
            },
            { 
                id: 20,
                text: "Carl Forbes",
                cells: [{ cid: 1, text: "356" }, { cid: 2, text: "Carl Forbes" }, { cid: 3, value: 0 }, { cid: 4, value: new Date(2016, 8, 27) }, { cid: 5, value: 12 }, { cid: 6, value: 71.37 } ]
            },
            { 
                id: 21,
                text: "Christian Woodward",
                cells: [{ cid: 1, text: "627" }, { cid: 2, text: "Christian Woodward" }, { cid: 3, value: 2 }, { cid: 4, value: new Date(2018, 3, 12) }, { cid: 5, value: 35 }, { cid: 6, value: 7.26 } ]
            }
        ];
    }

    //
    // Methods -----------------------------------------------------------------------------------
    //

    beforeValueChange(e: any){
        // In this case, the row ID for the Customer 'Barry French' is set to 2
        if (e.detail.row  && e.detail.row.id === 2){
            // If a Ship Mode is set to any other value than Express Air, cancel the event
            // The Ship Mode column has id set to 3, which is stored in the cell 'cid' field (cid means column id)
            if (e.detail.cell && e.detail.cell.cid === 3 && e.detail.value !== 2)
                e.detail.cancel = true;
        }
    }
}
