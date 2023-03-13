import { Component, ElementRef, ViewChild } from '@angular/core';

import 'integralui-web/components/integralui.treegrid';
import { IntegralUIEditorType, IntegralUITheme } from 'integralui-web/components/integralui.enums';
import { iuiTreeGridEditorsProgressBarStyle } from './treegrid-editors-progressbar.style';

@Component({
    selector: '',
    templateUrl: './treegrid-editors-progressbar.html',
    styleUrls: ['./treegrid-editors-progressbar.css']
})
export class TreeGridEditorsProgressBar {
    @ViewChild('treegrid', { static: false }) treegrid!: ElementRef;

    public columns: Array<any> = [];
    public ctrlSize: any = { height: 450 };
    public currentResourcePath: string = 'assets/icons';
    public currentTheme: IntegralUITheme = IntegralUITheme.Office;
    public gridStyle: any = iuiTreeGridEditorsProgressBarStyle;
    public rows: Array<any> = [];

    constructor(){
        this.columns = [
            { id: 2, headerText: "Summary", width: 500 },
            { 
                id: 3, 
                contentAlignment: "center", 
                headerText: "Progress", 
                headerAlignment: "center", 
                editorType: IntegralUIEditorType.Progress,
                editorSettings: {
                    showLabel: true
                },
                width: 150
            },
            { id: 4, headerText: "Status", headerAlignment: "center", contentAlignment: "center", width: 120  },
            { id: 5, headerText: "Assignee", width: 150 }
        ];

        this.rows = [
            { 
                id: 1, 
                cells: [{ cid: 2, text: "Theme Park Construction" }, { cid: 3 }, { cid: 4, text: "In Progress" } ],
                rows: [
                    { 
                        id: 11,
                        cells: [{ cid: 2, text: "Site Preparations" }, { cid: 3 }, { cid: 4, text: "Open" }, { cid: 5, text: "Steven Beck" } ],
                        rows: [
                            { 
                                id: 111,
                                expanded: false,
                                cells: [{ cid: 2, text: "Location Map" }, { cid: 3 }, { cid: 4, text: "In Progress" } ],
                                rows: [
                                    { 
                                        id: 1111,
                                        cells: [{ cid: 2, text: "Relocate trees" }, { cid: 3, value: 100 }, { cid: 4, text: "Resolved" }, { cid: 5, text: "Unassigned" } ]
                                    },
                                    { 
                                        id: 1112,
                                        cells: [{ cid: 2, text: "Relocate Elves" }, { cid: 3, value: 78 }, { cid: 4, text: "Reopened" }, { cid: 5, text: "Bruno Klein" } ]
                                    },
                                    { 
                                        id: 1113,
                                        cells: [{ cid: 2, text: "Bulldoze the hills" }, { cid: 3, value: 40 }, { cid: 4, text: "Open" }, { cid: 5, text: "Kamal Fuller" } ]
                                    },
                                    { 
                                        id: 1114,
                                        cells: [{ cid: 2, text: "Remove waste rock and soil" }, { cid: 3, value: 90 }, { cid: 4, text: "In Progress" }, { cid: 5, text: "Ryan Foley" } ]
                                    },
                                    { 
                                        id: 1115,
                                        cells: [{ cid: 2, text: "Build access road" }, { cid: 3, value: 28 }, { cid: 4, text: "Open" }, { cid: 5, text: "Ryan Foley" } ]
                                    }
                                ]
                            },
                            { 
                                id: 112,
                                cells: [{ cid: 2, text: "Dig escape tunnels for staff" }, { cid: 3, value: 71 }, { cid: 4, text: "Open" }, { cid: 5, text: "Kamal Fuller" } ]
                            },
                            { 
                                id: 113,
                                cells: [{ cid: 2, text: "Build a transparent dome over the theme park" }, { cid: 3 }, { cid: 4, text: "Reopened" }, { cid: 5, text: "Kamal Fuller" } ],
                                rows: [
                                    { 
                                        id: 1131,
                                        cells: [{ cid: 2, text: "Check seismic activity" }, { cid: 3, value: 85 }, { cid: 4, text: "In Progress" }, { cid: 5, text: "David Holden" } ]
                                    }
                                ]
                            },
                            { 
                                id: 114,
                                cells: [{ cid: 2, text: "Install entrance checkpoints" }, { cid: 3, value: 50 }, { cid: 4, text: "Open" }, { cid: 5, text: "Ryan Foley" } ]
                            }
                        ]
                    },
                    { 
                        id: 12,
                        cells: [{ cid: 2, text: "Marketing + PR activities" }, { cid: 3 }, { cid: 4, text: "In Progress" }, { cid: 5, text: "Aurelia Rivers" } ],
                        rows: [
                            { 
                                id: 121,
                                expanded: false,
                                cells: [{ cid: 2, text: "New folders" }, { cid: 3 }, { cid: 4, text: "Open" } ],
                                rows: [
                                    { 
                                        id: 1211,
                                        cells: [{ cid: 2, text: "Advertising" }, { cid: 3, value: 0 }, { cid: 4, text: "To Do" }, { cid: 5, text: "Unassigned" } ]
                                    },
                                    { 
                                        id: 1212,
                                        cells: [{ cid: 2, text: "Backlog Breakdown Plugin requirements" }, { cid: 3, value: 0 }, { cid: 4, text: "To Do" }, { cid: 5, text: "Unassigned" } ]
                                    },
                                    { 
                                        id: 1213,
                                        cells: [{ cid: 2, text: "30-minute TV advertisement for prime-time broadcast/superbowl etc." }, { cid: 3, value: 0 }, { cid: 4, text: "To Do" }, { cid: 5, text: "Bert Gibbs" } ]
                                    },
                                    { 
                                        id: 1214,
                                        cells: [{ cid: 2, text: "Celebrity endorsements" }, { cid: 3, value: 90 }, { cid: 4, text: "To Do" }, { cid: 5, text: "Isabella Parsons" } ]
                                    }
                                ]
                            },
                            { 
                                id: 122,
                                cells: [{ cid: 2, text: "Anti-PR campaign to discredit safety of competing theme parks" }, { cid: 3, value: 76 }, { cid: 4, text: "In Progress" }, { cid: 5, text: "Bert Gibbs" } ]
                            }
                        ]
                    },
                    { 
                        id: 13,
                        cells: [{ cid: 2, text: "Rides + attractions" }, { cid: 3 }, { cid: 4, text: "Open" }, { cid: 5, text: "Theodore Reese" } ],
                        rows: [
                            { 
                                id: 131,
                                cells: [{ cid: 2, text: "Redefine the Standard Model of particle physics" }, { cid: 3, value: 25 }, { cid: 4, text: "Open" }, { cid: 5, text: "Benjamin Oliver" } ]
                            },
                            { 
                                id: 132,
                                cells: [{ cid: 2, text: "Arrange black hole insurance" }, { cid: 3, value: 100 }, { cid: 4, text: "Complete" }, { cid: 5, text: "Benjamin Oliver" } ]
                            },
                            { 
                                id: 133,
                                cells: [{ cid: 2, text: "Automatic hyper-drive engine warm up when enemy ships are close" }, { cid: 3, value: 5 }, { cid: 4, text: "Open" }, { cid: 5, text: "George Thornton" } ]
                            },
                            { 
                                id: 134,
                                cells: [{ cid: 2, text: "Use reverse hyper-driving to accumulate energy on braking" }, { cid: 3, value: 15 }, { cid: 4, text: "Open" }, { cid: 5, text: "Larissa Olsen" } ]
                            },
                            { 
                                id: 135,
                                cells: [{ cid: 2, text: "Fuel Efficiency" }, { cid: 3, value: 30 }, { cid: 4, text: "Open" }, { cid: 5, text: "Blaze Lester" } ]
                            }
                        ]
                    }
                ]
            }
        ];
    }

