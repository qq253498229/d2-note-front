import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {AuthService} from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  // todo
  user: {
    username: string,
    password: string
  } = {
    username: 'user',
    password: 'password'
  };
  errorFlag = false;
  successFlag = false;
  errorTitle = '';
  errorMsg = '';

  constructor(
    private router: Router,
    private http: HttpClient,
    private service: AuthService
  ) {
  }

  ngOnInit() {
  }

  registerPage() {
    this.router.navigate(['/register']);
  }

  submit() {
    this.service.login(this.user).subscribe(res => {
      this.service.saveAuth(res);
      this.successFlag = true;
      setTimeout(() => {
        this.successFlag = false;
        this.router.navigate(['/']);
      }, 1500);
    }, () => {
      this.errorFlag = true;
      this.errorTitle = '登陆失败';
      this.errorMsg = '请检查用户名或密码是否正确';
    });
  }
}
