import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddUserComponent } from './components/add-user/add-user.component';
import { CongeComponent } from './components/conge/conge.component';
import { LayoutComponentComponent } from './components/layout-component/layout-component.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { UserFormComponent } from './components/user-form/user-form.component';
import { UserComponent } from './components/user/user.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'users',
    component: UserComponent,
  },
  {
    path: 'add',
    component: AddUserComponent,
  },
  {
    path: 'register',
    component: RegisterComponent,
  },
  {
    path: 'edit/:id',
    component: UserFormComponent,
  },
  {
    path: '',
    component: LayoutComponentComponent,
    children: [
      {
        path: 'conge',
        component: CongeComponent,
      },
      {
        path: 'user',
        component: UserComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
