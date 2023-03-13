import React, { Component } from 'react';

import IntegralUILabelComponent from 'integralui-web/wrappers/react.integralui.label.js';
import IntegralUISelectComponent from 'integralui-web/wrappers/react.integralui.select.js';
import { IntegralUILabelAlignment, IntegralUITheme } from 'integralui-web/components/integralui.enums.js';

import './label-overview.css';

class LabelOverview extends Component {

    //
    // Initialization / Destruction --------------------------------------------------------------
    //

    constructor(props){
        super(props);

        this.state = {
            alignmentOptions: [
                { text: 'BottomCenter' },
                { text: 'BottomLeft' },
                { text: 'BottomRight' },
                { text: 'Left' },
                { text: 'Right' },
                { text: 'TopCenter' },
                { text: 'TopLeft' },
                { text: 'TopRight' }
            ],
            isAnimationAllowed: true,
            labelAlignment: IntegralUILabelAlignment.Left,
            labelContentSize: { width: 200 },
            labelSize: { width: 350 },
            currentTheme: IntegralUITheme.Office
        }

        this.state.currentSelection = this.state.alignmentOptions[3];
    }

    componentDidMount(){
    }

    //
    // Methods -----------------------------------------------------------------------------------
    //

    onAlignmentChanged(e){
        if (e.detail.item)
            this.setState({ labelAlignment: e.detail.item.text });
    }

    // Update ------------------------------------------------------------------------------------

    render() {
        return (
            <div>
                <h2>Label / Overview</h2>
                <div className="sample-block">
                    <div className="animated-block">
                        <IntegralUILabelComponent allowAnimation={this.state.isAnimationAllowed} alignment={IntegralUILabelAlignment.Inline} value={'Label 1'} theme={this.state.currentTheme}><input defaultValue="Sample text" /></IntegralUILabelComponent>
                        <IntegralUILabelComponent allowAnimation={this.state.isAnimationAllowed} alignment={IntegralUILabelAlignment.Inline} value={'Label 2'} theme={this.state.currentTheme}><input /></IntegralUILabelComponent>
                        <IntegralUILabelComponent allowAnimation={this.state.isAnimationAllowed} alignment={IntegralUILabelAlignment.Inline} value={'Label 3'} theme={this.state.currentTheme}><input /></IntegralUILabelComponent>
                    </div>
                    <div className="alignment-block">
                        <label>Select Alignment: </label>
                        <IntegralUISelectComponent allowAnimation={this.state.isAnimationAllowed} items={this.state.alignmentOptions} maxDropDownItems={5} theme={this.state.currentTheme} selectedItem={this.state.currentSelection} afterSelect={(e) => this.onAlignmentChanged(e)}></IntegralUISelectComponent>
                        <IntegralUILabelComponent alignment={this.state.labelAlignment} contentSize={this.state.labelContentSize} size={this.state.labelSize} value={'Label 1'}  theme={this.state.currentTheme}><input defaultValue="Sample text" /></IntegralUILabelComponent>
                        <IntegralUILabelComponent alignment={this.state.labelAlignment} contentSize={this.state.labelContentSize} size={this.state.labelSize} value={'Longer Label 2'} theme={this.state.currentTheme}><input /></IntegralUILabelComponent>
                        <IntegralUILabelComponent alignment={this.state.labelAlignment} contentSize={this.state.labelContentSize} size={this.state.labelSize}  value={'Label 3'}theme={this.state.currentTheme}><input /></IntegralUILabelComponent>
                    </div>
                    <div className="feature-help">
                        <p><span className="initial-space"></span><strong><span className="code-name">IntegralUI</span> Label</strong> is a native Web Component that represents a label. It is fully customizable via CSS and custom properties.</p>
                        <p><span className="initial-space"></span>You can use this component to enclose any other HTML element. In addition, by specifying the label size and/or the size of enclosed element you can easily create properly aligned elements.</p>
                        <p><span className="initial-space"></span>The first group of labels have Inline alignment set which allows animations of label title in relation to its content. From the second group of labels, you can change the label alignment, Inline alignment is excluded from options available for this example.</p>
                        <br/>
                        <p><span className="initial-space"></span>The following properties and events are supported:</p>
                        <ul className="feature-points">
                            <li><span className="code-name">alignment</span> - Determines how label title is aligned in relation to enclosed element</li>
                            <li><span className="code-name">allowAnimation</span> - Determines whether component appearance is animated or not</li>
                            <li><span className="code-name">contentSize</span> - Specifies the width and height of the enclosed HTML element</li>
                            <li><span className="code-name">customStyle</span> - Specifies an object that contains all custom style settings for the component</li>
                            <li><span className="code-name">data</span> - Specifies an object that holds data related to the component</li>
                            <li><span className="code-name">enabled</span> - Determines whether the component is enabled or disabled</li>
                            <li><span className="code-name">name</span> - Uniquely identifies the component</li>
                            <li><span className="code-name">size</span> - Specifies the width and height of the component</li>
                            <li><span className="code-name">state</span> - Specifies the component state: disabled, hovered, etc.</li>
                            <br/>
                            <li><span className="code-name">sizeChanged</span> - Occurs when component size changes</li>
                            <li><span className="code-name">valueChanged</span> - Occurs when component value property changes</li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

export default LabelOverview;
