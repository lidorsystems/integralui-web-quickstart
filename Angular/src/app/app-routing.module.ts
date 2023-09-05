import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { StartComponent } from './start.component';

import { AccordionOverviewSample } from './samples/accordion/accordion-overview';
import { AutoCompleteOverviewSample } from './samples/autocomplete/autocomplete-overview';
import { BreadCrumbOverviewSample } from './samples/breadcrumb/breadcrumb-overview';
import { ButtonOverviewSample } from './samples/button/button-overview';
import { ButtonGroupOverviewSample } from './samples/buttongroup/buttongroup-overview';
import { CalendarOverviewSample } from './samples/calendar/calendar-overview';
import { CardOverview } from './samples/card/card-overview';
import { CheckBoxOverviewSample } from './samples/checkbox/checkbox-overview';

import { ContextMenuOverview } from './samples/contextmenu/contextmenu-overview';
import { ContextMenuCheckBoxes } from './samples/contextmenu/contextmenu-checkbox';
import { ContextMenuCustomTemplate } from './samples/contextmenu/contextmenu-custom-template';
import { ContextMenuHeader } from './samples/contextmenu/contextmenu-header';
import { ContextMenuMultiLevel } from './samples/contextmenu/contextmenu-multi-level';
import { ContextMenuRadioButtons } from './samples/contextmenu/contextmenu-radiobuttons';
import { ContextMenuSeparatorLabel } from './samples/contextmenu/contextmenu-separator-label';

import { DatePickerOverviewSample } from './samples/datepicker/datepicker-overview';
import { DialogOverviewSample } from './samples/dialog/dialog-overview';
import { DockPanelOverview } from './samples/dockpanel/dockpanel-overview';
import { DropDownButtonOverview } from './samples/dropdownbutton/dropdownbutton-overview';

import { GridOverview } from './samples/grid/grid-overview';
// Data
import { GridAddRowDynamically } from './samples/grid/data/grid-add-row-dynamically';
import { GridDynamicGrouping } from './samples/grid/data/grid-dynamic-grouping';
import { GridDynamicUpdate } from './samples/grid/data/grid-dynamic-update';
import { GridExport } from './samples/grid/data/grid-export';
// Editing
import { GridBatchEditing } from './samples/grid/editing/grid-batch-editing';
import { GridFormEditing } from './samples/grid/editing/grid-form-editing';
import { GridInlineEditing } from './samples/grid/editing/grid-inline-editing';
// Editors 
import { GridEditorsButton } from './samples/grid/editing/editors/grid-editors-button';
import { GridEditorsCheckBox } from './samples/grid/editing/editors/grid-editors-checkbox';
import { GridEditorsDatePicker } from './samples/grid/editing/editors/grid-editors-datepicker';
import { GridEditorsDropDownList } from './samples/grid/editing/editors/grid-editors-dropdownlist';
import { GridEditorsImage } from './samples/grid/editing/editors/grid-editors-image';
import { GridEditorsRadioButton } from './samples/grid/editing/editors/grid-editors-radiobutton';
import { GridEditorsRating } from './samples/grid/editing/editors/grid-editors-rating';
import { GridEditorsText } from './samples/grid/editing/editors/grid-editors-text';
// Filtering
import { GridFilteringOverview } from './samples/grid/filtering/grid-filtering-overview';
import { GridInlineFilter } from './samples/grid/filtering/grid-inline-filter';
// Layout
import { GridAutoSizeColumns } from './samples/grid/layout/grid-autosize-columns';
import { GridCellTemplates } from './samples/grid/layout/grid-cell-templates';
import { GridColumnAlignment } from './samples/grid/layout/grid-column-alignment';
import { GridFixedColumns } from './samples/grid/layout/grid-fixed-columns';
import { GridFixedMinMaxWidth } from './samples/grid/layout/grid-column-fixed-min-max-width';
import { GridDynamicResizeWindow } from './samples/grid/layout/grid-window-dynamic-resize';
import { GridAsListBox } from './samples/grid/layout/grid-as-listbox';
import { GridMultiLineHeaders } from './samples/grid/layout/grid-multi-line-headers';
import { GridRowCustomToolbar } from './samples/grid/layout/grid-row-custom-toolbar';
import { GridShowHideColumns } from './samples/grid/layout/grid-show-hide-columns';
import { GridShowHideHeaderFooter } from './samples/grid/layout/grid-show-hide-header-footer';
// Pagination
import { GridPaginationOverview } from './samples/grid/pagination/grid-pagination-overview';
//Sorting
import { GridSortingOverview } from './samples/grid/sorting/grid-sorting-overview';
import { GridMultiColumnSorting } from './samples/grid/sorting/grid-multi-column-sorting';
// Styling
import { GridCellsDifferentColors } from './samples/grid/styling/grid-cells-different-colors';
import { GridColumnsDifferentColors } from './samples/grid/styling/grid-columns-different-colors';
import { GridRowsDifferentColors } from './samples/grid/styling/grid-rows-different-colors';
// Utility
import { GridTooltips } from './samples/grid/utility/grid-tooltips';
import { GridContextMenu } from './samples/grid/utility/grid-context-menu';
// Virtualization
import { GridFastLoad } from './samples/grid/virtualization/grid-fast-load';

import { GroupBoxOverviewSample } from './samples/groupbox/groupbox-overview';
import { LabelOverviewSample } from './samples/label/label-overview';
import { ListBarOverviewSample } from './samples/listbar/listbar-overview';

import { ListBoxOverview } from './samples/listbox/listbox-overview';
import { ListBoxAddRemove } from './samples/listbox/data/listbox-add-remove';
import { ListBoxExportJSON } from './samples/listbox/data/listbox-export-json';
import { ListBoxGrouping } from './samples/listbox/data/listbox-grouping';
import { ListBoxLoadJSON } from './samples/listbox/data/listbox-load-json';
import { ListBoxDDEVents } from './samples/listbox/dragdrop/listbox-dragdrop-events';
import { ListBoxDDListView } from './samples/listbox/dragdrop/listbox-dragdrop-listview';
import { ListBoxDDOverview } from './samples/listbox/dragdrop/listbox-dragdrop-overview';
import { ListBoxFilteringOverview } from './samples/listbox/filtering/listbox-filtering-overview';
import { ListBoxCustomContent } from './samples/listbox/layout/listbox-custom-content';
import { ListBoxScrollTo } from './samples/listbox/scrolling/listbox-scroll-to';
import { ListBoxMultiSelect } from './samples/listbox/selection/listbox-multi-select';
import { ListBoxSortingOverview } from './samples/listbox/sorting/listbox-sorting-overview';
import { ListBoxEvenOdd } from './samples/listbox/styling/listbox-evenodd-items';
import { ListBoxHighlight } from './samples/listbox/styling/listbox-highlight';
import { ListBoxCheckBoxes } from './samples/listbox/utility/listbox-checkboxes';
import { ListBoxContexteMenu } from './samples/listbox/utility/listbox-contextmenu';
import { ListBoxTooltip } from './samples/listbox/utility/listbox-tooltip';
import { ListBoxFastLoad } from './samples/listbox/virtualization/listbox-fast-load';

import { ListGroupOverviewSample } from './samples/listgroup/listgroup-overview';
import { ListScrollerOverviewSample } from './samples/listscroller/listscroller-overview';

import { ListViewOverview } from './samples/listview/listview-overview';
import { ListViewAddRemove } from './samples/listview/data/listview-add-remove';
import { ListViewExportJSON } from './samples/listview/data/listview-export-json';
import { ListViewLoadJSON } from './samples/listview/data/listview-load-json';
import { ListViewDDEVents } from './samples/listview/dragdrop/listview-dragdrop-events';
import { ListViewDDListBox } from './samples/listview/dragdrop/listview-dragdrop-listbox';
import { ListViewDDOverview } from './samples/listview/dragdrop/listview-dragdrop-overview';
import { ListViewFilteringOverview } from './samples/listview/filtering/listview-filtering-overview';
import { ListViewCards } from './samples/listview/layout/listview-cards';
import { ListViewScrollTo } from './samples/listview/scrolling/listview-scroll-to';
import { ListViewMultiSelect } from './samples/listview/selection/listview-multi-select';
import { ListViewSortingOverview } from './samples/listview/sorting/listview-sorting-overview';
import { ListViewEvenOdd } from './samples/listview/styling/listview-evenodd-items';
import { ListViewContexteMenu } from './samples/listview/utility/listview-contextmenu';
import { ListViewTooltip } from './samples/listview/utility/listview-tooltip';
import { ListViewFastLoad } from './samples/listview/virtualization/listview-fast-load';

import { LoadingOverview } from './samples/loading/loading-overview';

import { MenuOverview } from './samples/menu/menu-overview';
import { MenuCheckBox } from './samples/menu/menu-checkbox';
import { MenuCustomTemplate } from './samples/menu/menu-custom-template';
import { MenuRadioButtons } from './samples/menu/menu-radiobuttons';
import { MenuSeparatorLabel } from './samples/menu/menu-separator-label';
import { MenuShortcuts } from './samples/menu/menu-shortcuts';
import { MenuVertical } from './samples/menu/menu-vertical';

import { NumericOverviewSample } from './samples/numeric/numeric-overview';
import { PaginatorOverviewSample } from './samples/paginator/paginator-overview';

import { PivotGridOverview } from './samples/pivotgrid/pivotgrid-overview';
import { PivotGridExport } from './samples/pivotgrid/pivotgrid-export';
import { PivotGridInclusiveFilters } from './samples/pivotgrid/pivotgrid-inclusive-filters';
import { PivotGridLabelFilters } from './samples/pivotgrid/pivotgrid-label-filters';
import { PivotGridSorting } from './samples/pivotgrid/pivotgrid-sorting';
import { PivotGridValueFilters } from './samples/pivotgrid/pivotgrid-value-filters';

import { PopOverOverviewSample } from './samples/popover/popover-overview';
import { ProgressBarOverviewSample } from './samples/progressbar/progressbar-overview';
import { RadioButtonOverviewSample } from './samples/radiobutton/radiobutton-overview';
import { RatingOverviewSample } from './samples/rating/rating-overview';
import { SelectOverviewSample } from './samples/select/select-overview';

import { SideBarOverview } from './samples/sidebar/sidebar-overview';
import { SideBarAlignment } from './samples/sidebar/sidebar-alignment';
import { SideBarAutoHide } from './samples/sidebar/sidebar-autohide';
import { SideBarDifferentSides } from './samples/sidebar/sidebar-different-sides';
import { SideBarNewTab } from './samples/sidebar/sidebar-new-tab';
import { SideBarPlacement } from './samples/sidebar/sidebar-placement';
import { SideBarTooltip } from './samples/sidebar/sidebar-tooltip';

import { SidePanelOverview } from './samples/sidepanel/sidepanel-overview';
import { SlideBarOverviewSample } from './samples/slidebar/slidebar-overview';
import { SliderOverviewSample } from './samples/slider/slider-overview';
import { SplitContainerOverviewSample } from './samples/splitcontainer/splitcontainer-overview';
import { SplitImageOverviewSample } from './samples/splitimage/splitimage-overview';
import { SplitterOverviewSample } from './samples/splitter/splitter-overview';

import { TabStripOverview } from './samples/tabstrip/tabstrip-overview';
import { TabStripAnimationTypes } from './samples/tabstrip/animation/tabstrip-animation-types';
import { TabStripAddRemove } from './samples/tabstrip/data/tabstrip-add-remove';
import { TabStripLoadJSON } from './samples/tabstrip/data/tabstrip-load-json';
import { TabStripDragDropOverview } from './samples/tabstrip/dragdrop/tabstrip-dragdrop-overview';
import { TabStripTabAlignment } from './samples/tabstrip/layout/tabstrip-alignment';
import { TabStripDisplayMode } from './samples/tabstrip/layout/tabstrip-display-mode';
import { TabStripMultilineTabs } from './samples/tabstrip/layout/tabstrip-multiline';
import { TabStripTabOrientation } from './samples/tabstrip/layout/tabstrip-orientation';
import { TabStripPlacement } from './samples/tabstrip/layout/tabstrip-placement';
import { TabStripSpacing } from './samples/tabstrip/layout/tabstrip-spacing';
import { TabStripToolbar } from './samples/tabstrip/layout/tabstrip-toolbar';
import { TabStripScrollMode } from './samples/tabstrip/scrolling/tabstrip-scroll-mode';
import { TabStripScrollTo } from './samples/tabstrip/scrolling/tabstrip-scroll-to';
import { TabStripDifferentColors } from './samples/tabstrip/styling/tabstrip-different-colors';
import { TabStripCloseButton } from './samples/tabstrip/utility/tabstrip-close-button';
import { TabStripContextMenu } from './samples/tabstrip/utility/tabstrip-contextmenu';
import { TabStripNewTab } from './samples/tabstrip/utility/tabstrip-new-tab';
import { TabStripGroups } from './samples/tabstrip/utility/tabstrip-tab-groups';
import { TabStripTooltip } from './samples/tabstrip/utility/tabstrip-tooltip';

import { ToasterOverviewSample } from './samples/toaster/toaster-overview';
import { TooltipOverviewSample } from './samples/tooltip/tooltip-overview';

import { TreeGridOverview } from './samples/treegrid/treegrid-overview';
// Data
import { TreeGridAddRowDynamically } from './samples/treegrid/data/treegrid-add-row-dynamically';
// Editing
import { TreeGridBatchEditing } from './samples/treegrid/editing/treegrid-batch-editing';
import { TreeGridFormEditing } from './samples/treegrid/editing/treegrid-form-editing';
import { TreeGridInlineEditing } from './samples/treegrid/editing/treegrid-inline-editing';
// Editors 
import { TreeGridEditorsProgressBar } from './samples/treegrid/editing/editors/treegrid-editors-progressbar';
import { TreeGridEditorsSlider } from './samples/treegrid/editing/editors/treegrid-editors-slider';
// Filtering
import { TreeGridFiltering } from './samples/treegrid/filtering/treegrid-filtering';
import { TreeGridInlineFilter } from './samples/treegrid/filtering/treegrid-inline-filter';
// Layout
import { TreeGridCellTemplates } from './samples/treegrid/layout/treegrid-cell-templates';
import { TreeGridCustomHeaderFooter } from './samples/treegrid/layout/treegrid-custom-header-footer';
import { TreeGridDisabledRows } from './samples/treegrid/layout/treegrid-disabled-rows';
import { TreeGridExpandingColumn } from './samples/treegrid/layout/treegrid-expanding-column';
import { TreeGridFixedColumns } from './samples/treegrid/layout/treegrid-fixed-columns';
// Miscellaneous
import { TreeGridExport } from './samples/treegrid/miscellaneous/treegrid-export';
import { TreeGridVirtualization } from './samples/treegrid/miscellaneous/treegrid-virtualization';
// Pagination
import { TreeGridPagination } from './samples/treegrid/pagination/treegrid-pagination';
// Styling
import { TreeGridHighlightRows } from './samples/treegrid/styling/treegrid-highlight-rows';
// Utility
import { TreeGridContextMenu } from './samples/treegrid/utility/treegrid-context-menu';
import { TreeGridTooltips } from './samples/treegrid/utility/treegrid-tooltips';
//Sorting
import { TreeGridSorting } from './samples/treegrid/sorting/treegrid-sorting';

