import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { ClassroomData } from 'src/classroomClass';

import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClassroomService {
  classrooms;

  constructor(private http: HttpClient) { }
  url = "http://127.0.0.1:5000/";


  getAll() {
    this.http.get(this.url + 'classrooms')
      .subscribe(response => {
        this.classroomsData.next(response)
      });
  }

  getClaasroomByUser() {
    this.http.get(this.url + 'classroomsByUser')
      .subscribe(response => {
        this.classroomsDataUser.next(response)
      });
  }

  getData() {

  }
  create() {

  }
  enroll() {

  }
  classroomsData: Subject<object> = new Subject();
  classroomsDataUser: Subject<object> = new Subject();

}
