import { css } from 'integralui-web/external/lit-element';

export const iuiGridShowHideHeaderFooterStyle = css`
    .header-label-fixed {
        display: inline-block;
        margin-top: 6px;
    }
    .header-label {
        display: inline-block;
        margin-top: 6px;
        padding: 5px;
    }
    .iui-editor-label {
        padding: 12px 0 0 0;
    }
    .iui-grid-expand-box {
        margin: 12px 3px 0 0
    }

    iui-dropdownbutton {
        --iui-dropdownbutton-float: right;
        --iui-dropdownbutton-height: 16px;
        opacity: 0;
    }

    .iui-grid-column-header-hovered iui-dropdownbutton, 
    .iui-grid-column-header-selected iui-dropdownbutton {
        opacity: 1;
    }

    .iui-checkbox {
        margin: 0;
        padding: 0;
    }
    .iui-select {
        --iui-select-margin: 12px 0 0 0;
    }
`;