import {Routes} from '@angular/router';
import { LoginComponent } from './../shared/components/login/login.component';
import { DashboardComponent } from './../components/dashboard/dashboard.component';

export const SITE_ROUTES: Routes = [

  {
    path: 'login',
    component: LoginComponent,
    // children: [
    //   {
    //     path: '',
    //     component: HomeComponent,
    //     canActivate: [LoginGuard]
    //   }
    // ]
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  },
];
export const AUTH_PROVIDERS = [
];