import { css } from '../../../../node_modules/integralui-web/external/lit-element.js';

export const iuiGridEditorsImageStyle = css`
    /* label Cell */
    .iui-editor-label {
        padding-top: 16px;
    }
    .iui-grid-lines-both {
        border-bottom: thin solid #efefef;
    }
    .iui-grid-row-cell:last-child {
        border-right: thin solid #efefef;
    }

    .lang-icons {
        display: block;
        font-size: 1.75rem;
        margin-top: 0;
        padding: 0 3px;
        text-align: left;
    }
    .lang-icons img {
        height: 32px;
        margin: 8px 3px;
        width: 32px;
    }
`;
