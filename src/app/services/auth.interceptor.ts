import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
  HttpResponse,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { finalize, Observable, tap } from 'rxjs';
import { LocalStorageService } from './local-storage.service';
import { SpinnerService } from './spinner.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  private totalRequests: number = 0;
  private totalResponses: number = 0;

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

    this.spinnerService.isLoading$.next(true);
    this.totalRequests++;

    return next.handle(clonedReq).pipe(
      tap({
        next: (res) => {
          if (res instanceof HttpResponse) {
            this.totalResponses++;
          }
        },
        error: () => {
          this.spinnerService.isLoading$.next(false);
          this.totalRequests = this.totalResponses = 0;
        },
      }),
      finalize(() => {
        setTimeout(() => {
          if (this.totalRequests === this.totalResponses) {
            this.spinnerService.isLoading$.next(false);
          }
        }, 0);
      })
    );
  }
}
