import { css } from 'integralui-web/external/lit-element';

export const iuiTreeViewOverviewStyle = css`
    .computer-icons
    {
        background-image: url(assets/resources/computer.png);
        background-repeat: no-repeat;
        display: inline-block;
        overflow: hidden;
        padding: 0 !important;
        margin: 0 2px 0 0;
        width: 24px;
        height: 24px;
        vertical-align: middle;
    }
    .empty
    {
        background-position: 0px 0px;
    }
    .folder
    {
        background-position: -24px 0px;
    }
    .downloads
    {
        background-position: -48px 0px;
    }
    .favorites
    {
        background-position: -72px 0px;
    }
    .documents
    {
        background-position: -96px 0px;
    }
    .pc
    {
        background-position: -120px 0px;
    }
    .videos
    {
        background-position: -144px 0px;
    }
    .music
    {
        background-position: -168px 0px;
    }
    .network
    {
        background-position: -192px 0px !important;
    }
    .recycle
    {
        background-position: -216px 0px !important;
    }
    .pictures
    {
        background-position: -240px 0px;
    }
    .empty-doc
    {
        background-position: -264px 0px !important;
    }
    .disk
    {
        background-position: -288px 0px !important;
    }

    /* Item Hover Template */
    .trw-ovw-toolbar {
        display: inline-block;
        /*position: absolute; */
        right: 0;
        top: 7px;
        padding-left: 5px;
    }
    .trw-ovw-toolitem-button {
        background-image: url(assets/resources/icons.png);
        background-repeat: no-repeat;
        display: block;
        overflow: hidden;
        padding: 0;
        margin: 10px 4px 0 4px;
        width: 16px;
        height: 16px;
        float: right;
        opacity: 0.5;
    }
    .trw-ovw-toolitem-button:hover {
        opacity: 1;
    }
    .item-button-delete {
        background-position: -80px -96px;
    }
`;