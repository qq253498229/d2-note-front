import {Injectable} from '@angular/core';
import {HttpInterceptor, HttpEvent, HttpHandler, HttpRequest} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {environment} from '../../../environments/environment';
import {AuthService} from './auth.service';
import {catchError} from 'rxjs/operators';
import {Router} from '@angular/router';

@Injectable({providedIn: 'root'})
export class AuthInterceptor implements HttpInterceptor {

  private URL_WHITE_LIST = [
    environment.oauthUrl + '/oauth/token',
    environment.oauthUrl + '/oauth/check_token',
    environment.oauthUrl + '/user'
  ];


  constructor(
    private service: AuthService,
    private router: Router
  ) {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (this.URL_WHITE_LIST.indexOf(req.url) !== -1) {
      return next.handle(req);

    }
    const token = this.service.getToken();
    const authReq = req.clone({
      headers: req.headers.set('Authorization', token.tokenType + ' ' + token.accessToken)
    });
    return next.handle(authReq).pipe(
      catchError(err => {
        this.router.navigate(['/login']);
        return of(err);
      })
    );
  }
}
