import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.scss']
})
export class StoreComponent implements OnInit {
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
