import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})

export class PostComponent implements OnInit {
  @Input() post : any;
  @Input() index : any;

  constructor() { }

  ngOnInit() {
    console.log(this.post)
  }


}
