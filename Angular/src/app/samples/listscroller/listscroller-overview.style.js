import { css } from 'integralui-web/external/lit-element';

export const iuiListScrollerOverviewStyle = css`
    .lscrl-ovw-icons
    {
        background: url(assets/resources/movie-genres.png) no-repeat 0 0;
        display: inline-block;
        padding: 0;
        margin: 3px 0;
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
`;