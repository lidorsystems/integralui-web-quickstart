import { css } from 'integralui-web/external/lit-element.js';

export const iuiContextMenuHeaderStyle = css`
    .iui-contextmenu {
        --iui-contextmenu-width: 200px;
    }

    .icons-medium {
        background: url(assets/resources/icons-x24.png) no-repeat 0 0;
        display: inline-block;
        overflow: hidden;
        padding: 0;
        margin: 0 7px 0 1px;
        width: 24px;
        height: 24px;
        vertical-align: middle;
    }
    
    .new-document {
        background-position: 0 -96px;
    }
    .solution {
        background-position: 0 -24px;
    }
    .save {
        background-position: -72px -96px;
    }
    .people {
        background-position: -120px -72px;
    }
    .facebook {
        background-position: -216px 0;
    }
    .twitter {
        background-position: -216px -24px;
    }
    .google-plus {
        background-position: -216px -48px;
    }
    .print {
        background-position: -96px -96px;
    }
                    
`;