import { Injectable, Type, Injector } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor} from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { StaffIdentityService } from './staff-identity.service';
import { Config } from '../../config';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
    /*  constructor(public auth: StaffIdentityService) {   }*/
    constructor(public inj: Injector,private config: Config) {}

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        if (req.url === `${this.config.endpoints.staffIdentity}/authenticate`) {
            console.log('skipping injection for auth url');
            return next.handle(req);
        }
        const auth = this.inj.get(StaffIdentityService);

        const idToken = auth.getToken();

        if (idToken) {
            req = req.clone({
                headers: req.headers.set('Authorization',
                                         'Bearer ' + idToken)
            });
        } else {
            auth.authenticate();
        }

        return next.handle(req);
    }
}
