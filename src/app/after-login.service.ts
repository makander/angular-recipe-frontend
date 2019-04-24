import { Injectable } from "@angular/core";
import {
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  CanActivate
} from "@angular/router";
import { Observable } from "rxjs";
import { TokenServiceService } from "./token-service.service";

@Injectable({
  providedIn: "root"
})
export class AfterLoginService implements CanActivate {
  constructor(private Token: TokenServiceService) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean | Observable<boolean> | Promise<boolean> {
    debugger;
    return this.Token.userLoggedIn();
  }
}
