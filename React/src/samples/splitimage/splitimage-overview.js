import React, { Component } from 'react';

import IntegralUISplitImage from 'integralui-web/wrappers/react.integralui.splitimage.js';
import { IntegralUITheme } from 'integralui-web/components/integralui.enums.js';

import image1 from '../../resources/treegrid-image-1.png';
import image2 from '../../resources/treegrid-image-2.png';

class SplitterOverview extends Component {

    //
    // Initialization / Destruction --------------------------------------------------------------
    //

    constructor(props){
        super(props);

        this.state = {
            currentSplitterDistance: 390,
            currentTheme: IntegralUITheme.Office
        }
    }

    //
    // Methods -----------------------------------------------------------------------------------
    //

    // Update ------------------------------------------------------------------------------------

    render() {
        return (
            <div>
                <h2>Splitter / Overview</h2>
                <div className="sample-block-splitimage">
                    <IntegralUISplitImage splitterDistance={this.state.currentSplitterDistance} theme={this.state.currentTheme}>
                        <img slot="image1" src={image1} />
                        <img slot="image2" src={image2} />
                    </IntegralUISplitImage>
                </div>
                <div className="feature-help">
                    <p><span className="initial-space"></span><strong><span className="code-name">IntegralUI</span> SplitImage</strong> is a native Web Component that allows you to visually compare differences between two images or custom HTML elements.</p>
                    <p><span className="initial-space"></span>There are two slots where you can put custom HTML content for comparison and using a splitter you can slide too see the changes. In addition, horizontal and vertical orientation for the splitter is available. The splitter will appear whenever you move the mouse cursor over the SplitImage component.</p>
                    <p><span className="initial-space"></span>List of some properties and events available:</p>
                    <ul className="feature-points">
                        <li><span className="code-name">orientation</span> - Specifies the orientation of the splitter: Horizontal or Vertical</li>
                        <li><span className="code-name">splitterDistance</span> - Specifies the position of the splitter from top/left side of the component</li>
                        <li><span className="code-name">splitterSize</span> - Specifies the thickness of the splitter</li>
                        <br/>
                        <li><span className="code-name">splitterMoved</span> - Occurs after spliterDistance value changes</li>
                        <li><span className="code-name">splitterMoving</span> - Occurs before spliterDistance value changes</li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default SplitterOverview;
