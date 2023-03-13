import { css } from 'integralui-web/external/lit-element';

export const iuiTreeGridDisabledRowsStyle = css`
    .iui-editor-checkbox {
        margin-top: 7px;
        height: 14px;
        width: 38px;
    }
    .iui-editor-checkbox-checked {
        background-image: url(assets/resources/checkbox/checkbox-checked-5.png);
    }
    .iui-editor-checkbox-unchecked {
        background-image: url(assets/resources/checkbox/checkbox-unchecked-5.png);
    }
    .iui-treegrid-expand-box {
        margin: 6px 2px 0 0;
    }
    .iui-editor-label {
        margin-top: 4px;
    }

    .iui-treegrid-row-cell:first-child {
        pointer-events: auto;
    }
`;
