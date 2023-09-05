import { css } from '../../../node_modules/integralui-web/external/lit-element.js';

export const iuiGridSortingColumnMenuStyle = css`
    .header-label {
        display: inline-block;
        margin-top: 6px;
    }
    .iui-editor-label {
        padding: 8px 0 0 0;
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

    .icons {
        display: inline-block;
        overflow: hidden;
        padding: 0;
        width: 16px;
        height: 16px;
        vertical-align: top;
    }
    .checked-icon {
        background: url(../../../node_modules/integralui-web/icons/check-mark.ico);
    }
    .sort-ascending {
        background: url(../../../node_modules/integralui-web/icons/sort-ascending.ico);
    }
    .sort-descending {
        background: url(../../../node_modules/integralui-web/icons/sort-descending.ico);
    }

    .iui-sort-ascending, .iui-sort-descending {
        margin: 7px 36px 0 0;
    }

`;