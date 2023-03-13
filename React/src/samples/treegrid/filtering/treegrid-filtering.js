import React, { Component } from 'react';
import { html } from 'integralui-web/external/lit-element.js';

import IntegralUITreeGridComponent from 'integralui-web/wrappers/react.integralui.treegrid.js';
import { IntegralUITheme } from 'integralui-web/components/integralui.enums.js';
import 'integralui-web/components/integralui.button.js';
import 'integralui-web/components/integralui.dropdownbutton.js';
import 'integralui-web/components/integralui.numeric.js';
import 'integralui-web/components/integralui.radiobutton.js';
import 'integralui-web/components/integralui.radiogroup.js';
import 'integralui-web/components/integralui.select.js';

import { iuiTreeGridFilteringStyle } from './treegrid-filtering.style.js';


class TreeGridFiltering extends Component {

    //
    // Initialization / Destruction --------------------------------------------------------------
    //

    constructor(props){
        super(props);
    
        this.state = {
            columns: [
                { id: 2, headerText: "Category/Name", width: 400 },
                { id: 3, headerText: "Author/Supplier", headerAlignment: "center", contentAlignment: "center", width: 225, allowFilter: true },
                { 
                    id: 4, 
                    format: { options: { style: 'currency', currency: 'USD' } }, 
                    headerText: "Price", 
                    headerAlignment: "center", 
                    contentAlignment: "right", 
                    width: 120, 
                    allowFilter: true
                }
            ],
            ctrlSize: { width: 800, height: 400 },
            currentResourcePath: '../../integralui-web/icons',
            currentSelectedColumn: null,
            currentTheme: IntegralUITheme.Office,
            dropDownSize: { width: 340, height: 220 },
            selectSize: { width: 200 },
            inputSize: { width: 100 },
            isAnimationAllowed: true,
            rows: []
        }
    
        // Author Filter Settings
        this.authorCombinator = 'And';
        this.authorValues = [ '', '' ];
        this.filterAuthors = [
            { text: ' ' },
            { text: 'equals' },
            { text: 'does not equal' },
            { text: 'begins with' },
            { text: 'does not begin with' },
            { text: 'ends with' },
            { text: 'does not end with' },
            { text: 'contains' },
            { text: 'does not contain' }
        ];
        this.selAuthor = [ this.filterAuthors[0], this.filterAuthors[0] ];
    
        // Price Filter Settings
        this.filterPrices = [
            { text: ' ' },
            { text: 'equals' },
            { text: 'does not equal' },
            { text: 'greater than' },
            { text: 'greater than or equal to' },
            { text: 'less than' },
            { text: 'less than or equal to' }
        ];
        this.priceCombinator = 'And';
        this.priceValues = [ '', '' ];
        this.selPrice = [ this.filterPrices[0], this.filterPrices[0] ];
        
        this.gridRef = React.createRef();
    }

