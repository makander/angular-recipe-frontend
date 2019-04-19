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
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean | Observable<boolean> | Promise<boolean> {
    return this.Token.userLoggedIn();
  }

  constructor(private Token: TokenServiceService) {}
}
