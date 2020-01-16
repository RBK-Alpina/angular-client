import { Component, OnInit } from '@angular/core';
import { SignUpDetails, SignInDetails } from '../../formclasses';

@Component({
  selector: 'app-signform',
  templateUrl: './signform.component.html',
  styleUrls: ['./signform.component.css']
})
export class SignformComponent implements OnInit {

  constructor() {
    
  }
  ngOnInit() {
  }

  newUser: SignUpDetails = new SignUpDetails();
  oldUser: SignInDetails = new SignInDetails();

  displaySignUp = false;
  displaySignIn = false;

  pickOccupation(val) {
    this.newUser.occupation = val;
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

  logIt() {
    console.log(this.newUser, this.oldUser)
  }
  

}
