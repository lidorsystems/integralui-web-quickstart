import { css } from '../../node_modules/integralui-web/external/lit-element.js';

export const iuiMenuCustomTemplateStyle = css`
    .menu-cstpl-label {
        display: inline-block;
        width: calc(100% - 127px);
    }
    .menu-cstpl-zoom-block {
        border: thin solid #cecece;
        display: inline-block;
        padding: 2px;
    }
    .menu-cstpl-zoom-value {
        display: inline-block;
        text-align: center;
        width: 60px;
    }
    .menu-cstpl-zoom-in, .menu-cstpl-zoom-out {
        display: inline-block;
        text-align: center;
        transition: all 0.25s ease-in-out;
        width: 24px;
    }
    .menu-cstpl-zoom-in:hover, .menu-cstpl-zoom-out:hover {
        background: #3d75db;
        color: white;
    }
`;