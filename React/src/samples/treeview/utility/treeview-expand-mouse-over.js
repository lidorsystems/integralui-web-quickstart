import React, { Component } from 'react';

import { IntegralUITheme } from 'integralui-web/components/integralui.enums.js';
import IntegralUITreeViewComponent from 'integralui-web/wrappers/react.integralui.treeview.js';

import './treeview-expand-mouse-over.css';

class TreeViewExpandMouseOver extends Component {
    constructor(props){
        super(props);

        this.state = {
            ctrlSize: { width: 350, height: 300 },
            currentResourcePath: '../../integralui-web/icons',
            currentTheme: IntegralUITheme.Office,
            isAnimationAllowed: true,
            items: [
                { 
                    id: 1,
                    text: "Favorites",
                    expanded: false,
                    items: [
                        { id: 11, pid: 1, text: "Desktop" },
                        { id: 12, pid: 1, text: "Downloads" }
                    ]
                },
                { 
                    id: 2,
                    text: "Libraries",
                    expanded: false,
                    items: [
                        { 
                            id: 21, 
                            pid: 2, 
                            text: "Documents", 
                            expanded: false,
                            items: [
                                { id: 211, pid: 21, text: "My Documents" },
                                { id: 212, pid: 21, text: "Public Documents" }
                            ]
                        },
                        { id: 22, pid: 2, text: "Music" },
                        { id: 23, pid: 2, text: "Pictures" },
                        { id: 24, pid: 2, text: "Videos" }
                    ]
                },
                { 
                    id: 3,
                    text: "Computer",
                    items: [
                        { id: 31, pid: 3, text: "Local Disk (C:)" },
                        { id: 32, pid: 3, text: "Storage (D:)" }
                    ]
                },
                { id: 4, text: "Network" },
                { id: 5, text: "Recycle Bin" }
            ]
        }

        this.expandTimer = null;
 
        this.treeRef = React.createRef();
    }

    // Expand item on mouse over after a delay of 500ms
    resetExpandTImer(){
        if (this.expandTimer)
            clearTimeout(this.expandTimer);

            this.expandTimer = null;
    }

    onItemHover(e){
        let self = this;

        self.resetExpandTImer();

        self.expandTimer = setTimeout(function(){
            self.treeRef.current.expand(e.detail.item);

            clearTimeout(self.expandTimer);
        }, 500);
    }

    render() {
        return (
            <div>
                <h2>TreeView / Expand on Mouse Over</h2>
                <div className="sample-block">
                    <IntegralUITreeViewComponent id="treeview-expand-mouseover" ref={this.treeRef}
                        allowAnimation={this.state.isAnimationAllowed}
                        items={this.state.items}
                        resourcePath={this.state.currentResourcePath}
                        size={this.state.ctrlSize}
                        theme={this.state.currentTheme} 
                        itemHover={(e) => this.onItemHover(e)}
                    ></IntegralUITreeViewComponent>
                    <div className="feature-help">
                        <p><span className="initial-space"></span>In this example, whenever mouse hovers over item space, the item will expand after a delay of 500ms. If mouse cursor is moved away from item space before set delay expires, nothing happens.</p>
                        <p><span className="initial-space"></span>This functionality is set in code by handling the <span className="code-object">itemHover</span> event.</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default TreeViewExpandMouseOver;
