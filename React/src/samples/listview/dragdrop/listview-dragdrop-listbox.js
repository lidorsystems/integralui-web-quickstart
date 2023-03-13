import React, { Component } from 'react';

import IntegralUIListBoxComponent from 'integralui-web/wrappers/react.integralui.listbox.js';
import IntegralUIListViewComponent from 'integralui-web/wrappers/react.integralui.listview.js';
import { IntegralUISelectionMode, IntegralUITheme } from 'integralui-web/components/integralui.enums.js';

import './listview-dragdrop-listbox.css';

class ListViewDDListBox extends Component {

    //
    // Initialization / Destruction --------------------------------------------------------------
    //

    constructor(props){
        super(props);

        this.state = {
            // General settings
            ctrlSize: { width: 350, height: 300 },
            currentResourcePath: '../../integralui-web/icons',
            currentSelectionMode: IntegralUISelectionMode.MultiExtended,
            currentTheme: IntegralUITheme.Office,

            // Control PaneL
            allowDrag: true,
            allowDrop: true,
            allowDrag2: true,
            allowDrop2: true,

            // ListView
            currentItemSize: { width: 150, height: 32 },
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

            // ListBox
            items2: []
        }
    }

    // Update ------------------------------------------------------------------------------------

    render() {
        return (
            <div>
                <h2>ListView / Drag Drop to ListBox</h2>
                <div className="sample-block">
                    <IntegralUIListViewComponent id="listview-1"
                        allowDrag={this.state.allowDrag}
                        allowDrop={this.state.allowDrop}
                        items={this.state.items}
                        itemSize={this.state.currentItemSize}
                        name="'ListView'"
                        resourcePath={this.state.currentResourcePath}
                        selectionMode={this.state.currentSelectionMode}
                        size={this.state.ctrlSize}
                        theme={this.state.currentTheme} 
                    ></IntegralUIListViewComponent>
                    <IntegralUIListBoxComponent id="listbox-1"
                        allowDrag={this.state.allowDrag2}
                        allowDrop={this.state.allowDrop2}
                        items={this.state.items2}
                        itemSize={this.state.itemSize}
                        name="'ListBox'"
                        resourcePath={this.state.currentResourcePath}
                        selectionMode={this.state.currentSelectionMode}
                        size={this.state.ctrlSize}
                        theme={this.state.currentTheme} 
                    ></IntegralUIListBoxComponent>
                    <br style={{ clear: 'both' }} />
                    <div style={{ display: 'inline-block', marginTop: '20px' }}>
                        <div style={{ float: 'left', width: '350px', marginRight: '30px' }} align="center">
                            <label style={{ marginRight: '30px' }}><input type="checkbox" defaultChecked={this.state.allowDrag} onChange={(e) => this.setState({ allowDrag: e.target.checked})} /> Allow Drag</label>
                            <label><input type="checkbox" defaultChecked={this.state.allowDrop} onChange={(e) => this.setState({ allowDrop: e.target.checked})} /> Allow Drop</label>
                        </div>
                        <div style={{ float: 'left', width: '350px' }} align="center">
                            <label style={{ marginRight: '30px' }}><input type="checkbox" defaultChecked={this.state.allowDrag2} onChange={(e) => this.setState({ allowDrag2: e.target.checked})} /> Allow Drag</label>
                            <label><input type="checkbox" defaultChecked={this.state.allowDrop2} onChange={(e) => this.setState({ allowDrop2: e.target.checked})} /> Allow Drop</label>
                        </div>
                        <br style={{ clear: 'both' }} />
                    </div>
                </div>
                <div className="feature-help" style={{ marginTop: '20px' }}>
                    <p><span className="initial-space"></span>In this sample you can drag drop items between ListView and ListBox components. The Dynamic drag and drop is active, which means when one or more items are dragged all other items will move and show the target position at which dragged items can drop.</p>
                    <p><span className="initial-space"></span>To create a copy of a dragged item(s), holding the SHIFT key just before item(s) are dropped. A <span style={{ color: '#c60d0d', fontWeight: 'bold' }}>copy/paste</span> icon will appear in the center of the dragging window.</p>
                    <p><span className="initial-space"></span>By clicking on check boxes, you can change the built-in properties:</p>
                    <ul className="feature-points">
                        <li><span className="code-name">allowDrag</span> - determines whether items can be dragged</li>
                        <li><span className="code-name">allowDrop</span> - determines whether items can be dropped</li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default ListViewDDListBox;
