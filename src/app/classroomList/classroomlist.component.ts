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
    @Input() classesroom;

    constructor(private ClassroomService: ClassroomService) {
        // 
    }
    ngOnInit() {
        this.ClassroomService.getAll();
        this.ClassroomService.classroomsData.subscribe(data => {
            this.classesroom = data['data'];
            console.log(data)
        })

    }
}