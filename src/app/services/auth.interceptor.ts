import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
  HttpResponse,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { debounceTime, delay, finalize, Observable, tap } from 'rxjs';
import { LocalStorageService } from './local-storage.service';
import { SpinnerService } from './spinner.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(
    private localStorageService: LocalStorageService,
    private spinnerService: SpinnerService
  ) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const authToken = this.localStorageService.getItem();
    const clonedReq = req.clone({
      headers: req.headers.set('Authorization', authToken ?? ''),
    });

    this.spinnerService.isLoading.next(true);

    return next.handle(clonedReq).pipe(
      finalize(() => {
        this.spinnerService.isLoading.next(false);
      })
    );
  }
}
