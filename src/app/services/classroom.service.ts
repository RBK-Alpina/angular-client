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
    return this.http.get<ClassroomData>((this.url + 'classrooms'), { observe: 'response' })
      .subscribe(response => {
        console.log(response)
      });
  }

  getData() {

  }
  create() {

  }
  enroll() {

  }

}
