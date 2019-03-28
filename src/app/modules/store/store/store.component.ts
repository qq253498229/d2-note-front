import {Component, OnInit} from '@angular/core';
import {StoreService} from '../store.service';
import {Router} from '@angular/router';
import {CommonService} from '../../../commons/common.service';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.scss']
})
export class StoreComponent implements OnInit {
  list;
  flag;

  constructor(
    private service: StoreService,
    private router: Router,
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
    this.router.navigate(['/store/add']);
  }

  detail(id: any) {
    this.router.navigate(['/store', id]);
  }
}
