import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'ef-toolbar',
  templateUrl: './toolbar.component.html'
})

export class ToolbarComponent implements OnInit {
  constructor(private _router : Router ) {

  }

ngOnInit() {
    console.log('============Toolbar');
}

logout(){
  localStorage.removeItem('logged');
  window.location.href = window.location.origin + '/login';
}


}