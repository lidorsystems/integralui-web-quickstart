import React, { Component } from 'react';
import { html } from 'integralui-web/external/lit-element.js';

import IntegralUICommonService from 'integralui-web/services/integralui.common.service.js';
import IntegralUIGridComponent from 'integralui-web/wrappers/react.integralui.grid.js';
import IntegralUIWindowComponent from 'integralui-web/wrappers/react.integralui.window.js';
import { IntegralUIEditMode, IntegralUITheme, IntegralUIWindowState } from 'integralui-web/components/integralui.enums.js';

import 'integralui-web/components/integralui.button.js';
import 'integralui-web/components/integralui.datepicker.js';
import 'integralui-web/components/integralui.select.js';

import gridData from './grid-window-dynamic-resize-data.json';
import './grid-window-dynamic-resize.css';

class GridDynamicResizeWindow extends Component {

    //
    // Initialization / Destruction --------------------------------------------------------------
    //

    constructor(props){
        super(props);

        this._commonService = new IntegralUICommonService();

        this.state = {
            columns: [],
            currentEditMode: IntegralUIEditMode.Form,
            currentResourcePath: '../../../integralui-web/icons',
            currentTheme: IntegralUITheme.Office,
            gridScrolling: { horizontal: false },
            isAnimationAllowed: true,
            rows: [],

            // Window Settings
            winPosition: { top: 25, left: 50 },
            winSize: { width: 800, height: 450 }
        }

        this.winState = IntegralUIWindowState.Normal;

        this.gridRef = React.createRef();
        this.winRef = React.createRef();
    }

    componentDidMount(){
        this.resizeObserver = new ResizeObserver(entries => {
            if (entries && entries.length > 0 && entries[0].contentRect){
                if (this.winState === IntegralUIWindowState.Maximized)
                    this.setState({ winSize: { 
                            width: entries[0].contentRect.width - 6, // window border width is set to 3px
                            height: entries[0].contentRect.height - 6
                        }
                    });
            }
        });

        const winBlock = document.querySelector('#grid-window-block-dynamic-resize');
        this.resizeObserver.observe(winBlock);

        this.convertJSONData(gridData);
        this.gridRef.current.updateLayout();
    }

    componentWillUnmount(){
        if (this.resizeObserver)
            this.resizeObserver.disconnect();
    }

    //
    // Methods -----------------------------------------------------------------------------------
    //

    // Data --------------------------------------------------------------------------------------

    convertJSONData(data){
        let columnList = [];
        let rowList = [];

        /////////////////////
        // Create columns
        /////////////////////

        // Load other columns from the data source
        data.columns.forEach(obj => {
            let column = Object.assign({ headerAlignment: 'center' }, obj);

            columnList.push(column);
        });


        /////////////////////
        // Create Rows
        /////////////////////

        data.rows.forEach(obj => {
            // Copy all fields from JSON data and add a new field 'cells'
            let row = Object.assign({ cells: [] }, obj);

            // Loop through all columns and create cells accordingly
            data.columns.forEach(column => {
                let field = column.title;

                // Delete all fields that will be included in cells
                delete row[field];

                // Each row should have a cell for check box column, otherwise only add cells for existing fields
                let cell = {
                    cid: column.id,
                    colName: field
                }

                if (obj[field] !== undefined){
                    if (this._commonService.isString(obj[field])){
                        let fieldValue = Date.parse(obj[field]);
                        if (obj[field].slice(-1) === 'Z' && !isNaN(fieldValue))
                            cell.value = new Date(fieldValue);
                        else
                            cell.value = obj[field];
                    }
                    else
                        cell.value = obj[field];
                }
                // Caluclate the Total value: sum of (Quantity * Price) + Shipping Cost
                else if (column.id === 11)
                    cell.value = obj["Quantity"] * obj["Price"] + obj["Shipping Cost"];

                row.cells.push(cell);
            });
            
            rowList.push(row);
        });

        this.setState({ columns: columnList, rows: rowList });
    }

    // Dynamic Resize ------------------------------------------------------------------------

