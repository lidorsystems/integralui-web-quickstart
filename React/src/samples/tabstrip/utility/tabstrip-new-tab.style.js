import { css } from 'integralui-web/external/lit-element.js';

export const iuiTabStripNewTabStyle = css`
    .new-tab-block {
        background: #e5e5e5;
        border: thin solid #bcbcbc;
    }
    .new-tab-block:hover {
        background: #d9edfd;
        border: thin solid #8cb1d1;
    }
    .new-tab-button {
        margin: 0;
        opacity: 0.6;
        vertical-align: top;
        width: 24px;
    }
    .new-tab-button:hover {
        opacity: 1;
    }
    .new-tab-button-loading {
        margin: 4px;
        vertical-align: top;
        width: 16px;
    }

    .iui-tab-header:last-of-type {
        background: transparent;
        border: 0;
    }
`;