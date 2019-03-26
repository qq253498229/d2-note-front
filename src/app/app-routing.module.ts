import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {NavigatorComponent} from './commons/navigator/navigator.component';
import {AuthGuard} from './commons/auth/auth.guard';
import {LoginComponent} from './commons/auth/login/login.component';
import {RegisterComponent} from './commons/auth/register/register.component';

const routes: Routes = [
  {
    path: '', component: NavigatorComponent, canActivate: [AuthGuard],
    children: [
      {path: '', redirectTo: '/note', pathMatch: 'full'},
      {path: 'equip', loadChildren: './modules/equip/equip.module#EquipModule'},
      {path: 'store', loadChildren: './modules/store/store.module#StoreModule'},
      {path: 'note', loadChildren: './modules/note/note.module#NoteModule'},
      {path: 'my', loadChildren: './modules/my/my.module#MyModule'}
    ]
  },
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
