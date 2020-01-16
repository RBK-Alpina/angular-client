import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-class-room',
  templateUrl: './class-room.component.html',
  styleUrls: ['./class-room.component.css']
})
export class ClassRoomComponent implements OnInit {

  posts: any[] = [
    {text: 'Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim', name: 'Essam', date: new Date(), comments: []},
    {text: 'fjlwejfme', name: 'Belkhere', date: new Date(), comments: []},
    {text: 'jomjjmoomewjlelia mbeldkehre mohamde fmoftah', name: 'hammam', date: new Date(), comments: []},
    {text: 'ahmedsofialn asojhanshem aloim malike adam ', name: 'Mahdi', date: new Date(), comments: []}
  ]
  constructor() { }

  ngOnInit() {
  }

}