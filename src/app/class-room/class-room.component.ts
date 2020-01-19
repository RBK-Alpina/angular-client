import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { HttpClient } from "@angular/common/http";
import { AuthService } from "../services/auth.service";

var url = "http://localhost:5000";
@Component({
  selector: "app-class-room",
  templateUrl: "./class-room.component.html",
  styleUrls: ["./class-room.component.css"]
})
export class ClassRoomComponent implements OnInit {
  // posts: any[] = [
  //   {
  //     text:
  //       "Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim",
  //     name: "Essam",
  //     date: new Date(),
  //     comments: []
  //   },
  //   { text: "fjlwejfme", name: "Belkhere", date: new Date(), comments: [] },
  //   {
  //     text: "jomjjmoomewjlelia mbeldkehre mohamde fmoftah",
  //     name: "hammam",
  //     date: new Date(),
  //     comments: []
  //   },
  //   {
  //     text: "ahmedsofialn asojhanshem aloim malike adam ",
  //     name: "Mahdi",
  //     date: new Date(),
  //     comments: []
  //   }
  // ];
  name: string;
  description: string;
  category: string;
  post: any[];
  constructor(
    private activeRoute: ActivatedRoute,
    private http: HttpClient,
    public auth: AuthService
  ) {}

  ngOnInit() {
    this.activeRoute.params.subscribe(link => {
      // console.log(link.id);
      this.http.get(url + "/classroom/" + link.id).subscribe(res => {
        console.log(res);
        this.name = res["data"]["name"];
        this.description = res["data"]["description"];
        this.category = res["data"]["categories"];
        this.post = res["data"]["posts"];
      });
    });
  }
}
