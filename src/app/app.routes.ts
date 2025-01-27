import { Routes } from '@angular/router';
import {MainComponent} from './main/main.component';
import {LoginComponent} from './login/login.component';
import {AuthenticationGuard} from './auth/authentication.guard';

export const routes: Routes = [{
  path: '',
  canActivate: [AuthenticationGuard],
  component: MainComponent
}, {
  path: 'login',
  component: LoginComponent
}];
