import { css } from '../../../../node_modules/integralui-web/external/lit-element.js';

export const iuiListBoxSearchHighlightStyle = css`
    .listbox-search-highlight-item {
        transition: all 0.25s ease-in-out;
    }
    .listbox-search-highlight-false {
        opacity: 0.5;
    }
    .listbox-search-highlight-true {
        color: #2f962f;
        font-weight: bold;
        opacity: 1;
    }
    
    /* Check Mark */
    .listbox-search-highlight-box {
        display: block;
        float: right;
        height: 16px;
        margin: 2px 20px 0 0;
        opacity: 0;
        transform: scale(0);
        transition: all 0.25s ease-in-out;
        width: 16px;
    }
    .listbox-search-highlight-box-checked {
        opacity: 1;
        transform: scale(1);
    }
    .listbox-search-highlight-box span {
        background-image: url(../../../resources/checkbox/checkbox-checked-4.png);
        display: block;
        height: 16px;
        width: 16px;
    }

    /* Flags */
    .listbox-search-highlight-country {
        display: inline-block;
        margin: 2px 0 0 0;
        vertical-align: top;
    }
    .listbox-search-highlight-flags {
        background-repeat: no-repeat;
        display: inline-block;
        overflow: hidden;
        padding: 0 !important;
        margin: 0 5px 0 0;
        width: 32px;
        height: 22px;
        vertical-align: top;
    }
    .argentina {
        background-image: url(../../../resources/flags/argentina.png);
    }
    .austria {
        background-image: url(../../../resources/flags/austria.png);
    }
    .belgium {
        background-image: url(../../../resources/flags/belgium.png);
    }
    .brazil {
        background-image: url(../../../resources/flags/brazil.png);
    }
    .canada {
        background-image: url(../../../resources/flags/canada.png);
    }
    .china {
        background-image: url(../../../resources/flags/china.png);
    }
    .egypt {
        background-image: url(../../../resources/flags/egypt.png);
    }
    .france {
        background-image: url(../../../resources/flags/france.png);
    }
    .germany {
        background-image: url(../../../resources/flags/germany.png);
    }
    .india {
        background-image: url(../../../resources/flags/india.png);
    }
    .ireland {
        background-image: url(../../../resources/flags/ireland.png);
    }
    .italy {
        background-image: url(../../../resources/flags/italy.png);
    }
    .japan {
        background-image: url(../../../resources/flags/japan.png);
    }
    .mexico {
        background-image: url(../../../resources/flags/mexico.png);
    }
    .netherlands {
        background-image: url(../../../resources/flags/netherlands.png);
    }
    .nigeria {
        background-image: url(../../../resources/flags/nigeria.png);
    }
    .poland {
        background-image: url(../../../resources/flags/poland.png);
    }
    .poland {
        background-image: url(../../../resources/flags/poland.png);
    }
    .saudi-arabia {
        background-image: url(../../../resources/flags/saudi-arabia.png);
    }
    .south-africa {
        background-image: url(../../../resources/flags/south-africa.png);
    }
    .south-korea {
        background-image: url(../../../resources/flags/south-korea.png);
    }
    .spain {
        background-image: url(../../../resources/flags/spain.png);
    }
    .sweden {
        background-image: url(../../../resources/flags/sweden.png);
    }
    .turkey {
        background-image: url(../../../resources/flags/turkey.png);
    }
    .uk {
        background-image: url(../../../resources/flags/uk.png);
    }
    .usa {
        background-image: url(../../../resources/flags/usa.png);
    }
`;
