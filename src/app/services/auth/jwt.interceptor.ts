import { Injectable, Inject, Injector } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { tokenNotExpired, JwtHelper } from 'angular2-jwt';
import 'rxjs/add/observable/fromPromise';
import 'rxjs/add/operator/mergeMap';
import { Config } from '../../config';
import { StaffIdentityService } from './staff-identity.service';


@Injectable()
export class JwtInterceptor implements HttpInterceptor {
  tokenGetter: () => string | Promise<string>;
  headerName: string;
  authScheme: string;
  whitelistedDomains: Array<string | RegExp>;
  blacklistedRoutes: Array<string | RegExp>;
  throwNoTokenError: boolean;
  skipWhenExpired: boolean;
 constructor(public inj: Injector,private config: Config) {}

    handleInterception(
    token: string,
    request: HttpRequest<any>,
    next: HttpHandler
  ) {
    let tokenIsExpired: boolean;
    if (!token && this.throwNoTokenError) {
      console.log('No Token present !');
      throw new Error('Could not get token from tokenGetter function.');
    }
    const helper = new JwtHelper();
    const decodedToken = helper.decodeToken(token);
    const isExpired = helper.isTokenExpired(token);

    tokenIsExpired = token ? helper.isTokenExpired(token) : true;

    if (token && tokenIsExpired) { 
      console.log('token is expired ..!');
      request = request.clone();
    } else if (token) {
      request = request.clone({
        headers: request.headers.set('Authorization', 'Bearer ' + token)
      });
    }
    return next.handle(request);
  }

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    if (request.url === `${this.config.endpoints.staffIdentity}/authenticate`) {
        console.log('skipping injection for auth url');
        return next.handle(request);
    }

    const auth = this.inj.get(StaffIdentityService);
    const token: any = auth.getToken();

    if (token instanceof Promise) {
      return Observable.fromPromise(token).mergeMap((asyncToken: string) => {
        return this.handleInterception(asyncToken, request, next);
      });
    } else {
      return this.handleInterception(token.value, request, next);
    }
  }
}