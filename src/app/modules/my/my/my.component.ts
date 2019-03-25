import {Component, OnInit, ViewChild} from '@angular/core';

import * as fs from 'file-saver';
import {NoteService} from '../../note/note.service';
import {StoreService} from '../../store/store.service';

@Component({
  selector: 'app-my',
  templateUrl: './my.component.html',
  styleUrls: ['./my.component.scss']
})
export class MyComponent implements OnInit {
  @ViewChild('file') file;
  errorFlag = false;
  successFlag = false;
  confirmFlag = false;
  clearSuccessFlag = false;

  constructor(
    private noteService: NoteService,
    private storeService: StoreService
  ) {
  }

  ngOnInit() {
  }

  export() {
    const json = {
      note: this.noteService.getList(),
      store: this.storeService.getList()
    };

    const blob = new Blob([JSON.stringify(json)], {type: 'application/json;charset=utf-8'});
    fs.saveAs(blob, '暗黑笔记本存档.json');
  }

  import() {

  }

  change() {
    const file = this.file.nativeElement.files[0];
    if (file.type !== 'application/json') {
      this.errorFlag = true;
      this.file.nativeElement.value = null;
      return;
    }
    this.clearData();
    const reader = new FileReader();
    reader.readAsText(file, 'UTF-8');
    reader.onload = event => {
      const key = 'result';
      console.log(JSON.parse(event.target[key]));
      this.importFromJson(event.target[key]);
      this.successFlag = true;
      this.file.nativeElement.value = null;
      setTimeout(() => {
        this.successFlag = false;
      }, 1500);
    };

    reader.onerror = () => {
      this.file.nativeElement.value = null;
      this.errorFlag = true;
    };
  }

  closeDialog() {
    this.errorFlag = false;
  }

  importFromJson(json: string) {
    const obj = JSON.parse(json);
    this.noteService.setList(obj.note);
    this.storeService.setList(obj.store);
  }

  private clearData(flag?: any) {
    this.noteService.setList([]);
    this.storeService.setList([]);
    if (flag) {
      this.confirmFlag = false;
      this.clearSuccessFlag = true;
      setTimeout(() => {
        this.clearSuccessFlag = false;
      }, 1500);
    }
  }

  clearAllData() {
    this.confirmFlag = true;
  }
}
