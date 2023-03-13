import { css } from '../../../../node_modules/integralui-web/external/lit-element.js';

export const iuiGridEditorsDropDownListStyle = css`
    /* label Cell */
    .iui-editor-label {
        padding-top: 8px;
    }
    .iui-grid-lines-both {
        border-bottom: thin solid #efefef;
    }
    .iui-grid-row-cell:last-child {
        border-right: thin solid #efefef;
    }

    /* DropDownList */
    .iui-select {
        --select-margin: 7px 0 0 0;
    }
    .iui-list li {
        background: #fcfcfc;
        border-color: #fcfcfc;
    }
    .iui-list li:nth-of-type(2n){
        background: #f5f5f5;
        border-color: #f5f5f5;
    }
`;
