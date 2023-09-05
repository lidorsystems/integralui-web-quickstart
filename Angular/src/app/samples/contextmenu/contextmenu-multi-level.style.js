import { css } from 'integralui-web/external/lit-element.js';

export const iuiContextMenuMultiLevelStyle = css`
    .iui-contextmenu {
        --iui-contextmenu-width: 200px;
    }

    .icons-medium {
        background: url(assets/resources/icons-x24.png) no-repeat 0 0;
        display: inline-block;
        overflow: hidden;
        padding: 0;
        margin: 0 5px 0 0;
        width: 24px;
        height: 24px;
        vertical-align: middle;
    }
    .menu-mlvl-icons-empty {
        display: inline-block;
        margin: 0 5px 0 0;
        padding: 0;
        height: 24px;
        vertical-align: middle;
        width: 24px;
    }
    .library {
        background-position: 0 -72px;
    }
    .economics {
        background-position: -24px -72px;
    }
    .people {
        background-position: -120px -72px;
    }
    .heart {
        background-position: -168px -72px;
    }
    .album {
        background-position: -144px -48px;
    }
    .camera {
        background-position: -168px -48px;
    }
    .software {
        background-position: -48px -72px;
    }
    .clock {
        background-position: -72px -72px;
    }
    .sports {
        background-position: -96px -72px;
    }
`;