import { Component, ElementRef, ViewChild } from '@angular/core';

import 'integralui-web/components/integralui.listbox';
import 'integralui-web/components/integralui.radiobutton';
import 'integralui-web/components/integralui.radiogroup';
import 'integralui-web/components/integralui.select';
import { IntegralUISortOrder, IntegralUITheme } from 'integralui-web/components/integralui.enums';

@Component({
    selector: '',
    templateUrl: './listbox-grouping.html',
    styleUrls: ['./listbox-grouping.css']
})
export class ListBoxGrouping {
    @ViewChild('listbox', { static: false }) listbox!: ElementRef;

    public ctrlSize: any = { width: 500, height: 400 }
    public currentResourcePath: string = 'assets/icons';
    public currentSorting: IntegralUISortOrder = IntegralUISortOrder.None;
    public currentTheme: IntegralUITheme = IntegralUITheme.Office;
    public groups: Array<any> = [];
    public items: Array<any> = [];

    // Control PaneL
    public selectedGroup: any = null;
    public groupList: Array<any> = [
        { text: 'Genre' },
        { text: 'Year' },
        { text: 'Rating' }
    ];

    public groupsGenre: Array<any> = [];
    public groupsYear: Array<any> = [];
    public groupsRating: Array<any> = [];

    // Initialization ----------------------------------------------------------------------------

    constructor(){
        this.items = [
            { id: 1, genre: "sci-fi", text: "Star Trek", year: "2009", rating: 8 },
            { id: 2, genre: "adventure", text: "Cast Away", year: "2000", rating: 7  },
            { id: 3, genre: "action", text: "Gladiator", year: "2000", rating: 8 },
            { id: 4, genre: "drama", text: "Malèna", year: "2000", rating: 7 },
            { id: 5, genre: "music", text: "Moulin Rouge", year: "2001", rating: 7 },
            { id: 6, genre: "comedy", text: "Snatch", year: "2000", rating: 8  },
            { id: 7, genre: "biography", text: "A Beautiful Mind", year: "2001", rating: 8  },
            { id: 8, genre: "crime", text: "Black Hawk Down", year: "2001", rating: 7 },
            { id: 9, genre: "western", text: "Django Unchained", year: "2012", rating: 8  },
            { id: 10, genre: "sci-fi", text: "Man of Steel", year: "2013", rating: 7 },
            { id: 11, genre: "horror", text: "The Ring", year: "2002", rating: 7 },
            { id: 12, genre: "romance", text: "40 Days and 40 Nights", year: "2002", rating: 5 },
            { id: 13, genre: "sci-fi", text: "Minority Report", year: "2002", rating: 7 },
            { id: 14, genre: "comedy", text: "Scary Movie 3", year: "2003", rating: 5 },
            { id: 15, genre: "music", text: "Walk the Line", year: "2005", rating: 7  },
            { id: 16, genre: "romance", text: "How to Lose a Guy in 10 Days", year: "2003", rating: 6 },
            { id: 17, genre: "crime", text: "The Dark Knight", year: "2008", rating: 9.0  },
            { id: 18, genre: "horror", text: "American Psycho", year: "2000", rating: 7 },
            { id: 19, genre: "drama", text: "The Grand Budapest Hotel", year: "2014", rating: 8 },
            { id: 20, genre: "comedy", text: "The Wolf of Wall Street", year: "2013", rating: 8 }
        ];
    }   

    ngAfterViewInit(){
        this.createGroups();
    }

    createGroups(){
        this.items.forEach(item => {
            if (!this.isGroupPresent(item.genre, this.groupsGenre))
                this.groupsGenre.push({ name: item.genre });

            if (!this.isGroupPresent(item.year, this.groupsYear))
                this.groupsYear.push({ name: item.year });

            if (!this.isGroupPresent(item.rating, this.groupsRating))
                this.groupsRating.push({ name: item.rating });
        });

        this.selectedGroup = this.groupList[0];
    }

    isGroupPresent(value: string, list: Array<any>){
        let filtered = list.filter(obj => obj.name === value);

        return filtered.length > 0 ? true : false;
    }

    // Events ------------------------------------------------------------------------------------

    groupingChanged(e: any){
        let item = e.detail.item;

        switch (item.text){
            case 'Genre':
                this.groups = this.groupsGenre;
                break;

            case 'Year':
                this.groups = this.groupsYear;
                break;

            case 'Rating':
                this.groups = this.groupsRating;
                break;
        }

        // Update the item group based on selected group by option
        this.items.forEach(obj => obj.group = obj[item.text.toLowerCase()]);
        this.listbox.nativeElement.updateLayout();
    }

    onSortingChecked(e: any){
        switch (e.detail.index){
            case 1: 
                this.currentSorting = IntegralUISortOrder.Ascending;
                break;

            case 2: 
                this.currentSorting = IntegralUISortOrder.Descending;
                break;

            default: 
                this.currentSorting = IntegralUISortOrder.None;
                break;
        }

        this.listbox.nativeElement.updateLayout();
    }
}
