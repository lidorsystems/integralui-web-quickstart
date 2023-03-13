import { css } from '../../../node_modules/integralui-web/external/lit-element.js';

export const iuiTreeViewToolboxStyle = css`
    .iui-treeitem-expand-box {
        background: none;
        margin: 0;
        width: 24px;
        height: 24px;
    }
    .iui-treeitem-expand-box-open {
        background: url(../../../node_modules/integralui-web/icons/minus-24.png);
        background-position: 0 0;
    }
    .iui-treeitem-expand-box-close {
        background: url(../../../node_modules/integralui-web/icons/plus-24.png);
        background-position: 0 0;
    }
    .iui-treeitem-expand-box-open:hover, .iui-treeitem-expand-box-close:hover {
        background-position: 0 0;
    }

    .iui-item-label {
        display: inline-block;
        margin-top: 3px;
        vertical-align: top;
    }
`;