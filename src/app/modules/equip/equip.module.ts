import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {EquipComponent} from './equip/equip.component';
import {RouterModule, Routes} from '@angular/router';
import { DetailComponent } from './detail/detail.component';

const routes: Routes = [
  {path: '', component: EquipComponent}
];

@NgModule({
  declarations: [EquipComponent, DetailComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class EquipModule {
}
