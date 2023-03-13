import { css } from '../../../../node_modules/integralui-web/external/lit-element.js';

export const iuiGridEditorsTextStyle = css`
    /* label Cell */
    .iui-editor-label {
        padding-top: 8px;
    }
    .iui-grid-lines-both {
        border-bottom: thin solid #efefef;
    }
    .iui-grid-row-cell:last-child {
        border-right: thin solid #efefef;
    }

    /* Text Editor */
    .iui-editor-text {
        background: white;
        font-size: 1.1rem;
        height: calc(100% - 2px);
        margin: -2px 0 0 -2px;
        padding: 3px;
        width: calc(100% - 2px);
    }
    .iui-editor-text::-moz-selection {
        background: #24cc24;
    }
    .iui-editor-text::selection {
        background: #24cc24;
    }

    /* Flags */
    .grid-celltxt-country {
        display: inline-block;
        padding: 9px 0 0 0;
        vertical-align: top;
    }
    .grid-celltxt-flags
    {
        background-repeat: no-repeat;
        display: inline-block;
        overflow: hidden;
        padding: 0 !important;
        margin: 5px 5px 0 3px;
        width: 32px;
        height: 22px;
        vertical-align: top;
    }
    .austria {
        background-image: url(../../../../resources/flags/austria.png);
    }
    .belgium {
        background-image: url(../../../../resources/flags/belgium.png);
    }
    .brazil {
        background-image: url(../../../../resources/flags/brazil.png);
    }
    .canada {
        background-image: url(../../../../resources/flags/canada.png);
    }
    .france {
        background-image: url(../../../../resources/flags/france.png);
    }
    .germany {
        background-image: url(../../../../resources/flags/germany.png);
    }
    .india {
        background-image: url(../../../../resources/flags/india.png);
    }
    .ireland {
        background-image: url(../../../../resources/flags/ireland.png);
    }
    .italy {
        background-image: url(../../../../resources/flags/italy.png);
    }
    .netherlands {
        background-image: url(../../../../resources/flags/netherlands.png);
    }
    .poland {
        background-image: url(../../../../resources/flags/poland.png);
    }
    .spain {
        background-image: url(../../../../resources/flags/spain.png);
    }
    .sweden {
        background-image: url(../../../../resources/flags/sweden.png);
    }
    .turkey {
        background-image: url(../../../../resources/flags/turkey.png);
    }
    .uk {
        background-image: url(../../../../resources/flags/uk.png);
    }
    .usa {
        background-image: url(../../../../resources/flags/usa.png);
    }
`;
