import { css } from 'integralui-web/external/lit-element.js';

export const iuiListBoxDragDropOverviewStyle = css`
    .lbox-ddovw-item-content {
        padding: 3px;
    }
    .lbox-ddovw-item-content-group {
    }

    .iui-listgroup-expand-box {
        margin: 3px 3px 0 0;
    }
    .lbox-ddovw-name {
        display: inline-block;
        margin-left: 5px;
        overflow: hidden;
        text-overflow: ellipsis;
        vertical-align: middle;
        white-space: nowrap;
    }
    .lbox-ddovw-title {
        display: inline-block;
        margin-left: 5px;
        overflow: hidden;
        text-overflow: ellipsis;
        vertical-align: middle;
        white-space: nowrap;
        width: calc(100% - 100px);
    }
    .lbox-ddovw-year {
        display: inline-block;
        text-align: center;
        width: 100px;
    }
    .lbox-ddovw-icons {
        background: url(../../../resources/movie-genres.png) no-repeat 0 0;
        display: inline-block;
        padding: 0;
        margin: 0 3px 0 0;
        width: 24px;
        height: 24px;
        vertical-align: middle;
    }
    .adventure {
        background-position: -24px 0;
    }
    .comedy {
        background-position: -48px 0;
    }
    .action {
        background-position: -72px 0;
    }
    .sci-fi {
        background-position: -120px 0;
    }
    .biography {
        background-position: 0 -24px;
    }
    .horror {
        background-position: -24px -24px;
    }
    .drama {
        background-position: -48px -24px;
    }
    .music {
        background-position: -72px -24px;
    }
    .romance {
        background-position: -96px -24px;
    }
    .western {
        background-position: -120px -24px;
    }
`;