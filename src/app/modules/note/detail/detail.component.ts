import {Component, OnInit} from '@angular/core';
import {NoteService} from '../note.service';
import {ActivatedRoute, Router} from '@angular/router';
import {StoreService} from '../../store/store.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

  detail;

  accounts;


  constructor(
    private service: NoteService,
    private storeService: StoreService,
    private router: Router,
    private route: ActivatedRoute
  ) {
  }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.detail = this.service.get(id);
    this.accounts = this.storeService.getList();
    console.log(this.accounts);
  }

  save() {
    this.service.save(this.detail);
    this.router.navigate(['/note']);
  }

  delete(id: any) {
    this.service.delete(id);
    this.router.navigate(['/note']);
  }
}
