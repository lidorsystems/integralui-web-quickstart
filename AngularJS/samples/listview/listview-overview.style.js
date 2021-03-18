import { css } from '../../node_modules/integralui-web/external/lit-element.js';

export const iuiListViewOverviewStyle = css`
    .lview-ovw-custom-item-large {
        display: inline-block;
        margin: 0;
        overflow: hidden;
        padding: 5px;
        position: relative;
        text-align: center;
        white-space: nowrap;
        width: 125px;
        z-index: 0;
    }
    .lview-ovw-title-large {
        color: black;
        display: inline-block;
        overflow: hidden;
        padding: 3px 0;
        text-overflow: ellipsis;
        vertical-align: middle;
        width: 100%;
    }
    .lview-ovw-icon-large {
        padding: 10px;
        margin: 0 auto;
        width: 24px;
    }
    .lview-ovw-num-corner {
        display: inline-block;
        font-size: 0.875em;
        font-weight: bold;
        margin: -3px 0 0 -3px;
        position: relative;
        text-align: left;
        vertical-align: middle;
        z-index: 1;
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

    /* Changes to the Rating component inside the ListBox Item */
    .lview-ovw-custom-item-large iui-rating {
        --rating-background: transparent;
        --rating-border: 0;
        --rating-cursor: pointer;
        --rating-display: inline-block;
        --rating-margin: auto;
        vertical-align: middle;

        --rating-content-image: url(../../resources/rating/star-empty-white.png);
    }
`;