import React, { Component } from 'react';

import IntegralUIRadioButtonComponent from 'integralui-web/wrappers/react.integralui.radiobutton.js';
import IntegralUIRadioGroupComponent from 'integralui-web/wrappers/react.integralui.radiogroup.js';
import IntegralUISlideComponent from 'integralui-web/wrappers/react.integralui.slide.js';
import IntegralUISlideBarComponent from 'integralui-web/wrappers/react.integralui.slidebar.js';
import { IntegralUISlideDisplayMode, IntegralUITheme } from 'integralui-web/components/integralui.enums.js';

import './slidebar-overview.css';

class SlideBarOverview extends Component {

    //
    // Initialization / Destruction --------------------------------------------------------------
    //

    constructor(props){
        super(props);

        this.state = {
            currentDisplayMode: IntegralUISlideDisplayMode.Stream,
            currentResourcePath: 'integralui-web/icons',
            currentTheme: IntegralUITheme.Office,
            isAnimationAllowed: true,
            slides: [
                { text: "Slide 1" },
                { text: "Slide 2" },
                { text: "Slide 3" },
                { text: "Slide 4" },
                { text: "Slide 5" }
            ]
        }
    }

    //
    // Methods -----------------------------------------------------------------------------------
    //

    onButtonChecked(e){
        this.setState({ currentDisplayMode: e.detail.index === 1 ? IntegralUISlideDisplayMode.Carousel : IntegralUISlideDisplayMode.Stream });
    }

    // Update ------------------------------------------------------------------------------------

    render() {
        let slides = this.state.slides.map((slide, index) => {
            return (
                <IntegralUISlideComponent key={index} data={slide}>
                    <div className="slbar-ovw-slide-block">
                        <span>{slide.text}</span>
                    </div>
                </IntegralUISlideComponent>
            )
        });
        
        return (
            <div>
                <h2>SlideBar / Overview</h2>
                <div className="sample-block-slidebar-overview">
                    <div className="control-panel">
                        <IntegralUIRadioGroupComponent id="radiogroup-slidebar" theme={this.state.currentTheme} buttonChecked={(e) => this.onButtonChecked(e)}>
                            <IntegralUIRadioButtonComponent checked={true}>Stream</IntegralUIRadioButtonComponent>
                            <IntegralUIRadioButtonComponent>Carousel</IntegralUIRadioButtonComponent>
                        </IntegralUIRadioGroupComponent>
                    </div>
                    <IntegralUISlideBarComponent allowAnimation={this.state.isAnimationAllowed}  displayMode={this.state.currentDisplayMode} resourcePath={this.state.currentResourcePath} theme={this.state.currentTheme}>
                        {slides}
                    </IntegralUISlideBarComponent>
                    <div className="feature-help">
                        <p><span className="initial-space"></span><strong><span className="code-name">IntegralUI</span> SlideBar</strong> is a native Web Component that allows you to animate slides created using images or custom HTML elements.</p>
                        <p><span className="initial-space"></span>The demonstration above shows only the basic features available in SlideBar component. There are few slides each showing a title. Slide changes are automatic and animated from right to left. Whenever a slide is selected, an animation runs showing the slide content in current view of the SlideBar component. Using navigation buttons, you can quickly switch to specific slide.</p>
                        <p><span className="initial-space"></span>There are two different modes to display Slides: Stream and Carousel.</p>
                        <ul className="feature-points">
                            <li><span className="code-name">allowAnimation</span> - Determines whether animation is enabled or not</li>
                            <li><span className="code-name">animationPause</span> - Specifies a time delay in milliseconds between slide changes during animation</li>
                            <li><span className="code-name">animationSpeed</span> - Specifies the speed of animation</li>
                            <li><span className="code-name">displayMode</span> - Specifies how slides are displayed, using a Stream or Carousel</li>
                            <li><span className="code-name">navigationButtons</span> - Determines whether left/right navigation buttons are visible or not</li>
                            <li><span className="code-name">selectedIndex</span> - Specifies the index of currently selected slide</li>
                            <br/>
                            <li><span className="code-name">clear</span> - Occurs when all items are removed from the SlideBar</li>
                            <li><span className="code-name">slideAdded</span> - Occurs when new slide is added to the SlideBar</li>
                            <li><span className="code-name">slideAdding</span> - Occurs before slide is added</li>
                            <li><span className="code-name">slideRemoved</span> - Occurs when slide is removed from the SlideBar</li>
                            <li><span className="code-name">slideRemoving</span> - Occurs before slide is removed</li>
                            <li><span className="code-name">slideChanged</span> - Occurs when currently selected slide has changed</li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

export default SlideBarOverview;
