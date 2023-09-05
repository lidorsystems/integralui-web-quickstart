import { css } from '../../../node_modules/integralui-web/external/lit-element.js';

export const iuiListBoxDragEnterStyle = css`
    .iui-listbox {
        --iui-listbox-margin: 10px;

        transition: box-shadow 0.25s ease-in-out;
    }

    .listbox-dragenter {
        box-shadow: 0 0 0 2px #80b0d9;
    }
`;