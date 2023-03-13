import React, { Component } from 'react';
import { html } from 'integralui-web/external/lit-element.js';

import 'integralui-web/components/integralui.card.js';
import 'integralui-web/components/integralui.rating.js';
import IntegralUIListViewComponent from 'integralui-web/wrappers/react.integralui.listview.js';
import { IntegralUITheme } from 'integralui-web/components/integralui.enums.js';
import { iuiListViewCardsStyle } from './listview-cards.style';

class ListViewCards extends Component {
    constructor(props){
        super(props);

        this.state = {
            ctrlSize: { width: 650, height: 400 },
            currentItemSize: { width: 177, height: 202 },
            currentResourcePath: '../../../integralui-web/icons',
            currentTheme: IntegralUITheme.Office,
            items: [
                { id: 1, icon: "sci-fi", text: "Star Trek", year: "2009", rating: 8.1, description: "The brash James T. Kirk tries to live up to his father's legacy with Mr. Spock keeping him in check as a vengeful Romulan from the future creates black holes to destroy the Federation one planet at a time." },
                { id: 2, icon: "adventure", text: "Cast Away", year: "2000", rating: 7.7, description: "A FedEx executive undergoes a physical and emotional transformation after crash landing on a deserted island." },
                { id: 3, icon: "action", text: "Gladiator", year: "2000", rating: 8.5, description: "A former Roman General sets out to exact vengeance against the corrupt emperor who murdered his family and sent him into slavery." },
                { id: 4, icon: "drama", text: "Malèna", year: "2000", rating: 7.5, description: "Amidst the war climate, a teenage boy discovering himself becomes love-stricken by Malèna, a sensual woman living in a small, narrow-minded Italian town." },
                { id: 5, icon: "music", text: "Moulin Rouge", year: "2001", rating: 7.6, description: "A poor Bohemian poet in 1890s Paris falls for a beautiful courtesan and nightclub star whom a jealous duke covets." },
                { id: 6, icon: "comedy", text: "Snatch", year: "2000", rating: 8.3, description: "Unscrupulous boxing promoters, violent bookmakers, a Russian gangster, incompetent amateur robbers and supposedly Jewish jewelers fight to track down a priceless stolen diamond." },
                { id: 7, icon: "biography", text: "A Beautiful Mind", year: "2001", rating: 8.2, description: "After John Nash, a brilliant but asocial mathematician, accepts secret work in cryptography, his life takes a turn for the nightmarish." },
                { id: 8, icon: "crime", text: "Black Hawk Down", year: "2001", rating: 7.7, description: "The story of 160 elite U.S. soldiers who dropped into Mogadishu in October 1993 to capture two top lieutenants of a renegade warlord, but found themselves in a desperate battle with a large force of heavily-armed Somalis." },
                { id: 9, icon: "western", text: "Django Unchained", year: "2012", rating: 8.5, description: "With the help of a German bounty-hunter, a freed slave sets out to rescue his wife from a brutal plantation-owner in Mississippi."  },
                { id: 10, icon: "sci-fi", text: "Man of Steel", year: "2013", rating: 7.2, description: "An alien child is evacuated from his dying world and sent to Earth to live among humans. His peace is threatened when other survivors of his home planet invade Earth." },
                { id: 11, icon: "horror", text: "The Ring", year: "2002", rating: 7.1, description: "A journalist must investigate a mysterious videotape which seems to cause the death of anyone one week to the day after they view it." },
                { id: 12, icon: "romance", text: "40 Days and 40 Nights", year: "2002", rating: 5.6, description: "After a brutal break-up, a young man vows to stay celibate during the forty days of Lent, but finds the girl of his dreams and is unable to do anything about it." },
                { id: 13, icon: "sci-fi", text: "Minority Report", year: "2002", rating: 7.7, description: "In a future where a special police unit is able to arrest murderers before they commit their crimes, an officer from that unit is himself accused of a future murder." },
                { id: 14, icon: "comedy", text: "Scary Movie 3", year: "2003", rating: 5.5, description: "Cindy must investigate mysterious crop circles and video tapes, and help the President in preventing an alien invasion." },
                { id: 15, icon: "music", text: "Walk the Line", year: "2005", rating: 7.9, description: "A chronicle of country music legend Johnny Cash's life, from his early days on an Arkansas cotton farm to his rise to fame with Sun Records in Memphis, where he recorded alongside Elvis Presley, Jerry Lee Lewis, and Carl Perkins."  },
                { id: 16, icon: "romance", text: "How to Lose a Guy in 10 Days", year: "2003", rating: 6.4, description: "Benjamin Barry is an advertising executive and ladies' man who, to win a big campaign, bets that he can make a woman fall in love with him in 10 days." },
                { id: 17, icon: "crime", text: "The Dark Knight", year: "2008", rating: 9.1, description: "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice."  },
                { id: 18, icon: "horror", text: "American Psycho", year: "2000", rating: 7.6, description: "A wealthy New York City investment banking executive, Patrick Bateman, hides his alternate psychopathic ego from his co-workers and friends as he delves deeper into his violent, hedonistic fantasies." },
                { id: 19, icon: "drama", text: "The Grand Budapest Hotel", year: "2014", rating: 8.1, description: "A writer encounters the owner of an aging high-class hotel, who tells him of his early years serving as a lobby boy in the hotel's glorious years under an exceptional concierge." },
                { id: 20, icon: "comedy", text: "The Wolf of Wall Street", year: "2013", rating: 8.2, description: "Based on the true story of Jordan Belfort, from his rise to a wealthy stock-broker living the high life to his fall involving crime, corruption and the federal government." }
            ]
        }

        this.listRef = React.createRef();
    }

