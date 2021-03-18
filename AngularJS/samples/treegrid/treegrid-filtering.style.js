import { css } from '../../node_modules/integralui-web/external/lit-element.js';

export const iuiTreeGridFilteringStyle = css`
    .header-label {
        display: inline-block;
        margin-top: 6px;
    }

    iui-dropdownbutton {
        --dropdownbutton-float: right;
        --dropdownbutton-height: 16px;
        --dropdownbutton-background: transparent;
        --dropdownbutton-border-color: transparent;
    }
    .iui-treegrid-column-header-selected iui-dropdownbutton {
        --dropdownbutton-background: #e5e5e5;
        --dropdownbutton-border-color: #cecece;
    }

    .filter-button
    {
        background-image: url(../../node_modules/integralui-web/icons/filter-white.ico);
        display: inline-block;
        margin: 0;
        padding: 0;
        width: 16px;
        height: 16px;
    }

    iui-button {
        --button-margin: 0 5px;
        --button-padding: 5px 10px;
    }
    iui-numeric {
        display: inline-block;
    }

    iui-select {
        --select-header-padding: 5px;
        --select-header-hovered-padding: 5px;
        --select-header-selected-padding: 5px;
        display: inline-block;
        margin-right: 5px;
    }


    /* Filter Panel */
    .treegrid-ftr-panel
    {
        background: #f9f9f9;
        border: thin solid #cecece;
        box-shadow: 2px 3px 3px #e5e5e5;
        cursor: default;
        padding: 10px;
        width: 316px;
    }
    .treegrid-ftr-inline-block
    {
        display: inline-block;
        white-space: nowrap;
    }
    .treegrid-ftr-inline-block input
    {
        display: inline-block;
        vertical-align: top;
    }
`;