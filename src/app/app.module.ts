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
import { AgencyComponent } from './../components/agency/agency.component';
import {AdvertiserService} from './../shared/services/advertisers.service';
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
  {
    path: 'agency',
    component: AgencyComponent
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
    AdvertisersComponent,
    AgencyComponent
  ],
  providers: [UserService,AdvertiserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
