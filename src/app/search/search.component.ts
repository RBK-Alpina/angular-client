import { Component, OnInit } from '@angular/core';
import { ClassroomService } from "../services/classroom.service"
import *  as  dataSearch from '../data/dataSearch.json';
@Component({
    selector: 'search-component',
    templateUrl: './search.component.html',
    styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
    searchText: string = ''
    searchFor: string = '';
    findedClassesroom;

    constructor(private ClassroomService: ClassroomService) {
    }

    onClickSearch() {

        this.ClassroomService.getAll(localStorage.getItem('id'));



        //  console.log(this.findedClassesroom)

        this.searchText = this.searchFor
        this.ClassroomService.classroomsData.subscribe(async (data) => {
            if (this.searchFor) {
            this.findedClassesroom = data["data"].filter((element) => {
                return ((element['name'].indexOf(this.searchFor) !== -1) || (element['description'].indexOf(this.searchFor) !== -1))
            })
            }
            else {
                this.findedClassesroom = data["data"]
            }

        });

        // this.ClassroomService.getSearchedClassroom(this.searchText)
        // console.log('this.ClassroomService.classroomsData**********', this.ClassroomService.classroomsData)
        //  this.findedClassesroom = this.ClassroomService.classroomsData

        // console.log(dataSearch['default'])

        // this.findedClassesroom = dataSearch['default']
        //update from database
        // get the data from database and update findedClassesroom[]
    }
    ngOnInit() {

    }
}