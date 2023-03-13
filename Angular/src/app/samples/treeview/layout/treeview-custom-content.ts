import { Component } from '@angular/core';
import { html } from 'integralui-web/external/lit-element';
import { classMap } from 'integralui-web/external/class-map';
import { styleMap } from 'integralui-web/external/style-map';

import 'integralui-web/components/integralui.treeview';
import { IntegralUITheme } from 'integralui-web/components/integralui.enums';
import { iuiEditorsDefaultStyle } from 'integralui-web/styles/default/integralui.editors.style';
import { iuiTreeViewCustomContentStyle } from './treeview-custom-content.style';

@Component({
    selector: '',
    templateUrl: './treeview-custom-content.html',
    styleUrls: ['./treeview-custom-content.css']
})
export class TreeViewCustomContent {

    // TreeView
    public ctrlSize: any = { width: 500, height: 400 }
    public currentResourcePath: string = 'assets/icons';
    public currentTheme: IntegralUITheme = IntegralUITheme.Office;
    public items: Array<any> = [];
    public treeStyle: any = [iuiEditorsDefaultStyle, iuiTreeViewCustomContentStyle];

    constructor(){
        this.items = [
            { 
                text: "Theme Park Construction",
                status: "In Progress",
                items: [
                    { 
                        text: "Site Preparations", 
                        status: "Open",
                        items: [
                            { 
                                text: "Location Map", 
                                status: "In Progress",
                                expanded: false,
                                items: [
                                    { text: "Relocate trees", status: "Resolved", value: 100 },
                                    { text: "Relocate Elves", status: "Reopened", value: 78 },
                                    { text: "Bulldoze the hills", status: "Resolved", value: 40 },
                                    { text: "Remove waste rock and soil", status: "In Progress", value: 90 },
                                    { text: "Build access road", status: "Open", value: 28 },
                                ]
                            },
                            { text: "Dig escape tunnels for staff", status: "Open", value: 71 },
                            { 
                                text: "Build a transparent dome over the theme park", 
                                status: "Reopened",
                                items: [
                                    { text: "Check seismic activity", status: "In Progress", value: 85 }
                                ]
                            },
                            { text: "Install entrance checkpoints", status: "Open", value: 50 }
                       ]
                    },
                    { 
                        text: "Marketing + PR activities", 
                        status: "In Progress",
                        items: [
                            { 
                                text: "New folders", 
                                status: "Open",
                                expanded: false,
                                items: [
                                    { text: "Advertising", status: "To Do", value: 25 },
                                    { text: "Backlog Breakdown Plugin requirements", status: "To Do", value: 10 },
                                    { text: "30-minute TV advertisement for prime-time broadcast/superbowl etc.", status: "To Do", value: 35 },
                                    { text: "Celebrity endorsements", status: "To Do", value: 90 }
                                ]
                            },
                            { text: "Anti-PR campaign to discredit safety of competing theme parks", status: "In Progress", value: 76 }
                       ]
                    },
                    { 
                        text: "Rides + attractions", 
                        status: "Open",
                        items: [
                            { text: "Redefine the Standard Model of particle physics", status: "Open", value: 25 },
                            { text: "Arrange black hole insurance", status: "Complete", value: 100 },
                            { text: "Automatic hyper-drive engine warm up when enemy ships are close", status: "Open", value: 5 },
                            { text: "Use reverse hyper-driving to accumulate energy on braking", status: "Open", value: 15 },
                            { text: "Fuel Efficiency", status: "Open", value: 30 }
                       ]
                    }
                ]
            }
        ];

        // Update the color of progress value for each item
        this.items.forEach(item => this.updateProgressValue(item));
    }

    currentItemTemplate = (item: any) => { 
        return html`
            <div>
                <div class="item-progress">
                    <div class="item-progress-text">${item.text}</div>
                    <div class="iui-editor-progress-block">
                        <div class=${classMap({ "iui-editor-progress": true })}>
                            <div class="iui-editor-progress-content" style=${styleMap(this.getEditorProgressStyle(item))}></div>
                        </div>
                        <div class="iui-editor-progress-label">${item.value}%</div>
                    </div>
                </div>
                <div class="item-status">${item.status}</div>
            </div>
        `;
    }
        
    getEditorProgressStyle(item: any){
        let style: any = {};

        style.width = item.value + '%';

        // Red
        if (item.value < 25) 
            style.background = '#ed3b3b';
        // Orange
        else if (item.value < 50)
            style.background = '#ff9c38';
        // Yellow
        else if (item.value < 75)
            style.background = '#ffe819';
        // Green
        else if (item.value < 95)
            style.background = '#48c548';
        // Blue
        else
            style.background ='#489dc5';

        return style;
    }

    getParentProgressFromChildren(parent: any){
        if (parent.items && parent.items.length > 0){
            let result = 0;
            parent.items.forEach((childItem: any) => {
                result += this.getParentProgressFromChildren(childItem); 
            })

            parent.value = result / parent.items.length;
        }

        return parent.value || 0;
    }

    updateProgressValue(item: any){
        item.value = this.getParentProgressFromChildren(item);
    }
}
