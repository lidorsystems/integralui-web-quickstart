import React, { Component } from 'react';

import { IntegralUIAnimationType, IntegralUITabScrollMode, IntegralUITheme } from 'integralui-web/components/integralui.enums.js';

import IntegralUIButtonComponent from 'integralui-web/wrappers/react.integralui.button.js';
import IntegralUINumericComponent from 'integralui-web/wrappers/react.integralui.numeric.js';
import IntegralUITabComponent from 'integralui-web/wrappers/react.integralui.tab.js';
import IntegralUITabStripComponent from 'integralui-web/wrappers/react.integralui.tabstrip.js';

import './tabstrip-add-remove.css';

class TabStripAddRemove extends Component {
    constructor(props){
        super(props);

        this.state = {
            ctrlSize: { height: 300 },
            currentAnimation: IntegralUIAnimationType.Fade,
            currentResourcePath: '../../integralui-web/icons',
            currentScrollMode: IntegralUITabScrollMode.InBound,
            currentSelection: null,
            currentTheme: IntegralUITheme.Office,
            inlineCtrlSize: { width: 90 },
            insertAtValue: 0,
            isAnimationAllowed: true,
            tabs: [],
            removeAtValue: 0
        }
    }

    //
    // Control Panel
    //

    // Add Button
    onAddClicked(e){
        let tabList = [...this.state.tabs];
        let newTab = this.createNewTab();

        tabList.push(newTab);

        this.setState({ tabs: tabList, currentSelection: newTab });
    }

    // Insert After Button
    onInsertAfterClicked(e){
        let tabList = [...this.state.tabs];
        let selIndex = tabList.indexOf(this.state.currentSelection);

        if (selIndex < 0)
            this.onAddClicked(e);
        else {
            let newTab = this.createNewTab();

            tabList.splice(selIndex + 1, 0, newTab);
            this.setState({ tabs: tabList, currentSelection: newTab });
        }
    }

    // Insert Before Button
    onInsertBeforeClicked(e){
        let tabList = [...this.state.tabs];
        let selIndex = tabList.indexOf(this.state.currentSelection);

        if (selIndex < 0)
            this.onAddClicked(e);
        else {
            let newTab = this.createNewTab();

            tabList.splice(selIndex, 0, newTab);
            this.setState({ tabs: tabList, currentSelection: newTab });
        }
    }

    // Insert At Button
    onInsertAtClicked(e){
        let tabList = [...this.state.tabs];

        if (this.state.insertAtValue >= tabList.length)
            this.onAddClicked(e);
        else if (this.state.insertAtValue >= 0 && this.state.insertAtValue < tabList.length){
            let newTab = this.createNewTab();

            tabList.splice(this.state.insertAtValue, 0, newTab);
            this.setState({ tabs: tabList, currentSelection: newTab });
        }
    }

    onInsertAtValueChanged(e){
        this.setState({ insertAtValue: e.detail.value });
    }

    // Remove Button
    onRemoveClicked(e){
        let tabList = [...this.state.tabs];
        let selIndex = tabList.indexOf(this.state.currentSelection);

        if (selIndex >= 0){
            tabList.splice(selIndex, 1);
            this.setState({ tabs: tabList, currentSelection: selIndex > 0 ? tabList[selIndex - 1] : null });
        }
    }

    // Remove At Button
    onRemoveAtClicked(e){
        let tabList = [...this.state.tabs];

        if (this.state.removeAtValue >= tabList.length)
            this.onRemoveClicked(e);
        else if (this.state.removeAtValue >= 0 && this.state.removeAtValue < tabList.length){
            tabList.splice(this.state.removeAtValue, 1);
            this.setState({ tabs: tabList, currentSelection: this.state.removeAtValue > 0 ? tabList[this.state.removeAtValue - 1] : null });
        }
    }

    onRemoveAtValueChanged(e){
        this.setState({ removeAtValue: e.detail.value });
    }

    // Clear Button
    onClearClicked(e){
        this.setState({ tabs: [], currentSelection: null });
    }

    //
    // Create Tabs Methods
    //

