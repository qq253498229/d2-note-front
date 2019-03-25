import {Component, OnInit} from '@angular/core';
import {NoteService} from '../note.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

  detail;

  accounts = [
    {code: 1, name: 'mf-sor'},
    {code: 2, name: 'kc-ama'},
    {code: 3, name: 'bo-bar'},
    {code: 4, name: 'kb-nec'},
    {code: 5, name: 'bh-pal'}
  ];


  constructor(
    private service: NoteService,
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
    this.router.navigate(['/note']);
  }
}
