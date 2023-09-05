import { css } from 'integralui-web/external/lit-element.js';

export const iuiContextMenuSeparatorLabelStyle = css`
    .iui-contextmenu {
        --iui-contextmenu-width: 200px;
        
        --iui-menuitem-separator-background: #bfd2f5;
        --iui-menuitem-separator-content-background: #bfd2f5;
        --iui-menuitem-separator-content-border-color: #bfd2f5;
        --iui-menuitem-separator-content-font-weight: bold;
        --iui-menuitem-separator-content-padding: 5px 4px 5px 3px;
    }

    .icons-medium {
        background: url(../../resources/icons-x24.png) no-repeat 0 0;
        display: inline-block;
        overflow: hidden;
        padding: 0;
        margin: 0 3px 0 0;
        width: 24px;
        height: 24px;
        vertical-align: middle;
    }
    .empty-doc {
        background-position: -24px -48px;
    }
    .new-document {
        background-position: 0 -96px;
    }
    .delete-document {
        background-position: -24px -96px;
    }
    .copy {
        background-position: -48px -96px;
    }
    .save {
        background-position: -72px -96px;
    }
    .print {
        background-position: -96px -96px;
    }
    .zoom {
        background-position: -120px -96px;
    }
    .zoom-in {
        background-position: -144px -96px;
    }
    .zoom-out {
        background-position: -168px -96px;
    }
`;