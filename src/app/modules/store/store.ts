import {Note} from '../note/note';

export class Store {
  id: number;
  name: string;
  notes: Note[];


  constructor() {
    this.id = 0;
    this.name = '';
    this.notes = [];
  }
}
