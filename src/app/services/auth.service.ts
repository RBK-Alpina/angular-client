import { Injectable } from "@angular/core";
import { SignUpDetails, SignInDetails } from "src/formclasses";
import { AuthDetails, AuthResponse } from "src/jwt";
import { HttpClient, HttpResponse } from "@angular/common/http";
import { Observable, Subject } from "rxjs";
import { Router } from "@angular/router";

@Injectable({
  providedIn: "root"
})
export class AuthService {
  constructor(private http: HttpClient, private router: Router) {}

  url = "http://127.0.0.1:5000/";

  signUp(info: SignUpDetails) {
    this.http
      .post<AuthResponse>(this.url + "signUp", info)
      .subscribe(response => {
        console.log(response);
        if (response.status === "success") {
          this.isAuthed.next(true);
          localStorage.setItem("token", response.details.token);
          localStorage.setItem("user", response.details.username);
          localStorage.setItem("role", response.details.role);
          localStorage.setItem("id", response.details.id);
          this.router.navigate(["/classrooms"]);
        }
      });
  }

  signIn(info: SignInDetails) {
    this.http
      .post<AuthResponse>(this.url + "signIn", info)
      .subscribe(response => {
        //  console.log(response)
        if (response.status === "success") {
          this.isAuthed.next(true);
          localStorage.setItem("token", response.details.token);
          localStorage.setItem("user", response.details.username);
          localStorage.setItem("role", response.details.role);
          localStorage.setItem("id", response.details.id);
          this.router.navigate(["/classrooms"]);
        }
      });
  }

  signOut() {
    this.isAuthed.next(false);
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    localStorage.removeItem("role");
    localStorage.removeItem("id");
    this.router.navigate(["/"]);
  }

  userData: AuthDetails = new AuthDetails();
  isAuthed: Subject<boolean> = new Subject();

  checkAuth() {
    if (localStorage.getItem("token")) return true;
    return false;
  }
  isTeach() {
    return localStorage.getItem("role") === "teacher";
  }
  isStudent() {
    return localStorage.getItem("role") === "student";
  }
}
