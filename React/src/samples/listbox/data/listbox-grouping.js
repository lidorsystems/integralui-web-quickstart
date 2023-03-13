import React, { Component } from 'react';

import { IntegralUISortOrder, IntegralUITheme } from 'integralui-web/components/integralui.enums.js';

import IntegralUIListBoxComponent from 'integralui-web/wrappers/react.integralui.listbox.js';
import IntegralUIRadioButtonComponent from 'integralui-web/wrappers/react.integralui.radiobutton.js';
import IntegralUIRadioGroupComponent from 'integralui-web/wrappers/react.integralui.radiogroup.js';
import IntegralUISelectComponent from 'integralui-web/wrappers/react.integralui.select.js';

import './listbox-grouping.css';

class ListBoxGrouping extends Component {
    constructor(props){
        super(props);

        this.state = {
            ctrlSize: { width: 500, height: 400 },
            currentResourcePath: '../../integralui-web/icons',
            currentSorting: IntegralUISortOrder.None,
            currentTheme: IntegralUITheme.Office,
            groups: [
                { name: "Dairy" },
                { name: "Fruits", expanded: false },
                { name: "Grains" },
                { name: "Meat" },
                { name: "Sweets", expanded: false },
                { name: "Vegetables" }
            ],
            items: [
                { id: 1, genre: "sci-fi", text: "Star Trek", year: "2009", rating: 8 },
                { id: 2, genre: "adventure", text: "Cast Away", year: "2000", rating: 7  },
                { id: 3, genre: "action", text: "Gladiator", year: "2000", rating: 8 },
                { id: 4, genre: "drama", text: "Malèna", year: "2000", rating: 7 },
                { id: 5, genre: "music", text: "Moulin Rouge", year: "2001", rating: 7 },
                { id: 6, genre: "comedy", text: "Snatch", year: "2000", rating: 8  },
                { id: 7, genre: "biography", text: "A Beautiful Mind", year: "2001", rating: 8  },
                { id: 8, genre: "crime", text: "Black Hawk Down", year: "2001", rating: 7 },
                { id: 9, genre: "western", text: "Django Unchained", year: "2012", rating: 8  },
                { id: 10, genre: "sci-fi", text: "Man of Steel", year: "2013", rating: 7 },
                { id: 11, genre: "horror", text: "The Ring", year: "2002", rating: 7 },
                { id: 12, genre: "romance", text: "40 Days and 40 Nights", year: "2002", rating: 5 },
                { id: 13, genre: "sci-fi", text: "Minority Report", year: "2002", rating: 7 },
                { id: 14, genre: "comedy", text: "Scary Movie 3", year: "2003", rating: 5 },
                { id: 15, genre: "music", text: "Walk the Line", year: "2005", rating: 7  },
                { id: 16, genre: "romance", text: "How to Lose a Guy in 10 Days", year: "2003", rating: 6 },
                { id: 17, genre: "crime", text: "The Dark Knight", year: "2008", rating: 9.0  },
                { id: 18, genre: "horror", text: "American Psycho", year: "2000", rating: 7 },
                { id: 19, genre: "drama", text: "The Grand Budapest Hotel", year: "2014", rating: 8 },
                { id: 20, genre: "comedy", text: "The Wolf of Wall Street", year: "2013", rating: 8 }
            ],
            // Control PaneL
            groupList: [
                { text: 'Genre' },
                { text: 'Year' },
                { text: 'Rating' }
            ],
            selectedGroup: null
        }

        this.groupsGenre = [];
        this.groupsYear = [];
        this.groupsRating = [];

        this.listRef = React.createRef();
    }

    componentDidMount(){
        this.createGroups();
    }

    createGroups(){
        this.state.items.forEach(item => {
            if (!this.isGroupPresent(item.genre, this.groupsGenre))
                this.groupsGenre.push({ name: item.genre });

            if (!this.isGroupPresent(item.year, this.groupsYear))
                this.groupsYear.push({ name: item.year });

            if (!this.isGroupPresent(item.rating, this.groupsRating))
                this.groupsRating.push({ name: item.rating });
        });

        this.setState({ selectedGroup: this.state.groupList[0] });
    }

    isGroupPresent(value, list){
        let filtered = list.filter(obj => obj.name === value);

        return filtered.length > 0 ? true : false;
    }

    // Events ------------------------------------------------------------------------------------

    groupingChanged(e){
        let item = e.detail.item;
        let selGroups = [];

        switch (item.text){
            case 'Genre':
                selGroups = this.groupsGenre;
                break;

            case 'Year':
                selGroups = this.groupsYear;
                break;

            case 'Rating':
                selGroups = this.groupsRating;
                break;
        }

        this.setState({ groups: selGroups });
        
        // Update the item group based on selected group by option
        this.state.items.forEach(obj => obj.group = obj[item.text.toLowerCase()]);
        this.listRef.current.updateLayout();
    }

    onSortingChecked(e){
        let selSorting = IntegralUISortOrder.None;

        switch (e.detail.index){
            case 1: 
                selSorting = IntegralUISortOrder.Ascending;
                break;

            case 2: 
                selSorting = IntegralUISortOrder.Descending;
                break;

            default: 
                selSorting = IntegralUISortOrder.None;
                break;
        }

        this.setState({ currentSorting: selSorting });
        this.listRef.current.updateLayout();
    }

    // Update ------------------------------------------------------------------------------------

    render() {
        return (
            <div>
                <h2>ListBox / Grouping</h2>
                <div className="sample-block">
                    <IntegralUIListBoxComponent id="listbox-grouping" ref={this.listRef}
                        groups={this.state.groups}
                        items={this.state.items}
                        resourcePath={this.state.currentResourcePath}
                        showGroups={true}
                        size={this.state.ctrlSize}
                        sorting={this.state.currentSorting}
                        theme={this.state.currentTheme}
                    ></IntegralUIListBoxComponent>
                    <div className="listbox-grouping-panel">
                        <label>Group by: </label>
                        <IntegralUISelectComponent allowAnimation={true} items={this.state.groupList} resourcePath={this.state.currentResourcePath} selectedItem={this.state.selectedGroup} theme={this.state.currentTheme} selectedIndexChanged={(e) => this.groupingChanged(e)}></IntegralUISelectComponent>
                        <br/>
                        <label>Sorting: </label>
                        <IntegralUIRadioGroupComponent theme={this.state.currentTheme} buttonChecked={(e) => this.onSortingChecked(e)}>
                            <IntegralUIRadioButtonComponent checked={true}>None</IntegralUIRadioButtonComponent>
                            <IntegralUIRadioButtonComponent>Ascending</IntegralUIRadioButtonComponent>
                            <IntegralUIRadioButtonComponent>Descending</IntegralUIRadioButtonComponent>
                        </IntegralUIRadioGroupComponent>
                    </div>
                    <div className="feature-help">
                        <p><span className="initial-space"></span>In this example, you can change the group by which items in ListBox are grouped. Based on provided data, groups are created and changed dynamically.</p>
                        <p><span className="initial-space"></span>Each item object has a <strong>group</strong> field that determines the group under which it will appear. For grouping to work, the following is required:</p>
                        <ul className="feature-points">
                            <li>ListBox must have <strong>showGroups</strong> property set to true</li>
                            <li>There should be a list of group objects with name set, applied to the ListBox using the <strong>groups</strong> property</li>
                            <li>Each item object needs to have its <strong>group</strong> field set to specific group name from provided group list</li>
                            <li>If item doesn't have group set, it will appear under default 'Other' group</li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

export default ListBoxGrouping;
