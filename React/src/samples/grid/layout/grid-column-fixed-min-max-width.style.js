import { css } from 'integralui-web/external/lit-element.js';

export const iuiGridColumnsFixedMinMaxWidthStyle = css`
    .header-label {
        display: inline-block;
        margin-top: 6px;
    }
    .iui-editor-label {
        padding: 8px 0 0 0;
    }

    iui-dropdownbutton {
        --dropdownbutton-float: right;
        --dropdownbutton-height: 16px;
        opacity: 0;
    }

    .iui-grid-column-header-hovered iui-dropdownbutton, 
    .iui-grid-column-header-selected iui-dropdownbutton {
        opacity: 1;
    }

    .iui-listbox {
        background: #f9f9f9;
    }
    .iui-checkbox {
        margin: 4px 0;
        padding: 0;
    }

    .item-block {
        height: 28px;
    }
    .item-block input {
        border: thin solid #d2d2d2;
        height: 20px;
        margin-right: -4px;
        vertical-align: top;
        width: calc(100% - 140px);
    }
    .item-block input:focus {
        outline: none !important;
    }
    .item-block span {
        display: inline-block;
        margin-top: 4px;
        vertical-align: top;
        width: 80px;
    }

    /* Separator */
    .iui-listitem-disabled {
        border: 0;
    }
    .iui-listitem-content-disabled {
        border: 0;
        padding: 0 5px;
    }
    .item-separator {
        background: #e5e5e5;
        border: 0;
        height: 1px;
    }

    /* Command Buttons */
    .iui-button {
        width: 50px;
    }
`;

export const iuiGridColumnsFixedMinMaxWidthButtonStyle = css`
    .iui-button {
        border-radius: 1px;
        font-size: 1.2rem;
        padding: 0 7px;
        vertical-align: top;
        margin-right: -4px;
    }
`;


