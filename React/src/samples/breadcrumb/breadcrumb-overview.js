import React, { Component } from 'react';

import IntegralUIBreadCrumbComponent from 'integralui-web/wrappers/react.integralui.breadcrumb.js';
import { IntegralUITheme } from 'integralui-web/components/integralui.enums.js';

import './breadcrumb-overview.css';

class BreadCrumbOverview extends Component {

    //
    // Initialization / Destruction --------------------------------------------------------------
    //

    constructor(props){
        super(props);

        this.state = {
            ctrlSize: { width: 300 },
            currentMaxDropDownItems: 5,
            currentResourcePath: 'integralui-web/icons',
            currentTheme: IntegralUITheme.Office,
            dropDownSize: { width: 150 },
            isAnimationAllowed: true,
            items: [
                { 
                    id: 1,
                    text: "Favorites",
                    icon: "computer-icons favorites",
                    items: [
                        { id: 11, pid: 1, text: "Desktop", icon: "computer-icons empty-doc" },
                        { id: 12, pid: 1, text: "Downloads", icon: "computer-icons downloads" }
                    ]
                },
                { 
                    id: 2,
                    text: "Libraries",
                    icon: "computer-icons folder",
                    items: [
                        { 
                            id: 21, 
                            pid: 2, 
                            text: "Documents", 
                            icon: "computer-icons documents",
                            expanded: false,
                            items: [
                                { id: 211, pid: 21, text: "My Documents", icon: "computer-icons empty-doc" },
                                { id: 212, pid: 21, text: "Public Documents", icon: "computer-icons empty-doc" }
                            ]
                        },
                        { id: 22, pid: 2, text: "Music", icon: "computer-icons music" },
                        { id: 23, pid: 2, text: "Pictures", icon: "computer-icons pictures" },
                        { id: 24, pid: 2, text: "Videos", icon: "computer-icons videos" }
                    ]
                },
                { 
                    id: 3,
                    text: "Computer",
                    icon: "computer-icons pc",
                    expanded: false,
                    items: [
                        { id: 31, pid: 3, text: "Local Disk (C:)", icon: "computer-icons disk" },
                        { id: 32, pid: 3, text: "Storage (D:)", icon: "computer-icons disk" }
                    ]
                },
                { id: 4, text: "Network", icon: "computer-icons network" },
                { id: 5, text: "Recycle Bin", icon: "computer-icons recycle" }
            ]
        }

        this.state.currentSelection = this.state.items[0].items[1];

    }

    componentDidMount(){
    }

    //
    // Methods -----------------------------------------------------------------------------------
    //

    onSelectionChanged(e){
        console.log("Selection changed to: ", e.detail.item);
    }

    // Update ------------------------------------------------------------------------------------

    render() {
        return (
            <div>
                <h2>BreadCrumb / Overview</h2>
                <div className="sample-block">
                    <IntegralUIBreadCrumbComponent id="breadcrumb-overview"
                        allowAnimation={this.state.isAnimationAllowed}
                        dropDownSize={this.state.dropDownSize}
                        items={this.state.items}
                        maxDropDownItems={this.state.currentMaxDropDownItems}
                        resourcePath={this.state.currentResourcePath}
                        selectedItem={this.state.currentSelection}
                        size={this.state.ctrlSize}
                        theme={this.state.currentTheme} 
                        selectionChanged={(e) => this.onSelectionChanged(e)}
                    > 
                    </IntegralUIBreadCrumbComponent>
                    <div className="feature-help">
                        <p><span className="initial-space"></span><strong><span className="code-name">IntegralUI</span> Breadcrumb</strong> is a native Web Component used for navigation, where each item can have a link that is automatically separated. The component is fully customizable via CSS.</p>
                        <p><span className="initial-space"></span>In this example, there is a small tree hierarachy where only currently selected path is shown. Initialy item named 'Downloads' is selected, and the Breadcrumb shows the whole path that leads to this item. By clicking on the separator (arrow button), a dropdown list will popup where you can select a different item.</p>
                        <p><span className="initial-space"></span>By default, links are not created, but you can customize the item template and add your own links either using the hyperlink tag or set navigation through code by handling  the selectionChanged event.</p>
                        <p><span className="initial-space"></span>The following properties and events are supported:</p>
                        <ul className="feature-points">
                            <li><span className="code-name">data</span> - Specifies an object that holds data related to the component</li>
                            <li><span className="code-name">dropDownSize</span> - Specifies the width and height of the dropdown list in pixels</li>
                            <li><span className="code-name">enabled</span> - Determines whether the component is enabled or disabled</li>
                            <li><span className="code-name">items</span> - Gets or sets a collection of items that is assigned to the component</li>
                            <li><span className="code-name">name</span> - Uniquely identifies the component</li>
                            <li><span className="code-name">selectedItem</span> - Specifies the item that is currently selected</li>
                            <li><span className="code-name">state</span> - Specifies the component state: disabled, hovered, etc.</li>
                            <br/>
                            <li><span className="code-name">enabledChanged</span> - Occurs when enabled property changes</li>
                            <li><span className="code-name">selectionChanged</span> - Occurs when an item is selected</li>
                            <li><span className="code-name">sizeChanged</span> - Occurs when component size changes</li>
                            <li><span className="code-name">stateChanged</span> - Occurs when component state changes</li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

export default BreadCrumbOverview;
