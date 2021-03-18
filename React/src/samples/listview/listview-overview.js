import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { html } from 'integralui-web/external/lit-element.js';

import IntegralUIListViewComponent from 'integralui-web/wrappers/react.integralui.listview.js';
import { IntegralUIScrollMode, IntegralUISelectionMode, IntegralUITheme } from 'integralui-web/components/integralui.enums.js';

import './listview-overview.css';
import { iuiListViewOverviewStyle } from './listview-overview.style.js';

class ListViewOverview extends Component {

    //
    // Initialization / Destruction --------------------------------------------------------------
    //

    constructor(props){
        super(props);

        this.state = {
            ctrlSize: { width: 650, height: 400 },
            currentResourcePath: 'integralui-web/icons',
            currentScrollMode: IntegralUIScrollMode.Vertical,
            currentSelectionMode: IntegralUISelectionMode.MultiExtended,
            currentTheme: IntegralUITheme.Office,
            expandBoxType: 'arrow',
            isAnimationAllowed: true,
            isDragAllowed: true,
            items: [
                { id: 1, icon: "sci-fi", text: "Star Trek", year: "2009", rating: 8.1 },
                { id: 2, icon: "adventure", text: "Cast Away", year: "2000", rating: 7.7  },
                { id: 3, icon: "action", text: "Gladiator ", year: "2000", rating: 8.5 },
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
                { id: 17, icon: "crime", text: "The Dark Knight", year: "2008", rating: 9.1  },
                { id: 18, icon: "horror", text: "American Psycho", year: "2000", rating: 7.6 },
                { id: 19, icon: "drama", text: "The Grand Budapest Hotel", year: "2014", rating: 8.1 },
                { id: 20, icon: "comedy", text: "The Wolf of Wall Street", year: "2013", rating: 8.2 }
            ],
            itemSize: { width: 143, height: 151 }
        }

        // References
        this._ctrlRef = React.createRef();
    }

    componentDidMount(){
    }

    //
    // Methods -----------------------------------------------------------------------------------
    //

    // General -----------------------------------------------------------------------------------

    getRating(value){
        return Math.floor(value / 2);
    }
    
    ratingValueChanged(e, item){
        item.rating = e.detail.value;

        // Or use teh code below to update the items from state
        //this.setState({ 
            //items: this.state.items.map(obj => obj.id === item.id ? Object.assign({}, obj, { rating: e.detail.value }) : obj)
        //});
    }

    //
    // Currently when using templates, the LitElement binding syntax is required
    // for properties, methods and events
    //
    // In addition when using IntegralUI components, the React wrappers are not needed in this case
    //
    currentItemTemplate = (item) => { 
        return html`
            <div class="lview-ovw-custom-item-large">
                <span class="lview-ovw-num-corner">${item.id}</span><br />
                <div class="lview-ovw-icon-large">
                    <span class="lview-ovw-icons ${item.icon}"></span>
                </div><br />
                <span class="lview-ovw-title-large">${item.text}</span><br />
                <iui-rating division="2" max="5" .resourcePath=${this.state.currentResourcePath} .value=${item.rating} @valueChanged="${(e) => this.ratingValueChanged(e, item)}"></iui-rating>
            </div>
        `;
    };

    // Update ------------------------------------------------------------------------------------

    render() {
        return (
            <div>
                <h2>ListView / Overview</h2>
                <div className="sample-block">
                    <IntegralUIListViewComponent id="listview-overview" ref={this._ctrlRef}
                        allowAnimation={this.state.isAnimationAllowed}
                        allowDrag={this.state.isDragAllowed} 
                        customStyle={iuiListViewOverviewStyle}
                        items={this.state.items}
                        itemSize={this.state.itemSize}
                        itemTemplate={this.currentItemTemplate}
                        resourcePath={this.state.currentResourcePath}
                        scrollMode={this.state.currentScrollMode}
                        selectionMode={this.state.currentSelectionMode}
                        size={this.state.ctrlSize}
                        theme={this.state.currentTheme}
                    > 
                    </IntegralUIListViewComponent>
                    <div className="feature-help">
                        <p><span className="initial-space"></span><strong><span className="code-name">IntegralUI</span> ListView</strong> is a native Web Component that displays list of items either in horizontal or vertical layout. Items can be reordered using advanced drag drop operations. You can load data on demand during run-time from local or remote data sources, and add custom HTML content in each item.</p>
                        <p><span className="initial-space"></span>Above demonstration shows vertical layout where items are arranged from left to right with vertical scrolling. You can also arrange items horizontally where items are displayed from top to bottom with horizontal scrolling.</p>
                        <p><span className="initial-space"></span>In addition, item content is arranged differently: horizontal layout shows item content in single line, while vertical layout shows item content in a box. To display ratings the <Link to="/rating">Rating</Link> component is used.</p>
                        <p><span className="initial-space"></span>You can reorder items by click and drag over specific item. A dragging window will appear, stating the target item and position at which item can be dropped. During drag drop operations, you can also create a copy of an item by holding the SHIFT key. The dragging window will change its icon, showing a + sign next to position marker.</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default ListViewOverview;
