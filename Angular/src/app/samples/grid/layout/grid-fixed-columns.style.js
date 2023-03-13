import { css } from 'integralui-web/external/lit-element';

export const iuiGridFixedColumnsStyle = css`
    .header-label {
        display: inline-block;
        margin-top: 6px;
    }

    /* label Cell */
    .iui-editor-label {
        padding-top: 5px;
    }

    /* DropDownList */
    .iui-select {
        --select-margin: 4px 0 0 0;
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
`;