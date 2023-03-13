import React, { Component } from 'react';

import { IntegralUISortOrder, IntegralUITheme } from 'integralui-web/components/integralui.enums.js';

import IntegralUIRadioButtonComponent from 'integralui-web/wrappers/react.integralui.radiobutton.js';
import IntegralUIRadioGroupComponent from 'integralui-web/wrappers/react.integralui.radiogroup.js';
import IntegralUIListViewComponent from 'integralui-web/wrappers/react.integralui.listview.js';

import './listview-sorting-overview.css';

class ListViewSortingOverview extends Component {
    constructor(props){
        super(props);

        this.state = {
            ctrlSize: { width: 400, height: 300 },
            currentItemSize: { width: 175, height: 32 },
            currentResourcePath: '../../../integralui-web/icons',
            currentSorting: IntegralUISortOrder.None,
            currentTheme: IntegralUITheme.Office,
            items: [
                { id: 111, text: "DiRT 3" },
                { id: 112, text: "Ridge Racer Unbounded" },
                { id: 113, text: "TrackMania 2" },
                { id: 121, text: "Dark Souls 2" },
                { id: 122, text: "Mass Effect 3" },
                { id: 123, text: "The Elder Scrolls V: Skyrim" },
                { id: 124, text: "Divinity: Original Sin" },
                { id: 125, text: "Fallout: New Vegas" },
                { id: 131, text: "Diablo 3" },
                { id: 132, text: "Gears of War" },
                { id: 133, text: "F.E.A.R." },
                { id: 134, text: "Path of Exile" },
                { id: 135, text: "Grand Theft Auto IV" },
                { id: 136, text: "Divine Divinity" },
                { id: 137, text: "The Witcher 2" },
                { id: 141, text: "Battlefield: Bad Company 2" },
                { id: 142, text: "Call of Duty: Black Ops" },
                { id: 143, text: "BioShock Infinite" },
                { id: 144, text: "Crysis 2" },
                { id: 211, text: "FIFA 14" },
                { id: 212, text: "Madden NFL 25" },
                { id: 221, text: "Assassin's Creed IV" },
                { id: 222, text: "Tomb Raider" },
                { id: 223, text: "Metal Gear Solid V" },
                { id: 311, text: "Battlefield 4" },
                { id: 312, text: "Call of Duty: Ghosts" },
                { id: 313, text: "Killzone: Shadow Fall" },
                { id: 321, text: "Rayman Legends" },
                { id: 322, text: "Rogue Legacy" },
                { id: 323, text: "1001 Spikes" },
                { id: 333, text: "Final Fantasy XIV Online" }
            ],
            isGrouped: false
        }
    
        this.listRef = React.createRef();
    }

    // Events ------------------------------------------------------------------------------------

    onAllowGroupsChanged(e){
        this.setState({ isGrouped: e.detail.checked });
    }

    onSortingChecked(e){
        let selSort = IntegralUISortOrder.None;

        switch (e.detail.index){
            case 1: 
                selSort = IntegralUISortOrder.Ascending;
                break;

            case 2: 
                selSort = IntegralUISortOrder.Descending;
                break;

            default: 
                selSort = IntegralUISortOrder.None;
                break;
        }

        this.setState({ currentSorting: selSort });
        this.listRef.current.updateLayout();
    }
    
    // Update ------------------------------------------------------------------------------------

    render() {

        return (
            <div>
                <h2>ListView / Sorting Overview</h2>
                <div className="sample-block">
                    <IntegralUIListViewComponent id="listview-sorting-overview" ref={this.listRef}
                        items={this.state.items}
                        itemSize={this.state.currentItemSize}
                        resourcePath={this.state.currentResourcePath}
                        size={this.state.ctrlSize}
                        sorting={this.state.currentSorting}
                        theme={this.state.currentTheme} 
                    ></IntegralUIListViewComponent>
                    <div className="listview-sorting-overview-panel">
                        <label>Sorting: </label>
                        <IntegralUIRadioGroupComponent theme={this.state.currentTheme} buttonChecked={(e) => this.onSortingChecked(e)}>
                            <IntegralUIRadioButtonComponent checked={true}>None</IntegralUIRadioButtonComponent>
                            <IntegralUIRadioButtonComponent>Ascending</IntegralUIRadioButtonComponent>
                            <IntegralUIRadioButtonComponent>Descending</IntegralUIRadioButtonComponent>
                        </IntegralUIRadioGroupComponent>
                    </div>
                    <div className="feature-help">
                        <p><span className="initial-space"></span>This sample demonstrates how to sort ListView items in ascending or descending order. By clicking on buttons on right panel, you can see how items are sorted.</p>
                        <p>The following properties and methods are presented:</p>
                        <ul className="feature-points">
                            <li><span className="code-object">sorting</span> a property which determines the sort order</li>
                            <li><span className="code-object">sort</span> a method which sorts the ListView items based on applied order</li>
                        </ul>
                        <p><span className="initial-space"></span>Sorting is performed using the item text, but if item has its value field set (it has higher priority than text), the value will be used.</p>
                        <p><span className="initial-space"></span>Although in this sample a basic sorting is used (a sorting of string values), you can create your own custom sorting by providing a <span style={{ color: '#c60d0d' }}>comparer</span> function as a second parameter of the sort method. In this way you can create any kind of custom sort operations.</p>
                        <p><span className="initial-space"></span>This example also shows dynamic scrolling, the scroll bar will appear only when mouse hovers over ListView space.</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default ListViewSortingOverview;
