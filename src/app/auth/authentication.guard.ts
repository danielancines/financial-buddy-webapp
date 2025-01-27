import {
  ActivatedRouteSnapshot,
  CanActivate,
  CanActivateFn,
  GuardResult,
  MaybeAsync, Router,
  RouterStateSnapshot
} from '@angular/router';
import {AuthenticationService} from './authentication.service';
import {Injectable} from '@angular/core';

@Injectable()
export class AuthenticationGuard implements CanActivate {
  constructor(private authenticationService: AuthenticationService,
              private router: Router) {

  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): MaybeAsync<GuardResult> {
    if (this.authenticationService.isAuthenticated()) {
      return true;
    }

    this.router.navigate(['/login']);
    return false;
  }
}

export const authenticationGuard: CanActivateFn = (route, state) => {
  return true;
};
