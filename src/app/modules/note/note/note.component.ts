import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {NoteService} from '../note.service';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.scss']
})
export class NoteComponent implements OnInit {
  list = [];

  constructor(
    private router: Router,
    private service: NoteService
  ) {
  }

  ngOnInit() {
    this.list = this.service.getList();
  }

  add() {
    this.router.navigate(['/note/add']);
  }

  detail(id: any) {
    this.router.navigate(['/note', id]);
  }
}
