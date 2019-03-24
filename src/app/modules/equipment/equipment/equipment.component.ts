import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-equipment',
  templateUrl: './equipment.component.html',
  styleUrls: ['./equipment.component.scss']
})
export class EquipmentComponent implements OnInit {

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
