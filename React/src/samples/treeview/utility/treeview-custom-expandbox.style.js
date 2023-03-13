import { css } from 'integralui-web/external/lit-element.js';

export const iuiTreeViewCustomExpandBoxStyle = css`
    .iui-treeitem-expand-box {
        background: url(../../../resources/icons-x24.png) no-repeat 0 0;
        margin: 0;
        width: 24px;
        height: 24px;
    }
    .iui-treeitem-expand-box-open, .iui-treeitem-expand-box-open:hover {
        background-position: -144px -144px;
    }
    .iui-treeitem-expand-box-close, .iui-treeitem-expand-box-close:hover {
        background-position: -120px -144px;
    }

    .iui-item-label {
        display: inline-block;
        margin: 3px 0 0 3px;
        vertical-align: top;
    }
`;