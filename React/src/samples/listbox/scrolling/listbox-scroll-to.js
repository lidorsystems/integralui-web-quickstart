import React, { Component } from 'react';

import { IntegralUIComponentAppearance, IntegralUITheme } from 'integralui-web/components/integralui.enums.js';

import IntegralUIListBoxComponent from 'integralui-web/wrappers/react.integralui.listbox.js';
import IntegralUIRadioButtonComponent from 'integralui-web/wrappers/react.integralui.radiobutton.js';
import IntegralUIRadioGroupComponent from 'integralui-web/wrappers/react.integralui.radiogroup.js';
import IntegralUISelectComponent from 'integralui-web/wrappers/react.integralui.select.js';

import './listbox-scroll-to.css';

class ListBoxScrollTo extends Component {
    constructor(props){
        super(props);

        this.state = {
            ctrlSize: { width: 350, height: 300 },
            currentResourcePath: '../../../integralui-web/icons',
            currentScrollAppearance: IntegralUIComponentAppearance.Static,
            currentSelection: null,
            currentTheme: IntegralUITheme.Office,
            items: [
                { id: 11, text: "Milk", group: "Dairy" },
                { id: 12, text: "Butter", group: "Dairy" },
                { id: 13, text: "Cheese", group: "Dairy" },
                { id: 14, text: "Yogurt", group: "Dairy" },
                { id: 211, text: "BlackBerries", group: "Fruits" },
                { id: 212, text: "CranBerries", group: "Fruits" },
                { id: 213, text: "StrawBerries", group: "Fruits" },
                { id: 241, text: "Oranges", group: "Fruits" },
                { id: 242, text: "Lemons", group: "Fruits" },
                { id: 261, text: "Avocados", group: "Fruits" },
                { id: 262, text: "Bananas", group: "Fruits" },
                { id: 263, text: "Dates", group: "Fruits" },
                { id: 31, text: "Barley", group: "Grains" },
                { id: 32, text: "Farro", group: "Grains" },
                { id: 33, text: "Millet", group: "Grains" },
                { id: 34, text: "Rice", group: "Grains" },
                { id: 41, text: "Beef", group: "Meat" },
                { id: 42, text: "Chicken", group: "Meat" },
                { id: 43, text: "Turkey", group: "Meat" },
                { id: 44, text: "Pork", group: "Meat" },
                { id: 45, text: "Lamb", group: "Meat" },
                { id: 51, text: "Biscuits", group: "Sweets" },
                { id: 52, text: "Cakes", group: "Sweets" },
                { id: 53, text: "Candies", group: "Sweets" },
                { id: 54, text: "Muffins", group: "Sweets" },
                { id: 55, text: "Pastries", group: "Sweets" },
                { id: 61, text: "Asparagus", group: "Vegetables" },
                { id: 62, text: "Broccoli", group: "Vegetables" },
                { id: 63, text: "Carrots", group: "Vegetables" },
                { id: 64, text: "Corn", group: "Vegetables" },
                { id: 65, text: "Lettuce", group: "Vegetables" },
                { id: 66, text: "Onions", group: "Vegetables" },
                { id: 67, text: "Pumpkin", group: "Vegetables" },
                { id: 68, text: "Tomatoes", group: "Vegetables" },
                { id: 69, text: "Zucchini", group: "Vegetables" }
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
    
    // Update ------------------------------------------------------------------------------------

    render() {

        return (
            <div>
                <h2>ListBox / Scroll To Specific Item</h2>
                <div className="sample-block">
                    <IntegralUIListBoxComponent id="listbox-scrollto" ref={this.listRef}
                        items={this.state.items}
                        resourcePath={this.state.currentResourcePath}
                        scrollAppearance={this.state.currentScrollAppearance}
                        selectedItem={this.state.currentSelection}
                        size={this.state.ctrlSize}
                        theme={this.state.currentTheme}
                        selectionChanged={(e) => this.onItemSelectionChanged(e)}
                    ></IntegralUIListBoxComponent>
                    <div className="listbox-scrollto-panel">
                        <label>Scroll to: </label>
                        <IntegralUISelectComponent allowAnimation={true} items={this.state.items} resourcePath={this.state.currentResourcePath} theme={this.state.currentTheme} selectedIndexChanged={(e) => this.scrollToChanged(e)}></IntegralUISelectComponent>
                        <br/>
                        <label>Scroll Appearance: </label>
                        <IntegralUIRadioGroupComponent theme={this.state.currentTheme} buttonChecked={(e) => this.onScrollAppearanceChecked(e)}>
                            <IntegralUIRadioButtonComponent checked={true}>Static</IntegralUIRadioButtonComponent>
                            <IntegralUIRadioButtonComponent>Dynamic</IntegralUIRadioButtonComponent>
                        </IntegralUIRadioGroupComponent>
                    </div>
                    <div className="feature-help">
                        <p><span className="initial-space"></span>In this example, there are multiple items and you can select the item that you want to appear in view by scrolling to it.</p>
                        <p><span className="initial-space"></span>You can also choose how scroll bar appears, there are two options: Static and Dynamic. With Static appearance, the scroll bar is always visible when there are more items than currently present in the view. On the other hand, with Dynamic appearance, the scroll bar will appear only when mouse hovers over ListBox space.</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default ListBoxScrollTo;
