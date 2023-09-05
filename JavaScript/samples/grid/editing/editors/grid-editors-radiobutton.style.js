import { css } from '../../../../node_modules/integralui-web/external/lit-element.js';

export const iuiGridEditorsRadioButtonStyle = css`
    /* Grid Columns */
    .iui-grid {
        border: 0;
    }
    .iui-grid-column-header {
        background: transparent;
    }
    .iui-grid-column-header-hovered, .iui-grid-column-header-selected {
        border-color: transparent;
    }

    .column-title {
        font-size: 1.2rem;
        font-weight: bold;
        padding: 3px 0 10px 0;
    }
    .column-group {
        background: #d9edfd;
        border: thin solid #d9edfd;
    }
    .group-first-cell {
        border-left-color: #d9edfd;
    }
    .group-last-cell {
        border-right-color: #d9edfd;
    }
    .iui-grid-row:last-child .group-last-cell, .iui-grid-row:last-child .group-last-bottom-cell {
        border-bottom-color: #d9edfd;
    }
    .iui-grid-row-hovered {
        background: transparent;
    }
    .iui-grid-row-cell:last-child {
        border-right-color: #d9edfd;
    }


    /* label Cell */
    .iui-editor-label {
        padding-top: 10px;
    }
    .iui-grid-lines-both {
        border-bottom-color: transparent;
    }

    /* RadioButton */
    iui-radiobutton {
        --iui-radio-button-btn-margin: 0;
    }
`;
