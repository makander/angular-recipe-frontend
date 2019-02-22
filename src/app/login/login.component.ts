import { Component, OnInit } from "@angular/core";
import { UserServiceService } from "../user-service.service";
import { TokenServiceService } from "../token-service.service";
import { Token } from "@angular/compiler";
import { Router } from "@angular/router";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  public form = {
    email: null,
    password: null
  };

  constructor(
    private UserService: UserServiceService,
    private Token: TokenServiceService,
    private router: Router
  ) {}

  ngOnInit() {}

  //console.log(this.form);
  onSubmit() {
    this.UserService.loginUser(this.form).subscribe(
      data => this.handleResponse(data),
      error => console.log(error)
    );
  }

  handleResponse(data) {
    this.Token.handleToken(data.access_token);
    this.router.navigateByUrl("/profile");
  }
}
