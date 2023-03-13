import { Component } from '@angular/core';

import 'integralui-web/components/integralui.button';
import 'integralui-web/components/integralui.loading';
import 'integralui-web/components/integralui.panel';
import { IntegralUITheme } from 'integralui-web/components/integralui.enums';

@Component({
    selector: '',
    templateUrl: './loading-overview.html',
    styleUrls: ['./loading-overview.css']
})
export class LoadingOverview {

    public currentTheme: IntegralUITheme = IntegralUITheme.Office;
    public isPanelEnabled: boolean = true;
    public loadValue: number = 0;
    public ctrlSize: any = { width: 500, height: 5 }

    // Events ------------------------------------------------------------------------------------
    
    onLoadClicked(){
        let self = this;

        self.loadValue = 0;
        self.isPanelEnabled = false;

        // Update the loading value every 100 miliseconds, until it reaches 100%
        let valueInterval = setInterval(function(){
            if (self.loadValue < 100)
                self.loadValue += 10;
            else {
                self.loadValue = 100;
                clearInterval(valueInterval);
            }
        }, 100);
    }

    onLoadComplete(){
        this.isPanelEnabled = true;
    }
}
