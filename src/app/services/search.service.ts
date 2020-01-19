import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  classesroom = [];

  constructor(private http: HttpClient) { }
  url = "http://127.0.0.1:5000/";

}