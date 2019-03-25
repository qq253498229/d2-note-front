import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.scss']
})
export class NoteComponent implements OnInit {
  list = [
    {name: 'MF-SOR', complete: false, id: 1},
    {name: 'BH-PAL', complete: true, id: 2},
    {name: 'KC-AMA', complete: false, id: 3},
    {name: 'KB-NEC', complete: false, id: 4}
  ];

  constructor(
    private router: Router
  ) {
  }

  ngOnInit() {
  }

  add() {
    this.router.navigate(['/note/add']);
  }

  detail(id: any) {
    this.router.navigate(['/note/add', id]);
  }
}
