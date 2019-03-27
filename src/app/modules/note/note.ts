import {Store} from '../store/store';

export class Note {


  id: number;
  name: string;
  account: Store;


  constructor() {
    this.name = '';
    this.account = new Store();
  }
}
