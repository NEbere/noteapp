import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operators';
import { Config } from '../../config';
import { tokenNotExpired, JwtHelper } from 'angular2-jwt';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/delay';

@Injectable()
export class StaffIdentityService {

    constructor(
        private http: HttpClient,
        private config: Config
    ) { }

    private authenticateUser(): Observable<string> {
        return this.http.post<AuthenticateUserResponse>(`${this.config.endpoints.staffIdentity}/authenticate`,
                new AuthenticateUserRequest(), { withCredentials: true })
            .pipe(map(res => {
                    sessionStorage.setItem('jwtToken', res.jwt);
                    return res.jwt;
                }
            ));
    }


    getToken() {
        if (!this.checkToken()) {
            console.log('Token not valid, authenticating...');
            return this.authenticate();
        } else {
            console.log('Token is VALID!');
            return Observable.of(sessionStorage.getItem('jwtToken'));
        }
    }

    checkToken() {

        const helper = new JwtHelper();
        const token = sessionStorage.getItem('jwtToken');
        if (token === null) { console.log('no token present'); return null; }
        const decodedToken = helper.decodeToken(token);
        const isExpired = helper.isTokenExpired(token);
        if (isExpired) {
            console.log('token is expired');
        }
        return (isExpired) ? null : token;

    }
    authenticate(): Promise<string> {
        return this.authenticateUser()
            .toPromise()
            .then(jwt => `${jwt}`);
    }
}

interface AuthenticateUserResponse {
    jwt: string;
}

class AuthenticateUserRequest { }
