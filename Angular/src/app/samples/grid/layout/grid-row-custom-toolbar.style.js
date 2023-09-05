import { css } from 'integralui-web/external/lit-element';

export const iuiGridRowCustomToolbarStyle = css`
    .iui-editor-checkbox {
        margin-top: 6px;
    }
    .iui-editor-label {
        margin-top: 4px;
    }
    .iui-rating {
        --iui-rating-cursor: pointer;
        --iui-rating-margin: 4px 0 0 0;
    }
    
    /* DropDownList */
    .iui-select {
        --iui-select-margin: 5px 0 0 0;
        --iui-header-expand-box-margin: 0 2px;
    }
    .iui-list li {
        background: #fcfcfc;
        border-color: #fcfcfc;
    }
    .iui-list li:nth-of-type(2n){
        background: #f5f5f5;
        border-color: #f5f5f5;
    }

    /* Row Favorite Icon */
    .grid-row-hover-cell-favorite {
        background-image: url(assets/resources/icons-x24.png);
        background-repeat: no-repeat;
        background-position: -216px -72px;
        display: inline-block;
        opacity: 0.5;
        overflow: hidden;
        padding: 0 !important;
        margin: 3px 0 0 3px;
        width: 24px;
        height: 24px;
        vertical-align: top;
    }
    .grid-row-hover-cell-favorite-selected {
        background-position: -144px -72px;
    }

    /* Toolbar */
    .grid-row-hover-button {
        background: transparent;
        border: 0;
        border-radius: 3px;
        cursor: pointer;
        display: inline-block;
        margin: 1px 3px 0 3px;
        padding: 5px;
        white-space: no-wrap;
    }
    .grid-row-hover-button:hover {
        animation-name: grid-row-hover-button-animate-enter;
        animation-delay: 0s;
        animation-direction: normal;
        animation-duration: 0.25s;
        animation-fill-mode: forwards;
        animation-iteration-count: 1;
        animation-play-state: running;
        animation-timing-function: linear; 
    }
    @keyframes grid-row-hover-button-animate-enter {
        0% { background: transparent; }
        100% { background: #d5d5d5; }
    }
    .grid-row-hover-button-icons {
        background-image: url(assets/resources/icons-x24.png);
        background-repeat: no-repeat;
        display: inline-block;
        overflow: hidden;
        padding: 0 !important;
        margin: 0;
        width: 24px;
        height: 24px;
        vertical-align: top;
    }
    .trash {
        background-position: -72px -48px;
    }
    .favorite {
        background-position: -216px -72px;
    }
    .favorite-selected {
        background-position: -144px -72px;
    }
    .statistics {
        background-position: -216px -168px;
    }

`;
