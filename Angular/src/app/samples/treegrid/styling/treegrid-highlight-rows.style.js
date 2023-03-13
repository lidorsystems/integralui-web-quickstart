import { css } from 'integralui-web/external/lit-element';

export const iuiTreeGridHighlightRowsStyle = css`
    .iui-editor-checkbox {
        margin-top: 7px;
    }
    .iui-editor-checkbox-checked {
        background-image: url(assets/resources/checkbox/checkbox-checked-9.png);
    }
    .iui-editor-checkbox-unchecked {
        background-image: url(assets/resources/checkbox/checkbox-unchecked-9.png);
    }
    .iui-treegrid-expand-box {
        margin: 6px 4px 0 0;
    }
    .iui-editor-label {
        margin-top: 4px;
    }

    .iui-treegrid-row-cell:first-child {
        pointer-events: auto;
    }
`;
