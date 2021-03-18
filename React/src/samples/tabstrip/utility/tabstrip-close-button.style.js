import { css } from 'integralui-web/external/lit-element.js';

export const iuiTabStripCloseButtonStyle = css`
    .tbs-cbtn-icons {
        background: url(../../../resources/icons-x24.png) no-repeat 0 0;
        display: inline-block;
        padding: 0 !important;
        margin: 0 1px 0 5px;
        width: 24px;
        height: 24px;
        vertical-align: middle;
    }
    .library {
        background-position: 0 -72px;
    }
    .album {
        background-position: -144px -48px;
    }
    .star-empty {
        background-position: -216px -72px;
    }

    .tab-close-button {
        margin: 3px 0 0 5px;
        opacity: 0.6;
        vertical-align: top;
        width: 16px;
    }
    .tab-close-button:hover {
        opacity: 1;
    }
`;