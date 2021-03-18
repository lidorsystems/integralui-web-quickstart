import React, { Component } from 'react';

import IntegralUIDialogComponent from 'integralui-web/wrappers/react.integralui.dialog.js';
import { IntegralUITheme } from 'integralui-web/components/integralui.enums.js';

import './dialog-overview.css';

class DialogOverview extends Component {

    //
    // Initialization / Destruction --------------------------------------------------------------
    //

    constructor(props){
        super(props);

        this.state = {
            currentResourcePath: 'integralui-web/icons',
            currentTheme: IntegralUITheme.Office,
            isDialogVisible: false,
            showCloseButton: true
        }
    }

    componentDidMount(){
    }

    //
    // Methods -----------------------------------------------------------------------------------
  
    showDialog(){
        this.setState({ isDialogVisible: true });
    }

    onDialogClosed(){
        this.setState({ isDialogVisible: false });
    }

    // Update ------------------------------------------------------------------------------------

    render() {
        return (
            <div>
                <h2>Dialog / Overview</h2>
                <div className="sample-block">
                    <div className="dlg-ovw-container">
                        <button onClick={() => this.showDialog()}>Show Dialog</button>
                        <IntegralUIDialogComponent id="dialog-overview"
                            closeButton={this.state.showCloseButton}
                            resourcePath={this.state.currentResourcePath}
                            theme={this.state.currentTheme} 
                            visible={this.state.isDialogVisible}
                            closed={(e) => this.onDialogClosed(e)}
                        > 
                            <div className="dlg-ovw-content">Add your content here</div>
                        </IntegralUIDialogComponent>
                    </div>
                    <br/>
                    <div className="feature-help">
                        <p><span className="initial-space"></span><strong><span className="code-name">IntegralUI</span> Dialog</strong> is a native Web Component that displays a modal window. When dialog is visible, user interaction with all other elements on the page is suspended, except for the dialog content.</p>
                        <p><span className="initial-space"></span>You can add custom content to the dialog consisting of HTML elements or other web components. If you click on the gray area outside of the dialog, the dialog will close firing events.</p>
                        <p><span className="initial-space"></span>The following properties and events are supported:</p>
                        <ul className="feature-points">
                            <li><span className="code-name">closeButton</span> - Determines whether the close button inside the dialog is visible or not</li>
                            <li><span className="code-name">controlStyle</span> - Specifies an object that contains all style settings for the component</li>
                            <li><span className="code-name">data</span> - Specifies an object that holds data related to the component</li>
                            <li><span className="code-name">enabled</span> - Determines whether the component is enabled or disabled</li>
                            <li><span className="code-name">name</span> - Uniquely identifies the component</li>
                            <li><span className="code-name">state</span> - Specifies the component state: disabled, hovered, etc.</li>
                            <li><span className="code-name">visible</span> - Determines whether dialog is visible or hidden</li>
                            <br/>
                            <li><span className="code-name">closed</span> - Occurs after dialog is closed</li>
                            <li><span className="code-name">closing</span> - Occurs when dialog starts to close</li>
                            <li><span className="code-name">opened</span> - Occurs after dialog is opened</li>
                            <li><span className="code-name">opening</span> - Occurs when dialog starts to open</li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

export default DialogOverview;
