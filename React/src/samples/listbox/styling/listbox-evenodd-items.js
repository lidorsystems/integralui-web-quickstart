import React, { Component } from 'react';

import { IntegralUITheme } from 'integralui-web/components/integralui.enums.js';
import IntegralUIListBoxComponent from 'integralui-web/wrappers/react.integralui.listbox.js';

class ListBoxEvenOdd extends Component {
    constructor(props){
        super(props);

        this.state = {
            ctrlSize:  { width: 350, height: 300 },
            currentResourcePath: '../../../integralui-web/icons',
            currentTheme: IntegralUITheme.Office,
            items: [
                { id: 11, text: "Art", group: "Books"  },
                { id: 12, text: "Economics", group: "Books" },
                { id: 13, text: "Investing", group: "Books", checked: true },
                { id: 14, text: "Management", group: "Books" },
                { id: 15, text: "Small Business", group: "Books" },
                { id: 16, text: "Health", group: "Books", checked: true },
                { id: 17, text: "Literature", group: "Books" },
                { id: 18, text: "Astronomy", group: "Books" },
                { id: 19, text: "Mathematics", group: "Books" },
                { id: 21, text: "Camera", icon: "camera", group: "Electronics", checked: true },
                { id: 22, text: "Cell Phones", group: "Electronics", checked: true },
                { id: 23, text: "Video Game Consoles", group: "Electronics" },
                { id: 31, text: "Blues", group: "Music" },
                { id: 32, text: "Classic Rock", group: "Music", checked: true },
                { id: 33, text: "Pop", group: "Music" },
                { id: 34, text: "Jazz", group: "Music" },
                { id: 41, text: "Games", group: "Software", checkState: 'checked' },
                { id: 42, text: "Operating Systems", group: "Software" },
                { id: 43, text: "Network & Servers", group: "Software" },
                { id: 44, text: "Security", group: "Software" },
                { id: 51, text: "Baseball", group: "Sports" },
                { id: 52, text: "Martial Arts", group: "Sports", checked: true },
                { id: 53, text: "Running", group: "Sports" },
                { id: 54, text: "Tennis", group: "Sports" }
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
                <h2>ListBox / Even/Odd Items</h2>
                <div className="sample-block">
                    <IntegralUIListBoxComponent id="listbox-evenodd" ref={this.listRef}
                        items={this.state.items}
                        resourcePath={this.state.currentResourcePath}
                        size={this.state.ctrlSize}
                        theme={this.state.currentTheme} 
                        updateComplete={() => this.onUpdateComplete()}
                    ></IntegralUIListBoxComponent>
                    <div className="feature-help">
                        <p><span className="initial-space"></span>An example of ListBox with items displayed in alternate colors.</p>
                        <p><span className="initial-space"></span>Each item can have a unique look. This is done by setting custom inline style to specific item. In case of this sample, we want to have even items in same color, and different color for odd items. This is done by creating two CSS styles which will be applied to even or odd items, accordingly to their order.</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default ListBoxEvenOdd;
