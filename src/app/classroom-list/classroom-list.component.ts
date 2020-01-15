import { Component, OnInit } from '@angular/core';
// import {  Classlist } from '../models/classes'
 import { classnames } from    '../classesexample'

@Component({
  selector: 'app-classroom-list',
  templateUrl: './classroom-list.component.html',
  styleUrls: ['./classroom-list.component.css']
})
export class ClassroomListComponent implements OnInit {
  Classroomlist = classnames
  constructor() { }

  ngOnInit() {
    console.log(this.Classroomlist)
  }

}
