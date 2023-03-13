import { Component, ElementRef, ViewChild } from '@angular/core';
import { html } from 'integralui-web/external/lit-element';

import 'integralui-web/components/integralui.button';
import 'integralui-web/components/integralui.dropdownbutton';
import 'integralui-web/components/integralui.grid';
import 'integralui-web/components/integralui.numeric';
import 'integralui-web/components/integralui.radiobutton';
import 'integralui-web/components/integralui.radiogroup';
import 'integralui-web/components/integralui.select';
import { IntegralUITheme } from 'integralui-web/components/integralui.enums';
import { iuiGridFilteringOverviewStyle } from './grid-filtering-overview.style';

@Component({
    selector: '',
    templateUrl: './grid-filtering-overview.html',
    styleUrls: ['./grid-filtering-overview.css']
})
export class GridFilteringOverview {
    @ViewChild('grid', { static: false }) grid!: ElementRef;

    private flatData: Array<any> = [];

    public columns: Array<any> = [];
    public ctrlSize: any = { width: 800, height: 400 };
    public currentResourcePath: string = 'assets/icons';
    public currentSelectedColumn: any = null;
    public currentTheme: IntegralUITheme = IntegralUITheme.Office;
    public customStyle: any = iuiGridFilteringOverviewStyle;
    public rows: Array<any> = [];

    private dropDownSize: any = { width: 340, height: 220 };
    private inputSize: any = { width: 100 };
    private selectSize: any = { width: 200 };

