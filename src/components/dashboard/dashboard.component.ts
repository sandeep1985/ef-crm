import {Component, OnInit} from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'ef-dashboard',
  templateUrl: './dashboard.component.html'
})

export class DashboardComponent implements OnInit {
  loginForm: FormGroup;
  constructor( ) {

  }

ngOnInit() {
    console.log('============REACHED');
}


}