import { css } from 'integralui-web/external/lit-element.js';

export const iuiListViewLoadJSONStyle = css`
    /* List */
    .lview-dfjson-item-content {
        opacity: 0.7;
        padding: 10px;
        text-align: center;
        transition: all 0.4s ease-in-out;
        width: 144px;
    }
    .iui-listitem-hovered .lview-dfjson-item-content {
        opacity: 0.85;
    }
    .iui-listitem-selected  .lview-dfjson-item-content {
        opacity: 1;
    }

    .lview-dfjson-item-top-content {
        cursor: pointer;
    }
    .lview-dfjson-item-label {
        color: #484899;
        font-weight: bold;
    }
    .iui-listitem-hovered .lview-dfjson-item-label, .iui-listitem-selected  .lview-dfjson-item-label {
        color: #383878;
    }
    .lview-dfjson-item-icon {
        margin: 5px 5px 15px 5px;
    }
    .lview-dfjson-icons {
        background-image: url(../../../resources/icons-x24.png);
        background-repeat: no-repeat;
        display: inline-block;
        overflow: hidden;
        padding: 0;
        margin: 0;
        width: 24px;
        height: 24px;

    }
    .camera {
        background-position: -168px -48px;
    }
    .compress {
        background-position: -96px -216px;
    }
    .import-file {
        background-position: -48px -24px;
    }
    .film {
        background-position: -144px 0;
    }
    .measure {
        background-position: -216px -192px;
    }
    .notes {
        background-position: -72px -24px;
    }
    .print {
        background-position: -96px -96px;
    }
    .sign {
        background-position: -192px -72px;
    }
    .shield {
        background-position: -72px -216px;
    }
    .spreadsheet {
        background-position: -216px -216px;
    }
    .stats {
        background-position: -216px -168px;
    }
    .transfer {
        background-position: -192px -24px;
    }

    .lview-dfjson-item-dropdown {
        margin-top: 10px;
    }
`;