import React, { Component } from "react";
import { Route, Switch, withRouter } from "react-router-dom";
import './App.css';

import IntegralUITreeListComponent from 'integralui-web/wrappers/react.integralui.treelist.js';
import { IntegralUITheme } from 'integralui-web/components/integralui.enums.js';

import AccordionOverview from './samples/accordion/accordion-overview.js';
import AutoCompleteOverview from './samples/autocomplete/autocomplete-overview.js';
import BreadCrumbOverview from './samples/breadcrumb/breadcrumb-overview.js';
import ButtonOverview from './samples/button/button-overview.js';
import ButtonGroupOverview from './samples/buttongroup/buttongroup-overview.js';
import CalendarOverview from './samples/calendar/calendar-overview.js';
import CheckBoxOverview from './samples/checkbox/checkbox-overview.js';
import ContextMenuOverview from './samples/contextmenu/contextmenu-overview.js';
import DatePickerOverview from './samples/datepicker/datepicker-overview.js';
import DialogOverview from './samples/dialog/dialog-overview.js';

import GridOverview from './samples/grid/grid-overview.js';
import GridAddRowDynamically from './samples/grid/grid-add-row-dynamically.js';
import GridBuiltInEditors from './samples/grid/grid-builtin-editors.js';
import GridCellTemplates from './samples/grid/grid-cell-templates.js';
import GridContextMenu from './samples/grid/grid-context-menu.js';
import GridDynamicGrouping from './samples/grid/grid-dynamic-grouping.js';
import GridExport from './samples/grid/grid-export.js';
import GridFiltering from './samples/grid/grid-filtering.js';
import GridFixedColumns from './samples/grid/grid-fixed-columns.js';
import GridPagination from './samples/grid/grid-pagination.js';
import GridSorting from './samples/grid/grid-sorting.js';
import GridTooltips from './samples/grid/grid-tooltips.js';
import GridVirtualization from './samples/grid/grid-virtualization.js';

import GroupBoxOverview from './samples/groupbox/groupbox-overview.js';
import ListBarOverview from './samples/listbar/listbar-overview.js';
import ListBoxOverview from './samples/listbox/listbox-overview.js';
import ListGroupOverview from './samples/listgroup/listgroup-overview.js';
import ListScrollerOverview from './samples/listscroller/listscroller-overview.js';
import ListViewOverview from './samples/listview/listview-overview.js';
import MenuOverview from './samples/menu/menu-overview.js';
import NumericOverview from './samples/numeric/numeric-overview.js';
import PaginatorOverview from './samples/paginator/paginator-overview.js';
import PopOverOverview from './samples/popover/popover-overview.js';
import ProgressBarOverview from './samples/progressbar/progressbar-overview.js';
import RadioButtonOverview from './samples/radiobutton/radiobutton-overview.js';
import RatingOverview from './samples/rating/rating-overview.js';
import SelectOverview from './samples/select/select-overview.js';
import SideBarOverview from './samples/sidebar/sidebar-overview.js';
import SliderOverview from './samples/slider/slider-overview.js';
import SlideBarOverview from './samples/slidebar/slidebar-overview.js';
import SplitContainerOverview from './samples/splitcontainer/splitcontainer-overview.js';
import SplitterOverview from './samples/splitter/splitter-overview.js';

import TabStripOverview from './samples/tabstrip/tabstrip-overview.js';
import TabStripCloseButton from './samples/tabstrip/utility/tabstrip-close-button.js';
import TabStripNewTab from './samples/tabstrip/utility/tabstrip-new-tab.js';
import TabStripToolbar from './samples/tabstrip/layout/tabstrip-toolbar.js';

import TooltipOverview from './samples/tooltip/tooltip-overview.js';

import TreeGridOverview from './samples/treegrid/treegrid-overview.js';
import TreeGridAddRowDynamically from './samples/treegrid/treegrid-add-row-dynamically.js';
import TreeGridBuiltInEditors from './samples/treegrid/treegrid-builtin-editors.js';
import TreeGridCellTemplates from './samples/treegrid/treegrid-cell-templates.js';
import TreeGridContextMenu from './samples/treegrid/treegrid-context-menu.js';
import TreeGridExport from './samples/treegrid/treegrid-export.js';
import TreeGridFiltering from './samples/treegrid/treegrid-filtering.js';
import TreeGridFixedColumns from './samples/treegrid/treegrid-fixed-columns.js';
import TreeGridPagination from './samples/treegrid/treegrid-pagination.js';
import TreeGridSorting from './samples/treegrid/treegrid-sorting.js';
import TreeGridTooltips from './samples/treegrid/treegrid-tooltips.js';
import TreeGridVirtualization from './samples/treegrid/treegrid-virtualization.js';

import TreeListOverview from './samples/treelist/treelist-overview.js';

import TreeViewOverview from './samples/treeview/treeview-overview.js';
import TreeViewDragDropTwoTrees from './samples/treeview/drag-drop/treeview-drag-drop-two-trees.js';
import TreeViewLoadJSON from './samples/treeview/data/treeview-load-json.js';
import TreeViewLoadOnDemand from './samples/treeview/data/treeview-load-on-demand.js';
import TreeViewCheckBoxes from './samples/treeview/utility/treeview-checkboxes.js';

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
                { text: 'CheckBox', link: '/checkbox' },
                { text: 'ContextMenu', link: '/contextmenu' },
                { text: 'DatePicker', link: '/datepicker' },
                { text: 'Dialog', link: '/dialog' },
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
                                { text: 'GroupBox', link: '/groupbox' },
                { text: 'ListBar', link: '/listbar' },
                { text: 'ListBox', link: '/listbox' },
                { text: 'ListGroup', link: '/listgroup' },
                { text: 'ListScroller', link: '/listscroller' },
                { text: 'ListView', link: '/listview' },
                { text: 'Menu', link: '/menu' },
                { text: 'Numeric', link: '/numeric' },
                { text: 'Paginator', link: '/paginator' },
                { text: 'PopOver', link: '/popover' },
                { text: 'ProgressBar', link: '/progressbar' },
                { text: 'RadioButton', link: '/radiobutton' },
                { text: 'Rating', link: '/rating' },
                { text: 'Select', link: '/select' },
                { text: 'SideBar', link: '/sidebar' },
                { text: 'Slider', link: '/slider' },
                { text: 'SlideBar', link: '/slidebar' },
                { text: 'SplitContainer', link: '/splitcontainer' },
                { text: 'Splitter', link: '/splitter' },
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
                { text: 'Tooltip', link: '/tooltip' },
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
                { text: 'TreeList', link: '/treelist' },
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
                            <Route path="/checkbox"><CheckBoxOverview /></Route>
                            <Route path="/contextmenu"><ContextMenuOverview /></Route>
                            <Route path="/datepicker"><DatePickerOverview /></Route>
                            <Route path="/dialog"><DialogOverview /></Route>
                            <Route path="/grid/overview"><GridOverview /></Route>
                            <Route path="/grid/add-row-dynamically"><GridAddRowDynamically /></Route>
                            <Route path="/grid/builtin-editors"><GridBuiltInEditors /></Route>
                            <Route path="/grid/cell-templates"><GridCellTemplates /></Route>
                            <Route path="/grid/contextmenu"><GridContextMenu /></Route>
                            <Route path="/grid/dynamic-grouping"><GridDynamicGrouping /></Route>
                            <Route path="/grid/export"><GridExport /></Route>
                            <Route path="/grid/filtering"><GridFiltering /></Route>
                            <Route path="/grid/fixed-columns"><GridFixedColumns /></Route>
                            <Route path="/grid/pagination"><GridPagination /></Route>
                            <Route path="/grid/sorting"><GridSorting /></Route>
                            <Route path="/grid/tooltips"><GridTooltips /></Route>
                            <Route path="/grid/virtualization"><GridVirtualization /></Route>
                            <Route path="/groupbox"><GroupBoxOverview /></Route>
                            <Route path="/listbar"><ListBarOverview /></Route>
                            <Route path="/listbox"><ListBoxOverview /></Route>
                            <Route path="/listgroup"><ListGroupOverview /></Route>
                            <Route path="/listscroller"><ListScrollerOverview /></Route>
                            <Route path="/listview"><ListViewOverview /></Route>
                            <Route path="/menu"><MenuOverview /></Route>
                            <Route path="/numeric"><NumericOverview /></Route>
                            <Route path="/paginator"><PaginatorOverview /></Route>
                            <Route path="/popover"><PopOverOverview /></Route>
                            <Route path="/progressbar"><ProgressBarOverview /></Route>
                            <Route path="/radiobutton"><RadioButtonOverview /></Route>
                            <Route path="/rating"><RatingOverview /></Route>
                            <Route path="/select"><SelectOverview /></Route>
                            <Route path="/sidebar"><SideBarOverview /></Route>
                            <Route path="/slider"><SliderOverview /></Route>
                            <Route path="/slidebar"><SlideBarOverview /></Route>
                            <Route path="/splitcontainer"><SplitContainerOverview /></Route>
                            <Route path="/splitter"><SplitterOverview /></Route>
                            <Route path="/tabstrip/tabstrip-overview"><TabStripOverview /></Route>
                            <Route path="/tabstrip/layout/tabstrip-toolbar"><TabStripToolbar /></Route>
                            <Route path="/tabstrip/utility/tabstrip-close-button"><TabStripCloseButton /></Route>
                            <Route path="/tabstrip/utility/tabstrip-new-tab"><TabStripNewTab /></Route>
                            <Route path="/tooltip"><TooltipOverview /></Route>
                            <Route path="/treegrid/overview"><TreeGridOverview /></Route>
                            <Route path="/treegrid/add-row-dynamically"><TreeGridAddRowDynamically /></Route>
                            <Route path="/treegrid/builtin-editors"><TreeGridBuiltInEditors /></Route>
                            <Route path="/treegrid/cell-templates"><TreeGridCellTemplates /></Route>
                            <Route path="/treegrid/contextmenu"><TreeGridContextMenu /></Route>
                            <Route path="/treegrid/export"><TreeGridExport /></Route>
                            <Route path="/treegrid/filtering"><TreeGridFiltering /></Route>
                            <Route path="/treegrid/fixed-columns"><TreeGridFixedColumns /></Route>
                            <Route path="/treegrid/pagination"><TreeGridPagination /></Route>
                            <Route path="/treegrid/sorting"><TreeGridSorting /></Route>
                            <Route path="/treegrid/tooltips"><TreeGridTooltips /></Route>
                            <Route path="/treegrid/virtualization"><TreeGridVirtualization /></Route>
                            <Route path="/treelist"><TreeListOverview /></Route>
                            <Route path="/treeview/treeview-overview"><TreeViewOverview /></Route>
                            <Route path="/treeview/data/treeview-load-json"><TreeViewLoadJSON /></Route>
                            <Route path="/treeview/data/treeview-load-on-demand"><TreeViewLoadOnDemand /></Route>
                            <Route path="/treeview/drag-drop/treeview-drag-drop-two-trees"><TreeViewDragDropTwoTrees /></Route>
                            <Route path="/treeview/utility/treeview-checkboxes"><TreeViewCheckBoxes /></Route>
                        </Switch>
                    </div>
                </div>
        );
    }
}

export default withRouter(App);
