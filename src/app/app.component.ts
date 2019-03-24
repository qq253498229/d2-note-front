import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  styles: [
    '@import "https://res.wx.qq.com/open/libs/weui/1.1.3/weui.min.css";'
  ],
})
export class AppComponent {
  title = 'd2-note-front';
}
