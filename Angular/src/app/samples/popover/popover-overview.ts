/*
  Copyright © 2016-2020 Lidor Systems. All rights reserved.

  This file is part of the "IntegralUI Web" Library. 
                                                                   
  The contents of this file are subject to the IntegralUI Web License, and may not be used except in compliance with the License.
  A copy of the License should have been installed in the product's root installation directory or it can be found at
  http://www.lidorsystems.com/products/web/studio/license-agreement.aspx.
                                                            
  This SOFTWARE is provided "AS IS", WITHOUT WARRANTY OF ANY KIND, either express or implied. See the License for the specific language 
  governing rights and limitations under the License. Any infringement will be prosecuted under applicable laws.                           
*/

import { Component, ElementRef, ViewChild } from '@angular/core';
import { html } from 'integralui-web/external/lit-element.js';

import 'integralui-web/components/integralui.popover.js';
import { IntegralUITheme } from 'integralui-web/components/integralui.enums.js';
import { iuiPopOverOverviewStyle } from './popover-overview.style.js';

@Component({
    selector: '',
    templateUrl: './popover-overview.html',
    styleUrls: ['./popover-overview.css']
})
export class PopOverOverviewSample {
    @ViewChild('popover', { static: false }) popover: ElementRef;

    public ctrlSize: any = { width: 400, height: 250 };
    public currentResourcePath: string = 'assets/integralui-web/icons';
    public currentTheme: IntegralUITheme = IntegralUITheme.Office;
    public customStyle: any = iuiPopOverOverviewStyle;
    public isPopoverActive: boolean = false;
    public popoverSettings: any = {
        activation: 'manual',
        autoPopDelay: 3000,
        closeButton: true,
        enabled: true,
        header: true,
        initialDelay: 100,
        position: 'right',
        showMarker: true,
        title: 'PopOver Title'
    }

    //
    // Currently when using templates, the LitElement binding syntax is required
    // for properties, methods and events
    //
    public currentContentTemplate = () => { 
        return html`
            <div class="popover-content">
                <div>Curabitur pretium tincidunt lacus. Nulla gravida orci a odio.</div>
                <button @click="${() => this.btnOk()}">Ok</button>
            </div>
        `;
    };

    ngAfterViewInit(){
        this.popover.nativeElement.contentTemplate = this.currentContentTemplate;
    }

    btnOk(){
        this.closePopup();

        alert("Ok button is clicked!");
    }

    updateEnabled(){
        let newSettings = Object.assign({}, this.popoverSettings);
        newSettings.enabled = !newSettings.enabled;

        this.popoverSettings = newSettings;
    }

    updateShowMarker(){
        let newSettings = Object.assign({}, this.popoverSettings);
        newSettings.showMarker = !newSettings.showMarker;
        
        this.popoverSettings = newSettings;
    }

    toggle(e){
        e.preventDefault();
        
        this.isPopoverActive = !this.isPopoverActive;
        e.stopPropagation();
    }

    closePopup(){
        this.isPopoverActive = false;
    }

    popoverClosed(){
        this.closePopup();
    }
}
