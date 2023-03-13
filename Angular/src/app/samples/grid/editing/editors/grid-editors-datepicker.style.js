import { css } from 'integralui-web/external/lit-element';

export const iuiGridEditorsDatePickerStyle = css`
    /* label Cell */
    .iui-editor-label {
        padding-top: 8px;
    }
    .iui-grid-lines-both {
        border-bottom: thin solid #efefef;
    }
    .iui-grid-row-cell:last-child {
        border-right: thin solid #efefef;
    }

    /* DatePicker */
    .iui-datepicker {
        --datepicker-margin: 8px 0 0 0;
        --header-expand-box-margin: 0;
    }
    
    /* Flags */
    .grid-celldt-country {
        display: inline-block;
        padding: 9px 0 0 0;
        vertical-align: top;
    }
    .grid-celldt-flags
    {
        background-repeat: no-repeat;
        display: inline-block;
        overflow: hidden;
        padding: 0 !important;
        margin: 5px 5px 0 3px;
        width: 32px;
        height: 22px;
        vertical-align: top;
    }

    /*
    .iui-calendar {
        --calendar-animation-cell-enter-background-100: #5fc965; 
        --calendar-animation-cell-enter-border-color-100: #51c458;
    }
    .iui-calendar-cell {
        border-color: #e5e5e5;
    }
    .iui-calendar-cell-hovered {
        background: #5fc965;
        border-color: #51c458;
    }
    .iui-calendar-cell-selected {
        background: #4d9451;
        border-color: #417844;
        color: white;
        font-weight: bold;
    }
    .iui-calendar-cell-grayed, .iui-calendar-cell-grayed:hover {
        background: #f5f5f5;
        border-color: #e5e5e5;
        color: red;
    }
    */
`;
