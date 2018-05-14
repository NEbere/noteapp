import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Config } from '../config';
import { Observable } from 'rxjs/Observable';
import { Note } from '../../timeline/models/notes';

@Injectable()
export class BillplusnotesService {

  baseUrl: string;

  constructor(private _http: HttpClient, private _config: Config) {
    this.baseUrl = _config.endpoints.apiGateway + '/accounts/';
  }
  getNotes(accountNumber: string): Observable<Array<Note>> {
    return this._http.get<Array<Note>>(this.baseUrl + accountNumber +  '/notes')
    .map(
      response => response
    );
 }

}
