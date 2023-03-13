import { Component, ElementRef, ViewChild } from '@angular/core';
import 'integralui-web/components/integralui.checkbox';

@Component({
    selector: '',
    templateUrl: './checkbox-overview.html',
    styleUrls: ['./checkbox-overview.css']
})
export class CheckBoxOverviewSample {
    public currentResourcePath: string = 'assets/icons';

    onCheckStateChanged(e: any){
        console.log("CheckState changed to " + e.detail.checkState);
    }

    onCheckedChanged(e: any){
        console.log("Checked changed to " + e.detail.checked);
    }
}
