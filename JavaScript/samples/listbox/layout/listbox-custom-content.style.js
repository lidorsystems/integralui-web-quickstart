import { css } from '../../../node_modules/integralui-web/external/lit-element.js';

export const iuiListBoxCustomContentStyle = css`
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
        width: calc(100% - 125px);
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
        margin-top: 5px;
        text-align: center;
        vertical-align: top;
        width: 100px;
    }
    .iui-button {
        --button-background: white;
        --button-border-color: #c8c8c8;
        --button-color: #e05d20;
        --button-cursor: pointer;
        --button-padding: 5px;
        --button-width: 75px;
    }
    .iui-button-hovered {
        --button-hovered-background: #e05d20;
        --button-hovered-border-color: #c25421;
        color: white;
    }
`;