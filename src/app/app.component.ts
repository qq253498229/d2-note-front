import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {CommonService} from './commons/common.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  toastFlag = false;
  toastMsg = '';

  loadingFlag = false;

  errorFlag = false;
  errorTitle = '';
  errorMsg = '';

  confirmFlag = false;
  confirmTitle = '';
  confirmMsg = '';
  confirmCallback: () => void;

  constructor(
    private common: CommonService,
    private cdRef: ChangeDetectorRef
  ) {

  }

  ngOnInit(): void {
    // toast
    this.common._TOAST.subscribe(res => {
      this.toastFlag = true;
      this.toastMsg = res.msg;
      this.cdRef.detectChanges();
      if (res.seconds) {
        setTimeout(() => {
          this.toastFlag = false;
          this.toastMsg = '';
          this.cdRef.detectChanges();
        }, res.seconds);
      }
    });
    this.common._TOAST_CLOSE.subscribe(() => {
      this.toastFlag = false;
      this.toastMsg = '';
      this.cdRef.detectChanges();
    });
    // loading
    this.common._LOADING.subscribe(seconds => {
      this.loadingFlag = true;
      this.cdRef.detectChanges();
      if (seconds) {
        setTimeout(() => {
          this.loadingFlag = false;
          this.cdRef.detectChanges();
        }, Number(seconds));
      }
    });
    this.common._LOADING_CLOSE.subscribe(() => {
      this.loadingFlag = false;
      this.cdRef.detectChanges();
    });
    // error
    this.common._ERROR.subscribe(res => {
      this.errorFlag = true;
      this.errorTitle = res.title;
      this.errorMsg = res.msg;
    });
    // confirm
    this.common._CONFIRM.subscribe(res => {
      this.confirmFlag = true;
      this.confirmTitle = res.title;
      this.confirmMsg = res.msg;
      this.confirmCallback = res.callback;
    });
  }
}
