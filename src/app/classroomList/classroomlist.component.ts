import { Component, OnInit, Input } from "@angular/core";
import { ClassroomService } from "../services/classroom.service";
import { AuthService } from "../services/auth.service";
import * as data from "../data/data.json";

@Component({
  selector: "classroomlist-component",
  templateUrl: "./classroomlist.component.html",
  styleUrls: ["./classroomlist.component.css"]
})
export class ClassroomlistComponent implements OnInit {
  @Input() searchFor = "";
  pageOfClassroom: Array<any>;
  @Input() classesroom;

  constructor(private ClassroomService: ClassroomService, public auth: AuthService) { }

  ngOnInit() {
    //console.log('localStorage.getItem(id)', localStorage.getItem('id'))
    this.ClassroomService.getAll(localStorage.getItem('id'));

    this.ClassroomService.classroomsData.subscribe(async (data) => {

      if (this.auth.isTeach()) {
        this.classesroom = data["data"].filter((element) => {
          return element['teacher'] === localStorage.getItem('id')
        })
      } else {
        this.classesroom = data["data"];
      }


    });

  }

  myClassRoom(classr) {
    if (this.auth.isTeach) {
      return classr["teacher"] === localStorage.getItem("id");
    }
    return true
  }

  onChangePage(pageOfClassroom: Array<any>) {
    this.pageOfClassroom = pageOfClassroom;
  }
}
