import { css } from '../../../node_modules/integralui-web/external/lit-element.js';

export const iuiTreeViewCustomContentStyle = css`
    .item-progress {
        display: inline-block;
        overflow: hidden;
        vertical-align: middle;
        width: 250px
    }
    .item-progress-text {
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }
    .iui-editor-progress-block {
        width: calc(100% - 20px);
    }
    .item-status {
        display: inline-block;
        font-weight: bold;
        margin: 0 0 0 25px;
        vertical-align: middle;
    }
`;