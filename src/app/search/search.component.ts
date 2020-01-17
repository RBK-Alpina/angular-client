import { Component, OnInit } from '@angular/core';
import { SearchService } from "../services/search.service"
import *  as  data from '../data/data.json';
@Component({
    selector: 'search-component',
    templateUrl: './search.component.html',
    styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
    isFormSent: boolean = false;
    searchText: string = '';
    findedClassesroom = [];
    constructor(private SearchService: SearchService) {
    }

    onClickSearch(datav) {
        console.log(data['default'])
        this.searchText = datav.searchText
        this.findedClassesroom = data['default']
        this.isFormSent = true;


        // get the data from database and update findedClassesroom[]
    }
    ngOnInit() {

    }
}