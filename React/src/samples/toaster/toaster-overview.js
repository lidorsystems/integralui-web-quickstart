import React, { Component } from 'react';
import { html } from 'integralui-web/external/lit-element.js';
import { styleMap } from 'integralui-web/external/style-map';

import IntegralUIToasterComponent from 'integralui-web/wrappers/react.integralui.toaster.js';
import { IntegralUITheme, IntegralUIToastAlignment, IntegralUIToastType } from 'integralui-web/components/integralui.enums.js';

// Other components uised in this example
import IntegralUIButtonComponent from 'integralui-web/wrappers/react.integralui.button.js';
import IntegralUICheckBoxComponent from 'integralui-web/wrappers/react.integralui.checkbox.js';
import IntegralUILabelComponent from 'integralui-web/wrappers/react.integralui.label.js';
import IntegralUISelectComponent from 'integralui-web/wrappers/react.integralui.select.js';

import './toaster-overview.css';

class ToasterOverview extends Component {

    //
    // Initialization / Destruction --------------------------------------------------------------
    //

    constructor(props){
        super(props);

        this.state = {
            alignmentOptions: [
                { text: 'BottomCenter' },
                { text: 'BottomFull' },
                { text: 'BottomLeft' },
                { text: 'BottomRight' },
                { text: 'TopCenter' },
                { text: 'TopFull' },
                { text: 'TopLeft' },
                { text: 'TopRight' }
            ],
            isAnimationAllowed: true,
            isTemplateActive: false,
            labelContentSize: { width: 300 },
            currentResourcePath: 'integralui-web/icons',
            currentTheme: IntegralUITheme.Office,
            toastDuration: 5000,
            toastMessage: 'Sample message',
            toastTitle: 'Info',
            typeOptions: [
                { text: 'Error' },
                { text: 'Info' },
                { text: 'Success' },
                { text: 'Warning' }
            ]
        }

        this.state.currentToastAlignment = this.state.alignmentOptions[7];
        this.state.currentToastType = this.state.typeOptions[1];
        
        this.toasterRef = React.createRef();
    }

    componentDidMount(){
    }

    //
    // Methods -----------------------------------------------------------------------------------
    //

    // Events ------------------------------------------------------------------------------------

    durationChanged(e){
        this.setState({ toastDuration: e.target.value });
    }

    messageChanged(e){
        this.setState({ toastMessage: e.target.value });
    }

    titleChanged(e){
        this.setState({ toastTitle: e.target.value });
    }

    onToastAlignmentChanged(e){
        this.setState({ currentToastAlignment: e.detail.item });
    }

    onToastTemplateChanged(e){
        this.setState({ isTemplateActive: e.detail.checked });
    }

    onToastTypeChanged(e){
        this.setState({ currentToastType: e.detail.item });
    }

    onShowClicked(){
        this.toasterRef.current.show({ title: this.state.toastTitle, text: this.state.toastMessage, type: this.state.currentToastType ? this.state.currentToastType.text : IntegralUIToastType.Info });
    }

    // Templates ---------------------------------------------------------------------------------
    
    currentContentTemplate = (toast) => {
        if (this.state.isTemplateActive)
            return html`<div>
                    <div style=${styleMap({ fontWeight: 'bold', marginBottom: '10px', position: 'relative' })}>
                        <span>${this.state.toastTitle}</span>
                        <span style=${styleMap({ position: 'absolute', fontSize: '1.5rem', right: 0, top: '-4px' })} @click="${() => this.hideToast(toast)}">&times;</span>
                    </div>
                    <hr style=${styleMap({ background: '#d9d9d9', border: 0, height: '1px' })} />
                    <span>${toast.text}</span>
                </div>`;

        return null;
    }

    hideToast(toast){
        this.toasterRef.current.hide(toast);
    }

    // Update ------------------------------------------------------------------------------------

