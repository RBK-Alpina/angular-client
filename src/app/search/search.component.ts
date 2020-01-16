import { Component, OnInit } from '@angular/core';
import { SearchService } from "../services/search.service"

@Component({
    selector: 'search-component',
    templateUrl: './search.component.html',
    styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

    searchText: string = '';
    findedClassesroom = []
    constructor(private SearchService: SearchService) {
    }

    onClickSearch(data) {
        this.searchText = data.searchText

        // get the data from database and update findedClassesroom[]
    }
    ngOnInit() {

    }
}