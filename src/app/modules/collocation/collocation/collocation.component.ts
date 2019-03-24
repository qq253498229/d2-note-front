import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-collocation',
  templateUrl: './collocation.component.html',
  styleUrls: ['./collocation.component.scss']
})
export class CollocationComponent implements OnInit {

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
