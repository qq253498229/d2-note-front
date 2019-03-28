import {Component, OnInit} from '@angular/core';
import {NoteService} from '../note.service';
import {ActivatedRoute, Router} from '@angular/router';
import {StoreService} from '../../store/store.service';
import {Note} from '../note';
import {Store} from '../../store/store';
import {CommonService} from '../../../commons/common.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

  detail: Note;

  accounts;


  constructor(
    private service: NoteService,
    private storeService: StoreService,
    private router: Router,
    private route: ActivatedRoute,
    private common: CommonService
  ) {
  }

  ngOnInit() {
    this.common.loading();
    this.detail = new Note();
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.service.get(id).subscribe(res => {
        this.detail = res;
        if (this.detail.account == null) {
          this.detail.account = new Store();
        }
      });
    }
    this.storeService.getList().subscribe(res => {
      this.accounts = res;
      this.common.loadingClose();
    });
  }

  save() {
    this.common.loading();
    this.service.save(this.detail).subscribe(() => {
      this.router.navigate(['/note']);
      this.common.loadingClose();
    });
  }

  delete(id: any) {
    this.common.loading();
    this.service.delete(id).subscribe(() => {
      this.router.navigate(['/note']);
      this.common.loadingClose();
    });
  }

}
