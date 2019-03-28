import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../../environments/environment';
import {Router} from '@angular/router';
import {CommonService} from '../../common.service';

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
    username: '',
    password: '',
    nickname: ''
  };

  constructor(
    private http: HttpClient,
    private router: Router,
    private common: CommonService
  ) {
  }

  ngOnInit() {
  }

  submit() {
    this.http.post(environment.oauthUrl + '/user', this.user).subscribe(() => {
      this.router.navigate(['/login']);
      this.common.toast({msg: '注册成功', seconds: 1500});
    }, err => {
      if (err[`status`] === 302) {
        this.common.error({title: '注册失败', msg: '用户名已经存在'});
      } else {
        this.common.error({title: '系统异常', msg: '出BUG了，请联系管理员qq253498229'});
      }
    });
  }
}
