import { css } from '../../node_modules/integralui-web/external/lit-element.js';

export const iuiGridAddRowDynamicallyStyle = css`
    .iui-grid {
        margin-top: 5px;
    }
    .iui-grid-expand-box {
        margin-top: 7px;
    }
    .iui-editor-label {
        margin: 5px 0;
    }
    .iui-rating {
        margin-top: 5px;
    }

    .test-cell { 
        background: transparent;
        /*transition: background 5s ease-in-out;*/
        
        animation-name: test-anim;
        animation-delay: 0s;
        animation-direction: normal;
        animation-duration: 3s;
        animation-fill-mode: forwards;
        animation-iteration-count: infinite;
        animation-play-state: running;
        animation-timing-function: linear; 
    }

    @keyframes test-anim {
        0% { background: transparent); }
        50% { background: red; }
    }
`;