import { css } from 'integralui-web/external/lit-element.js';

export const iuiTreeViewLoadJSONStyle = css`
    .project-icons {
        background-image: url(../../resources/project.png);
        background-repeat: no-repeat;
        display: inline-block;
        overflow: hidden;
        padding: 0;
        margin: 0 5px 0 0;
        width: 24px;
        height: 24px;
        vertical-align: middle;
    }
    .empty {
        background-position: 0px 0px;
    }
    .solution {
        background-position: -24px 0px;
    }
    .documents {
        background-position: -48px 0px;
    }
    .references {
        background-position: -72px 0px;
    }
    .notes {
        background-position: -96px 0px;
    }
    .assembly {
        background-position: -120px 0px;
    }
    .resources {
        background-position: -144px 0px;
    }
    .properties {
        background-position: -168px 0px;
    }
    .new {
        background-position: -192px 0px;
    }
    .form {
        background-position: -216px 0px;
    }
    .empty-doc {
        background-position: -240px 0px;
    }
`;