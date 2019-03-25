import {Component, OnInit} from '@angular/core';
import {StoreService} from '../store.service';
import {Router} from '@angular/router';

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

  constructor(
    private service: StoreService,
    private router: Router
  ) {
  }

  ngOnInit() {
    this.list = this.service.list || [];
  }

  add() {
    this.router.navigate(['/store/add']);
  }

  detail(id: any) {
    this.router.navigate(['/store', id]);
  }
}
