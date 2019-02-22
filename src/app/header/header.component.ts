import { Component, OnInit } from "@angular/core";
import { AuthServiceService } from "../auth-service.service";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"]
})
export class HeaderComponent implements OnInit {
  public userLoggedIn: boolean;

  constructor(private Auth: AuthServiceService) {}

  ngOnInit() {
    this.Auth.authStatus.subscribe(value => (this.userLoggedIn = value));
  }

  logout() {
    console.log("LOGGA UT MIG DÅ!!");
  }
}
