import { Injectable} from '@angular/core';
import { HttpClient, HttpHeaders  } from '@angular/common/http';
import { Login } from './../models/login';
import { Observable } from 'rxjs';


@Injectable()
export class UserService {
  constructor(
    public _http: HttpClient
  ) {
  }

  login (email:string, password:any): Observable<Login> {
    let url = "https://www.electrical-training.com/crm/api.php?action=user_login&email="+email+"&password="+password;
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