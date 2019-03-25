import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NoteComponent} from './note/note.component';
import {RouterModule, Routes} from '@angular/router';
import {DetailComponent} from './detail/detail.component';
import {FormsModule} from '@angular/forms';

const routes: Routes = [
  {path: '', component: NoteComponent},
  {path: 'add', component: DetailComponent},
  {path: ':id', component: DetailComponent}
];

@NgModule({
  declarations: [NoteComponent, DetailComponent],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class NoteModule {
}
