import React, { Component } from 'react';

import IntegralUIButtonComponent from 'integralui-web/wrappers/react.integralui.button.js';
import IntegralUITreeViewComponent from 'integralui-web/wrappers/react.integralui.treeview.js';
import { IntegralUITheme } from 'integralui-web/components/integralui.enums.js';

import './treeview-load-json.css';
import { iuiTreeViewLoadJSONStyle } from './treeview-load-json.style.js';
import treeData from './treeview-load-json-tree-data.json';

class TreeViewLoadJSON extends Component {

    //
    // Initialization / Destruction --------------------------------------------------------------
    //

    constructor(props){
        super(props);

        this.state = {
            ctrlSize: { width: 400, height: 400 },
            currentResourcePath: '../../integralui-web/icons',
            currentTheme: IntegralUITheme.Office,
            data: [],
            treeFields: {
                id: 'itemId',
                expanded: 'isExpanded',
                pid: 'parentId',
                items: 'children',
                text: 'label'
            }
        }

        this.buttonRef = React.createRef();
        this.treeRef = React.createRef();
    }

    btnClicked(){
        this.buttonRef.current.setStyle({ display: 'none' });

        this.loadFromJSON();
    }

    loadFromJSON(){
        // Suspend the tree layout from updates, to increase performance
        this.treeRef.current.suspendLayout();

        // Load data into the tree view
        this.treeRef.current.loadData(treeData, null, this.state.treeFields, false);

        // Resume and update the tree layout
        this.treeRef.current.resumeLayout();
    }

    //
    // Methods -----------------------------------------------------------------------------------
    //

    // Update ------------------------------------------------------------------------------------

    render() {
        return (
            <div>
                <h2>TreeView / Load Data from JSON</h2>
                <div className="sample-block">
                    <IntegralUIButtonComponent id="treeview-button-load-json" ref={this.buttonRef}
                        allowAnimation={true}
                        theme={this.state.currentTheme} 
                        onClick={() => this.btnClicked()}
                    >Load JSON</IntegralUIButtonComponent>
                    <IntegralUITreeViewComponent id="treeview-load-json" ref={this.treeRef}
                        customStyle={iuiTreeViewLoadJSONStyle}
                        dataFields={this.state.treeFields}
                        items={this.state.data}
                        resourcePath={this.state.currentResourcePath}
                        size={this.state.ctrlSize}
                        theme={this.state.currentTheme} 
                    ></IntegralUITreeViewComponent>
                </div>
                <div className="feature-help">
                    <p><span className="initial-space"></span>This sample shows how to populate the TreeView using JSON file as a data source. The data source has custom data fields, which are mapped to the ones used by the tree view.</p>
                    <p><span className="initial-space"></span>For data binding, use the <strong>dataFields</strong> property of the TreeView component. This property accepts an object that replaces the default field names with your own.</p>
                    <p><span class="initial-space"></span>You can find the JSON data file in the same directory as this sample.</p>
                </div>
            </div>
        );
    }
}

export default TreeViewLoadJSON;
