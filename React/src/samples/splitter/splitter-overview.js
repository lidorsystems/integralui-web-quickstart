import React, { Component } from 'react';

import IntegralUISplitterComponent from 'integralui-web/wrappers/react.integralui.splitter.js';
import { IntegralUIOrientation, IntegralUITheme } from 'integralui-web/components/integralui.enums.js';

import './splitter-overview.css';

class SplitterOverview extends Component {

    //
    // Initialization / Destruction --------------------------------------------------------------
    //

    constructor(props){
        super(props);

        this._splitter2 = React.createRef();

        this.state = {
            currentSplitterDistance: 180,
            currentTheme: IntegralUITheme.Office,
            panel1Data: { content: 'Curabitur pretium tincidunt lacus. Nulla gravida orci a odio. Nullam varius, turpis et commodo pharetra, est eros bibendum elit, nec luctus magna felis sollicitudin mauris. Integer in mauris eu nibh euismod gravida. Duis ac tellus et risus vulputate vehicula. Donec lobortis risus a elit. Etiam tempor.' },
            panel2Data: { content: 'Pellentesque malesuada nulla a mi. Duis sapien sem, aliquet nec, commodo eget, consequat quis, neque. Aliquam faucibus, elit ut dictum aliquet, felis nisl adipiscing sapien, sed malesuada diam lacus eget erat. Cras mollis scelerisque nunc. Nullam arcu. Aliquam consequat.' },
            panel3Data: { content: 'Fusce convallis, mauris imperdiet gravida bibendum, nisl turpis suscipit mauris, sed placerat ipsum urna sed risus. In convallis tellus a mauris. Curabitur non elit ut libero tristique sodales. Mauris a lacus. Donec mattis semper leo. In hac habitasse platea dictumst.' },
            spliiterOrientation: IntegralUIOrientation.Vertical
        }
    }

    //
    // Methods -----------------------------------------------------------------------------------
    //

    _onSplitterMoving(e){
        if (e.detail.value < 100)
           e.detail.cancel = true;
        else if (this._splitter2 && this._splitter2.current)
            this._splitter2.current.updateLayout();
    }

    _onSplitterMoved(e){
        if (this._splitter2 && this._splitter2.current)
            this._splitter2.current.updateLayout();
    }

    // Update ------------------------------------------------------------------------------------

    render() {
        return (
            <div>
                <h2>Splitter / Overview</h2>
                <div className="spt-ovw-block">
                    <IntegralUISplitterComponent id="splitter-1" splitterDistance={this.state.currentSplitterDistance} theme={this.state.currentTheme} splitterMoving={(e) => this._onSplitterMoving(e)} splitterMoved={(e) => this._onSplitterMoved(e)}>
                        <div slot="panel1">
                            <p className="spt-ovw-panel-content">{this.state.panel1Data.content}</p>
                        </div>
                        <div slot="panel2" className="spt-ovw-block-2">
                            <IntegralUISplitterComponent ref={this._splitter2} id="splitter-2" orientation={this.state.spliiterOrientation} theme={this.state.currentTheme}>
                                <div slot="panel1">
                                    <p className="spt-ovw-panel-content">{this.state.panel2Data.content}</p>
                                </div>
                                <div slot="panel2" className="spt-ovw-block-2">
                                    <p className="spt-ovw-panel-content">{this.state.panel3Data.content}</p>
                                </div>
                            </IntegralUISplitterComponent>
                        </div>
                    </IntegralUISplitterComponent>
                </div>
                <div className="feature-help">
                    <p><span className="initial-space"></span><strong><span className="code-name">IntegralUI</span> Splitter</strong> is a native Web Component that allows you to resize two different blocks or elements during run-time.</p>
                    <p><span className="initial-space"></span>The demonstration above shows two Splitter components, the first one is horizontal and second one is vertical. By click and hold of the left mouse button you can move the splitter and the panels will resize based on moving direction. The splitter cannot move past the end of each panel.</p>
                </div>
            </div>
        );
    }
}

export default SplitterOverview;
