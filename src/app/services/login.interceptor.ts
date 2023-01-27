import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
  HttpResponse,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';

const loginRes = {
  token:
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c',
};

@Injectable()
export class LoginInterceptor implements HttpInterceptor {
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    if (req.url === 'http://localhost:3000/login') {
      if (
        req.body &&
        req.body.username === 'edwar' &&
        req.body.password === 'qwerasdf'
      ) {
        return of(new HttpResponse({ status: 200, body: loginRes }));
      } else {
        return throwError(
          () =>
            new HttpErrorResponse({
              error: { error: 'User not found' },
              status: 401,
            })
        );
      }
    } else {
      return next.handle(req);
    }
  }
}