    render() {
        return (
            <div id="toaster-overview" style={{ overflow: 'hidden', position: 'relative' }}>
                <h2>Toaster / Overview</h2>
                <div className="sample-block">
                    <div className="toaster-block">
                        <IntegralUILabelComponent contentSize={this.state.labelContentSize} value={'Title'} theme={this.state.currentTheme}><input value={this.state.toastTitle} onChange={(e) => this.titleChanged(e)} /></IntegralUILabelComponent>
                        <IntegralUILabelComponent contentSize={this.state.labelContentSize} value={'Message'} theme={this.state.currentTheme}><input value={this.state.toastMessage} onChange={(e) => this.messageChanged(e)} /></IntegralUILabelComponent>
                        <IntegralUILabelComponent contentSize={this.state.labelContentSize} value={'Duration'} theme={this.state.currentTheme}><input type="number" value={this.state.toastDuration} onChange={(e) => this.durationChanged(e)} /></IntegralUILabelComponent>
                        <IntegralUILabelComponent contentSize={this.state.labelContentSize} value={'Alignment'} theme={this.state.currentTheme}>
                            <IntegralUISelectComponent allowAnimation={this.state.isAnimationAllowed} items={this.state.alignmentOptions} maxDropDownItems={5} theme={this.state.currentTheme} selectedItem={this.state.currentToastAlignment} afterSelect={(e) => this.onToastAlignmentChanged(e)}></IntegralUISelectComponent>
                        </IntegralUILabelComponent>
                        <IntegralUILabelComponent contentSize={this.state.labelContentSize} value={'Type'} theme={this.state.currentTheme}>
                            <IntegralUISelectComponent allowAnimation={this.state.isAnimationAllowed} items={this.state.typeOptions} maxDropDownItems={5} theme={this.state.currentTheme} selectedItem={this.state.currentToastType} afterSelect={(e) => this.onToastTypeChanged(e)}></IntegralUISelectComponent>
                        </IntegralUILabelComponent>
                        <IntegralUICheckBoxComponent resourcePath={this.state.currentResourcePath} checkedChanged={(e) => this.onToastTemplateChanged(e)}>Use Template</IntegralUICheckBoxComponent>
                        <div style={{ marginTop: '20px', textAlign: 'center' }}>
                            <IntegralUIButtonComponent theme={this.state.currentTheme} onClick={() => this.onShowClicked()}>Show Message</IntegralUIButtonComponent>
                        </div>
                        <IntegralUIToasterComponent ref={this.toasterRef}
                            alignment={this.state.currentToastAlignment ? this.state.currentToastAlignment.text : IntegralUIToastAlignment.TopRight }
                            allowAnimation={this.state.isAnimationAllowed}
                            contentTemplate={this.currentContentTemplate}
                            duration={this.state.toastDuration}
                            parentId={'toaster-overview'}
                            theme={this.state.currentTheme}
                        ></IntegralUIToasterComponent>
                    </div>
                    <div className="feature-help">
                        <p><span className="initial-space"></span><strong><span className="code-name">IntegralUI</span> Toaster</strong> is a native Web Component that allows you to display notification messages (Toasts) with different alert levels. Each Toast can have a different title, message and alert level: Error, Info, Success or Warning.</p>
                        <p><span className="initial-space"></span>Depending on chosen alignment and parent container, Toasts can appear accordingly. In additon, if a template is specified, the message can be constucted using custom HTML content.</p>
                        <p><span className="initial-space"></span>A partial list of supported properties:</p>
                        <ul className="feature-points">
                            <li><span className="code-name">alignment</span> - Determines the side at which Toasts will appear</li>
                            <li><span className="code-name">contentTemplate</span> - Specifies a template that you can use to add custom HTML content for Toasts</li>
                            <li><span className="code-name">duration</span> - Specifies how long Toasts will remain visible, in miliseconds</li>
                            <li><span className="code-name">customStyle</span> - Specifies an object that contains custom style settings for the component</li>
                            <li><span className="code-name">parentId</span> - Specifies the id value of parent element that will contain Toasts</li>
                            <li><span className="code-name">positionAdjustment</span> - An object with values for position adjustment of Toasts</li>
                            <li><span className="code-name">size</span> - Specifies the component width and height, in pixels</li>
                            <br/>
                            <li><span className="code-name">text</span> - Specifies the Toast message</li>
                            <li><span className="code-name">title</span> - Specifies the Toast title</li>
                            <li><span className="code-name">type</span> - Specifies the Toast type: Error, Info, Success or Warning</li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

export default ToasterOverview;
