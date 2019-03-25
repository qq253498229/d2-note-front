import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NoteComponent} from './note/note.component';
import {RouterModule, Routes} from '@angular/router';
import {DetailComponent} from './detail/detail.component';

const routes: Routes = [
  {path: '', component: NoteComponent},
  {path: 'add', component: DetailComponent},
  {path: 'add/:id', component: DetailComponent}
];

@NgModule({
  declarations: [NoteComponent, DetailComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class NoteModule {
}
