import React, { Component } from 'react';

import IntegralUIPivotGridComponent from 'integralui-web/wrappers/react.integralui.pivotgrid.js';
import { IntegralUITheme } from 'integralui-web/components/integralui.enums.js';

import './pivotgrid-overview.css';

class PivotGridOverview extends Component {

    //
    // Initialization / Destruction --------------------------------------------------------------
    //

    constructor(props){
        super(props);

        this.state = {
            ctrlSize: { height: 600 },
            currentResourcePath: 'integralui-web/icons',
            currentTheme: IntegralUITheme.Office,
            data: [
                /*{ title: "Test", genre: "Adventure", icon: "adventure", year: "2010", month: "September", date: "16 Sep 2010", quarter: "Q3", rating: 5 },
                { title: "Inception", genre: "Adventure", icon: "adventure", year: "2010", month: "July", date: "16 Jul 2010", quarter: "Q3", rating: 8.8 },
                { title: "Gravity", genre: "Sci-Fi", icon: "sci-fi", year: "2013", month: "October", date: "04 Oct 2013", quarter: "Q4", rating: 7.9 },
                { title: "Django Unchained", genre: "Western", icon: "western", year: "2012", month: "December", date: "25 Dec 2012", quarter: "Q4", rating: 8.5 },
                { title: "Toy Story 3", genre: "Animation", icon: "animation", year: "2010", month: "June", date: "18 Jun 2010", quarter: "Q2", rating: 8.4 },
                { title: "The Wolf of Wall Street", genre: "Comedy", icon: "comedy", year: "2013", month: "December", date: "25 Dec 2013", quarter: "Q4", rating: 8.2 },
                { title: "The Town", genre: "Action", icon: "action", year: "2010", month: "September", date: "17 Sep 2010", quarter: "Q3", rating: 7.6 },
                { title: "Nightcrawler", genre: "Drama", icon: "drama", year: "2014", month: "October", date: "31 Oct 2014", quarter: "Q4", rating: 7.9 },
                { title: "Locke", genre: "Drama", icon: "drama", year: "2014", month: "May", date: "29 May 2014", quarter: "Q2", rating: 7.1 },
                { title: "Prometheus", genre: "Sci-Fi", icon: "sci-Fi", year: "2012", month: "June", date: "08 Jun 2012", quarter: "Q2", rating: 7.0 },
                { title: "The Social Network", genre: "Biography", icon: "biography", year: "2010", month: "October", date: "01 Oct 2010", quarter: "Q4", rating: 7.8 },
                { title: "The Conjuring", genre: "Horror", icon: "horror", year: "2013", month: "July", date: "19 Jul 2013", quarter: "Q3", rating: 7.5 },
                { title: "Blue Jasmine", genre: "Drama", icon: "drama", year: "2013", month: "August", date: "23 Aug 2013", quarter: "Q3", rating: 7.3 },
                { title: "Black Swan", genre: "Drama", icon: "drama", year: "2010", month: "December", date: "17 Dec 2010", quarter: "Q4", rating: 8.0 },
                { title: "Prisoners", genre: "Drama", icon: "drama", year: "2013", month: "September", date: "20 Sep 2013", quarter: "Q3", rating: 8.1 },
                { title: "The Avengers", genre: "Sci-Fi", icon: "sci-Fi", year: "2012", month: "May", date: "04 May 2012", quarter: "Q2", rating: 8.2 },
                { title: "Snowpiercer", genre: "Action", icon: "action", year: "2014", month: "July", date: "11 Jul 2014", quarter: "Q3", rating: 7.0 },
                { title: "The Dark Knight Rises", genre: "Action", icon: "action", year: "2012", month: "July", date: "20 Jul 2012", quarter: "Q3", rating: 8.5},
                { title: "American Hustle", genre: "Drama", icon: "drama", year: "2013", month: "December", date: "20 Dec 2013", quarter: "Q4", rating: 7.3 },
                { title: "Dawn of the Planet of the Apes", genre: "Sci-Fi", icon: "sci-Fi", year: "2014", month: "July", date: "11 Jul 2014", quarter: "Q3", rating: 7.7 },
                { title: "Frozen", genre: "Animation", icon: "animation", year: "2013", month: "November", date: "27 Nov 2013", quarter: "Q4", rating: 7.7 },
                { title: "Edge of Tomorrow", genre: "Action", icon: "action", year: "2014", month: "June", date: "06 Jun 2014", quarter: "Q2", rating: 7.9 },
                { title: "Interstellar", genre: "Sci-Fi", icon: "sci-Fi", year: "2014", month: "November", date: "07 Nov 2014", quarter: "Q4", rating: 8.7 },
                { title: "Rush", genre: "Action", icon: "action", year: "2013", month: "September", date: "27 Sep 2013", quarter: "Q3", rating: 8.2 },
                { title: "Shutter Island", genre: "Mystery", icon: "mystery", year: "2010", month: "February", date: "19 Feb 2010", quarter: "Q1", rating: 8.1 },
                { title: "This Is the End", genre: "Comedy", icon: "comedy", year: "2013", month: "June", date: "12 Jun 2013", quarter: "Q2", rating: 5.7 },
                { title: "Titanic", genre: "Romance", icon: "romance", year: "1997", month: "December", date: "19 Dec 1997", quarter: "Q4", rating: 7.8 },
                { title: "The Martian", genre: "Adventure", year: "2015", icon: "adventure", month: "October", date: "02 Oct 2015", quarter: "Q4", rating: 8.0 }*/


                {
                    "Date": "07 Jan 2020",
                    "Year": "2020",
                    "Sector": "Food",
                    "Category": "Vegetables",
                    "Product": "Cabbage",
                    "Quantity": 34,
                    "Price": 12,
                    "Cost": 408
                },
                {
                    "Date": "10 Mar 2021",
                    "Year": "2021",
                    "Sector": "Food",
                    "Category": "Meat",
                    "Product": "Pork",
                    "Quantity": 99,
                    "Price": 150,
                    "Cost": 14850
                },
                {
                    "Date": "05 June 2020",
                    "Year": "2020",
                    "Sector": "Electronics",
                    "Category": "Computers",
                    "Product": "Laptop",
                    "Quantity": 1,
                    "Price": 534,
                    "Cost": 534
                },
                {
                    "Date": "07 May 2020",
                    "Year": "2020",
                    "Sector": "Food",
                    "Category": "Vegetables",
                    "Product": "Onion",
                    "Quantity": 57,
                    "Price": 9,
                    "Cost": 513
                },
                {
                    "Date": "09 Feb 2021",
                    "Year": "2021",
                    "Sector": "Food",
                    "Category": "Vegetables",
                    "Product": "Cabbage",
                    "Quantity": 30,
                    "Price": 11,
                    "Cost": 330
                },
                {
                    "Date": "15 June 2021",
                    "Year": "2021",
                    "Sector": "Electronics",
                    "Category": "Computers",
                    "Product": "PC",
                    "Quantity": 2,
                    "Price": 789,
                    "Cost": 1578
                },
            ],
            isAnimationAllowed: true,
            columns: [ 
                //{ name: "Sector", width: 300, expanded2: false }, 
                { name: "Year", width: 150, expanded2: false }, 
                //{ name: "Category", width: 120 }, 
            ],
            rows: [ 
                //{ name: "Year", expanded: true }, 
                { name: 'Category', expanded: true },
                { name: 'Product', expanded: false }
            ],
            values: [ 
                { name: "Quantity", formula: "SUM" }, 
                { name: "Cost", formula: "AVG", formula2: function(list, key){
                        let sum = 0;
                        list.forEach(obj => {
                            sum += obj[key] * 1000;
                        })
                
                        return sum;
                    }
                }
            ],
            filters: [
                /*{ 
                    name: "Year",
                    caseSensitive: false,
                    conditions: { value: '2020', operation: '=', join: '|' }
                },
                { 
                    name: "Category",
                    caseSensitive: false,
                    conditions: { value: 'Vegetables', operation: '=', join: '|' }
                }
                { 
                    name: "Cost",
                    caseSensitive: false,
                    conditions: { value: 500, operation: '<=' }
                },*/
                { 
                    name: "Quantity",
                    target: "Product",
                    caseSensitive: false,
                    conditions: { value: 60, operation: '<=' }
                },
                { 
                    name: "Cost",
                    target: "Category",
                    caseSensitive: false,
                    conditions: { value: 10000, operation: '<=' }
                },
            ]
        }
    }

    //
    // Methods -----------------------------------------------------------------------------------
    //

    // Update ------------------------------------------------------------------------------------

    render() {
        return (
            <div>
                <h2>PivotGrid / Overview</h2>
                <div className="sample-block" id="treegrid-overview">
                    <IntegralUIPivotGridComponent 
                        allowAnimation={this.state.isAnimationAllowed} 
                        columns={this.state.columns} 
                        data={this.state.data} 
                        filters={this.state.filters} 
                        resourcePath={this.state.currentResourcePath}
                        rowHeight={25}
                        rows={this.state.rows} 
                        showFooter={false}
                        size={this.state.ctrlSize}
                        theme={this.state.currentTheme}
                        values={this.state.values} 
                    ></IntegralUIPivotGridComponent>
                    <div className="feature-help">
                    </div>
                </div>
            </div>
        );
    }
}

export default PivotGridOverview;
