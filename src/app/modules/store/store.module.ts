import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {StoreComponent} from './store/store.component';
import {RouterModule, Routes} from '@angular/router';
import {DetailComponent} from './detail/detail.component';

const routes: Routes = [
  {path: '', component: StoreComponent},
  {path: 'add', component: DetailComponent},
  {path: ':id', component: DetailComponent}
];

@NgModule({
  declarations: [StoreComponent, DetailComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class StoreModule {
}
