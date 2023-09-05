import { css } from 'integralui-web/external/lit-element';

export const iuiGridShowHideColumnsStyle = css`
    .header-label {
        display: inline-block;
        margin-top: 6px;
    }

    .iui-contextmenu {
        width: 175px;
    }
    .iui-menuitem-root, .iui-menuitem, .iui-contextmenuitem-root, .iui-contextmenuitem {
        padding: 7px 6px 7px 4px;
    }

    iui-dropdownbutton {
        --iui-dropdownbutton-float: right;
        --iui-dropdownbutton-height: 16px;
        opacity: 0;
    }

    .iui-grid-column-header-hovered iui-dropdownbutton, 
    .iui-grid-column-header-selected iui-dropdownbutton {
        opacity: 1;
    }

    .icons {
        display: inline-block;
        overflow: hidden;
        padding: 0;
        width: 16px;
        height: 16px;
        vertical-align: top;
    }
    .checked-icon {
        background: url(app/integralui/icons/check-mark.ico);
    }
`;