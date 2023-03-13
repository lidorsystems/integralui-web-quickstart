import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { html } from 'integralui-web/external/lit-element.js';

import IntegralUIListBoxComponent from 'integralui-web/wrappers/react.integralui.listbox.js';
import { IntegralUISelectionMode, IntegralUITheme } from 'integralui-web/components/integralui.enums.js';

import { iuiListBoxOverviewStyle } from './listbox-overview.style.js';

class ListBoxOverview extends Component {

    //
    // Initialization / Destruction --------------------------------------------------------------
    //

    constructor(props){
        super(props);

        this.state = {
            ctrlSize: { width: 500, height: 400 },
            currentResourcePath: '../integralui-web/icons',
            currentSelectionMode: IntegralUISelectionMode.MultiExtended,
            currentTheme: IntegralUITheme.Office,
            groups: [
                { name: "sci-fi", expanded: false },
                { name: "adventure" },
                { name: "action" },
                { name: "drama" },
                { name: "music" },
                { name: "comedy" },
                { name: "biography" },
                { name: "crime" },
                { name: "western" },
                { name: "horror" },
                { name: "romance" }
            ],
            isAnimationAllowed: true,
            isDragAllowed: true,
            isDropAllowed: true,
            items: [
                { id: 1, icon: "sci-fi", text: "Star Trek", year: "2009", rating: 8.0 },
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
                { id: 17, icon: "crime", text: "The Dark Knight", year: "2008", rating: 9.0  },
                { id: 18, icon: "horror", text: "American Psycho", year: "2000", rating: 7.6 },
                { id: 19, icon: "drama", text: "The Grand Budapest Hotel", year: "2014", rating: 8.1 },
                { id: 20, icon: "comedy", text: "The Wolf of Wall Street", year: "2013", rating: 8.2 }
            ]
        }

        this.state.items.forEach(item => item.group = item.icon);
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

        // Or use the code below to update the items from state
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
        if (item.type === 'group')
            return html`
                <div class="lbox-ovw-item-content">
                    <span class="lbox-ovw-icons ${item.name}"></span>
                    <span class="lbox-ovw-name">${item.name}</span>
                </div>
            `;
        else
            return html`
                <div class="lbox-ovw-item-content">
                    <span class="lbox-ovw-title">${item.text}</span>
                    <span class="lbox-ovw-year">${item.year}</span>
                    <iui-rating .allowFocus="${false}" division="2" max="5" .resourcePath=${this.state.currentResourcePath} .value=${item.rating} @valueChanged="${(e) => this.ratingValueChanged(e, item)}"></iui-rating>
                </div>
            `;
    };

    // Update ------------------------------------------------------------------------------------

    render() {
        return (
            <div>
                <h2>ListBox / Overview</h2>
                <div className="sample-block">
                    <IntegralUIListBoxComponent
                        allowAnimation={this.state.isAnimationAllowed}
                        allowDrag={this.state.isDragAllowed}
                        allowDrop={this.state.isDropAllowed}
                        customStyle={iuiListBoxOverviewStyle}
                        groups={this.state.groups}
                        items={this.state.items}
                        itemTemplate={this.currentItemTemplate}
                        resourcePath={this.state.currentResourcePath}
                        selectionMode={this.state.currentSelectionMode}
                        showGroups={true}
                        size={this.state.ctrlSize}
                        theme={this.state.currentTheme}
                    > 
                    </IntegralUIListBoxComponent>
                    <div className="feature-help">
                        <p><span className="initial-space"></span><strong><span className="code-name">IntegralUI</span> ListBox</strong> is a native Web Component that represents a list of custom HTML elements that you can reorder dynamically during run-time using drag drop operations.</p>
                        <p><span className="initial-space"></span>This example displays a list of movies represented by some general info about each movie: genre, title, rating and year when it is released. By click and hold of the left mouse button, you can drag and drop each item from the list over other items. To display ratings the <Link to="/rating">Rating</Link> component is used.</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default ListBoxOverview;
