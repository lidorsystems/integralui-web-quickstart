import React, { Component } from 'react';

import 'integralui-web/components/integralui.slider.js';
import IntegralUITreeGridComponent from 'integralui-web/wrappers/react.integralui.treegrid.js';
import { IntegralUIEditMode, IntegralUIEditorType, IntegralUITheme  } from 'integralui-web/components/integralui.enums.js';
import { iuiTreeGridEditorsSliderStyle } from './treegrid-editors-slider.style.js';

import './treegrid-editors-slider.css';

class TreeGridHighlightRows extends Component {

    //
    // Initialization / Destruction --------------------------------------------------------------
    //

    constructor(props){
        super(props);
    
        this.state = {
            columns: [
                { id: 2, headerText: "Summary", width: 500 },
                { 
                    id: 3, 
                    contentAlignment: "center", 
                    headerText: "Progress", 
                    headerAlignment: "center", 
                    editorType: IntegralUIEditorType.Slider,
                    editorSettings: {
                        editOnFocus: true,
                        showLabel: true
                    },
                    width: 150
                },
                { id: 4, headerText: "Status", headerAlignment: "center", contentAlignment: "center", width: 120  },
                { id: 5, headerText: "Assignee", width: 150 }
            ],
            ctrlSize: { height: 400 },
            currentEditMode: IntegralUIEditMode.Custom,
            currentResourcePath: '../../../integralui-web/icons',
            currentTheme: IntegralUITheme.Office,
            isAnimationAllowed: true,
            rows: [
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
            ]
        }
    
        this.gridRef = React.createRef();
    }

    componentDidMount(){
        this.state.rows.forEach(row => this.updateProgressValue(row));
    }

    //
    // Methods -----------------------------------------------------------------------------------
    //

    // Events ------------------------------------------------------------------------------------

    sliderValueChanged(e){
        let parent = this.gridRef.current.getRowParent(e.detail.row);

        while (parent){
            // Update progress value for all parent cells
            this.updateProgressValue(parent);

            parent = this.gridRef.current.getRowParent(parent);
        }

        this.gridRef.current.updateView();
    }

    // General -------------------------------------------------------------------------------

    getEditorSettings(cell){
        return cell.editorSettings || {};
    }

    getParentProgressFromChildren(parent){
        let progressCell = this.gridRef.current.getCellByColumnId(parent.cells, 3);

        if (parent.rows && parent.rows.length > 0){
            // Prevent changes to the parent progress
            // The value is average of children progression value
            progressCell.editorSettings = { showProgress: true }

            let result = 0;
            parent.rows.forEach(row => {
                result += this.getParentProgressFromChildren(row); 
            })

            progressCell.value = result / parent.rows.length;
            this.updateProgressValueStyle(progressCell);
        }

        return progressCell.value || 0;
    }

    updateProgressValue(row){
        let progressCell = this.gridRef.current.getCellByColumnId(row.cells, 3); 
        if (progressCell){
            progressCell.value = this.getParentProgressFromChildren(row);
            this.updateProgressValueStyle(progressCell);
        }
    }

    updateProgressValueStyle(cell){
        if (cell){
            let editorSettings = this.getEditorSettings(cell);

            // Red
            if (cell.value < 25) 
                editorSettings.style = { background: '#ed3b3b' }
            // Orange
            else if (cell.value < 50)
                editorSettings.style = { background: '#ff9c38' }
            // Yellow
            else if (cell.value < 75)
                editorSettings.style = { background: '#ffe819' }
            // Green
            else if (cell.value < 95)
                editorSettings.style = { background: '#48c548' }
            // Blue
            else
                editorSettings.style = { background: '#489dc5' }
        }
    }

    // Update ------------------------------------------------------------------------------------

    render() {
        return (
            <div>
                <h2>TreeGrid / Cells with Slider</h2>
                <div className="sample-block" id="treegrid-editors-slider">
                    <IntegralUITreeGridComponent ref={this.gridRef}
                        allowAnimation={this.state.isAnimationAllowed} 
                        allowFocus={false}
                        columns={this.state.columns} 
                        customStyle={iuiTreeGridEditorsSliderStyle}
                        editMode={this.state.currentEditMode}
                        resourcePath={this.state.currentResourcePath}
                        rowHeight={32}
                        rows={this.state.rows} 
                        showFooter={false}
                        size={this.state.ctrlSize}
                        theme={this.state.currentTheme}
                        valueChanged={(e) => this.sliderValueChanged(e)}
                    ></IntegralUITreeGridComponent>
                    <div className="feature-help">
                        <p><span className="initial-space"></span>In this demo, the Progress column displays a slider visualizing the completion of specific operation. You can change the progression using the Slider from 0 to 100%. This also changes the progression value of parent rows. Depending on current state, the progression is displayed in different colors: red, orange, yellow, green and blue. For parent rows, the progress value is aggregated from its children, using custom function.</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default TreeGridHighlightRows;
