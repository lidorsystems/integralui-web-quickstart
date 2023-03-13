import { css } from 'integralui-web/external/lit-element';

export const iuiListBoxLoadJSONStyle = css`
    /* List */
    .lbox-dfjson-item-content td {
        vertical-align: top;
    }
    .lbox-dfjson-item-content hr {
        background: #ffffff;
        border: 0;
        height: 1px;
    }
    .lbox-dfjson-label {
        color: #484899;
        font-weight: bold;
    }
    .lbox-dfjson-date {
        text-align: right;
    }
    .lbox-dfjson-subtext {
        display: block;
    }
    .lbox-dfjson-icons
    {
        background-image: url(assets/resources/icons-x24.png);
        background-repeat: no-repeat;
        display: inline-block;
        overflow: hidden;
        padding: 0 !important;
        margin: 0 5px 0 0;
        width: 24px;
        height: 24px;

    }
    .envelope
    {
        background-position: 0 -216px;
    }
    .envelope-open
    {
        background-position: -24px -216px;
    }
    .notes
    {
        background-position: -72px -24px;
    }
    .phone
    {
        background-position: -48px -216px;
    }
`;