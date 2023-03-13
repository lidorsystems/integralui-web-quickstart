import { css } from 'integralui-web/external/lit-element.js';

export const iuiGridEditorsCheckBoxStyle = css`
    .iui-checkbox {
        --checkbox-border: 0;
        --checkbox-margin: 0;
        --checkbox-padding: 0;

        --checkbox-btn-checked-background-image: url(../../../../integralui-web/icons/checkbox-checked.ico);
        --checkbox-btn-indeterminate-background-image: url(../../../../integralui-web/icons/checkbox-indeterminate.ico);
        --checkbox-btn-unchecked-background-image: url(../../../../integralui-web/icons/checkbox-unchecked.ico);
    }

    .iui-editor-label, .iui-rating {
        margin-top: 4px;
    }
    .iui-editor-checkbox {
        margin-top: 6px;
    }
`;
