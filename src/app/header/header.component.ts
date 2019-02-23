import { Component, OnInit } from "@angular/core";
import { AuthServiceService } from "../auth-service.service";
import { Router } from "@angular/router";
import { TokenServiceService } from "../token-service.service";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"]
})
export class HeaderComponent implements OnInit {
  public userLoggedIn: boolean;

  constructor(
    private Auth: AuthServiceService,
    private router: Router,
    private Token: TokenServiceService
  ) {}

  ngOnInit() {
    this.Auth.authStatus.subscribe(value => (this.userLoggedIn = value));
  }

  logout() {
    console.log("LOGGA UT MIG DÅ!!");
    this.Auth.changeAuthStaus(false);
    this.Token.removeToken();
    this.router.navigateByUrl("");
  }
}
