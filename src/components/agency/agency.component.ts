import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'ef-agency',
  templateUrl: './agency.component.html'
})

export class AgencyComponent implements OnInit {
  constructor( ) {

  }

ngOnInit() {
    console.log('Agency');
}


}