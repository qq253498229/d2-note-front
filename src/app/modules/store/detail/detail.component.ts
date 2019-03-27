import {Component, OnInit} from '@angular/core';
import {StoreService} from '../store.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Store} from '../store';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

  detail: Store;

  list;

  constructor(
    private service: StoreService,
    private router: Router,
    private route: ActivatedRoute
  ) {
  }

  ngOnInit() {
    this.detail = new Store();
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.service.get(id).subscribe(res => {
        this.detail = res;
      });
    }
  }

  save() {
    this.service.save(this.detail).subscribe(() => {
      this.router.navigate(['/store']);
    });
  }

  delete(id: any) {
    this.service.delete(id).subscribe(() => {
      this.router.navigate(['/store']);
    });
  }

  chooseItem(id: any) {
    this.router.navigate(['/note', id]);
  }
}
