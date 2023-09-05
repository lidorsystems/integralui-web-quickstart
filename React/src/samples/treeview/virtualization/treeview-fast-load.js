import React, { Component } from 'react';

import { IntegralUISelectionMode, IntegralUITheme } from 'integralui-web/components/integralui.enums.js';

import IntegralUIButtonComponent from 'integralui-web/wrappers/react.integralui.button.js';
import IntegralUITreeViewComponent from 'integralui-web/wrappers/react.integralui.treeview.js';

import './treeview-fast-load.css';

class TreeViewFastLoad extends Component {
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
            numLevels: 3
        }

        this.itemCount = 0;
        this.treeRef = React.createRef();
    }

    onAddClicked(e){
        this.treeRef.current.suspendLayout();

        this.onClearClicked(e);
        this.addItems(null, 0);

        this.treeRef.current.resumeLayout();
    }

    onClearClicked(e){
        this.itemCount = 0;

        this.treeRef.current.clearItems();
        this.treeRef.current.updateLayout();
    }

    onExpandAllClicked(e){
        this.treeRef.current.expand();
    }

    onCollapseAllClicked(e){
        this.treeRef.current.collapse();
    }

    addItems(parent, level){
        if (level > this.state.numLevels)
            return;
            
        let numChilds = this.getRandomNumber(level);    
        for (let i = 0; i < numChilds; i++){
            if (this.itemCount < this.state.numItems){
                let item = {
                    text : 'Item ' + (this.itemCount + 1).toString(),
                    id: this.itemCount,
                    expanded : false,
                    items: []
                };

                this.treeRef.current.addItem(item, parent);
                this.itemCount++;
            
                this.addItems(item, level + 1);
            }
        }
    }
            
    // Make sure each item has a random set of child items
    getRandomNumber(level){
        let nCount = 1 + Math.floor(Math.random() * 10);
        
        if (level === 0){
            if (this.state.numLevels === 0)
                nCount = this.state.numItems;
            else {
                let derivative = 1;
                for (let k = 1; k <= this.state.numLevels; k++)
                    derivative = (derivative * nCount) + 1;

                nCount = this.state.numItems / derivative + 1;
                if (nCount < 1000)
                    nCount = 1000;
            }
        }
        
        return nCount;
    }

    numItemsChanged(e){
        this.setState({ numItems: e.target.value });
    }

    numLevelsChanged(e){
        this.setState({ numLevels: e.target.value });
    }

    render() {

        return (
            <div>
                <h2>TreeView / Fast Load</h2>
                <div className="sample-block">
                    <IntegralUITreeViewComponent id="treeview-fast-load" ref={this.treeRef}
                        allowAnimation={false}
                        allowDrag={true}
                        allowDrop={true}
                        allowFocus={true}
                        items={this.state.items}
                        resourcePath={this.state.currentResourcePath}
                        selectionMode={this.state.currentSelectionMode}
                        size={this.state.ctrlSize}
                        theme={this.state.currentTheme}
                    ></IntegralUITreeViewComponent>
                    <div className="treeview-fast-load-panel">
                        <table cellPadding="3">
                            <tbody>
                                <tr>
                                    <td>Max items: </td>
                                    <td className="align-left"><input value={this.state.numItems} type="number" min="1" max="100000" style={{ width: '75px' }} onChange={((e) => this.numItemsChanged(e))} /></td>
                                </tr>
                                <tr>
                                    <td>Levels: </td>
                                    <td className="align-left"><input value={this.state.numLevels} type="number" min="0" max="100" style={{ width: '75px' }} onChange={((e) => this.numLevelsChanged(e))} /></td>
                                </tr>
                            </tbody>
                        </table>
                        <div align="center" style={{marginTop: '20px' }}>
                            <IntegralUIButtonComponent allowAnimation={this.state.isAnimationAllowed} theme={this.state.currentTheme} onClick={() => this.onAddClicked(0)}>Add</IntegralUIButtonComponent>
                            <IntegralUIButtonComponent allowAnimation={this.state.isAnimationAllowed} theme={this.state.currentTheme} onClick={() => this.onClearClicked(0)}>Clear</IntegralUIButtonComponent>
                        </div>
                        <div align="center" style={{marginTop: '20px' }}>
                            <IntegralUIButtonComponent allowAnimation={this.state.isAnimationAllowed} theme={this.state.currentTheme} onClick={() => this.onExpandAllClicked(0)}>Expand All</IntegralUIButtonComponent>
                            <IntegralUIButtonComponent allowAnimation={this.state.isAnimationAllowed} theme={this.state.currentTheme} onClick={() => this.onCollapseAllClicked(0)}>Collapse All</IntegralUIButtonComponent>
                        </div>
                    </div>
                    <div className="feature-help">
                        <p><span className="initial-space"></span>In above demo, you can choose how many items to display in the TreeView. For demonstration purposes only, a limit is set to 100,000 items. In real scenario, the only limit is how much data the browser can handle. By clicking on the Add button, the TreeView is populated with custom data.</p>
                        <p><span className="initial-space"></span>To start a drag and drop operation, left-click on a item and move the mouse cursor, so that you can reorder items during run-time. In this example, there are no restrictions set, and you can drag and drop a item and place it above or below another item. However, if you want you can set conditions and provide custom drag drop operations on your own.</p>
                        <p><span className="initial-space"></span>You can also navigate among items using the keyboard. All standard operations are supported: Left, Right, Up, Down, PageUp, PageDown, Home and End.</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default TreeViewFastLoad;
