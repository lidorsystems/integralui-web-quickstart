import { css } from '../../../node_modules/integralui-web/external/lit-element.js';

export const iuiGridFixedColumnsStyle = css`
    .header-label {
        display: inline-block;
        margin-top: 6px;
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