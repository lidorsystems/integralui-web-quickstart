import React, { Component } from 'react';

import { IntegralUISortOrder, IntegralUITheme } from 'integralui-web/components/integralui.enums.js';

import IntegralUICheckBoxComponent from 'integralui-web/wrappers/react.integralui.checkbox.js';
import IntegralUIRadioButtonComponent from 'integralui-web/wrappers/react.integralui.radiobutton.js';
import IntegralUIRadioGroupComponent from 'integralui-web/wrappers/react.integralui.radiogroup.js';
import IntegralUIListBoxComponent from 'integralui-web/wrappers/react.integralui.listbox.js';

import './listbox-sorting-overview.css';

class ListBoxSortingOverview extends Component {
    constructor(props){
        super(props);

        this.state = {
            ctrlSize: { width: 350, height: 300 },
            currentResourcePath: '../../../integralui-web/icons',
            currentSorting: IntegralUISortOrder.None,
            currentTheme: IntegralUITheme.Office,
            groups: [
                { name: "Driving/Racing" },
                { name: "Role-Playing", expanded: false },
                { name: "Action" },
                { name: "Shooter" },
                { name: "Sports", expanded: false },
                { name: "Adventure" },
                { name: "First-Person" },
                { name: "Platformer", expanded: false },
                { name: "MMO" }
            ],
            items: [
                { id: 111, text: "DiRT 3", group: "Driving/Racing" },
                { id: 112, text: "Ridge Racer Unbounded", group: "Driving/Racing" },
                { id: 113, text: "TrackMania 2", group: "Driving/Racing" },
                { id: 121, text: "Dark Souls 2", group: "Role-Playing" },
                { id: 122, text: "Mass Effect 3", group: "Role-Playing" },
                { id: 123, text: "The Elder Scrolls V: Skyrim", group: "Role-Playing" },
                { id: 124, text: "Divinity: Original Sin", group: "Role-Playing" },
                { id: 125, text: "Fallout: New Vegas", group: "Role-Playing" },
                { id: 131, text: "Diablo 3", group: "Action" },
                { id: 132, text: "Gears of War", group: "Action" },
                { id: 133, text: "F.E.A.R.", group: "Action" },
                { id: 134, text: "Path of Exile", group: "Action" },
                { id: 135, text: "Grand Theft Auto IV", group: "Action" },
                { id: 136, text: "Divine Divinity", group: "Action" },
                { id: 137, text: "The Witcher 2", group: "Action" },
                { id: 141, text: "Battlefield: Bad Company 2", group: "Shooter" },
                { id: 142, text: "Call of Duty: Black Ops", group: "Shooter" },
                { id: 143, text: "BioShock Infinite", group: "Shooter" },
                { id: 144, text: "Crysis 2", group: "Shooter" },
                { id: 211, text: "FIFA 14", group: "Sports" },
                { id: 212, text: "Madden NFL 25", group: "Sports" },
                { id: 221, text: "Assassin's Creed IV", group: "Adventure" },
                { id: 222, text: "Tomb Raider", group: "Adventure" },
                { id: 223, text: "Metal Gear Solid V", group: "Adventure" },
                { id: 311, text: "Battlefield 4", group: "First-Person" },
                { id: 312, text: "Call of Duty: Ghosts", group: "First-Person" },
                { id: 313, text: "Killzone: Shadow Fall", group: "First-Person" },
                { id: 321, text: "Rayman Legends", group: "Platformer" },
                { id: 322, text: "Rogue Legacy", group: "Platformer" },
                { id: 323, text: "1001 Spikes", group: "Platformer" },
                { id: 333, text: "Final Fantasy XIV Online", group: "MMO" }
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
                <h2>ListBox / Sorting Overview</h2>
                <div className="sample-block">
                    <IntegralUIListBoxComponent id="listbox-sorting-overview" ref={this.listRef}
                        groups={this.state.groups}
                        items={this.state.items}
                        resourcePath={this.state.currentResourcePath}
                        showGroups={this.state.isGrouped}
                        size={this.state.ctrlSize}
                        sorting={this.state.currentSorting}
                        theme={this.state.currentTheme} 
                    ></IntegralUIListBoxComponent>
                    <div className="listbox-sorting-overview-panel">
                        <label>Sorting: </label>
                        <IntegralUIRadioGroupComponent theme={this.state.currentTheme} buttonChecked={(e) => this.onSortingChecked(e)}>
                            <IntegralUIRadioButtonComponent checked={true}>None</IntegralUIRadioButtonComponent>
                            <IntegralUIRadioButtonComponent>Ascending</IntegralUIRadioButtonComponent>
                            <IntegralUIRadioButtonComponent>Descending</IntegralUIRadioButtonComponent>
                        </IntegralUIRadioGroupComponent>
                        <br/>
                        <IntegralUICheckBoxComponent resourcePath={this.state.currentResourcePath} theme={this.state.currentTheme} checkedChanged={(e) => this.onAllowGroupsChanged(e)}>Show Groups</IntegralUICheckBoxComponent><br/>
                    </div>
                    <div className="feature-help">
                        <p><span className="initial-space"></span>This sample demonstrates how to sort ListBox items in ascending or descending order. By clicking on buttons on right panel, you can see how items are sorted.</p>
                        <p>The following properties and methods are presented:</p>
                        <ul className="feature-points">
                            <li><span className="code-object">sorting</span> a property which determines the sort order</li>
                            <li><span className="code-object">sort</span> a method which sorts the ListBox items based on applied order</li>
                        </ul>
                        <p><span className="initial-space"></span>Sorting is performed using the item text, but if item has its value field set (it has higher priority than text), the value will be used.</p>
                        <p><span className="initial-space"></span>Although in this sample a basic sorting is used (a sorting of string values), you can create your own custom sorting by providing a <span style={{ color: '#c60d0d' }}>comparer</span> function as a second parameter of the sort method. In this way you can create any kind of custom sort operations.</p>
                        <p><span className="initial-space"></span>This example also shows dynamic scrolling, the scroll bar will appear only when mouse hovers over ListBox space.</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default ListBoxSortingOverview;
