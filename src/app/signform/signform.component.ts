import { Component, OnInit } from '@angular/core';
import { Credentials } from '../../credentials';

@Component({
  selector: 'app-signform',
  templateUrl: './signform.component.html',
  styleUrls: ['./signform.component.css']
})
export class SignformComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  user: Credentials = new Credentials;

  pickOccupation(val) {
    this.user.occupation = val;
  }
  

}
