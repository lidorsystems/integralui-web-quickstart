import { Component, ElementRef, ViewChild } from '@angular/core';

import 'integralui-web/components/integralui.accordion';
import 'integralui-web/components/integralui.groupbox';
import { IntegralUITheme } from 'integralui-web/components/integralui.enums';
import { iuiAccordionOverviewStyle } from './accordion-overview.style';

@Component({
    selector: '',
    templateUrl: './accordion-overview.html',
    styleUrls: ['./accordion-overview.css']
})
export class AccordionOverviewSample {
    public ctrlSize: any = { width: 400 };
    public currentResourcePath: string = 'assets/icons';
    public currentSelection: any = null;
    public customStyle: any = iuiAccordionOverviewStyle;
    public currentTheme: IntegralUITheme = IntegralUITheme.Office;
    public expandBoxType: string = 'arrow';
    public groups: Array<any> = [];

    constructor(){
        this.groups = [
            { 
                icon: 'icons library',
                text: 'Books',
                body: 'Curabitur pretium tincidunt lacus. Nulla gravida orci a odio. Nullam varius, turpis et commodo pharetra, est eros bibendum elit, nec luctus magna felis sollicitudin mauris. Integer in mauris eu nibh euismod gravida. Duis ac tellus et risus vulputate vehicula. Donec lobortis risus a elit. Etiam tempor.'
            },
            { 
                icon: 'icons album',
                text: 'Music',
                body: 'Pellentesque malesuada nulla a mi. Duis sapien sem, aliquet nec, commodo eget, consequat quis, neque. Aliquam faucibus, elit ut dictum aliquet, felis nisl adipiscing sapien, sed malesuada diam lacus eget erat. Cras mollis scelerisque nunc. Nullam arcu. Aliquam consequat.'
            },
            { 
                icon: 'icons star-empty',
                text: 'Favorites',
                body: 'Fusce convallis, mauris imperdiet gravida bibendum, nisl turpis suscipit mauris, sed placerat ipsum urna sed risus. In convallis tellus a mauris. Curabitur non elit ut libero tristique sodales. Mauris a lacus. Donec mattis semper leo. In hac habitasse platea dictumst. Fusce convallis, mauris imperdiet gravida bibendum, nisl turpis suscipit mauris, sed placerat ipsum urna sed risus. In convallis tellus a mauris. Curabitur non elit ut libero tristique sodales. Mauris a lacus. Donec mattis semper leo. In hac habitasse platea dictumst. Fusce convallis, mauris imperdiet gravida bibendum, nisl turpis suscipit mauris, sed placerat ipsum urna sed risus. In convallis tellus a mauris. Curabitur non elit ut libero tristique sodales. Mauris a lacus. Donec mattis semper leo. In hac habitasse platea dictumst.'
            }
        ];

        this.currentSelection = this.groups[0];
    } 
}
