import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { StartComponent } from './start.component';

import { AccordionOverviewSample } from './samples/accordion/accordion-overview';
import { AutoCompleteOverviewSample } from './samples/autocomplete/autocomplete-overview';
import { BreadCrumbOverviewSample } from './samples/breadcrumb/breadcrumb-overview';
import { ButtonOverviewSample } from './samples/button/button-overview';
import { ButtonGroupOverviewSample } from './samples/buttongroup/buttongroup-overview';
import { CalendarOverviewSample } from './samples/calendar/calendar-overview';
import { CheckBoxOverviewSample } from './samples/checkbox/checkbox-overview';
import { DatePickerOverviewSample } from './samples/datepicker/datepicker-overview';
import { DialogOverviewSample } from './samples/dialog/dialog-overview';

import { GridOverview } from './samples/grid/grid-overview';
import { GridAddRowDynamically } from './samples/grid/grid-add-row-dynamically';
import { GridBuiltInEditors } from './samples/grid/grid-builtin-editors';
import { GridCellTemplates } from './samples/grid/grid-cell-templates';
import { GridContextMenu } from './samples/grid/grid-context-menu';
import { GridDynamicGrouping } from './samples/grid/grid-dynamic-grouping';
import { GridExport } from './samples/grid/grid-export';
import { GridFiltering } from './samples/grid/grid-filtering';
import { GridFixedColumns } from './samples/grid/grid-fixed-columns';
import { GridPagination } from './samples/grid/grid-pagination';
import { GridSorting } from './samples/grid/grid-sorting';
import { GridTooltips } from './samples/grid/grid-tooltips';
import { GridVirtualization } from './samples/grid/grid-virtualization';

import { GroupBoxOverviewSample } from './samples/groupbox/groupbox-overview';
import { ListBarOverviewSample } from './samples/listbar/listbar-overview';
import { ListBoxOverviewSample } from './samples/listbox/listbox-overview';
import { ListGroupOverviewSample } from './samples/listgroup/listgroup-overview';
import { ListScrollerOverviewSample } from './samples/listscroller/listscroller-overview';
import { ListViewOverviewSample } from './samples/listview/listview-overview';
import { MenuOverviewSample } from './samples/menu/menu-overview';
import { NumericOverviewSample } from './samples/numeric/numeric-overview';
import { PaginatorOverviewSample } from './samples/paginator/paginator-overview';
import { PopOverOverviewSample } from './samples/popover/popover-overview';
import { ProgressBarOverviewSample } from './samples/progressbar/progressbar-overview';
import { RadioButtonOverviewSample } from './samples/radiobutton/radiobutton-overview';
import { RatingOverviewSample } from './samples/rating/rating-overview';
import { SelectOverviewSample } from './samples/select/select-overview';
import { SideBarOverview } from './samples/sidebar/sidebar-overview';
import { SlideBarOverviewSample } from './samples/slidebar/slidebar-overview';
import { SliderOverviewSample } from './samples/slider/slider-overview';
import { SplitContainerOverviewSample } from './samples/splitcontainer/splitcontainer-overview';
import { SplitterOverviewSample } from './samples/splitter/splitter-overview';

import { TabStripOverviewSample } from './samples/tabstrip/tabstrip-overview';
import { TabStripCloseButtonSample } from './samples/tabstrip/utility/tabstrip-close-button';
import { TabStripNewTabSample } from './samples/tabstrip/utility/tabstrip-new-tab';
import { TabStripToolbarSample } from './samples/tabstrip/layout/tabstrip-toolbar';

import { TooltipOverviewSample } from './samples/tooltip/tooltip-overview';

import { TreeGridOverview } from './samples/treegrid/treegrid-overview';
import { TreeGridAddRowDynamically } from './samples/treegrid/treegrid-add-row-dynamically';
import { TreeGridBuiltInEditors } from './samples/treegrid/treegrid-builtin-editors';
import { TreeGridCellTemplates } from './samples/treegrid/treegrid-cell-templates';
import { TreeGridContextMenu } from './samples/treegrid/treegrid-context-menu';
import { TreeGridExport } from './samples/treegrid/treegrid-export';
import { TreeGridFiltering } from './samples/treegrid/treegrid-filtering';
import { TreeGridFixedColumns } from './samples/treegrid/treegrid-fixed-columns';
import { TreeGridPagination } from './samples/treegrid/treegrid-pagination';
import { TreeGridSorting } from './samples/treegrid/treegrid-sorting';
import { TreeGridTooltips } from './samples/treegrid/treegrid-tooltips';
import { TreeGridVirtualization } from './samples/treegrid/treegrid-virtualization';

import { TreeListOverviewSample } from './samples/treelist/treelist-overview';

import { TreeViewOverviewSample } from './samples/treeview/treeview-overview';
import { TreeViewLoadJSONSample } from './samples/treeview/data/treeview-load-json';
import { TreeViewLoadOnDemandSample } from './samples/treeview/data/treeview-load-on-demand';
import { TreeViewDragDropTwoTreeSample } from './samples/treeview/drag-drop/treeview-drag-drop-two-trees';
import { TreeViewCheckBoxesSample } from './samples/treeview/utility/treeview-checkboxes';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule, 
        RouterModule.forRoot([
  		      { 
                path: '', component: StartComponent,
                children: [
                    { path: 'accordion-overview', component: AccordionOverviewSample },
                    { path: 'autocomplete-overview', component: AutoCompleteOverviewSample },
                    { path: 'breadcrumb-overview', component: BreadCrumbOverviewSample },
                    { path: 'button-overview', component: ButtonOverviewSample },
                    { path: 'buttongroup-overview', component: ButtonGroupOverviewSample },
                    { path: 'calendar-overview', component: CalendarOverviewSample },
                    { path: 'checkbox-overview', component: CheckBoxOverviewSample },
                    { path: 'datepicker-overview', component: DatePickerOverviewSample },
                    { path: 'dialog-overview', component: DialogOverviewSample },
                    { path: 'grid/overview', component: GridOverview },
                    { path: 'grid/add-row-dynamically', component: GridAddRowDynamically },
                    { path: 'grid/builtin-editors', component: GridBuiltInEditors },
                    { path: 'grid/cell-templates', component: GridCellTemplates },
                    { path: 'grid/contextmenu', component: GridContextMenu },
                    { path: 'grid/dynamic-grouping', component: GridDynamicGrouping },
                    { path: 'grid/export', component: GridExport },
                    { path: 'grid/filtering', component: GridFiltering },
                    { path: 'grid/fixed-columns', component: GridFixedColumns },
                    { path: 'grid/pagination', component: GridPagination },
                    { path: 'grid/sorting', component: GridSorting },
                    { path: 'grid/tooltips', component: GridTooltips },
                    { path: 'grid/virtualization', component: GridVirtualization },
                    { path: 'groupbox-overview', component: GroupBoxOverviewSample },
                    { path: 'listbar-overview', component: ListBarOverviewSample },
                    { path: 'listbox-overview', component: ListBoxOverviewSample },
                    { path: 'listgroup-overview', component: ListGroupOverviewSample },
                    { path: 'listscroller-overview', component: ListScrollerOverviewSample },
                    { path: 'listview-overview', component: ListViewOverviewSample },
                    { path: 'menu-overview', component: MenuOverviewSample },
                    { path: 'numeric-overview', component: NumericOverviewSample },
                    { path: 'paginator-overview', component: PaginatorOverviewSample },
                    { path: 'popover-overview', component: PopOverOverviewSample },
                    { path: 'progressbar-overview', component: ProgressBarOverviewSample },
                    { path: 'radiobutton-overview', component: RadioButtonOverviewSample },
                    { path: 'rating-overview', component: RatingOverviewSample },
                    { path: 'select-overview', component: SelectOverviewSample },
                    { path: 'sidebar-overview', component: SideBarOverview },
                    { path: 'slidebar-overview', component: SlideBarOverviewSample },
                    { path: 'slider-overview', component: SliderOverviewSample },
                    { path: 'splitcontainer-overview', component: SplitContainerOverviewSample },
                    { path: 'splitter-overview', component: SplitterOverviewSample },
                    { path: 'tabstrip/tabstrip-overview', component: TabStripOverviewSample },
                    { path: 'tabstrip/layout/tabstrip-toolbar', component: TabStripToolbarSample },
                    { path: 'tabstrip/utility/tabstrip-close-button', component: TabStripCloseButtonSample },
                    { path: 'tabstrip/utility/tabstrip-new-tab', component: TabStripNewTabSample },
                    { path: 'tooltip-overview', component: TooltipOverviewSample },
                    { path: 'treegrid/overview', component: TreeGridOverview },
                    { path: 'treegrid/add-row-dynamically', component: TreeGridAddRowDynamically },
                    { path: 'treegrid/builtin-editors', component: TreeGridBuiltInEditors },
                    { path: 'treegrid/cell-templates', component: TreeGridCellTemplates },
                    { path: 'treegrid/contextmenu', component: TreeGridContextMenu },
                    { path: 'treegrid/export', component: TreeGridExport },
                    { path: 'treegrid/filtering', component: TreeGridFiltering },
                    { path: 'treegrid/fixed-columns', component: TreeGridFixedColumns },
                    { path: 'treegrid/pagination', component: TreeGridPagination },
                    { path: 'treegrid/sorting', component: TreeGridSorting },
                    { path: 'treegrid/tooltips', component: TreeGridTooltips },
                    { path: 'treegrid/virtualization', component: TreeGridVirtualization },
                    { path: 'treelist-overview', component: TreeListOverviewSample },
                    { path: 'treeview/treeview-overview', component: TreeViewOverviewSample },
                    { path: 'treeview/data/treeview-load-json', component: TreeViewLoadJSONSample },
                    { path: 'treeview/data/treeview-load-on-demand', component: TreeViewLoadOnDemandSample },
                    { path: 'treeview/drag-drop/treeview-drag-drop-two-trees', component: TreeViewDragDropTwoTreeSample },
                    { path: 'treeview/utility/treeview-checkboxes', component: TreeViewCheckBoxesSample }
                ]
            }
            //{ path: '**', component: NotFoundSample }
        ])
    ],
    declarations: [ 
        StartComponent,
        AccordionOverviewSample,
        AutoCompleteOverviewSample,
        BreadCrumbOverviewSample,
        ButtonOverviewSample,
        ButtonGroupOverviewSample,
        CalendarOverviewSample,
        CheckBoxOverviewSample,
        DatePickerOverviewSample,
        DialogOverviewSample,
        GridOverview,
        GridAddRowDynamically,
        GridBuiltInEditors,
        GridCellTemplates,
        GridContextMenu,
        GridDynamicGrouping,
        GridExport,
        GridFiltering,
        GridFixedColumns,
        GridPagination,
        GridSorting,
        GridTooltips,
        GridVirtualization,
        GroupBoxOverviewSample,
        ListBarOverviewSample,
        ListBoxOverviewSample,
        ListGroupOverviewSample,
        ListScrollerOverviewSample,
        ListViewOverviewSample,
        MenuOverviewSample,
        NumericOverviewSample,
        PaginatorOverviewSample,
        PopOverOverviewSample,
        ProgressBarOverviewSample,
        RadioButtonOverviewSample,
        RatingOverviewSample,
        SelectOverviewSample,
        SideBarOverview,
        SlideBarOverviewSample,
        SliderOverviewSample,
        SplitContainerOverviewSample,
        SplitterOverviewSample,
        TabStripOverviewSample,
        TabStripToolbarSample,
        TabStripCloseButtonSample,
        TabStripNewTabSample,
        TooltipOverviewSample,
        TreeGridOverview,
        TreeGridAddRowDynamically,
        TreeGridBuiltInEditors,
        TreeGridCellTemplates,
        TreeGridContextMenu,
        TreeGridExport,
        TreeGridFiltering,
        TreeGridFixedColumns,
        TreeGridPagination,
        TreeGridSorting,
        TreeGridTooltips,
        TreeGridVirtualization,
        TreeListOverviewSample,
        TreeViewCheckBoxesSample,
        TreeViewDragDropTwoTreeSample,
        TreeViewLoadJSONSample,
        TreeViewLoadOnDemandSample,
        TreeViewOverviewSample
  	],
  	exports: [RouterModule],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppRoutingModule { }

