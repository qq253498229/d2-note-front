import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {NavigatorComponent} from './navigator/navigator.component';

const routes: Routes = [
  {path: '', component: NavigatorComponent}
];

@NgModule({
  declarations: [NavigatorComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class CommonsModule {
}