import { TreeListOverviewSample } from './samples/treelist/treelist-overview';

import { TreeViewOverview } from './samples/treeview/treeview-overview';
import { TreeViewAddRemove } from './samples/treeview/data/treeview-add-remove';
import { TreeViewLoadJSON } from './samples/treeview/data/treeview-load-json';
import { TreeViewExportJSON } from './samples/treeview/data/treeview-export-json';
import { TreeViewLoadOnDemand } from './samples/treeview/data/treeview-load-on-demand';
import { TreeViewDragDropTwoTrees } from './samples/treeview/dragdrop/treeview-dragdrop-two-trees';
import { TreeViewCustomLabelEdit } from './samples/treeview/editing/treeview-custom-label-edit';
import { TreeViewFilteringOverview } from './samples/treeview/filtering/treeview-filtering-overview';
import { TreeViewAutoSized } from './samples/treeview/layout/treeview-autosized';
import { TreeViewCustomContent } from './samples/treeview/layout/treeview-custom-content';
import { TreeViewScrollTo } from './samples/treeview/scrolling/treeview-scroll-to';
import { TreeViewMultiSelect } from './samples/treeview/selection/treeview-multi-select';
import { TreeViewSortingOverview } from './samples/treeview/sorting/treeview-sorting-overview';
import { TreeViewEvenOdd } from './samples/treeview/styling/treeview-evenodd-items';
import { TreeViewHighlight } from './samples/treeview/styling/treeview-highlight';
import { TreeViewCheckBoxes } from './samples/treeview/utility/treeview-checkboxes';
import { TreeViewContexteMenu } from './samples/treeview/utility/treeview-contextmenu';
import { TreeViewCustomExpandBox } from './samples/treeview/utility/treeview-custom-expandbox';
import { TreeViewExpandMouseOver } from './samples/treeview/utility/treeview-expand-mouse-over';
import { TreeViewItemsDropDown } from './samples/treeview/utility/treeview-items-dropdown';
import { TreeViewRadioButtons } from './samples/treeview/utility/treeview-radiobuttons';
import { TreeViewToolbox } from './samples/treeview/utility/treeview-toolbox';
import { TreeViewTooltip } from './samples/treeview/utility/treeview-tooltip';
import { TreeViewFastLoad } from './samples/treeview/virtualization/treeview-fast-load';

import { WindowOverview } from './samples/window/window-overview';

