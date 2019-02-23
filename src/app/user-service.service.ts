import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable, of } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class UserServiceService {
  private backendUrl = "http://localhost:8000/api/auth";
  constructor(private http: HttpClient) {}

  registerUser(data) {
    return this.http.post(`${this.backendUrl}/register`, data);
  }

  loginUser(data) {
    return this.http.post(`${this.backendUrl}/login`, data);
  }
}