    windowClosing(e){
        e.detail.cancel = true;

        alert('Closing of window in this example is disabled');
    }

    windowSizeChanged(e){
        this.gridRef.current.updateLayout();
    }

    windowStateChanged(e){
        this.winState = e.detail.state;
    }

    // Editing -------------------------------------------------------------------------------

    gridDataChanged(e){
        // Update the Total value when Quantity or Price changes
        if (e.detail.data){
            let row = e.detail.data;

            let quantityCell = this.getCellById(row, 6);
            let priceCell = this.getCellById(row, 7);
            let totalCell = this.getCellById(row, 11);

            if (quantityCell && priceCell && totalCell)
                totalCell.value = quantityCell.value * priceCell.value;
        }
    }

    getCellById(row, id){
        let filtered = row.cells.filter(cell => cell.cid === id);

        return filtered.length > 0 ? filtered[0] : null;
    }

    gridRowDblClick(e){
        this.gridRef.current.beginEdit(e.detail.row);
    }

    // Templates ---------------------------------------------------------------------------------

    currentHeaderTemplate = (column) => { 
        return html`<span class="header-label">${column.title}</span>`;
    };

    // Update ------------------------------------------------------------------------------------

    render() {
        return (
            <div>
                <h2>Grid / Dynamic Resize with a Window</h2>
                <div id="grid-window-block-dynamic-resize" style={{ overflow: 'hidden', position: 'relative' }}>
                    <div className="sample-block">
                        <IntegralUIWindowComponent id="grid-window-dynamic-resize" ref={this.winRef}
                            allowAnimation={this.state.isAnimationAllowed} 
                            parentId={'grid-window-block-dynamic-resize'}
                            position={this.state.winPosition}
                            resourcePath={this.state.currentResourcePath}
                            selected={true}
                            size={this.state.winSize}
                            text={'Grid with Dynamic Resize'}
                            theme={this.state.currentTheme}
                            visible={true}
                            closing={(e) => this.windowClosing(e)}
                            sizeChanged={(e) => this.windowSizeChanged(e)}
                            stateChanged={(e) => this.windowStateChanged(e)}
                        >
                            <div slot="content">
                                <IntegralUIGridComponent ref={this.gridRef}
                                    allowAnimation={this.state.isAnimationAllowed} 
                                    allowFocus={false}
                                    autoSizeColumns={true}
                                    columns={this.state.columns} 
                                    editMode={this.state.currentEditMode}
                                    headerTemplate={this.currentHeaderTemplate}
                                    resourcePath={this.state.currentResourcePath}
                                    rowHeight={30}
                                    rows={this.state.rows} 
                                    selectionMode={this.state.currentSelectionMode}
                                    showFooter={false}
                                    showScroll={this.state.gridScrolling}
                                    theme={this.state.currentTheme}
                                    dataChanged={(e) => this.gridDataChanged(e)}
                                    rowDblClick={(e) => this.gridRowDblClick(e)}
                                ></IntegralUIGridComponent>
                            </div>
                        </IntegralUIWindowComponent>
                    </div>
                </div>
                <div className="feature-help">
                    <p><span className="initial-space"></span>In this example we have a resizable window with Grid. To resize a window, move the cursor over window border and left-click and move to any direction, the window content will also update. In addition you can Minimize or Maximize the windows from buttons in window header. Windows have a parent container set, which restricts them to move or resize within its parent boundaries. Window's appearance is customizable with CSS, including border space for resize.</p>
                    <p><span className="initial-space"></span>Whenever the window is resized, the grid also changes its size. In addition, autoSizeColumns option is enabled which makes all columns in the grid to occupy the whole grid space. You can only resize columns within the grid without showing any horizontal scrollbar.</p>
                    <p><span className="initial-space"></span>The Grid also demonstrates editing with a Form. To edit a row, click in the first cell (the pencil icon) or double-click a row. A Form will appear where you can edit cell values for that row, using built-in editors depending on value types. Once finished you can save the changes or cancel them by clicking Save or Cancel buttons at the end of the Form.</p>
                </div>
            </div>
        );
    }
}

export default GridDynamicResizeWindow;
