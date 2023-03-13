import { Component, ElementRef, ViewChild } from '@angular/core';

import 'integralui-web/components/integralui.button';
import 'integralui-web/components/integralui.grid';
import 'integralui-web/components/integralui.toaster';
import { IntegralUIEditMode, IntegralUIEditorType, IntegralUISelectionMode, IntegralUITheme, IntegralUIToastType } from 'integralui-web/components/integralui.enums';
import { iuiGridEditorsRadioButtonStyle } from './grid-editors-radiobutton.style';

@Component({
    selector: '',
    templateUrl: './grid-editors-radiobutton.html',
    styleUrls: ['./grid-editors-radiobutton.css']
})
export class GridEditorsRadioButton {
    @ViewChild('grid', { static: false }) grid!: ElementRef;
    @ViewChild('toaster', { static: false }) toaster!: ElementRef;

    // Grid
    public columns: Array<any> = [];
    public ctrlSize: any = { height: 400 };
    public currentEditMode: IntegralUIEditMode = IntegralUIEditMode.Custom;
    public currentResourcePath: string = 'assets/icons';
    public currentSelectionMode: IntegralUISelectionMode = IntegralUISelectionMode.None;
    public currentTheme: IntegralUITheme = IntegralUITheme.Office;
    public customStyle: any = iuiGridEditorsRadioButtonStyle;
    public gridScrolling: any = { horizontal: false, vertical: false }
    public rows: Array<any> = [];

    // Toaster
    public currentPositionAdjustment: any = { left: -15 }
    public currentToastSize: any = { width: 350, height: 70 }

    constructor(){
        this.columns = [
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
        ];

        this.rows = [
            { id: 1, cells: [{ cid: 1, text: "Product Catalog" } ] },
            { id: 2, cells: [{ cid: 1, text: "Customer Service" } ] },
            { id: 3, cells: [{ cid: 1, text: "Interface" } ] },
            { id: 4, cells: [{ cid: 1, text: "User-friendly" } ] },
            { id: 5, cells: [{ cid: 1, text: "Speed" } ] },
            { id: 6, cells: [{ cid: 1, text: "Returns Policy" } ] }
        ];

        this.createRowCells();
    }
    
    // Initialization ------------------------------------------------------------------------

    createRowCells(){
        this.rows.forEach(row => {
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

    // Events ------------------------------------------------------------------------------------

    onSubmitClicked(){
        let result: Array<any> = [];

        let noFieldsChecked = true;

        this.rows.forEach(row => {
            let category: any = { name: row.cells[0].text }

            row.cells.forEach((cell: any) => {
                if (cell.value){
                    let column = this.grid.nativeElement.getColumnById(cell.cid);
                    let parentColumn = this.grid.nativeElement.getColumnParent(column);

                    if (column && parentColumn)
                        category[parentColumn.headerText] = column.headerText;

                    noFieldsChecked = false;
                }
            });

            result.push(category);
        });

        if (noFieldsChecked)
            this.toaster.nativeElement.show({ title: 'Warning', text: 'Submitted results are empty, please provide your feedback by selecting options.', type: IntegralUIToastType.Error });
        else {
            console.log(result);

            this.toaster.nativeElement.show({ title: 'Info', text: 'Results from the survey are submited, you can find them in the CONSOLE LOG.', type: IntegralUIToastType.Success });
        }
    }
}
