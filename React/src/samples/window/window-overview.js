import React, { Component } from 'react';

import IntegralUIPanelComponent from 'integralui-web/wrappers/react.integralui.panel.js';
import IntegralUIWindowComponent from 'integralui-web/wrappers/react.integralui.window.js';
import { IntegralUITheme } from 'integralui-web/components/integralui.enums.js';

import './window-overview.css';

class WindowOverview extends Component {

    //
    // Initialization / Destruction --------------------------------------------------------------
    //

    constructor(props){
        super(props);

        this.state = {
            ctrlSize: { width: 250, height: 300 },
            currentResourcePath: 'integralui-web/icons',
            currentTheme: IntegralUITheme.Office
        }

        this.winRef1 = React.createRef();
        this.winRef2 = React.createRef();
    }

    componentWillUnmount(){
        if (this.winRef1)
            this.winRef1.current.close(true);

        if (this.winRef2)
            this.winRef2.current.close(true);
    }

    //
    // Methods -----------------------------------------------------------------------------------
    //

    // Update ------------------------------------------------------------------------------------

    render() {
        return (
            <div id="window-block" style={{ overflow: 'hidden', position: 'relative', height: window.innerHeight - 100 + 'px' }}>
                <h2>Window / Overview</h2>
                <div className="sample-block">
                    <IntegralUIWindowComponent id="window-overview-1" ref={this.winRef1}
                        allowAnimation={true}
                        iconUrl={'integralui-web/icons/menu-button.ico'}
                        parentId={'window-block'}
                        position={{ top: 150, left: 250 }}
                        resourcePath={this.state.currentResourcePath}
                        selected={true}
                        size={this.state.ctrlSize}
                        text={'Window 1'}
                        theme={this.state.currentTheme} 
                        visible={true}
                    >
                        <div slot="content">
                            <IntegralUIPanelComponent contentAlignment={{ horizontal: 'center', vertical: 'middle' }}>
                                Content of Window 1
                            </IntegralUIPanelComponent>
                        </div>
                    </IntegralUIWindowComponent>
                    <IntegralUIWindowComponent id="window-overview-2" ref={this.winRef2}
                        allowAnimation={true}
                        iconUrl={'integralui-web/icons/calendar-dark.ico'}
                        parentId={'window-block'}
                        position={{ top: 75, left: 100 }}
                        resourcePath={this.state.currentResourcePath}
                        size={this.state.ctrlSize}
                        text={'Window 2'}
                        theme={this.state.currentTheme} 
                        visible={true}
                    >
                        <div slot="content">
                            <IntegralUIPanelComponent contentAlignment={{ horizontal: 'center', vertical: 'middle' }}>
                                Content of Window 2
                            </IntegralUIPanelComponent>
                        </div>
                    </IntegralUIWindowComponent>
                    <div className="feature-help">
                        <p><span className="initial-space"></span><strong><span className="code-name">IntegralUI</span> Window</strong> is a native Web Component that represents a resizable window. It consists of header with icon, title, command buttons and content container. You can add any custom HTML content to window header and body.</p>
                        <p><span className="initial-space"></span>The demonstration above shows only the basic features available in Window component like moving, resizing and changing the window state from/to Normal, Minimized or Maximized. In addition, you can close (destroy) or hide the window during run-time.</p>
                        <p><span className="initial-space"></span>By default, window during run-time will be attached to page body, but if you provide a parent id the window will be restricted to its parent space.</p>
                        <p><span className="initial-space"></span>Some of the properties and events available:</p>
                        <ul className="feature-points">
                            <li><span className="code-name">maxSize and minSize</span> - Specifies the mazimum and minimum size the window can have</li>
                            <li><span className="code-name">parentId</span> - Specifies the id value of parent element that will contain this window</li>
                            <br/>
                            <li><span className="code-name">positionChanged</span> - Occurs when window position changes</li>
                            <li><span className="code-name">sizeChanged</span> - Occurs when window size changes</li>
                            <li><span className="code-name">visibleChanged</span> - Occurs when window visibility is changed</li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

export default WindowOverview;
