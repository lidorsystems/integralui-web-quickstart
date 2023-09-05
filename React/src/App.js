import React, { Component } from "react";
import { Route, Switch, withRouter } from "react-router-dom";
import './App.css';

import IntegralUITreeListComponent from 'integralui-web/wrappers/react.integralui.treelist.js';
import { IntegralUIComponentAppearance, IntegralUITheme } from 'integralui-web/components/integralui.enums.js';

import AccordionOverview from './samples/accordion/accordion-overview.js';
import AutoCompleteOverview from './samples/autocomplete/autocomplete-overview.js';
import BreadCrumbOverview from './samples/breadcrumb/breadcrumb-overview.js';
import ButtonOverview from './samples/button/button-overview.js';
import ButtonGroupOverview from './samples/buttongroup/buttongroup-overview.js';
import CalendarOverview from './samples/calendar/calendar-overview.js';
import CardOverview from './samples/card/card-overview.js';
import CheckBoxOverview from './samples/checkbox/checkbox-overview.js';

import ContextMenuOverview from './samples/contextmenu/contextmenu-overview.js';
import ContextMenuCheckBoxes from './samples/contextmenu/contextmenu-checkbox.js';
import ContextMenuCustomTemplate from './samples/contextmenu/contextmenu-custom-template.js';
import ContextMenuHeader from './samples/contextmenu/contextmenu-header.js';
import ContextMenuMultiLevel from './samples/contextmenu/contextmenu-multi-level.js';
import ContextMenuRadioButtons from './samples/contextmenu/contextmenu-radiobuttons.js';
import ContextMenuSeparatorLabel from './samples/contextmenu/contextmenu-separator-label.js';

import DatePickerOverview from './samples/datepicker/datepicker-overview.js';
import DialogOverview from './samples/dialog/dialog-overview.js';
import DockPanelOverview from './samples/dockpanel/dockpanel-overview.js';
import DropDownButtonOverview from './samples/dropdownbutton/dropdownbutton-overview.js';


import GridOverview from './samples/grid/grid-overview.js';
// Data
import GridAddRowDynamically from './samples/grid/data/grid-add-row-dynamically.js';
import GridDynamicUpdate from './samples/grid/data/grid-dynamic-update.js';
// Editing
import GridBatchEditing from './samples/grid/editing/grid-batch-editing.js';
import GridFormEditing from './samples/grid/editing/grid-form-editing.js';
import GridInlineEditing from './samples/grid/editing/grid-inline-editing.js';
// Editors 
import GridEditorsButton from './samples/grid/editing/editors/grid-editors-button.js';
import GridEditorsCheckBox from './samples/grid/editing/editors/grid-editors-checkbox.js';
import GridEditorsDatePicker from './samples/grid/editing/editors/grid-editors-datepicker.js';
import GridEditorsDropDownList from './samples/grid/editing/editors/grid-editors-dropdownlist.js';
import GridEditorsImage from './samples/grid/editing/editors/grid-editors-image.js';
import GridEditorsRadioButton from './samples/grid/editing/editors/grid-editors-radiobutton.js';
import GridEditorsRating from './samples/grid/editing/editors/grid-editors-rating.js';
import GridEditorsText from './samples/grid/editing/editors/grid-editors-text.js';
// Filtering
import GridFiltering from './samples/grid/filtering/grid-filtering.js';
import GridInlineFilter from './samples/grid/filtering/grid-inline-filter.js';
// Grouping 
import GridDynamicGrouping from './samples/grid/grouping/grid-dynamic-grouping.js';
// Layout
import GridAutoSizeColumns from './samples/grid/layout/grid-autosize-columns.js';
import GridCellTemplates from './samples/grid/layout/grid-cell-templates.js';
import GridColumnAlignment from './samples/grid/layout/grid-column-alignment.js';
import GridFixedColumns from './samples/grid/layout/grid-fixed-columns.js';
import GridFixedMinMaxWidth from './samples/grid/layout/grid-column-fixed-min-max-width.js';
import GridDynamicResizeWindow from './samples/grid/layout/grid-window-dynamic-resize.js';
import GridAsListBox from './samples/grid/layout/grid-as-listbox.js';
import GridMultiLineHeaders from './samples/grid/layout/grid-multi-line-headers.js';
import GridRowCustomToolbar from './samples/grid/layout/grid-row-custom-toolbar.js';
import GridShowHideColumns from './samples/grid/layout/grid-show-hide-columns.js';
import GridShowHideHeaderFooter from './samples/grid/layout/grid-show-hide-header-footer.js';
// Miscellaneous
import GridExport from './samples/grid/miscellaneous/grid-export.js';
import GridVirtualization from './samples/grid/miscellaneous/grid-virtualization.js';
// Pagination
import GridPagination from './samples/grid/pagination/grid-pagination.js';
//Sorting
import GridSortingOverview from './samples/grid/sorting/grid-sorting-overview.js';
import GridMultiColumnSorting from './samples/grid/sorting/grid-multi-column-sorting.js';
// Styling
import GridCellsDifferentColors from './samples/grid/styling/grid-cells-different-colors.js';
import GridColumnsDifferentColors from './samples/grid/styling/grid-columns-different-colors.js';
import GridRowsDifferentColors from './samples/grid/styling/grid-rows-different-colors.js';
// Utility
import GridContextMenu from './samples/grid/utility/grid-contextmenu.js';
import GridTooltips from './samples/grid/utility/grid-tooltips.js';

import GroupBoxOverview from './samples/groupbox/groupbox-overview.js';
import LabelOverview from './samples/label/label-overview.js';
import ListBarOverview from './samples/listbar/listbar-overview.js';

import ListBoxOverview from './samples/listbox/listbox-overview.js';
import ListBoxAddRemove from './samples/listbox/data/listbox-add-remove.js';
import ListBoxLoadJSON from './samples/listbox/data/listbox-load-json.js';
import ListBoxExportJSON from './samples/listbox/data/listbox-export-json.js';
import ListBoxGrouping from './samples/listbox/data/listbox-grouping.js';
import ListBoxDDEVents from './samples/listbox/dragdrop/listbox-dragdrop-events.js';
import ListBoxDDListView from './samples/listbox/dragdrop/listbox-dragdrop-listview.js';
import ListBoxDDOverview from './samples/listbox/dragdrop/listbox-dragdrop-overview.js';
import ListBoxFilteringOverview from './samples/listbox/filtering/listbox-filtering-overview.js';
import ListBoxCustomContent from './samples/listbox/layout/listbox-custom-content.js';
import ListBoxScrollTo from './samples/listbox/scrolling/listbox-scroll-to.js';
import ListBoxMultiSelect from './samples/listbox/selection/listbox-multi-select.js';
import ListBoxSortingOverview from './samples/listbox/sorting/listbox-sorting-overview.js';
import ListBoxEvenOdd from './samples/listbox/styling/listbox-evenodd-items.js';
import ListBoxHighlight from './samples/listbox/styling/listbox-highlight.js';
import ListBoxCheckBoxes from './samples/listbox/utility/listbox-checkboxes.js';
import ListBoxContexteMenu from './samples/listbox/utility/listbox-contextmenu.js';
import ListBoxTooltip from './samples/listbox/utility/listbox-tooltip.js';
import ListBoxFastLoad from './samples/listbox/virtualization/listbox-fast-load.js';

import ListGroupOverview from './samples/listgroup/listgroup-overview.js';
import ListScrollerOverview from './samples/listscroller/listscroller-overview.js';

import ListViewOverview from './samples/listview/listview-overview.js';
import ListViewAddRemove from './samples/listview/data/listview-add-remove.js';
import ListViewLoadJSON from './samples/listview/data/listview-load-json.js';
import ListViewExportJSON from './samples/listview/data/listview-export-json.js';
import ListViewDDEVents from './samples/listview/dragdrop/listview-dragdrop-events.js';
import ListViewDDListBox from './samples/listview/dragdrop/listview-dragdrop-listbox.js';
import ListViewDDOverview from './samples/listview/dragdrop/listview-dragdrop-overview.js';
import ListViewFilteringOverview from './samples/listview/filtering/listview-filtering-overview.js';
import ListViewCards from './samples/listview/layout/listview-cards.js';
import ListViewScrollTo from './samples/listview/scrolling/listview-scroll-to.js';
import ListViewMultiSelect from './samples/listview/selection/listview-multi-select.js';
import ListViewSortingOverview from './samples/listview/sorting/listview-sorting-overview.js';
import ListViewEvenOdd from './samples/listview/styling/listview-evenodd-items.js';
import ListViewContexteMenu from './samples/listview/utility/listview-contextmenu.js';
import ListViewTooltip from './samples/listview/utility/listview-tooltip.js';
import ListViewFastLoad from './samples/listview/virtualization/listview-fast-load.js';

import LoadingOverview from './samples/loading/loading-overview.js';

import MenuOverview from './samples/menu/menu-overview.js';
import MenuCheckBox from './samples/menu/menu-checkbox.js';
import MenuCustomTemplate from './samples/menu/menu-custom-template.js';
import MenuRadioButtons from './samples/menu/menu-radiobuttons.js';
import MenuSeparatorLabel from './samples/menu/menu-separator-label.js';
import MenuShortcuts from './samples/menu/menu-shortcuts.js';
import MenuVertical from './samples/menu/menu-vertical.js';

import NumericOverview from './samples/numeric/numeric-overview.js';
import PaginatorOverview from './samples/paginator/paginator-overview.js';

import PivotGridOverview from './samples/pivotgrid/pivotgrid-overview.js';
import PivotGridExport from './samples/pivotgrid/pivotgrid-export.js';
import PivotGridInclusiveFilters from './samples/pivotgrid/pivotgrid-inclusive-filters.js';
import PivotGridLabelFilters from './samples/pivotgrid/pivotgrid-label-filters.js';
import PivotGridSorting from './samples/pivotgrid/pivotgrid-sorting.js';
import PivotGridValueFilters from './samples/pivotgrid/pivotgrid-value-filters.js';

import PopOverOverview from './samples/popover/popover-overview.js';
import ProgressBarOverview from './samples/progressbar/progressbar-overview.js';
import RadioButtonOverview from './samples/radiobutton/radiobutton-overview.js';
import RatingOverview from './samples/rating/rating-overview.js';
import SelectOverview from './samples/select/select-overview.js';

import SideBarOverview from './samples/sidebar/sidebar-overview.js';
import SideBarAlignment from './samples/sidebar/sidebar-alignment';
import SideBarAutoHide from './samples/sidebar/sidebar-autohide.js';
import SideBarDifferentSides from './samples/sidebar/sidebar-different-sides.js';
import SideBarPlacement from './samples/sidebar/sidebar-placement.js';
import SideBarNewTab from './samples/sidebar/sidebar-new-tab.js';
import SideBarTooltip from './samples/sidebar/sidebar-tooltip.js';

import SidePanelOverview from './samples/sidepanel/sidepanel-overview.js';
import SliderOverview from './samples/slider/slider-overview.js';
import SlideBarOverview from './samples/slidebar/slidebar-overview.js';
import SplitContainerOverview from './samples/splitcontainer/splitcontainer-overview.js';
import SplitImageOverviewSample from './samples/splitimage/splitimage-overview.js';
import SplitterOverview from './samples/splitter/splitter-overview.js';

import TabStripOverview from './samples/tabstrip/tabstrip-overview.js';
import TabStripAnimationTypes from './samples/tabstrip/animation/tabstrip-animation-types.js';
import TabStripAddRemove from './samples/tabstrip/data/tabstrip-add-remove.js';
import TabStripLoadJSON from './samples/tabstrip/data/tabstrip-load-json.js';
import TabStripDragDropOverview from './samples/tabstrip/dragdrop/tabstrip-dragdrop-overview.js';
import TabStripTabAlignment from './samples/tabstrip/layout/tabstrip-alignment.js';
import TabStripDisplayMode from './samples/tabstrip/layout/tabstrip-display-mode.js';
import TabStripMultilineTabs from './samples/tabstrip/layout/tabstrip-multiline.js';
import TabStripTabOrientation from './samples/tabstrip/layout/tabstrip-orientation.js';
import TabStripPlacement from './samples/tabstrip/layout/tabstrip-placement.js';
import TabStripSpacing from './samples/tabstrip/layout/tabstrip-spacing.js';
import TabStripToolbar from './samples/tabstrip/layout/tabstrip-toolbar.js';
import TabStripScrollMode from './samples/tabstrip/scrolling/tabstrip-scroll-mode.js';
import TabStripScrollTo from './samples/tabstrip/scrolling/tabstrip-scroll-to.js';
import TabStripDifferentColors from './samples/tabstrip/styling/tabstrip-different-colors.js';
import TabStripCloseButton from './samples/tabstrip/utility/tabstrip-close-button.js';
import TabStripContextMenu from './samples/tabstrip/utility/tabstrip-contextmenu.js';
import TabStripNewTab from './samples/tabstrip/utility/tabstrip-new-tab.js';
import TabStripGroups from './samples/tabstrip/utility/tabstrip-tab-groups.js';
import TabStripTooltip from './samples/tabstrip/utility/tabstrip-tooltip.js';

import ToasterOverview from './samples/toaster/toaster-overview.js';
import TooltipOverview from './samples/tooltip/tooltip-overview.js';

import TreeGridOverview from './samples/treegrid/treegrid-overview.js';
// Data
import TreeGridAddRowDynamically from './samples/treegrid/data/treegrid-add-row-dynamically.js';
// Editing
import TreeGridBatchEditing from './samples/treegrid/editing/treegrid-batch-editing.js';
import TreeGridFormEditing from './samples/treegrid/editing/treegrid-form-editing.js';
import TreeGridInlineEditing from './samples/treegrid/editing/treegrid-inline-editing.js';
// Editors 
import TreeGridEditorsProgressBar from './samples/treegrid/editing/editors/treegrid-editors-progressbar.js';
import TreeGridEditorsSlider from './samples/treegrid/editing/editors/treegrid-editors-slider.js';
// Filtering
import TreeGridFiltering from './samples/treegrid/filtering/treegrid-filtering.js';
import TreeGridInlineFilter from './samples/treegrid/filtering/treegrid-inline-filter.js';
// Layout
import TreeGridCellTemplates from './samples/treegrid/layout/treegrid-cell-templates.js';
import TreeGridCustomHeaderFooter from './samples/treegrid/layout/treegrid-custom-header-footer.js';
import TreeGridDisabledRows from './samples/treegrid/layout/treegrid-disabled-rows.js';
import TreeGridExpandingColumn from './samples/treegrid/layout/treegrid-expanding-column.js';
import TreeGridFixedColumns from './samples/treegrid/layout/treegrid-fixed-columns.js';
// Miscellaneous
import TreeGridExport from './samples/treegrid/miscellaneous/treegrid-export.js';
import TreeGridVirtualization from './samples/treegrid/miscellaneous/treegrid-virtualization.js';
// Pagination
import TreeGridPagination from './samples/treegrid/pagination/treegrid-pagination.js';
// Styling
import TreeGridHighlightRows from './samples/treegrid/styling/treegrid-highlight-rows.js';
// Utility
import TreeGridContextMenu from './samples/treegrid/utility/treegrid-context-menu.js';
import TreeGridTooltips from './samples/treegrid/utility/treegrid-tooltips.js';
// Sorting
import TreeGridSorting from './samples/treegrid/sorting/treegrid-sorting.js';

import TreeListOverview from './samples/treelist/treelist-overview.js';

import TreeViewOverview from './samples/treeview/treeview-overview.js';
import TreeViewAddRemove from './samples/treeview/data/treeview-add-remove.js';
import TreeViewLoadJSON from './samples/treeview/data/treeview-load-json.js';
import TreeViewExportJSON from './samples/treeview/data/treeview-export-json.js';
import TreeViewLoadOnDemand from './samples/treeview/data/treeview-load-on-demand.js';
import TreeViewDragDropTwoTrees from './samples/treeview/dragdrop/treeview-dragdrop-two-trees.js';
import TreeViewCustomLabelEdit from './samples/treeview/editing/treeview-custom-label-edit.js';
import TreeViewFilteringOverview from './samples/treeview/filtering/treeview-filtering-overview.js';
import TreeViewAutoSized from './samples/treeview/layout/treeview-autosized.js';
import TreeViewCustomContent from './samples/treeview/layout/treeview-custom-content.js';
import TreeViewScrollTo from './samples/treeview/scrolling/treeview-scroll-to.js';
import TreeViewMultiSelect from './samples/treeview/selection/treeview-multi-select.js';
import TreeViewSortingOverview from './samples/treeview/sorting/treeview-sorting-overview.js';
import TreeViewEvenOdd from './samples/treeview/styling/treeview-evenodd-items.js';
import TreeViewHighlight from './samples/treeview/styling/treeview-highlight.js';
import TreeViewCheckBoxes from './samples/treeview/utility/treeview-checkboxes.js';
import TreeViewContexteMenu from './samples/treeview/utility/treeview-contextmenu.js';
import TreeViewCustomExpandBox from './samples/treeview/utility/treeview-custom-expandbox.js';
import TreeViewExpandMouseOver from './samples/treeview/utility/treeview-expand-mouse-over.js';
import TreeViewItemsDropDown from './samples/treeview/utility/treeview-items-dropdown.js';
import TreeViewRadioButtons from './samples/treeview/utility/treeview-radiobuttons.js';
import TreeViewToolbox from './samples/treeview/utility/treeview-toolbox.js';
import TreeViewTooltip from './samples/treeview/utility/treeview-tooltip.js';
import TreeViewFastLoad from './samples/treeview/virtualization/treeview-fast-load.js';

import WindowOverview from './samples/window/window-overview.js';

class App extends Component {
    constructor(props){
        super(props);

        // General
        this.supressCallback = false;

        // Layout
        this._headerHeight = 95;

        // Navigator
        this.state = {
            ctrlSize: { width: 300, height: 400 },
            currentScrollAppearance: IntegralUIComponentAppearance.Dynamic,
            currentResourcePath: 'integralui-web/icons',
            currentSelection: null,
            currentTheme: IntegralUITheme.Office,
            fullList: [],
            isAnimationAllowed: true,
            treeTitle: "Components",
            treeItems: [
                { text: 'Accordion', link: '/accordion' },
                { text: 'AutoComplete', link: '/autocomplete' },
                { text: 'BreadCrumb', link: '/breadcrumb' },
                { text: 'Button', link: '/button' },
                { text: 'ButtonGroup', link: '/buttongroup' },
                { text: 'Calendar', link: '/calendar' },
                { text: 'Card', link: '/card' },
                { text: 'CheckBox', link: '/checkbox' },
                { 
                    id: 'cmnu',
                    text: 'ContextMenu', 
                    items: [
                        { id: 'cmnu-ovw', pid: 'cmnu', text: 'Overview', link: '/contextmenu/overview' },
                        { id: 'cmnu-cstpl', pid: 'cmnu', text: 'Custom Menu Template', link: '/contextmenu/custom-template' },
                        { id: 'cmnu-cbox', pid: 'cmnu', text: 'Menu with Check Boxes', link: '/contextmenu/checkbox' },
                        { id: 'cmnu-rbtn', pid: 'cmnu', text: 'Menu with Header', link: '/contextmenu/header' },
                        { id: 'cmnu-rbtn', pid: 'cmnu', text: 'Menu with Radio Buttons', link: '/contextmenu/radiobuttons' },
                        { id: 'cmnu-rbtn', pid: 'cmnu', text: 'Multi-Level Context Menu', link: '/contextmenu/multi-level' },
                        { id: 'cmnu-seplbl', pid: 'cmnu', text: 'Separator with Label', link: '/contextmenu/separator-label' }
                    ]
                },
                { text: 'DatePicker', link: '/datepicker' },
                { text: 'Dialog', link: '/dialog' },
                { text: 'DockPanel', link: '/dockpanel' },
                { text: 'DropDownButton', link: '/dropdownbutton' },
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
                                { id: 'grd-dynupd', pid: 'grd-data', text: 'Dynamic Update', link: '/grid/data/dynamic-update' }
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
                            id: 'grd-grouping', 
                            pid: 'grd', 
                            text: 'Grouping', 
                            type: 'group',
                            items: [
                                { id: 'grd-dyngrp', pid: 'grd-grouping', text: 'Dynamic Grouping', link: '/grid/grouping/dynamic-grouping' }
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
                            id: 'grd-filtering', 
                            pid: 'grd', 
                            text: 'Filtering', 
                            type: 'group',
                            items: [
                                { id: 'grd-fltr', pid: 'grd-filtering', text: 'Filtering', link: '/grid/filtering/filtering-overview' },
                                { id: 'grd-inflt', pid: 'grd-filtering', text: 'Inline Filter', link: '/grid/filtering/inline-filter' }
                            ]
                        },
                        { 
                            id: 'grd-misc', 
                            pid: 'grd', 
                            text: 'Miscellaneous', 
                            type: 'group',
                            items: [
                                { id: 'grd-expt', pid: 'grd-misc', text: 'Export', link: '/grid/miscellaneous/export' },
                                { id: 'grd-virt', pid: 'grd-misc', text: 'Virtualization', link: '/grid/miscellaneous/virtualization' }
                            ]
                        },
                        { 
                            id: 'grd-sorting', 
                            pid: 'grd', 
                            text: 'Sorting', 
                            type: 'group',
                            items: [
                                { id: 'grd-sort', pid: 'grd-sorting', text: 'Overview', link: '/grid/sorting/sorting-overview' },
                                { id: 'grd-multi-sort', pid: 'grd-sorting', text: 'Multi Column Sorting', link: '/grid/sorting/multi-column-sorting' }
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
                        }
                    ]
                },
                { text: 'GroupBox', link: '/groupbox' },
                { text: 'Label', link: '/label' },
                { text: 'ListBar', link: '/listbar' },
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
                { text: 'ListGroup', link: '/listgroup' },
                { text: 'ListScroller', link: '/listscroller' },
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
                { text: 'Loading', link: '/loading/overview' },
                { 
                    id: 'mnu',
                    text: 'Menu', 
                    items: [
                        { id: 'mnu-ovw', pid: 'mnu', text: 'Overview', link: '/menu/overview' },
                        { id: 'mnu-cstpl', pid: 'mnu', text: 'Custom Menu Template', link: '/menu/custom-template' },
                        { id: 'mnu-cbox', pid: 'mnu', text: 'Menu with Check Boxes', link: '/menu/checkbox' },
                        { id: 'mnu-rbtn', pid: 'mnu', text: 'Menu with Radio Buttons', link: '/menu/radiobuttons' },
                        { id: 'mnu-shcut', pid: 'mnu', text: 'Menu with Shortcuts', link: '/menu/shortcuts' },
                        { id: 'mnu-seplbl', pid: 'mnu', text: 'Separator with Label', link: '/menu/separator-label' },
                        { id: 'mnu-vert', pid: 'mnu', text: 'Vertical Menu', link: '/menu/vertical' }
                    ]
                },
                { text: 'Numeric', link: '/numeric' },
                { text: 'Paginator', link: '/paginator' },
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
                { text: 'PopOver', link: '/popover' },
                { text: 'ProgressBar', link: '/progressbar' },
                { text: 'RadioButton', link: '/radiobutton' },
                { text: 'Rating', link: '/rating' },
                { text: 'Select', link: '/select' },
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
                { text: 'SidePanel', link: '/sidepanel/overview' },
                { text: 'Slider', link: '/slider' },
                { text: 'SlideBar', link: '/slidebar' },
                { text: 'SplitContainer', link: '/splitcontainer' },
                { text: 'SplitImage', link: '/splitimage' },
                { text: 'Splitter', link: '/splitter' },
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
                { text: 'Toaster', link: '/toaster' },
                { text: 'Tooltip', link: '/tooltip' },
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
                                { id: 'trgd-bhedt', pid: 'trgd-editing', text: 'Batch Editing', link: '/treegrid/editing/batch-editing' },
                                { id: 'trgd-frmedt', pid: 'trgd-editing', text: 'Form Editing', link: '/treegrid/editing/form-editing' },
                                { id: 'trgd-inedt', pid: 'trgd-editing', text: 'Inline Editing', link: '/treegrid/editing/inline-editing' },
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
                { text: 'TreeList', link: '/treelist' },
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
                { text: 'Window', link: '/window' }
            ]
        }

        this.createFullList(this.state.treeItems, this.state.fullList);

        // References
        this._navTree = React.createRef();
    }

    componentDidMount(){ 
        let self = this;
        //self.unlistenRouteChange = this.props.history.listen((location, action) => {
            //self.supressCallback = true;
            
            //let currentItem = self._getTreeItem(location.pathname);
            //if (self.state.currentSelection !== currentItem){
                //self.setState({ currentSelection: currentItem });
                //self._navTree.current.updateLayout();
            //}
        //});

        self.updateLayout();
    }

    componentWillUnmount(){
        //this.unlistenRouteChange();
    }

    createFullList(list, result){
        if (list && list.length > 0)
            list.forEach(item => {
                result.push(item);

                if (item.items)
                    this.createFullList(item.items, result);
            });
    }

    _getTreeItem(path){
        let filtered = this.state.fullList.filter(item => item.link === path);

        return filtered.length > 0 ? filtered[0] : null;
    }

    _treeAfterSelect(e){
        if (e.detail.item && !this.supressCallback)
            this.props.history.push(e.detail.item.link);

        this.supressCallback = false;
    }

    // Layout ------------------------------------------------------------------------------------

    updateLayout(){
        this.setState({ 
            ctrlSize: { width: 300, height: window.innerHeight - this._headerHeight },
            currentSelection: this.state.fullList[0]
        });
    }
 
    // Update ------------------------------------------------------------------------------------
   
    render() {
        return (
                <div>
                    <div className="header">
                        <div className="header-block">
                            <div className="header-content">
                                <h1><span className="code-name">IntegralUI</span> Web <span className="header-title">for React</span></h1>
                            </div>
                        </div>
                    </div>
                    <hr className="head-separator" />
                    <div className="navigator-tree">
                        <IntegralUITreeListComponent id="nav-tree" ref={this._navTree}
                            title={this.state.treeTitle} 
                            items={this.state.treeItems} 
                            allowAnimation={this.state.isAnimationAllowed} 
                            resourcePath={this.state.currentResourcePath} 
                            scrollAppearance={this.state.currentScrollAppearance}
                            selectedItem={this.state.currentSelection}
                            size={this.state.ctrlSize} 
                            theme={this.state.currentTheme} 
                            afterSelect={(e) => this._treeAfterSelect(e)}>
                        </IntegralUITreeListComponent>
                    </div>
                    <div className="feature">
                        <Switch>
                            <Route path="/accordion"><AccordionOverview /></Route>
                            <Route path="/autocomplete"><AutoCompleteOverview /></Route>
                            <Route path="/breadcrumb"><BreadCrumbOverview /></Route>
                            <Route path="/button"><ButtonOverview /></Route>
                            <Route path="/buttongroup"><ButtonGroupOverview /></Route>
                            <Route path="/calendar"><CalendarOverview /></Route>
                            <Route path="/card"><CardOverview /></Route>
                            <Route path="/checkbox"><CheckBoxOverview /></Route>
                            <Route path="/contextmenu/overview"><ContextMenuOverview /></Route>
                            <Route path="/contextmenu/checkbox"><ContextMenuCheckBoxes /></Route>
                            <Route path="/contextmenu/custom-template"><ContextMenuCustomTemplate /></Route>
                            <Route path="/contextmenu/header"><ContextMenuHeader /></Route>
                            <Route path="/contextmenu/multi-level"><ContextMenuMultiLevel /></Route>
                            <Route path="/contextmenu/radiobuttons"><ContextMenuRadioButtons /></Route>
                            <Route path="/contextmenu/separator-label"><ContextMenuSeparatorLabel /></Route>
                            <Route path="/datepicker"><DatePickerOverview /></Route>
                            <Route path="/dialog"><DialogOverview /></Route>
                            <Route path="/dockpanel"><DockPanelOverview /></Route>
                            <Route path="/dropdownbutton"><DropDownButtonOverview /></Route>
                            <Route path="/grid/overview"><GridOverview /></Route>
                            <Route path="/grid/data/add-row-dynamically"><GridAddRowDynamically /></Route>
                            <Route path="/grid/data/dynamic-update"><GridDynamicUpdate /></Route>
                            <Route path="/grid/editing/batch-editing"><GridBatchEditing /></Route>
                            <Route path="/grid/editing/form-editing"><GridFormEditing /></Route>
                            <Route path="/grid/editing/inline-editing"><GridInlineEditing /></Route>
                            <Route path="/grid/editing/editors/editors-button"><GridEditorsButton /></Route>
                            <Route path="/grid/editing/editors/editors-checkbox"><GridEditorsCheckBox /></Route>
                            <Route path="/grid/editing/editors/editors-datepicker"><GridEditorsDatePicker /></Route>
                            <Route path="/grid/editing/editors/editors-dropdownlist"><GridEditorsDropDownList /></Route>
                            <Route path="/grid/editing/editors/editors-image"><GridEditorsImage /></Route>
                            <Route path="/grid/editing/editors/editors-radiobutton"><GridEditorsRadioButton /></Route>
                            <Route path="/grid/editing/editors/editors-rating"><GridEditorsRating /></Route>
                            <Route path="/grid/editing/editors/editors-text"><GridEditorsText /></Route>
                            <Route path="/grid/grouping/dynamic-grouping"><GridDynamicGrouping /></Route>
                            <Route path="/grid/filtering/filtering-overview"><GridFiltering /></Route>
                            <Route path="/grid/filtering/inline-filter"><GridInlineFilter /></Route>
                            <Route path="/grid/layout/autosize-columns"><GridAutoSizeColumns /></Route>
                            <Route path="/grid/layout/cell-templates"><GridCellTemplates /></Route>
                            <Route path="/grid/layout/column-alignment"><GridColumnAlignment /></Route>
                            <Route path="/grid/layout/fixed-columns"><GridFixedColumns /></Route>
                            <Route path="/grid/layout/column-fixed-min-max-width"><GridFixedMinMaxWidth /></Route>
                            <Route path="/grid/layout/window-dynamic-resize"><GridDynamicResizeWindow /></Route>
                            <Route path="/grid/layout/grid-as-listbox"><GridAsListBox /></Route>
                            <Route path="/grid/layout/multi-line-headers"><GridMultiLineHeaders /></Route>
                            <Route path="/grid/layout/row-custom-toolbar"><GridRowCustomToolbar /></Route>
                            <Route path="/grid/layout/show-hide-columns"><GridShowHideColumns /></Route>
                            <Route path="/grid/layout/show-hide-header-footer"><GridShowHideHeaderFooter /></Route>
                            <Route path="/grid/miscellaneous/export"><GridExport /></Route>
                            <Route path="/grid/miscellaneous/virtualization"><GridVirtualization /></Route>
                            <Route path="/grid/pagination/pagination-overview"><GridPagination /></Route>
                            <Route path="/grid/sorting/sorting-overview"><GridSortingOverview /></Route>
                            <Route path="/grid/sorting/multi-column-sorting"><GridMultiColumnSorting /></Route>
                            <Route path="/grid/styling/cells-different-colors"><GridCellsDifferentColors /></Route>
                            <Route path="/grid/styling/columns-different-colors"><GridColumnsDifferentColors /></Route>
                            <Route path="/grid/styling/rows-different-colors"><GridRowsDifferentColors /></Route>
                            <Route path="/grid/utility/contextmenu"><GridContextMenu /></Route>
                            <Route path="/grid/utility/tooltips"><GridTooltips /></Route>
                            <Route path="/groupbox"><GroupBoxOverview /></Route>
                            <Route path="/label"><LabelOverview /></Route>
                            <Route path="/listbar"><ListBarOverview /></Route>
                            <Route path="/listbox/listbox-overview"><ListBoxOverview /></Route>
                            <Route path="/listbox/data/listbox-add-remove"><ListBoxAddRemove /></Route>
                            <Route path="/listbox/data/listbox-load-json"><ListBoxLoadJSON /></Route>
                            <Route path="/listbox/data/listbox-export-json"><ListBoxExportJSON /></Route>
                            <Route path="/listbox/data/listbox-grouping"><ListBoxGrouping /></Route>
                            <Route path="/listbox/dragdrop/listbox-dragdrop-events"><ListBoxDDEVents /></Route>
                            <Route path="/listbox/dragdrop/listbox-dragdrop-listview"><ListBoxDDListView /></Route>
                            <Route path="/listbox/dragdrop/listbox-dragdrop-overview"><ListBoxDDOverview /></Route>
                            <Route path="/listbox/filtering/listbox-filtering-overview"><ListBoxFilteringOverview /></Route>
                            <Route path="/listbox/layout/listbox-custom-content"><ListBoxCustomContent /></Route>
                            <Route path="/listbox/scrolling/listbox-scroll-to"><ListBoxScrollTo /></Route>
                            <Route path="/listbox/selection/listbox-multi-select"><ListBoxMultiSelect /></Route>
                            <Route path="/listbox/sorting/listbox-sorting-overview"><ListBoxSortingOverview /></Route>
                            <Route path="/listbox/styling/listbox-evenodd-items"><ListBoxEvenOdd /></Route>
                            <Route path="/listbox/styling/listbox-highlight"><ListBoxHighlight /></Route>
                            <Route path="/listbox/utility/listbox-checkboxes"><ListBoxCheckBoxes /></Route>
                            <Route path="/listbox/utility/listbox-contextmenu"><ListBoxContexteMenu /></Route>
                            <Route path="/listbox/utility/listbox-tooltip"><ListBoxTooltip /></Route>
                            <Route path="/listbox/virtualization/listbox-fast-load"><ListBoxFastLoad /></Route>
                            <Route path="/listgroup"><ListGroupOverview /></Route>
                            <Route path="/listscroller"><ListScrollerOverview /></Route>
                            <Route path="/listview/listview-overview"><ListViewOverview /></Route>
                            <Route path="/listview/data/listview-add-remove"><ListViewAddRemove /></Route>
                            <Route path="/listview/data/listview-load-json"><ListViewLoadJSON /></Route>
                            <Route path="/listview/data/listview-export-json"><ListViewExportJSON /></Route>
                            <Route path="/listview/dragdrop/listview-dragdrop-events"><ListViewDDEVents /></Route>
                            <Route path="/listview/dragdrop/listview-dragdrop-listbox"><ListViewDDListBox /></Route>
                            <Route path="/listview/dragdrop/listview-dragdrop-overview"><ListViewDDOverview /></Route>
                            <Route path="/listview/filtering/listview-filtering-overview"><ListViewFilteringOverview /></Route>
                            <Route path="/listview/layout/listview-cards"><ListViewCards /></Route>
                            <Route path="/listview/scrolling/listview-scroll-to"><ListViewScrollTo /></Route>
                            <Route path="/listview/selection/listview-multi-select"><ListViewMultiSelect /></Route>
                            <Route path="/listview/sorting/listview-sorting-overview"><ListViewSortingOverview /></Route>
                            <Route path="/listview/styling/listview-evenodd-items"><ListViewEvenOdd /></Route>
                            <Route path="/listview/utility/listview-contextmenu"><ListViewContexteMenu /></Route>
                            <Route path="/listview/utility/listview-tooltip"><ListViewTooltip /></Route>
                            <Route path="/listview/virtualization/listview-fast-load"><ListViewFastLoad /></Route>
                            <Route path="/loading/overview"><LoadingOverview /></Route>
                            <Route path="/menu/overview"><MenuOverview /></Route>
                            <Route path="/menu/checkbox"><MenuCheckBox /></Route>
                            <Route path="/menu/custom-template"><MenuCustomTemplate /></Route>
                            <Route path="/menu/radiobuttons"><MenuRadioButtons /></Route>
                            <Route path="/menu/separator-label"><MenuSeparatorLabel /></Route>
                            <Route path="/menu/shortcuts"><MenuShortcuts /></Route>
                            <Route path="/menu/vertical"><MenuVertical /></Route>
                            <Route path="/numeric"><NumericOverview /></Route>
                            <Route path="/paginator"><PaginatorOverview /></Route>
                            <Route path="/pivotgrid/overview"><PivotGridOverview /></Route>
                            <Route path="/pivotgrid/export"><PivotGridExport /></Route>
                            <Route path="/pivotgrid/inclusive-filters"><PivotGridInclusiveFilters /></Route>
                            <Route path="/pivotgrid/label-filters"><PivotGridLabelFilters /></Route>
                            <Route path="/pivotgrid/sorting"><PivotGridSorting /></Route>
                            <Route path="/pivotgrid/value-filters"><PivotGridValueFilters /></Route>
                            <Route path="/popover"><PopOverOverview /></Route>
                            <Route path="/progressbar"><ProgressBarOverview /></Route>
                            <Route path="/radiobutton"><RadioButtonOverview /></Route>
                            <Route path="/rating"><RatingOverview /></Route>
                            <Route path="/select"><SelectOverview /></Route>
                            <Route path="/sidebar/sidebar-overview"><SideBarOverview /></Route>
                            <Route path="/sidebar/sidebar-alignment"><SideBarAlignment /></Route>
                            <Route path="/sidebar/sidebar-autohide"><SideBarAutoHide /></Route>
                            <Route path="/sidebar/sidebar-different-sides"><SideBarDifferentSides /></Route>
                            <Route path="/sidebar/sidebar-placement"><SideBarPlacement /></Route>
                            <Route path="/sidebar/sidebar-new-tab"><SideBarNewTab /></Route>
                            <Route path="/sidebar/sidebar-tooltip"><SideBarTooltip /></Route>
                            <Route path="/sidepanel/overview"><SidePanelOverview /></Route>
                            <Route path="/slider"><SliderOverview /></Route>
                            <Route path="/slidebar"><SlideBarOverview /></Route>
                            <Route path="/splitcontainer"><SplitContainerOverview /></Route>
                            <Route path="/splitimage"><SplitImageOverviewSample /></Route>
                            <Route path="/splitter"><SplitterOverview /></Route>
                            <Route path="/tabstrip/tabstrip-overview"><TabStripOverview /></Route>
                            <Route path="/tabstrip/animation/tabstrip-animation-types"><TabStripAnimationTypes /></Route>
                            <Route path="/tabstrip/data/tabstrip-add-remove"><TabStripAddRemove /></Route>
                            <Route path="/tabstrip/data/tabstrip-load-json"><TabStripLoadJSON /></Route>
                            <Route path="/tabstrip/dragdrop/tabstrip-dragdrop-overview"><TabStripDragDropOverview /></Route>
                            <Route path="/tabstrip/layout/tabstrip-alignment"><TabStripTabAlignment /></Route>
                            <Route path="/tabstrip/layout/tabstrip-display-mode"><TabStripDisplayMode /></Route>
                            <Route path="/tabstrip/layout/tabstrip-multiline"><TabStripMultilineTabs /></Route>
                            <Route path="/tabstrip/layout/tabstrip-orientation"><TabStripTabOrientation /></Route>
                            <Route path="/tabstrip/layout/tabstrip-placement"><TabStripPlacement /></Route>
                            <Route path="/tabstrip/layout/tabstrip-spacing"><TabStripSpacing /></Route>
                            <Route path="/tabstrip/layout/tabstrip-toolbar"><TabStripToolbar /></Route>
                            <Route path="/tabstrip/scrolling/tabstrip-scroll-mode"><TabStripScrollMode /></Route>
                            <Route path="/tabstrip/scrolling/tabstrip-scroll-to"><TabStripScrollTo /></Route>
                            <Route path="/tabstrip/styling/tabstrip-different-colors"><TabStripDifferentColors /></Route>
                            <Route path="/tabstrip/utility/tabstrip-close-button"><TabStripCloseButton /></Route>
                            <Route path="/tabstrip/utility/tabstrip-contextmenu"><TabStripContextMenu /></Route>
                            <Route path="/tabstrip/utility/tabstrip-new-tab"><TabStripNewTab /></Route>
                            <Route path="/tabstrip/utility/tabstrip-tab-groups"><TabStripGroups /></Route>
                            <Route path="/tabstrip/utility/tabstrip-tooltip"><TabStripTooltip /></Route>
                            <Route path="/toaster"><ToasterOverview /></Route>
                            <Route path="/tooltip"><TooltipOverview /></Route>
                            <Route path="/treegrid/overview"><TreeGridOverview /></Route>
                            <Route path="/treegrid/add-row-dynamically"><TreeGridAddRowDynamically /></Route>
                            <Route path="/treegrid/editing/batch-editing"><TreeGridBatchEditing /></Route>
                            <Route path="/treegrid/editing/form-editing"><TreeGridFormEditing /></Route>
                            <Route path="/treegrid/editing/inline-editing"><TreeGridInlineEditing /></Route>
                            <Route path="/treegrid/editing/editors/editors-progressbar"><TreeGridEditorsProgressBar /></Route>
                            <Route path="/treegrid/editing/editors/editors-slider"><TreeGridEditorsSlider /></Route>
                            <Route path="/treegrid/cell-templates"><TreeGridCellTemplates /></Route>
                            <Route path="/treegrid/contextmenu"><TreeGridContextMenu /></Route>
                            <Route path="/treegrid/export"><TreeGridExport /></Route>
                            <Route path="/treegrid/filtering"><TreeGridFiltering /></Route>
                            <Route path="/treegrid/fixed-columns"><TreeGridFixedColumns /></Route>
                            <Route path="/treegrid/inline-filter"><TreeGridInlineFilter /></Route>
                            <Route path="/treegrid/layout/custom-header-footer"><TreeGridCustomHeaderFooter /></Route>
                            <Route path="/treegrid/layout/disabled-rows"><TreeGridDisabledRows /></Route>
                            <Route path="/treegrid/layout/expanding-column"><TreeGridExpandingColumn /></Route>
                            <Route path="/treegrid/pagination"><TreeGridPagination /></Route>
                            <Route path="/treegrid/sorting"><TreeGridSorting /></Route>
                            <Route path="/treegrid/styling/highlight-rows"><TreeGridHighlightRows /></Route>
                            <Route path="/treegrid/tooltips"><TreeGridTooltips /></Route>
                            <Route path="/treegrid/virtualization"><TreeGridVirtualization /></Route>
                            <Route path="/treelist"><TreeListOverview /></Route>
                            <Route path="/treeview/treeview-overview"><TreeViewOverview /></Route>
                            <Route path="/treeview/data/treeview-add-remove"><TreeViewAddRemove /></Route>
                            <Route path="/treeview/data/treeview-load-json"><TreeViewLoadJSON /></Route>
                            <Route path="/treeview/data/treeview-export-json"><TreeViewExportJSON /></Route>
                            <Route path="/treeview/data/treeview-load-on-demand"><TreeViewLoadOnDemand /></Route>
                            <Route path="/treeview/dragdrop/treeview-dragdrop-two-trees"><TreeViewDragDropTwoTrees /></Route>
                            <Route path="/treeview/editing/treeview-custom-label-edit"><TreeViewCustomLabelEdit /></Route>
                            <Route path="/treeview/filtering/treeview-filtering-overview"><TreeViewFilteringOverview /></Route>
                            <Route path="/treeview/layout/treeview-autosized"><TreeViewAutoSized /></Route>
                            <Route path="/treeview/layout/treeview-custom-content"><TreeViewCustomContent /></Route>
                            <Route path="/treeview/scrolling/treeview-scroll-to"><TreeViewScrollTo /></Route>
                            <Route path="/treeview/selection/treeview-multi-select"><TreeViewMultiSelect /></Route>
                            <Route path="/treeview/sorting/treeview-sorting-overview"><TreeViewSortingOverview /></Route>
                            <Route path="/treeview/styling/treeview-evenodd-items"><TreeViewEvenOdd /></Route>
                            <Route path="/treeview/styling/treeview-highlight"><TreeViewHighlight /></Route>
                            <Route path="/treeview/utility/treeview-checkboxes"><TreeViewCheckBoxes /></Route>
                            <Route path="/treeview/utility/treeview-contextmenu"><TreeViewContexteMenu /></Route>
                            <Route path="/treeview/utility/treeview-custom-expandbox"><TreeViewCustomExpandBox /></Route>
                            <Route path="/treeview/utility/treeview-expand-mouse-over"><TreeViewExpandMouseOver /></Route>
                            <Route path="/treeview/utility/treeview-items-dropdown"><TreeViewItemsDropDown /></Route>
                            <Route path="/treeview/utility/treeview-radiobuttons"><TreeViewRadioButtons /></Route>
                            <Route path="/treeview/utility/treeview-toolbox"><TreeViewToolbox /></Route>
                            <Route path="/treeview/utility/treeview-tooltip"><TreeViewTooltip /></Route>
                            <Route path="/treeview/virtualization/treeview-fast-load"><TreeViewFastLoad /></Route>
                            <Route path="/window"><WindowOverview /></Route>
                       </Switch>
                    </div>
                </div>
        );
    }
}

export default withRouter(App);
