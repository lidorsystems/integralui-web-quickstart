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
import { html } from 'integralui-web/external/lit-element';

import 'integralui-web/components/integralui.popover';
import { IntegralUITheme } from 'integralui-web/components/integralui.enums';
import { iuiPopOverOverviewStyle } from './popover-overview.style';

@Component({
    selector: '',
    templateUrl: './popover-overview.html',
    styleUrls: ['./popover-overview.css']
})
export class PopOverOverviewSample {
    @ViewChild('popover', { static: false }) popover!: ElementRef;

    public ctrlSize: any = { width: 400, height: 250 };
    public currentResourcePath: string = 'assets/icons';
    public currentTheme: IntegralUITheme = IntegralUITheme.Office;
    public customStyle: any = iuiPopOverOverviewStyle;
    public isPopoverActive: boolean = false;
    public popoverSettings: any = {
        animation: {
            delay: 0,
            duration: 250,
            translateValue: 25
        },
        activation: 'manual',
        autoPopDelay: 3000,
        closeButton: true,
        enabled: true,
        header: true,
        initialDelay: 0,
        position: 'right',
        showMarker: true,
        title: 'PopOver Title',
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

    toggle(e: any){
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