    componentDidMount(){
        this.flatData = [
            { 
                id: 1,
                text: "Books",
                cells: [{ cid: 2, text: "Books" }, { cid: 3, text: "" }, { cid: 4, text: "" }]
            },
            { 
                id: 11,
                pid: 1,
                text: "History",
                cells: [{ cid: 2, text: "History" }, { cid: 3, text: "" }, { cid: 4, text: "" }]
            },
            { 
                id: 111,
                pid: 11,
                text: "The Wright Brothers",
                cells: [{ cid: 2, text: "The Wright Brothers", value: true }, { cid: 3, text: "David McCullough" }, { cid: 4, value: 18.00 }]
            },
            { 
                id: 112,
                pid: 11,
                text: "Capital in the Twenty-First Century",
                cells: [{ cid: 2, text: "Capital in the Twenty-First Century", value: true }, { cid: 3, text: "Thomas Piketty" }, { cid: 4, value: 22.99 }]
            },
            { 
                id: 12,
                pid: 1,
                text: "Science",
                cells: [{ cid: 2, text: "Science" }, { cid: 3, text: "" }, { cid: 4, text: "" }]
            },
            { 
                id: 121,
                pid: 12,
                text: "Thinking, Fast and Slow",
                cells: [{ cid: 2, text: "Thinking, Fast and Slow", value: true }, { cid: 3, text: "Daniel Kahneman" }, { cid: 4, value: 9.07 }]
            },
            { 
                id: 122,
                pid: 12,
                text: "A Brief History of Time",
                cells: [{ cid: 2, text: "A Brief History of Time", value: true }, { cid: 3, text: "Stephen Hawking" }, { cid: 4, value: 19.95 }]
            },
            { 
                id: 123,
                pid: 12,
                text: "Alan Turing: The Enigma",
                cells: [{ cid: 2, text: "Alan Turing: The Enigma", value: true }, { cid: 3, text: "Andrew Hodges" }, { cid: 4, value: 10.17 }]
            },
            { 
                id: 2,
                text: "Electronics",
                cells: [{ cid: 2, text: "Electronics" }, { cid: 3, text: "" }, { cid: 4, text: "" }]
            },
            { 
                id: 21,
                pid: 2,
                text: "Laptops",
                cells: [{ cid: 2, text: "Laptops" }, { cid: 3, text: "" }, { cid: 4, text: "" }]
            },
            { 
                id: 211,
                pid: 21,
                text: "Acer Aspire E 15 ES1-512-C88M",
                cells: [{ cid: 2, text: "Acer Aspire E 15 ES1-512-C88M", value: true }, { cid: 3, text: "Acer" }, { cid: 4, value: 229.00 }]
            },
            { 
                id: 212,
                pid: 21,
                text: "Lenovo Flex 2 14 14.0-Inch",
                cells: [{ cid: 2, text: "Lenovo Flex 2 14 14.0-Inch", value: true }, { cid: 3, text: "Lenovo" }, { cid: 4, value: 489.99 }]
            },
            { 
                id: 213,
                pid: 21,
                text: "HP Stream 11",
                cells: [{ cid: 2, text: "HP Stream 11", value: true }, { cid: 3, text: "HP" }, { cid: 4, value: 199.99 }]
            },
            { 
                id: 214,
                pid: 21,
                text: "ASUS ROG GL551JW-DS74",
                cells: [{ cid: 2, text: "ASUS ROG GL551JW-DS74", value: true }, { cid: 3, text: "ASUS" }, { cid: 4, value: 1199.00}]
            },
            { 
                id: 22,
                pid: 2,
                text: "Printers",
                cells: [{ cid: 2, text: "Printers" }, { cid: 3, text: "" }, { cid: 4, text: "" }]
            },
            { 
                id: 221,
                pid: 22,
                text: "Canon PIXMA MX922 Wireless",
                cells: [{ cid: 2, text: "Canon PIXMA MX922 Wireless", value: true }, { cid: 3, text: "Canon" }, { cid: 4, value: 99.99 }]
            },
            { 
                id: 222,
                pid: 22,
                text: "Lexmark MX81x/MX71x 550-Sheet Tray",
                cells: [{ cid: 2, text: "Lexmark MX81x/MX71x 550-Sheet Tray", value: true }, { cid: 3, text: "Lexmark" }, { cid: 4, value: 253.96 }]
            },
            { 
                id: 3,
                text: "Video Games",
                cells: [{ cid: 2, text: "Video Games" }, { cid: 3, text: "" }, { cid: 4, text: "" }]
            },
            { 
                id: 31,
                pid: 3,
                text: "PlayStation 4",
                cells: [{ cid: 2, text: "PlayStation 4" }, { cid: 3, text: "" }, { cid: 4, text: "" }]
            },
            { 
                id: 311,
                pid: 31,
                text: "Mortal Kombat X",
                cells: [{ cid: 2, text: "Mortal Kombat X", value: true }, { cid: 3, text: "Warner Home Video - Games" }, { cid: 4, value: 59.96 }]
            },
            { 
                id: 312,
                pid: 31,
                text: "Bloodborne",
                cells: [{ cid: 2, text: "Bloodborne", value: true }, { cid: 3, text: "Sony Computer Entertainment" }, { cid: 4, value: 59.96 }]
            },
            { 
                id: 313,
                pid: 31,
                text: "Destiny",
                cells: [{ cid: 2, text: "Destiny", value: true }, { cid: 3, text: "Activision Inc." }, { cid: 4, value: 35.94 }]
            },
            { 
                id: 31,
                pid: 3,
                text: "PC Games",
                cells: [{ cid: 2, text: "PC Games" }, { cid: 3, text: "" }, { cid: 4, text: "" }]
            },
            { 
                id: 311,
                pid: 31,
                text: "Grand Theft Auto V",
                cells: [{ cid: 2, text: "Grand Theft Auto V", value: true }, { cid: 3, text: "Rockstar Games" }, { cid: 4, value: 59.99 }]
            },
            { 
                id: 312,
                pid: 31,
                text: "The Elder Scrolls V: Skyrim",
                cells: [{ cid: 2, text: "The Elder Scrolls V: Skyrim", value: true }, { cid: 3, text: "Bethesda Softworks" }, { cid: 4, value: 39.99 } ]
            }
        ];

        this.gridRef.current.loadData(this.flatData);
    }

