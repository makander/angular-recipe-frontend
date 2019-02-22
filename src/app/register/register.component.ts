import { Component, OnInit } from "@angular/core";
import { UserServiceService } from "../user-service.service";

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

  constructor(private UserServiceService: UserServiceService) {}

  ngOnInit() {}

  onSubmit() {
    this.UserServiceService.registerUser(this.form).subscribe(
      data => console.log(data),
      error => console.log(error)
    );
  }
}
