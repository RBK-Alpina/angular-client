import { Component, OnInit, Input } from '@angular/core';
import { HostListener } from '@angular/core';
import { HttpClient } from '@angular/common/http';


var url = "http://localhost:5000";
@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
  host: {
    '(document:keypress)': 'handleKeyboardEvent($event)'
  }
})
export class PostComponent implements OnInit {
  comment: string;

  @Input() post : any;
  @Input() index : any;
  @Input() teacher: string;
  constructor(private http: HttpClient) { }

  ngOnInit() {
    console.log(this.post)
  }

  @HostListener('document:keypress', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) { 
    if(event.key == 'Enter' && this.comment != undefined) {
      console.log({
        text: this.comment, 
        student: localStorage.getItem('id'), 
        date: new Date()
      })
      this.http.post(url + '/comment/' + this.post._id, {
        text: this.comment, 
        student: localStorage.getItem('id'), 
        date: new Date()
      }).subscribe((res: any)=> {
        this.post.comments.push(res)
      })
    }
  }


}
