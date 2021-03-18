import React, { Component } from 'react';

import IntegralUIContextMenuComponent from 'integralui-web/wrappers/react.integralui.contextmenu.js';
import { IntegralUITheme } from 'integralui-web/components/integralui.enums.js';

import './contextmenu-overview.css';
import { iuiContextMenuOverviewStyle } from './contextmenu-overview.style.js';

class ContextMenuOverview extends Component {

    //
    // Initialization / Destruction --------------------------------------------------------------
    //

    constructor(props){
        super(props);

        this.state = {
            currentTheme: IntegralUITheme.Office,
            fontWeight: 'bold',
            fontStyle: 'normal',
            fontSize: '1',
            menuSettings: {
                items: [
                    { id: 2, text: "Bold", icon: 'cmnu-icons-medium check-mark', checked: true },
                    { id: 3, text: "Italic", icon: 'cmnu-icons-medium empty' },
                    { id: 4, text: "Strikethrough", icon: 'cmnu-icons-medium empty' },
                    { id: 5, type: "separator" },
                    { id: 6, text: "x1", icon: 'cmnu-icons-medium radio-mark-filled' },
                    { id: 7, text: "x1.5", icon: 'cmnu-icons-medium radio-mark-empty' },
                    { id: 8, text: "x2", icon: 'cmnu-icons-medium radio-mark-empty' }
                ]
            },
            textDecoration: 'none'
        }
    }

    componentDidMount(){
    }

    //
    // Methods -----------------------------------------------------------------------------------
    //

    _menuItemClick(e){
        let currentItem = e.detail.item;

        if (currentItem){
            if (currentItem.id < 5)
                currentItem.checked = currentItem.checked !== undefined ? !currentItem.checked : true;
            else
                currentItem.checked = true;

            switch (currentItem.id){
                case 2: 
                    this.setState({ fontWeight: currentItem.checked !== false ? 'bold' : 'normal' });
                    break;
                case 3: 
                    this.setState({ fontStyle: currentItem.checked !== false ? 'italic' : 'normal' });
                    break;
                case 4: 
                    this.setState({ textDecoration: currentItem.checked !== false ? 'line-through' : 'none' });
                    break;
                case 6: 
                    this.setState({ fontSize: currentItem.checked !== false ? '1' : '1' });
                    break;
                case 7: 
                    this.setState({ fontSize: currentItem.checked !== false ? '1.5' : '1' });
                    break;
                case 8: 
                    this.setState({ fontSize: currentItem.checked !== false ? '2' : '1' });
                    break;

                default:
                    break;
            }

            if (currentItem.id < 5)
                currentItem.icon = currentItem.checked !== false ? 'cmnu-icons-medium check-mark' : 'cmnu-icons-medium empty';
            else {
                let list = [...this.state.menuSettings.items];
                for (let i = 4; i < list.length; i++){
                    if (list[i] !== currentItem)
                        list[i].checked = false;

                    list[i].icon = list[i].checked !== false ? 'cmnu-icons-medium radio-mark-filled' : 'cmnu-icons-medium radio-mark-empty';
                }

                this.setState({ menuSettings: { items: list } });
            }
        }
    }

    // Update ------------------------------------------------------------------------------------

    render() {
        return (
            <div>
                <h2>ContextMenu / Overview</h2>
                <div className="sample-block">
                    <IntegralUIContextMenuComponent
                        customStyle={iuiContextMenuOverviewStyle}
                        enabled={this.state.menuSettings.enabled}
                        settings={this.state.menuSettings}
                        theme={this.state.currentTheme}
                        menuClick={(e) => this._menuItemClick(e)}
                        > 
                        <div className="cmnu-ovw-block" style={{ fontWeight: this.state.fontWeight, fontStyle: this.state.fontStyle, fontSize: this.state.fontSize + 'em', textDecoration: this.state.textDecoration }}>
                            <span>Right click to open the context menu</span>
                        </div>
                    </IntegralUIContextMenuComponent>
                    <div className="feature-help">
                        <p><span className="initial-space"></span><strong><span className="code-name">IntegralUI</span> ContextMenu</strong> is a native Web Component that allows you to attach a custom context menu to any HTML element or Angular component. Whenever element is right-clicked, a context menu will popup showing data provided on your side.</p>
                        <p><span className="initial-space"></span>In this example, whenever the block is right-clicked, a context menu will appear with options from where you can change the font style of the block content. These options are divided in two groups using a separator. Options in the first group have a checkbox, while in the second have a radio button. Depending on which option is active, the font style of the block content changes accordingly.</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default ContextMenuOverview;
