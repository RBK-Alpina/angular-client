import { Injectable } from '@angular/core';
import { SignUpDetails, SignInDetails } from 'src/formclasses';
import { AuthDetails } from 'src/jwt';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  myVar: Subject<any> = new Subject();

  constructor(private http: HttpClient) { }

  url = "http://127.0.0.1:5000/auth";

  signUp(info: SignUpDetails) {
    console.log(info)
    this.http.post<AuthDetails>(this.url+'/signUp', info).subscribe(response=>{
      this.userData.next(response);
      console.log(this.userData);
    })
  }

  signIn(info: SignInDetails) {
    this.http.post<AuthDetails>(this.url+'/signIn', info).subscribe(response=>{
      this.userData.next(response);
      console.log(this.userData);
    })
  }

  userData: Subject<AuthDetails> = new Subject();

}
