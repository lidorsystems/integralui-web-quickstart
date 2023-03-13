import { css } from '../../node_modules/integralui-web/external/lit-element.js';

export const iuiListBoxOverviewStyle = css`
    .lbox-ovw-item-content
    {
        border2: thin solid #f5f5f5;
        padding: 3px;
        margin: 1px 0;
    }
    .lbox-ovw-name
    {
        display: inline-block;
        margin-left: 5px;
        overflow: hidden;
        text-overflow: ellipsis;
        vertical-align: middle;
        white-space: nowrap;
    }
    .lbox-ovw-title
    {
        display: inline-block;
        margin-left: 5px;
        overflow: hidden;
        text-overflow: ellipsis;
        vertical-align: middle;
        white-space: nowrap;
        width: calc(100% - 200px);
    }
    .lbox-ovw-year
    {
        display: inline-block;
        text-align: center;
        width: 100px;
    }
    .lbox-ovw-icons
    {
        background: url(../../resources/movie-genres.png) no-repeat 0 0;
        display: inline-block;
        padding: 0;
        margin: 3px;
        width: 24px;
        height: 24px;
        vertical-align: middle;
    }
    .adventure
    {
        background-position: -24px 0;
    }
    .comedy
    {
        background-position: -48px 0;
    }
    .action
    {
        background-position: -72px 0;
    }
    .sci-fi
    {
        background-position: -120px 0;
    }
    .biography
    {
        background-position: 0 -24px;
    }
    .horror
    {
        background-position: -24px -24px;
    }
    .drama
    {
        background-position: -48px -24px;
    }
    .music
    {
        background-position: -72px -24px;
    }
    .romance
    {
        background-position: -96px -24px;
    }
    .western
    {
        background-position: -120px -24px;
    }

    .iui-listgroup-expand-box {
        margin: 10px 3px 0 0;
    }

    /* Changes to the Rating component inside the ListBox Item */
    .lbox-ovw-item-content iui-rating {
        --rating-background: transparent;
        --rating-border: 0;
        --rating-cursor: pointer;
        --rating-display: inline-block;
        --rating-margin: auto;
        vertical-align: middle;

        --rating-content-image: url(../../resources/rating/star-empty-white.png);
    }
`;