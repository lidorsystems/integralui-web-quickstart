import { Component } from '@angular/core';
import { html } from 'integralui-web/external/lit-element';

import 'integralui-web/components/integralui.panel';
import 'integralui-web/components/integralui.sidebar';
import 'integralui-web/components/integralui.tab';
import 'integralui-web/components/integralui.tooltip';
import { IntegralUITheme } from 'integralui-web/components/integralui.enums';
import { iuiSideBarTooltipStyle } from './sidebar-tooltip.style';

@Component({
    selector: '',
    templateUrl: './sidebar-tooltip.html',
    styleUrls: ['./sidebar-tooltip.css']
})
export class SideBarTooltip {
    public ctrlSize: any = { width: 400 };
    public currentResourcePath: string = 'assets/icons';
    public currentTheme: IntegralUITheme = IntegralUITheme.Office;
    public customStyle: any = iuiSideBarTooltipStyle;
    public isAnimationAllowed: boolean = true;
    public data: Array<any> = [];

    //
    // Tooltip settings
    //

    public tooltipSettings: any = {
        autoPopDelay: 3000,
        enabled: true,
        initialDelay: 1000,
        position: 'mouse',
        showMarker: true
    }

    constructor(){
        this.data = [
            { 
                id: 1,
                icon: 'tab-icon library',
                text: 'Books',
                body: 'Curabitur pretium tincidunt lacus. Nulla gravida orci a odio. Nullam varius, turpis et commodo pharetra, est eros bibendum elit, nec luctus magna felis sollicitudin mauris. Integer in mauris eu nibh euismod gravida. Duis ac tellus et risus vulputate vehicula. Donec lobortis risus a elit. Etiam tempor.'
            },
            { 
                id: 2,
                icon: 'tab-icon album',
                text: 'Music',
                body: 'Pellentesque malesuada nulla a mi. Duis sapien sem, aliquet nec, commodo eget, consequat quis, neque. Aliquam faucibus, elit ut dictum aliquet, felis nisl adipiscing sapien, sed malesuada diam lacus eget erat. Cras mollis scelerisque nunc. Nullam arcu. Aliquam consequat.'
            },
            { 
                id: 3,
                icon: 'tab-icon star-empty',
                text: 'Favorites',
                body: 'Fusce convallis, mauris imperdiet gravida bibendum, nisl turpis suscipit mauris, sed placerat ipsum urna sed risus. In convallis tellus a mauris. Curabitur non elit ut libero tristique sodales. Mauris a lacus. Donec mattis semper leo. In hac habitasse platea dictumst.'
            },
            { 
                id: 4,
                icon: 'tab-icon notes',
                text: 'Notes',
                body: 'Duis ac tellus et risus vulputate vehicula. Donec lobortis risus a elit. Etiam tempor. Ut ullamcorper, ligula eu tempor congue, eros est euismod turpis, id tincidunt sapien risus a quam. Maecenas fermentum consequat mi. Donec fermentum.'
            },
            { 
                id: 5,
                icon: 'tab-icon sports',
                text: 'Sports',
                body: 'Aliquam faucibus, elit ut dictum aliquet, felis nisl adipiscing sapien, sed malesuada diam lacus eget erat. Cras mollis scelerisque nunc. Nullam arcu. Aliquam consequat.'
            }
        ];
    } 

    // Templates -----------------------------------------------------------------------------

    currentTabTemplate = (tab: any) => { 
        return html`
            <div>
                <iui-tooltip
                    .enabled=${this.tooltipSettings.enabled}
                    .settings=${Object.assign({ title: tab.text }, this.tooltipSettings )}
                    .theme=${this.currentTheme}
                >
                    <span class="sdbr-ttp-icons ${tab.icon}"></span>
                </iui-tooltip>
            </div>
        `;
    };
}
