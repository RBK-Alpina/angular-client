import { Component, OnInit } from '@angular/core';
import { AuthDetails } from 'src/jwt';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private authService:AuthService) { }

  ngOnInit() {
    this.authService.isAuthed.subscribe(msg=>{
      this.auth = msg;
    })
  }



  auth: boolean;
}
