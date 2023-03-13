import { css } from '../../../node_modules/integralui-web/external/lit-element.js';

export const iuiListViewDragDropOverviewStyle = css`
    .lvw-ddovw-item-content {
    }
    .lvw-ddovw-title {
        display: inline-block;
        overflow: hidden;
        text-overflow: ellipsis;
        vertical-align: middle;
        white-space: nowrap;
        width: calc(100% - 55px);
    }
    .lvw-ddovw-year {
        display: inline-block;
        text-align: right;
        width: 50px;
    }
    .lvw-ddovw-icons {
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