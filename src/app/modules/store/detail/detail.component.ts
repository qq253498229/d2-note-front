import {Component, OnInit} from '@angular/core';
import {StoreService} from '../store.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Store} from '../store';
import {CommonService} from '../../../commons/common.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

  detail: Store;

  constructor(
    private service: StoreService,
    private router: Router,
    private route: ActivatedRoute,
    private common: CommonService
  ) {
  }

  ngOnInit() {
    this.detail = new Store();
    this.common.loading();
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.service.get(id).subscribe(res => {
        this.detail = res;
        this.common.loadingClose();
      });
    } else {
      this.common.loadingClose();
    }
  }

  save() {
    this.common.loading();
    this.service.save(this.detail).subscribe(() => {
      this.router.navigate(['/store']);
      this.common.loadingClose();
    });
  }

  delete(id: any) {
    this.common.confirm({
      title: '确认删除',
      msg: '您确认删除这个账号吗，这样做会删除账号下的所有记录？',
      callback: () => {
        this.common.loading();
        this.service.delete(id).subscribe(() => {
          this.router.navigate(['/store']);
          this.common.loadingClose();
        });
      }
    });
  }

  chooseItem(id: any) {
    this.router.navigate(['/note', id]);
  }
}
