import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CollocationComponent} from './collocation/collocation.component';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {path: '', component: CollocationComponent}
];

@NgModule({
  declarations: [CollocationComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class CollocationModule {
}
