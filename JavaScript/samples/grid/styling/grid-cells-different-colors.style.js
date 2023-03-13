import { css } from '../../../node_modules/integralui-web/external/lit-element.js';

export const iuiGridCellDifferentColorsStyle = css`
    .animated-background {
        font-weight: bold;

        animation-name: cell-alert;
        animation-delay: 0s;
        animation-direction: normal;
        animation-duration: 1.5s;
        animation-fill-mode: forwards;
        animation-iteration-count: infinite;
        animation-play-state: running;
        animation-timing-function: linear; 
    }
    @keyframes cell-alert {
        0% { background: #ff6e6e; color: #ff6e6e; }
        50% { background: red; color: white; }
        100% { background: #ff6e6e; color: #ff6e6e; }
    }

`;