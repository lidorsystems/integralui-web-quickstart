import { css } from '../../node_modules/integralui-web/external/lit-element.js';

export const iuiSideBarNewTabStyle = css`
    .tab-icon {
        background: url(../../resources/icons-x24.png) no-repeat 0 0;
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
    .notes {
        background-position: -192px -72px;
    }
    .sports {
        background-position: -96px -72px;
    }

    .new-tab-button {
        margin: 0 0 0 4px;
        opacity: 0.6;
        vertical-align: top;
        width: 24px;
    }
    .new-tab-button:hover {
        opacity: 1;
    }
    .new-tab-button-loading {
        margin: 4px 4px 4px 8px;
        vertical-align: top;
        width: 16px;
    }
`;