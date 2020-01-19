import { Component, OnInit, Input } from "@angular/core";
// import {  Classlist } from '../models/classes'
import { classnames } from "../classesexample";
import { AuthService } from "../services/auth.service";
import { ClassroomService } from "../services/classroom.service";


@Component({
  selector: "minuature-classroom",
  templateUrl: "./minuatureClasseroom.html",
  styleUrls: ["./minuatureClasseroom.css"]
})
export class MinuatureComponent implements OnInit {
  // Classroomlist = classnames

  @Input() classroom = {};

  constructor(public auth: AuthService, private ClassroomService: ClassroomService) { }

  ngOnInit() {
    // console.log(this.classroom);
  }

  myClassRoom() {
    //   console.log(this.classroom["teacher"], localStorage.getItem("id"), "this one");
    return this.classroom["teacher"] === localStorage.getItem("id");
  }

  enrollClick() {
    let studentId = localStorage.getItem('id')
    let classId = this.classroom['_id']
    this.ClassroomService.enroll({ studentId, classId })
  }
}
