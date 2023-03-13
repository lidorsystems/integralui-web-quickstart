import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import 'integralui-web/components/integralui.tab';
import 'integralui-web/components/integralui.tabstrip';
import { IntegralUIAnimationType, IntegralUITabAlignment, IntegralUITabStripPlacement, IntegralUITheme } from 'integralui-web/components/integralui.enums';

@Component({
    selector: '',
    templateUrl: './tabstrip-load-json.html',
    styleUrls: ['./tabstrip-load-json.css']
})
export class TabStripLoadJSON {

    public currentAlignment: IntegralUITabAlignment = IntegralUITabAlignment.TopLeft;
    public currentAnimation: IntegralUIAnimationType = IntegralUIAnimationType.Fade;
    public currentPlacement: IntegralUITabStripPlacement = IntegralUITabStripPlacement.Top;
    public currentResourcePath: string = 'assets/icons';
    public currentTheme: IntegralUITheme = IntegralUITheme.Office;
    public ctrlSize: any = {};
    public tabs: Array<any> = [];

    constructor(private http: HttpClient){
    }   

    ngAfterViewInit(){
        // Load data into the TabStrip from a JSON file
        this.loadFromJSON();
    }

    private loadFromJSON(){
        let self = this;

        // Use HTTP service to get data from the specified JSON file
        self.http.get("./assets/tabstrip-load-json-data.json").subscribe((data: any) => {
            // Apply settings from JSON data
            self.currentAlignment = data.settings.alignment;
            self.currentAnimation = data.settings.animation;
            self.currentPlacement = data.settings.tabStripPlacement;
            self.ctrlSize = data.settings.size;
            self.tabs = data.tabs;
        });
    }
}
