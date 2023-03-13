import React, { Component } from 'react';

import IntegralUIButtonComponent from 'integralui-web/wrappers/react.integralui.button.js';
import IntegralUINumericComponent from 'integralui-web/wrappers/react.integralui.numeric.js';
import IntegralUISelectComponent from 'integralui-web/wrappers/react.integralui.select.js';
import IntegralUITreeGridComponent from 'integralui-web/wrappers/react.integralui.treegrid.js';
import { IntegralUISelectionMode, IntegralUITheme } from 'integralui-web/components/integralui.enums.js';

import './treegrid-pagination.css';

class TreeGridPagination extends Component {

    //
    // Initialization / Destruction --------------------------------------------------------------
    //

    constructor(props){
        super(props);
    
        this.state = {
            buttonSize: { width: 100 },
            columns: [],
            ctrlSize: { height: 350 },
            currentResourcePath: '../../integralui-web/icons',
            currentTheme: IntegralUITheme.Office,
            inputSize: { width: 100 },
            isAnimationAllowed: true,
            pageSize: [
                { text: "2" },
                { text: "10" },
                { text: "25" },
                { text: "50" },
                { text: "100" },
                { text: "250" },
                { text: "500" },
                { text: "1000" },
                { text: "2500" },
                { text: "5000" }
            ],
            rows: [],
            selMode: IntegralUISelectionMode.MultiExtended
        }

        this.state.currentPageSize = this.state.pageSize[4];

        this.numColumns = 25;
        this.numLevels = 2;
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
        for (let j = 1; j <= this.numColumns; j++)
            list.push({ id: j, headerText: 'Header' + j });

        this.setState({ columns: list });
    }

    addRows(parentRow, level){
        if (level > this.numLevels)
            return;
            
        let numChilds = this.getRandomNumber(level);    
        for (let i = 0; i < numChilds; i++){
            if (this.rowCount < this.numRows){
                let row = {
                    id: this.rowCount + 1,
                    text: 'Item' + (this.rowCount + 1).toString(),
                    expanded : false,
                    cells: []
                };
                    
                this.state.columns.forEach((column, j) => 
                        row.cells.push({
                            cid: j + 1,
                            colName: column.headerText,
                            text: 'Item' + (this.rowCount + 1).toString() + (j + 1).toString()
                        })
                );

                this.gridRef.current.addRow(row, parentRow);
                this.rowCount++;
            
                this.addRows(row, level + 1);
            }
        }
    }
            
    // Make sure each row has a random set of child rows
    getRandomNumber(level){
        let nCount = 1 + Math.floor(Math.random() * 10);
        
        if (level === 0){
            if (this.numLevels === 0)
                nCount = this.numRows;
            else {
                let derivative = 1;
                for (var k = 1; k <= this.numLevels; k++)
                    derivative = (derivative * nCount) + 1;

                nCount = this.numRows / derivative + 1;
                if (nCount < 1000)
                    nCount = 1000;
            }
        }
        
        return nCount;
    }

    add(){
        if (this.gridRef.current){
            this.gridRef.current.suspendLayout();
        
            this.clear();

            this.addColumns();
            this.addRows(null, 0);

            this.gridRef.current.resumeLayout();
        }
    }

    clear(){
        this.rowCount = 0;

        this.gridRef.current.clearColumns();
        this.gridRef.current.clearRows();

        this.gridRef.current.updateLayout();
    }

    expandAll(){
        this.gridRef.current.expand();
    }

    collapseAll(){
        this.gridRef.current.collapse();
    }

    // Events ------------------------------------------------------------------------------------

    numColumnsChanged(e){
        this.numColumns = e.detail.value;
    }

    numRowsChanged(e){
        this.numRows = e.detail.value;
    }

    numLevelsChanged(e){
        this.numLevels = e.detail.value;
    }

    pageSizeChanged(e){
        if (e.detail.item)
            this.setState({ currentPageSize: e.detail.item });
    }

    // Update ------------------------------------------------------------------------------------

