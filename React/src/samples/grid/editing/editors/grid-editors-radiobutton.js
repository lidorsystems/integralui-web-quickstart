import React, { Component } from 'react';

import IntegralUIButtonComponent from 'integralui-web/wrappers/react.integralui.button.js';
import IntegralUIGridComponent from 'integralui-web/wrappers/react.integralui.grid.js';
import IntegralUIToasterComponent from 'integralui-web/wrappers/react.integralui.toaster.js';
import { IntegralUIEditMode, IntegralUIEditorType, IntegralUISelectionMode, IntegralUITheme, IntegralUIToastType } from 'integralui-web/components/integralui.enums.js';
import 'integralui-web/components/integralui.radiobutton.js';

import { iuiGridEditorsRadioButtonStyle } from './grid-editors-radiobutton.style.js';

class GridEditorsRadioButton extends Component {

    //
    // Initialization / Destruction --------------------------------------------------------------
    //

    constructor(props){
        super(props);

        this.iconSrc = 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/';

        this.state = {
            columns: [
                { id: 1, width: 200, minWidth: 135 },
                {
                    id: 999, 
                    headerText: "Online Shoping Experience Survey",
                    headerAlignment: "center",
                    class: { header: 'column-title' },
                    columns: [
                        { 
                            id: 99, 
                            headerText: "Importance", 
                            headerAlignment: "center", 
                            class: { header: 'column-group' },
                            editorSettings: { group: 'Importance'},
                            columns: [
                                { id: 2, pid: 99, headerText: "1", class: { header: 'group-first-cell', body: ['group-first-cell', 'group-last-bottom-cell'] }, headerAlignment: "center", contentAlignment: "center", editorType: IntegralUIEditorType.RadioButton },
                                { id: 3, pid: 99, headerText: "2", class: { body: 'group-last-bottom-cell' }, headerAlignment: "center", contentAlignment: "center", editorType: IntegralUIEditorType.RadioButton },
                                { id: 4, pid: 99, headerText: "3", class: { body: 'group-last-bottom-cell' }, headerAlignment: "center", contentAlignment: "center", editorType: IntegralUIEditorType.RadioButton },
                                { id: 5, pid: 99, headerText: "4", class: { body: 'group-last-bottom-cell' }, headerAlignment: "center", contentAlignment: "center", editorType: IntegralUIEditorType.RadioButton },
                                { id: 6, pid: 99, headerText: "5", class: { header: 'group-last-cell', body: 'group-last-cell' }, headerAlignment: "center", contentAlignment: "center", editorType: IntegralUIEditorType.RadioButton }
                            ],
                            width: 300
                        },
                        { id: 100, fixedWidth: true, width: 20 },
                        { 
                            id: 101, 
                            headerText: "Satisfaction", 
                            headerAlignment: "center", 
                            class: { header: 'column-group' },
                            editorSettings: { group: 'Satisfaction'},
                            columns: [
                                { id: 8, pid: 101, headerText: "1", class: { header: 'group-first-cell', body: ['group-first-cell', 'group-last-bottom-cell'] }, headerAlignment: "center", contentAlignment: "center", editorType: IntegralUIEditorType.RadioButton },
                                { id: 9, pid: 101, headerText: "2", class: { body: 'group-last-bottom-cell' }, headerAlignment: "center", contentAlignment: "center", editorType: IntegralUIEditorType.RadioButton },
                                { id: 10, pid: 101, headerText: "3", class: { body: 'group-last-bottom-cell' }, headerAlignment: "center", contentAlignment: "center", editorType: IntegralUIEditorType.RadioButton },
                                { id: 11, pid: 101, headerText: "4", class: { body: 'group-last-bottom-cell' }, headerAlignment: "center", contentAlignment: "center", editorType: IntegralUIEditorType.RadioButton },
                                { id: 12, pid: 101, headerText: "5", class: { header: 'group-last-cell', body: 'group-last-cell' }, headerAlignment: "center", contentAlignment: "center", editorType: IntegralUIEditorType.RadioButton }
                            ],
                            width: 300
                        }
                    ]
                }
            ],
            ctrlSize: { height: 400 },
            currentEditMode: IntegralUIEditMode.Custom,
            currentSelectionMode: IntegralUISelectionMode.None,
            currentResourcePath: '../../integralui-web/icons',
            currentTheme: IntegralUITheme.Office,
            gridScrolling: { horizontal: false, vertical: false },
            isAnimationAllowed: true,
            currentPositionAdjustment: { left: -15 },
            currentToastSize: { width: 350, height: 70 },
            rows: [
                { id: 1, cells: [{ cid: 1, text: "Product Catalog" } ] },
                { id: 2, cells: [{ cid: 1, text: "Customer Service" } ] },
                { id: 3, cells: [{ cid: 1, text: "Interface" } ] },
                { id: 4, cells: [{ cid: 1, text: "User-friendly" } ] },
                { id: 5, cells: [{ cid: 1, text: "Speed" } ] },
                { id: 6, cells: [{ cid: 1, text: "Returns Policy" } ] }
            ],
            selMode: IntegralUISelectionMode.None
        }
        
        this.gridRef = React.createRef();
        this.toasterRef = React.createRef();
    }
    
