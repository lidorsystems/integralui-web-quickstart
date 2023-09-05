import { css } from 'integralui-web/external/lit-element.js';

export const iuiMenuCustomTemplateStyle = css`
    .iui-contextmenu {
        --iui-contextmenu-width: 200px;
        --iui-menuitem-root-padding: 5px;
        --iui-menuitem-content-template-display: block;
    }
    .contextmenu-cstpl-label {
        display: inline-block;
        width: calc(100% - 127px);
    }
    .contextmenu-cstpl-zoom-block {
        border: thin solid #cecece;
        display: inline-block;
        padding: 2px;
    }
    .contextmenu-cstpl-zoom-value {
        display: inline-block;
        text-align: center;
        width: 60px;
    }
    .contextmenu-cstpl-zoom-in, .contextmenu-cstpl-zoom-out {
        display: inline-block;
        text-align: center;
        transition: all 0.25s ease-in-out;
        width: 24px;
    }
    .contextmenu-cstpl-zoom-in:hover, .contextmenu-cstpl-zoom-out:hover {
        background: #3d75db;
        color: white;
    }
`;