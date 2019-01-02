import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListUsersComponent } from './list-users/list-users.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { AppMaterialModule } from '../../app.material.module';

@NgModule({
  declarations: [
    ListUsersComponent,
    UserDetailsComponent
  ],
  exports: [
    ListUsersComponent,
    UserDetailsComponent
  ],
  imports: [
    CommonModule,
    AppMaterialModule
  ]
})
export class PagesModule { }
