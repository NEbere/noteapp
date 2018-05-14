import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { HttpClient } from '@angular/common/http';
import { Config } from '../config';

@Injectable()
export class BaseService {
  baseUrl: string;
  constructor(private _url: string, private _http: HttpClient, private config: Config) {
    this.baseUrl = config.endpoints.apiGateway + '/accounts/';
  }

 getRecords(accountNumber: string) {
     return this._http.get(this.baseUrl + accountNumber +  this._url)
     .map(
       response => response
     );
  }
}
