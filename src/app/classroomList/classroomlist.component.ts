import { Component, OnInit, Input } from '@angular/core';
import { ClassroomService } from "../services/classroom.service"
import *  as  data from '../data/data.json';

@Component({
    selector: 'classroomlist-component',
    templateUrl: './classroomlist.component.html',
    styleUrls: ['./classroomlist.component.css']
})
export class ClassroomlistComponent implements OnInit {
    @Input() searchFor = '';
    pageOfClassroom: Array<any>;
    @Input() classesroom;
    test;

    constructor(private ClassroomService: ClassroomService) {
    }


    ngOnInit() {
        this.ClassroomService.getAll();
        this.ClassroomService.classroomsData.subscribe(data => {
            this.classesroom = data['data'];
            this.test = data['status'];
            console.log(this.test)

        })
        this.ClassroomService.getAll();
    }

    onChangePage(pageOfClassroom: Array<any>) {
        // update current page of items
        this.pageOfClassroom = pageOfClassroom;
    }
}