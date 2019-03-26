import {Injectable} from '@angular/core';
import {Auth} from './auth';
import {User} from './user';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  AUTH_KEY = 'auth';
  USER_KEY = 'user';

  constructor(
    private http: HttpClient
  ) {
  }

  getToken(): Auth {
    const json = localStorage.getItem(this.AUTH_KEY);
    return json ? JSON.parse(json) : null;
  }

  setToken(auth: Auth) {
    localStorage.setItem(this.AUTH_KEY, JSON.stringify(auth || {}));
  }

  getUser(): User {
    const json = localStorage.getItem(this.USER_KEY);
    return json ? JSON.parse(json) : null;
  }

  setUser(user: User) {
    localStorage.setItem(this.USER_KEY, JSON.stringify(user || {}));
  }

  checkAuth() {
    if (this.getUser() && this.getToken()) {
      return true;
    }
    if (this.getToken() && this.getToken().expiresTo < new Date().getTime()) {
      // todo 这里应该改成刷新token
      return false;
    }
    return false;
  }

  login(user: { username: string; password: string }): Observable<any> {
    const params = new URLSearchParams();
    params.append('grant_type', 'password');
    params.append('username', user.username);
    params.append('password', user.password);
    return this.http.post(environment.oauthUrl + '/oauth/token', params.toString(), {
      headers: {
        'Content-type': 'application/x-www-form-urlencoded; charset=utf-8',
        Authorization: 'Basic ' + btoa('client:secret')
      }
    });
  }

  saveAuth(res: {
    access_token: string;
    refresh_token: string;
    expires_in: number;
    token_type: string
  }) {
    const auth = new Auth();
    auth.accessToken = res.access_token;
    auth.refreshToken = res.refresh_token;
    auth.tokenType = res.token_type;
    auth.expiresTo = new Date().getTime() + res.expires_in * 1000;
    this.setToken(auth);
    const params = new URLSearchParams();
    params.append('token', res.access_token);
    this.http.post(environment.oauthUrl + '/oauth/check_token', params.toString(), {
      headers: {
        'Content-type': 'application/x-www-form-urlencoded; charset=utf-8',
        Authorization: 'Basic ' + btoa('client:secret')
      }
    }).subscribe(res1 => {
      const user = new User();
      user.id = res1[`id`];
      user.nickname = res1[`nickname`];
      user.authorities = res1[`authorities`];
      this.setUser(user);
    });
  }
}
