import React, { Component } from 'react';

import { IntegralUIComponentAppearance, IntegralUIScrollMode, IntegralUITheme } from 'integralui-web/components/integralui.enums.js';

import IntegralUIListViewComponent from 'integralui-web/wrappers/react.integralui.listview.js';
import IntegralUIRadioButtonComponent from 'integralui-web/wrappers/react.integralui.radiobutton.js';
import IntegralUIRadioGroupComponent from 'integralui-web/wrappers/react.integralui.radiogroup.js';
import IntegralUISelectComponent from 'integralui-web/wrappers/react.integralui.select.js';

import './listview-scroll-to.css';

class ListViewScrollTo extends Component {
    constructor(props){
        super(props);

        this.state = {
            ctrlSize: { width: 350, height: 300 },
            currentItemSize: { width: 150, height: 32 },
            currentResourcePath: '../../../integralui-web/icons',
            currentScrollAppearance: IntegralUIComponentAppearance.Static,
            currentScrollMode: IntegralUIScrollMode.Vertical,
            currentSelection: null,
            currentTheme: IntegralUITheme.Office,
            items: [
                { id: 11, text: "Milk" },
                { id: 12, text: "Butter" },
                { id: 13, text: "Cheese" },
                { id: 14, text: "Yogurt" },
                { id: 211, text: "BlackBerries" },
                { id: 212, text: "CranBerries" },
                { id: 213, text: "StrawBerries" },
                { id: 241, text: "Oranges" },
                { id: 242, text: "Lemons" },
                { id: 261, text: "Avocados" },
                { id: 262, text: "Bananas" },
                { id: 263, text: "Dates" },
                { id: 31, text: "Barley" },
                { id: 32, text: "Farro" },
                { id: 33, text: "Millet" },
                { id: 34, text: "Rice" },
                { id: 41, text: "Beef" },
                { id: 42, text: "Chicken" },
                { id: 43, text: "Turkey" },
                { id: 44, text: "Pork" },
                { id: 45, text: "Lamb" },
                { id: 51, text: "Biscuits" },
                { id: 52, text: "Cakes" },
                { id: 53, text: "Candies" },
                { id: 54, text: "Muffins" },
                { id: 55, text: "Pastries" },
                { id: 61, text: "Asparagus" },
                { id: 62, text: "Broccoli" },
                { id: 63, text: "Carrots" },
                { id: 64, text: "Corn" },
                { id: 65, text: "Lettuce" },
                { id: 66, text: "Onions" },
                { id: 67, text: "Pumpkin" },
                { id: 68, text: "Tomatoes" },
                { id: 69, text: "Zucchini" }
            ]
        }

        this.listRef = React.createRef();
    }

    // Events ------------------------------------------------------------------------------------

    scrollToChanged(e){
        let item = e.detail.item;

        this.listRef.current.scrollTo(item);
        this.setState({ currentSelection: item });
    }

    onItemSelectionChanged(e){
        this.setState({ currentSelection: e.detail.item });
    }

    onScrollAppearanceChecked(e){
        switch (e.detail.index){
            case 1: 
                this.setState({ currentScrollAppearance: IntegralUIComponentAppearance.Dynamic });
                break;

            default: 
                this.setState({ currentScrollAppearance: IntegralUIComponentAppearance.Static });
                break;
        }
    }
    
    onScrollModeChecked(e){
        switch (e.detail.index){
            case 1: 
                this.setState({ currentScrollMode: IntegralUIScrollMode.Vertical });
                break;

            default: 
                this.setState({ currentScrollMode: IntegralUIScrollMode.Horizontal });
                break;
        }
    }

    // Update ------------------------------------------------------------------------------------

    render() {

        return (
            <div>
                <h2>ListView / Scroll To Specific Item</h2>
                <div className="sample-block">
                    <IntegralUIListViewComponent id="listview-scrollto" ref={this.listRef}
                        items={this.state.items}
                        itemSize={this.state.currentItemSize}
                        resourcePath={this.state.currentResourcePath}
                        scrollAppearance={this.state.currentScrollAppearance}
                        scrollMode={this.state.currentScrollMode}
                        selectedItem={this.state.currentSelection}
                        size={this.state.ctrlSize}
                        theme={this.state.currentTheme}
                        selectionChanged={(e) => this.onItemSelectionChanged(e)}
                    ></IntegralUIListViewComponent>
                    <div className="listview-scrollto-panel">
                        <label>Scroll to: </label>
                        <IntegralUISelectComponent allowAnimation={true} items={this.state.items} resourcePath={this.state.currentResourcePath} theme={this.state.currentTheme} selectedIndexChanged={(e) => this.scrollToChanged(e)}></IntegralUISelectComponent>
                        <br/>
                        <label>Scroll Mode: </label>
                        <IntegralUIRadioGroupComponent theme={this.state.currentTheme} buttonChecked={(e) => this.onScrollModeChecked(e)}>
                            <IntegralUIRadioButtonComponent>Horizontal</IntegralUIRadioButtonComponent>
                            <IntegralUIRadioButtonComponent checked={true}>Vertical</IntegralUIRadioButtonComponent>
                        </IntegralUIRadioGroupComponent>
                        <br/>
                        <label>Scroll Appearance: </label>
                        <IntegralUIRadioGroupComponent theme={this.state.currentTheme} buttonChecked={(e) => this.onScrollAppearanceChecked(e)}>
                            <IntegralUIRadioButtonComponent checked={true}>Static</IntegralUIRadioButtonComponent>
                            <IntegralUIRadioButtonComponent>Dynamic</IntegralUIRadioButtonComponent>
                        </IntegralUIRadioGroupComponent>
                    </div>
                    <div className="feature-help">
                        <p><span className="initial-space"></span>In this example, there are multiple items and you can select the item that you want to appear in view by scrolling to it.</p>
                        <p><span className="initial-space"></span>You can also choose how scroll bar appears, there are two options: Static and Dynamic. With Static appearance, the scroll bar is always visible when there are more items than currently present in the view. On the other hand, with Dynamic appearance, the scroll bar will appear only when mouse hovers over ListView space.</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default ListViewScrollTo;
