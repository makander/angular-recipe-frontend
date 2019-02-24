import { Component, OnInit, ErrorHandler } from "@angular/core";
import { UserServiceService } from "../user-service.service";
import { TokenServiceService } from "../token-service.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.css"]
})
export class RegisterComponent implements OnInit {
  public form = {
    email: null,
    name: null,
    password: null,
    password_confirmation: null
  };

  constructor(
    private UserServiceService: UserServiceService,
    private Token: TokenServiceService,
    private router: Router
  ) {}

  ngOnInit() {}

  onSubmit() {
    this.UserServiceService.registerUser(this.form).subscribe(
      data => this.handleResponse(data),
      error => console.log(error)
    );
  }

  handleResponse(data) {
    this.Token.handleToken(data.access_token);
    this.router.navigateByUrl("");
  }
}
