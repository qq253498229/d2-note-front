import {Injectable} from '@angular/core';
import * as _ from 'underscore';
import {v4 as uuid} from 'uuid';

@Injectable({
  providedIn: 'root'
})
export class NoteService {

  NOTE_KEY = 'note';

  constructor() {
  }

  getList(): any[] {
    return JSON.parse(localStorage.getItem(this.NOTE_KEY) || '[]');
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
    if (detail.id) {
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
      list.push(detail);
      this.setList(list);
    }

  }

  delete(id: any) {
    console.log(id);
    const list = _.reject(this.getList(), s => {
      return s.id === id;
    });
    this.setList(list);
  }
}