    // Initialization ------------------------------------------------------------------------

    componentDidMount(){
        this.createRowCells();
    }

    createRowCells(){
        this.state.rows.forEach(row => {
            //
            // In order for cell to appear under specific column, cell's cid value should be the same as column's id value
            // Because we are using radio buttons with initial value as undefined, the value field in cell object is not required
            //

            // Create cells for Importance group
            for (let i = 2; i <= 6; i++){
                row.cells.push({ cid: i });
            }

            // Create cells for Satisfaction group
            for (let i = 8; i <= 12; i++){
                row.cells.push({ cid: i });
            }
        });
    }

    //
    // Methods -----------------------------------------------------------------------------------
    //

    // Events ------------------------------------------------------------------------------------

    onSubmitClicked(){
        let result = [];

        let noFieldsChecked = true;

        this.state.rows.forEach(row => {
            let category = { name: row.cells[0].text }

            row.cells.forEach(cell => {
                if (cell.value){
                    let column = this.gridRef.current.getColumnById(cell.cid);
                    let parentColumn = this.gridRef.current.getColumnParent(column);

                    if (column && parentColumn)
                        category[parentColumn.headerText] = column.headerText;

                    noFieldsChecked = false;
                }
            });

            result.push(category);
        });

        if (noFieldsChecked)
            this.toasterRef.current.show({ title: 'Warning', text: 'Submitted results are empty, please provide your feedback by selecting options.', type: IntegralUIToastType.Error });
        else {
            console.log(result);

            this.toasterRef.current.show({ title: 'Info', text: 'Results from the survey are submited, you can find them in the CONSOLE LOG.', type: IntegralUIToastType.Success });
        }
    }

    // Update ------------------------------------------------------------------------------------

    render() {
        return (
            <div>
                <h2>Grid / Cells with RadioButton</h2>
                <div className="sample-block-grid-radiobutton">
                    <IntegralUIGridComponent id="grid-editors-radiobutton" ref={this.gridRef}
                        allowAnimation={true}
                        allowFocus={false}
                        autoSizeColumns={true}
                        columns={this.state.columns}
                        customStyle={iuiGridEditorsRadioButtonStyle}
                        editMode={this.state.currentEditMode}
                        resourcePath={this.state.currentResourcePath}
                        rowHeight={36}
                        rows={this.state.rows}
                        selectionMode={this.state.currentSelectionMode}
                        showFooter={false}
                        showScroll={this.state.gridScrolling}
                        size={this.state.ctrlSize}
                        theme={this.state.currentTheme}
                    ></IntegralUIGridComponent>
                    <br/>
                    <div style={{ margin: '0 10px 0 0', textAlign: 'right'}}>
                        <IntegralUIButtonComponent theme={this.state.currentTheme} onClick={() => this.onSubmitClicked()}>Submit</IntegralUIButtonComponent>
                    </div>
                    <IntegralUIToasterComponent ref={this.toasterRef}
                        allowAnimation={true}
                        positionAdjustment={this.state.currentPositionAdjustment}
                        theme={this.state.currentTheme}
                        toastSize={this.state.currentToastSize}
                    ></IntegralUIToasterComponent>
                </div>
                <div className="feature-help">
                    <p><span className="initial-space"></span>An example of a Grid that allows you to select different options during a survey. There are two groups of options,. where each option is represented by a RadioButton. In addition grid appearance is modified in a way that it hides the grid lines and shows two groups of options separted by an emtpy column.</p>
                    <p><span className="initial-space"></span>Once the survey is complete, clicking on a Submit button will show a notfication message (using the <strong>IntegralUI Toaster</strong> component) stating a 'Warning' if no option is selected or a 'Info' with a message stating the you can find results in the console log.</p>
                </div>
            </div>
        );
    }
}

export default GridEditorsRadioButton;
