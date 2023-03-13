import { css } from '../../node_modules/integralui-web/external/lit-element.js';

export const iuiListViewOverviewStyle = css`
    .lview-ovw-title-large {
        display: inline-block;
        overflow: hidden;
        padding: 3px 0;
        text-align: center;
        text-overflow: ellipsis;
        vertical-align: middle;
        width: 100%;
    }
    .lview-ovw-icon-large {
        padding: 10px;
        margin: 30px auto;
        width: 24px;
    }
    .lview-ovw-icons {
        background: url(../../resources/movie-genres.png) no-repeat 0 0;
        display: inline-block;
        padding: 0;
        margin: 3px;
        width: 24px;
        height: 24px;
        vertical-align: middle;
    }
    .action {
        background-position: 0 0;
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

    /* Changes to the Rating component */
    .iui-listview iui-rating {
        --rating-border-color: transparent;
        --rating-cursor: pointer;
        --rating-margin: auto;
    }
`;