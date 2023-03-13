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
import { styleMap } from 'integralui-web/external/style-map';

import 'integralui-web/components/integralui.toaster';
import { IntegralUITheme, IntegralUIToastAlignment, IntegralUIToastType } from 'integralui-web/components/integralui.enums';

// Other components uised in this example
import 'integralui-web/components/integralui.button';
import 'integralui-web/components/integralui.checkbox';
import 'integralui-web/components/integralui.label';
import 'integralui-web/components/integralui.select';

@Component({
    selector: '',
    templateUrl: './toaster-overview.html',
    styleUrls: ['./toaster-overview.css']
})
export class ToasterOverviewSample {
    @ViewChild('toaster', { static: false }) toaster!: ElementRef;

    public alignmentOptions: Array<any> = [
        { text: 'BottomCenter' },
        { text: 'BottomFull' },
        { text: 'BottomLeft' },
        { text: 'BottomRight' },
        { text: 'TopCenter' },
        { text: 'TopFull' },
        { text: 'TopLeft' },
        { text: 'TopRight' }
    ];

    public currentResourcePath: string = 'assets/icons';
    public currentTheme: IntegralUITheme = IntegralUITheme.Office;
    public currentToastAlignment: any = null;
    public currentToastType: any = null;
    public isTemplateActive: boolean = false;
    public labelContentSize: any = { width: 300 }
    public toastDuration: number = 5000;
    public toastMessage: string = 'Sample message';
    public toastTitle: string = 'Info';
    public typeOptions: Array<any> = [
        { text: 'Error' },
        { text: 'Info' },
        { text: 'Success' },
        { text: 'Warning' }
    ];

    constructor(){
        this.currentToastAlignment = this.alignmentOptions[7];
        this.currentToastType = this.typeOptions[1];
    }

    //
    // Methods
    //

    getToastAlignment(){
        return this.currentToastAlignment ? this.currentToastAlignment.text : IntegralUIToastAlignment.TopRight;
    }

    // Events ------------------------------------------------------------------------------------

    onToastAlignmentChanged(e: any){
        this.currentToastAlignment = e.detail.item;
    }

    onToastTemplateChanged(e: any){
        this.isTemplateActive = e.detail.checked;
    }

    onToastTypeChanged(e: any){
        this.currentToastType = e.detail.item;
    }

    onShowClicked(){
        this.toaster.nativeElement.show({ title: this.toastTitle, text: this.toastMessage, type: this.currentToastType ? this.currentToastType.text : IntegralUIToastType.Info });
    }

    // Templates ---------------------------------------------------------------------------------
    
    currentContentTemplate = (toast: any) => {
        if (this.isTemplateActive)
            return html`<div>
                    <div style=${styleMap({ fontWeight: 'bold', marginBottom: '10px', position: 'relative' })}>
                        <span>${this.toastTitle}</span>
                        <span style=${styleMap({ position: 'absolute', fontSize: '1.5rem', right: 0, top: '-4px' })} @click="${() => this.hideToast(toast)}">&times;</span>
                    </div>
                    <hr style=${styleMap({ background: '#d9d9d9', border: 0, height: '1px' })} />
                    <span>${toast.text}</span>
                </div>`;

        return null;
    }

    hideToast(toast: any){
        this.toaster.nativeElement.hide(toast);
    }
}
