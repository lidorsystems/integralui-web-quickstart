import { css } from 'integralui-web/external/lit-element';

export const iuiTreeGridFilteringStyle = css`
    .header-label {
        display: inline-block;
        margin-top: 6px;
    }

    iui-dropdownbutton {
        --iui-dropdownbutton-float: right;
        --iui-dropdownbutton-height: 16px;
        --iui-dropdownbutton-background: transparent;
        --iui-dropdownbutton-border-color: transparent;
    }
    .iui-treegrid-column-header-selected iui-dropdownbutton {
        --iui-dropdownbutton-background: #e5e5e5;
        --iui-dropdownbutton-border-color: #cecece;
    }

    .filter-button
    {
        background-image: url(assets/icons/filter-white.ico);
        display: inline-block;
        margin: 0;
        padding: 0;
        width: 16px;
        height: 16px;
    }

    iui-button {
        --iui-button-margin: 0 5px;
        --iui-button-padding: 5px 10px;
    }
    iui-numeric {
        display: inline-block;
    }

    iui-select {
        --iui-select-header-padding: 5px;
        --iui-select-header-hovered-padding: 5px;
        --iui-select-header-selected-padding: 5px;
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