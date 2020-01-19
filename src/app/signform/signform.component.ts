import { Component, OnInit } from '@angular/core';
import { SignUpDetails, SignInDetails } from '../../formclasses';
import { AuthService } from '../services/auth.service';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-signform',
  templateUrl: './signform.component.html',
  styleUrls: ['./signform.component.css']
})
export class SignformComponent implements OnInit {

  constructor(private authService: AuthService) {

  }
  ngOnInit() {

  }

  role: string;

  displaySignUp = false;
  displaySignIn = false;

  pickOccupation(val) {
    this.role = val;
    this.displaySignUp = true;
  }

  switch() {
    this.displaySignIn = true;
    this.displaySignUp = false;
  }

  switchBack() {
    this.displaySignIn = false;
    this.displaySignUp = false;
  }

  signUp(form: NgForm) {
    var res = form.value as SignUpDetails;
    res.role = this.role;
    console.log(res)
    this.authService.signUp(res)
  }
  signIn(form: NgForm) {
    var res = form.value as SignInDetails;
    this.authService.signIn(res)
  }


}