    // Author Filter Settings
    private authorCombinator: string = 'And';
    private authorValues: Array<any> = [ '', '' ];
    private filterAuthors: Array<any> = [
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
    private selAuthor: Array<any> = [];

    // Price Filter Settings
    private filterPrices = [
        { text: ' ' },
        { text: 'equals' },
        { text: 'does not equal' },
        { text: 'greater than' },
        { text: 'greater than or equal to' },
        { text: 'less than' },
        { text: 'less than or equal to' }
    ];
    private priceCombinator: string = 'And';
    private priceValues: Array<any> = [ '', '' ];
    private selPrice: Array<any> = [];

    constructor(){
        this.columns = [
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
        ];

        this.flatData = [
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

        this.selAuthor = [ this.filterAuthors[0], this.filterAuthors[0] ];
        this.selPrice = [ this.filterPrices[0], this.filterPrices[0] ];
    }

    ngAfterViewInit(){
        this.grid.nativeElement.loadData(this.flatData);

        this.grid.nativeElement.headerTemplate = this.currentHeaderTemplate;
    }

    //
    // Methods -----------------------------------------------------------------------------------
    //

    //
    // Currently when using templates, the LitElement binding syntax is required
    // for properties, methods and events
    //

    currentAuthorDropDownTemplate = (column: any) => { 
        return html`
            <div class="grid-ftr-panel">
                <label>Show rows where: </label><br/>
                <div class="grid-ftr-inline-block" style="margin-top:10px">
                    <iui-select .allowAnimation="${true}" .items=${this.filterAuthors} .selectedItem=${this.selAuthor[0]} .size=${this.selectSize} @selectionChanged="${(e: any) => this.filterAuthorChanged(e, 0)}"></iui-select>
                    <input type="text" style="width:100px;height:23px;" value="${this.authorValues[0]}" @change="${(e: any) => this._authorValueChange(e, 0)}" />
                </div>
                <div class="grid-ftr-inline-block">
                    <iui-radiogroup .resourcePath=${this.currentResourcePath} .theme=${this.currentTheme} @buttonChecked=${(e: any) => this.authorCombinatorChanged(e)}>
                        <iui-radiobutton .checked=${true}>And</iui-radiobutton>
                        <iui-radiobutton>Or</iui-radiobutton>
                    </iui-radiogroup>
                </div><br/>
                <div class="grid-ftr-inline-block">
                    <iui-select .allowAnimation="${true}" .items=${this.filterAuthors} .selectedItem=${this.selAuthor[1]} .size=${this.selectSize} @selectionChanged="${(e: any) => this.filterAuthorChanged(e, 1)}"></iui-select>
                    <input type="text" style="width:100px;height:23px;" value="${this.authorValues[1]}" @change="${(e: any) => this._authorValueChange(e, 1)}" />
                </div>
                <div class="grid-ftr-inline-block" style="display:block;margin-top:15px;text-align:center;">
                    <iui-button .allowAnimation=${true} .theme=${this.currentTheme} @click=${() => this.applyAuthors()}>Apply</iui-button>
                    <iui-button .allowAnimation=${true} .theme=${this.currentTheme} @click=${() => this.cancelAuthorsFilter()}>Cancel</iui-button>
                </div>
            </div>
        `;
    };

    currentPriceDropDownTemplate = (column: any) => { 
        return html`
            <div class="grid-ftr-panel">
                <label>Show rows where: </label><br/>
                <div class="grid-ftr-inline-block" style="margin-top:10px">
                    <iui-select .allowAnimation="${true}" .items=${this.filterPrices} .selectedItem=${this.selPrice[0]} .size=${this.selectSize} @selectionChanged="${(e: any) => this.filterPriceChanged(e, 0)}"></iui-select>
                    <iui-numeric .min=${0} .max=${1000} .resourcePath=${this.currentResourcePath} .size=${this.inputSize} .value=${this.priceValues[0]} .theme=${this.currentTheme} @valueChanged=${(e: any) => this.priceValueChanged(e, 0)}></iui-numeric>
                </div>
                <div class="grid-ftr-inline-block">
                    <iui-radiogroup .resourcePath=${this.currentResourcePath} .theme=${this.currentTheme} @buttonChecked=${(e: any) => this.priceCombinatorChanged(e)}>
                        <iui-radiobutton .checked=${true}>And</iui-radiobutton>
                        <iui-radiobutton>Or</iui-radiobutton>
                    </iui-radiogroup>
                </div><br/>
                <div class="grid-ftr-inline-block">
                    <iui-select .allowAnimation="${true}" .items=${this.filterPrices} .selectedItem=${this.selPrice[1]} .size=${this.selectSize} @selectionChanged="${(e: any) => this.filterPriceChanged(e, 1)}"></iui-select>
                    <iui-numeric .min=${0} .max=${1000} .resourcePath=${this.currentResourcePath} .size=${this.inputSize} .value=${this.priceValues[1]} .theme=${this.currentTheme} @valueChanged=${(e: any) => this.priceValueChanged(e, 1)}></iui-numeric>
                </div>
                <div class="grid-ftr-inline-block" style="display:block;margin-top:15px;text-align:center;">
                    <iui-button .allowAnimation=${true} .theme=${this.currentTheme} @click=${() => this.applyPrices()}>Apply</iui-button>
                    <iui-button .allowAnimation=${true} .theme=${this.currentTheme} @click=${() => this.cancelPriceFilter()}>Cancel</iui-button>
                </div>
            </div>
        `;
    };

    currentHeaderTemplate = (column: any) => { 
        switch (column.id){
            case 3: // Author
                return html`
                    <div>
                        <iui-dropdownbutton data-column-dropdown
                            .allowAnimation="${true}"
                            .contentTemplate="${this.currentAuthorDropDownTemplate}"
                            .customStyle=${iuiGridFilteringOverviewStyle}
                            .data="${column}"
                            .dropDownAdjustment="${{ left: -this.dropDownSize.width + 28, top: 2 }}"
                            .dropDownIcon="${false}"
                            .dropDownSize="${this.dropDownSize}"
                            .expanded="${column.selected && column.isDropDownExpanded === true}"
                            @expandedChanged="${(e: any) => this.dropDownExpandedChanged(e, column)}"
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
                            .allowAnimation="${true}"
                            .contentTemplate="${this.currentPriceDropDownTemplate}"
                            .customStyle=${iuiGridFilteringOverviewStyle}
                            .data="${column}"
                            .dropDownAdjustment="${{ left: -this.dropDownSize.width + 28, top: 2 }}"
                            .dropDownIcon="${false}"
                            .dropDownSize="${this.dropDownSize}"
                            .expanded="${column.selected && column.isDropDownExpanded === true}"
                            @expandedChanged="${(e: any) => this.dropDownExpandedChanged(e, column)}"
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

    dropDownExpandedChanged(e: any, column: any){
        column.isDropDownExpanded = e.detail.expanded;
    }
    
    closeDropDown(index: number){
        this.columns[index].isDropDownExpanded = false;
    }

    // Filtering ---------------------------------------------------------------------------------

    getFormula(conditions: Array<any>, flag?: boolean){
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

    authorCombinatorChanged(e: any){
        this.authorCombinator = e.detail.index === 1 ? 'Or' : 'And';
    }

    getAuthorOperation(option: any){
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
            let params: any = {
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

            this.grid.nativeElement.filter(this.columns[1], params);
        }
        else
            this.grid.nativeElement.filter(this.columns[1]);
        
        this.resetAuthorFilter();
    }

    cancelAuthorsFilter(){
        this.closeDropDown(1);
        
        this.resetAuthorFilter();
        this.grid.nativeElement.filter(this.columns[1]);
    }

    _authorValueChange(e: any, index: number){
        this.authorValues[index] = e.target.value;
    }

    filterAuthorChanged(e: any, index: number){
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

    getPriceOperation(option: any){
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
            let params: any = { allowParent: true }

            if (filterConditions.length === 1){
                params.conditions = filterConditions[0];
            }
            else {
                params.conditions = filterConditions;
                params.formula = this.getFormula(filterConditions, true);
            }

            this.grid.nativeElement.filter(this.columns[2], params);
        }
        else
            this.grid.nativeElement.filter(this.columns[2]);

        this.resetPriceFilter();
    }

    cancelPriceFilter(){
        this.closeDropDown(2);
        this.resetPriceFilter();

        this.grid.nativeElement.filter(this.columns[2]);
    }

    filterPriceChanged(e: any, index: number){
        this.selPrice[index] = e.detail.item;
    }

    priceCombinatorChanged(e: any){
        this.priceCombinator = e.detail.index === 1 ? 'Or' : 'And';
    }

    priceValueChanged(e: any, index: number){
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
}
