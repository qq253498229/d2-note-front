import {Injectable} from '@angular/core';
import * as _ from 'underscore';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NoteService {

  constructor(
    private http: HttpClient
  ) {
  }

  getList() {
    return this.http.get('/api/note');
  }

  get(id: string): any {
    if (id) {
      return _.find(this.getList(), s => {
        return s.id === id;
      });
    } else {
      return {
        id: null,
        name: '',
        account: 0
      };
    }
  }

  save(detail: any) {
    console.log(detail);

  }

  delete(id: any) {
    console.log(id);
  }

  getByAccountId(id: string) {
    return this.http.get('/api/account/' + id);
  }
}
