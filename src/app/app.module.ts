import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { LoginComponent } from './../shared/components/login/login.component';
import { DashboardComponent } from './../components/dashboard/dashboard.component';
import {UserService} from './../shared/services/login.service';
import {Routes, RouterModule} from '@angular/router';
import { ToolbarComponent } from './../components/toolbar/toolbar.component';
import { AdvertisersComponent } from './../components/advertisers/advertisers.component';
// import { SITE_ROUTES} from './../routes/site.routes';

const appRoutes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'advertisers',
    component: AdvertisersComponent
  },
];

@NgModule({
  imports: [
    //SITE_ROUTES,
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    FormsModule,
  ],
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    ToolbarComponent,
    AdvertisersComponent
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