    createNewTab(){
        // Create a new tab object
        return { id: this.state.tabs.length + 1, text: "Tab " + (this.state.tabs.length + 1).toString() }
    }


    render() {
        var tabs = this.state.tabs.map((tab, index) => {
            return (
                <IntegralUITabComponent key={index} data={tab} text={tab.text} theme={this.state.currentTheme}>
                    <div className="tbs-addremove-tab-content">Content of {tab.text}</div>
                </IntegralUITabComponent>
            )
        });

        return (
            <div>
                <h2>TabStrip / Add-Remove Tabs from Code</h2>
                <div className="sample-block">
                    <div id="tabstrip-addremove" style={{ display: tabs.length > 0 ? 'inline-block' : 'none' }}>
                        <IntegralUITabStripComponent
                            allowAnimation={this.state.isAnimationAllowed}
                            contentAnimation={this.state.currentAnimation}
                            resourcePath={this.state.currentResourcePath}
                            scrollMode={this.state.currentScrollMode}
                            selectedTab={this.state.currentSelection}
                            size={this.state.ctrlSize}
                            theme={this.state.currentTheme} 
                        > 
                            {tabs}
                        </IntegralUITabStripComponent>
                    </div>
                    <div className="tabstrip-addremove-empty-block" style={{ display: tabs.length === 0 ? 'inline-block' : 'none' }}>TabStrip is empty.</div>
                    <div className="tabstrip-addremove-panel">
                        <IntegralUIButtonComponent allowAnimation={this.state.isAnimationAllowed} theme={this.state.currentTheme} onClick={() => this.onAddClicked(0)}>Add</IntegralUIButtonComponent>
                        <IntegralUIButtonComponent allowAnimation={this.state.isAnimationAllowed} theme={this.state.currentTheme} onClick={() => this.onInsertAfterClicked(0)}>Insert After</IntegralUIButtonComponent>
                        <IntegralUIButtonComponent allowAnimation={this.state.isAnimationAllowed} theme={this.state.currentTheme} onClick={() => this.onInsertBeforeClicked(0)}>Insert Before</IntegralUIButtonComponent>
                        <div className="inline-block">
                            <IntegralUIButtonComponent allowAnimation={this.state.isAnimationAllowed} size={this.state.inlineCtrlSize} theme={this.state.currentTheme} onClick={() => this.onInsertAtClicked(0)}>Insert At</IntegralUIButtonComponent><IntegralUINumericComponent resourcePath={this.state.currentResourcePath} size={this.state.inlineCtrlSize} value={this.state.insertAtValue} theme={this.state.currentTheme} valueChanged={(e) => this.onInsertAtValueChanged(e)}></IntegralUINumericComponent>
                        </div>
                        <IntegralUIButtonComponent allowAnimation={this.state.isAnimationAllowed} theme={this.state.currentTheme} onClick={() => this.onRemoveClicked(0)}>Remove</IntegralUIButtonComponent>
                        <div className="inline-block">
                            <IntegralUIButtonComponent allowAnimation={this.state.isAnimationAllowed} size={this.state.inlineCtrlSize} theme={this.state.currentTheme} onClick={() => this.onRemoveAtClicked(0)}>Remove At</IntegralUIButtonComponent><IntegralUINumericComponent resourcePath={this.state.currentResourcePath} size={this.state.inlineCtrlSize} value={this.state.removeAtValue} theme={this.state.currentTheme} valueChanged={(e) => this.onRemoveAtValueChanged(e)}></IntegralUINumericComponent>
                        </div>
                        <IntegralUIButtonComponent allowAnimation={this.state.isAnimationAllowed} theme={this.state.currentTheme} onClick={() => this.onClearClicked(0)}>Clear</IntegralUIButtonComponent>
                    </div>
                    <div className="feature-help">
                        <p><span className="initial-space"></span>An example that demonstrates adding and removal od tabs manually from code using buttons.</p>
                        <p><span className="initial-space"></span>You can add tabs at the end, before or after a specific tab (in this case the selected tab) or at specific position.</p>
                        <p><span className="initial-space"></span>In similar way, you can remove a specific tab using its object reference or its position in the tab list. There is an option to remove all tabs from the list.</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default TabStripAddRemove;
