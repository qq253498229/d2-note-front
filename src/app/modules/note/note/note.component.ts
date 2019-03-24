import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.scss']
})
export class NoteComponent implements OnInit {
  list = [
    {name: 'MF-SOR', complete: false},
    {name: 'BH-PAL', complete: true},
    {name: 'KC-AMA', complete: false},
    {name: 'KB-NEC', complete: false}
  ];

  constructor() {
  }

  ngOnInit() {
  }

  add() {
    this.list.push({name: 'TEST', complete: false});
  }
}
