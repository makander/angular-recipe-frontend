import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable, of } from "rxjs";
import { environment } from "../environments/environment";

@Injectable({
  providedIn: "root"
})
export class UserServiceService {
  constructor(private http: HttpClient) {}

  registerUser(data) {
    return this.http.post(`${environment.baseurl}/register`, data);
  }

  loginUser(data) {
    return this.http.post(`${environment.baseurl}/login`, data);
  }
}
