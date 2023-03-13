import { css } from 'integralui-web/external/lit-element.js';

export const iuiTreeViewCustomLabelEditStyle = css`
    /* Item Hover Template */
    .trw-cle-toolbar {
        display: inline-block;
        right: 0;
        top: 7px;
        padding-left: 5px;
    }
    .trw-cle-toolitem-button {
        background-image: url(../../../resources/icons.png);
        background-repeat: no-repeat;
        display: block;
        overflow: hidden;
        padding: 0;
        margin: 10px 4px 0 4px;
        width: 16px;
        height: 16px;
        float: right;
        opacity: 0.5;
    }
    .trw-cle-toolitem-button:hover {
        opacity: 1;
    }
    .item-button-edit {
        background-position: -128px -81px;
    }
`;