    render() {
        return (
            <div>
                <h2>TreeGrid / Pagination</h2>
                <div className="sample-block" id="treegrid-pagination">
                    <div className="pagesize-block">
                        <span className="pagesize-label">Rows per page: </span>
                        <IntegralUISelectComponent
                            allowAnimation={this.state.isAnimationAllowed} 
                            items={this.state.pageSize}
                            resourcePath={this.state.currentResourcePath}
                            selectedItem={this.state.currentPageSize}
                            size={{ width: 100 }}
                            theme={this.state.currentTheme} 
                            selectionChanged={(e) => this.pageSizeChanged(e)}
                        > 
                        </IntegralUISelectComponent>
                    </div>
                    <IntegralUITreeGridComponent ref={this.gridRef}
                        allowAnimation={this.state.isAnimationAllowed} 
                        columns={this.state.columns}
                        paging={{ enabled: true, pageSize: parseInt(this.state.currentPageSize.text) }}
                        resourcePath={this.state.currentResourcePath}
                        rows={this.state.rows} 
                        selectionMode={this.state.selMode}
                        showFooter={false}
                        size={this.state.ctrlSize}
                        theme={this.state.currentTheme}
                    ></IntegralUITreeGridComponent>
                    <br/>
                    <div className="sample-block-panel" align="center">
                        <span>Max columns:</span> <IntegralUINumericComponent min={1} max={250} resourcePath={this.state.currentResourcePath} size={this.state.inputSize} value={this.numColumns} theme={this.state.currentTheme} valueChanged={(e) => this.numColumnsChanged(e)}></IntegralUINumericComponent>
                        <span>Max rows:</span> <IntegralUINumericComponent min={1} max={100000} resourcePath={this.state.currentResourcePath} size={{ width: 125 }} value={this.numRows} theme={this.state.currentTheme} valueChanged={(e) => this.numRowsChanged(e)}></IntegralUINumericComponent>
                        <span>Levels:</span> <IntegralUINumericComponent min={0} max={100} resourcePath={this.state.currentResourcePath} size={this.state.inputSize} value={this.numLevels} theme={this.state.currentTheme} valueChanged={(e) => this.numLevelsChanged(e)}></IntegralUINumericComponent>
                        <br /><br />
                        <IntegralUIButtonComponent allowAnimation={this.state.isAnimationAllowed} size={this.state.buttonSize} theme={this.state.currentTheme} onClick={() => this.add()}>Add</IntegralUIButtonComponent>
                        <IntegralUIButtonComponent allowAnimation={this.state.isAnimationAllowed} size={this.state.buttonSize} theme={this.state.currentTheme} onClick={() => this.clear()}>Clear</IntegralUIButtonComponent>
                        <IntegralUIButtonComponent allowAnimation={this.state.isAnimationAllowed} size={this.state.buttonSize} theme={this.state.currentTheme} onClick={() => this.expandAll()}>Expand All</IntegralUIButtonComponent>
                        <IntegralUIButtonComponent allowAnimation={this.state.isAnimationAllowed} size={this.state.buttonSize} theme={this.state.currentTheme} onClick={() => this.collapseAll()}>Collapse All</IntegralUIButtonComponent>
                    </div>
                    <div className="feature-help">
                        <p><span className="initial-space"></span>This example shows how to divide the data set in multiple pages.</p>
                        <p><span className="initial-space"></span>Using options above the grid, you can choose the size of the page. The page size determines the maximum number of root rows per page. If you have rows with children, child rows are excluded from this number.</p>
                        <p><span className="initial-space"></span>For demonstration purposes only, a limit is set to 250 columns and 100,000 rows with maximum depth of 100 tree levels. In real scenario, the only limit is how much data the browser can handle. By clicking on the 'Add' button, the treegrid is populated with custom data.</p>
                        <p><span className="initial-space"></span>The pagination panel is fully customizable, even you can create your own pagination controls by using these built-in methods and events:</p>
                        <ul className="feature-points">
                            <li><span className="code-name">currentPage</span> - Gets or sets the number of page currently visible in grid view</li>
                            <li><span className="code-name">firstPage</span> - the first page is shown in the grid view</li>
                            <li><span className="code-name">lastPage</span> - the last page is shown in the grid view</li>
                            <li><span className="code-name">nextPage</span> - moves to the next page</li>
                            <li><span className="code-name">prevPage</span> - moves to the previous page</li><br/>
                            <li><span className="code-name">pageChanged</span> - occurs when current page changes</li>
                        </ul>
                        <p><span className="initial-space"></span>In this example, when page changes the scroll position resets, moves the scroll to the top of the view.</p> 
                    </div>
                </div>
            </div>
        );
    }
}

export default TreeGridPagination;
