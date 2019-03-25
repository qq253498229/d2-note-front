import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {EquipmentComponent} from './equipment/equipment.component';
import {RouterModule, Routes} from '@angular/router';
import { DetailComponent } from './detail/detail.component';

const routes: Routes = [
  {path: '', component: EquipmentComponent}
];

@NgModule({
  declarations: [EquipmentComponent, DetailComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class EquipmentModule {
}
