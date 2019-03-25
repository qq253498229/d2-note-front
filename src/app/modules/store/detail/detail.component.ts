import {Component, OnInit} from '@angular/core';
import {StoreService} from '../store.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

  detail;

  constructor(
    private service: StoreService,
    private router: Router,
    private route: ActivatedRoute
  ) {
  }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.detail = this.service.get(id);
  }

  save() {
    this.service.save(this.detail);
    this.router.navigate(['/store']);
  }

  delete(id: any) {
    this.service.delete(id);
    this.router.navigate(['/store']);
  }
}
