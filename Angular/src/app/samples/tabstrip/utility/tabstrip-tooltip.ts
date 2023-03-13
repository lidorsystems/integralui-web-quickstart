import { Component } from '@angular/core';
import { html } from 'integralui-web/external/lit-element';

import 'integralui-web/components/integralui.tab';
import 'integralui-web/components/integralui.tabstrip';
import 'integralui-web/components/integralui.tooltip';
import { IntegralUIAnimationType, IntegralUITheme } from 'integralui-web/components/integralui.enums';

@Component({
    selector: '',
    templateUrl: './tabstrip-tooltip.html',
    styleUrls: ['./tabstrip-tooltip.css']
})
export class TabStripTooltip {

    public currentAnimation: IntegralUIAnimationType = IntegralUIAnimationType.Slide;
    public currentResourcePath: string = 'assets/icons';
    public currentSelection: any = null;
    public ctrlSize: any = { width: 600, height: 300 };
    public currentTheme: IntegralUITheme = IntegralUITheme.Office;
    public tabs: Array<any> = [];

    //
    // Tooltip settings
    //

    public tooltipSettings: any = {
        autoPopDelay: 3000,
        enabled: true,
        initialDelay: 500,
        position: 'mouse',
        showMarker: true
    }

    currentTabTemplate = (tab: any) => { 
        return html`
            <div>
                <iui-tooltip
                    .enabled=${this.tooltipSettings.enabled}
                    .settings=${Object.assign({ title: tab.text }, this.tooltipSettings )}
                    .theme=${this.currentTheme}
                >
                    <span class="tbs-cbtn-icons ${tab.icon}"></span>
                    <span>${tab.text}</span>
                </iui-tooltip>
            </div>
        `;
    };

    constructor(){
        this.tabs = [
            { 
                id: 1,
                icon: 'library',
                text: 'Books',
                body: 'Curabitur pretium tincidunt lacus. Nulla gravida orci a odio. Nullam varius, turpis et commodo pharetra, est eros bibendum elit, nec luctus magna felis sollicitudin mauris. Integer in mauris eu nibh euismod gravida. Duis ac tellus et risus vulputate vehicula. Donec lobortis risus a elit. Etiam tempor.'
            },
            { 
                id: 2,
                icon: 'album',
                text: 'Music',
                body: 'Pellentesque malesuada nulla a mi. Duis sapien sem, aliquet nec, commodo eget, consequat quis, neque. Aliquam faucibus, elit ut dictum aliquet, felis nisl adipiscing sapien, sed malesuada diam lacus eget erat. Cras mollis scelerisque nunc. Nullam arcu. Aliquam consequat.'
            },
            { 
                id: 3,
                icon: 'star-empty',
                text: 'Favorites',
                body: 'Fusce convallis, mauris imperdiet gravida bibendum, nisl turpis suscipit mauris, sed placerat ipsum urna sed risus. In convallis tellus a mauris. Curabitur non elit ut libero tristique sodales. Mauris a lacus. Donec mattis semper leo. In hac habitasse platea dictumst.'
            }
        ];
    }
}
