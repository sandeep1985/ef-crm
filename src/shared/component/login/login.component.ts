import {Component, OnInit} from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { Login } from './../../models/login';
import {UserService} from './../../services/login.service';



@Component({
  selector: 'ef-login',
  templateUrl: './login.component.html'
})

export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  model = new Login('', '');
  constructor(private _userService : UserService ) {

  }

ngOnInit() {
    this.loginForm = new FormGroup({
        'email': new FormControl(this.model.email, [
          Validators.required,
          Validators.minLength(4)
        ]),
        'password': new FormControl(this.model.password)
      });
}

onSubmit(){
      console.log(this.model.email,'$$$$$',this.model.password);
      let data  ={
          email: this.model.email,
          password : this.model.password
      }
    this._userService.login(this.model.email, this.model.password)
    .subscribe((data :any) =>  {
       console.log(data,'&&&&&&&&&&&&&&&&&');
    });
}

savePassword(){
    console.log('save password');
}

}