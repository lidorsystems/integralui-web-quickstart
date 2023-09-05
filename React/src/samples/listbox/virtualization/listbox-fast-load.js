import React, { Component } from 'react';

import { IntegralUISelectionMode, IntegralUITheme } from 'integralui-web/components/integralui.enums.js';

import IntegralUIButtonComponent from 'integralui-web/wrappers/react.integralui.button.js';
import IntegralUIListBoxComponent from 'integralui-web/wrappers/react.integralui.listbox.js';

import './listbox-fast-load.css';

class ListBoxFastLoad extends Component {
    constructor(props){
        super(props);

        this.state = {
            ctrlSize: { width: 350, height: 300 },
            currentResourcePath: '../../integralui-web/icons',
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
        let list = [];
        for (let i = 0; i < this.state.numItems; i++){
            let item = {
                id: i + 1,
                text : 'Item ' + (i + 1).toString()
            };

            list.push(item);

        }

        this.listRef.current.addItem(list);
    }

    numItemsChanged(e){
        this.setState({ numItems: e.target.value });
    }

    render() {

        return (
            <div>
                <h2>ListBox / Fast Load</h2>
                <div className="sample-block">
                    <IntegralUIListBoxComponent id="listbox-fast-load" ref={this.listRef}
                        allowAnimation={false}
                        allowDrag={true}
                        allowDrop={true}
                        allowFocus={true}
                        items={this.state.items}
                        resourcePath={this.state.currentResourcePath}
                        selectionMode={this.state.currentSelectionMode}
                        size={this.state.ctrlSize}
                        theme={this.state.currentTheme}
                    ></IntegralUIListBoxComponent>
                    <div className="listbox-fast-load-panel">
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
                        <p><span className="initial-space"></span>In above demo, you can choose how many items to display in the ListBox. For demonstration purposes only, a limit is set to 100,000 items. In real scenario, the only limit is how much data the browser can handle. By clicking on the Add button, the ListBox is populated with custom data.</p>
                        <p><span className="initial-space"></span>To start a drag and drop operation, left-click on a item and move the mouse cursor, so that you can reorder items during run-time. In this example, there are no restrictions set, and you can drag and drop a item and place it above or below another item. However, if you want you can set conditions and provide custom drag drop operations on your own.</p>
                        <p><span className="initial-space"></span>You can also navigate among items using the keyboard. All standard operations are supported: Down, Up, PageDown, PageUp, Home and End.</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default ListBoxFastLoad;