    //
    // Methods -----------------------------------------------------------------------------------
    //

    //
    // Currently when using templates, the LitElement binding syntax is required
    // for properties, methods and events
    //

    currentAuthorDropDownTemplate = (column) => { 
        return html`
            <div class="treegrid-ftr-panel">
                <label>Show rows where: </label><br/>
                <div class="treegrid-ftr-inline-block" style="margin-top:10px">
                    <iui-select .allowAnimation="${this.state.isAnimationAllowed}" .items=${this.filterAuthors} .selectedItem=${this.selAuthor[0]} .size=${this.state.selectSize} @selectionChanged="${(e) => this.filterAuthorChanged(e, 0)}"></iui-select>
                    <input type="text" style="width:100px;height:23px;" value="${this.authorValues[0]}" @change="${(e) => this._authorValueChange(e, 0)}" />
                </div>
                <div class="treegrid-ftr-inline-block">
                    <iui-radiogroup .resourcePath=${this.state.currentResourcePath} .theme=${this.state.currentTheme} @buttonChecked=${(e) => this.authorCombinatorChanged(e)}>
                        <iui-radiobutton .checked=${true}>And</iui-radiobutton>
                        <iui-radiobutton>Or</iui-radiobutton>
                    </iui-radiogroup>
                </div><br/>
                <div class="treegrid-ftr-inline-block">
                    <iui-select .allowAnimation="${this.state.isAnimationAllowed}" .items=${this.filterAuthors} .selectedItem=${this.selAuthor[1]} .size=${this.state.selectSize} @selectionChanged="${(e) => this.filterAuthorChanged(e, 1)}"></iui-select>
                    <input type="text" style="width:100px;height:23px;" value="${this.authorValues[1]}" @change="${(e) => this._authorValueChange(e, 1)}" />
                </div>
                <div class="treegrid-ftr-inline-block" style="display:block;margin-top:15px;text-align:center;">
                    <iui-button .allowAnimation=${this.state.isAnimationAllowed} .theme=${this.state.currentTheme} @click=${() => this.applyAuthors()}>Apply</iui-button>
                    <iui-button .allowAnimation=${this.state.isAnimationAllowed} .theme=${this.state.currentTheme} @click=${() => this.cancelAuthorsFilter()}>Cancel</iui-button>
                </div>
            </div>
        `;
    };

    currentPriceDropDownTemplate = (column) => { 
        return html`
            <div class="treegrid-ftr-panel">
                <label>Show rows where: </label><br/>
                <div class="treegrid-ftr-inline-block" style="margin-top:10px">
                    <iui-select .allowAnimation="${this.state.isAnimationAllowed}" .items=${this.filterPrices} .selectedItem=${this.selPrice[0]} .size=${this.state.selectSize} @selectionChanged="${(e) => this.filterPriceChanged(e, 0)}"></iui-select>
                    <iui-numeric .min=${0} .max=${1000} .resourcePath=${this.state.currentResourcePath} .size=${this.state.inputSize} .value=${this.priceValues[0]} .theme=${this.state.currentTheme} @valueChanged=${(e) => this.priceValueChanged(e, 0)}></iui-numeric>
                </div>
                <div class="treegrid-ftr-inline-block">
                    <iui-radiogroup .resourcePath=${this.state.currentResourcePath} .theme=${this.state.currentTheme} @buttonChecked=${(e) => this.priceCombinatorChanged(e)}>
                        <iui-radiobutton .checked=${true}>And</iui-radiobutton>
                        <iui-radiobutton>Or</iui-radiobutton>
                    </iui-radiogroup>
                </div><br/>
                <div class="treegrid-ftr-inline-block">
                    <iui-select .allowAnimation="${this.state.isAnimationAllowed}" .items=${this.filterPrices} .selectedItem=${this.selPrice[1]} .size=${this.state.selectSize} @selectionChanged="${(e) => this.filterPriceChanged(e, 1)}"></iui-select>
                    <iui-numeric .min=${0} .max=${1000} .resourcePath=${this.state.currentResourcePath} .size=${this.state.inputSize} .value=${this.priceValues[1]} .theme=${this.state.currentTheme} @valueChanged=${(e) => this.priceValueChanged(e, 1)}></iui-numeric>
                </div>
                <div class="treegrid-ftr-inline-block" style="display:block;margin-top:15px;text-align:center;">
                    <iui-button .allowAnimation=${this.state.isAnimationAllowed} .theme=${this.state.currentTheme} @click=${() => this.applyPrices()}>Apply</iui-button>
                    <iui-button .allowAnimation=${this.state.isAnimationAllowed} .theme=${this.state.currentTheme} @click=${() => this.cancelPriceFilter()}>Cancel</iui-button>
                </div>
            </div>
        `;
    };

