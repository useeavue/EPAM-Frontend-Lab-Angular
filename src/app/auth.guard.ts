import { ValueConverter } from '@angular/compiler/src/render3/view/template';
import { calcPossibleSecurityContexts } from '@angular/compiler/src/template_parser/binding_parser';
import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { catchError, map, Observable, of, throwError } from 'rxjs';
import { AuthService } from './services/auth.service';
import { UsersDataService } from './services/users-data.service';
import { IUser } from './types/IUser';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(
    private router: Router,
    private usersDataService: UsersDataService,
    private authService: AuthService
  ) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> {
    return this.authService.getUserInfo().pipe(
      map((value) => {
        if (value) {
          return true;
        } else {
          return false;
        }
      })
    );
  }
}
