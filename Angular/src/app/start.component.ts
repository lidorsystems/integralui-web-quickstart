import { Component, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

import 'integralui-web/components/integralui.treelist';
import { IntegralUIComponentAppearance, IntegralUITheme } from 'integralui-web/components/integralui.enums';

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
                [scrollAppearance]="currentScrollAppearance"
                [selectedItem]="currentSelection"
                [size]="ctrlSize" 
                [theme]="currentTheme"
                (afterSelect)="treeAfterSelect($event)"
            ></iui-treelist>
        </div>
        <div class="feature">
            <router-outlet></router-outlet>
        </div>
    `
})
export class StartComponent {
    @ViewChild('treelist', { static: false }) treelist!: ElementRef;

    // Layout
    private headerHeight: number = 95;

    // Navigator
    public ctrlSize: any = { width: 300, height: 400 };
    public currentResourcePath: string = 'assets/icons';
    public currentScrollAppearance: IntegralUIComponentAppearance = IntegralUIComponentAppearance.Dynamic;
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
            { text: 'Card', link: '/card-overview' },
            { text: 'CheckBox', link: '/checkbox-overview' },
            { text: 'ContextMenu', link: '/contextmenu-overview' },
            { text: 'DatePicker', link: '/datepicker-overview' },
            { text: 'Dialog', link: '/dialog-overview' },
            { text: 'DockPanel', link: '/dockpanel-overview' },
            { text: 'DropDownButton', link: '/dropdownbutton-overview' },
            { 
                id: 'grd',
                text: 'Grid', 
                items: [
                    { id: 'grd-ovw', pid: 'grd', text: 'Overview', link: '/grid/overview' },
                    { 
                        id: 'grd-data', 
                        pid: 'grd', 
                        text: 'Data', 
                        type: 'group',
                        items: [
                            { id: 'grd-ardyn', pid: 'grd-data', text: 'Add Rows Dynamically', link: '/grid/data/add-row-dynamically' },
                            { id: 'grd-dyngrp', pid: 'grd-data', text: 'Dynamic Grouping', link: '/grid/data/dynamic-grouping' },
                            { id: 'grd-dynupd', pid: 'grd-data', text: 'Dynamic Update', link: '/grid/data/dynamic-update' },
                            { id: 'grd-expt', pid: 'grd-data', text: 'Export', link: '/grid/data/export' }
                        ]
                    },
                    { 
                        id: 'grd-editing', 
                        pid: 'grd', 
                        text: 'Editing', 
                        type: 'group',
                        items: [
                            { id: 'grd-bhedt', pid: 'grd-editing', text: 'Batch Editing', link: '/grid/editing/batch-editing' },
                            { id: 'grd-frmedt', pid: 'grd-editing', text: 'Form Editing', link: '/grid/editing/form-editing' },
                            { id: 'grd-inedt', pid: 'grd-editing', text: 'Inline Editing', link: '/grid/editing/inline-editing' },
                            { 
                                id: 'grd-editors', 
                                pid: 'grd-editing', 
                                text: 'Editors', 
                                type: 'group',
                                items: [
                                    { id: 'grd-edtbtn', pid: 'grd-editors', text: 'Cells with Button', link: '/grid/editing/editors/editors-button' },
                                    { id: 'grd-edtcb', pid: 'grd-editors', text: 'Cells with CheckBox', link: '/grid/editing/editors/editors-checkbox' },
                                    { id: 'grd-edtdp', pid: 'grd-editors', text: 'Cells with DatePicker', link: '/grid/editing/editors/editors-datepicker' },
                                    { id: 'grd-edtddl', pid: 'grd-editors', text: 'Cells with DropDown List', link: '/grid/editing/editors/editors-dropdownlist' },
                                    { id: 'grd-edtimg', pid: 'grd-editors', text: 'Cells with Image List', link: '/grid/editing/editors/editors-image' },
                                    { id: 'grd-edtrb', pid: 'grd-editors', text: 'Cells with RadioButton', link: '/grid/editing/editors/editors-radiobutton' },
                                    { id: 'grd-edtrtg', pid: 'grd-editors', text: 'Cells with Rating', link: '/grid/editing/editors/editors-rating' },
                                    { id: 'grd-edttxt', pid: 'grd-editors', text: 'Cells with Text Editor', link: '/grid/editing/editors/editors-text' }
                                ]   
                            }
                        ]   
                    },
                    { 
                        id: 'grd-filtering', 
                        pid: 'grd', 
                        text: 'Filtering', 
                        type: 'group',
                        items: [
                            { id: 'grd-fltr', pid: 'grd-filtering', text: 'Overview', link: '/grid/filtering/filtering-overview' },
                            { id: 'grd-inflt', pid: 'grd-filtering', text: 'Inline Filter', link: '/grid/filtering/inline-filter' }
                        ]
                    },
                    { 
                        id: 'grd-layout', 
                        pid: 'grd', 
                        text: 'Layout', 
                        type: 'group',
                        items: [
                            { id: 'grd-ascol', pid: 'grd-layout', text: 'AutoSize Columns', link: '/grid/layout/autosize-columns' },
                            { id: 'grd-ctpl', pid: 'grd-layout', text: 'Cell Templates', link: '/grid/layout/cell-templates' },
                            { id: 'grd-colaln', pid: 'grd-layout', text: 'Column Alignment', link: '/grid/layout/column-alignment' },
                            { id: 'grd-colfmmw', pid: 'grd-layout', text: 'Columns Fixed, Min and Max Width', link: '/grid/layout/column-fixed-min-max-width' },
                            { id: 'grd-rctlb', pid: 'grd-layout', text: 'Custom Toolbar on Mouse Over', link: '/grid/layout/row-custom-toolbar' },
                            { id: 'grd-windynrz', pid: 'grd-layout', text: 'Dynamic Resize with a Window', link: '/grid/layout/window-dynamic-resize' },
                            { id: 'grd-fxcl', pid: 'grd-layout', text: 'Fixed Columns', link: '/grid/layout/fixed-columns' },
                            { id: 'grd-grdlb', pid: 'trgd-layout', text: 'Grid as ListBox', link: '/grid/layout/grid-as-listbox' },
                            { id: 'grd-mlhdr', pid: 'grd-layout', text: 'Multi-line Headers', link: '/grid/layout/multi-line-headers' },
                            { id: 'grd-shcol', pid: 'grd-layout', text: 'Show/Hide Columns', link: '/grid/layout/show-hide-columns' },
                            { id: 'grd-shhf', pid: 'grd-layout', text: 'Show/Hide Header and Footer', link: '/grid/layout/show-hide-header-footer' }
                        ]
                    },
                    { 
                        id: 'grd-pagination', 
                        pid: 'grd', 
                        text: 'Pagination', 
                        type: 'group',
                        items: [
                            { id: 'grd-pgn-overview', pid: 'grd-pagination', text: 'Fast Load', link: '/grid/pagination/pagination-overview' }
                        ]
                    },
                    { 
                        id: 'grd-sorting', 
                        pid: 'grd', 
                        text: 'Sorting', 
                        type: 'group',
                        items: [
                            { id: 'grd-sort', pid: 'grd-sorting', text: 'Overview', link: '/grid/sorting/sorting-overview' }
                        ]
                    },
                    { 
                        id: 'grd-styling', 
                        pid: 'grd', 
                        text: 'Styling', 
                        type: 'group',
                        items: [
                            { id: 'grd-celldc', pid: 'grd-styling', text: 'Cells in Different Colors', link: '/grid/styling/cells-different-colors' },
                            { id: 'grd-coldc', pid: 'grd-styling', text: 'Columns in Different Colors', link: '/grid/styling/columns-different-colors' },
                            { id: 'grd-rowdc', pid: 'grd-styling', text: 'Rows in Different Colors', link: '/grid/styling/rows-different-colors' }
                        ]
                    },
                    { 
                        id: 'grd-utility', 
                        pid: 'grd', 
                        text: 'Utility', 
                        type: 'group',
                        items: [
                            { id: 'grd-cmnu', pid: 'grd-utility', text: 'Context Menu', link: '/grid/utility/contextmenu' },
                            { id: 'grd-ttps', pid: 'grd-utility', text: 'Tooltips', link: '/grid/utility/tooltips' }
                        ]
                    },
                    { 
                        id: 'grd-virtualization', 
                        pid: 'grd', 
                        text: 'Virtualization', 
                        type: 'group',
                        items: [
                            { id: 'grd-virt', pid: 'grd-virtualization', text: 'Fast Load', link: '/grid/virtualization/fast-load' }
                        ]
                    }
                ]
            },
            { text: 'GroupBox', link: '/groupbox-overview' },
            { text: 'Label', link: '/label-overview' },
            { text: 'ListBar', link: '/listbar-overview' },
            { 
                id: 'ltbx',
                text: 'ListBox', 
                items: [
                    { id: 'ltbx-ovw', pid: 'ltbx', text: 'Overview', link: '/listbox/listbox-overview' },
                    { 
                        id: 'ltbx-data', 
                        pid: 'ltbx', 
                        text: 'Data', 
                        type: 'group',
                        items: [
                            { id: 'ltbx-adrm', pid: 'ltbx-data', text: 'Add/Remove Items from Code', link: '/listbox/data/listbox-add-remove' },
                            { id: 'ltbx-expjsn', pid: 'ltbx-data', text: 'Export to JSON', link: '/listbox/data/listbox-export-json' },
                            { id: 'ltbx-grp', pid: 'ltbx-data', text: 'Grouping', link: '/listbox/data/listbox-grouping' },
                            { id: 'ltbx-ljsn', pid: 'ltbx-data', text: 'Load from JSON', link: '/listbox/data/listbox-load-json' }
                        ]   
                    },
                    { 
                        id: 'ltbx-dd', 
                        pid: 'ltbx', 
                        text: 'Drag and Drop', 
                        type: 'group',
                        items: [
                            { id: 'ltbx-ddovw', pid: 'ltbx-dd', text: 'Drag Drop Overview', link: '/listbox/dragdrop/listbox-dragdrop-overview' },
                            { id: 'ltbx-ddevn', pid: 'ltbx-dd', text: 'Drag Drop Events', link: '/listbox/dragdrop/listbox-dragdrop-events' },
                            { id: 'ltbx-ddlv', pid: 'ltbx-dd', text: 'Drag Drop to ListView', link: '/listbox/dragdrop/listbox-dragdrop-listview' }
                        ]   
                    },
                    { 
                        id: 'ltbx-flt', 
                        pid: 'ltbx', 
                        text: 'Filtering', 
                        type: 'group',
                        items: [
                            { id: 'ltbx-fltovw', pid: 'ltbx-flt', text: 'Overview', link: '/listbox/filtering/listbox-filtering-overview' }
                        ]   
                    },
                    { 
                        id: 'ltbx-lyt', 
                        pid: 'ltbx', 
                        text: 'Layout', 
                        type: 'group',
                        items: [
                            { id: 'ltbx-icn', pid: 'ltbx-lyt', text: 'Items with Custom Content', link: '/listbox/layout/listbox-custom-content' }
                        ]   
                    },
                    { 
                        id: 'ltbx-scr', 
                        pid: 'ltbx', 
                        text: 'Scrolling', 
                        type: 'group',
                        items: [
                            { id: 'ltbx-scrto', pid: 'ltbx-scr', text: 'Scroll To Specific Item', link: '/listbox/scrolling/listbox-scroll-to' }
                        ]   
                    },
                    { 
                        id: 'ltbx-selt', 
                        pid: 'ltbx', 
                        text: 'Selection', 
                        type: 'group',
                        items: [
                            { id: 'ltbx-selmt', pid: 'ltbx-selt', text: 'Select Multiple Items', link: '/listbox/selection/listbox-multi-select' }
                        ]   
                    },
                    { 
                        id: 'ltbx-sort', 
                        pid: 'ltbx', 
                        text: 'Sorting', 
                        type: 'group',
                        items: [
                            { id: 'ltbx-sortovw', pid: 'ltbx-sort', text: 'Overview', link: '/listbox/sorting/listbox-sorting-overview' }
                        ]   
                    },
                    { 
                        id: 'ltbx-styg', 
                        pid: 'ltbx', 
                        text: 'Styling', 
                        type: 'group',
                        items: [
                            { id: 'ltbx-tdc', pid: 'ltbx-styg', text: 'Even/Odd Items', link: '/listbox/styling/listbox-evenodd-items' },
                            { id: 'ltbx-hgh', pid: 'ltbx-styg', text: 'Highlight Items', link: '/listbox/styling/listbox-highlight' }
                        ]   
                    },
                    { 
                        id: 'ltbx-utl', 
                        pid: 'ltbx', 
                        text: 'Utility', 
                        type: 'group',
                        items: [
                            { id: 'ltbx-cbox', pid: 'ltbx-utl', text: 'Items with Check Boxes', link: '/listbox/utility/listbox-checkboxes' },
                            { id: 'ltbx-cmnu', pid: 'ltbx-utl', text: 'Items with Context Menu', link: '/listbox/utility/listbox-contextmenu' },
                            { id: 'ltbx-ttp', pid: 'ltbx-utl', text: 'Items with Tooltip', link: '/listbox/utility/listbox-tooltip' },
                    ]   
                    },
                    { 
                        id: 'ltbx-virt', 
                        pid: 'ltbx', 
                        text: 'Virtualization', 
                        type: 'group',
                        items: [
                            { id: 'ltbx-fload', pid: 'ltbx-virt', text: 'Fast Load of Thousands of Items', link: '/listbox/virtualization/listbox-fast-load' }
                        ]   
                    }
                ]
            },
            { text: 'ListGroup', link: '/listgroup-overview' },
            { text: 'ListScroller', link: '/listscroller-overview' },
            { 
                id: 'lvw',
                text: 'ListView', 
                items: [
                    { id: 'lvw-ovw', pid: 'lvw', text: 'Overview', link: '/listview/listview-overview' },
                    { 
                        id: 'lvw-data', 
                        pid: 'lvw', 
                        text: 'Data', 
                        type: 'group',
                        items: [
                            { id: 'lvw-adrm', pid: 'lvw-data', text: 'Add/Remove Items from Code', link: '/listview/data/listview-add-remove' },
                            { id: 'lvw-expjsn', pid: 'lvw-data', text: 'Export to JSON', link: '/listview/data/listview-export-json' },
                            { id: 'lvw-ljsn', pid: 'lvw-data', text: 'Load from JSON', link: '/listview/data/listview-load-json' }
                        ]   
                    },
                    { 
                        id: 'lvw-dd', 
                        pid: 'lvw', 
                        text: 'Drag and Drop', 
                        type: 'group',
                        items: [
                            { id: 'lvw-ddovw', pid: 'lvw-dd', text: 'Drag Drop Overview', link: '/listview/dragdrop/listview-dragdrop-overview' },
                            { id: 'lvw-ddevn', pid: 'lvw-dd', text: 'Drag Drop Events', link: '/listview/dragdrop/listview-dragdrop-events' },
                            { id: 'lvw-ddlv', pid: 'lvw-dd', text: 'Drag Drop to ListBox', link: '/listview/dragdrop/listview-dragdrop-listbox' }
                        ]   
                    },
                    { 
                        id: 'lvw-flt', 
                        pid: 'lvw', 
                        text: 'Filtering', 
                        type: 'group',
                        items: [
                            { id: 'lvw-fltovw', pid: 'lvw-flt', text: 'Overview', link: '/listview/filtering/listview-filtering-overview' }
                        ]   
                    },
                    { 
                        id: 'lvw-lyt', 
                        pid: 'lvw', 
                        text: 'Layout', 
                        type: 'group',
                        items: [
                            { id: 'lvw-icn', pid: 'lvw-lyt', text: 'ListView with Cards', link: '/listview/layout/listview-cards' }
                        ]   
                    },
                    { 
                        id: 'lvw-scr', 
                        pid: 'lvw', 
                        text: 'Scrolling', 
                        type: 'group',
                        items: [
                            { id: 'lvw-scrto', pid: 'lvw-scr', text: 'Scroll To Specific Item', link: '/listview/scrolling/listview-scroll-to' }
                        ]   
                    },
                    { 
                        id: 'lvw-selt', 
                        pid: 'lvw', 
                        text: 'Selection', 
                        type: 'group',
                        items: [
                            { id: 'lvw-selmt', pid: 'lvw-selt', text: 'Select Multiple Items', link: '/listview/selection/listview-multi-select' }
                        ]   
                    },
                    { 
                        id: 'lvw-sort', 
                        pid: 'lvw', 
                        text: 'Sorting', 
                        type: 'group',
                        items: [
                            { id: 'lvw-sortovw', pid: 'lvw-sort', text: 'Overview', link: '/listview/sorting/listview-sorting-overview' }
                        ]   
                    },
                    { 
                        id: 'lvw-styg', 
                        pid: 'lvw', 
                        text: 'Styling', 
                        type: 'group',
                        items: [
                            { id: 'lvw-tdc', pid: 'lvw-styg', text: 'Even/Odd Items', link: '/listview/styling/listview-evenodd-items' }
                        ]   
                    },
                    { 
                        id: 'lvw-utl', 
                        pid: 'lvw', 
                        text: 'Utility', 
                        type: 'group',
                        items: [
                            { id: 'lvw-cmnu', pid: 'lvw-utl', text: 'Items with Context Menu', link: '/listview/utility/listview-contextmenu' },
                            { id: 'lvw-ttp', pid: 'lvw-utl', text: 'Items with Tooltip', link: '/listview/utility/listview-tooltip' },
                    ]   
                    },
                    { 
                        id: 'lvw-virt', 
                        pid: 'lvw', 
                        text: 'Virtualization', 
                        type: 'group',
                        items: [
                            { id: 'lvw-fload', pid: 'lvw-virt', text: 'Fast Load of Thousands of Items', link: '/listview/virtualization/listview-fast-load' }
                        ]   
                    }
                ]
            },
            { text: 'Loading', link: '/loading/loading-overview' },
            { text: 'Menu', link: '/menu-overview' },
            { text: 'Numeric', link: '/numeric-overview' },
            { text: 'Paginator', link: '/paginator-overview' },
            { 
                id: 'prgd',
                text: 'PivotGrid', 
                items: [
                    { id: 'prgd-ovw', pid: 'prgd', text: 'Overview', link: '/pivotgrid/overview' },
                    { id: 'prgd-expt', pid: 'prgd', text: 'Export', link: '/pivotgrid/export' },
                    { id: 'prgd-incl-filters', pid: 'prgd', text: 'Inclusive Filters', link: '/pivotgrid/inclusive-filters' },
                    { id: 'prgd-lbl-filters', pid: 'prgd', text: 'Label Filters', link: '/pivotgrid/label-filters' },
                    { id: 'prgd-sort', pid: 'prgd', text: 'Sorting', link: '/pivotgrid/sorting' },
                    { id: 'prgd-val-filters', pid: 'prgd', text: 'Value Filters', link: '/pivotgrid/value-filters' }
                ]
            },
            { text: 'PopOver', link: '/popover-overview' },
            { text: 'ProgressBar', link: '/progressbar-overview' },
            { text: 'RadioButton', link: '/radiobutton-overview' },
            { text: 'Rating', link: '/rating-overview' },
            { text: 'Select', link: '/select-overview' },
            { 
                id: 'sdbr',
                text: 'SideBar', 
                items: [
                    { id: 'sdbr-ovw', pid: 'sdbr', text: 'Overview', link: '/sidebar/sidebar-overview' },
                    { id: 'sdbr-alg', pid: 'sdbr', text: 'Alignment', link: '/sidebar/sidebar-alignment' },
                    { id: 'sdbr-ah', pid: 'sdbr', text: 'Auto-Hide', link: '/sidebar/sidebar-autohide' },
                    { id: 'sdbr-dfsd', pid: 'sdbr', text: 'Different Sides', link: '/sidebar/sidebar-different-sides' },
                    { id: 'sdbr-ntb', pid: 'sdbr', text: 'Open New Tab', link: '/sidebar/sidebar-new-tab' },
                    { id: 'sdbr-plt', pid: 'sdbr', text: 'Placement', link: '/sidebar/sidebar-placement' },
                    { id: 'sdbr-ttp', pid: 'sdbr', text: 'Tooltip', link: '/sidebar/sidebar-tooltip' }
                ]
            },
            { text: 'SidePanel', link: '/sidepanel/sidepanel-overview' },
            { text: 'SlideBar', link: '/slidebar-overview' },
            { text: 'Slider', link: '/slider-overview' },
            { text: 'SplitContainer', link: '/splitcontainer-overview' },
            { text: 'SplitImage', link: '/splitimage-overview' },
            { text: 'Splitter', link: '/splitter-overview' },
            { 
                id: 'tbs',
                text: 'TabStrip', 
                items: [
                    { id: 'tbs-ovw', pid: 'tbs', text: 'Overview', link: '/tabstrip/tabstrip-overview' },
                    { 
                        id: 'tbs-anm', 
                        pid: 'tbs', 
                        text: 'Animation', 
                        type: 'group',
                        items: [
                            { id: 'tbs-anty', pid: 'tbs-anm', text: 'How to Animate Tab Content', link: '/tabstrip/animation/tabstrip-animation-types' }
                        ]   
                    },
                    { 
                        id: 'tbs-data', 
                        pid: 'tbs', 
                        text: 'Data', 
                        type: 'group',
                        items: [
                            { id: 'tbs-adrm', pid: 'tbs-data', text: 'Add/Remove Tabs from Code', link: '/tabstrip/data/tabstrip-add-remove' },
                            { id: 'tbs-ljsn', pid: 'tbs-data', text: 'Load Tabs from JSON', link: '/tabstrip/data/tabstrip-load-json' },
                       ]   
                    },
                    { 
                        id: 'tbs-dd', 
                        pid: 'tbs', 
                        text: 'Drag and Drop', 
                        type: 'group',
                        items: [
                            { id: 'tbs-dgdp', pid: 'tbs-dd', text: 'Overview', link: '/tabstrip/dragdrop/tabstrip-dragdrop-overview' }
                        ]   
                    },
                    { 
                        id: 'tbs-lyt', 
                        pid: 'tbs', 
                        text: 'Layout', 
                        type: 'group',
                        items: [
                            { id: 'tbs-acj', pid: 'tbs-lyt', text: 'Display mode: AutoSized and Justified', link: '/tabstrip/layout/tabstrip-display-mode' },
                            { id: 'tbs-mln', pid: 'tbs-lyt', text: 'Multiline Tabs', link: '/tabstrip/layout/tabstrip-multiline' },
                            { id: 'tbs-spc', pid: 'tbs-lyt', text: 'How to Add Space Between Tabs', link: '/tabstrip/layout/tabstrip-spacing' },
                            { id: 'tbs-tool', pid: 'tbs-lyt', text: 'Tabs with Toolbar', link: '/tabstrip/layout/tabstrip-toolbar' },
                            { id: 'tbs-aln', pid: 'tbs-lyt', text: 'Tab Alignment', link: '/tabstrip/layout/tabstrip-alignment' },
                            { id: 'tbs-ort', pid: 'tbs-lyt', text: 'Tab Orientation', link: '/tabstrip/layout/tabstrip-orientation' },
                            { id: 'tbs-plt', pid: 'tbs-lyt', text: 'Tabs on Different Sides', link: '/tabstrip/layout/tabstrip-placement' }
                        ]   
                    },
                    { 
                        id: 'tbs-scr', 
                        pid: 'tbs', 
                        text: 'Scrolling', 
                        type: 'group',
                        items: [
                            { id: 'tbs-scrtp', pid: 'tbs-scr', text: 'Different Types of Scrolling', link: '/tabstrip/scrolling/tabstrip-scroll-mode' },
                            { id: 'tbs-scrto', pid: 'tbs-scr', text: 'Scroll To Specific Tab', link: '/tabstrip/scrolling/tabstrip-scroll-to' },
                        ]   
                    },
                    { 
                        id: 'tbs-styg', 
                        pid: 'tbs', 
                        text: 'Styling', 
                        type: 'group',
                        items: [
                            { id: 'tbs-tdc', pid: 'tbs-styg', text: 'Tabs in Different Colors', link: '/tabstrip/styling/tabstrip-different-colors' }
                        ]   
                    },
                    { 
                        id: 'tbs-utl', 
                        pid: 'tbs', 
                        text: 'Utility', 
                        type: 'group',
                        items: [
                            { id: 'tbs-ntb', pid: 'tbs-utl', text: 'Add New Tab on Demand', link: '/tabstrip/utility/tabstrip-new-tab' },
                            { id: 'tbs-tgcb', pid: 'tbs-utl', text: 'Switch Tab Groups with ComboBox', link: '/tabstrip/utility/tabstrip-tab-groups' },
                            { id: 'tbs-cbtn', pid: 'tbs-utl', text: 'Tabs with Close Button', link: '/tabstrip/utility/tabstrip-close-button' },
                            { id: 'tbs-cmnu', pid: 'tbs-utl', text: 'Tabs with Context Menu', link: '/tabstrip/utility/tabstrip-contextmenu' },
                            { id: 'tbs-ttp', pid: 'tbs-utl', text: 'Tabs with Tooltip', link: '/tabstrip/utility/tabstrip-tooltip' }
                        ]   
                    }
                ]
            },
            { text: 'Toaster', link: '/toaster-overview' },
            { text: 'Tooltip', link: '/tooltip-overview' },
            { 
                id: 'trgd',
                text: 'TreeGrid', 
                items: [
                    { id: 'trgd-ovw', pid: 'trgd', text: 'Overview', link: '/treegrid/overview' },
                    { id: 'trgd-ardyn', pid: 'trgd', text: 'Add Rows Dynamically', link: '/treegrid/add-row-dynamically' },
                    { id: 'trgd-ctpl', pid: 'trgd', text: 'Cell Templates', link: '/treegrid/cell-templates' },
                    { id: 'trgd-cmnu', pid: 'trgd', text: 'Context Menu', link: '/treegrid/contextmenu' },
                    { 
                        id: 'trgd-editing', 
                        pid: 'trgd', 
                        text: 'Editing', 
                        type: 'group',
                        items: [
                            { id: 'trgd-bhedt', pid: 'trgd-editing', text: 'Batch Editing', link: '/treegrid/batch-editing' },
                            { id: 'trgd-frmedt', pid: 'trgd-editing', text: 'Form Editing', link: '/treegrid/form-editing' },
                            { id: 'trgd-inedt', pid: 'trgd-editing', text: 'Inline Editing', link: '/treegrid/inline-editing' },
                            { 
                                id: 'trgd-editors', 
                                pid: 'trgd-editing', 
                                text: 'Editors', 
                                type: 'group',
                                items: [
                                    { id: 'trgd-edtprg', pid: 'trgd-editors', text: 'Cells with ProgressBar', link: '/treegrid/editing/editors/editors-progressbar' },
                                    { id: 'trgd-edtsld', pid: 'trgd-editors', text: 'Cells with Slider', link: '/treegrid/editing/editors/editors-slider' }
                                ]   
                            }
                        ]   
                    },
                    { id: 'trgd-expt', pid: 'trgd', text: 'Export', link: '/treegrid/export' },
                    { id: 'trgd-fltr', pid: 'trgd', text: 'Filtering', link: '/treegrid/filtering' },
                    { id: 'trgd-fxcl', pid: 'trgd', text: 'Fixed Columns', link: '/treegrid/fixed-columns' },
                    { id: 'trgd-inflt', pid: 'trgd', text: 'Inline Filter', link: '/treegrid/inline-filter' },
                    { id: 'trgd-pgn', pid: 'trgd', text: 'Pagination', link: '/treegrid/pagination' },
                    { id: 'trgd-sort', pid: 'trgd', text: 'Sorting', link: '/treegrid/sorting' },
                    { id: 'trgd-ttps', pid: 'trgd', text: 'Tooltips', link: '/treegrid/tooltips' },
                    { id: 'trgd-virt', pid: 'trgd', text: 'Virtualization', link: '/treegrid/virtualization' },
                    { 
                        id: 'trgd-layout', 
                        pid: 'trgd', 
                        text: 'Layout', 
                        type: 'group',
                        items: [
                            { id: 'trgd-colchf', pid: 'trgd-layout', text: 'Custom Header and Footer', link: '/treegrid/layout/custom-header-footer' },
                            { id: 'trgd-dsbrows', pid: 'trgd-layout', text: 'How to Disable Rows on Demand', link: '/treegrid/layout/disabled-rows' },
                            { id: 'trgd-expcol', pid: 'trgd-layout', text: 'How to Change Expanding Column', link: '/treegrid/layout/expanding-column' }
                        ]
                    },
                    { 
                        id: 'trgd-styling', 
                        pid: 'trgd', 
                        text: 'Styling', 
                        type: 'group',
                        items: [
                            { id: 'trgd-hlrows', pid: 'trgd-styling', text: 'Highlight Rows on Demand', link: '/treegrid/styling/highlight-rows' },
                        ]
                    }
                ]
            },
            { text: 'TreeList', link: '/treelist-overview' },
            { 
                id: 'trw',
                text: 'TreeView', 
                items: [
                    { id: 'trw-ovw', pid: 'trw', text: 'Overview', link: '/treeview/treeview-overview' },
                    { 
                        id: 'trw-data', 
                        pid: 'trw', 
                        text: 'Data', 
                        type: 'group',
                        items: [
                            { id: 'trw-adrm', pid: 'trw-data', text: 'Add/Remove Items from Code', link: '/treeview/data/treeview-add-remove' },
                            { id: 'trw-expjsn', pid: 'trw-data', text: 'Export to JSON', link: '/treeview/data/treeview-export-json' },
                            { id: 'trw-ljsn', pid: 'trw-data', text: 'Load from JSON', link: '/treeview/data/treeview-load-json' },
                            { id: 'trw-ldmd', pid: 'trw-data', text: 'Load on Demand', link: '/treeview/data/treeview-load-on-demand' }
                       ]   
                    },
                    { 
                        id: 'trw-dd', 
                        pid: 'trw', 
                        text: 'Drag and Drop', 
                        type: 'group',
                        items: [
                            { id: 'trw-dd2tw', pid: 'trw-dd', text: 'Drag Drop between TreeViews', link: '/treeview/dragdrop/treeview-dragdrop-two-trees' }
                        ]   
                    },
                    { 
                        id: 'trw-edt', 
                        pid: 'trw', 
                        text: 'Editing', 
                        type: 'group',
                        items: [
                            { id: 'trw-culedt', pid: 'trw-edt', text: 'Custom Label Edit', link: '/treeview/editing/treeview-custom-label-edit' }
                        ]   
                    },
                    { 
                        id: 'trw-flt', 
                        pid: 'trw', 
                        text: 'Filtering', 
                        type: 'group',
                        items: [
                            { id: 'trw-fltovw', pid: 'trw-flt', text: 'Overview', link: '/treeview/filtering/treeview-filtering-overview' }
                        ]   
                    },
                    { 
                        id: 'trw-lyt', 
                        pid: 'trw', 
                        text: 'Layout', 
                        type: 'group',
                        items: [
                            { id: 'trw-asl', pid: 'trw-lyt', text: 'Auto Sized', link: '/treeview/layout/treeview-autosized' },
                            { id: 'trw-icn', pid: 'trw-lyt', text: 'Items with Custom Content', link: '/treeview/layout/treeview-custom-content' },
                        ]   
                    },
                    { 
                        id: 'trw-scr', 
                        pid: 'trw', 
                        text: 'Scrolling', 
                        type: 'group',
                        items: [
                            { id: 'trw-scrto', pid: 'trw-scr', text: 'Scroll To Specific Item', link: '/treeview/scrolling/treeview-scroll-to' }
                        ]   
                    },
                    { 
                        id: 'trw-selt', 
                        pid: 'trw', 
                        text: 'Selection', 
                        type: 'group',
                        items: [
                            { id: 'trw-selmt', pid: 'trw-selt', text: 'Select Multiple Items', link: '/treeview/selection/treeview-multi-select' }
                        ]   
                    },
                    { 
                        id: 'trw-sort', 
                        pid: 'trw', 
                        text: 'Sorting', 
                        type: 'group',
                        items: [
                            { id: 'trw-sortovw', pid: 'trw-sort', text: 'Overview', link: '/treeview/sorting/treeview-sorting-overview' }
                        ]   
                    },
                    { 
                        id: 'trw-styg', 
                        pid: 'trw', 
                        text: 'Styling', 
                        type: 'group',
                        items: [
                            { id: 'trw-tdc', pid: 'trw-styg', text: 'Even/Odd Items', link: '/treeview/styling/treeview-evenodd-items' },
                            { id: 'trw-hgh', pid: 'trw-styg', text: 'Highlight Items', link: '/treeview/styling/treeview-highlight' }
                        ]   
                    },
                    { 
                        id: 'trw-utl', 
                        pid: 'trw', 
                        text: 'Utility', 
                        type: 'group',
                        items: [
                            { id: 'trw-cexpb', pid: 'trw-utl', text: 'Custom Expand Box', link: '/treeview/utility/treeview-custom-expandbox' },
                            { id: 'trw-expmo', pid: 'trw-utl', text: 'Expand on Mouse Over', link: '/treeview/utility/treeview-expand-mouse-over' },
                            { id: 'trw-cbox', pid: 'trw-utl', text: 'Items with Check Boxes', link: '/treeview/utility/treeview-checkboxes' },
                            { id: 'trw-cmnu', pid: 'trw-utl', text: 'Items with Context Menu', link: '/treeview/utility/treeview-contextmenu' },
                            { id: 'trw-itmdd', pid: 'trw-utl', text: 'Items with DropDown', link: '/treeview/utility/treeview-items-dropdown' },
                            { id: 'trw-rbl', pid: 'trw-utl', text: 'Items with Radio Buttons', link: '/treeview/utility/treeview-radiobuttons' },
                            { id: 'trw-ttp', pid: 'trw-utl', text: 'Items with Tooltip', link: '/treeview/utility/treeview-tooltip' },
                            { id: 'trw-tool', pid: 'trw-utl', text: 'TreeView as Toolbox', link: '/treeview/utility/treeview-toolbox' }
                       ]   
                    },
                    { 
                        id: 'trw-virt', 
                        pid: 'trw', 
                        text: 'Virtualization', 
                        type: 'group',
                        items: [
                            { id: 'trw-fload', pid: 'trw-virt', text: 'Fast Load of Thousands of Items', link: '/treeview/virtualization/treeview-fast-load' }
                        ]   
                    }
                ]
            },
            { text: 'Window', link: '/window-overview' }
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
