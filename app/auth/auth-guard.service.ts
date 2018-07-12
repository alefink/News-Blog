import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  CanActivateChild
} from '@angular/router';

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { AuthService } from './auth.service';


@Injectable()
export class AuthGuard implements CanActivate, CanActivateChild {
  constructor( private authService: AuthService ) {}

  canActivate(route: ActivatedRouteSnapshot,
              state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return this.authService.isAuthenticated();
  }

  canActivateChild(route: ActivatedRouteSnapshot,
                   state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return this.canActivate(route, state);
  }
}
