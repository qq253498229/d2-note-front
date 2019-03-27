import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StoreService {


  constructor(
    private http: HttpClient
  ) {
  }

  getList() {
    return this.http.get('/api/account');
  }

  get(id: string): any {
    return this.http.get('/api/account/' + id);
  }

  save(detail: any) {
    return this.http.post('/api/account', detail);
  }

  delete(id: any) {
    return this.http.delete('/api/account/' + id);
  }
}
