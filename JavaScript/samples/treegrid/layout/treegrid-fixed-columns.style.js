import { css } from '../../../node_modules/integralui-web/external/lit-element.js';

export const iuiTreeGridFixedColumnsStyle = css`
    .header-label {
        display: inline-block;
        margin-top: 6px;
    }

    iui-dropdownbutton {
        --iui-dropdownbutton-float: right;
        --iui-dropdownbutton-height: 16px;
        opacity: 0;
    }

    .iui-treegrid-column-header-hovered iui-dropdownbutton, 
    .iui-treegrid-column-header-selected iui-dropdownbutton {
        opacity: 1;
    }
`;