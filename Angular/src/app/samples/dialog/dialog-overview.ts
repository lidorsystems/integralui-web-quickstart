import { Component, ElementRef, ViewChild } from '@angular/core';
import 'integralui-web/components/integralui.dialog';
import { IntegralUITheme } from 'integralui-web/components/integralui.enums';

@Component({
    selector: '',
    templateUrl: './dialog-overview.html',
    styleUrls: ['./dialog-overview.css']
})
export class DialogOverviewSample {
    public currentResourcePath: string = 'assets/icons';
    public currentTheme: IntegralUITheme = IntegralUITheme.Office;
    public isDialogVisible: boolean = false;
    public showCloseButton: boolean = true;
  
    showDialog(){
        this.isDialogVisible = true;
    }

    onDialogClosed(e: any){
        this.isDialogVisible = false;
    }

}
