import React, { Component } from 'react';
import { html } from 'integralui-web/external/lit-element.js';

import IntegralUIListViewComponent from 'integralui-web/wrappers/react.integralui.listview.js';
import IntegralUIRadioButtonComponent from 'integralui-web/wrappers/react.integralui.radiobutton.js';
import IntegralUIRadioGroupComponent from 'integralui-web/wrappers/react.integralui.radiogroup.js';
import { IntegralUIDragDropMode, IntegralUISelectionMode, IntegralUITheme } from 'integralui-web/components/integralui.enums.js';

import './listview-dragdrop-overview.css';
import { iuiListViewDragDropOverviewStyle } from './listview-dragdrop-overview.style.js';

class ListViewDDOverview extends Component {

    //
    // Initialization / Destruction --------------------------------------------------------------
    //

    constructor(props){
        super(props);

        this.state = {
            ctrlSize: { width: 500, height: 350 },
            currentDragDropMode: IntegralUIDragDropMode.Dynamic,
            currentItemSize: { width: 225, height: 40 },
            currentResourcePath: '../../integralui-web/icons',
            currentSelectionMode: IntegralUISelectionMode.MultiExtended,
            currentTheme: IntegralUITheme.Office,
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
            ],

            // Control PaneL
            allowDrag: true,
            allowDrop: true
        }

        this.listRef = React.createRef();
    }

    componentDidMount(){
        // Apply grouping
        this.state.items.forEach(item => item.group = item.icon);
        this.listRef.current.updateLayout();
    }

    // Templates ---------------------------------------------------------------------------------

    currentItemTemplate = (item) => { 
        return html`
            <div class="lvw-ddovw-item-content">
                <span class="lvw-ddovw-title">${item.text}</span>
                <span class="lvw-ddovw-year">${item.year}</span>
            </div>
        `;
    }

    // Events ------------------------------------------------------------------------------------

    onDragDropModeChecked(e){
        switch (e.detail.index){
            case 0: 
                this.setState({ currentDragDropMode: IntegralUIDragDropMode.Static });
                break;

            default: 
                this.setState({ currentDragDropMode: IntegralUIDragDropMode.Dynamic });
                break;
        }
    }

    // Update ------------------------------------------------------------------------------------

    render() {
        return (
            <div>
                <h2>ListView / Drag Drop Overview</h2>
                <div className="sample-block">
                    <IntegralUIListViewComponent id="listview-dragdrop-overview" ref={this.listRef}
                        allowDrag={this.state.allowDrag}
                        allowDrop={this.state.allowDrop}
                        customStyle={iuiListViewDragDropOverviewStyle}
                        dragDropMode={this.state.currentDragDropMode}
                        items={this.state.items}
                        itemSize={this.state.currentItemSize}
                        itemTemplate={this.currentItemTemplate}
                        resourcePath={this.state.currentResourcePath}
                        selectionMode={this.state.currentSelectionMode}
                        size={this.state.ctrlSize}
                        theme={this.state.currentTheme} 
                    ></IntegralUIListViewComponent>
                    <div className="sample-block-ddlvw-control-panel">
                        <label><input type="checkbox" defaultChecked={this.state.allowDrag} onChange={(e) => this.setState({ allowDrag: e.target.checked})} /> Allow Drag</label>
                        <label><input type="checkbox" defaultChecked={this.state.allowDrop} onChange={(e) => this.setState({ allowDrop: e.target.checked})} /> Allow Drop</label>
                        <br/>
                        <label>Drag Drop Mode: </label>
                        <IntegralUIRadioGroupComponent theme={this.state.currentTheme} buttonChecked={(e) => this.onDragDropModeChecked(e)}>
                            <IntegralUIRadioButtonComponent>Static</IntegralUIRadioButtonComponent>
                            <IntegralUIRadioButtonComponent checked={true}>Dynamic</IntegralUIRadioButtonComponent>
                        </IntegralUIRadioGroupComponent>
                    </div>
                </div>
                <div className="feature-help" style={{ marginTop: '20px' }}>
                    <p><span className="initial-space"></span>In this sample you can drag drop items within the same ListView. There are two different ways to drag and drop items:</p>
                    <ul className="feature-points">
                        <li><span className="code-name">Static</span> - a drop marker appears with information about target item and an icon that shows drop position: Up or Down</li>
                        <li><span className="code-name">Dynamic</span> - a window with a list of dragged items appears and while dragging it all other items will move making space where items can drop</li>
                    </ul>
                    <p><span className="initial-space"></span>During drag drop operations, you can also create a copy of an item by holding the SHIFT key. In Static mode the dragging window will change its icon, showing a <span style={{ color: '#c60d0d', fontWeight: 'bold' }}>+</span> sign next to the position marker, while in Dynamic mode a <span style={{ color: '#c60d0d', fontWeight: 'bold' }}>copy/paste</span> icon will appear in the center of the dragging window.</p>
                    <br/>
                    <p><span className="initial-space"></span>By clicking on check boxes, you can change the built-in properties:</p>
                    <ul className="feature-points">
                        <li><span className="code-name">allowDrag</span> - determines whether items can be dragged</li>
                        <li><span className="code-name">allowDrop</span> - determines whether items can be dropped</li>
                        <li><span className="code-name">showGroups</span> - determines whether items are displayed n groups</li>
                        <li><span className="code-name">dragDropMode</span> - determines whether drag and drop is Static or Dynamic</li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default ListViewDDOverview;
