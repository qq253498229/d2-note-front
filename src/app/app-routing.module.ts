import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {NavigatorComponent} from './commons/navigator/navigator.component';

const routes: Routes = [
  {
    path: '', component: NavigatorComponent,
    children: [
      {path: '', loadChildren: './modules/collocation/collocation.module#CollocationModule'}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
