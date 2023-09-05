import { css } from 'integralui-web/external/lit-element';

export const iuiListViewCardsStyle = css`
    .iui-listview {
        --iui-listitem-animate-border: 0;

        --iui-listitem-content-overflow: visible;
        --iui-listitem-selected-background: transparent;
        --iui-listitem-selected-border-color: #808080;
        --iui-listitem-selected-color: white;

        --iui-draglist-active-border-color: transparent;
        --iui-draglist-active-box-shadow: none;
    }

    .lview-ovw-title-large {
        display: inline-block;
        overflow: hidden;
        padding: 3px 0;
        text-overflow: ellipsis;
        vertical-align: middle;
        width: 100%;
    }
    .lview-ovw-icon-large {
        padding: 10px;
        margin: 20px auto;
        width: 24px;
    }
    .lview-ovw-icons {
        background: url(../../../resources/movie-genres.png) no-repeat 0 0;
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


    /* Card */
    div[slot="front-header"] {
        padding: 1px 4px;
    }

    div[slot="front-content"] {
        padding: 7px;
    }

    div[slot="back-content"] {
        padding: 7px;
    }
    .iui-card-front, .iui-card-back {
        border-radius: 7px;
        box-shadow: none;
    }
    .iui-card-front-header {
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }
    .iui-card-back {
        border-color: #0a64ad;
    }
    .iui-card-back-content {
        background: #0a64ad;
        color: white;
        overflow: hidden;
    }
    .iui-card-enter .iui-card-front {
        animation-name: iui-card-front-animate-enter;
        animation-delay: 0s;
        animation-direction: normal;
        animation-duration: 0.25s;
        animation-fill-mode: forwards;
        animation-iteration-count: 1;
        animation-play-state: running;
        animation-timing-function: linear; 
    }
    @keyframes iui-card-front-animate-enter {
        0% { box-shadow: 0 0 0 transparent; }
        100% { box-shadow: 0 3px 6px 0 #e5e5e5; }
    } 
    .iui-card-enter .iui-card-back {
        animation-name: iui-card-back-animate-enter;
        animation-delay: 0s;
        animation-direction: normal;
        animation-duration: 0.25s;
        animation-fill-mode: forwards;
        animation-iteration-count: 1;
        animation-play-state: running;
        animation-timing-function: linear; 
    }
    @keyframes iui-card-back-animate-enter {
        0% { box-shadow: 0 0 0 transparent; }
        100% { box-shadow: 0 3px 6px 0 rgb(10, 100, 173, 0.4); }
    } 

    /* Changes to the Rating component inside the Card */
    .iui-listview iui-rating {
        --iui-rating-border-color: transparent;
        --iui-rating-cursor: pointer;
        --iui-rating-margin: auto;
    }

    /* List item */
    .iui-listitem {
        border-color: transparent;
    }
    .iui-listitem-hovered, .iui-listitem-selected {
        background: transparent;
    }

`;