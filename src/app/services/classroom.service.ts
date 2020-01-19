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
        console.log('***********')
      });
  }

  getData() {

  }
  create() {

  }
  enroll() {

  }
  classroomsData: Subject<object> = new Subject();
}
