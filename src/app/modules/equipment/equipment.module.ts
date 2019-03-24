import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {EquipmentComponent} from './equipment/equipment.component';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {path: '', component: EquipmentComponent}
];

@NgModule({
  declarations: [EquipmentComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class EquipmentModule {
}
