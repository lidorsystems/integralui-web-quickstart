import React, { Component } from 'react';
import { html } from 'integralui-web/external/lit-element.js';

import { IntegralUITheme } from 'integralui-web/components/integralui.enums.js';
import IntegralUIListBoxComponent from 'integralui-web/wrappers/react.integralui.listbox.js';
import 'integralui-web/components/integralui.tooltip.js';

class ListBoxTooltip extends Component {
    constructor(props){
        super(props);

        this.state = {
            ctrlSize: { width: 350, height: 300 },
            currentResourcePath: '../../integralui-web/icons',
            currentTheme: IntegralUITheme.Office,
            isAnimationAllowed: true,
            groups: [
                { name: "Sci-Fi", expanded: false },
                { name: "Adventure" },
                { name: "Action" },
                { name: "Drama" },
                { name: "Music", expanded: false },
                { name: "Comedy" },
                { name: "Biography" },
                { name: "Crime" },
                { name: "Western", expanded: false },
                { name: "Horror" },
                { name: "Romance" }
            ],
            items: [
                { id: 1, text: "Star Trek", group: "Sci-Fi" },
                { id: 2, text: "Cast Away", group: "Adventure"  },
                { id: 3, text: "Gladiator", group: "Action" },
                { id: 4, text: "Malèna", group: "Drama" },
                { id: 5, text: "Moulin Rouge", group: "Music" },
                { id: 6, text: "Snatch", group: "Comedy"  },
                { id: 7, text: "A Beautiful Mind", group: "Biography"  },
                { id: 8, text: "Black Hawk Down", group: "Crime" },
                { id: 9, text: "Django Unchained", group: "Western"  },
                { id: 10, text: "Man of Steel", group: "Sci-Fi" },
                { id: 11, text: "The Ring", group: "Horror" },
                { id: 12, text: "40 Days and 40 Nights", group: "Romance" },
                { id: 13, text: "Minority Report", group: "Sci-Fi" },
                { id: 14, text: "Scary Movie 3", group: "Comedy" },
                { id: 15, text: "Walk the Line", group: "Music"  },
                { id: 16, text: "How to Lose a Guy in 10 Days", group: "Romance" },
                { id: 17, text: "The Dark Knight", group: "Crime"  },
                { id: 18, text: "American Psycho", group: "Horror"},
                { id: 19, text: "The Grand Budapest Hotel", group: "Drama" },
                { id: 20, text: "The Wolf of Wall Street", group: "Comedy" }
            ]
        }

        // Tooltip settings
        this.tooltipSettings = {
            autoPopDelay: 3000,
            enabled: true,
            initialDelay: 500,
            position: 'mouse',
            showMarker: true
        }
    }

    currentItemTemplate = (item) => { 
        return html`
            <div>
                <iui-tooltip
                    .enabled="${this.tooltipSettings.enabled}"
                    .settings="${Object.assign({ title: item.text }, this.tooltipSettings )}"
                    .theme="${this.state.currentTheme}"
                >
                    ${item.type === 'group'
                        ? html`<span>${item.name}</span>`
                        : html`<span>${item.text}</span>`
                    }
                </iui-tooltip>
            </div>
        `;
    };

    render() {
        return (
            <div>
                <h2>ListBox / Items with Tooltip</h2>
                <div className="sample-block">
                    <IntegralUIListBoxComponent id="listbox-tooltip"
                        allowAnimation={this.state.isAnimationAllowed}
                        groups={this.state.groups}
                        items={this.state.items}
                        itemTemplate={this.currentItemTemplate}
                        resourcePath={this.state.currentResourcePath}
                        showGroups={true}
                        size={this.state.ctrlSize}
                        theme={this.state.currentTheme} 
                    ></IntegralUIListBoxComponent>
                    <div className="feature-help">
                        <p><span className="initial-space"></span>In this example, each item has a tooltip attached. Whenever the mouse cursor is moved above the item, a tooltip will appear showing the item text.</p>
                        <p><span className="initial-space"></span>Tooltip is fully customizable, you can set the initial delay, how long the tooltip will remain visible, its position etc.</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default ListBoxTooltip;
