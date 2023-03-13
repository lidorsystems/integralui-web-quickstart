/*
  Copyright © 2016-2022 Lidor Systems. All rights reserved.

  This file is part of the "IntegralUI Web" Library. 
                                                                   
  The contents of this file are subject to the IntegralUI Web License, and may not be used except in compliance with the License.
  A copy of the License should have been installed in the product's root installation directory or it can be found at
  http://www.lidorsystems.com/products/web/studio/license-agreement.aspx.
                                                            
  This SOFTWARE is provided "AS IS", WITHOUT WARRANTY OF ANY KIND, either express or implied. See the License for the specific language 
  governing rights and limitations under the License. Any infringement will be prosecuted under applicable laws.                           
*/

import { Component } from '@angular/core';
import 'integralui-web/components/integralui.dockarea';
import 'integralui-web/components/integralui.dockpanel';
import 'integralui-web/components/integralui.panel';
import { IntegralUITheme } from 'integralui-web/components/integralui.enums';

@Component({
    selector: '',
    templateUrl: './dockpanel-overview.html',
    styleUrls: ['./dockpanel-overview.css']
})
export class DockPanelOverview {
    public ctrlSize: any = { height: 500 }
    public panels: Array<any> = [];
    public currentTheme: IntegralUITheme = IntegralUITheme.Office;

    constructor(){
        this.panels = [  
            { id: 1, text: 'Panel 1', dock:  'Left', size: { width: 150 } },
            { id: 2, text: 'Panel 2', dock: 'Top', size: { height: 50 } },
            { id: 3, text: 'Panel 3', dock: 'Right', size: { width: 250 } },
            { id: 4, text: 'Panel 4', dock: 'Bottom', size: { height: 200 } },
            { id: 5, text: 'Panel 5', dock: 'Fill' }
        ];
    }

    panelDockChanged(e: any){
        if (e.detail.data)
            this.panels
                .filter(panel => panel.id === e.detail.data.id)
                .map(panel => panel.dock = e.detail.dock);
    }
}
