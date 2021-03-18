import { Component, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

import 'integralui-web/components/integralui.treelist.js';
import { IntegralUITheme } from 'integralui-web/components/integralui.enums.js';

@Component({
    selector: 'start-app',
    template: `
        <style>
        </style>
        <div class="navigator-tree">
            <iui-treelist #treelist id="nav-tree"
                [title]="treeTitle" 
                [items]="treeItems" 
                [allowAnimation]="true"
                [resourcePath]="currentResourcePath" 
                [selectedItem]="currentSelection"
                [size]="ctrlSize" 
                [theme]="currentTheme"
                (afterSelect)="treeAfterSelect($event)"
            >
            </iui-treelist>
        </div>
        <div class="feature">
            <router-outlet></router-outlet>
        </div>
    `
})
export class StartComponent {
    @ViewChild('treelist', { static: false }) treelist: ElementRef;

    // Layout
    private headerHeight: number = 95;

    // Navigator
    public ctrlSize: any = { width: 300, height: 400 };
    public currentResourcePath: string = 'assets/integralui-web/icons';
    public currentSelection: any = null;
    public currentTheme: IntegralUITheme = IntegralUITheme.Office;
    public treeTitle: string = "Components";
    public treeItems: Array<any> = [];

    constructor(private router: Router){
        this.treeItems = [
            { text: 'Accordion', link: '/accordion-overview' },
            { text: 'AutoComplete', link: '/autocomplete-overview' },
            { text: 'BreadCrumb', link: '/breadcrumb-overview' },
            { text: 'Button', link: '/button-overview' },
            { text: 'ButtonGroup', link: '/buttongroup-overview' },
            { text: 'Calendar', link: '/calendar-overview' },
            { text: 'CheckBox', link: '/checkbox-overview' },
            { text: 'DatePicker', link: '/datepicker-overview' },
            { text: 'Dialog', link: '/dialog-overview' },
            { 
                id: 'grd',
                text: 'Grid', 
                items: [
                    { id: 'grd-ovw', pid: 'grd', text: 'Overview', link: '/grid/overview' },
                    { id: 'grd-ardyn', pid: 'grd', text: 'Add Rows Dynamically', link: '/grid/add-row-dynamically' },
                    { id: 'grd-bedt', pid: 'grd', text: 'Built-in Editors', link: '/grid/builtin-editors' },
                    { id: 'grd-ctpl', pid: 'grd', text: 'Cell Templates', link: '/grid/cell-templates' },
                    { id: 'grd-cmnu', pid: 'grd', text: 'Context Menu', link: '/grid/contextmenu' },
                    { id: 'grd-dyngrp', pid: 'grd', text: 'Dynamic Grouping', link: '/grid/dynamic-grouping' },
                    { id: 'grd-expt', pid: 'grd', text: 'Export', link: '/grid/export' },
                    { id: 'grd-fltr', pid: 'grd', text: 'Filtering', link: '/grid/filtering' },
                    { id: 'grd-fxcl', pid: 'grd', text: 'Fixed Columns', link: '/grid/fixed-columns' },
                    { id: 'grd-pgn', pid: 'grd', text: 'Pagination', link: '/grid/pagination' },
                    { id: 'grd-sort', pid: 'grd', text: 'Sorting', link: '/grid/sorting' },
                    { id: 'grd-ttps', pid: 'grd', text: 'Tooltips', link: '/grid/tooltips' },
                    { id: 'grd-virt', pid: 'grd', text: 'Virtualization', link: '/grid/virtualization' }
                ]
            },
            { text: 'GroupBox', link: '/groupbox-overview' },
            { text: 'ListBar', link: '/listbar-overview' },
            { text: 'ListBox', link: '/listbox-overview' },
            { text: 'ListGroup', link: '/listgroup-overview' },
            { text: 'ListScroller', link: '/listscroller-overview' },
            { text: 'ListView', link: '/listview-overview' },
            { text: 'Menu', link: '/menu-overview' },
            { text: 'Numeric', link: '/numeric-overview' },
            { text: 'Paginator', link: '/paginator-overview' },
            { text: 'PopOver', link: '/popover-overview' },
            { text: 'ProgressBar', link: '/progressbar-overview' },
            { text: 'RadioButton', link: '/radiobutton-overview' },
            { text: 'Rating', link: '/rating-overview' },
            { text: 'Select', link: '/select-overview' },
            { text: 'SideBar', link: '/sidebar-overview' },
            { text: 'SlideBar', link: '/slidebar-overview' },
            { text: 'Slider', link: '/slider-overview' },
            { text: 'SplitContainer', link: '/splitcontainer-overview' },
            { text: 'Splitter', link: '/splitter-overview' },
            { 
                id: 'tbs',
                text: 'TabStrip', 
                items: [
                    { id: 'tbs-ovw', pid: 'tbs', text: 'Overview', link: '/tabstrip/tabstrip-overview' },
                    { id: 'tbs-ntb', pid: 'tbs', text: 'Add New Tab on Demand', link: '/tabstrip/utility/tabstrip-new-tab' },
                    { id: 'tbs-cbtn', pid: 'tbs', text: 'Tabs with Close Button', link: '/tabstrip/utility/tabstrip-close-button' },
                    { id: 'tbs-tool', pid: 'tbs', text: 'Tabs with Toolbar', link: '/tabstrip/layout/tabstrip-toolbar' }
                ]
            },
            { text: 'Tooltip', link: '/tooltip-overview' },
            { 
                id: 'trgd',
                text: 'TreeGrid', 
                items: [
                    { id: 'trgd-ovw', pid: 'trgd', text: 'Overview', link: '/treegrid/overview' },
                    { id: 'trgd-ardyn', pid: 'trgd', text: 'Add Rows Dynamically', link: '/treegrid/add-row-dynamically' },
                    { id: 'trgd-bedt', pid: 'trgd', text: 'Built-in Editors', link: '/treegrid/builtin-editors' },
                    { id: 'trgd-ctpl', pid: 'trgd', text: 'Cell Templates', link: '/treegrid/cell-templates' },
                    { id: 'trgd-cmnu', pid: 'trgd', text: 'Context Menu', link: '/treegrid/contextmenu' },
                    { id: 'trgd-expt', pid: 'trgd', text: 'Export', link: '/treegrid/export' },
                    { id: 'trgd-fltr', pid: 'trgd', text: 'Filtering', link: '/treegrid/filtering' },
                    { id: 'trgd-fxcl', pid: 'trgd', text: 'Fixed Columns', link: '/treegrid/fixed-columns' },
                    { id: 'trgd-pgn', pid: 'trgd', text: 'Pagination', link: '/treegrid/pagination' },
                    { id: 'trgd-sort', pid: 'trgd', text: 'Sorting', link: '/treegrid/sorting' },
                    { id: 'trgd-ttps', pid: 'trgd', text: 'Tooltips', link: '/treegrid/tooltips' },
                    { id: 'trgd-virt', pid: 'trgd', text: 'Virtualization', link: '/treegrid/virtualization' }
                ]
            },
            { text: 'TreeList', link: '/treelist-overview' },
            { 
                id: 'trw',
                text: 'TreeView', 
                items: [
                    { id: 'trw-dd2tw', pid: 'trw', text: 'Drag Drop between TreeViews', link: '/treeview/drag-drop/treeview-drag-drop-two-trees' },
                    { id: 'trw-cbox', pid: 'trw', text: 'Items with CheckBoxes', link: '/treeview/utility/treeview-checkboxes' },
                    { id: 'trw-ljson', pid: 'trw', text: 'Load from JSON', link: '/treeview/data/treeview-load-json' },
                    { id: 'trw-ldmd', pid: 'trw', text: 'Load on Demand', link: '/treeview/data/treeview-load-on-demand' },
                    { id: 'trw-ovw', pid: 'trw', text: 'Overview', link: '/treeview/treeview-overview' }
                ]
            }
        ];

        this.currentSelection = this.treeItems[0];
    } 

    ngAfterViewInit(){
        this.ctrlSize = { width: 300, height: window.innerHeight - this.headerHeight };
    }

    treeAfterSelect(e: any){
        if (e.detail.item && e.detail.item.link)
            this.router.navigateByUrl(e.detail.item.link);
    }
}
