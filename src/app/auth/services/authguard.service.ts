import {Injectable}     from '@angular/core';
import {Route, CanActivate, CanLoad}    from '@angular/router';
import {NavigationService} from "../../core/services/navigation.service";
import {AuthService} from "./auth.service";

@Injectable()
export class AuthGuard implements CanActivate, CanLoad {
  constructor(private navSrvc: NavigationService, private authSrvc: AuthService) {
  }

  canActivate(route: any, state: any): boolean {
    if(!this.authSrvc.hasToken) {
      this.navSrvc.goToHome();
      return false;
    }
    return true;
  }

  canLoad(route: Route): boolean {
    if(!this.authSrvc.hasToken) {
      this.navSrvc.goToHome();
      return false;
    }
    return true;
  }
}
