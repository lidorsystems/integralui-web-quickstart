import { css } from '../../../../node_modules/integralui-web/external/lit-element.js';

export const iuiGridEditorsCheckBoxStyle = css`
    .iui-checkbox {
        --checkbox-border: 0;
        --checkbox-margin: 0;
        --checkbox-padding: 0;

        --checkbox-btn-margin: 0;
        --checkbox-btn-checked-background-image: url(../../../../node_modules/integralui-web/icons/checkbox-checked.ico);
        --checkbox-btn-indeterminate-background-image: url(../../../../node_modules/integralui-web/icons/checkbox-indeterminate.ico);
        --checkbox-btn-unchecked-background-image: url(../../../../node_modules/integralui-web/icons/checkbox-unchecked.ico);

        --checkbox-content-display: none;
    }

    .iui-editor-label, .iui-rating {
        margin-top: 4px;
    }
    .iui-editor-checkbox {
        margin-top: 6px;
    }
`;
