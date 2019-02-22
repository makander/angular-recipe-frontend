import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class TokenServiceService {
  private iss = {
    login: "http://recipe.test/api/auth/login",
    register: "http://recipe.test/api/auth/register"
  };
  constructor() {}

  handleToken(token) {
    this.setToken(token);
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
      if (payload) {
        return Object.values(this.iss).indexOf(payload.iss) > -1 ? true : false;
      }
    }
    return false;
  }

  payloadToken(token) {
    const payload = token.split(".")[1];
    return this.decodePayload(payload);
  }

  decodePayload(payloadToken) {
    return JSON.parse(atob(payloadToken));
  }

  userLoggedIn() {
    return this.isTokenValid();
  }
}
