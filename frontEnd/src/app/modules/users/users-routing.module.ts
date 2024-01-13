import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddUserComponent } from './components/add-user/add-user.component';
import { EditUserComponent } from './components/edit-user/edit-user.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { DeleteUserComponent } from './components/delete-user/delete-user.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent, 
    children:
    [
      {path: '', redirectTo: 'home', pathMatch: 'full'},
      {path: 'home', component: UserListComponent},
      {path: 'add', component: AddUserComponent},
      {path: 'edit/:id', component: EditUserComponent},
      {path: 'delete', component: DeleteUserComponent},
      {path: 'userList', component: UserListComponent},
    ]
  }
]; 

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }