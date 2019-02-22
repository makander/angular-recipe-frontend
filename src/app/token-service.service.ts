import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class TokenServiceService {
  constructor() {}

  handleToken(token) {
    this.setToken(token);
    console.log(this.payloadToken(token));
  }

  setToken(token) {
    localStorage.setItem("token", token);
  }

  getToken() {
    return localStorage.getItem("token");
  }

  removeToken() {
    localStorage.removeItem("token");
  }

  isTokenValid() {
    const token = this.getToken();
    if (token) {
      const payload = this.payloadToken(token);
    }
  }

  payloadToken(token) {
    const payload = token.split(".")[1];
    return this.decode(payload);
  }

  decode(payloadToken) {
    return JSON.parse(atob(payloadToken));
  }
}
