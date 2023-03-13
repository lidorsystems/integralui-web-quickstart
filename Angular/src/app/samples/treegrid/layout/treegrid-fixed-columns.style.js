import { css } from 'integralui-web/external/lit-element';

export const iuiTreeGridFixedColumnsStyle = css`
    .header-label {
        display: inline-block;
        margin-top: 6px;
    }

    iui-dropdownbutton {
        --dropdownbutton-float: right;
        --dropdownbutton-height: 16px;
        opacity: 0;
    }

    .iui-treegrid-column-header-hovered iui-dropdownbutton, 
    .iui-treegrid-column-header-selected iui-dropdownbutton {
        opacity: 1;
    }
`;