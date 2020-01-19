import { Component, OnInit, Input } from "@angular/core";
// import {  Classlist } from '../models/classes'
import { classnames } from "../classesexample";
import { AuthService } from "../services/auth.service";

@Component({
  selector: "minuature-classroom",
  templateUrl: "./minuatureClasseroom.html",
  styleUrls: ["./minuatureClasseroom.css"]
})
export class MinuatureComponent implements OnInit {
  // Classroomlist = classnames

  @Input() classroom = {};

  constructor(public auth: AuthService) {}

  ngOnInit() {
    console.log(this.classroom);
  }

  myClassRoom() {
    console.log(
      this.classroom["teacher"],
      localStorage.getItem("id"),
      "this one"
    );
    return this.classroom["teacher"] === localStorage.getItem("id");
  }
}
