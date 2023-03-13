/*
  Copyright © 2016-2022 Lidor Systems. All rights reserved.

  This file is part of the "IntegralUI Web" Library. 
                                                                   
  The contents of this file are subject to the IntegralUI Web License, and may not be used except in compliance with the License.
  A copy of the License should have been installed in the product's root installation directory or it can be found at
  http://www.lidorsystems.com/products/web/studio/license-agreement.aspx.
                                                            
  This SOFTWARE is provided "AS IS", WITHOUT WARRANTY OF ANY KIND, either express or implied. See the License for the specific language 
  governing rights and limitations under the License. Any infringement will be prosecuted under applicable laws.                           
*/

import { Component, ElementRef, ViewChild } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import 'integralui-web/components/integralui.autocomplete';
import { IntegralUITheme } from 'integralui-web/components/integralui.enums';

@Component({
    selector: '',
    templateUrl: './autocomplete-overview.html'
})
export class AutoCompleteOverviewSample {
    public ctrlSize: any = { width: 300 };
    public currentTheme: IntegralUITheme = IntegralUITheme.Office;
    public dataFields: any = { text: 'name' };
    public dropDownSize: any = { width: 400, height: 200};
    public placeHolder: string = 'Search text ...';
    public sampleList: Array<any> = [];
    public textValue: string = '';

    constructor(private http: HttpClient){} 

    ngAfterViewInit(){
        // Load data into the ListBox from a JSON file
        this.loadFromJSON();
    }

    private loadFromJSON(){
        let self = this;

        // Use HTTP service to get data from the specified JSON file
        self.http.get("./assets/cities.json").subscribe((data: any) => self.sampleList = data);
    }

    onValueChanged(e: any){
        console.log("Text value changes to: ", e.detail.value);
    }
}
