import {Component, OnInit} from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { Login } from './../../models/login';
import {UserService} from './../../services/login.service';
import {Router} from '@angular/router';

declare var window: any;

@Component({
  selector: 'ef-login',
  templateUrl: './login.component.html'
})

export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  model = new Login('', '');
  isLoggedIn : any;
  constructor(private _userService : UserService, private _router : Router ) {

  }

ngOnInit() {
    this.loginForm = new FormGroup({
        'email': new FormControl(this.model.email, [
          Validators.required
        ]),
        'password': new FormControl(this.model.password,[
          Validators.required
        ])
      });
   this.isLoggedIn = localStorage.getItem('logged');  
   if(this.isLoggedIn=='true'){
    this._router.navigateByUrl('/dashboard');
   }else{
    this._router.navigateByUrl('/login');
   }
   console.log(window.location,'&&&&&&&&&&&');
}

onSubmit(){
    this._userService.login(this.model.email, this.model.password)
    .subscribe((data :any) =>  {
      if(!data.error){
        localStorage.setItem('logged','true');
        window.location.href = window.location.origin + '/dashboard';
        //this._router.navigateByUrl('/dashboard');
      }else{
        console.log('Wrong');
      }
    });
}

savePassword(){
    console.log('save password');
}

}