import { css } from 'integralui-web/external/lit-element.js';

export const iuiTreeGridCustomHeaderFooterStyle = css`
    .iui-editor-label {
        margin-top: 4px;
    }
    .iui-treegrid-expand-box {
        margin: 6px 3px 0 0;
    }

    /* Header with CheckBox */
    .iui-checkbox {
        --iui-checkbox-border: 0;
        --iui-checkbox-margin: 0;
        --iui-checkbox-padding: 0;

        --iui-checkbox-btn-margin: 0;
        --iui-checkbox-btn-checked-background-image: url(../../../integralui-web/icons/checkbox-checked.ico);
        --iui-checkbox-btn-indeterminate-background-image: url(../../../integralui-web/icons/checkbox-indeterminate.ico);
        --iui-checkbox-btn-unchecked-background-image: url(../../../integralui-web/icons/checkbox-unchecked.ico);

        --iui-checkbox-content-display: none;
    }

    .iui-editor-checkbox {
        margin-top: 6px;
    }

    /* Header in two lines */
    .two-lines {
        margin: 0;
        padding: 0;
        text-align: center;
    }
    .two-lines p {
        margin: 0;
        opacity: 0.75;
        padding: 0;
    }
    .two-lines p:hover {
        opacity: 1;
    }
    .two-lines p:first-child {
        font-size: 1.1rem;
        font-weight: bold;
    }
    .two-lines p:last-child {
        color: #008000;
    }

    /* Header with tooltip: More Info */
    .italic-content {
        font-style: italic;
        font-weight: normal !important;
        color: #800000 !important;
        text-align: center;
    }
    .more-info {
        background-image: url(../../../resources/icons.png);
        background-position: -16px -80px;
        background-repeat: no-repeat;
        display: inline-block;
        overflow: hidden;
        padding: 0 !important;
        margin: 0 1px 0 0;
        width: 16px;
        height: 16px;
        vertical-align: middle;
    }
    .more-info:hover {
        background-position: 0 -80px;
    }

    .iui-tooltip-block {
        display: inline-block;
    }

    /* Custom Footer with Button */
    .iui-treegrid-column-footer {
        padding: 0;
    }
    .custom-footer {
        margin: 0;
        padding: 0;
        white-space: nowrap;
    }
    .custom-footer span {
        display: inline-block;
        margin: 5px 0;
        padding: 0;
        vertical-align: top;
    }
    .iui-button {
        margin: 0 0 0 10px;
        padding: 5px 10px;
        vertical-align: top;
    }
`;
