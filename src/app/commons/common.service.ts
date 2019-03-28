import {Injectable} from '@angular/core';
import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  private toastSubject = new Subject<string>();
  _TOAST = this.toastSubject.asObservable();

  private toastCloseSubject = new Subject<string>();
  _TOAST_CLOSE = this.toastCloseSubject.asObservable();

  private loadingSubject = new Subject<string>();
  _LOADING = this.loadingSubject.asObservable();

  private loadingCloseSubject = new Subject<string>();
  _LOADING_CLOSE = this.loadingCloseSubject.asObservable();

  private errorSubject = new Subject<string>();
  _ERROR = this.errorSubject.asObservable();

  toast(obj: { msg: string, seconds?: number }) {
    this.toastSubject.next(JSON.stringify(obj));
  }

  toastClose() {
    this.toastCloseSubject.next();
  }

  loading(seconds?: number) {
    this.loadingSubject.next(String(seconds));
  }

  loadingClose() {
    this.loadingCloseSubject.next();
  }

  error(param: { msg: string; title: string }) {
    this.errorSubject.next(JSON.stringify(param));
  }

  constructor() {
  }


}
