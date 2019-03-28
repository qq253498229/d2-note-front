import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {NoteService} from '../note.service';
import {CommonService} from '../../../commons/common.service';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.scss']
})
export class NoteComponent implements OnInit {
  list;
  flag;

  constructor(
    private router: Router,
    private service: NoteService,
    private common: CommonService
  ) {
  }

  ngOnInit() {
    this.flag = false;
    this.common.loading();
    this.service.getList().subscribe(res => {
      this.list = res;
      this.flag = true;
      this.common.loadingClose();
    });
  }

  add() {
    this.router.navigate(['/note/add']);
  }

  detail(id: any) {
    this.router.navigate(['/note', id]);
  }
}
