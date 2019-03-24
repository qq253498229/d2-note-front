import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {NavigatorComponent} from './commons/navigator/navigator.component';

const routes: Routes = [
  {
    path: '', component: NavigatorComponent,
    children: [
      {path: '', redirectTo: '/equipment', pathMatch: 'full'},
      {path: 'equipment', loadChildren: './modules/equipment/equipment.module#EquipmentModule'},
      {path: 'store', loadChildren: './modules/store/store.module#StoreModule'},
      {path: 'note', loadChildren: './modules/note/note.module#NoteModule'},
      {path: 'my', loadChildren: './modules/my/my.module#MyModule'}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
