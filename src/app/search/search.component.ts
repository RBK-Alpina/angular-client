import { Component, OnInit } from '@angular/core';
import { SearchService } from "../services/search.service"
import *  as  dataSearch from '../data/dataSearch.json';
@Component({
    selector: 'search-component',
    templateUrl: './search.component.html',
    styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
    searchText: string = ''
    searchFor: string = '';
    findedClassesroom = [];

    constructor(private SearchService: SearchService) {
    }

    onClickSearch() {
        console.log('datav', this.searchText)
        console.log(dataSearch['default'])
        this.searchText = this.searchFor
        this.findedClassesroom = dataSearch['default']//update from database
        // get the data from database and update findedClassesroom[]
    }
    ngOnInit() {
    }
}