    currentHeaderTemplate = (column) => { 
        switch (column.id){
            case 3: // Author
                return html`
                    <div>
                        <iui-dropdownbutton data-column-dropdown
                            .allowAnimation="${this.state.isAnimationAllowed}"
                            .contentTemplate="${this.currentAuthorDropDownTemplate}"
                            .customStyle=${iuiTreeGridFilteringStyle}
                            .data="${column}"
                            .dropDownAdjustment="${{ left: -this.state.dropDownSize.width + 28, top: 2 }}"
                            .dropDownIcon="${false}"
                            .dropDownSize="${this.state.dropDownSize}"
                            .expanded="${column.selected && column.isDropDownExpanded === true}"
                            @expandedChanged="${(e) => this.dropDownExpandedChanged(e, column)}"
                        >
                            <span class="filter-button"></span>
                        </iui-dropdownbutton>
                        <span class="header-label">${column.headerText}</span>
                    </div>
                `;

            case 4: // Price
                return html`
                    <div>
                        <iui-dropdownbutton data-column-dropdown
                            .allowAnimation="${this.state.isAnimationAllowed}"
                            .contentTemplate="${this.currentPriceDropDownTemplate}"
                            .customStyle=${iuiTreeGridFilteringStyle}
                            .data="${column}"
                            .dropDownAdjustment="${{ left: -this.state.dropDownSize.width + 28, top: 2 }}"
                            .dropDownIcon="${false}"
                            .dropDownSize="${this.state.dropDownSize}"
                            .expanded="${column.selected && column.isDropDownExpanded === true}"
                            @expandedChanged="${(e) => this.dropDownExpandedChanged(e, column)}"
                        >
                            <span class="filter-button"></span>
                        </iui-dropdownbutton>
                        <span class="header-label">${column.headerText}</span>
                    </div>
                `;

            // no default
        }

        return null;
    };

    dropDownExpandedChanged(e, column){
        column.isDropDownExpanded = e.detail.expanded;
    }
    
    closeDropDown(index){
        let currentColumns = this.state.columns;
        currentColumns[index].isDropDownExpanded = false;

        this.setState({ columns: [...currentColumns] });
    }

    // Filtering ---------------------------------------------------------------------------------

    getFormula(conditions, flag){
        let formula = '';

        let firstSymbol = conditions[0].negative ? '!a' : 'a';
        let secondSymbol = conditions[1].negative ? '!b' : 'b';

        let combinator = !flag ? this.authorCombinator : this.priceCombinator;
        if (combinator === 'And')
            formula = '(' + firstSymbol + ' & ' + secondSymbol + ')';
        else
            formula = '(' + firstSymbol + ' | ' + secondSymbol + ')';

        return formula;
    }

    ////////////////////
    // Author Filter 
    ///////////////////

    authorCombinatorChanged(e){
        this.authorCombinator = e.detail.index === 1 ? 'Or' : 'And';
    }

    getAuthorOperation(option){
        let index = this.filterAuthors.indexOf(option);

        switch (index){
            case 1: //equals
                return '=';

            case 2: //does not equal
                return '!=';

            case 3: //begins with
                return '->';

            case 4: //does not begin with
                return '->';

            case 5: //ends with
                return '<-';

            case 6: //does not end with
                return '<-';

            case 7: //contains
                return '[]';

            case 8: //does not contain
                return '[]';

            // no default
        }

        return '';
    }

    applyAuthors(){
        this.closeDropDown(1);

        let filterConditions = [];
        for (let i = 0; i < 2; i++){
            if (this.selAuthor[i] !== this.filterAuthors[0] && this.authorValues[i] !== ''){
                let currentOperation = this.getAuthorOperation(this.selAuthor[i]);

                filterConditions.push({ 
                    value: this.authorValues[i],
                    operation: currentOperation,
                    negative: this.filterAuthors.indexOf(this.selAuthor[i]) % 2 === 0
                });
            }
        }

        if (filterConditions.length > 0){
            let params = {
                allowParent: true,
                caseSensitive: false
            }

            if (filterConditions.length === 1){
                params.conditions = filterConditions[0];
            }
            else {
                params.conditions = filterConditions;
                params.formula = this.getFormula(filterConditions);
            }

            this.gridRef.current.filter(this.state.columns[1], params);
        }
        else
            this.gridRef.current.filter(this.state.columns[1]);
        
        this.resetAuthorFilter();
    }

    cancelAuthorsFilter(){
        this.closeDropDown(1);
        
        this.resetAuthorFilter();
        this.gridRef.current.filter(this.state.columns[1]);
    }