const routes: Routes = [
		{ 
			path: '', component: StartComponent,
            children: [
                { path: 'accordion-overview', component: AccordionOverviewSample },
                { path: 'autocomplete-overview', component: AutoCompleteOverviewSample },
                { path: 'breadcrumb-overview', component: BreadCrumbOverviewSample },
                { path: 'button-overview', component: ButtonOverviewSample },
                { path: 'buttongroup-overview', component: ButtonGroupOverviewSample },
                { path: 'calendar-overview', component: CalendarOverviewSample },
                { path: 'card-overview', component: CardOverview },
                { path: 'checkbox-overview', component: CheckBoxOverviewSample },
                { path: 'contextmenu/overview', component: ContextMenuOverview },
                { path: 'contextmenu/checkbox', component: ContextMenuCheckBoxes },
                { path: 'contextmenu/custom-template', component: ContextMenuCustomTemplate },
                { path: 'contextmenu/header', component: ContextMenuHeader },
                { path: 'contextmenu/multi-level', component: ContextMenuMultiLevel },
                { path: 'contextmenu/radiobuttons', component: ContextMenuRadioButtons },
                { path: 'contextmenu/separator-label', component: ContextMenuSeparatorLabel },
                { path: 'datepicker-overview', component: DatePickerOverviewSample },
                { path: 'dialog-overview', component: DialogOverviewSample },
                { path: 'dockpanel-overview', component: DockPanelOverview },
                { path: 'dropdownbutton-overview', component: DropDownButtonOverview },
                { path: 'grid/overview', component: GridOverview },
                { path: 'grid/data/add-row-dynamically', component: GridAddRowDynamically },
                { path: 'grid/data/dynamic-grouping', component: GridDynamicGrouping },
                { path: 'grid/data/dynamic-update', component: GridDynamicUpdate },
                { path: 'grid/data/export', component: GridExport },
                { path: 'grid/editing/batch-editing', component: GridBatchEditing },
                { path: 'grid/editing/form-editing', component: GridFormEditing },
                { path: 'grid/editing/inline-editing', component: GridInlineEditing },
                { path: 'grid/editing/editors/editors-button', component: GridEditorsButton },
                { path: 'grid/editing/editors/editors-checkbox', component: GridEditorsCheckBox },
                { path: 'grid/editing/editors/editors-datepicker', component: GridEditorsDatePicker },
                { path: 'grid/editing/editors/editors-dropdownlist', component: GridEditorsDropDownList },
                { path: 'grid/editing/editors/editors-image', component: GridEditorsImage },
                { path: 'grid/editing/editors/editors-radiobutton', component: GridEditorsRadioButton },
                { path: 'grid/editing/editors/editors-rating', component: GridEditorsRating },
                { path: 'grid/editing/editors/editors-text', component: GridEditorsText },
                { path: 'grid/filtering/filtering-overview', component: GridFilteringOverview },
                { path: 'grid/filtering/inline-filter', component: GridInlineFilter },
                { path: 'grid/layout/autosize-columns', component: GridAutoSizeColumns },
                { path: 'grid/layout/cell-templates', component: GridCellTemplates },
                { path: 'grid/layout/column-alignment', component: GridColumnAlignment },
                { path: 'grid/layout/fixed-columns', component: GridFixedColumns },
                { path: 'grid/layout/column-fixed-min-max-width', component: GridFixedMinMaxWidth },
                { path: 'grid/layout/window-dynamic-resize', component: GridDynamicResizeWindow },
                { path: 'grid/layout/grid-as-listbox', component: GridAsListBox },
                { path: 'grid/layout/multi-line-headers', component: GridMultiLineHeaders },
                { path: 'grid/layout/row-custom-toolbar', component: GridRowCustomToolbar },
                { path: 'grid/layout/show-hide-columns', component: GridShowHideColumns },
                { path: 'grid/layout/show-hide-header-footer', component: GridShowHideHeaderFooter },
                { path: 'grid/pagination/pagination-overview', component: GridPaginationOverview },
                { path: 'grid/sorting/sorting-overview', component: GridSortingOverview },
                { path: 'grid/sorting/multi-column-sorting', component: GridMultiColumnSorting },
                { path: 'grid/styling/cells-different-colors', component: GridCellsDifferentColors },
                { path: 'grid/styling/columns-different-colors', component: GridColumnsDifferentColors },
                { path: 'grid/styling/rows-different-colors', component: GridRowsDifferentColors },
                { path: 'grid/utility/contextmenu', component: GridContextMenu },
                { path: 'grid/utility/tooltips', component: GridTooltips },
                { path: 'grid/virtualization/fast-load', component: GridFastLoad },
                { path: 'groupbox-overview', component: GroupBoxOverviewSample },
                { path: 'label-overview', component: LabelOverviewSample },
                { path: 'listbar-overview', component: ListBarOverviewSample },
                { path: 'listbox/listbox-overview', component: ListBoxOverview },
                { path: 'listbox/data/listbox-add-remove', component: ListBoxAddRemove },
                { path: 'listbox/data/listbox-export-json', component: ListBoxExportJSON },
                { path: 'listbox/data/listbox-grouping', component: ListBoxGrouping },
                { path: 'listbox/data/listbox-load-json', component: ListBoxLoadJSON },
                { path: 'listbox/dragdrop/listbox-dragdrop-events', component: ListBoxDDEVents },
                { path: 'listbox/dragdrop/listbox-dragdrop-listview', component: ListBoxDDListView },
                { path: 'listbox/dragdrop/listbox-dragdrop-overview', component: ListBoxDDOverview },
                { path: 'listbox/filtering/listbox-filtering-overview', component: ListBoxFilteringOverview },
                { path: 'listbox/layout/listbox-custom-content', component: ListBoxCustomContent },
                { path: 'listbox/scrolling/listbox-scroll-to', component: ListBoxScrollTo },
                { path: 'listbox/selection/listbox-multi-select', component: ListBoxMultiSelect },
                { path: 'listbox/sorting/listbox-sorting-overview', component: ListBoxSortingOverview },
                { path: 'listbox/styling/listbox-evenodd-items', component: ListBoxEvenOdd },
                { path: 'listbox/styling/listbox-highlight', component: ListBoxHighlight },
                { path: 'listbox/utility/listbox-checkboxes', component: ListBoxCheckBoxes },
                { path: 'listbox/utility/listbox-contextmenu', component: ListBoxContexteMenu },
                { path: 'listbox/utility/listbox-tooltip', component: ListBoxTooltip },
                { path: 'listbox/virtualization/listbox-fast-load', component: ListBoxFastLoad },
                { path: 'listgroup-overview', component: ListGroupOverviewSample },
                { path: 'listscroller-overview', component: ListScrollerOverviewSample },
                { path: 'listview/listview-overview', component: ListViewOverview },
                { path: 'listview/data/listview-add-remove', component: ListViewAddRemove },
                { path: 'listview/data/listview-export-json', component: ListViewExportJSON },
                { path: 'listview/data/listview-load-json', component: ListViewLoadJSON },
                { path: 'listview/dragdrop/listview-dragdrop-events', component: ListViewDDEVents },
                { path: 'listview/dragdrop/listview-dragdrop-listbox', component: ListViewDDListBox },
                { path: 'listview/dragdrop/listview-dragdrop-overview', component: ListViewDDOverview },
                { path: 'listview/filtering/listview-filtering-overview', component: ListViewFilteringOverview },
                { path: 'listview/layout/listview-cards', component: ListViewCards },
                { path: 'listview/scrolling/listview-scroll-to', component: ListViewScrollTo },
                { path: 'listview/selection/listview-multi-select', component: ListViewMultiSelect },
                { path: 'listview/sorting/listview-sorting-overview', component: ListViewSortingOverview },
                { path: 'listview/styling/listview-evenodd-items', component: ListViewEvenOdd },
                { path: 'listview/utility/listview-contextmenu', component: ListViewContexteMenu },
                { path: 'listview/utility/listview-tooltip', component: ListViewTooltip },
                { path: 'listview/virtualization/listview-fast-load', component: ListViewFastLoad },
                { path: 'loading/loading-overview', component: LoadingOverview },
                { path: 'menu/overview', component: MenuOverview },
                { path: 'menu/checkbox', component: MenuCheckBox },
                { path: 'menu/custom-template', component: MenuCustomTemplate },
                { path: 'menu/radiobuttons', component: MenuRadioButtons },
                { path: 'menu/separator-label', component: MenuSeparatorLabel },
                { path: 'menu/shortcuts', component: MenuShortcuts },
                { path: 'menu/vertical', component: MenuVertical },
                { path: 'numeric-overview', component: NumericOverviewSample },
                { path: 'paginator-overview', component: PaginatorOverviewSample },
                { path: 'pivotgrid/overview', component: PivotGridOverview },
                { path: 'pivotgrid/export', component: PivotGridExport },
                { path: 'pivotgrid/inclusive-filters', component: PivotGridInclusiveFilters },
                { path: 'pivotgrid/label-filters', component: PivotGridLabelFilters },
                { path: 'pivotgrid/sorting', component: PivotGridSorting },
                { path: 'pivotgrid/value-filters', component: PivotGridValueFilters },
                { path: 'popover-overview', component: PopOverOverviewSample },
                { path: 'progressbar-overview', component: ProgressBarOverviewSample },
                { path: 'radiobutton-overview', component: RadioButtonOverviewSample },
                { path: 'rating-overview', component: RatingOverviewSample },
                { path: 'select-overview', component: SelectOverviewSample },
                { path: 'sidebar/sidebar-overview', component: SideBarOverview },
                { path: 'sidebar/sidebar-alignment', component: SideBarAlignment },
                { path: 'sidebar/sidebar-autohide', component: SideBarAutoHide },
                { path: 'sidebar/sidebar-different-sides', component: SideBarDifferentSides },
                { path: 'sidebar/sidebar-new-tab', component: SideBarNewTab },
                { path: 'sidebar/sidebar-placement', component: SideBarPlacement },
                { path: 'sidebar/sidebar-tooltip', component: SideBarTooltip },
                { path: 'sidepanel/sidepanel-overview', component: SidePanelOverview },
                { path: 'slidebar-overview', component: SlideBarOverviewSample },
                { path: 'slider-overview', component: SliderOverviewSample },
                { path: 'splitcontainer-overview', component: SplitContainerOverviewSample },
                { path: 'splitimage-overview', component: SplitImageOverviewSample },
                { path: 'splitter-overview', component: SplitterOverviewSample },
                { path: 'tabstrip/tabstrip-overview', component: TabStripOverview },
                { path: 'tabstrip/animation/tabstrip-animation-types', component: TabStripAnimationTypes },
                { path: 'tabstrip/data/tabstrip-add-remove', component: TabStripAddRemove },
                { path: 'tabstrip/data/tabstrip-load-json', component: TabStripLoadJSON },
                { path: 'tabstrip/dragdrop/tabstrip-dragdrop-overview', component: TabStripDragDropOverview },
                { path: 'tabstrip/layout/tabstrip-alignment', component: TabStripTabAlignment },
                { path: 'tabstrip/layout/tabstrip-display-mode', component: TabStripDisplayMode },
                { path: 'tabstrip/layout/tabstrip-multiline', component: TabStripMultilineTabs },
                { path: 'tabstrip/layout/tabstrip-orientation', component: TabStripTabOrientation },
                { path: 'tabstrip/layout/tabstrip-placement', component: TabStripPlacement },
                { path: 'tabstrip/layout/tabstrip-spacing', component: TabStripSpacing },
                { path: 'tabstrip/layout/tabstrip-toolbar', component: TabStripToolbar },
                { path: 'tabstrip/scrolling/tabstrip-scroll-mode', component: TabStripScrollMode },
                { path: 'tabstrip/scrolling/tabstrip-scroll-to', component: TabStripScrollTo },
                { path: 'tabstrip/styling/tabstrip-different-colors', component: TabStripDifferentColors },
                { path: 'tabstrip/utility/tabstrip-close-button', component: TabStripCloseButton },
                { path: 'tabstrip/utility/tabstrip-contextmenu', component: TabStripContextMenu },
                { path: 'tabstrip/utility/tabstrip-new-tab', component: TabStripNewTab },
                { path: 'tabstrip/utility/tabstrip-tab-groups', component: TabStripGroups },
                { path: 'tabstrip/utility/tabstrip-tooltip', component: TabStripTooltip },
                { path: 'toaster-overview', component: ToasterOverviewSample },
                { path: 'tooltip-overview', component: TooltipOverviewSample },
                { path: 'treegrid/overview', component: TreeGridOverview },
                { path: 'treegrid/add-row-dynamically', component: TreeGridAddRowDynamically },
                { path: 'treegrid/batch-editing', component: TreeGridBatchEditing },
                { path: 'treegrid/cell-templates', component: TreeGridCellTemplates },
                { path: 'treegrid/contextmenu', component: TreeGridContextMenu },
                { path: 'treegrid/editing/editors/editors-progressbar', component: TreeGridEditorsProgressBar },
                { path: 'treegrid/editing/editors/editors-slider', component: TreeGridEditorsSlider },
                { path: 'treegrid/export', component: TreeGridExport },
                { path: 'treegrid/filtering', component: TreeGridFiltering },
                { path: 'treegrid/fixed-columns', component: TreeGridFixedColumns },
                { path: 'treegrid/form-editing', component: TreeGridFormEditing },
                { path: 'treegrid/inline-editing', component: TreeGridInlineEditing },
                { path: 'treegrid/inline-filter', component: TreeGridInlineFilter },
                { path: 'treegrid/layout/custom-header-footer', component: TreeGridCustomHeaderFooter },
                { path: 'treegrid/layout/disabled-rows', component: TreeGridDisabledRows },
                { path: 'treegrid/layout/expanding-column', component: TreeGridExpandingColumn },
                { path: 'treegrid/pagination', component: TreeGridPagination },
                { path: 'treegrid/sorting', component: TreeGridSorting },
                { path: 'treegrid/styling/highlight-rows', component: TreeGridHighlightRows },
                { path: 'treegrid/tooltips', component: TreeGridTooltips },
                { path: 'treegrid/virtualization', component: TreeGridVirtualization },
                { path: 'treelist-overview', component: TreeListOverviewSample },
                { path: 'treeview/treeview-overview', component: TreeViewOverview },
                { path: 'treeview/data/treeview-add-remove', component: TreeViewAddRemove },
                { path: 'treeview/data/treeview-load-json', component: TreeViewLoadJSON },
                { path: 'treeview/data/treeview-export-json', component: TreeViewExportJSON },
                { path: 'treeview/data/treeview-load-on-demand', component: TreeViewLoadOnDemand },
                { path: 'treeview/dragdrop/treeview-dragdrop-two-trees', component: TreeViewDragDropTwoTrees },
                { path: 'treeview/editing/treeview-custom-label-edit', component: TreeViewCustomLabelEdit },
                { path: 'treeview/filtering/treeview-filtering-overview', component: TreeViewFilteringOverview },
                { path: 'treeview/layout/treeview-autosized', component: TreeViewAutoSized },
                { path: 'treeview/layout/treeview-custom-content', component: TreeViewCustomContent },
                { path: 'treeview/scrolling/treeview-scroll-to', component: TreeViewScrollTo },
                { path: 'treeview/selection/treeview-multi-select', component: TreeViewMultiSelect },
                { path: 'treeview/sorting/treeview-sorting-overview', component: TreeViewSortingOverview },
                { path: 'treeview/styling/treeview-evenodd-items', component: TreeViewEvenOdd },
                { path: 'treeview/styling/treeview-highlight', component: TreeViewHighlight },
                { path: 'treeview/utility/treeview-checkboxes', component: TreeViewCheckBoxes },
                { path: 'treeview/utility/treeview-contextmenu', component: TreeViewContexteMenu },
                { path: 'treeview/utility/treeview-custom-expandbox', component: TreeViewCustomExpandBox },
                { path: 'treeview/utility/treeview-expand-mouse-over', component: TreeViewExpandMouseOver },
                { path: 'treeview/utility/treeview-items-dropdown', component: TreeViewItemsDropDown },
                { path: 'treeview/utility/treeview-radiobuttons', component: TreeViewRadioButtons },
                { path: 'treeview/utility/treeview-toolbox', component: TreeViewToolbox },
                { path: 'treeview/utility/treeview-tooltip', component: TreeViewTooltip },
                { path: 'treeview/virtualization/treeview-fast-load', component: TreeViewFastLoad },
                { path: 'window-overview', component: WindowOverview }
            ]
		}
	];