    ngAfterViewInit(){
        this.rows.forEach(row => this.updateProgressValue(row));
    }

    //
    // Methods -----------------------------------------------------------------------------------
    //

    // General -------------------------------------------------------------------------------

    getParentProgressFromChildren(parent: any){
        let progressCell = this.treegrid.nativeElement.getCellByColumnId(parent.cells, 3); 

        if (parent.rows && parent.rows.length > 0){
            progressCell.editorSettings = {}

            let result = 0;
            parent.rows.forEach((row: any) => {
                result += this.getParentProgressFromChildren(row); 
            })

            progressCell.value = result / parent.rows.length;
        }

        this.updateProgressValueStyle(progressCell);

        return progressCell.value || 0;
    }

    updateProgressValue(row: any){
        let progressCell = this.treegrid.nativeElement.getCellByColumnId(row.cells, 3); 

        if (progressCell){
            progressCell.value = this.getParentProgressFromChildren(row);
            this.updateProgressValueStyle(progressCell);
        }
    }

    updateProgressValueStyle(cell: any){
        if (cell){
            cell.editorSettings = {}

            // Red
            if (cell.value < 25) 
                cell.editorSettings.style = { background: '#ed3b3b' }
            // Orange
            else if (cell.value < 50)
                cell.editorSettings.style = { background: '#ff9c38' }
            // Yellow
            else if (cell.value < 75)
                cell.editorSettings.style = { background: '#ffe819' }
            // Green
            else if (cell.value < 95)
                cell.editorSettings.style = { background: '#48c548' }
            // Blue
            else
                cell.editorSettings.style = { background: '#489dc5' }
        }
    }
}