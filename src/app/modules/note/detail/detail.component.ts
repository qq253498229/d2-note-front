import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

  types = [
    {code: 1, name: '武器'},
    {code: 2, name: '副手'},
    {code: 3, name: '头盔'},
    {code: 4, name: '衣服'},
    {code: 5, name: '腰带'},
    {code: 7, name: '手套'},
    {code: 6, name: '鞋'},
    {code: 7, name: '项链'},
    {code: 8, name: '戒指'},
    {code: 9, name: '护身符'},
    {code: 10, name: '附文'}
  ];

  accounts = [
    {code: 1, name: 'mf-sor'},
    {code: 2, name: 'kc-ama'},
    {code: 3, name: 'bo-bar'},
    {code: 4, name: 'kb-nec'},
    {code: 5, name: 'bh-pal'}
  ];


  constructor() {
  }

  ngOnInit() {
  }

  save() {
    console.log(1);
  }
}