@NgModule({
  	imports: [
        BrowserModule,
        FormsModule, 
        RouterModule.forRoot(routes)
    ],
    declarations: [ 
        StartComponent,
        AccordionOverviewSample,
        AutoCompleteOverviewSample,
        BreadCrumbOverviewSample,
        ButtonOverviewSample,
        ButtonGroupOverviewSample,
        CalendarOverviewSample,
        CardOverview,
        CheckBoxOverviewSample,
        ContextMenuOverview,
        ContextMenuCheckBoxes,
        ContextMenuCustomTemplate,
        ContextMenuHeader,
        ContextMenuMultiLevel,
        ContextMenuRadioButtons,
        ContextMenuSeparatorLabel,
        DatePickerOverviewSample,
        DialogOverviewSample,
        DockPanelOverview,
        DropDownButtonOverview,
        GridOverview,
        GridAddRowDynamically,
        GridDynamicGrouping,
        GridDynamicUpdate,
        GridExport,
        GridBatchEditing,
        GridFormEditing,
        GridInlineEditing,
        GridEditorsButton,
        GridEditorsCheckBox,
        GridEditorsDatePicker,
        GridEditorsDropDownList,
        GridEditorsImage,
        GridEditorsRadioButton,
        GridEditorsRating,
        GridEditorsText,
        GridFilteringOverview,
        GridInlineFilter,
        GridAsListBox,
        GridAutoSizeColumns,
        GridCellTemplates,
        GridColumnAlignment,
        GridContextMenu,
        GridDynamicResizeWindow,
        GridFixedColumns,
        GridFixedMinMaxWidth,
        GridMultiLineHeaders,
        GridPaginationOverview,
        GridSortingOverview,
        GridMultiColumnSorting,
        GridCellsDifferentColors,
        GridColumnsDifferentColors,
        GridRowCustomToolbar,
        GridRowsDifferentColors,
        GridShowHideColumns,
        GridShowHideHeaderFooter,
        GridTooltips,
        GridFastLoad,
        GroupBoxOverviewSample,
        LabelOverviewSample,
        ListBarOverviewSample,
        ListBoxOverview,
        ListBoxAddRemove,
        ListBoxExportJSON,
        ListBoxGrouping,
        ListBoxLoadJSON,
        ListBoxDDEVents,
        ListBoxDDListView,
        ListBoxDDOverview,
        ListBoxFilteringOverview,
        ListBoxCustomContent,
        ListBoxScrollTo,
        ListBoxMultiSelect,
        ListBoxSortingOverview,
        ListBoxEvenOdd,
        ListBoxHighlight,
        ListBoxCheckBoxes,
        ListBoxContexteMenu,
        ListBoxTooltip,
        ListBoxFastLoad,
        ListGroupOverviewSample,
        ListScrollerOverviewSample,
        ListViewOverview,
        ListViewAddRemove,
        ListViewExportJSON,
        ListViewLoadJSON,
        ListViewDDEVents,
        ListViewDDListBox,
        ListViewDDOverview,
        ListViewFilteringOverview,
        ListViewCards,
        ListViewScrollTo,
        ListViewMultiSelect,
        ListViewSortingOverview,
        ListViewEvenOdd,
        ListViewContexteMenu,
        ListViewTooltip,
        ListViewFastLoad,
        LoadingOverview,
        MenuOverview,
        MenuCheckBox,
        MenuCustomTemplate,
        MenuRadioButtons,
        MenuSeparatorLabel,
        MenuShortcuts,
        MenuVertical,
        NumericOverviewSample,
        PaginatorOverviewSample,
        PivotGridOverview,
        PivotGridExport,
        PivotGridInclusiveFilters,
        PivotGridLabelFilters,
        PivotGridSorting,
        PivotGridValueFilters,
        PopOverOverviewSample,
        ProgressBarOverviewSample,
        RadioButtonOverviewSample,
        RatingOverviewSample,
        SelectOverviewSample,
        SideBarOverview,
        SideBarAlignment,
        SideBarAutoHide,
        SideBarDifferentSides,
        SideBarNewTab,
        SideBarPlacement,
        SideBarTooltip,
        SidePanelOverview,
        SlideBarOverviewSample,
        SliderOverviewSample,
        SplitContainerOverviewSample,
        SplitImageOverviewSample,
        SplitterOverviewSample,
        TabStripOverview,
        TabStripAnimationTypes,
        TabStripAddRemove,
        TabStripCloseButton,
        TabStripContextMenu,
        TabStripDifferentColors,
        TabStripDisplayMode,
        TabStripDragDropOverview,
        TabStripGroups,
        TabStripLoadJSON,
        TabStripNewTab,
        TabStripMultilineTabs,
        TabStripPlacement,
        TabStripTabAlignment,
        TabStripTabOrientation,
        TabStripScrollMode,
        TabStripScrollTo,
        TabStripSpacing,
        TabStripToolbar,
        TabStripTooltip,
        ToasterOverviewSample,
        TooltipOverviewSample,
        TreeGridOverview,
        TreeGridAddRowDynamically,
        TreeGridBatchEditing,
        TreeGridCellTemplates,
        TreeGridContextMenu,
        TreeGridCustomHeaderFooter,
        TreeGridDisabledRows,
        TreeGridEditorsProgressBar,
        TreeGridEditorsSlider,
        TreeGridExpandingColumn,
        TreeGridExport,
        TreeGridFiltering,
        TreeGridFixedColumns,
        TreeGridFormEditing,
        TreeGridInlineEditing,
        TreeGridInlineFilter,
        TreeGridPagination,
        TreeGridSorting,
        TreeGridHighlightRows,
        TreeGridTooltips,
        TreeGridVirtualization,
        TreeListOverviewSample,
        TreeViewOverview,
        TreeViewAddRemove,
        TreeViewLoadJSON,
        TreeViewExportJSON,
        TreeViewLoadOnDemand,
        TreeViewDragDropTwoTrees,
        TreeViewCustomLabelEdit,
        TreeViewFilteringOverview,
        TreeViewAutoSized,
        TreeViewCustomContent,
        TreeViewScrollTo,
        TreeViewMultiSelect,
        TreeViewSortingOverview,
        TreeViewEvenOdd,
        TreeViewHighlight,
        TreeViewCheckBoxes,
        TreeViewContexteMenu,
        TreeViewCustomExpandBox,
        TreeViewExpandMouseOver,
        TreeViewItemsDropDown,
        TreeViewRadioButtons,
        TreeViewToolbox,
        TreeViewTooltip,
        TreeViewFastLoad,
        WindowOverview
    ],
  	exports: [RouterModule],
  	schemas: [CUSTOM_ELEMENTS_SCHEMA],
    providers: [
        { provide: Window, useValue: window }
    ]
})
export class AppRoutingModule { }
