import { css } from '../../../node_modules/integralui-web/external/lit-element.js';

export const iuiGridAsListBoxStyle = css`
    .iui-editor-checkbox {
        margin-top: 24px;
    }
    .iui-editor-checkbox-checked {
        background-image: url(../../../resources/checkbox/checkbox-checked-4.png);
    }
    .iui-editor-checkbox-unchecked {
        background-image: url(../../../resources/checkbox/checkbox-unchecked-4.png);
    }
    .iui-editor-label {
        margin-top: 22px;
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
    .driver {
        margin-top: 12px;
    }
    .driver-category {
        display: inline-block;
        color: #2e74a6;
        font-weight: bold;
        margin-bottom: 5px;
        text-decoration: underline;
    }
    .driver-info {
        display: inline-block;
    }


    .iui-button {
        --button-background: white;
        --button-border-color: #c8c8c8;
        --button-color: #e05d20;
        --button-cursor: pointer;
        --button-margin: 16px 0;
        --button-padding: 5px;
        --button-width: 75px;
    }
    .iui-button-hovered {

        --button-hovered-background: #e05d20;
        --button-hovered-border-color: #c25421;
        color: white;
    }
`;