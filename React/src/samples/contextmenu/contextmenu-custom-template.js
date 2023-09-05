import React, { Component } from 'react';
import { html } from 'integralui-web/external/lit-element.js';

import IntegralUIContextMenuComponent from 'integralui-web/wrappers/react.integralui.contextmenu.js';
import IntegralUIPanelComponent from 'integralui-web/wrappers/react.integralui.panel.js';
import { IntegralUITheme } from 'integralui-web/components/integralui.enums.js';

import './contextmenu-custom-template.css';
import { iuiMenuCustomTemplateStyle } from './contextmenu-custom-template.style.js';

class ContextMenuCustomTemplate extends Component {

    //
    // Initialization / Destruction --------------------------------------------------------------
    //

    constructor(props){
        super(props);

        this.state = {
            currentTheme: IntegralUITheme.Office,
            currentZoomValue: 250,
            menuSettings: {
                items: [
                    { text: "Context Menu", type: "header" },
                    { text: "History" },
                    { text: "Downloads" },
                    { text: "Bookmarks" },
                    { text: "Extensions" },
                    { text: "Zoom", zoomValue: 250 },
                    { text: "Print" },
                    { type: "separator" },
                    { text: "Exit" }
                ]
            },
            panelContentAlignment: { horizontal: 'center', vertical: 'middle' }
        }

        this.contextMenuRef = React.createRef();
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
            self.contextMenuRef.current.refresh();

            self.setState({ currentZoomValue:  item.zoomValue });
        }, 50);

        e.stopPropagation();
    }

    zoomOut(e, item){
        let self = this;

        self.removeZoomInterval();

        self.zoomInterval = setInterval(function(){
            item.zoomValue = Math.max(25, item.zoomValue - 10);
            self.contextMenuRef.current.refresh();

            self.setState({ currentZoomValue:  item.zoomValue });
        }, 50);
        
        e.stopPropagation();
    }

    currentItemTemplate = (item) => { 
        if (item.text === 'Zoom')
            return html`
                <div class="contextmenu-cstpl-block">
                    <span class="contextmenu-cstpl-label">${item.text}</span>
                    <div class="contextmenu-cstpl-zoom-block" @mouseup="${(e) => this.preventClosing(e)}">
                        <span class="contextmenu-cstpl-zoom-out" @mousedown="${(e) => this.zoomOut(e, item)}">-</span>
                        <span class="contextmenu-cstpl-zoom-value">${item.zoomValue}%</span>
                        <span class="contextmenu-cstpl-zoom-in" @mousedown="${(e) => this.zoomIn(e, item)}">+</span>
                    </div>
                </div>
            `;

        return null;
    };


    // Update ------------------------------------------------------------------------------------

    render() {
        return (
            <div>
                <h2>ContextMenu / Custom Template</h2>
                <div className="sample-block">
                    <IntegralUIContextMenuComponent ref={this.contextMenuRef}
                        customStyle={iuiMenuCustomTemplateStyle}
                        itemTemplate={this.currentItemTemplate}
                        settings={this.state.menuSettings}
                        theme={this.state.currentTheme}
                    > 
                        <IntegralUIPanelComponent id="contextmenu-custom-template-panel" contentAlignment={this.state.panelContentAlignment}>
                            <div className="contextmenu-custom-template-block" style={{ transform: 'scale(' + this.state.currentZoomValue / 100 + ')' }}>
                                Sample Content Block
                            </div>
                        </IntegralUIPanelComponent>
                    </IntegralUIContextMenuComponent>
                    <div className="feature-help">
                        <p><span className="initial-space"></span>An example of a Context Menu with custom template. Instead of just label, the <strong>'Zoom'</strong> menu item has a set of buttons for zoom-in and zoom-out and label that shows current zoom value in middle.</p>
                        <p><span className="initial-space"></span>Clicking on these buttons, will change the view below, in range from 25% to 500%. Appearance of these buttons is done using custom CSS and functionality set in code by handling events from the custom menu template.</p>
                        <p><span className="initial-space"></span>In addition, to close the menu you can click on <strong>'Zoom'</strong> label or any other menu item or outside the menu space. However the menu will remain active while buttons are clicked, this is set in code by handling events.</p>
                        <p><span className="initial-space"></span>You can create custom templates that can be shared between all menus or each menu item can have a different template, based on condtions set in your code. To create templates, you can use any custom HTML elements and arrange them in custom layouts.</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default ContextMenuCustomTemplate;
