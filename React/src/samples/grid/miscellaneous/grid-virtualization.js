import React, { Component } from 'react';

import IntegralUIButtonComponent from 'integralui-web/wrappers/react.integralui.button.js';
import IntegralUINumericComponent from 'integralui-web/wrappers/react.integralui.numeric.js';
import IntegralUIGridComponent from 'integralui-web/wrappers/react.integralui.grid.js';
import { IntegralUISelectionMode, IntegralUITheme } from 'integralui-web/components/integralui.enums.js';

import './grid-virtualization.css';

class GridVirtualization extends Component {

    //
    // Initialization / Destruction --------------------------------------------------------------
    //

    constructor(props){
        super(props);
    
        this.state = {
            buttonSize: { width: 100 },
            columns: [],
            ctrlSize: { height: 400 },
            currentResourcePath: '../../integralui-web/icons',
            currentTheme: IntegralUITheme.Office,
            inputSize: { width: 100 },
            isAnimationAllowed: true,
            rows: [],
            selMode: IntegralUISelectionMode.MultiExtended
        }

        this.numColumns = 25;
        this.numRows = 10000;
        this.rowCount = 0;

        this.gridRef = React.createRef();
    }

    componentDidMount(){
        let self = this;
        setTimeout(function(){
            self.add();
        }, 1);
    }

    //
    // Methods -----------------------------------------------------------------------------------
    //
    
    addColumns(){
        let list = [];
        for (let j = 1; j <= this.numColumns; j++){
            let column = { 
                id: j, 
                headerText: 'Header' + j
            }

            list.push(column);
        }

        this.setState({ columns: list });
    }

    addRows(){
        for (let i = 0; i < this.numRows; i++){
            let row = {
                id: this.rowCount + 1,
                text: 'Item' + (this.rowCount + 1).toString(),
                expanded : false,
                cells: []
            };
                
            this.state.columns.forEach((column, j) => {
                let cell = {
                    cid: j + 1,
                    colName: column.headerText,
                    text: 'Item' + (this.rowCount + 1).toString() + (j + 1).toString()
                }

                row.cells.push(cell);
            });

            this.gridRef.current.addRow(row);
            this.rowCount++;
        }
    }

    add(){
        if (this.gridRef.current){
            this.gridRef.current.suspendLayout();
        
            this.clear();

            this.addColumns();
            this.addRows();

            this.gridRef.current.resumeLayout();
        }
    }

    clear(){
        this.rowCount = 0;

        this.gridRef.current.clearColumns();
        this.gridRef.current.clearRows();

        this.gridRef.current.updateLayout();
    }

    // Events ------------------------------------------------------------------------------------

    numColumnsChanged(e){
        this.numColumns = e.detail.value;
    }

    numRowsChanged(e){
        this.numRows = e.detail.value;
    }

    // Update ------------------------------------------------------------------------------------

    render() {
        return (
            <div>
                <h2>Grid / Virtualization</h2>
                <div className="sample-block-grid-virtualization" id="grid-virtualization">
                    <IntegralUIGridComponent ref={this.gridRef}
                        allowAnimation={this.state.isAnimationAllowed} 
                        allowDrag={true}
                        allowDrop={true}
                        columns={this.state.columns} 
                        resourcePath={this.state.currentResourcePath}
                        rows={this.state.rows} 
                        selectionMode={this.state.selMode}
                        size={this.state.ctrlSize}
                        theme={this.state.currentTheme}
                    ></IntegralUIGridComponent>
                    <br />
                    <div className="sample-block-panel" align="center">
                        <span>Max columns:</span> <IntegralUINumericComponent min={1} max={250} resourcePath={this.state.currentResourcePath} size={this.state.inputSize} value={this.numColumns} theme={this.state.currentTheme} valueChanged={(e) => this.numColumnsChanged(e)}></IntegralUINumericComponent>
                        <span>Max rows:</span> <IntegralUINumericComponent min={1} max={100000} resourcePath={this.state.currentResourcePath} size={{ width: 125 }} value={this.numRows} theme={this.state.currentTheme} valueChanged={(e) => this.numRowsChanged(e)}></IntegralUINumericComponent>
                        <br /><br />
                        <IntegralUIButtonComponent allowAnimation={this.state.isAnimationAllowed} size={this.state.buttonSize} theme={this.state.currentTheme} onClick={() => this.add()}>Add</IntegralUIButtonComponent>
                        <IntegralUIButtonComponent allowAnimation={this.state.isAnimationAllowed} size={this.state.buttonSize} theme={this.state.currentTheme} onClick={() => this.clear()}>Clear</IntegralUIButtonComponent>
                    </div>
                    <div className="feature-help">
                        <p><span className="initial-space"></span>In above demo, you can choose how many columns and rows to display in the Grid. For demonstration purposes only, a limit is set to 250 columns and 100,000 rows with maximum depth of 100 tree levels. In real scenario, the only limit is how much data the browser can handle. By clicking on the 'Add' button, the grid is populated with custom data.</p>
                        <p><span className="initial-space"></span>To start a drag and drop operation, left-click on a move row icon in first column on the left, then move the mouse cursor and drag operation will start. A drag-drop marker will appear with information about target row and an icon (up, down or in) showing whether the dragged row can drop above, below or as a child to target row.</p>
                        <p><span className="initial-space"></span>In this example, there are no restrictions set, and you can drag and drop a row and place it above, below or as a child of another row. However, if you want you can set conditions and provide custom drag drop operations on your own.</p>
                        <p><span className="initial-space"></span>While dragging a row over middle space of some target row, when dropped the row will be added as a child of the target row.</p>
                        <p><span className="initial-space"></span>To select multiple rows, hold SHIFT or CTRL key and click on specific row.</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default GridVirtualization;