    _authorValueChange(e, index){
        this.authorValues[index] = e.target.value;
    }

    filterAuthorChanged(e, index){
        this.selAuthor[index] = e.detail.item;
    }

    resetAuthorFilter(){
        this.authorValues = [ '', '' ];
        this.selAuthor = [ this.filterAuthors[0], this.filterAuthors[0] ];
        this.authorCombinator = 'And';
    }

    ////////////////////
    // Price Filter 
    ///////////////////

    getPriceOperation(option){
        let index = this.filterPrices.indexOf(option);
        switch (index){
            case 1: //equals
                return '=';

            case 2: //does not equal
                return '!=';

            case 3: //greater than
                return '>';

            case 4: //greater than or equal to
                return '>=';

            case 5: //less than
                return '<';

            case 6: //less than or equal to
                return '<=';
                
            // no default
        }

        return '';
    }
    
    onPriceCombinatorAnd (){
        this.priceCombinator = 'And';
    }

    onPriceCombinatorOr(){
        this.priceCombinator = 'Or';
        
    }

    applyPrices(){
        this.closeDropDown(2);

        let filterConditions = [];
        for (let i = 0; i < 2; i++){
            if (this.selPrice[i] !== this.filterPrices[0] && this.priceValues[i] !== -1){
                let currentOperation = this.getPriceOperation(this.selPrice[i]);

                filterConditions.push({ 
                    value: this.priceValues[i],
                    operation: currentOperation,
                    negative: this.filterPrices.indexOf(this.selPrice[i]) === 2
                });
            }
        }

        if (filterConditions.length > 0){
            let params = { allowParent: true }

            if (filterConditions.length === 1){
                params.conditions = filterConditions[0];
            }
            else {
                params.conditions = filterConditions;
                params.formula = this.getFormula(filterConditions, true);
            }

            this.gridRef.current.filter(this.state.columns[2], params);
        }
        else
            this.gridRef.current.filter(this.state.columns[2]);

        this.resetPriceFilter();
    }

    cancelPriceFilter(){
        this.closeDropDown(2);
        this.resetPriceFilter();

        this.gridRef.current.filter(this.state.columns[2]);
    }

    filterPriceChanged(e, index){
        this.selPrice[index] = e.detail.item;
    }

    priceCombinatorChanged(e){
        this.priceCombinator = e.detail.index === 1 ? 'Or' : 'And';
    }

    priceValueChanged(e, index){
        this.priceValues[index] = e.detail.value;
    }

    resetPriceFilter(){
        this.priceValues = [ '', '' ];
        this.selPrice = [
            this.filterPrices[0],
            this.filterPrices[0]
        ];
        this.priceCombinator = 'And';
    }

    // Update ------------------------------------------------------------------------------------

    render() {
        return (
            <div>
                <h2>TreeGrid / Filtering</h2>
                <div className="sample-block" id="treegrid-filtering">
                    <IntegralUITreeGridComponent ref={this.gridRef}
                        allowAnimation={this.state.isAnimationAllowed} 
                        allowFilter={true}
                        columns={this.state.columns} 
                        customStyle={iuiTreeGridFilteringStyle}
                        headerTemplate={this.currentHeaderTemplate}
                        resourcePath={this.state.currentResourcePath}
                        rows={this.state.rows} 
                        selectedColumn={this.state.currentSelectedColumn} 
                        showFooter={false}
                        size={this.state.ctrlSize}
                        theme={this.state.currentTheme}
                    ></IntegralUITreeGridComponent>
                    <div className="feature-help">
                        <p><span className="initial-space"></span>This sample shows how to filter the TreeGrid content using multiple different conditions in different combinations for each column separately.</p>
                        <p><span className="initial-space"></span>By clicking on the filter button in column header, a pop-up window will appear with filtering options for that column. In this example, each column has a different filtering options, which are created using custom templates.</p>
                        <p>The following properties and methods are presented:</p>
                        <ul className="feature-points">
                            <li><span className="code-name">allowFilter</span> - a property which determines whether filtering is allowed</li>
                            <li><span className="code-name">filter</span> - a method which filters the content of TreeGrid using specified column and filtering parameters</li>
                        </ul>
                        <p><span className="initial-space"></span>By default, filtering is executed using the cell's value field to match the specified criteria. If this field value is empty, then the value of cell's text field is used.</p>
                        <p><span className="initial-space"></span>For filtering operations we are using the <strong>IntegralUIFilterService</strong>, which provides many ways to set string, numeric or custom filtering using multiple conditions with AND / OR combinations.</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default TreeGridFiltering;
