import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Note} from './note';

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

  get(id: string) {
    return this.http.get<Note>(`/api/note/${id}`);
  }

  save(detail: any) {
    return this.http.post('/api/note', detail);
  }

  delete(id: any) {
    return this.http.delete('/api/note/' + id);
  }
}
