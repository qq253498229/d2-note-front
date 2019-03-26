import {Injectable} from '@angular/core';
import * as _ from 'underscore';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NoteService {

  NOTE_KEY = 'note';

  constructor(
    private http: HttpClient
  ) {
  }

  getList() {
    return this.http.get('/api/note');
  }

  setList(obj: any): void {
    localStorage.setItem(this.NOTE_KEY, JSON.stringify(obj || []));
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
    /*if (detail.id) {
      const list = _.map(this.getList(), s => {
        if (s.id === detail.id) {
          return detail;
        } else {
          return s;
        }
      });
      this.setList(list);
    } else {
      const list = this.getList();
      detail.id = uuid();
      list.unshift(detail);
      this.setList(list);
    }*/

  }

  delete(id: any) {
    /* console.log(id);
     const list = _.reject(this.getList(), s => {
       return s.id === id;
     });
     this.setList(list);*/
  }

  getByAccountId(id: string) {
    /*if (!id) {
      return [];
    }
    return _.filter(this.getList(), s => {
      return s.account === id;
    });*/
  }
}
