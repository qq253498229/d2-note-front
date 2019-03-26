import {Component, OnInit} from '@angular/core';
import {StoreService} from '../store.service';
import {ActivatedRoute, Router} from '@angular/router';
import {NoteService} from '../../note/note.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

  detail;

  list;

  constructor(
    private service: StoreService,
    private noteService: NoteService,
    private router: Router,
    private route: ActivatedRoute
  ) {
  }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.detail = this.service.get(id);
    this.list = this.noteService.getByAccountId(id);
  }

  save() {
    this.service.save(this.detail);
    this.router.navigate(['/store']);
  }

  delete(id: any) {
    this.service.delete(id);
    this.router.navigate(['/store']);
  }

  chooseItem(id: any) {
    this.router.navigate(['/note', id]);
  }
}
