import React, { Component } from 'react';

import { IntegralUITheme } from 'integralui-web/components/integralui.enums.js';
import IntegralUIListViewComponent from 'integralui-web/wrappers/react.integralui.listview.js';

class ListViewEvenOdd extends Component {
    constructor(props){
        super(props);

        this.state = {
            ctrlSize:  { width: 600, height: 200 },
            currentItemSize: { width: 175, height: 32 },
            currentResourcePath: '../../../integralui-web/icons',
            currentTheme: IntegralUITheme.Office,
            items: [
                { id: 11, text: "Art"  },
                { id: 12, text: "Economics" },
                { id: 13, text: "Investing" },
                { id: 14, text: "Management" },
                { id: 15, text: "Small Business" },
                { id: 16, text: "Health" },
                { id: 17, text: "Literature" },
                { id: 18, text: "Astronomy" },
                { id: 19, text: "Mathematics" },
                { id: 21, text: "Camera", icon: "camera" },
                { id: 22, text: "Cell Phones" },
                { id: 23, text: "Video Game Consoles" },
                { id: 31, text: "Blues" },
                { id: 32, text: "Classic Rock" },
                { id: 33, text: "Pop" },
                { id: 34, text: "Jazz" },
                { id: 41, text: "Games" },
                { id: 42, text: "Operating Systems" },
                { id: 43, text: "Network & Servers" },
                { id: 44, text: "Security" },
                { id: 51, text: "Baseball" },
                { id: 52, text: "Martial Arts" },
                { id: 53, text: "Running" },
                { id: 54, text: "Tennis" }
            ]
        }

        this.listRef = React.createRef();
    }

    // Set the styles for even/odd items
    onUpdateComplete(){
        if (this.listRef && this.listRef.current){
            let list = this.listRef.current.getFullList();

            list.forEach((item, index) => {
                if (index % 2 === 0)
                    item.style = {
                        normal: { background: '#f5f5f5' }
                    }
                else 
                    item.style = {
                        normal: { background: '#e1e1e1' }
                    }
                
                item.style.selected = { fontWeight: 'bold' }
            });

            this.listRef.current.refresh();
        }
    }

    render() {

        return (
            <div>
                <h2>ListView / Even/Odd Items</h2>
                <div className="sample-block">
                    <IntegralUIListViewComponent id="listview-evenodd" ref={this.listRef}
                        items={this.state.items}
                        itemSize={this.state.currentItemSize}
                        resourcePath={this.state.currentResourcePath}
                        size={this.state.ctrlSize}
                        theme={this.state.currentTheme} 
                        updateComplete={() => this.onUpdateComplete()}
                    ></IntegralUIListViewComponent>
                    <div className="feature-help">
                        <p><span className="initial-space"></span>An example of ListView with items displayed in alternate colors.</p>
                        <p><span className="initial-space"></span>Each item can have a unique look. This is done by setting custom inline style to specific item. In case of this sample, we want to have even items in same color, and different color for odd items. This is done by creating two CSS styles which will be applied to even or odd items, accordingly to their order.</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default ListViewEvenOdd;
