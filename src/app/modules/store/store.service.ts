import {Injectable} from '@angular/core';
import * as _ from 'underscore';
import {v4 as uuid} from 'uuid';

@Injectable({
  providedIn: 'root'
})
export class StoreService {

  STORE_KEY = 'store';

  constructor() {
  }

  getList(): any[] {
    return JSON.parse(localStorage.getItem(this.STORE_KEY) || '[]');
  }

  setList(obj: any): void {
    localStorage.setItem(this.STORE_KEY, JSON.stringify(obj || []));
  }

  get(id: string): any {
    if (id) {
      return _.find(this.getList(), s => {
        return s.id === id;
      });
    } else {
      return {
        id: null,
        name: ''
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
      list.unshift(detail);
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
