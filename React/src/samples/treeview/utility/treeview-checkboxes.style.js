import { css } from 'integralui-web/external/lit-element.js';

export const iuiTreeViewCheckBoxesStyle = css`
    .trw-cbox-icons-medium {
        background-image: url(../../resources/icons-x24.png);
        background-position: 0 0;
        background-repeat: no-repeat;
        display: inline-block;
        overflow: hidden;
        padding: 0 !important;
        margin: 0 1px 0 5px;
        width: 24px;
        height: 24px;
        vertical-align: middle;
    }
    .trw-cbox-icons-empty {
        display: inline-block;
        padding: 0 !important;
        height: 24px;
        vertical-align: middle;
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
    .trw-item-cbox {
        background-image: url(../../resources/checkbox/checkbox-unchecked.png);
        background-repeat: no-repeat;
        display: inline-block;
        overflow: hidden;
        padding: 0 !important;
        margin: 0 2px;
        width: 16px;
        height: 16px;
        vertical-align: middle;
    }
    .trw-item-cbox-checked {
        background-image: url(../../resources/checkbox/checkbox-checked.png);
    }
    .trw-item-cbox-indeterminate {
        background-image: url(../../resources/checkbox/checkbox-indeterminate.png);
    }
    .trw-cbox-item-label {
        display: inline-block;
        padding: 3px 0;
        vertical-align: middle;
    }
    .trw-cbox-cmb {
        display: inline-block;
        margin-top: 10px;
        width: 200px;
    }
    .trw-cbox-cmb-button {
        width: 100px;
        margin: 10px 0 0 3px;
        padding: 5px;
        vertical-align: top;
    }
    .trw-cbox-list {
        width: 350px;
        height: 340px;
    }
`;