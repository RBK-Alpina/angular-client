import { Component, OnInit, Input } from '@angular/core';
import { ClassroomService } from "../services/classroom.service"

@Component({
  selector: 'app-my-classroom',
  templateUrl: './my-classroom.component.html',
  styleUrls: ['./my-classroom.component.scss']
})
export class MyClassroomComponent implements OnInit {
  @Input() searchFor = '';
  pageOfClassroom: Array<any>;
  @Input() classesroom;

  constructor(private ClassroomService: ClassroomService) {
  }

  ngOnInit() {
    this.ClassroomService.getClaasroomByUser();
    this.ClassroomService.classroomsDataUser.subscribe(data => {
      this.classesroom = data['data'];
      console.log(data)
    })
  }

  onChangePage(pageOfClassroom: Array<any>) {
    // update current page of items
    this.pageOfClassroom = pageOfClassroom;
  }

}
