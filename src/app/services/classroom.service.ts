import { Injectable } from "@angular/core";
import { HttpClient, HttpResponse } from "@angular/common/http";
import { ClassroomData } from "src/classroomClass";

import { Observable, Subject } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class ClassroomService {
  classrooms;

  constructor(private http: HttpClient) { }
  url = "http://127.0.0.1:5000/";

  getAll() {
    this.http.get(this.url + "classrooms").subscribe(response => {
      console.log(response);
      this.classroomsData.next(response);
    });
    // this.classroomsData.next({
    //   data: [
    //     { name: "test`1" },
    //     { name: "test`1" },
    //     { name: "test`11" },
    //     { name: "test`2" },
    //     { name: "test`1" },
    //     { name: "test`4" },
    //     { name: "test`1" },
    //     { name: "test`3" },
    //     { name: "test`22" }
    //   ]
    // });
  }


  getClaasroomByUser() {
    this.http.get(this.url + "classroomsByUser").subscribe(response => {
      this.classroomsDataUser.next(response);
    });
  }

  getData() { }

  create(data) {
    data.teacher = localStorage.getItem("id");
    this.http.post(this.url + "addClassroom", data).subscribe(response => {
      console.log(response);
    });
  }
  enroll() { }
  classroomsData: Subject<object> = new Subject();
  classroomsDataUser: Subject<object> = new Subject();
}
