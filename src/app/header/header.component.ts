import { Component, OnInit } from "@angular/core";
import { AuthService } from "../services/auth.service";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"]
})
export class HeaderComponent implements OnInit {
  constructor(private authService: AuthService) {}

  ngOnInit() {
    this.authService.isAuthed.subscribe(msg => {
      this.auth = msg;
    });
  }

  logout() {
    this.authService.signOut();
  }

  auth: boolean = false;
}
