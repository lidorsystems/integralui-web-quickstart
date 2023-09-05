import { css } from 'integralui-web/external/lit-element.js';

export const iuiGridEditorsCheckBoxStyle = css`
    .iui-checkbox {
        --iui-checkbox-border: 0;
        --iui-checkbox-margin: 0;
        --iui-checkbox-padding: 0;

        --iui-checkbox-btn-checked-background-image: url(../../../../integralui-web/icons/checkbox-checked.ico);
        --iui-checkbox-btn-indeterminate-background-image: url(../../../../integralui-web/icons/checkbox-indeterminate.ico);
        --iui-checkbox-btn-unchecked-background-image: url(../../../../integralui-web/icons/checkbox-unchecked.ico);
    }

    .iui-editor-label, .iui-rating {
        margin-top: 4px;
    }
    .iui-editor-checkbox {
        margin-top: 6px;
    }
`;
