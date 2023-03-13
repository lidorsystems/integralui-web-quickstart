import { css } from '../../../node_modules/integralui-web/external/lit-element.js';

export const iuiTreeViewItemsDropDownStyle = css`
    .trw-items-dd-item-label {
        display: inline-block;
        padding: 3px 0;
        vertical-align: top;
    }
    .trw-items-dd-item-value {
        text-decoration: underline;
    }
    .iui-select {
        display: inline-block;
        margin: 0;
        vertical-align: top;
    }
    .trw-items-dd-cmb-header, .trw-items-dd-cmb-header-hovered {
        border: thin solid #cecece;
        padding: 0;
    }
    .trw-items-dd-cmb-header .iui-header-expand-box-arrow {
        margin: 2px;
    }
    .trw-items-dd-icons-medium {
        background-image: url(../../../resources/icons-x24.png);
        background-position: 0 0;
        background-repeat: no-repeat;
        display: inline-block;
        overflow: hidden;
        padding: 0 !important;
        margin: 0 1px 0 0;
        width: 24px;
        height: 24px;
        vertical-align: middle;
    }
    .trw-items-dd-icon-empty {
        display: inline-block;
        padding: 0 !important;
        height: 24px;
        vertical-align: middle;
    }
    .trw-items-dd-icon-paper {
        background-position: -24px -48px;
    }
    .trw-items-dd-icon-graphics {
        background-position: -24px -72px;
    }
    .trw-items-dd-icon-tools {
        background-position: -96px -24px;
    }
    .trw-items-dd-icon-features {
        background-position: -96px -192px;
    }
    input {
        display: inline-block;
        padding: 0;
        vertical-align: top;
        width: 50px;
    }
`;