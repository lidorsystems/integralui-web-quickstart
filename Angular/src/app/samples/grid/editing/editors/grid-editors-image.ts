import { Component, ElementRef, ViewChild } from '@angular/core';
import { html } from 'integralui-web/external/lit-element';

import 'integralui-web/components/integralui.grid';
import { IntegralUISelectionMode, IntegralUITheme } from 'integralui-web/components/integralui.enums';
import { iuiGridEditorsImageStyle } from './grid-editors-image.style';

@Component({
    selector: '',
    templateUrl: './grid-editors-image.html',
    styleUrls: ['./grid-editors-image.css']
})
export class GridEditorsImage {
    @ViewChild('grid', { static: false }) grid!: ElementRef;

    // Grid
    public columns: Array<any> = [];
    public ctrlSize: any = { width: 800, height: 450 };
    public currentResourcePath: string = 'assets/icons';
    public currentSelectionMode: IntegralUISelectionMode = IntegralUISelectionMode.None;
    public currentTheme: IntegralUITheme = IntegralUITheme.Office;
    public customStyle: any = iuiGridEditorsImageStyle;
    public iconSrc: string = 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/';
    public rows: Array<any> = [];

    constructor(){
        this.columns = [
            { id: 2, headerText: "Developer", width: 150 },
            { 
                id: 3, 
                contentAlignment: "center", 
                headerText: "Programming Skills", 
                width: 180
            },
            { id: 4, headerText: "Address", width: 150 },
            { id: 5, headerText: "City", width: 120 },
            { id: 6, headerText: "Country", width: 120 }
        ];

        this.rows = [
            { 
                id: 1,
                cells: [{ cid: 2, text: "Alec Roach" }, { cid: 3, value: ['angularjs/angularjs-plain.svg', 'react/react-original.svg'] }, { cid: 4, text: "8074 Neque Rd." }, { cid: 5, text: "Montereale" }, { cid: 6, text: "Italy" } ], 
            },
            {
                id: 2,
                cells: [{ cid: 2, text: "Benjamin Oliver" }, { cid: 3, value: ['dot-net/dot-net-plain.svg', 'cplusplus/cplusplus-plain.svg', 'csharp/csharp-plain.svg'] }, { cid: 4, text: "P.O. Box 628, 8202 Neque. Rd." }, { cid: 5, text: "Cametá" }, { cid: 6, text: "Lithuania" } ]
            },
            { 
                id: 3,
                cells: [{ cid: 2, text: "Nell Garner" }, { cid: 3, value: ['java/java-plain.svg', 'dot-net/dot-net-plain.svg'] }, { cid: 4, text: "2659 Eu, Ave" }, { cid: 5, text: "Chesapeake" }, { cid: 6, text: "France" } ]
            },
            { 
                id: 4,
                cells: [{ cid: 2, text: "Melodie Vazquez" }, { cid: 3, value: ['mongodb/mongodb-plain.svg', 'nodejs/nodejs-plain.svg'] }, { cid: 4, text: "709 Metus. Avenue" }, { cid: 5, text: "Silverton" }, { cid: 6, text: "New Caledonia" } ],
            },
            { 
                id: 5,
                cells: [{ cid: 2, text: "Yael Snow" }, { cid: 3, value: ['angularjs/angularjs-plain.svg', 'react/react-original.svg', 'vuejs/vuejs-plain.svg'] }, { cid: 4, text: "P.O. Box 152, 966 Auctor Avenue" }, { cid: 5, text: "Peterhead" }, { cid: 6, text: "Anguilla" } ]
            },
            { 
                id: 6,
                cells: [{ cid: 2, text: "Briar Olson" }, { cid: 3, value: ['php/php-plain.svg', 'wordpress/wordpress-plain.svg'] }, { cid: 4, text: "3654 Eu Street" }, { cid: 5, text: "Erpion" }, { cid: 6, text: "United Kingdom" } ]
            },
            { 
                id: 7,
                cells: [{ cid: 2, text: "Judah Cohen" }, { cid: 3, value: ['typescript/typescript-plain.svg', 'angularjs/angularjs-plain.svg'] }, { cid: 4, text: "3582 Magna Av." }, { cid: 5, text: "Montereale" }, { cid: 6, text: "Belgium" } ]
            },
            { 
                id: 8,
                cells: [{ cid: 2, text: "Austin Galloway" }, { cid: 3, value: ['python/python-plain.svg', 'ruby/ruby-plain.svg', 'php/php-plain.svg'] }, { cid: 4, text: "736-4699 Congue Avenue" }, { cid: 5, text: "Etalle" }, { cid: 6, text: "Denmark" } ]
            },
            { 
                id: 9,
                cells: [{ cid: 2, text: "Nell Garner" }, { cid: 3, value: ['jquery/jquery-plain.svg', 'react/react-original.svg'] }, { cid: 4, text: "2659 Eu, Ave" }, { cid: 5, text: "Chesapeake" }, { cid: 6, text: "France" } ]
            },
            { 
                id: 10,
                cells: [{ cid: 2, text: "Reuben Huffman" }, { cid: 3, value: ['angularjs/angularjs-plain.svg', 'nodejs/nodejs-plain.svg', 'mongodb/mongodb-plain.svg', 'typescript/typescript-plain.svg'] }, { cid: 4, text: "589-2405 Consequat St." }, { cid: 5, text: "Bruderheim" }, { cid: 6, text: "Latvia" } ]
            },
            { 
                id: 11,
                cells: [{ cid: 2, text: "Kiayada Cruz" }, { cid: 3, value: ['react/react-original.svg', 'vuejs/vuejs-plain.svg'] }, { cid: 4, text: "4474 Amet, Ave" }, { cid: 5, text: "Vorst" }, { cid: 6, text: "Romania" } ]
            },
            { 
                id: 12,
                cells: [{ cid: 2, text: "David Holden" }, { cid: 3, value: ['dot-net/dot-net-plain.svg'] }, { cid: 4, text: "3509 Nam Av." }, { cid: 5, text: "Lakewood" }, { cid: 6, text: "Poland" } ]
            }
        ];
    }

    // Templates ---------------------------------------------------------------------------------
        
    currentRowTemplate = (row: any, cell: any) => { 
        if (cell.cid === 3)
            return html`<span class="lang-icons">
                    ${cell.value.map((icon: string) => html`<img src="${this.iconSrc}${icon}" />`)}
                </span>`;

        return null;
    };
}
