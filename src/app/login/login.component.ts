import { Component, OnInit } from "@angular/core";
import { UserServiceService } from "../user-service.service";

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

  constructor(private UserServiceService: UserServiceService) {}

  ngOnInit() {}

  //console.log(this.form);
  onSubmit() {
    this.UserServiceService.loginUser(this.form).subscribe(
      data => console.log(data),
      error => console.log(error)
    );
  }
}
