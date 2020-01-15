import { Component, OnInit, Input } from '@angular/core';
// import {  Classlist } from '../models/classes'
 import { classnames } from    '../classesexample'

@Component({
  selector: 'minuature-classroom',
  templateUrl: './minuatureClasseroom.html',
  styleUrls: ['./minuatureClasseroom.css']
})
export class ClassroomListComponent implements OnInit {
  Classroomlist = classnames

  @Input() classroom={}
  constructor() { }

  ngOnInit() {
    console.log(this.Classroomlist)
  }

}
