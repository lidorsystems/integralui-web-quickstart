import React, { Component } from 'react';
import { html } from 'integralui-web/external/lit-element.js';

import IntegralUIMenuComponent from 'integralui-web/wrappers/react.integralui.menu.js';
import IntegralUIPanelComponent from 'integralui-web/wrappers/react.integralui.panel.js';
import { IntegralUITheme } from 'integralui-web/components/integralui.enums.js';

import './menu-custom-template.css';
import { iuiMenuCustomTemplateStyle } from './menu-custom-template.style.js';

class MenuCustomTemplate extends Component {

    //
    // Initialization / Destruction --------------------------------------------------------------
    //

    constructor(props){
        super(props);

        this.state = {
            ctrlSize: { width: 700 },
            currentResourcePath: '../integralui-web/icons',
            currentTheme: IntegralUITheme.Office,
            currentZoomValue: 250,
            items: [
                { 
                    text: "Menu",
                    items: [
                        { text: "History" },
                        { text: "Downloads" },
                        { text: "Bookmarks" },
                        { text: "Extensions" },
                        { text: "Zoom", zoomValue: 250 },
                        { text: "Print" },
                        { type: "separator" },
                        { text: "Exit" }
                    ]
                 }
            ],
            panelContentAlignment: { horizontal: 'center', vertical: 'middle' }
        }

        this.menuRef = React.createRef();
    }

    // Templates ---------------------------------------------------------------------------------

    preventClosing(e){
        this.removeZoomInterval();
        e.stopPropagation();
    }

    removeZoomInterval(){
        if (this.zoomInterval)
            clearInterval(this.zoomInterval);

        this.zoomInterval = null;
    }

    zoomIn(e, item){
        let self = this;

        self.removeZoomInterval();

        self.zoomInterval = setInterval(function(){
            item.zoomValue = Math.min(500, item.zoomValue + 10);
            self.menuRef.current.refresh();

            self.setState({ currentZoomValue:  item.zoomValue });
        }, 50);

        e.stopPropagation();
    }

    zoomOut(e, item){
        let self = this;

        self.removeZoomInterval();

        self.zoomInterval = setInterval(function(){
            item.zoomValue = Math.max(25, item.zoomValue - 10);
            self.menuRef.current.refresh();

            self.setState({ currentZoomValue:  item.zoomValue });
        }, 50);
        
        e.stopPropagation();
    }

    currentItemTemplate = (item) => { 
        if (item.text === 'Zoom')
            return html`
                <div class="menu-cstpl-block">
                    <span class="menu-cstpl-label">${item.text}</span>
                    <div class="menu-cstpl-zoom-block" @mouseup="${(e) => this.preventClosing(e)}">
                        <span class="menu-cstpl-zoom-out" @mousedown="${(e) => this.zoomOut(e, item)}">-</span>
                        <span class="menu-cstpl-zoom-value">${item.zoomValue}%</span>
                        <span class="menu-cstpl-zoom-in" @mousedown="${(e) => this.zoomIn(e, item)}">+</span>
                    </div>
                </div>
            `;

        return null;
    };

    // Update ------------------------------------------------------------------------------------

    render() {
        return (
            <div>
                <h2>Menu / Custom Template</h2>
                <div className="sample-block">
                    <IntegralUIMenuComponent id="menu-custom-template" ref={this.menuRef}
                        customStyle={iuiMenuCustomTemplateStyle}
                        items={this.state.items}
                        itemTemplate={this.currentItemTemplate}
                        resourcePath={this.state.currentResourcePath}
                        theme={this.state.currentTheme}
                    ></IntegralUIMenuComponent>
                    <IntegralUIPanelComponent id="menu-custom-template-panel" contentAlignment={this.state.panelContentAlignment}>
                        <div className="menu-custom-template-block" style={{ transform: 'scale(' + this.state.currentZoomValue / 100 + ')' }}>
                            Sample Content Block
                        </div>
                    </IntegralUIPanelComponent>
                    <div className="feature-help">
                        <p><span className="initial-space"></span>An example of a Menu with custom template. Instead of just label, the <strong>'Zoom'</strong> menu item has a set of buttons for zoom-in and zoom-out and label that shows current zoom value in middle.</p>
                        <p><span className="initial-space"></span>Clicking on these buttons will zoom in or zoom out the block element below, from 25% to 500%. Appearance of these buttons is done using custom CSS and functionality set in code by handling events from the custom menu template.</p>
                        <p><span className="initial-space"></span>In addition, to close the menu you can click on <strong>'Zoom'</strong> label or any other menu item or outside the menu space. However the menu will remain active while buttons are clicked, this is set in code by handling events.</p>
                        <p><span className="initial-space"></span>You can create custom templates that can be shared between all menus or each menu item can have a different template, based on condtions set in your code. To create templates, you can use any custom HTML elements and arrange them in custom layouts.</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default MenuCustomTemplate;
