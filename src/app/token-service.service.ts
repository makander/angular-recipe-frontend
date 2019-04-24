import { Injectable } from "@angular/core";
import { environment } from "../environments/environment";

@Injectable({
  providedIn: "root"
})
export class TokenServiceService {
  private iss = {
    login: `${environment.baseurl}/login`,
    register: `${environment.baseurl}/register`
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
    //const payload = token.split(".")[1];
    return this.decodePayload(token);
  }

  decodePayload(token) {
    //return JSON.parse(atob(payloadToken));
    var base64Url = token.split(".")[1];
    var base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
    return JSON.parse(atob(base64));
  }

  userLoggedIn() {
    return this.isTokenValid();
  }
}
