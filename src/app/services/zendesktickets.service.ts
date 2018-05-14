import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Config } from '../config';
import { Ticket } from '../../timeline/models/tickets';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ZendeskticketsService {
  /*constructor( _http: HttpClient, _config: Config) {
    super('/zendesktickets',  _http, _config);
   }*/
   baseUrl: string;
   constructor(private _http: HttpClient,
    private _config: Config) {
    this.baseUrl = _config.endpoints.apiGateway + '/accounts/';
  }
  getTickets(accountNumber: string): Observable<Array<Ticket>> {
    return this._http.get<Array<Ticket>>(this.baseUrl + accountNumber +  '/zendesktickets')
    .map(
      response => response
    );
 }

}
