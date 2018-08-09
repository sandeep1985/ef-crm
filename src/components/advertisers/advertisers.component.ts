import {Component, OnInit} from '@angular/core';
import {AdvertiserService} from './../../shared/services/advertisers.service';

declare var jQuery: any;

@Component({
  selector: 'ef-advertisers',
  templateUrl: './advertisers.component.html'
})

export class AdvertisersComponent implements OnInit {
  isNoRecord : Boolean = false;

  advertisers:any;
  constructor( private _advertisers : AdvertiserService) {

  }

ngOnInit() {
    this.getAdvertisers();
}

getAdvertisers(){
    let name ='';
    this._advertisers.getAdvertisers(name,1)
    .subscribe((data :any) =>  {
      if(!data.error){
        // this.advertisers = {
        //   "name" : data.advertisers_info.name
        // };
        this.advertisers = data.advertisers_info;
        console.log('ok', data.advertisers_info.name);
      }else{
       
        console.log('Wrong');
      }
    });
}

searchAdvertisers(){
  let searchBy = jQuery('#name1').val();
  this.isNoRecord = false;
  console.log(name,'-------------------');
  this._advertisers.getAdvertisers(searchBy, 1)
    .subscribe((data :any) =>  {
      if(!data.error){
        this.advertisers = data.advertisers_info;
        console.log('ok', data.advertisers_info.name);
      }else{
        this.isNoRecord = true;
        console.log('Wrong');
      }
    });
}

}