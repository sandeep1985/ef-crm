import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'ef-crm';
  isLoggedIn :any ;
  constructor(private _router : Router ) {

  }

ngOnInit(){
  if(this.isLoggedIn=='true'){
    this._router.navigateByUrl('/dashboard');
   }else{
    this._router.navigateByUrl('/login');
   }
  
}  
}
