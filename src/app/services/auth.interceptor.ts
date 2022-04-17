import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LocalStorageService } from './local-storage.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private localStorageService: LocalStorageService) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const authToken = JSON.parse(
      JSON.parse(JSON.stringify(this.localStorageService.getItem()))
    )?.token;
    const clonedReq = req.clone({
      headers: req.headers.set('Authorization', authToken ?? ''),
    });

    return next.handle(clonedReq);
  }
}
