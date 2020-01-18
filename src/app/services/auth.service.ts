import { Injectable } from '@angular/core';
import { SignUpDetails, SignInDetails } from 'src/formclasses';
import { AuthDetails, AuthResponse } from 'src/jwt';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  url = "http://127.0.0.1:5000/";


  signUp(info: SignUpDetails) {
    this.http.post<AuthResponse>(this.url + 'signUp', info).subscribe(response => {
      if (response.status === "success") {
        this.isAuthed.next(true);
        this.userData = response.details;
        localStorage.setItem("token", response.details.token);
      }
    })
  }

  signIn(info: SignInDetails) {
    this.http.post<AuthResponse>(this.url + 'signIn', info).subscribe(response => {
      //  console.log(response)
      if (response.status === "success") {
        this.isAuthed.next(true);
        this.userData = response.details;

      };
    })
  }

  signOut() {
    this.isAuthed.next(false);
    this.userData = {
      role: "guest",
      username: null,
      token: null,
    }
  }

  userData: AuthDetails = new AuthDetails;
  isAuthed: Subject<boolean> = new Subject();

  checkAuth() {
    if (this.userData.role !== "guest")
      return true;
    return false;
  }
}
