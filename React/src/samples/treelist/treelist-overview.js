import React, { Component } from 'react';

import IntegralUITreeListComponent from 'integralui-web/wrappers/react.integralui.treelist.js';
import { IntegralUITheme } from 'integralui-web/components/integralui.enums.js';

import './treelist-overview.css';
import { iuiTreeListOverviewStyle } from './treelist-overview.style.js';

class TreeListOverview extends Component {

    //
    // Initialization / Destruction --------------------------------------------------------------
    //

    constructor(props){
        super(props);

        this.state = {
            ctrlSize: { width: 300, height: 350 },
            currentResourcePath: 'integralui-web/icons',
            currentTheme: IntegralUITheme.Office,
            isAnimationAllowed: true,
            treeItems: [
                { 
                    id: 1,
                    text: "Books",
                    icon: "icons-medium library",
                    items: [
                        { id: 11, pid: 1, text: "Art", icon: "icons-medium empty-doc"  },
                        { 
                            id: 12,
                            pid: 1,
                            text: "Business",
                            icon: "icons-medium people",
                            items: [
                                { id: 121, pid: 12, text: "Economics", icon: "icons-medium empty" },
                                { 
                                    id: 122,
                                    pid: 12,
                                    text: "Investing", 
                                    icon: "icons-medium economics",
                                    items: [
                                        { id: 1221, pid: 122, text: "Bonds" },
                                        { id: 1222, pid: 122, text: "Options" },
                                        { id: 1223, pid: 122, text: "Stocks" }
                                    ]
                                },
                                { id: 123, pid: 12, text: "Management", icon: "icons-medium empty" },
                                { id: 124, pid: 12, text: "Small Business", icon: "icons-medium empty" }
                            ]
                        },
                        { id: 13, pid: 1, text: "Health", icon: "icons-medium heart" },
                        { id: 14, pid: 1, text: "Literature", icon: "icons-medium empty" },
                        { 
                            id: 15,
                            pid: 1,
                            text: "Science",
                            icon: "icons-medium empty",
                            items: [
                                { id: 151, pid: 15, text: "Astronomy" },
                                { id: 152, pid: 15, text: "Mathematics" },
                                { id: 153, pid: 15, text: "Evolution" },
                                { id: 154, pid: 15, text: "Nature" }
                            ]
                        }
                    ]
                },
                { id: 2, text: "Computers", icon: "icons-medium empty" },
                {
                    id: 3,
                    text: "Electronics",
                    icon: "icons-medium empty",
                    items: [
                        { id: 31, pid: 3, text: "Camera", icon: "icons-medium camera" },
                        { id: 32, pid: 3, text: "Cell Phones", icon: "icons-medium empty" },
                        { id: 33, pid: 3, text: "Video Game Consoles", icon: "icons-medium empty" }
                    ]
                },
                { 
                    id: 4,
                    text: "Music", 
                    icon: "icons-medium album",
                    items: [
                        { id: 41, pid: 4, text: "Blues" },
                        { id: 42, pid: 4, text: "Classic Rock" },
                        { id: 43, pid: 4, text: "Pop" },
                        { id: 44, pid: 4, text: "Jazz" }
                    ]
                },
                { 
                    id: 5,
                    text: "Software",
                    icon: "icons-medium software",
                    items: [
                        { id: 51, pid: 5, text: "Games" },
                        { id: 52, pid: 5, text: "Operating Systems" },
                        { id: 53, pid: 5, text: "Network & Servers" },
                        { id: 54, pid: 5, text: "Security" }
                    ]
                },
                { 
                    id: 6,
                    text: "Sports",
                    icon: "icons-medium sports",
                    items: [
                        { id: 61, pid: 6, text: "Baseball" },
                        { id: 62, pid: 6, text: "Martial Arts" },
                        { id: 63, pid: 6, text: "Running" },
                        { 
                            id: 64,
                            pid: 6,
                            text: "Tennis",
                            items: [
                                { id: 641, pid: 64, text: "Accessories" },
                                { id: 642, pid: 64, text: "Balls" },
                                { id: 643, pid: 64, text: "Racquets" }
                            ]
                        }
                    ]
                },
                { id: 7, text: "Video Games", icon: "icons-medium empty" },
                { id: 8, text: "Watches", icon: "icons-medium clock" }
            ],
            treeTitle: "Categories"
        }

        this.state.currentSelection = null;

    }

    componentDidMount(){
    }

    //
    // Methods -----------------------------------------------------------------------------------
    //

    // Update ------------------------------------------------------------------------------------

    render() {
        return (
            <div>
                <h2>TreeList / Overview</h2>
                <div className="sample-block">
                    <IntegralUITreeListComponent id="treelist-overview"
                        allowAnimation={this.state.isAnimationAllowed}
                        customStyle={iuiTreeListOverviewStyle}
                        items={this.state.treeItems}
                        resourcePath={this.state.currentResourcePath}
                        selectedItem={this.state.currentSelection}
                        size={this.state.ctrlSize}
                        theme={this.state.currentTheme} 
                        title={this.state.treeTitle}
                    > 
                    </IntegralUITreeListComponent>
                    <div className="feature-help">
                        <p><span className="initial-space"></span><strong><span className="code-name">IntegralUI</span> TreeList</strong> is a native Web Component that displays one list of items from a tree hierarchy. By changing the currently selected item, the TreeList will display only the child items that belong to the selIn following sections of this article, you will find information about general features that are included in the TreeList component.</p>
                        <p><span className="initial-space"></span>In above demo there are different categories. By selecting a category, currently displayed list will slide to the left and a new list will show with sub-categories. The category name will appear in component header, from where you can move back to the previous selection.</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default TreeListOverview;
