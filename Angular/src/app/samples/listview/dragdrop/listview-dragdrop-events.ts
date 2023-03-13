import { Component, ElementRef, ViewChild } from '@angular/core';
import { html } from 'integralui-web/external/lit-element';

import 'integralui-web/components/integralui.listbox';
import 'integralui-web/components/integralui.listview';
import { IntegralUITheme } from 'integralui-web/components/integralui.enums';
import { iuiListViewDDEventStyle } from './listview-dragdrop-events.style';

@Component({
    selector: '',
    templateUrl: './listview-dragdrop-events.html',
    styleUrls: ['./listview-dragdrop-events.css']
})
export class ListViewDDEVents {
    // General settings
    public currentResourcePath: string = 'assets/icons';
    public currentTheme: IntegralUITheme = IntegralUITheme.Office;

    // ListView settings
    @ViewChild('listview', { static: false }) listview!: ElementRef;

    public currentItemSize: any = { width: 150, height: 32 }
    public items: Array<any> = [];

    // Event List settings
    @ViewChild('evList', { static: false }) evList!: ElementRef;

    public evListItems: Array<any> = [];
    public listStyle: any = iuiListViewDDEventStyle;

    private currentEvent: any = {
        cancelled: false,
        count: 0,
        name: '',
        position: -1,
        target: null
    }

    // Initialization ----------------------------------------------------------------------------

    constructor(){
        this.items = [
            { id: 1, icon: "sci-fi", text: "Star Trek", year: "2009", rating: 8.0 },
            { id: 2, icon: "adventure", text: "Cast Away", year: "2000", rating: 7.7  },
            { id: 3, icon: "action", text: "Gladiator", year: "2000", rating: 8.5 },
            { id: 4, icon: "drama", text: "Malèna", year: "2000", rating: 7.5 },
            { id: 5, icon: "music", text: "Moulin Rouge", year: "2001", rating: 7.6 },
            { id: 6, icon: "comedy", text: "Snatch", year: "2000", rating: 8.3  },
            { id: 7, icon: "biography", text: "A Beautiful Mind", year: "2001", rating: 8.2  },
            { id: 8, icon: "crime", text: "Black Hawk Down", year: "2001", rating: 7.7 },
            { id: 9, icon: "western", text: "Django Unchained", year: "2012", rating: 8.5  },
            { id: 10, icon: "sci-fi", text: "Man of Steel", year: "2013", rating: 7.2 },
            { id: 11, icon: "horror", text: "The Ring", year: "2002", rating: 7.1 },
            { id: 12, icon: "romance", text: "40 Days and 40 Nights", year: "2002", rating: 5.6 },
            { id: 13, icon: "sci-fi", text: "Minority Report", year: "2002", rating: 7.7 },
            { id: 14, icon: "comedy", text: "Scary Movie 3", year: "2003", rating: 5.5 },
            { id: 15, icon: "music", text: "Walk the Line", year: "2005", rating: 7.9  },
            { id: 16, icon: "romance", text: "How to Lose a Guy in 10 Days", year: "2003", rating: 6.4 },
            { id: 17, icon: "crime", text: "The Dark Knight", year: "2008", rating: 9.0  },
            { id: 18, icon: "horror", text: "American Psycho", year: "2000", rating: 7.6 },
            { id: 19, icon: "drama", text: "The Grand Budapest Hotel", year: "2014", rating: 8.1 },
            { id: 20, icon: "comedy", text: "The Wolf of Wall Street", year: "2013", rating: 8.2 }
        ];
    }   

    // Templates ---------------------------------------------------------------------------------

    currentEvListTemplate = (ev: any) => { 
        return html`
            <div>
                ${ev.count ? html`<span class="sample-event-count">${ev.count}</span>` : html``} 
                <span class="sample-event-name">${ev.name}</span>
                ${ev.cancelled ? html`<span class="sample-event-cancelled"> cancelled</span>` : html``} 
            </div>
            <div>
                ${ev.info} ${ev.position ? html`<span class="sample-event-value">at position: ${ev.position}</span>` : html``} 
            </div>
        `;
    };

    // Events ------------------------------------------------------------------------------------

    clearEventLog(){
        this.evListItems.length = 0;
        this.evList.nativeElement.updateLayout();
    }

    listDragStart(e: any){
        this.updateCurrentEvent(e, 'dragStart', true);

        this.currentEvent.info = 'fired when dragging of ' + e.detail.dragObj.text + ' starts';
        this.evListItems.unshift(this.currentEvent); 
        this.evList.nativeElement.updateLayout();
    }

    listDragEnter(e: any){
        this.updateCurrentEvent(e, 'dragEnter');

        this.currentEvent.info = 'fired when ' + e.detail.dragObj.text + ' enters the component space';
        this.evListItems.unshift(this.currentEvent); 
        this.evList.nativeElement.updateLayout();
    }
    
    listDragOver(e: any){
        this.updateCurrentEvent(e, 'dragOver');

        this.currentEvent.info = 'fired when ' + e.detail.dragObj.text + ' is dragged over ';
        this.currentEvent.info += this.currentEvent.target ? ' target: ' + this.currentEvent.target.text : 'component space';

        if (e.detail.targetObj){
            if (e.detail.targetObj.text === 'Gladiator')
                e.detail.cancel = true;
            else if (e.detail.targetObj.text === 'Cast Away' && e.detail.dropPos === 2)
                e.detail.cancel = true;
            else if (e.detail.targetObj.text === 'Malèna' && e.detail.dropPos === 1)
                e.detail.cancel = true;
        }

        this.currentEvent.cancelled = e.detail.cancel;

        if (this.currentEvent.count == 0)
            this.evListItems.unshift(this.currentEvent); 
        else 
            this.evListItems[0].count = this.currentEvent.count;

        this.evList.nativeElement.updateLayout();
    }
    
    listDragLeave(e: any){
        this.updateCurrentEvent(e, 'dragLeave');

        this.currentEvent.info = 'fired when ' + e.detail.dragObj.text + ' leaves the component space';
        this.evListItems.unshift(this.currentEvent); 
        this.evList.nativeElement.updateLayout();
    }
    
    listDragDrop(e: any){
        this.updateCurrentEvent(e, 'dragDrop');

        this.currentEvent.info = 'fired when ' + e.detail.dragObj.text + ' drops over ';
        this.currentEvent.info += this.currentEvent.target ? ' target: ' + this.currentEvent.target.text : 'component space';
        
        this.evListItems.unshift(this.currentEvent); 
        this.evList.nativeElement.updateLayout();
    }

    listDragEnd(e: any){
        this.updateCurrentEvent(e, 'dragEnd', true);

        this.currentEvent.info = 'fired when drag drop operation ends';
        this.evListItems.unshift(this.currentEvent); 
        this.evList.nativeElement.updateLayout();
    }

    updateCurrentEvent(e: any, name: string, skip?: boolean){
        let count = this.currentEvent.count;

        if (name === this.currentEvent.name){
            if (e.detail.targetObj){
                if (e.detail.targetObj === this.currentEvent.target){
                    if (e.detail.dropPos === this.currentEvent.position)
                        count++;
                    else
                        count = 0;
                }
                else {
                    count = 0;
                }
            }
            else if (e.detail.dropPos === this.currentEvent.position)
                count++;
            else
                count = 0;
        }
        else
            count = 0;

        this.currentEvent = {
            count: count,
            name: name,
            position: !skip ? e.detail.dropPos : undefined,
            target: e.detail.targetObj
        }
    }
}
