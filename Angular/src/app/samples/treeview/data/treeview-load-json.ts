import { Component, ElementRef, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import 'integralui-web/components/integralui.treeview';
import { IntegralUITheme } from 'integralui-web/components/integralui.enums';
import { iuiTreeViewLoadJSONStyle } from './treeview-load-json.style';

@Component({
    selector: '',
    templateUrl: './treeview-load-json.html',
    styleUrls: ['./treeview-load-json.css']
})
export class TreeViewLoadJSON {
    @ViewChild('treeview', { static: false }) treeview!: ElementRef;

    public ctrlSize: any = { width: 400, height: 400 };
    public currentResourcePath: string = 'assets/icons';
    public currentTheme: IntegralUITheme = IntegralUITheme.Office;
    public customStyle: any = iuiTreeViewLoadJSONStyle;
    public data: Array<any> = [];

    public treeFields: any = {
        id: 'itemId',
        expanded: 'isExpanded',
        pid: 'parentId',
        items: 'children',
        text: 'label'
    }

    constructor(private http: HttpClient){
    }   

    ngAfterViewInit(){
        // Load data into the TreeView from a JSON file
        this.loadFromJSON();
    }

    private loadFromJSON(){
        let self = this;

        // Use HTTP service to get data from the specified JSON file
        self.http.get("./assets/treeview-load-json-tree-data.json").subscribe((data: any) => {
            // Suspend the tree layout from updates, to increase performance
            self.treeview.nativeElement.suspendLayout();

            // Load data into the tree view
            self.treeview.nativeElement.loadData(data, null, self.treeFields, false);

            // Resume and update the tree layout
            self.treeview.nativeElement.resumeLayout();
        });
    }
}
