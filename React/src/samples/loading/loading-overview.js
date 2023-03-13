import React, { Component } from 'react';

import IntegralUIButtonComponent from 'integralui-web/wrappers/react.integralui.button.js';
import IntegralUILoadingComponent from 'integralui-web/wrappers/react.integralui.loading.js';
import IntegralUIPanelComponent from 'integralui-web/wrappers/react.integralui.panel.js';
import { IntegralUITheme } from 'integralui-web/components/integralui.enums.js';

import './loading-overview.css';

class LoadingOverview extends Component {

    //
    // Initialization / Destruction --------------------------------------------------------------
    //

    constructor(props){
        super(props);

        this.state = {
            ctrlSize: { width: 500, height: 5 },
            currentTheme: IntegralUITheme.Office,
            isAnimationAllowed: true,
            isPanelEnabled: true,
            loadValue: 0
        }
    }

    //
    // Methods -----------------------------------------------------------------------------------
    //


    // Events ------------------------------------------------------------------------------------
    
    onLoadClicked(){
        let self = this;

        self.setState({ loadValue: 0, isPanelEnabled: false });

        // Update the loading value every 100 miliseconds, until it reaches 100%
        let valueInterval = setInterval(function(){
            if (self.state.loadValue < 100)
                self.setState({ loadValue: self.state.loadValue + 10 });
            else {
                self.setState({ loadValue: 100 });
                clearInterval(valueInterval);
            }
        }, 100);
    }

    onLoadComplete(){
        this.setState({ isPanelEnabled: true });
    }

    // Update ------------------------------------------------------------------------------------

    render() {
        return (
            <div>
                <h2>Loading / Overview</h2>
                <div className="sample-block" id="sample-block-loading-overview">
                    <IntegralUIPanelComponent id="sample-block-loading-content" contentAlignment = {{ vertical: 'middle' }} enabled={this.state.isPanelEnabled}>
                        <IntegralUIButtonComponent allowAnimation={this.state.isAnimationAllowed} allowFocus={false} onClick={() => this.onLoadClicked()}>Start Loading</IntegralUIButtonComponent>
                    </IntegralUIPanelComponent>
                    <IntegralUILoadingComponent 
                        parentId={'sample-block-loading-overview'}
                        size={this.state.ctrlSize}
                        theme={this.state.currentTheme}
                        value={this.state.loadValue}
                        loadComplete={() => this.onLoadComplete()}
                    ></IntegralUILoadingComponent>
                </div>
                <div className="feature-help">
                    <p><span className="initial-space"></span><strong><span className="code-name">IntegralUI</span> Loading</strong> is a native Web Component that shows animations during loading progression. It is fully customizable via CSS.</p>
                    <p><span className="initial-space"></span>The following features are available.</p>
                    <ul className="feature-points">
                        <li><span className="code-name">Animations</span> - There are animations when loading starts, during progression and when it ends</li>
                        <li><span className="code-name">Dynamic Resize</span> - Adjustments to component size during dynamic resize of parent container</li>
                        <li><span className="code-name">Events</span> - There are events fired when progession value changes and on load completion</li>
                        <li><span className="code-name">Progression</span> - Each progression from one state to another is animated, with option to start, update or end the loading from code</li>
                        <li><span className="code-name">Size</span> - Component can have custom width and height</li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default LoadingOverview;
