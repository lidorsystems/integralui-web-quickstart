import { css } from 'integralui-web/external/lit-element';

export const iuiGridEditorsCheckBoxStyle = css`
    .iui-checkbox {
        --iui-checkbox-border: 0;
        --iui-checkbox-margin: 0;
        --iui-checkbox-padding: 0;

        --iui-checkbox-btn-margin: 0;
        --iui-checkbox-btn-checked-background-image: url(app/integralui/icons/checkbox-checked.ico);
        --iui-checkbox-btn-indeterminate-background-image: url(app/integralui/icons/checkbox-indeterminate.ico);
        --iui-checkbox-btn-unchecked-background-image: url(app/integralui/icons/checkbox-unchecked.ico);

        --iui-checkbox-content-display: none;
    }

    .iui-editor-label, .iui-rating {
        margin-top: 4px;
    }
    .iui-editor-checkbox {
        margin-top: 6px;
    }
`;
