import React, { Component } from 'react';
import { html } from 'integralui-web/external/lit-element.js';

import IntegralUIListBoxComponent from 'integralui-web/wrappers/react.integralui.listbox.js';
import IntegralUIListViewComponent from 'integralui-web/wrappers/react.integralui.listview.js';
import { IntegralUITheme } from 'integralui-web/components/integralui.enums.js';
import { iuiListViewDDEventStyle } from './listview-dragdrop-events.style.js';

import './listview-dragdrop-events.css';

class ListViewDDEVents extends Component {
    constructor(props){
        super(props);

        this.state = {
            currentItemSize: { width: 150, height: 32 },
            currentResourcePath: '../../integralui-web/icons',
            currentTheme: IntegralUITheme.Office,
            evListItems: [],
            items: [
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
            ]
        }

        this.currentEvent = {
            cancelled: false,
            count: 0,
            name: '',
            position: -1,
            target: null
        }
    
        this.evListRef = React.createRef();
        this.listRef = React.createRef();
    }

    // Templates ---------------------------------------------------------------------------------

    currentEvListTemplate = (ev) => { 
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
        this.setState({ evListItems: [] });
        this.evListRef.current.updateLayout();
    }

    listDragStart(e){
        this.updateCurrentEvent(e, 'dragStart', true);

        this.currentEvent.info = 'fired when dragging of ' + e.detail.dragObj.text + ' starts';

        let evItems = [...this.state.evListItems];
        evItems.unshift(this.currentEvent); 
        this.setState({ evListItems: evItems });
    }

    listDragEnter(e){
        this.updateCurrentEvent(e, 'dragEnter');

        this.currentEvent.info = 'fired when ' + e.detail.dragObj.text + ' enters the component space';

        let evItems = [...this.state.evListItems];
        evItems.unshift(this.currentEvent); 
        this.setState({ evListItems: evItems });
    }
    
    listDragOver(e){
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

        let evItems = [...this.state.evListItems];

        if (this.currentEvent.count === 0){
            evItems.unshift(this.currentEvent); 
            this.setState({ evListItems: evItems });
        }
        else {
            evItems[0].count = this.currentEvent.count;
            this.evListRef.current.refresh();
        }
    }
    
    listDragLeave(e){
        this.updateCurrentEvent(e, 'dragLeave');

        this.currentEvent.info = 'fired when ' + e.detail.dragObj.text + ' leaves the component space';

        let evItems = [...this.state.evListItems];
        evItems.unshift(this.currentEvent); 
        this.setState({ evListItems: evItems });
    }
    
    listDragDrop(e){
        this.updateCurrentEvent(e, 'dragDrop');

        this.currentEvent.info = 'fired when ' + e.detail.dragObj.text + ' drops over ';
        this.currentEvent.info += this.currentEvent.target ? ' target: ' + this.currentEvent.target.text : 'component space';

        let evItems = [...this.state.evListItems];
        evItems.unshift(this.currentEvent); 
        this.setState({ evListItems: evItems });
    }

    listDragEnd(e){
        this.updateCurrentEvent(e, 'dragEnd', true);

        this.currentEvent.info = 'fired when drag drop operation ends';

        let evItems = [...this.state.evListItems];
        evItems.unshift(this.currentEvent); 
        this.setState({ evListItems: evItems });
    }

    updateCurrentEvent(e, name, skip){
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
    
    // Update ------------------------------------------------------------------------------------

    render() {
        return (
            <div>
                <h2>ListView / Drag Drop Events</h2>
                <div className="sample-block-listview-dragdrop-events">
                    <IntegralUIListViewComponent id="listview-dragdrop-events" ref={this.listRef}
                        allowDrag={true}
                        allowDrop={true}
                        items={this.state.items}
                        itemSize={this.state.currentItemSize}
                        resourcePath={this.state.currentResourcePath}
                        theme={this.state.currentTheme}
                        dragStart={(e) => this.listDragStart(e)}
                        dragEnter={(e) => this.listDragEnter(e)}
                        dragOver={(e) => this.listDragOver(e)}
                        dragLeave={(e) => this.listDragLeave(e)}
                        dragDrop={(e) => this.listDragDrop(e)}
                        dragEnd={(e) => this.listDragEnd(e)}
                    ></IntegralUIListViewComponent>
                    <div className="sample-event-block">
                        <button onClick={() => this.clearEventLog()}>Clear</button>
                        <p>Event log:</p>
                        <IntegralUIListBoxComponent id="listview-dragdrop-events-log" ref={this.evListRef}
                            allowFocus={false}
                            customStyle={iuiListViewDDEventStyle}
                            items={this.state.evListItems}
                            itemTemplate={this.currentEvListTemplate}
                            resourcePath={this.state.currentResourcePath}
                            theme={this.state.currentTheme}
                        ></IntegralUIListBoxComponent>
                    </div>
                    <div className="feature-help">
                        <p><span className="initial-space"></span>In this demo, you are free to drag and drop items one by one within the ListView. When item is dragged over a different item, you can drop it above or below the target item. In this particular example, you cannot drop items above or below the <strong><i>"Gladiator"</i></strong> item, the above and below positions are disabled within the <strong>dragOver</strong> event handler.</p>
                        <p><span className="initial-space"></span>To see which event is fired and in what order, the list on right logs all drag and drop events that occur, from newest to the oldest event fired. The list shows event name, information about the source and target item, position and how many times the event fires.</p>
                        <p><span className="initial-space"></span>Here is a list of available drag and drop events:</p>
                        <ul className="feature-points">
                            <li><span className="code-name">dragEnd</span> - occurs when HTML5 drag and drop operation ends over ListView space</li>
                            <li><span className="code-name">dragEnter</span> - occurs when item is dragged over ListView space for the first time</li>
                            <li><span className="code-name">dragDrop</span> - occurs when item drops within the ListView</li>
                            <li><span className="code-name">dragLeave</span> - occurs when dragged item leaves the ListView space</li>
                            <li><span className="code-name">dragOver</span> - occurs when item is dragged over other items and ListView space</li>
                            <li><span className="code-name">dragStart</span> - occurs  when HTML5 drag and drop operation starts over ListView space</li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

export default ListViewDDEVents;
