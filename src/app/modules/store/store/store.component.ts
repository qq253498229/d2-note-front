import {Component, OnInit} from '@angular/core';
import {StoreService} from '../store.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.scss']
})
export class StoreComponent implements OnInit {
  list;

  constructor(
    private service: StoreService,
    private router: Router
  ) {
  }

  ngOnInit() {
    this.service.getList().subscribe(res => {
      this.list = res;
    });
  }

  add() {
    this.router.navigate(['/store/add']);
  }

  detail(id: any) {
    this.router.navigate(['/store', id]);
  }
}
