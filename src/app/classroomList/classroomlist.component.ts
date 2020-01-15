import { Component, OnInit, Input } from '@angular/core';
import { SearchService } from "../services/search.service"

@Component({
    selector: 'classroomlist-component',
    templateUrl: './classroomlist.component.html',
    styleUrls: ['./classroomlist.component.css']
})
export class ClassroomlistComponent implements OnInit {

    @Input() searchFor = '';
    @Input() classesroom = [];

    // set data(data) {
    // }
    constructor(private SearchService: SearchService) {
    }

    ngOnInit() {
        // this.searchFor = this.SearchService.getSearch()
    }
}