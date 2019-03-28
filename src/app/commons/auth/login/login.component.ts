import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {AuthService} from '../auth.service';
import {CommonService} from '../../common.service';
import {User} from '../user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  user: {
    username: string,
    password: string
  } = {
    username: '',
    password: ''
  };

  constructor(
    private router: Router,
    private http: HttpClient,
    private service: AuthService,
    private common: CommonService
  ) {
  }

  ngOnInit() {
  }

  registerPage() {
    this.router.navigate(['/register']);
  }

  submit() {
    this.service.login(this.user).subscribe(res => {
      this.service.saveAuth(res).subscribe(res1 => {
        const user = new User();
        user.id = res1[`id`];
        user.nickname = res1[`nickname`];
        user.authorities = res1[`authorities`];
        this.service.setUser(user);
        this.router.navigate(['/']);
        this.common.toast({msg: '登录成功', seconds: 1500});
      });
    }, () => {
      this.common.error({title: '登录失败', msg: '请检查用户名或密码是否正确'});
    });
  }
}
