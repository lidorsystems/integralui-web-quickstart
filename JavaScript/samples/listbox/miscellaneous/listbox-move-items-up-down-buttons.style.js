import { css } from '../../../node_modules/integralui-web/external/lit-element.js';

export const iuiListBoxUpDownButtonStyle = css`
    .driver {
        padding: 10px;
    }
    .driver-selection {
        display: inline-block;
        margin-top: 12px;
        vertical-align: top;
        width: 25px;
    }   
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

    .driver-info {
        display: inline-block;
        overflow: hidden;
        vertical-align: top;
        width: calc(100% - 60px);
    }
    .icons-medium {
        background-image: url(../../../resources/icons-x24.png);
        background-repeat: no-repeat;
        display: inline-block;
        overflow: hidden;
        padding: 0;
        margin: 10px 7px 0 0;
        width: 24px;
        height: 24px;
        vertical-align: top;
    }
    .disk {
        background-position: -120px -48px;
    }
    .network {
        background-position: -48px -48px;
    }
    .pc {
        background-position: -120px 0px;
    }
    .sound {
        background-position: 0 -168px;
    }
    .usb {
        background-position: -24px -168px;
    }
    .driver-name {
        display: inline-block;
        overflow: hidden;
        text-overflow: ellipsis;
        vertical-align: top;
        width: calc(100% - 31px);
    }
    .driver-category {
        display: inline-block;
        color: #2e74a6;
        font-weight: bold;
        margin-bottom: 5px;
        text-decoration: underline;
    }

    .driver-action {
        display: inline-block;
        vertical-align: top;
        width: 24px;

        --iui-button-display: block;
        --iui-button-margin: 2px 0;
        --iui-button-padding: 0;
    }
    .move-button {
        display: inline-block;
        height: 16px;
        margin: 3px 0 0 0;
        opacity: 0.5;
        transition: opacity 0.25s ease-in-out;
        width: 16px;
    }
    .move-up-button {
        background-image: url(../../../node_modules/integralui-web/icons/move-up.ico);
    }
    .move-down-button {
        background-image: url(../../../node_modules/integralui-web/icons/move-down.ico);
    }
    .move-up-button:hover, .move-down-button:hover {
        opacity: 1;
    }
`;