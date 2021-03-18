import React, { Component } from 'react';

import IntegralUITreeViewComponent from 'integralui-web/wrappers/react.integralui.treeview.js';
import { IntegralUITheme } from 'integralui-web/components/integralui.enums.js';

class TreeViewLoadOnDemand extends Component {

    //
    // Initialization / Destruction --------------------------------------------------------------
    //

    constructor(props){
        super(props);

        this.state = {
            ctrlSize: { width: 350, height: 300 },
            currentResourcePath: '../../integralui-web/icons',
            currentTheme: IntegralUITheme.Office,
            items: [
                { id: 1, text: "Item 1", expanded: false, items: [], hasChildren: true },
                { id: 2, text: "Item 2", expanded: false, items: [], hasChildren: true },
                { id: 3, text: "Item 3", expanded: false, items: [], hasChildren: true }
            ]
        }

        this.treeRef = React.createRef();
    }

    //
    // Methods -----------------------------------------------------------------------------------
    //

    // General -----------------------------------------------------------------------------------

    // Make sure each node has a random set of child items
    getChildCount(){
        return 1 + Math.floor(Math.random() * 5);
    }

    // Make sure that some child items can have children
    itemHasChildren(){
        let num = 2 + Math.floor(Math.random() * 3);

        return num % 2 === 0 ? true : false;
    }

    // Handle the beforeExpand event to populate the expanding item with new data
    onBeforeExpand(e){
        let self = this;

        if (e.detail.item.items && e.detail.item.items.length === 0){
            // Replace the expanding icon with a loading icon
            self.treeRef.current.beginLoad(e.detail.item);

            let loadTimer = setTimeout(function(){
                // Get random number of child items
                let count: number = self.getChildCount();
                for (let i = 1; i <= count; i++){
                    // Create a child item
                    let childItem: any = {
                        expanded: false, 
                        hasChildren: self.itemHasChildren(), 
                        items: [],
                        text: e.detail.item.text + i
                    }

                    // Add the child item to the expanding item
                    e.detail.item.items.push(childItem);
                }

                // Restore the expanding icon
                self.treeRef.current.endLoad(e.detail.item);

                // Update the appareance of the TreeView
                self.treeRef.current.refresh();

                clearTimeout(loadTimer);
            }, 1000);

        }
    }

    // Update ------------------------------------------------------------------------------------

    render() {
        return (
            <div>
                <h2>TreeView / Load on Demand</h2>
                <div className="sample-block">
                    <IntegralUITreeViewComponent ref={this.treeRef}
                        items={this.state.items}
                        resourcePath={this.state.currentResourcePath}
                        size={this.state.ctrlSize}
                        theme={this.state.currentTheme}
                        beforeExpand={(e) => this.onBeforeExpand(e)}
                        > 
                    </IntegralUITreeViewComponent>
                </div>
                <div className="feature-help">
                    <p><span className="initial-space"></span>In above demo, when you click on expanding icon, a new random data is created and then inserted into the expanding item as its children. This process is accompanied with loading animation represented by custom loading icon that replaces the expanding icon for specified item. You can expand multiple items at once and new data will be added accordingly.</p>
                    <p><span className="initial-space"></span>You can load new data from a remote JSON file or a database into a specified item. Because this sample is offline, this functionality is not presented here.</p> 
                </div>
            </div>
        );
    }
}

export default TreeViewLoadOnDemand;
