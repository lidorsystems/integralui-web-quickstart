import { Component, ElementRef, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { html } from 'integralui-web/external/lit-element';
import { classMap } from 'integralui-web/external/class-map';
import { styleMap } from 'integralui-web/external/style-map';

import 'integralui-web/components/integralui.listbox';
import { IntegralUITheme } from 'integralui-web/components/integralui.enums';
import { iuiListBoxLoadJSONStyle } from './listbox-load-json.style';

@Component({
    selector: '',
    templateUrl: './listbox-load-json.html',
    styleUrls: ['./listbox-load-json.css']
})
export class ListBoxLoadJSON {
    @ViewChild('listbox', { static: false }) listbox!: ElementRef;

    public ctrlSize: any = { width: 500, height: 350 };
    public currentResourcePath: string = 'assets/icons';
    public currentTheme: IntegralUITheme = IntegralUITheme.Office;
    public listStyle: any = iuiListBoxLoadJSONStyle;
    public items: Array<any> = [];
        
    private listFields: any = {
        icon: 'itemIcon',
        id: 'itemId',
        text: 'label'
    }

    // Templates ---------------------------------------------------------------------------------

    currentItemTemplate = (item: any) => { 
        return html`
            <div class="lbox-dfjson-item-content">
                <table width="100%">
                    <tr>
                        <td rowspan="99"><span class=${classMap({ 'lbox-dfjson-icons': true, [item.itemIcon]: true, 'envelope-open': item.isOpen && item.itemIcon === 'envelope' })}></span></td>
                        <td width="75%"><span class="lbox-dfjson-label">${item.label}</span></td>
                        <td class="lbox-dfjson-date" width="25%">${item.date}</td>
                    </tr>
                    <tr><td colspan="2"><span class="lbox-dfjson-subtext">${item.subtext}</span></td></tr>
                    <tr style=${styleMap({ display: item.isOpen ? 'table-row' : 'none' })}><td colspan="2"><hr /></td><tr>
                </table>
            </div>
        `;
    }

    // Initialization ----------------------------------------------------------------------------

    constructor(private http: HttpClient){
    }   

    ngAfterViewInit(){
        // Load data into the ListBox from a JSON file
        this.loadFromJSON();
    }

    private loadFromJSON(){
        let self = this;

        // Use HTTP service to get data from the specified JSON file
        self.http.get("./assets/listbox-load-json-data.json").subscribe((data: any) => {
            // Suspend the component layout from updates, to increase performance
            self.listbox.nativeElement.suspendLayout();

            // Load data into the listbox
            self.listbox.nativeElement.loadData(data, self.listFields);

            // Resume and update the component layout
            self.listbox.nativeElement.resumeLayout();
        });
    }
}
