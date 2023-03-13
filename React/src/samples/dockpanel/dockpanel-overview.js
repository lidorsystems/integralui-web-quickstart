import React, { Component } from 'react';

import IntegralUIDockAreaComponent from 'integralui-web/wrappers/react.integralui.dockarea.js';
import IntegralUIDockPanelComponent from 'integralui-web/wrappers/react.integralui.dockpanel.js';
import IntegralUIPanelComponent from 'integralui-web/wrappers/react.integralui.panel.js';
import { IntegralUITheme } from 'integralui-web/components/integralui.enums.js';

import './dockpanel-overview.css';

class DockPanelOverview extends Component {

    //
    // Initialization / Destruction --------------------------------------------------------------
    //

    constructor(props){
        super(props);

        this.state = {
            currentTheme: IntegralUITheme.Office,
            ctrlSize: { height: 500 },
            panels: [
                { id: 1, text: 'Panel 1', dock:  'Left', size: { width: 150 } },
                { id: 2, text: 'Panel 2', dock: 'Top', size: { height: 50 } },
                { id: 3, text: 'Panel 3', dock: 'Right', size: { width: 250 } },
                { id: 4, text: 'Panel 4', dock: 'Bottom', size: { height: 200 } },
                { id: 5, text: 'Panel 5', dock: 'Fill' }
            ]
       }

       this.dockAreaRef = React.createRef();
    }

    //
    // Methods -----------------------------------------------------------------------------------
    //

    panelDockChanged(e){
        if (e.detail.data){
            let list = [...this.state.panels];
            list
                .filter(panel => panel.id === e.detail.data.id)
                .map(panel => panel.dock = e.detail.dock);

            this.setState({ panels: list });
        }
    }

    // Update ------------------------------------------------------------------------------------

    render(){
        //
        // Mandatory components are 
        //      - IntegralUIDockAreaComponent (arranges docking panels during runtime) and 
        //      - IntegralUIDockPanelComponent (a resizable container where you can add custom HTML content)
        //
        // IntegralUIPanelComponent below is optional, used for this demo only to vertically align the text, you can replace it with something else
        //
        let panels = this.state.panels.map((panel, index) => {
            return (
                <IntegralUIDockPanelComponent key={index} data={panel} dock={panel.dock} size={panel.size} theme={this.state.currentTheme} dockChanged={(e) => this.panelDockChanged(e)}>
                    <IntegralUIPanelComponent allowDrag={true} contentAlignment={{ vertical: 'middle' }}>
                        {panel.text} - {panel.dock}
                    </IntegralUIPanelComponent>
                </IntegralUIDockPanelComponent>
            )
        });

        return (
            <div>
                <h2>DockPanel / Overview</h2>
                <div className="sample-block" id="dockpanel-overview">
                    <IntegralUIDockAreaComponent size={this.state.ctrlSize} ref={this.dockAreaRef}>
                        {panels}
                    </IntegralUIDockAreaComponent>
                    <div className="feature-help">
                        <p><span className="initial-space"></span><strong><span className="code-name">IntegralUI</span> DockPanel</strong> is a native Web Component that represents a resizable docking container. You can dock this component on each side: Top, Right, Bottom, Left or set it up to Fill the remaining space of its parent element. When docked at any side, the component becomes resizable. You can add any custom HTML content inside the container and modify it using CSS.</p>
                        <p><span className="initial-space"></span>This component allows you to create dynamic layouts, where you can rearrange your content during run-time.</p>
                        <p><span className="initial-space"></span>In this demo, there are five DockPanels, four of them docked on each side and one that fills the remaining space. To change the docking side, left-click and start dragging the panel. Depending on target, a docking position marker will appear showing exact position where you can drop it. For demonstration purposes, each docking panel contains Panel component with information about its current dock side.</p>
                        <p><span className="initial-space"></span>The following properties and events are supported:</p>
                        <ul className="feature-points">
                            <li><span className="code-name">allowDock</span> - Specifies the side(s) at which the component can dock</li>
                            <li><span className="code-name">allowDrag</span> - Determines whether you can move the component to a different side</li>
                            <li><span className="code-name">allowResize</span> - Determines whether component is resizable or not</li>
                            <li><span className="code-name">dock</span> - Specifies the side at which the component is currently docked</li>
                            <li><span className="code-name">data</span> - Specifies an object that holds data related to the component</li>
                            <li><span className="code-name">enabled</span> - Determines whether the component is enabled or disabled</li>
                            <li><span className="code-name">name</span> - Uniquely identifies the component</li>
                            <li><span className="code-name">state</span> - Specifies the component state: disabled, hovered, etc.</li>
                            <br/>
                            <li><span className="code-name">dockChanged</span> - Occurs when docking panel changes its dock side</li>
                        </ul>
                   </div>
                </div>
            </div>
        );
    }
}

export default DockPanelOverview;
