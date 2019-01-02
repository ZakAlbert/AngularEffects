import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListUsersComponent } from './components/pages/list-users/list-users.component';
import { UserDetailsComponent } from './components/pages/user-details/user-details.component';

const ROUTES: Routes = [
  {
    path: 'Home',
    component: ListUsersComponent
  },
  {
    path: 'Usuario/:id',
    component: UserDetailsComponent
  },
  {
    path: '**',
    redirectTo: 'Home'
  }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(ROUTES, {useHash: false})
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
