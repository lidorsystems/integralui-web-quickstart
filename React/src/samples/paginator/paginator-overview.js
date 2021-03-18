import React, { Component } from 'react';

import IntegralUIPaginatorComponent from 'integralui-web/wrappers/react.integralui.paginator.js';
import { IntegralUITheme } from 'integralui-web/components/integralui.enums.js';

import './paginator-overview.css';

class ButtonOverview extends Component {

    //
    // Initialization / Destruction --------------------------------------------------------------
    //

    constructor(props){
        super(props);

        this.state = {
            currentResourcePath: 'integralui-web/icons',
            currentTheme: IntegralUITheme.Office,
            maxLimit: 5,
            pages: [
                { text: "Page 1" },
                { text: "Page 2" },
                { text: "Page 3" },
                { text: "Page 4" },
                { text: "Page 5" }
            ],
            selectedPage: 1
        }
    }

    //
    // Methods -----------------------------------------------------------------------------------
    //

    onPageChanged(e){
        this.setState({ selectedPage: e.detail.value });
    }

    // Update ------------------------------------------------------------------------------------

    render() {
        var pages = this.state.pages.map((page, index) => {
            return (
                <div className="pgr-ovw-page-block" key={index} style={{ zIndex: index === this.state.selectedPage - 1 ? 2 : 1 }}>
                    { index === this.state.selectedPage - 1 && 
                        <span>{page.text}</span>
                    }
                </div>
            )
        });

        return (
            <div>
                <h2>Paginator / Overview</h2>
                <div className="sample-block" id="button-overview">
                    <div className="pgr-ovw-container">
                        <div className="pgr-ovw-page-container">
                            {pages}
                        </div>
                        <div align="center">
                            <IntegralUIPaginatorComponent 
                                currentPage={this.state.selectedPage} 
                                maxPages={this.state.maxLimit} 
                                resourcePath={this.state.currentResourcePath} 
                                theme={this.state.currentTheme}
                                pageChanged={(e) => this.onPageChanged(e)}
                            />
                        </div>
                    </div>
                    <div className="feature-help">
                        <p><span className="initial-space"></span><strong><span className="code-name">IntegralUI</span> Paginator</strong> is a native Web Component that allows you to add pagination to your application. You can divide your content in multiple pages, by using Paginator you can select a page number and corresponding content will appear in current view.</p>
                        <p><span className="initial-space"></span>The demonstration above shows five pages showing single text line. By using buttons from Paginator you can navigate between pages, or you can set a number in the input box to go directly to specified page.</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default ButtonOverview;
