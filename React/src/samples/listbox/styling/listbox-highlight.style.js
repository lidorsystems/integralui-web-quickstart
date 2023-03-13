import { css } from 'integralui-web/external/lit-element.js';

export const iuiListBoxHighlightStyle = css`
    .lbox-item-cbox {
        background-image: url(../../../resources/checkbox/checkbox-unchecked.png);
        background-repeat: no-repeat;
        display: inline-block;
        overflow: hidden;
        padding: 0 !important;
        margin: 0 2px;
        width: 16px;
        height: 16px;
        vertical-align: middle;
    }
    .lbox-item-cbox-checked {
        background-image: url(../../../resources/checkbox/checkbox-checked.png);
    }
    .lbox-cbox-item-label {
        display: inline-block;
        padding: 3px 0;
        vertical-align: middle;
    }
`;