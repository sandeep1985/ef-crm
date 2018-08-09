import {Component, OnInit} from '@angular/core';
import {AdvertiserService} from './../../shared/services/advertisers.service';

declare var jquery;

@Component({
  selector: 'ef-advertisers',
  templateUrl: './advertisers.component.html'
})

export class AdvertisersComponent implements OnInit {

  advertisers:any;
  constructor( private _advertisers : AdvertiserService) {

  }

ngOnInit() {
    console.log('advertisers?///////////////////');
    //this.getAdvertisers();
}

// getAdvertisers(){
  
//     this._advertisers.getAdvertisers()
//     .subscribe((data :any) =>  {
//       if(!data.error){
//         // this.advertisers = {
//         //   "name" : data.advertisers_info.name
//         // };
//         this.advertisers = data.advertisers_info;
//         console.log('ok', data.advertisers_info.name);
//       }else{
       
//         console.log('Wrong');
//       }
//     });
// }

searchAdvertisers(){


 
  this._advertisers.getAdvertisers('general')
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

}