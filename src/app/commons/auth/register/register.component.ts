import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../../environments/environment';
import {Router} from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  user: {
    username: string,
    password: string,
    nickname: string
  } = {
    username: '17191095270',
    password: '111111',
    nickname: '大胃王'
  };
  errorFlag = false;
  errorTitle = '';
  errorMsg = '';
  successFlag = false;

  constructor(
    private http: HttpClient,
    private router: Router
  ) {
  }

  ngOnInit() {
  }

  submit() {
    this.http.post(environment.oauthUrl + '/user', this.user).subscribe(() => {
      this.successFlag = true;
      setTimeout(() => {
        this.successFlag = false;
        this.router.navigate(['/login']);
      }, 1500);
    }, err => {
      if (err[`status`] === 302) {
        this.errorFlag = true;
        this.errorTitle = '注册失败';
        this.errorMsg = '用户名已经存在';
      } else {
        this.errorFlag = true;
        this.errorTitle = '系统异常';
        this.errorMsg = '出BUG了，请联系管理员qq253498229';
      }
    });
  }
}
