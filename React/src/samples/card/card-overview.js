import React, { Component } from 'react';

import IntegralUICardComponent from 'integralui-web/wrappers/react.integralui.card.js';
import { IntegralUITheme } from 'integralui-web/components/integralui.enums.js';

import './card-overview.css';

class CardOverview extends Component {

    //
    // Initialization / Destruction --------------------------------------------------------------
    //

    constructor(props){
        super(props);

        this.state = {
            ctrlSize: { width: 250, height: 300 },
            currentTheme: IntegralUITheme.Office
        }

        this.ctrlRef = React.createRef();
    }

    //
    // Methods -----------------------------------------------------------------------------------
    //

    flipCard(e){
        if (e.detail.which === 1)
            this.ctrlRef.current.flip();
    }

    // Update ------------------------------------------------------------------------------------

    render() {
        return (
            <div>
                <h2>Card / Overview</h2>
                <div className="sample-block">
                    <IntegralUICardComponent id="card-overview" ref={this.ctrlRef}
                        footer={{ back: false }}
                        header={{ back: false }}
                        selected={true}
                        size={this.state.ctrlSize}
                        theme={this.state.currentTheme} 
                        mouseUp={(e) => this.flipCard(e)}
                    >
                        <div slot="front-header">
                            <span>Header</span>
                        </div>
                        <div slot="front-content">
                            <span>Curabitur pretium tincidunt lacus. Nulla gravida orci a odio. Nullam varius, turpis et commodo pharetra, est eros bibendum elit, nec luctus magna felis sollicitudin mauris. Integer in mauris eu nibh euismod gravida. Duis ac tellus et risus vulputate vehicula. Donec lobortis risus a elit. Etiam tempor.</span>
                        </div>
                        <div slot="front-footer">
                            <span>Footer</span>
                        </div>

                        <div slot="back-content">
                            <div>Pellentesque malesuada nulla a mi. Duis sapien sem, aliquet nec, commodo eget, consequat quis, neque. Aliquam faucibus, elit ut dictum aliquet, felis nisl adipiscing sapien, sed malesuada diam lacus eget erat. Cras mollis scelerisque nunc. Nullam arcu. Aliquam consequat.</div>
                        </div>
                   </IntegralUICardComponent>
                    <div className="feature-help">
                        <p><span className="initial-space"></span><strong><span className="code-name">IntegralUI</span> Card</strong> is a native Web Component that represents a content container. It consists of front and back side each with its own header, footer and content in the middle.</p>
                        <p><span className="initial-space"></span>The demonstration above shows only the basic features available in Card component. You can add custom HTML content inside each header, content or footer. Furthermore, card appearance is customizable via CSS.</p>
                        <p><span className="initial-space"></span>In this example, the front side contains header, content and footer while the back side only the content is filled. By clicking anywhere on the Card, you can flip its side.</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default CardOverview;
