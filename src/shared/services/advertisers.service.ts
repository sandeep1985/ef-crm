import { Injectable} from '@angular/core';
import { HttpClient, HttpHeaders  } from '@angular/common/http';
import { Login } from './../models/login';
import { Observable } from 'rxjs';


@Injectable()
export class AdvertiserService {
  constructor(
    public _http: HttpClient
  ) {
  }

  getAdvertisers (name:any, offset: any): Observable<Login> {
    let url = "https://www.electrical-training.com/crm/api.php?action=fetch_advertisers&name="+name+'&offset='+offset;
    const httpOptions = {
        headers: new HttpHeaders({
        })
      };
    return this._http.get<Login>(url, httpOptions)
      .pipe(
        // catchError(this.handleError('error', user_login))
      );
  }
}