    // Templates ---------------------------------------------------------------------------------

    currentItemTemplate = (item) => { 
        return html`
            <iui-card
                .allowAnimation="${true}"
                .allowUpdate="${!this.isListScrolling()}"
                .customStyle="${iuiListViewCardsStyle}"
                .flipped="${item.flipped}"
                .footer="${{ front: false, back: false }}"
                .header="${{ back: false }}"
                .selected="${item.selected}"
                .size="${{ width: 161, height: 184 }}"
                .theme="${this.state.currentTheme}"
            >
                <div slot="front-header" @mousedown="${(e) => this.flipCard(e, item)}">
                    <div class="lview-ovw-title-large">${item.id}. ${item.text}</div>
                </div>
                <div slot="front-content">
                    <div class="lview-ovw-icon-large">
                        <span class="lview-ovw-icons ${item.icon}"></span>
                    </div><br />
                    <iui-rating .allowFocus="${false}" division="2" max="5" .customStyle="${iuiListViewCardsStyle}" .resourcePath=${this.state.currentResourcePath} .value=${item.rating} @valueChanged="${(e) => this.ratingValueChanged(e, item)}"></iui-rating>
                </div>
                <div slot="back-content" @mousedown="${(e) => this.flipCard(e, item)}">
                    <span>${item.description}</span>
                </div>
            </iui-card>
        `;
    }
        
    // Methods -----------------------------------------------------------------------------------

    ratingValueChanged(e, item){
        item.rating = e.detail.value;
    }
        
    flipCard(e, item){
        if (e.which === 1){
            item.flipped = item.flipped !== undefined ? !item.flipped : true;
            this.listRef.current.refresh();
        }
    }

    isListScrolling(){
        return this.listRef ? this.listRef.current.isScrolling() : false;
    }

    // Update ------------------------------------------------------------------------------------

    render() {
        return (
            <div>
                <h2>ListView / Cards</h2>
                <div className="sample-block">
                   <IntegralUIListViewComponent id="listview-cards" ref={this.listRef}
                        allowDrag={true}
                        allowDrop={true}
                        customStyle={iuiListViewCardsStyle}
                        items={this.state.items}
                        itemSize={this.state.currentItemSize}
                        itemTemplate={this.currentItemTemplate}
                        resourcePath={this.state.currentResourcePath}
                        size={this.state.ctrlSize}
                        theme={this.state.currentTheme}
                    ></IntegralUIListViewComponent>
                    <div className="feature-help">
                        <p><span className="initial-space"></span>Above demonstration shows vertical layout where Cards appear with information about movies set in front and back of the card. By clicking on card header, you can flip the card and show the card's back side.</p>
                        <p><span className="initial-space"></span>Each card has two sides, front and back. The front side shows a header with movie title, the movie genre represented by an icon and a Rating which you can change. The back side shows gerenral description about the movie.</p>
                        <p><span className="initial-space"></span>In addition, you can reorder items by left-click and drag over specific card. The drag and drop is dynamic, meaning while dragging a card other cards will move to make space showing where the card will be dropped. You can also create a copy of the Card by holding the SHIFT key. The dragging window will show copy/paste icon in center and on drop it a copy of dragged card will be placed.</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default ListViewCards;
