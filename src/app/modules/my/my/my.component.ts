import {Component, OnInit} from '@angular/core';

import {NoteService} from '../../note/note.service';
import {StoreService} from '../../store/store.service';
import {AuthService} from '../../../commons/auth/auth.service';
import {User} from '../../../commons/auth/user';

@Component({
  selector: 'app-my',
  templateUrl: './my.component.html',
  styleUrls: ['./my.component.scss']
})
export class MyComponent implements OnInit {
  user: User;

  constructor(
    private noteService: NoteService,
    private storeService: StoreService,
    private authService: AuthService
  ) {
  }

  ngOnInit() {
    this.user = this.authService.getUser();
  }


}
