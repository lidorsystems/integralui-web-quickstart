/*
  Copyright © 2016-2019 Lidor Systems. All rights reserved.

  This file is part of the "IntegralUI Web" Library. 
                                                                   
  The contents of this file are subject to the IntegralUI Web License, and may not be used except in compliance with the License.
  A copy of the License should have been installed in the product's root installation directory or it can be found at
  http://www.lidorsystems.com/products/web/studio/license-agreement.aspx.
                                                            
  This SOFTWARE is provided "AS IS", WITHOUT WARRANTY OF ANY KIND, either express or implied. See the License for the specific language 
  governing rights and limitations under the License. Any infringement will be prosecuted under applicable laws.                           
*/

import { Component, ElementRef, ViewChild } from '@angular/core';

//import { Http, Response, Headers, RequestOptions } from '@angular/http';
//import {Observable} from 'rxjs/Rx';
//import 'rxjs/add/operator/map';
//import 'rxjs/add/operator/catch';

import 'integralui-web/components/integralui.treeview';
import { IntegralUITheme } from 'integralui-web/components/integralui.enums';

@Component({
    selector: '',
    templateUrl: './treeview-load-on-demand.html',
    styleUrls: ['./treeview-load-on-demand.css']
})
export class TreeViewLoadOnDemand {
    @ViewChild('treeview', { static: false }) treeview!: ElementRef;

    public ctrlSize: any = { width: 350, height: 300 };
    public currentResourcePath: string = 'assets/icons';
    public currentTheme: IntegralUITheme = IntegralUITheme.Office;
    public items: Array<any> = [];

    constructor(/*private http: Http*/){
        this.items = [
            { id: 1, text: "Item 1", expanded: false, items: [], hasChildren: true },
            { id: 2, text: "Item 2", expanded: false, items: [], hasChildren: true },
            { id: 3, text: "Item 3", expanded: false, items: [], hasChildren: true }
        ];
    }

    // Make sure each node has a random set of child items
    private getChildCount(){
        return 1 + Math.floor(Math.random() * 5);
    }

    // Make sure that some child items can have children
    private itemHasChildren(){
        let num = 2 + Math.floor(Math.random() * 3);

        return num % 2 == 0 ? true : false;
    }

    // Handle the beforeExpand event to populate the expanding item with new data
    onBeforeExpand(e: any){
        let self = this;

        if (e.detail.item.items && e.detail.item.items.length === 0){
            // Replace the expanding icon with a loading icon
            self.treeview.nativeElement.beginLoad(e.detail.item);

            let loadTimer = setTimeout(function(){
                // Get random number of child items
                let count: number = self.getChildCount();
                for (let i = 1; i <= count; i++){
                    // Create a child item
                    let childItem: any = {
                        expanded: false, 
                        hasChildren: self.itemHasChildren(), 
                        items: [],
                        text: e.detail.item.text + i
                    }

                    // Add the child item to the expanding item
                    e.detail.item.items.push(childItem);
                }

                // Restore the expanding icon
                self.treeview.nativeElement.endLoad(e.detail.item);

                // Update the appareance of the TreeView
                self.treeview.nativeElement.refresh();

                // Populate the TreeView with data from a JSON file
                //self.loadFromJSON(e.detail.item);

                clearTimeout(loadTimer);
            }, 1000);

        }
    }

    // 
    // If you load data from a JSON file use the following code
    //

    /*
    private loadFromJSON(item: any){
        // Use HTTP service to get data from the specified JSON file
        let obj: Observable<any> = this.http.get("./file.json")
                                        .map(this.extractData)
                                        .catch(this.handleError); 

        // Subscribe to the observable, so when data is ready add it to the TreeView
        obj.subscribe(data => this.addData(data, item), error => console.log(error));
    }

    private addData(data: any, item?: any){
        // Load data from JSON into the TreeView as children for specified item
        this.treeview.nativeElement.loadData(data, item);

        // Restore the expanding icon
        this.treeview.nativeElement.endLoad(item);

        // Update the appareance of the TreeView
        this.treeview.nativeElement.refresh();
    }

    private extractData(res: Response){
        let obj = res.json();

        return obj || { };
    }

    private handleError(error: Response | any) {
        let errMsg: string;
        if (error instanceof Response) {
            const body = error.json() || '';
            const err = body.error || JSON.stringify(body);
            errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
        }
        else 
            errMsg = error.message ? error.message : error.toString();

        console.error(errMsg);

        return Observable.throw(errMsg);
    }
    */
}
