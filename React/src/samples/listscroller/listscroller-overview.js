import React, { Component } from 'react';
import { html } from 'integralui-web/external/lit-element.js';

import IntegralUIListScrollerComponent from 'integralui-web/wrappers/react.integralui.listscroller.js';
import { IntegralUITheme } from 'integralui-web/components/integralui.enums.js';

import './listscroller-overview.css';
import { iuiListScrollerOverviewStyle } from './listscroller-overview.style.js';

class ListScrollerOverview extends Component {

    //
    // Initialization / Destruction --------------------------------------------------------------
    //

    constructor(props){
        super(props);

        this.state = {
            ctrlSize: { width: 275 },
            currentItemSize: { width: 48, height: 36 },
            currentResourcePath: 'integralui-web/icons',
            currentTheme: IntegralUITheme.Office,
            items: [
                { id: 1, icon: "sci-fi", text: "Sci-Fi" },
                { id: 2, icon: "adventure", text: "Adventure",  },
                { id: 3, icon: "action", text: "Action " },
                { id: 4, icon: "drama", text: "Drama" },
                { id: 5, icon: "music", text: "Music" },
                { id: 6, icon: "comedy", text: "Comedy"  },
                { id: 7, icon: "biography", text: "Biography"  },
                { id: 8, icon: "crime", text: "Crime" },
                { id: 9, icon: "western", text: "Western"  },
                { id: 10, icon: "horror", text: "Horror" },
                { id: 11, icon: "romance", text: "Romance" }
            ]
        }
    }

    //
    // Methods -----------------------------------------------------------------------------------
    //

    // General -----------------------------------------------------------------------------------

    //
    // Currently when using templates, the LitElement binding syntax is required
    // for properties, methods and events
    //
    // In addition when using IntegralUI components, the React wrappers are not needed in this case
    //
    currentItemTemplate = (item) => { 
        return html`
            <div align="center">
                <div class="lscrl-ovw-icons ${item.icon}"></div>
            </div>
        `;
    };

    // Update ------------------------------------------------------------------------------------

    render() {
        return (
            <div>
                <h2>ListScroller / Overview</h2>
                <div className="sample-block">
                    <IntegralUIListScrollerComponent
                        customStyle={iuiListScrollerOverviewStyle}
                        items={this.state.items}
                        itemSize={this.state.currentItemSize}
                        itemTemplate={this.currentItemTemplate}
                        resourcePath={this.state.currentResourcePath}
                        size={this.state.ctrlSize}
                        theme={this.state.currentTheme}
                    > 
                    </IntegralUIListScrollerComponent>
                    <div className="feature-help">
                        <p><span className="initial-space"></span><strong><span className="code-name">IntegralUI</span> ListScroller</strong> is a native Web Component that displays a scrollable item list in horizontal or vertical layout. You can specify the item size and add any custom HTML elements or Angular components in each item. In addition, using different CSS styles you can customize the component overall appearance.</p>
                        <p><span className="initial-space"></span>The following properties and events are supported:</p>
                        <ul className="feature-points">
                            <li><span className="code-name">controlStyle</span> - Specifies an object that contains all style settings for the component</li>
                            <li><span className="code-name">data</span> - Specifies an object that holds data related to the component</li>
                            <li><span className="code-name">enabled</span> - Determines whether the component is enabled or disabled</li>
                            <li><span className="code-name">items</span> - Gets or sets the collection of items that are assigned to the component</li>
                            <li><span className="code-name">itemSize</span> - Specifies the width and height of items</li>
                            <li><span className="code-name">mouseWheelSpeed</span> - Specifies the scrolling speed of the mouse wheel</li>
                            <li><span className="code-name">name</span> - Uniquely identifies the component</li>
                            <li><span className="code-name">scrollMode</span> - Specifies whether the view is scrolled horizontally or vertically</li>
                            <li><span className="code-name">selectedItem</span> - An object that points to the currently selected item</li>
                            <li><span className="code-name">state</span> - Specifies the component state: disabled, hovered, etc.</li>
                            <br/>
                            <li><span className="code-name">afterSelect</span> - Occurs after item is selected</li>
                            <li><span className="code-name">beforeSelect</span> - Occurs before item is selected</li>
                            <li><span className="code-name">clear</span> - Occurs when all items are removed</li>
                            <li><span className="code-name">itemAdded</span> - Occurs after item is added to the collection</li>
                            <li><span className="code-name">itemAdding</span> - Occurs before item is added to the collection</li>
                            <li><span className="code-name">itemRemoved</span> - Occurs after item is removed from the collection</li>
                            <li><span className="code-name">itemRemoving</span> - Occurs before item is removed from the collection</li>
                            <li><span className="code-name">scrollModeChanged</span> - Occurs when scrollMode property changes</li>
                            <li><span className="code-name">scrollPosChanged</span> - Occurs when current scroll position changes</li>
                            <li><span className="code-name">selectionChanged</span> - Occurs whenever selection changes from one item to another</li>
                            <li><span className="code-name">updateComplete</span> - Occurs when updating of component layout is completed</li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

export default ListScrollerOverview;
