import { Component, OnInit } from '@angular/core';
import { ClassroomService } from "../services/classroom.service"

@Component({
  selector: 'app-add-class-room',
  templateUrl: './add-class-room.component.html',
  styleUrls: ['./add-class-room.component.css']
})
export class AddClassRoomComponent implements OnInit {

  constructor(private ClassroomService: ClassroomService) { }
  onClickSubmit(data) {
    this.ClassroomService.create(data)
  }
  ngOnInit() {

  }

}
