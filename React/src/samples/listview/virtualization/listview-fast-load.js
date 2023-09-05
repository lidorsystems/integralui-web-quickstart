import React, { Component } from 'react';

import { IntegralUIScrollMode, IntegralUISelectionMode, IntegralUITheme } from 'integralui-web/components/integralui.enums.js';

import IntegralUIButtonComponent from 'integralui-web/wrappers/react.integralui.button.js';
import IntegralUIListViewComponent from 'integralui-web/wrappers/react.integralui.listview.js';
import IntegralUIRadioButtonComponent from 'integralui-web/wrappers/react.integralui.radiobutton.js';
import IntegralUIRadioGroupComponent from 'integralui-web/wrappers/react.integralui.radiogroup.js';

import './listview-fast-load.css';

class ListViewFastLoad extends Component {
    constructor(props){
        super(props);

        this.state = {
            ctrlSize: { width: 500, height: 300 },
            currentItemSize: { width: 150, height: 32 },
            currentResourcePath: '../../integralui-web/icons',
            currentScrollMode: IntegralUIScrollMode.Vertical,
            currentSelectionMode: IntegralUISelectionMode.One,
            currentTheme: IntegralUITheme.Office,
            items: [],
            // Control Panel
            numItems: 50000,
        }

        this.itemCount = 0;
        this.listRef = React.createRef();
    }

    onAddClicked(e){
        this.listRef.current.suspendLayout();

        this.onClearClicked(e);
        this.addItems();

        this.listRef.current.resumeLayout();
    }

    onClearClicked(e){
        this.itemCount = 0;

        this.listRef.current.clearItems();
        this.listRef.current.updateLayout();
    }

    addItems(){
        for (let i = 0; i < this.state.numItems; i++){
            let item = {
                id: i + 1,
                text : 'Item ' + (i + 1).toString()
            };

            this.listRef.current.addItem(item);
        }
    }

    numItemsChanged(e){
        this.setState({ numItems: e.target.value });
    }
    
    onScrollingChecked(e){
        switch (e.detail.index){
            case 1: 
                this.setState({ currentScrollMode: IntegralUIScrollMode.Vertical });
                break;

            default: 
                this.setState({ currentScrollMode: IntegralUIScrollMode.Horizontal });
                break;
        }
    }

    render() {

        return (
            <div>
                <h2>ListView / Fast Load</h2>
                <div className="sample-block">
                    <IntegralUIListViewComponent id="listview-fast-load" ref={this.listRef}
                        allowAnimation={false}
                        allowDrag={true}
                        allowDrop={true}
                        allowFocus={true}
                        items={this.state.items}
                        itemSize={this.state.currentItemSize}
                        resourcePath={this.state.currentResourcePath}
                        scrollMode={this.state.currentScrollMode}
                        selectionMode={this.state.currentSelectionMode}
                        size={this.state.ctrlSize}
                        theme={this.state.currentTheme}
                    ></IntegralUIListViewComponent>
                    <div className="listview-fast-load-panel">
                        <label>Scroll Mode: </label>
                        <IntegralUIRadioGroupComponent theme={this.state.currentTheme} buttonChecked={(e) => this.onScrollingChecked(e)}>
                            <IntegralUIRadioButtonComponent>Horizontal</IntegralUIRadioButtonComponent>
                            <IntegralUIRadioButtonComponent checked={true}>Vertical</IntegralUIRadioButtonComponent>
                        </IntegralUIRadioGroupComponent>
                        <br/>
                        <table cellPadding="3">
                            <tbody>
                                <tr>
                                    <td>Max items: </td>
                                    <td className="align-left"><input value={this.state.numItems} type="number" min="1" max="100000" style={{ width: '75px' }} onChange={((e) => this.numItemsChanged(e))} /></td>
                                </tr>
                            </tbody>
                        </table>
                        <div align="center" style={{marginTop: '20px' }}>
                            <IntegralUIButtonComponent allowAnimation={this.state.isAnimationAllowed} theme={this.state.currentTheme} onClick={() => this.onAddClicked(0)}>Add</IntegralUIButtonComponent>
                            <IntegralUIButtonComponent allowAnimation={this.state.isAnimationAllowed} theme={this.state.currentTheme} onClick={() => this.onClearClicked(0)}>Clear</IntegralUIButtonComponent>
                        </div>
                    </div>
                    <div className="feature-help">
                        <p><span className="initial-space"></span>In above demo, you can choose how many items to display in the ListView. For demonstration purposes only, a limit is set to 100,000 items. In real scenario, the only limit is how much data the browser can handle. By clicking on the Add button, the ListView is populated with custom data.</p>
                        <p><span className="initial-space"></span>To start a drag and drop operation, left-click on a item and move the mouse cursor, so that you can reorder items during run-time. In this example, there are no restrictions set, and you can drag and drop a item and place it above or below another item. However, if you want you can set conditions and provide custom drag drop operations on your own.</p>
                        <p><span className="initial-space"></span>You can also navigate among items using the keyboard. All standard operations are supported: Left, Right, Up, Down, PageUp, PageDown, Home and End.</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default ListViewFastLoad;
