import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
} from '@angular/router';
import { map, Observable, tap } from 'rxjs';
import { AuthService } from './services/auth.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> {
    return this.authService.getUserInfo().pipe(
      tap({
        next: (user) => {
          const userName = `${user.name.first} ${user.name.last}`;
          this.authService.userName$.next(userName);
        },
        error: (err) => {
          this.router.navigate(['/login'], {
            queryParams: {
              error: err.statusText,
            },
          });
        },
      }),
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
