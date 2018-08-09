import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { LoginComponent } from './../shared/components/login/login.component';
import {UserService} from './../shared/services/login.service';

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
  ],
  declarations: [
    AppComponent,
    LoginComponent
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
