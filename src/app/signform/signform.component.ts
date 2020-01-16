import { Component, OnInit } from '@angular/core';
import { SignUpDetails, SignInDetails } from '../../formclasses';
import { AuthService } from '../auth.service';
import { timingSafeEqual } from 'crypto';


@Component({
  selector: 'app-signform',
  templateUrl: './signform.component.html',
  styleUrls: ['./signform.component.css']
})
export class SignformComponent implements OnInit {

  constructor(private authService: AuthService) {
    
  }
  ngOnInit() {
    this.authService.myVar.subscribe(data=>{
      console.log(data)
    })
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
    this.authService.signUp(this.newUser)
  }
  

}
