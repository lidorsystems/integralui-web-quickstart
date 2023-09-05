import React, { Component } from 'react';

import IntegralUIButtonComponent from 'integralui-web/wrappers/react.integralui.button.js';
import IntegralUIPanelComponent from 'integralui-web/wrappers/react.integralui.panel.js';
import IntegralUISidePanelComponent from 'integralui-web/wrappers/react.integralui.sidepanel.js';
import IntegralUIRadioButtonComponent from 'integralui-web/wrappers/react.integralui.radiobutton.js';
import IntegralUIRadioGroupComponent from 'integralui-web/wrappers/react.integralui.radiogroup.js';
import { IntegralUIPlacement, IntegralUITheme } from 'integralui-web/components/integralui.enums.js';

import './sidepanel-overview.css';

class SidePanelOverview extends Component {
    constructor(props){
        super(props);

        this.state = {
            btnVisibilityText: 'Show',
            ctrlSize: { width: 400, height: 200 },
            currentPlacement: IntegralUIPlacement.Left,
            currentResourcePath: 'integralui-web/icons',
            currentTheme: IntegralUITheme.Office,
            isAnimationAllowed: true,
            isPanelVisible: false
        }
    }

    //
    // Methods -----------------------------------------------------------------------------------
    //


    // Events ------------------------------------------------------------------------------------

    onPlacementChecked(e){
        let placement = IntegralUIPlacement.Left;

        switch (e.detail.index){
            case 0: 
                placement = IntegralUIPlacement.Top;
                break;

            case 1: 
                placement = IntegralUIPlacement.Right;
                break;

            case 2: 
                placement = IntegralUIPlacement.Bottom;
                break;

            default: 
                placement = IntegralUIPlacement.Left;
                break;
        }

        this.setState({ currentPlacement: placement });
    }

    onVisibilityClicked(){
        this.setState({ isPanelVisible: !this.state.isPanelVisible });
        this.updateVisibiltyButtonText();
    }

    updateVisibiltyButtonText(){
        this.setState({ btnVisibilityText:  this.state.isPanelVisible ? 'Hide' : 'Show' });
    }

    onSidePanelVisibleChanged(e){
        this.setState({ isPanelVisible: e.detail.visible });
        this.updateVisibiltyButtonText();
    }

    // Update ------------------------------------------------------------------------------------

    render() {
        return (
            <div>
                <h2>SidePanel / Overview</h2>
                <div className="sample-block" id="sample-block-sidepanel-overview">
                    <IntegralUISidePanelComponent
                        allowAnimation={this.state.isAnimationAllowed}
                        parentId={'sample-block-sidepanel-overview'}
                        placement={this.state.currentPlacement}
                        resourcePath={this.state.currentResourcePath}
                        size={this.state.ctrlSize}
                        theme={this.state.currentTheme} 
                        visible={this.state.isPanelVisible}
                        visibleChanged={(e) => this.onSidePanelVisibleChanged(e)}
                    >
                        <div className="sidepanel-overview-content">
                            <div>Curabitur pretium tincidunt lacus. Nulla gravida orci a odio. Nullam varius, turpis et commodo pharetra, est eros bibendum elit, nec luctus magna felis sollicitudin mauris. Integer in mauris eu nibh euismod gravida. Duis ac tellus et risus vulputate vehicula. Donec lobortis risus a elit. Etiam tempor.</div>
                            <div>Fusce convallis, mauris imperdiet gravida bibendum, nisl turpis suscipit mauris, sed placerat ipsum urna sed risus. In convallis tellus a mauris. Curabitur non elit ut libero tristique sodales. Mauris a lacus. Donec mattis semper leo. In hac habitasse platea dictumst.</div>
                        </div>
                    </IntegralUISidePanelComponent>
                    <IntegralUIPanelComponent id="sample-block-sidepanel-overview-content" contentAlignment={{ horizontal: 'center', vertical: 'middle' }}>
                        <div className="sample-block-sidepanel-control-panel">
                            <label>Placement: </label>
                            <IntegralUIRadioGroupComponent theme={this.state.currentTheme} buttonChecked={(e) => this.onPlacementChecked(e)}>
                                <IntegralUIRadioButtonComponent>Top</IntegralUIRadioButtonComponent>
                                <IntegralUIRadioButtonComponent>Right</IntegralUIRadioButtonComponent>
                                <IntegralUIRadioButtonComponent>Bottom</IntegralUIRadioButtonComponent>
                                <IntegralUIRadioButtonComponent checked={true}>Left</IntegralUIRadioButtonComponent>
                            </IntegralUIRadioGroupComponent>
                            <IntegralUIButtonComponent allowAnimation={this.state.isAnimationAllowed} onClick={() => this.onVisibilityClicked()}>{this.state.btnVisibilityText}</IntegralUIButtonComponent>
                        </div>
                    </IntegralUIPanelComponent>
                </div>
                <div className="feature-help">
                    <p><span className="initial-space"></span><strong><span className="code-name">IntegralUI</span> SidePanel</strong> is a native Web Component that allows you to add custom content panel that appears by sliding from page side. Contains only one content panel and it can appear inside parent container on top of other content with overlay.</p>
                    <p><span className="initial-space"></span>The following features are available.</p>
                    <ul className="feature-points">
                        <li><span className="code-name">Animations</span> - Opening/Closing of side panel is animated with option to change animation speed</li>
                        <li><span className="code-name">Dynamic Resize</span> - Any changes to parent container size affects the position and size of the side panel</li>
                        <li><span className="code-name">Custom Content</span> - Content panel can contain custom HTML elements or other components</li>
                        <li><span className="code-name">Different Sides</span> - You can place SidePanel component on each side of parent container: Top, Right, Bottom or Left </li>
                        <li><span className="code-name">Inbound</span> - Calculating the side panel layout includes parent container padding</li>
                        <li><span className="code-name">Overlay</span> - Optional panel (in dark gray background) that overshadow other page content supressing any user action</li>
                        <li><span className="code-name">Visiblity</span> - Open/Close the content of side panel manually from code </li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default SidePanelOverview;
