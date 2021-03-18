import { css } from '../../node_modules/integralui-web/external/lit-element.js';

export const iuiGridDynamicGroupingStyle = css`
    .iui-grid-expand-box {
        margin-top: 5px;
    }
    .iui-editor-checkbox {
        margin: 5px 0;
    }
    .grid-grp-icons {
        background: url(../../resources/movie-genres.png) no-repeat 0 0;
        display: inline-block;
        padding: 0;
        margin: 1px 3px 0 3px;
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
    .mystery {
        background-position: -96px 0;
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

    .iui-rating {
        background: transparent;
        border: 0;
        margin-top: 3px;
    }
    .iui-rating:focus {
        outline: none !important;
    }
`;