import {Injectable} from '@angular/core';
import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  private toastSubject = new Subject<any>();
  _TOAST = this.toastSubject.asObservable();

  private toastCloseSubject = new Subject<string>();
  _TOAST_CLOSE = this.toastCloseSubject.asObservable();

  private loadingSubject = new Subject<string>();
  _LOADING = this.loadingSubject.asObservable();

  private loadingCloseSubject = new Subject<string>();
  _LOADING_CLOSE = this.loadingCloseSubject.asObservable();

  private errorSubject = new Subject<any>();
  _ERROR = this.errorSubject.asObservable();

  private confirmSubject = new Subject<any>();
  _CONFIRM = this.confirmSubject.asObservable();

  toast(obj: { msg: string, seconds?: number }) {
    this.toastSubject.next(obj);
  }

  toastClose() {
    this.toastCloseSubject.next();
  }

  loading(seconds?: number) {
    this.loadingSubject.next(seconds ? String(seconds) : null);
  }

  loadingClose() {
    this.loadingCloseSubject.next();
  }

  error(param: { msg: string; title: string }) {
    this.errorSubject.next(param);
  }

  confirm(obj: { title: string, msg: string, callback: () => void }) {
    this.confirmSubject.next(obj);
  }

  constructor() {
  }


}
