import { css } from '../../node_modules/integralui-web/external/lit-element.js';

export const iuiTreeGridCellTemplatesStyle = css`
    /* label Cell */
    .iui-editor-label {
        padding-top: 6px;
    }

    /* Price Cell */
    .price-cell
    {
        margin-top: 6px;
        padding-right: 2px;
    }
    .icons
    {
        background-image: url(../../resources/icons.png);
        background-repeat: no-repeat;
        display: inline-block;
        float: left;
        overflow: hidden;
        padding: 0 !important;
        margin: -1px 1px 0 0;
        width: 16px;
        height: 16px;
        vertical-align: middle;
    }
    .price-up
    {
        background-position: -64px -32px;
    }
    .price-down
    {
        background-position: -80px -32px;
    }

    /* Change Cell */
    .change-cell > span
    {
        display: inline-block;
        margin: 6px 2px 0 0;
        overflow: hidden;
        padding: 0;
        text-align: right;
        vertical-align: middle;
        width: 70px;
    }
    .change-cell > p
    {
        display: inline-block;
        margin: 4px 0 0 0;
        padding: 0;
        height: 16px;
        vertical-align: middle;
    }
    .progress-blue
    {
        background: #0080ef;
    }
    .progress-red
    {
        background: #ef8000;
    }

    /* Button Cell */
    .button-cell
    {
        text-align: center;
    }

    .iui-editor-checkbox, .iui-treegrid-expand-box {
        margin-top: 6px;
    }
`;
