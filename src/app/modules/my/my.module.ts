import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MyComponent} from './my/my.component';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {path: '', component: MyComponent}
];

@NgModule({
  declarations: [MyComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class MyModule {
}
