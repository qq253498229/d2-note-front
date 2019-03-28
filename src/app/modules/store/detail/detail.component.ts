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
    this.common.loading();
    this.detail = new Store();
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
    this.common.loading();
    this.service.delete(id).subscribe(() => {
      this.router.navigate(['/store']);
      this.common.loadingClose();
    });
  }

  chooseItem(id: any) {
    this.router.navigate(['/note', id]);
  }
}
